import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

export default function Navbar() {
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
        <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm items-center">
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
      </nav>
    </motion.header>
  );
}
