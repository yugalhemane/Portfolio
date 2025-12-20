import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

const faqs = [
  {
    question: "What is your average response time?",
    answer:
      "I typically respond to inquiries within 24 hours during business days. For urgent matters, I aim to respond within 2-4 hours.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding your requirements and goals, then create a detailed plan with milestones. I follow an agile methodology with regular updates and iterations.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in full-stack development with React, Node.js, and Python. I also have expertise in cybersecurity, DevSecOps, cloud infrastructure, and modern UI/UX design.",
  },
  {
    question: "Do you work with teams or solo?",
    answer:
      "I'm comfortable working both independently and as part of a team. I've led projects and collaborated with cross-functional teams including designers, product managers, and other developers.",
  },
  {
    question: "What is your development philosophy?",
    answer:
      "I believe in clean, maintainable code, security-first development, continuous learning, and delivering solutions that solve real problems efficiently.",
  },
];

export default function TechnicalInsights() {
  const [openIndex, setOpenIndex] = useState(null);
  const { accentColor, accentConfig, theme, themeConfig } = useTheme();
  const accent = getAccentClasses(accentColor);
  const sectionRef = useRef(null);
  const [bgStyle, setBgStyle] = useState({
    background:
      "radial-gradient(circle 400px at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
  });

  // Handle mouse move for interactive grid brightness
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        // Update background style for grid brightness that follows cursor
        const brightnessColor =
          theme === "dark"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(0, 0, 0, 0.08)";
        const midColor =
          theme === "dark"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 0, 0, 0.04)";
        setBgStyle({
          background: `radial-gradient(circle 500px at ${x}% ${y}%, ${brightnessColor} 0%, ${midColor} 30%, transparent 70%)`,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, [theme]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Theme-aware grid and text colors
  const gridColor = theme === "dark" ? "text-slate-600" : "text-slate-400";
  const textPrimary = theme === "dark" ? "text-slate-200" : "text-slate-800";
  const textSecondary = theme === "dark" ? "text-slate-300" : "text-slate-700";
  const cardBg = theme === "dark" ? "bg-slate-900/40" : "bg-white/60";
  const cardBorder =
    theme === "dark" ? "border-slate-800/50" : "border-slate-300/50";
  const hoverBg =
    theme === "dark" ? "hover:bg-slate-800/30" : "hover:bg-slate-100/50";
  const iconColor = theme === "dark" ? "text-slate-950" : "text-white";

  return (
    <motion.section
      ref={sectionRef}
      className="relative mt-20 sm:mt-24 scroll-mt-20 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Grid Background with Mouse Hover Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className={`w-full h-full opacity-20 ${gridColor}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-insights"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-insights)" />
        </svg>
        {/* Bright grid effect that follows mouse cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out"
          style={bgStyle}
        />
      </div>

      {/* Content Container with Padding */}
      <div className="relative z-10 max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold`}>
            <span
              className={`bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
            >
              Technical
            </span>{" "}
            <span className={themeConfig.text}>Insights</span>
          </h2>
          <div
            className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}
          ></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-xl border ${cardBorder} ${cardBg} backdrop-blur-sm overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                borderColor: `${accent.border.replace("border-", "")}/50`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 flex items-center justify-between text-left ${hoverBg} transition-colors`}
              >
                <span className={`font-semibold ${textPrimary} pr-4`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-6 h-6 rounded-full ${accent.bgGradient} flex items-center justify-center`}
                >
                  <svg
                    className={`w-4 h-4 ${iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`px-6 pb-4 ${textSecondary} leading-relaxed`}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
