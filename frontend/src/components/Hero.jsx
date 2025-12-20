import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";
import {
  ReactIcon,
  NodeIcon,
  MongoIcon,
  ExpressIcon,
  JavaScriptIcon,
  NextIcon,
  GitIcon,
} from "./TechIcons";

const roles = [
  "Fullstack Developer",
  "Cybersecurity Enthusiast",
  "DevSecOps Engineer",
  "Problem Solver",
];

// Manually changeable image
const PROFILE_IMAGE = "/profile.jpg";

// Tech icons for outer (big) orbit circle
const outerOrbitIcons = [
  { name: "MongoDB", Icon: MongoIcon, angle: 0 },
  { name: "Express", Icon: ExpressIcon, angle: 60 },
  { name: "Git", Icon: GitIcon, angle: 120 },
  { name: "React", Icon: ReactIcon, angle: 180 },
  { name: "Next.js", Icon: NextIcon, angle: 240 },
  { name: "Node.js", Icon: NodeIcon, angle: 300 },
];

// Tech icons for inner (small) orbit circle
const innerOrbitIcons = [
  { name: "JavaScript", Icon: JavaScriptIcon, angle: 45 },
  { name: "TypeScript", icon: "📘", angle: 135 },
  { name: "Go", icon: "🐹", angle: 225 },
  { name: "Python", icon: "🐍", angle: 315 },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);
  const heroRef = useRef(null);
  const [bgStyle, setBgStyle] = useState({
    background:
      "radial-gradient(circle 400px at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
  });

  // Handle mouse move for interactive grid brightness (white/light colors only)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        // Update background style for grid brightness that follows cursor (white/light)
        setBgStyle({
          background: `radial-gradient(circle 500px at ${x}% ${y}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 70%)`,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  /* =====================
     TYPEWRITER EFFECT
  ====================== */
  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(
        () => setDisplayText(role.slice(0, displayText.length + 1)),
        90
      );
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(
        () => setDisplayText(role.slice(0, displayText.length - 1)),
        45
      );
    } else {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-16 md:pt-24 pb-24 overflow-hidden"
    >
      {/* Interactive Grid Background with Mouse Brightness */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-slate-600"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Bright grid effect that follows mouse cursor (white/light only) - lights up grid lines */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-200 ease-out"
          style={bgStyle}
        />
      </div>

      {/* Background orbs with animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-[28rem] h-[28rem] bg-purple-500/20 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto xl:max-w-[130rem]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ================= LEFT: TEXT ================= */}
          <motion.div variants={itemVariants}>
            <motion.p
              className={`text-xs uppercase tracking-[0.35em] ${accent.text} mb-4 flex items-center gap-2`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className={`w-2 h-2 ${accent.text} rounded-full`}
                style={{ backgroundColor: "currentColor" }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Fullstack • Cybersecurity • DevSecOps
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="block">Hi, I'm</span>
              <motion.span
                className={`text-gradient bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Yugal
              </motion.span>
              <span className="block mt-3">
                I build{" "}
                <motion.span
                  className={`text-gradient bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  secure
                </motion.span>
                ,{" "}
                <motion.span
                  className={`text-gradient bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  intelligent
                </motion.span>{" "}
                web experiences.
              </span>
            </motion.h1>

            <motion.div
              className="mt-6 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-lg text-slate-400">I'm a</span>
              <span
                className={`text-lg font-semibold ${accent.text} min-w-[260px]`}
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              className="mt-6 text-slate-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Passionate about{" "}
              <span className={`${accent.text} font-semibold`}>
                cybersecurity
              </span>{" "}
              and{" "}
              <span className={`${accent.text} font-semibold`}>
                developer tooling
              </span>
              . I turn ideas into real products — from security tools to
              full-stack platforms.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className={`px-6 py-3 rounded-xl bg-gradient-to-r ${accentConfig.gradient} text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-lg ${accent.shadow} flex items-center justify-center gap-2`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT: PROFILE WITH ORBITING ICONS ================= */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Glow background - static, no animation */}
              <div
                className={`absolute -inset-6 rounded-full bg-gradient-to-br ${accentConfig.gradient} blur-2xl opacity-50`}
              />

              {/* Profile Container with Two Orbiting Icon Circles */}
              <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] xl:w-[380px] xl:h-[420px] flex items-center justify-center">
                {/* Profile Image - centered in big circle, perfectly circular, no border */}
                <div
                  className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden"
                  style={{ zIndex: 20 }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Yugal"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://github.com/yugalhemane.png";
                    }}
                  />
                </div>

                {/* Outer (Big) Dashed Orbit Circle */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 5 }}
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="42%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                    className={`${accent.text} opacity-40`}
                  />
                </svg>

                {/* Inner (Small) Dashed Orbit Circle */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 6 }}
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                    className={`${accent.text} opacity-30`}
                  />
                </svg>

                {/* Outer Orbit - Big Circle (Upper) with Tooltips */}
                <motion.div
                  className="absolute inset-0"
                  style={{ zIndex: 10 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {outerOrbitIcons.map((tech, index) => {
                    const IconComponent = tech.Icon;
                    const centerX = 50;
                    const centerY = 45; // Shifted up to position icons more upward
                    const radius = 42; // Big circle
                    const angle = (tech.angle * Math.PI) / 180;
                    const x = centerX + Math.cos(angle) * radius;
                    const y = centerY + Math.sin(angle) * radius;

                    return (
                      <motion.div
                        key={tech.name}
                        className="absolute group cursor-pointer"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          rotate: -360, // Counter-rotate to keep icons upright
                        }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/95 backdrop-blur-md rounded-lg flex items-center justify-center shadow-xl border border-slate-700/50 transition-all duration-300"
                          whileHover={{
                            scale: 1.15,
                            borderColor: "rgba(255, 255, 255, 0.5)",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <IconComponent
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            style={{ filter: "none" }}
                          />
                        </motion.div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium rounded-lg border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl z-50">
                          {tech.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                            <div className="border-4 border-transparent border-t-slate-900/95"></div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Inner Orbit - Small Circle (Middle) */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ zIndex: 11 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {innerOrbitIcons.map((tech, index) => {
                    const IconComponent = tech.Icon;
                    const centerX = 50;
                    const centerY = 50;
                    const radius = 28; // Small circle
                    const angle = (tech.angle * Math.PI) / 180;
                    const x = centerX + Math.cos(angle) * radius;
                    const y = centerY + Math.sin(angle) * radius;

                    return (
                      <motion.div
                        key={tech.name}
                        className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-slate-900/95 backdrop-blur-md rounded-lg flex items-center justify-center shadow-xl border border-slate-700/50"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          rotate: 360, // Counter-rotate (opposite direction)
                        }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {IconComponent ? (
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <span className="text-lg">{tech.icon}</span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-slate-500"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-xs">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
              <motion.div
                className={`w-1.5 h-1.5 ${accent.text} rounded-full mt-2`}
                style={{ backgroundColor: "currentColor" }}
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
