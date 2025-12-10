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
    detail: "Worked on a cybersecurity game and fullstack projects (Angular, Node).",
  },
  {
    year: "2025",
    title: "DevSecOps & Portfolio",
    detail: "Focusing on secure CI/CD, cloud-native apps, and building this portfolio.",
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-l border-slate-700 ml-3 space-y-6">
      {events.map((e) => (
        <li key={e.year} className="ml-4">
          <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-cyan-500 border-2 border-slate-950" />
          <time className="text-xs text-cyan-400">{e.year}</time>
          <h3 className="text-sm font-semibold mt-1">{e.title}</h3>
          <p className="text-xs text-slate-300">{e.detail}</p>
        </li>
      ))}
    </ol>
  );
}
