const experience = [
  { company: "ADP", role: "Sr. Member Technical", period: "Nov 2025 - Present" },
  { company: "Google (Contract)", role: "Sr. Software Developer", period: "May 2025 - Oct 2025" },
  { company: "Edgeverve Systems", role: "Software Developer", period: "Aug 2021 - Feb 2025" },
  { company: "LinuxWorld Infotech", role: "Intern", period: "May 2020 - Jul 2020" },
];

const education = [
  {
    school: "Rajasthan Technical University",
    program: "B.Tech • Computer Science & Technology",
    period: "2017 – 2021",
  },
];

const skills = {
  "Backend Development": [
    "Node.js (Express)",
    "Java",
    "Python",
    "Databases (PostgreSQL/MongoDB)",
    "RESTful API",
  ],
  "Frontend Development": [
    "HTML/CSS",
    "JavaScript/TypeScript",
    "React",
    "Unit Testing Frameworks (Jest/Mocha)",
  ],
  DevOps: [
    "Version Control System (Git)",
    "CI/CD Pipelines (Jenkins/GitHub Actions)",
    "Kubernetes",
  ],
};

function SectionHeading({ children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <h3 className="text-lg font-bold text-white">{children}</h3>
      <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
    </div>
  );
}

function TimelineItem({ title, subtitle, period, href }) {
  return (
    <a
      href={href || "#"}
      className="group block border-b border-white/10 py-4 first:pt-0 last:border-none"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-white transition-colors group-hover:text-[#b8ff6a]">
          {title}
        </h4>
        <span className="text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
          →
        </span>
      </div>
      <p className="text-sm text-white/70">{subtitle}</p>
      <p className="text-xs text-white/45">{period}</p>
    </a>
  );
}

export default function Resume() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-14 text-3xl font-extrabold text-white">Resume</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-3xl p-6">
            <SectionHeading>Work Experience</SectionHeading>
            {experience.map((item) => (
              <TimelineItem
                key={item.company}
                title={item.company}
                subtitle={item.role}
                period={item.period}
              />
            ))}
          </div>

          <div className="glass rounded-3xl p-6">
            <SectionHeading>Education</SectionHeading>
            {education.map((item) => (
              <TimelineItem
                key={item.school}
                title={item.school}
                subtitle={item.program}
                period={item.period}
              />
            ))}
          </div>

          <div className="glass rounded-3xl p-6">
            <SectionHeading>Skills</SectionHeading>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="mb-2 font-semibold text-white">{category}</h4>
                  <ul className="space-y-1">
                    {items.map((skill) => (
                      <li key={skill} className="text-sm text-white/70">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
