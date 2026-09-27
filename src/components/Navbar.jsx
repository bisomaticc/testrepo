export default function Navbar({ currentRoute, onNavigate }) {
  const isBlogs = currentRoute?.page === "blogs";

  function handleNav(e, page, targetHash) {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, targetHash);
    }
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-2 sm:px-4 pt-3 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 sm:gap-4">
        <a
          href="mailto:rahulpareek9250@gmail.com"
          className="glass flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white/90 transition-colors hover:text-white hover:border-white/40"
          title="Send email to rahulpareek9250@gmail.com"
        >
          <span aria-hidden="true">✉️</span>
          <span className="hidden md:inline">rahulpareek9250@gmail.com</span>
          <span className="hidden sm:inline md:hidden">rahulpareek9250@gmail.com</span>
          <span className="sm:hidden font-semibold">Email</span>
        </a>

        <nav className="glass scrollbar-none flex items-center gap-0.5 sm:gap-1 overflow-x-auto rounded-full px-1.5 py-1 sm:px-2 sm:py-1.5 text-xs sm:text-sm font-medium text-white">
          <a
            href="#about"
            onClick={(e) => handleNav(e, "home", "#about")}
            className="rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors hover:bg-white/10"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNav(e, "home", "#projects")}
            className="rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors hover:bg-white/10"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={(e) => handleNav(e, "home", "#services")}
            className="rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors hover:bg-white/10"
          >
            Services
          </a>
          <a
            href="#/blogs"
            onClick={(e) => handleNav(e, "blogs")}
            className={`rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors ${
              isBlogs
                ? "bg-white/20 text-[#b8ff6a] font-semibold"
                : "hover:bg-white/10"
            }`}
          >
            Blogs
          </a>
          <a
            href="https://github.com/bisomaticc"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href="/files/Rahul_Pareek_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors hover:bg-white/10"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/rahulpareekdev/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-2.5 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap transition-colors hover:bg-white/10"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
