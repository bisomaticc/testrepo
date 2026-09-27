import { useEffect, useRef } from "react";

// Forest leaf & dandelion seed particle for "The Wind Rises" breeze simulation
class WindParticle {
  constructor(w, h, x, y, isBurst = false) {
    this.reset(w, h, x, y, isBurst);
  }

  reset(w, h, x, y, isBurst = false) {
    this.x = x !== undefined ? x : Math.random() * w;
    this.y = y !== undefined ? y : Math.random() * h;
    this.size = Math.random() * 5 + 3.5;
    
    // Particle types: forest leaf, dandelion seed, or sun mote (komorebi)
    const rand = Math.random();
    if (rand < 0.45) {
      this.type = "leaf";
    } else if (rand < 0.75) {
      this.type = "dandelion";
    } else {
      this.type = "mote";
    }

    if (isBurst) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
    } else {
      this.vx = Math.random() * 1.1 + 0.5; // gentle breeze blowing left-to-right
      this.vy = (Math.random() - 0.35) * 0.7;
    }

    this.rotation = Math.random() * Math.PI * 2;
    this.vRot = (Math.random() - 0.5) * 0.06;
    this.opacity = Math.random() * 0.6 + 0.35;
    this.life = isBurst ? 1.0 : Infinity;
    this.decay = Math.random() * 0.014 + 0.008;

    // Palette: Ghibli forest green, soft spring leaf, warm white dandelion, golden sunbeam
    const leafColors = [
      { r: 76, g: 175, b: 80 },  // vibrant forest leaf
      { r: 129, g: 199, b: 132 }, // soft mint leaf
      { r: 165, g: 214, b: 167 }, // sunlit light green
      { r: 212, g: 225, b: 87 },  // golden-green leaf
    ];
    this.color = leafColors[Math.floor(Math.random() * leafColors.length)];
  }

  update(w, h, mouseWind) {
    // Mouse wind interaction: swirl when cursor moves near
    const dx = this.x - mouseWind.x;
    const dy = this.y - mouseWind.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 150 && dist > 1) {
      const force = (1 - dist / 150) * 3.8;
      this.vx += (dx / dist) * force + mouseWind.vx * 0.18;
      this.vy += (dy / dist) * force + mouseWind.vy * 0.18;
      this.vRot += (Math.random() - 0.5) * 0.25;
    }

    // Gentle natural drift and wobble
    this.vx = this.vx * 0.96 + 0.04 * (Math.random() * 0.8 + 0.5);
    this.vy = this.vy * 0.96 + 0.04 * (Math.sin(this.x * 0.008) * 0.4);

    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.vRot;

    if (this.life !== Infinity) {
      this.life -= this.decay;
      return this.life > 0;
    }

    // Wrap around screen
    if (this.x > w + 25) this.x = -20;
    if (this.x < -30) this.x = w + 10;
    if (this.y > h + 25) this.y = -20;
    if (this.y < -30) this.y = h + 10;

    return true;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    const alpha = this.life !== Infinity ? this.opacity * this.life : this.opacity;
    const { r, g, b } = this.color;

    if (this.type === "leaf") {
      // Stylized watercolor forest leaf
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 1.5, this.size * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.85})`;
      ctx.fill();

      // Leaf vein highlight
      ctx.beginPath();
      ctx.moveTo(-this.size * 1.2, 0);
      ctx.lineTo(this.size * 1.2, 0);
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`;
      ctx.lineWidth = 0.75;
      ctx.stroke();
    } else if (this.type === "dandelion") {
      // Floating dandelion fluff seed
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
      ctx.fill();

      // Delicate seed hairs
      for (let i = 0; i < 6; i++) {
        const ang = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(ang) * this.size * 1.4, Math.sin(ang) * this.size * 1.4);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    } else {
      // Golden sun mote (komorebi sunlight speck)
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.8);
      grad.addColorStop(0, `rgba(254, 240, 138, ${alpha})`);
      grad.addColorStop(0.5, `rgba(250, 204, 21, ${alpha * 0.4})`);
      grad.addColorStop(1, "rgba(250, 204, 21, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 1.8, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

export default function GhibliBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Parallax transform state
  const parallaxRef = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });
  const mouseWindRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0, lastX: 0, lastY: 0 });

  // Interactive mouse tracking
  useEffect(() => {
    function handlePointerMove(e) {
      const { innerWidth: w, innerHeight: h } = window;
      const nx = e.clientX / w - 0.5;
      const ny = e.clientY / h - 0.5;

      // Subtle 3D parallax shift of the forest scene
      parallaxRef.current.targetX = -nx * 18;
      parallaxRef.current.targetY = -ny * 12;

      // Cursor wind velocity for leaf physics
      const mw = mouseWindRef.current;
      mw.vx = e.clientX - mw.lastX;
      mw.vy = e.clientY - mw.lastY;
      mw.x = e.clientX;
      mw.y = e.clientY;
      mw.lastX = e.clientX;
      mw.lastY = e.clientY;
    }

    function handleClick(e) {
      // Trigger burst of wind leaves and dandelion seeds on click
      if (window.__ghibliBurst) {
        window.__ghibliBurst(e.clientX, e.clientY);
      }
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Canvas particle simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 48 }, () => new WindParticle(w, h));
    const burstParticles = [];

    window.__ghibliBurst = (x, y) => {
      for (let i = 0; i < 16; i++) {
        burstParticles.push(new WindParticle(w, h, x, y, true));
      }
    };

    function handleResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    function loop() {
      ctx.clearRect(0, 0, w, h);

      // Smooth parallax interpolation (lerp)
      const p = parallaxRef.current;
      p.currentX += (p.targetX - p.currentX) * 0.05;
      p.currentY += (p.targetY - p.currentY) * 0.05;

      if (containerRef.current) {
        containerRef.current.style.transform = `scale(1.05) translate3d(${p.currentX}px, ${p.currentY}px, 0)`;
      }

      // Smooth decay on mouse velocity
      const mw = mouseWindRef.current;
      mw.vx *= 0.88;
      mw.vy *= 0.88;

      // Update & draw ambient wind particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(w, h, mw);
        particles[i].draw(ctx);
      }

      // Update & draw click burst particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const alive = burstParticles[i].update(w, h, mw);
        if (alive) {
          burstParticles[i].draw(ctx);
        } else {
          burstParticles.splice(i, 1);
        }
      }

      // Soft sunlit atmospheric sheen around cursor
      if (mw.x > 0 && mw.y > 0) {
        const sunGlow = ctx.createRadialGradient(
          mw.x,
          mw.y,
          0,
          mw.x,
          mw.y,
          240
        );
        sunGlow.addColorStop(0, "rgba(254, 240, 138, 0.07)");
        sunGlow.addColorStop(0.5, "rgba(187, 247, 208, 0.03)");
        sunGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = sunGlow;
        ctx.fillRect(0, 0, w, h);
      }

      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      delete window.__ghibliBurst;
    };
  }, []);

  return (
    <div className={`fixed inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Parallax Container with "The Wind Rises" forest easel background */}
      <div
        ref={containerRef}
        className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
        style={{
          backgroundImage: `url(/images/ghibli-bg.jpg)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gentle ambient watercolor lighting vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#05140d]/65" />
      </div>

      {/* Interactive Wind & Leaf Physics Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      />
    </div>
  );
}
