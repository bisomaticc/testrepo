import {
  FaCode,
  FaPaintBrush,
  FaGlobe,
  FaMobileAlt,
  FaCogs,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "End-to-end bespoke software engineered for speed, security, and scale. Specializing in Node.js, Spring Boot, Python, and robust database architectures.",
    tags: ["Backend APIs", "System Architecture", "PostgreSQL", "Python/Java"],
  },
  {
    icon: FaPaintBrush,
    title: "UI Designing",
    description:
      "User-centric design that blends aesthetic beauty with intuitive user experiences. Creating wireframes, high-fidelity prototypes, and cohesive design systems.",
    tags: ["UI/UX Design", "Wireframing", "Design Systems", "Figma"],
  },
  {
    icon: FaGlobe,
    title: "Website Designing & Dev",
    description:
      "Modern, responsive, and performance-driven web applications built with React and Tailwind CSS. Optimized for accessibility, SEO, and lightning-fast load times.",
    tags: ["React", "Tailwind CSS", "Responsive Web", "SEO Optimized"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for iOS and Android delivering fluid user experiences, native performance, and seamless offline-first architectures.",
    tags: ["iOS & Android", "Cross-Platform", "App UI", "API Integration"],
  },
  {
    icon: FaCogs,
    title: "CRM Deployment",
    description:
      "Full CRM configuration, workflow automation, and custom tool integrations to streamline customer pipelines and accelerate business sales velocity.",
    tags: ["CRM Setup", "Workflow Automation", "Pipeline Management", "Integrations"],
  },
  {
    icon: FaRocket,
    title: "Business Solutions",
    description:
      "Strategic technical consulting, cloud deployment, and digital transformation to modernize business processes and reduce operational overhead.",
    tags: ["Digital Transformation", "Cloud Ops", "Consulting", "Process Automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-2 text-xs font-semibold tracking-wider text-[#b8ff6a] uppercase">
            Services &amp; Offerings
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            Open to Providing Software Development Services
          </h2>
          <p className="text-sm leading-relaxed text-white/75 sm:text-base">
            From custom backend engineering and intuitive UI design to mobile apps
            and enterprise CRM deployment, I build reliable, high-impact digital solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="glass group flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 hover:border-white/40 hover:-translate-y-1"
            >
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#b8ff6a] transition-colors group-hover:bg-[#b8ff6a] group-hover:text-[#021208]">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#b8ff6a]">
                  {title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/75">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner */}
        <div className="glass mt-10 flex flex-col items-center justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:p-10">
          <div>
            <h4 className="text-xl font-bold text-white">
              Have a project or business requirement?
            </h4>
            <p className="mt-1 text-sm text-white/70">
              Let's collaborate to bring your idea to life with production-grade engineering.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/rahulpareekdev/"
            target="_blank"
            rel="noreferrer"
            className="glass-strong inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:border-white/40"
          >
            Discuss Your Project <FaArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
