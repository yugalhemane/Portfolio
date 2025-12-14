// src/components/ProjectFilters.jsx
export default function ProjectFilters({
  languages,
  activeLanguage,
  onLanguageChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <div className="relative w-full md:w-1/2 group">
        <input
          type="text"
          placeholder="Search by name, description, tech..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm px-4 py-2.5 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all placeholder:text-slate-500"
        />
        <svg
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex gap-2 flex-wrap">
        {languages.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => onLanguageChange(lang)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
              activeLanguage === lang
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105"
                : "bg-slate-900/40 text-slate-200 border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/60"
            }`}
          >
            {lang === "all" ? "All" : lang}
          </button>
        ))}
      </div>
    </div>
  );
}
