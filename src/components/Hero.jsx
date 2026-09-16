export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24">
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="glass mx-auto max-w-2xl rounded-[2.5rem] px-6 py-10 sm:px-12 sm:py-12">
          <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            <img
              src="/images/profile.png"
              alt="Rahul Pareek"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="font-cursive mb-1 text-3xl sm:text-4xl text-white">
            Hi, I'm Rahul Pareek 👋
          </p>

          <h1 className="mb-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Learn, Code, Repeat
          </h1>
          <p className="mb-6 text-base text-white/80 sm:text-lg">
            ( with lot of coffee ☕ )
          </p>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/85">
            <strong className="text-white">Software Developer</strong> with 5
            years of experience working in Software Development. Proficient in
            JavaScript (Node.js, Express.js, React), Java (Spring Boot), Python
            (Django, Streamlit, Flask), PostgreSQL, etc. Passionate about every
            aspect of software development.
          </p>

          <a
            href="https://www.linkedin.com/in/rahulpareekdev/"
            target="_blank"
            rel="noreferrer"
            className="glass-strong inline-block rounded-full px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
}
