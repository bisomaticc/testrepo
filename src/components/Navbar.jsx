export default function Navbar({ currentRoute, onNavigate }) {
  const isBlogs = currentRoute?.page === "blogs";

  function handleNav(e, page, targetHash) {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, targetHash);
    }
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => handleNav(e, "home")}
          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
        >
          <span aria-hidden="true">✉️</span>
          <span className="hidden sm:inline">rahulpareek9250@gmail.com</span>
          <span className="sm:hidden">Rahul Pareek</span>
        </a>

        <nav className="glass flex max-w-full items-center gap-1 overflow-x-auto rounded-full px-2 py-1.5 text-sm font-medium text-white">
          <a
            href="#about"
            onClick={(e) => handleNav(e, "home", "#about")}
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNav(e, "home", "#projects")}
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={(e) => handleNav(e, "home", "#services")}
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/10"
          >
            Services
          </a>
          <a
            href="#/blogs"
            onClick={(e) => handleNav(e, "blogs")}
            className={`rounded-full px-4 py-2 transition-colors ${
              isBlogs
                ? "bg-white/20 text-[#b8ff6a] font-semibold"
                : "hover:bg-white/10"
            }`}
          >
            Blogs
          </a>
          <a
            href="/files/Rahul_Pareek_Resume.pdf"
            target="_blank"
            rel="noreferrer"
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
