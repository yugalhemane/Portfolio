import { getCaseStudy } from "../data/caseStudies";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const study = getCaseStudy(project);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
      <div className="max-w-lg w-full mx-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-5 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-slate-400 hover:text-slate-200"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-3">
          <h3 className="text-xl font-bold flex items-center gap-2">
            {project.name}
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.language || "Fullstack"}
            </span>
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {project.description || study?.description}
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-3">
          <p>
            <span className="font-semibold text-slate-200">Stars:</span>{" "}
            {project.stars}
          </p>
          <p>
            <span className="font-semibold text-slate-200">Forks:</span>{" "}
            {project.forks}
          </p>
          <p className="col-span-2">
            <span className="font-semibold text-slate-200">Last updated:</span>{" "}
            {new Date(project.lastPushed).toLocaleString()}
          </p>
          {project.topics?.length ? (
            <p className="col-span-2">
              <span className="font-semibold text-slate-200">Topics:</span>{" "}
              {project.topics.join(", ")}
            </p>
          ) : null}
        </div>

        {/* Case study */}
        {study && (
          <div className="mt-3 border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-200">
            <p>
              <span className="font-semibold">Role:</span> {study.role}
            </p>
            <p>
              <span className="font-semibold">Problem:</span> {study.problem}
            </p>
            <p>
              <span className="font-semibold">Solution:</span> {study.solution}
            </p>
            <p>
              <span className="font-semibold">Challenges:</span>{" "}
              {study.challenges}
            </p>
            <p>
              <span className="font-semibold">What I learned:</span>{" "}
              {study.learnings}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="mt-4 flex gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition"
          >
            View Code
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-slate-600 text-sm hover:bg-slate-800 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
