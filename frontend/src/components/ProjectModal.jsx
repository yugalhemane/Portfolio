import { getCaseStudy } from "../data/caseStudies";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const study = getCaseStudy(project);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="max-w-2xl w-full rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-slate-800/50 shadow-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-full p-2 transition-all w-8 h-8 flex items-center justify-center"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient flex-1">
              {project.name}
            </h3>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-sm font-medium whitespace-nowrap">
              {project.language || "Fullstack"}
            </span>
          </div>
          <p className="text-base text-slate-300 leading-relaxed">
            {project.description || study?.description}
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
          <div>
            <p className="text-xs text-slate-400 mb-1">Stars</p>
            <p className="text-lg font-bold text-yellow-400">⭐ {project.stars}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Forks</p>
            <p className="text-lg font-bold text-cyan-400">{project.forks}</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-slate-400 mb-1">Last updated</p>
            <p className="text-sm font-medium text-slate-300">
              {new Date(project.lastPushed).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          {project.topics?.length ? (
            <div className="col-span-2 md:col-span-4">
              <p className="text-xs text-slate-400 mb-2">Topics</p>
              <div className="flex flex-wrap gap-2">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 rounded text-xs bg-slate-800/50 text-slate-300 border border-slate-700/50"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Case study */}
        {study && (
          <div className="mt-6 border-t border-slate-800 pt-6 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
              <p className="text-xs text-slate-400 mb-1">Role</p>
              <p className="text-sm text-slate-200 font-medium">{study.role}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
              <p className="text-xs text-slate-400 mb-1">Problem</p>
              <p className="text-sm text-slate-200 leading-relaxed">{study.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
              <p className="text-xs text-slate-400 mb-1">Solution</p>
              <p className="text-sm text-slate-200 leading-relaxed">{study.solution}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
              <p className="text-xs text-slate-400 mb-1">Challenges</p>
              <p className="text-sm text-slate-200 leading-relaxed">{study.challenges}</p>
            </div>
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30">
              <p className="text-xs text-cyan-400 mb-1 font-medium">What I Learned</p>
              <p className="text-sm text-slate-200 leading-relaxed">{study.learnings}</p>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-800">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-cyan-500/50 text-center"
          >
            View Code on GitHub
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-6 py-3 rounded-xl border border-slate-600 text-sm hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all text-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
