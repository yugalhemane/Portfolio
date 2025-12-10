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
      className="group w-full text-left rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 transition shadow-md hover:shadow-xl p-0 overflow-hidden
                 transform-gpu hover:-translate-y-1 hover:scale-[1.01] duration-200"
      aria-label={`Open project ${project.name}`}
    >
      {/* Image / OG preview area (if available) */}
      {imageSrc ? (
        <div className="relative h-40 overflow-hidden bg-slate-800">
          <img
            src={imageSrc}
            alt={`${project.name} preview`}
            loading="lazy"
            className="
              w-full h-full object-cover 
              blur-md 
              scale-105 
              transition-all 
              duration-500 
              group-hover:blur-0 
              group-hover:scale-100
            "
            onError={(e) => {
              // If OG or image fails, fallback to a subtle placeholder
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/projects/placeholder.png";
            }}
          />

          {/* subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />

          {/* badges on top of image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-100">
              {type}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-100">
              {project.language || "Fullstack"}
            </span>
          </div>
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
        <div className="p-4">
          <h3 className="font-semibold text-lg truncate">{project.name}</h3>
          <p className="text-sm text-slate-300 line-clamp-2 mt-1">
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
    </button>
  );
}
