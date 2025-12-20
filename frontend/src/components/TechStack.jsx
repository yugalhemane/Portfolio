import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getAccentClasses } from "../utils/themeClasses";
import { ReactIcon, NodeIcon, MongoIcon, ExpressIcon, JavaScriptIcon, NextIcon, GitIcon } from "./TechIcons";

// Tech Icon Components
const AngularIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#DD0031">
    <path d="M9.93 12.645h4.134L11.996 7.74zM11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.149 19.1l-7.149 3.903-7.152-3.903-1.351-11.57 8.503-2.309 8.501 2.312-1.352 11.567z"/>
  </svg>
);

const VueIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#4FC08D">
    <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z"/>
  </svg>
);

const TypeScriptIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
    <rect x="0" y="0" width="24" height="24" fill="#3178C6"/>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 4.148 4.148 0 01-1.512-.493v-2.63a5.5 5.5 0 003.035.924c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00.074-1.089 1.85 1.85 0 00-.41-.5 3.995 3.995 0 00-.623-.444 7.677 7.677 0 00-.807-.443 5.157 5.157 0 01-.784-.493 2.556 2.556 0 01-.512-.623 1.78 1.78 0 01-.195-.924c0-.657.159-1.163.477-1.517.319-.355.765-.623 1.341-.804.576-.18 1.23-.27 1.962-.27zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#fff"/>
  </svg>
);

const TailwindIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"/>
  </svg>
);

const PythonIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#3776AB">
    <path d="M14.618 1.018a.792.792 0 01.678-.433h5.238c.313 0 .608.148.791.402a.908.908 0 01.14.82 11.61 11.61 0 01-.814 1.253 11.997 11.997 0 01-1.348 1.815 9.775 9.775 0 01-2.668 1.847 10.035 10.035 0 01-1.26.426 8.21 8.21 0 01-2.45.338H8.597a2.766 2.766 0 00-1.953.816 2.794 2.794 0 00-.815 1.953v2.589H2.806a2.766 2.766 0 01-1.953-.815A2.793 2.793 0 010 10.547V5.239c0-.814.327-1.595.908-2.17A3.04 3.04 0 013.055 2.08 11.606 11.606 0 014.31 1.266a11.998 11.998 0 011.815-1.348A9.776 9.776 0 018.833.017c.402-.062.808-.1 1.215-.116a8.22 8.22 0 012.45-.008zm-4.867 1.668a.51.51 0 00-.363.15.52.52 0 00-.15.364.52.52 0 00.15.363.51.51 0 00.363.15.51.51 0 00.364-.15.52.52 0 00.15-.363.52.52 0 00-.15-.364.51.51 0 00-.364-.15zM18.96 20.497a.792.792 0 01-.678.433h-5.238a.954.954 0 01-.791-.402 11.606 11.606 0 01-.814-1.253 11.998 11.998 0 01-1.348-1.815 9.775 9.775 0 01-2.668-1.847 10.035 10.035 0 01-1.26-.426 8.21 8.21 0 01-2.45-.338H2.806a2.766 2.766 0 00-1.953.816 2.794 2.794 0 00-.815 1.953v2.589H.868a2.766 2.766 0 01-1.953-.815A2.793 2.793 0 010 18.761v-5.308c0-.814.327-1.595.908-2.17a3.04 3.04 0 012.17-.908h5.834V8.175a2.766 2.766 0 011.953-.816h6.826a2.766 2.766 0 011.953.816 2.794 2.794 0 01.815 1.953v5.308c0 .814-.327 1.595-.908 2.17a3.04 3.04 0 01-2.17.908h-1.163v1.178a2.766 2.766 0 01-.816 1.953zm-8.162-1.668a.51.51 0 00-.363.15.52.52 0 00-.15.364.52.52 0 00.15.363.51.51 0 00.363.15.51.51 0 00.364-.15.52.52 0 00.15-.363.52.52 0 00-.15-.364.51.51 0 00-.364-.15z"/>
  </svg>
);

const PostgreSQLIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#336791">
    <path d="M23.5594 14.7227c-.3047 2.1805-1.8633 4.4092-4.6055 5.8135-2.8467 1.4492-6.8301 1.4492-9.6768 0-2.8467-1.4492-4.4053-3.6778-4.71-5.8583-.1016-.7227-.0508-1.3955.0508-2.0684C4.1577 6.8818 8.0406 2.9989 12.625 2.9989c4.5844 0 8.4673 3.8829 8.4673 8.4673 0 .673-.1523 1.3458-.1016 2.0684.0508.7227.203 1.3955.5687 2.1878zm-9.1172-2.7812c-.6594-.254-1.3187-.5587-1.3187-1.218 0-.508 1.218-1.472 1.6243-2.1313.3559-.5587.3559-1.167 0-1.7257-.6094-.7119-1.726-1.0146-2.9443-1.0146h-.1525c-.3559-.0508-1.218.254-1.6243.7619-.254.3048-.4062.7119-.4062 1.1191 0 .4062.1525.7619.4062 1.0687.254.3559.5587.7119.9146.9146.3559.203.7619.3048 1.167.4062.4062.0508.7619.1525 1.167.3559.203.1016.4062.203.6094.3559.203.1016.3559.3048.508.508.0508.0508.1016.1525.1525.203.0508.1016.0508.203.0508.3048 0 .203-.0508.4062-.1525.6094-.0508.1016-.1016.203-.203.3048-.1016.0508-.203.1016-.3559.1525-.1525.0508-.3048.0508-.508.0508-.508 0-1.0653-.1525-1.5733-.508z"/>
  </svg>
);

const DockerIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.105h2.119a.186.186 0 00.186-.186V8.78a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.186v2.14c0 .102.084.186.186.186zm-3.128 0h2.119a.186.186 0 00.186-.186V8.78a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.186v2.14c0 .102.085.186.186.186zm-3.128 0h2.119c.103 0 .187-.084.187-.186V8.78a.186.186 0 00-.187-.186H7.727a.186.186 0 00-.186.186v2.14c0 .102.084.186.186.186z"/>
    <path d="M13.32 0c-.508 0-.88.377-.88.88v1.42h-2.12V.88A.886.886 0 008.407 0a.886.886 0 00-.88.88v1.42H5.404V.88A.886.886 0 004.528 0a.886.886 0 00-.88.88v1.42h-.695c-.507 0-.92.41-.92.917v1.347h.004v8.71c0 2.31 1.874 4.183 4.183 4.183h9.302c2.31 0 4.183-1.873 4.183-4.183V5.73c0-.507-.413-.917-.92-.917h-.695V.88A.886.886 0 0013.32 0zM20.52 15.652c0 1.643-1.333 2.976-2.976 2.976H8.243c-1.643 0-2.976-1.333-2.976-2.976V5.728h1.389v1.255c0 .507.41.918.917.918h.695c.507 0 .917-.41.917-.918V5.728h2.119v1.255c0 .507.41.918.917.918h.695c.507 0 .917-.41.917-.918V5.728h2.119v1.255c0 .507.41.918.917.918h.695c.507 0 .917-.41.917-.918V5.728h1.389v9.924z"/>
    <path d="M7.727 9.23H5.608a.186.186 0 00-.186.186v2.14c0 .102.084.186.186.186h2.119a.186.186 0 00.186-.186V9.417a.186.186 0 00-.186-.186zm3.127 0H8.735a.186.186 0 00-.186.186v2.14c0 .102.084.186.186.186h2.119a.186.186 0 00.186-.186V9.417a.186.186 0 00-.186-.186zm3.128 0h-2.119a.186.186 0 00-.186.186v2.14c0 .102.084.186.186.186h2.119a.186.186 0 00.186-.186V9.417a.186.186 0 00-.186-.186zm3.127 0h-2.119a.186.186 0 00-.186.186v2.14c0 .102.084.186.186.186h2.119a.186.186 0 00.186-.186V9.417a.186.186 0 00-.186-.186z"/>
  </svg>
);

const techCategories = {
  frontend: {
    title: "Frontend",
    technologies: [
      { name: "React", Icon: ReactIcon },
      { name: "Next.js", Icon: NextIcon },
      { name: "Angular", Icon: AngularIcon },
      { name: "Vue.js", Icon: VueIcon },
      { name: "TypeScript", Icon: TypeScriptIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "JavaScript", Icon: JavaScriptIcon },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  backend: {
    title: "Backend",
    technologies: [
      { name: "Node.js", Icon: NodeIcon },
      { name: "Python", Icon: PythonIcon },
      { name: "Express", Icon: ExpressIcon },
      { name: "MongoDB", Icon: MongoIcon },
      { name: "PostgreSQL", Icon: PostgreSQLIcon },
      { name: "Go", icon: "🐹" },
      { name: "REST API", icon: "🔌" },
      { name: "GraphQL", icon: "🔷" },
    ],
  },
  design: {
    title: "UI/Design",
    technologies: [
      { name: "Figma", icon: "🎨" },
      { name: "Photoshop", icon: "🖼️" },
      { name: "Illustrator", icon: "✏️" },
      { name: "Framer", icon: "🎭" },
      { name: "Adobe XD", icon: "📐" },
      { name: "Sketch", icon: "✍️" },
    ],
  },
  aiTools: {
    title: "AI & Tools",
    technologies: [
      { name: "ChatGPT", icon: "🤖" },
      { name: "Git", Icon: GitIcon },
      { name: "Docker", Icon: DockerIcon },
      { name: "Kubernetes", icon: "☸️" },
      { name: "AWS", icon: "☁️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Jira", icon: "📋" },
      { name: "Trello", icon: "📊" },
    ],
  },
};

export default function TechStack() {
  const { accentColor, accentConfig } = useTheme();
  const accent = getAccentClasses(accentColor);

  return (
    <motion.section
      id="skills"
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
          className={`text-2xl sm:text-3xl md:text-4xl font-bold`}
        >
          <span className={`bg-gradient-to-r ${accentConfig.gradient} bg-clip-text text-transparent`}>Tech Stack</span> <span className="text-white">Expertise</span>
        </h2>
        <div
          className={`flex-1 h-px bg-gradient-to-r ${accent.divider} to-transparent`}
        ></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(techCategories).map(([key, category], index) => (
          <motion.div
            key={key}
            className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 hover:border-opacity-100 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: `${accent.border.replace('border-', '')}/50` }}
          >
            <h3
              className={`text-xl font-bold mb-4 ${accent.text}`}
            >
              {category.title}
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {category.technologies.map((tech, techIndex) => {
                const IconComponent = tech.Icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8" />
                    ) : (
                      <span className="text-2xl">{tech.icon}</span>
                    )}
                    <span className="text-xs text-slate-300 text-center">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

