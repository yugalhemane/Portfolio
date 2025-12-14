// src/components/GithubStats.jsx
export default function GithubStats({ projects, loading }) {
  if (loading || !projects.length) return null;

  const totalRepos = projects.length;
  const totalStars = projects.reduce(
    (sum, p) => sum + (p.stars || 0),
    0
  );

  const langCounts = {};
  projects.forEach((p) => {
    if (!p.language) return;
    langCounts[p.language] = (langCounts[p.language] || 0) + 1;
  });

  const langEntries = Object.entries(langCounts).sort(
    (a, b) => b[1] - a[1]
  );
  const totalLangCount = langEntries.reduce((sum, [, c]) => sum + c, 0);

  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient">
          GitHub Snapshot
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
      </div>
      <p className="text-sm text-slate-300 mb-6">
        A quick look at my public work on GitHub.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-cyan-400/30 hover:bg-slate-900/60 transition-all group">
          <p className="text-xs text-slate-400 mb-2">Public Projects</p>
          <p className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">
            {totalRepos}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-cyan-400/30 hover:bg-slate-900/60 transition-all group">
          <p className="text-xs text-slate-400 mb-2">Total Stars</p>
          <p className="text-3xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">
            ⭐ {totalStars}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-cyan-400/30 hover:bg-slate-900/60 transition-all">
          <p className="text-xs text-slate-400 mb-2">Primary Stacks</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {langEntries.slice(0, 3).map(([lang]) => (
              <span
                key={lang}
                className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Language distribution bars */}
      {langEntries.length > 0 && (
        <div className="space-y-3 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
          <p className="text-sm text-slate-300 mb-4 font-medium">
            Project count by primary language
          </p>
          {langEntries.map(([lang, count], idx) => {
            const percent = Math.round((count / totalLangCount) * 100);
            return (
              <div key={lang} className="space-y-2 group">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="font-medium">{lang}</span>
                  <span className="text-cyan-400">
                    {count} repo{count > 1 ? "s" : ""} · {percent}%
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800/50 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-500/50"
                    style={{ 
                      width: `${percent}%`,
                      animationDelay: `${idx * 100}ms`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
