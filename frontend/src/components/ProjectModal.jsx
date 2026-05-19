import { getCaseStudy, getProjectType } from "../data/caseStudies";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const study = getCaseStudy(project);
  const type = getProjectType(project);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full mx-4 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-slate-800/50 shadow-2xl relative max-h-[95vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-full p-2 transition-all w-8 h-8 flex items-center justify-center"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[22rem] overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-950 p-8">
            <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-4">
                  {type}
                </p>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {project.description || study.description}
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur-md">
                <p className="text-xs text-slate-400 mb-2">Role</p>
                <p className="text-base font-semibold text-slate-100">{study.role}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <p className="text-xs text-cyan-400 mb-1 font-medium">Problem</p>
                <p className="text-sm text-slate-200 leading-relaxed">{study.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <p className="text-xs text-cyan-400 mb-1 font-medium">Solution</p>
                <p className="text-sm text-slate-200 leading-relaxed">{study.solution}</p>
              </div>
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30">
                <p className="text-xs text-cyan-300 mb-1 font-medium">Outcome</p>
                <p className="text-sm text-slate-100 leading-relaxed">{study.outcome}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
                  <p className="text-xs text-slate-400 mb-1">Challenges</p>
                  <p className="text-sm text-slate-200 leading-relaxed">{study.challenges}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
                  <p className="text-xs text-slate-400 mb-1">What I Learned</p>
                  <p className="text-sm text-slate-200 leading-relaxed">{study.learnings}</p>
                </div>
              </div>
            </div>

            {project.topics?.length ? (
              <div className="mt-6">
                <p className="text-xs text-slate-400 mb-2">Project Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.topics.slice(0, 8).map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-md text-xs bg-slate-800/60 text-slate-300 border border-slate-700/40"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-800">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-cyan-500/50 text-center"
              >
                View Code
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
      </div>
    </div>
  );
}
