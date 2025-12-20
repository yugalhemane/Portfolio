// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { getProjectType } from "../data/caseStudies";
import { projectImages } from "../data/projectMedia";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

/**
 * ProjectCard
 * - Uses GitHub OG preview: https://opengraph.githubassets.com/1/<owner>/<repo>
 * - If you prefer local images, add to public/projects and map in projectMedia.js
 */

export default function ProjectCard({ project, onClick, index = 0 }) {
  const type = getProjectType(project);
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

  // Prefer GitHub OG image; fallback to local image if provided in mapping
  // project.fullName is like "owner/repo"
  const ogUrl = project.fullName
    ? `https://opengraph.githubassets.com/1/${project.fullName}`
    : null;
  const localImage = projectImages?.[project.name];
  const imageSrc = ogUrl || localImage || null;

  return (
    <motion.button
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-slate-800/50 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all shadow-lg hover:shadow-2xl overflow-hidden relative"
      aria-label={`Open project ${project.name}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hero Image Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/projects/placeholder.png";
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${accentConfig.gradient} opacity-20 flex items-center justify-center`}>
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-sm text-slate-500">Preview Unavailable</p>
            </div>
          </div>
        )}

        {/* Badges overlay on image */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 backdrop-blur-md border border-slate-700/50 text-slate-200 shadow-lg">
            {type}
          </span>
          <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${accent.bgGradient} bg-opacity-90 backdrop-blur-md ${accent.border} border-opacity-60 ${accent.text} shadow-lg`}>
            {project.language || "Fullstack"}
          </span>
        </div>

        {/* Bottom gradient fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Stars */}
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-bold text-xl ${accent.text} group-hover:opacity-90 transition-opacity flex-1`}>
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="font-semibold text-sm text-slate-200">{project.stars || 0}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
          {project.description ||
            "Practical project to explore new tools and improve my skills."}
        </p>

        {/* Topics and Footer */}
        <div className="flex items-center justify-between gap-4 pt-3 border-t border-slate-800/50">
          {project.topics && project.topics.length > 0 ? (
            <div className="flex gap-2 flex-wrap flex-1">
              {project.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/60 text-slate-400 border border-slate-700/30"
                >
                  {topic}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex-1" />
          )}
          
          {/* Arrow indicator */}
          <div className={`flex-shrink-0 w-8 h-8 rounded-full ${accent.bgGradient} bg-opacity-20 flex items-center justify-center border ${accent.border} border-opacity-40 group-hover:bg-opacity-30 group-hover:scale-110 transition-all`}>
            <svg className={`w-4 h-4 ${accent.text} transform group-hover:translate-x-0.5 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </motion.button>
  );
}
