// src/components/ProjectCard.jsx
import { getProjectType } from "../data/caseStudies";
import { projectImages } from "../data/projectMedia";

/**
 * ProjectCard
 * - Uses GitHub OG preview: https://opengraph.githubassets.com/1/<owner>/<repo>
 * - If you prefer local images, add to public/projects and map in projectMedia.js
 */

export default function ProjectCard({ project, onClick }) {
  const type = getProjectType(project);

  // Prefer GitHub OG image; fallback to local image if provided in mapping
  // project.fullName is like "owner/repo"
  const ogUrl = project.fullName
    ? `https://opengraph.githubassets.com/1/${project.fullName}`
    : null;
  const localImage = projectImages?.[project.name];
  const imageSrc = ogUrl || localImage || null;

  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-slate-800/50 bg-slate-900/40 hover:bg-slate-900/80 hover:border-cyan-400/30 transition-all shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 p-0 overflow-hidden
                 transform-gpu hover:-translate-y-2 hover:scale-[1.02] duration-300 glass"
      aria-label={`Open project ${project.name}`}
    >
      {/* Image / OG preview area (if available) */}
      {imageSrc ? (
        <div className="relative h-48 overflow-hidden bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
          <img
            src={imageSrc}
            alt={`${project.name} preview`}
            loading="lazy"
            className="
              w-full h-full object-cover 
              blur-sm 
              scale-110 
              transition-all 
              duration-700 
              group-hover:blur-0 
              group-hover:scale-100
              group-hover:brightness-110
            "
            onError={(e) => {
              // If OG or image fails, fallback to a subtle placeholder
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/projects/placeholder.png";
            }}
          />

          {/* animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none group-hover:from-slate-950/80 transition-all duration-300" />

          {/* badges on top of image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
            <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 text-slate-100 font-medium shadow-lg group-hover:border-cyan-400/50 transition-colors">
              {type}
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/60 text-cyan-100 font-medium shadow-lg group-hover:bg-cyan-500/30 group-hover:border-cyan-400 transition-all">
              {project.language || "Fullstack"}
            </span>
          </div>
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      ) : (
        // no image fallback: compact card
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-lg truncate">{project.name}</h3>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-600">
                {type}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.language || "Fullstack"}
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-300 line-clamp-2 mt-2">
            {project.description ||
              "Practical project to explore new tools and improve my skills."}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-3">
            <span>⭐ {project.stars}</span>
            <span>
              {project.lastPushed
                ? new Date(project.lastPushed).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : ""}
            </span>
          </div>
        </div>
      )}

      {/* textual summary shown below the image if image exists */}
      {imageSrc && (
        <div className="p-5">
          <h3 className="font-bold text-lg truncate group-hover:text-cyan-400 transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {project.description ||
              "Practical project to explore new tools and improve my skills."}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              <span className="font-medium">{project.stars}</span>
            </div>
            <div className="flex items-center gap-2">
              {project.topics?.slice(0, 2).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 rounded text-[10px] bg-slate-800/50 text-slate-400"
                >
                  {topic}
                </span>
              ))}
              <span className="text-slate-500">
                {project.lastPushed
                  ? new Date(project.lastPushed).toLocaleDateString(undefined, {
                      month: "short",
                      year: "numeric",
                    })
                  : ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
