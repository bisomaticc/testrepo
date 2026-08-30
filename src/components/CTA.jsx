export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="glass rounded-[2rem] px-6 py-14">
          <p className="font-cursive mb-2 text-3xl text-white">Catcha!</p>
          <h2 className="mb-8 text-3xl font-extrabold text-white sm:text-4xl">
            Got an idea?{" "}
            <a
              href="https://www.linkedin.com/in/rahulpareekdev/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-[#b8ff6a]"
            >
              Let's Connect
            </a>
          </h2>

          <div className="glass-strong inline-flex items-center gap-3 rounded-full px-6 py-3">
            <h4 className="text-sm font-medium text-white">
              Open to Backend, Frontend and Fullstack Openings
            </h4>
            <a
              href="https://www.linkedin.com/in/rahulpareekdev/"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-[#b8ff6a]"
              aria-label="Connect on LinkedIn"
            >
              ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
