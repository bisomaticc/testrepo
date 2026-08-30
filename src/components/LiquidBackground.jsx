import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 6; i++) {
      value += noise(p) * amplitude;
      p *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv -= 0.5;
    uv.x *= uResolution.x / uResolution.y;

    float t = uTime * 0.22;

    vec2 q;
    q.x = fbm(uv * 1.8 + vec2(t, -t * 0.7));
    q.y = fbm(uv * 1.8 + vec2(-t * 0.8, t));

    vec2 r;
    r.x = fbm(uv * 2.4 + q * 4.0 + vec2(t * 0.9, 2.0));
    r.y = fbm(uv * 2.4 + q * 4.0 + vec2(3.0, -t * 1.1));

    float f = fbm(uv * 1.6 + r * 5.5);

    float bands = sin((uv.x * 1.8 + r.x * 3.4 + f * 2.4) * 3.14159);
    bands = smoothstep(-0.35, 1.0, bands);

    vec3 deep   = vec3(0.012, 0.14, 0.055);
    vec3 forest = vec3(0.04, 0.42, 0.18);
    vec3 lime   = vec3(0.38, 0.92, 0.32);
    vec3 silk   = vec3(0.82, 1.0, 0.72);

    vec3 color = mix(deep, forest, f);
    color = mix(color, lime, bands * 0.72);

    float glow = pow(max(0.0, bands), 1.7);
    color += silk * glow * 0.48;

    float vignette = smoothstep(1.55, 0.05, length(uv));
    color *= 0.88 + vignette * 0.22;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function LiquidBackground({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const { clientWidth, clientHeight } = container;
    renderer.setSize(clientWidth, clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(clientWidth, clientHeight),
        },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let animationId = null;

    function renderFrame() {
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(renderFrame);
    }
    animationId = requestAnimationFrame(renderFrame);

    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      material.uniforms.uResolution.value.set(w, h);
    });
    resizeObserver.observe(container);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
