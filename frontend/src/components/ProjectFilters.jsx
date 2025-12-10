// src/components/ProjectFilters.jsx
export default function ProjectFilters({
  languages,
  activeLanguage,
  onLanguageChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search by name, description, tech..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/70"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">
          ⌕
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        {languages.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => onLanguageChange(lang)}
            className={`px-3 py-1 rounded-full text-xs border transition ${
              activeLanguage === lang
                ? "bg-cyan-500 text-slate-950 border-cyan-400"
                : "bg-slate-900/60 text-slate-200 border-slate-700 hover:border-cyan-400/60"
            }`}
          >
            {lang === "all" ? "All" : lang}
          </button>
        ))}
      </div>
    </div>
  );
}
