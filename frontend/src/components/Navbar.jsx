import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "contact"];
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
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50 shadow-lg"
          : "backdrop-blur-md bg-slate-950/40 border-b border-slate-800/30"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className={`font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          &lt;Yugal.dev /&gt;
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 sm:gap-6 text-xs sm:text-sm items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`relative transition-colors ${
                activeSection === link.href.slice(1)
                  ? accent.text
                  : "text-slate-300 " + accent.textHover
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <AnimatePresence>
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${accent.bgGradient} bg-gradient-to-r`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-2 rounded-lg bg-gradient-to-r ${accentConfig.gradient} text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-lg ${accent.shadow}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg text-slate-300 hover:text-white transition-colors`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 md:hidden border-b border-slate-800/50 bg-slate-950/95 backdrop-blur-xl overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? accent.text
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className={`inline-block px-6 py-2 rounded-lg bg-gradient-to-r ${accentConfig.gradient} text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-lg ${accent.shadow}`}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
