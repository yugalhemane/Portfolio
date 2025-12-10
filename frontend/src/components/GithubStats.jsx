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
    <section className="mt-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        GitHub Snapshot
      </h2>
      <p className="text-sm text-slate-300 mb-4">
        A quick look at my public work on GitHub.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-xs text-slate-400">Public Projects</p>
          <p className="text-2xl font-bold mt-1">{totalRepos}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-xs text-slate-400">Total Stars</p>
          <p className="text-2xl font-bold mt-1">{totalStars}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-xs text-slate-400">Primary Stacks</p>
          <p className="text-sm mt-1 text-slate-200">
            {langEntries.slice(0, 3).map(([lang], idx) => (
              <span key={lang}>
                {lang}
                {idx < langEntries.slice(0, 3).length - 1 ? " • " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Language distribution bars */}
      {langEntries.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400 mb-1">
            Project count by primary language
          </p>
          {langEntries.map(([lang, count]) => {
            const percent = Math.round((count / totalLangCount) * 100);
            return (
              <div key={lang} className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span>{lang}</span>
                  <span>
                    {count} repo{count > 1 ? "s" : ""} · {percent}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: `${percent}%` }}
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
