// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Timeline from "./components/Timeline";
import ProjectModal from "./components/ProjectModal";
import ProjectFilters from "./components/ProjectFilters";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";

function App() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("all");

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const languages = [
    "all",
    ...Array.from(
      new Set(
        projects
          .map((p) => p.language)
          .filter((lang) => lang && lang.trim().length > 0)
      )
    ),
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesLanguage =
      activeLanguage === "all" ||
      (p.language && p.language === activeLanguage);

    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      (p.description || "").toLowerCase().includes(term) ||
      (p.topics || []).some((t) => t.toLowerCase().includes(term));

    return matchesLanguage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <Hero />
        <GithubStats projects={projects} loading={loading} />
        <section id="projects" className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Featured Projects
          </h2>

          <ProjectFilters
            languages={languages}
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectGrid
            projects={filteredProjects}
            loading={loading}
            onSelect={setSelected}
          />
        </section>

        <section id="journey" className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">My Journey</h2>
          <Timeline />
        </section>
        <Contact />
      </main>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
