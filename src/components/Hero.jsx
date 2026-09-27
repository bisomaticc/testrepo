export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <div className="glass mx-auto w-full max-w-xl rounded-3xl sm:rounded-[2.5rem] px-5 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto mb-5 h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            <img
              src="/images/profile.png"
              alt="Rahul Pareek"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="font-cursive mb-1 text-2xl sm:text-4xl text-white">
            Hi, I'm Rahul Pareek 👋
          </p>

          <h1 className="mb-2 text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Learn, Code, Repeat
          </h1>
          <p className="mb-5 text-sm text-white/80 sm:text-lg">
            ( with lot of coffee ☕ )
          </p>

          <p className="mx-auto mb-6 max-w-lg text-xs leading-relaxed text-white/85 sm:text-sm">
            <strong className="text-white">Software Developer</strong> with 5
            years of experience working in Software Development. Proficient in
            JavaScript (Node.js, Express.js, React), Java (Spring Boot), Python
            (Django, Streamlit, Flask), PostgreSQL, etc. Passionate about every
            aspect of software development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/bisomaticc"
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-white/15"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rahulpareekdev/"
              target="_blank"
              rel="noreferrer"
              className="glass-strong inline-block rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
