// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { getCaseStudy, getProjectType } from "../data/caseStudies";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

const visualThemes = [
  {
    bg: "from-cyan-500/25 via-blue-500/15 to-slate-950",
    line: "bg-cyan-300",
    text: "text-cyan-200",
  },
  {
    bg: "from-emerald-500/25 via-teal-500/15 to-slate-950",
    line: "bg-emerald-300",
    text: "text-emerald-200",
  },
  {
    bg: "from-rose-500/25 via-fuchsia-500/15 to-slate-950",
    line: "bg-rose-300",
    text: "text-rose-200",
  },
  {
    bg: "from-amber-500/25 via-orange-500/15 to-slate-950",
    line: "bg-amber-300",
    text: "text-amber-200",
  },
];

function getThemeIndex(name = "") {
  return [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % visualThemes.length;
}

function ProjectVisual({ project, type }) {
  const theme = visualThemes[getThemeIndex(project.name)];
  const initials = project.name
    .split(/[-_\s]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${theme.bg}`}>
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="absolute left-5 top-5 right-5 rounded-xl border border-white/10 bg-slate-950/65 p-4 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-2">
          <div className={`h-2 w-2/3 rounded-full ${theme.line}`} />
          <div className="h-2 w-11/12 rounded-full bg-slate-700/80" />
          <div className="h-2 w-4/5 rounded-full bg-slate-700/70" />
          <div className="h-2 w-1/2 rounded-full bg-slate-700/60" />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <p className={`text-xs uppercase tracking-[0.25em] ${theme.text}`}>
            {type}
          </p>
          <p className="mt-2 text-3xl font-black text-white">{initials || "PR"}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
            Focus
          </p>
          <p className="text-sm font-semibold text-white">Problem Solving</p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onClick, index = 0 }) {
  const type = getProjectType(project);
  const study = getCaseStudy(project);
  const { accentColor } = useTheme();
  const accent = getAccentClasses(accentColor);

  return (
    <motion.button
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-slate-800/50 bg-slate-900/45 hover:bg-slate-900/70 backdrop-blur-sm transition-all shadow-lg hover:shadow-2xl overflow-hidden relative"
      aria-label={`Open project ${project.name}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      <ProjectVisual project={project} type={type} />

      <div className="p-6 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`text-xs uppercase tracking-[0.2em] ${accent.text} mb-2`}>
              {type}
            </p>
            <h3 className="font-bold text-xl text-slate-100 group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>
          <div className={`flex-shrink-0 w-9 h-9 rounded-full ${accent.bgGradient} bg-opacity-20 flex items-center justify-center border ${accent.border} border-opacity-40 group-hover:bg-opacity-30 group-hover:scale-110 transition-all`}>
            <svg className={`w-4 h-4 ${accent.text} transform group-hover:translate-x-0.5 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs text-slate-500 mb-1">Problem</p>
            <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
              {study.problem}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Outcome</p>
            <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
              {study.outcome}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
          {(project.topics?.length ? project.topics : ["UI", "API", "Delivery"])
            .slice(0, 3)
            .map((topic) => (
              <span
                key={topic}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/40"
              >
                {topic}
              </span>
            ))}
        </div>
      </div>

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </motion.button>
  );
}
