import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";

const activeLangClasses = {
  cyan: "bg-cyan-500/10 border-cyan-400/50 text-cyan-400",
  purple: "bg-purple-500/10 border-purple-400/50 text-purple-400",
  green: "bg-green-500/10 border-green-400/50 text-green-400",
  orange: "bg-orange-500/10 border-orange-400/50 text-orange-400",
  blue: "bg-blue-500/10 border-blue-400/50 text-blue-400",
  pink: "bg-pink-500/10 border-pink-400/50 text-pink-400",
};

export default function ProjectFilters({
  searchTerm,
  onSearchChange,
  projectType,
  onProjectTypeChange,
  selectedLanguage,
  onLanguageChange,
  availableLanguages,
}) {
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);
  const activeClass = activeLangClasses[accentColor] || activeLangClasses.cyan;

  return (
    <div className="mb-8 space-y-4">
      {/* Top Row: Search and Featured/All Toggle */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-2xl group">
          <input
            type="text"
            placeholder="Search projects by problem, tech, or name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full rounded-xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 ${accent.ring} ${accent.focusBorder} transition-all placeholder:text-slate-500`}
          />
          <svg
            className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:${accent.text} transition-colors`}
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

        {/* Featured vs All Toggle */}
        <div className="flex bg-slate-900/40 backdrop-blur-sm p-1 rounded-xl border border-slate-800/80 self-start md:self-auto">
          <button
            onClick={() => onProjectTypeChange("featured")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              projectType === "featured"
                ? `bg-gradient-to-r ${accentConfig.gradient} text-slate-950 shadow-lg`
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => onProjectTypeChange("all")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              projectType === "all"
                ? `bg-gradient-to-r ${accentConfig.gradient} text-slate-950 shadow-lg`
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All Projects
          </button>
        </div>
      </div>

      {/* Bottom Row: Dynamic Language Pills */}
      {availableLanguages.length > 1 && (
        <div className="flex flex-wrap gap-2 items-center pt-2">
          <span className="text-xs text-slate-500 mr-2 uppercase tracking-widest">
            Filter by tech:
          </span>
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                selectedLanguage === lang
                  ? `${activeClass} shadow-[0_2px_10px_rgba(0,0,0,0.2)]`
                  : "border-slate-800/80 text-slate-400 bg-slate-900/20 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
