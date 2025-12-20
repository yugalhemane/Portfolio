// src/components/GithubStats.jsx
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

export default function GithubStats({ projects, loading }) {
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

  if (loading) {
    return (
      <section className="mt-12 sm:mt-16">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-800 rounded w-48 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-slate-800/50 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!projects.length) return null;

  const totalRepos = projects.length;
  const totalStars = projects.reduce((sum, p) => sum + (p.stars || 0), 0);
  const totalForks = projects.reduce((sum, p) => sum + (p.forks || 0), 0);

  // Count languages properly (handle null/undefined) - filter out "Other" if there are real languages
  const langCounts = {};
  projects.forEach((p) => {
    const lang = p.language;
    if (lang && lang.trim().length > 0) {
      langCounts[lang] = (langCounts[lang] || 0) + 1;
    }
  });

  const langEntries = Object.entries(langCounts).sort((a, b) => b[1] - a[1]);
  const totalLangCount = langEntries.reduce((sum, [, c]) => sum + c, 0);
  
  // Only show if we have languages to display
  const hasLanguages = langEntries.length > 0;

  return (
    <motion.section
      className="mt-12 sm:mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-4 mb-4 sm:mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}>
          GitHub Snapshot
        </h2>
        <div className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}></div>
      </motion.div>
      <motion.p
        className="text-sm text-slate-300 mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Latest updates from my GitHub repositories. Projects sorted by recent activity.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <motion.div
          className={`rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 ${accent.borderHover} hover:bg-slate-900/60 transition-all group`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-xs text-slate-400 mb-2">Public Projects</p>
          <p className={`text-3xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
            {totalRepos}
          </p>
        </motion.div>
        <motion.div
          className={`rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 ${accent.borderHover} hover:bg-slate-900/60 transition-all group`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-xs text-slate-400 mb-2">Total Stars</p>
          <p className={`text-3xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
            ⭐ {totalStars}
          </p>
        </motion.div>
        <motion.div
          className={`rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 ${accent.borderHover} hover:bg-slate-900/60 transition-all`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-xs text-slate-400 mb-2">Total Forks</p>
          <p className={`text-3xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}>
            🍴 {totalForks}
          </p>
        </motion.div>
      </div>
      
      {/* Top Languages */}
      {hasLanguages && (
        <motion.div
          className={`rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 mb-8`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-slate-300 mb-4 font-medium">Top Languages</p>
          <div className="flex flex-wrap gap-2">
            {langEntries.slice(0, 8).map(([lang, count]) => (
              <span
                key={lang}
                className={`px-3 py-1 rounded-full ${accent.bgGradient} bg-opacity-10 border ${accent.border} border-opacity-30 ${accent.text} text-xs font-medium`}
              >
                {lang} ({count})
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Language distribution bars */}
      {hasLanguages && (
        <motion.div
          className={`space-y-3 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className={`text-sm ${accent.text} mb-4 font-medium`}>
            Project Distribution by Language
          </p>
          {langEntries.slice(0, 10).map(([lang, count], idx) => {
            const percent = Math.round((count / totalLangCount) * 100);
            return (
              <motion.div
                key={lang}
                className="space-y-2 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
              >
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="font-medium">{lang}</span>
                  <span className={accent.text}>
                    {count} repo{count > 1 ? "s" : ""} · {percent}%
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800/50 overflow-hidden relative">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${accentConfig.gradient} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg ${accent.shadow}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.section>
  );
}
