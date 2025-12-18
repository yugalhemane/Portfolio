// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import CertificateGrid from "./components/CertificateGrid";
import Timeline from "./components/Timeline";
import ProjectModal from "./components/ProjectModal";
import ProjectFilters from "./components/ProjectFilters";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import certificates from "./data/certificates";

function App() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("all");

  useEffect(() => {
    async function loadProjects() {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const res = await fetch(`${API_URL}/api/projects`);

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();

        // 🛡️ SAFETY GUARD (important for Render cold starts)
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch projects", err);
        setProjects([]); // never let it be non-array
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
      activeLanguage === "all" || (p.language && p.language === activeLanguage);

    const term = searchTerm.toLowerCase();
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      (p.description || "").toLowerCase().includes(term) ||
      (p.topics || []).some((t) => t.toLowerCase().includes(term));

    return matchesLanguage && matchesSearch;
  });

  // Pagination state
  const [projectsPage, setProjectsPage] = useState(1);
  const [certsPage, setCertsPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate paginated projects
  const showAllProjects = activeLanguage === "all" && !searchTerm;
  const paginatedProjects = filteredProjects.slice(
    (projectsPage - 1) * itemsPerPage,
    projectsPage * itemsPerPage
  );
  const projectsTotalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Calculate paginated certificates
  const paginatedCerts = certificates.slice(
    (certsPage - 1) * itemsPerPage,
    certsPage * itemsPerPage
  );
  const certsTotalPages = Math.ceil(certificates.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      <Navbar />
      <main className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Hero />
        <GithubStats projects={projects} loading={loading} />
        <section id="projects" className="mt-16 sm:mt-20 scroll-mt-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>

          <ProjectFilters
            languages={languages}
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectGrid
            projects={paginatedProjects}
            loading={loading}
            onSelect={setSelected}
            currentPage={projectsPage}
            totalPages={projectsTotalPages}
            onPageChange={setProjectsPage}
          />
        </section>

        <section id="certificates" className="mt-20 sm:mt-24 scroll-mt-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
              My Certificates
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>
          <CertificateGrid
            certificates={paginatedCerts}
            loading={false}
            onSelect={setSelected}
            currentPage={certsPage}
            totalPages={certsTotalPages}
            onPageChange={setCertsPage}
          />
        </section>

        <section id="journey" className="mt-20 sm:mt-24 scroll-mt-20">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
              My Journey
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>
          <Timeline />
        </section>
        <Contact />
      </main>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
