import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["projects", "journey", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50 shadow-lg"
          : "backdrop-blur-md bg-slate-950/40 border-b border-slate-800/30"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg tracking-tight text-gradient hover:scale-105 transition-transform"
        >
          &lt;Yugal.dev /&gt;
        </a>
        <div className="flex gap-6 text-sm items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"></span>
              )}
            </a>
          ))}
          <a
            href="https://github.com/yugalhemane"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
