export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a
          href="mailto:rahulpareek9250@gmail.com"
          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
        >
          <span aria-hidden="true">✉️</span>
          rahulpareek9250@gmail.com
        </a>

        <nav className="glass flex max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-1.5 text-sm font-medium text-white">
          <a
            href="#about"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            About
          </a>
          <a
            href="#projects"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            Projects
          </a>
          <a
            href="#blog"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            Blog
          </a>
          <a
            href="/files/Rahul_Pareek_Resume.pdf"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/rahulpareekdev/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
