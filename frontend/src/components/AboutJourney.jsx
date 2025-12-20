import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

const workExperience = [
  {
    title: "Jr.Software Developer Intern",
    company: "AnkHub Technologies Services",
    period: "December 2024 - July 2025",
    description: "Working on frontend development tasks, backend APIs, authentication flows, and real-world project modules. Gained hands-on experience with production-level code, debugging, and team collaboration.",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science (Cyber Security)",
    institution: "GH Raisoni College of Engineering & Management, Nagpur",
    period: "2021 - 2025",
  },
];

const certifications = [
  {
    name: "Certified Ethical Hacker (CEH) – In Progress",
    provider: "EC-Council",
    period: "2025",
  },
  {
    name: "React Certification",
    provider: "Simplilearn",
    period: "2025",
  },
  {
    name: "JavaScript Certification",
    provider: "Simplilearn",
    period: "2025",
  },
  {
    name: "GHCI 25 Hackathon Participation",
    provider: "GHCI",
    period: "2025",
  },
];

const philosophy = [
  "Full-stack development with a focus on clean, scalable architecture",
  "Cybersecurity-first mindset in all development practices",
  "DevSecOps integration for secure and efficient deployment pipelines",
  "Continuous learning and adaptation to emerging technologies",
  "Problem-solving through innovative and efficient solutions",
];

const skills = [
  { name: "Analytical Problem Solving", icon: "🔍" },
  { name: "Lifelong Learning", icon: "📚" },
];

export default function AboutJourney() {
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

  const TimelineItem = ({ title, subtitle, period, description, isLast }) => (
    <div className="relative pb-6">
      {!isLast && (
        <div className={`absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b ${accentConfig.gradient} opacity-30`} />
      )}
        <div className="flex gap-4">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${accentConfig.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
        <div className="flex-1">
          <h3 className={`font-bold text-lg ${accent.text} mb-1`}>{title}</h3>
          {subtitle && <p className="text-slate-400 text-sm mb-1">{subtitle}</p>}
          <p className="text-slate-500 text-xs mb-2">{period}</p>
          {description && <p className="text-slate-300 text-sm">{description}</p>}
        </div>
      </div>
    </div>
  );

  return (
    <motion.section
      id="journey"
      className="mt-20 sm:mt-24 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-4 mb-8 sm:mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold`}
        >
          <span className={`bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}>About My</span> <span className="text-white">Journey</span>
        </h2>
        <div
          className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}
        ></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Timelines */}
        <div className="space-y-8">
          {/* Work Experience */}
          <motion.div
            className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${accent.text}`}>Work Experience</h3>
            <div className="space-y-0">
              {workExperience.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${accent.text}`}>Education Background</h3>
            <div className="space-y-0">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.degree}
                  subtitle={item.institution}
                  period={item.period}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${accent.text}`}>Certifications</h3>
            <div className="space-y-0">
              {certifications.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.name}
                  subtitle={item.provider}
                  period={item.period}
                  isLast={index === certifications.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Development Philosophy */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
            <h3 className={`text-xl font-bold mb-4 ${accent.text}`}>Development Philosophy</h3>
            <ul className="space-y-3">
              {philosophy.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className={`${accent.text} mt-1`}>→</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: `${accent.border.replace('border-', '')}/50` }}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className={`text-sm font-semibold ${accent.text}`}>{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

