const events = [
  {
    year: "2022",
    title: "Started B.Tech (Cyber Security)",
    detail: "Built a strong foundation in networks, OS, and security concepts.",
  },
  {
    year: "2023",
    title: "Explored Chatbots & LLMs",
    detail: "Created chatbot prototypes using OpenAI APIs and integrations.",
  },
  {
    year: "2024",
    title: "CyberNinja & Fullstack",
    detail:
      "Worked on a cybersecurity game and fullstack projects (Angular, Node).",
  },
  {
    year: "2025",
    title: "DevSecOps & Portfolio",
    detail:
      "Focusing on secure CI/CD, cloud-native apps, and building this portfolio.",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <ol className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-6 sm:space-y-8">
        {events.map((e, idx) => (
          <li key={e.year} className="ml-4 sm:ml-6 relative group">
            {/* Animated dot */}
            <div className="absolute -left-[21px] sm:-left-[29px] top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-950 shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform duration-300" />

            {/* Content card */}
            <div className="p-4 sm:p-5 lg:p-6 rounded-xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-slate-900/60 transition-all duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2">
              <time className="text-xs sm:text-sm font-bold text-cyan-400 mb-2 block">
                {e.year}
              </time>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                {e.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                {e.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
