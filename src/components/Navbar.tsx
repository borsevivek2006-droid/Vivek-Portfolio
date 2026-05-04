import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About",        path: "/about" },
  { label: "Projects",     path: "/projects" },
  { label: "Skills",       path: "/skills" },
  { label: "Achievements", path: "/achievements" },
  { label: "Contact",      path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#c9a84c]/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="group flex items-center gap-1 font-['Playfair_Display'] text-xl font-bold"
        >
          <span className="text-[#c9a84c] group-hover:text-[#e2c97e] transition-colors duration-300">&lt;</span>
          <span className="text-[#e8e8e8] group-hover:text-white transition-colors duration-300">Vivek</span>
          <span className="text-[#c9a84c] group-hover:text-[#e2c97e] transition-colors duration-300">/&gt;</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-['DM_Sans'] font-medium tracking-wide
                 transition-all duration-300 rounded-lg group
                 ${isActive
                   ? "text-[#c9a84c]"
                   : "text-[#6b6b6b] hover:text-[#e8e8e8]"
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  {/* Gold underline dot */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#c9a84c]
                      rounded-full transition-all duration-300
                      ${isActive ? "w-4" : "w-0 group-hover:w-4"}`}
                  />

                  {/* Hover glow */}
                  <span className="absolute inset-0 rounded-lg bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/5 transition-all duration-300" />
                </>
              )}
            </NavLink>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 text-sm font-['DM_Sans'] font-medium rounded-full
              border border-[#c9a84c] text-[#c9a84c]
              hover:bg-[#c9a84c] hover:text-[#0d0d0d]
              hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]
              transition-all duration-300"
          >
            Resume ↗
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-[2px] bg-[#c9a84c] rounded-full transition-all duration-300 ${
              menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-[#c9a84c] rounded-full transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-[#c9a84c] rounded-full transition-all duration-300 ${
              menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 bg-[#0d0d0d]/95 backdrop-blur-md border-t border-[#c9a84c]/10">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={{ animationDelay: `${i * 60}ms` }}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl text-sm
                 font-['DM_Sans'] font-medium transition-all duration-300 group
                 ${isActive
                   ? "text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/20"
                   : "text-[#6b6b6b] hover:text-[#e8e8e8] hover:bg-white/5"
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    {/* Active dot indicator */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? "bg-[#c9a84c]" : "bg-[#6b6b6b] group-hover:bg-[#e8e8e8]"
                      }`}
                    />
                    {link.label}
                  </div>
                  <span className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </>
              )}
            </NavLink>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-4 py-3 text-center text-sm font-['DM_Sans'] font-medium
              rounded-xl border border-[#c9a84c] text-[#c9a84c]
              hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all duration-300"
          >
            Download Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}