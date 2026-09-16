import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: FaInstagram },
  { label: "Twitter", href: "http://twitter.com/", Icon: FaTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahulpareekdev/", Icon: FaLinkedinIn },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:border-white/50"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="glass flex flex-col items-center gap-3 rounded-3xl px-5 py-4 sm:items-end">
          <nav className="flex flex-wrap justify-center gap-5 text-sm font-medium text-white/85 sm:justify-end">
            <a
              href="#projects"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("home", "#projects");
                }
              }}
              className="transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="#services"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("home", "#services");
                }
              }}
              className="transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="#/blogs"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("blogs");
                }
              }}
              className="transition-colors hover:text-white"
            >
              Blogs
            </a>
          </nav>
          <a
            href="mailto:rahulpareek9250@gmail.com"
            className="text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            rahulpareek9250@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
