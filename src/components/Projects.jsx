const projects = [
  {
    title: "Mermaid to JPG",
    tag: "Firefox Add-on",
    description:
      "Paste Mermaid code, render the diagram instantly, and export it as PNG or JPG — no more re-rendering diagrams by hand.",
    href: "https://addons.mozilla.org/addon/mermaid-to-jpg/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-3xl font-extrabold text-white">Projects</h2>
        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-white/70">
          A few things I have shipped. More coming as I keep learning, coding,
          and repeating.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="glass group rounded-3xl p-6 transition-colors hover:border-white/40"
            >
              <p className="mb-2 text-xs font-medium tracking-wide text-[#b8ff6a] uppercase">
                {project.tag}
              </p>
              <h3 className="mb-3 text-xl font-bold text-white">
                {project.title}
                <span className="ml-2 inline-block text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-white/75">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
