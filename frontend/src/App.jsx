// src/App.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import ProjectGrid from "./components/ProjectGrid";
import CertificateGrid from "./components/CertificateGrid";
import AboutJourney from "./components/AboutJourney";
import TechnicalInsights from "./components/TechnicalInsights";
import ProjectModal from "./components/ProjectModal";
import ProjectFilters from "./components/ProjectFilters";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeControls from "./components/ThemeControls";
import { useTheme } from "./contexts/ThemeContext";
import { getAccentClasses } from "./utils/themeClasses";
import certificates from "./data/certificates";

function App() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("all");
  const { theme, themeConfig, accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

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
    <div className={`min-h-screen bg-gradient-to-b ${themeConfig.bg} relative`}>
      <Navbar />
      <Hero />

      {/* Content Sections with Full Width Background, Padded Content */}
      <div className="relative">
        <main className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <TechStack />
          <GithubStats projects={projects} loading={loading} />

          <motion.section
            id="projects"
            className="mt-16 sm:mt-20 scroll-mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
              >
                Latest Works
              </h2>
              <div
                className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}
              ></div>
            </motion.div>

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
          </motion.section>

          <motion.section
            id="certificates"
            className="mt-20 sm:mt-24 scroll-mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}
              >
                My Certificates
              </h2>
              <div
                className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}
              ></div>
            </motion.div>
            <CertificateGrid
              certificates={paginatedCerts}
              loading={false}
              onSelect={setSelected}
              currentPage={certsPage}
              totalPages={certsTotalPages}
              onPageChange={setCertsPage}
            />
          </motion.section>

          <AboutJourney />
        </main>

        {/* Technical Insights and Contact have their own full-width backgrounds */}
        <TechnicalInsights />

        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </div>

      <Footer />

      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Theme Controls */}
      <ThemeControls />
    </div>
  );
}

export default App;
