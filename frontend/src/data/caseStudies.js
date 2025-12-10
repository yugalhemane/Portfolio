// src/data/caseStudies.js

// Explicit, handcrafted case studies (for your key projects)
const caseStudies = {
  "Pokedex-Lite": {
    role: "Fullstack Developer",
    problem:
      "Develop a fast, clean way to explore Pokémon data using a modern frontend stack instead of heavy, slow fan sites.",
    solution:
      "Built a React-based UI with search, filtering, and lazy loading of data. Optimized rendering and API calls to feel snappy even on slower devices.",
    challenges:
      "Handling API rate limits, keeping the UI responsive while fetching large datasets, and designing a component structure that stays easy to extend.",
    learnings:
      "Deepened understanding of state management, API error handling, and performance patterns in React.",
  },
  CyberNinja: {
    role: "Game & Backend Designer",
    problem:
      "Create a fun, beginner-friendly way to learn cybersecurity concepts through interactive terminal-style missions.",
    solution:
      "Designed a mission-based flow where users complete realistic security scenarios in a simulated terminal, backed by APIs that track progress.",
    challenges:
      "Balancing realism with simplicity, designing branching scenarios, and structuring the backend to support new missions without rewrites.",
    learnings:
      "Improved at API design, user onboarding patterns, and turning complex security ideas into simple, guided steps.",
  },
  // Add more repos with exact repo names as keys if you want custom text
};

// Fallback: generate a decent “case study” for ANY repo
function buildFallbackStudy(project) {
  const name = project.name || "This project";
  const language = project.language || "a mixed stack";
  const description =
    project.description ||
    "A practical experiment to explore ideas and improve my engineering skills.";

  return {
    role: "Fullstack Developer",
    problem: `Build a real-world project (${name}) to practice ${language} and modern development workflows.`,
    solution: `Implemented ${name} using ${language}, focusing on clean structure, readable code, and a user-friendly interface. The project is integrated with GitHub and kept up to date through active iteration.`,
    challenges:
      "Balancing new technology learning with writing maintainable code, structuring the project to stay extendable, and handling edge cases discovered during testing.",
    learnings:
      "Improved my understanding of project structure, version control workflows, and how to turn an idea into a usable product that I can iterate on over time.",
    description,
  };
}

// Explicit project types for highlighted repos
const explicitProjectTypes = {
  "Pokedex-Lite": "Featured",
  CyberNinja: "Tool",
  // Add more if you like: "portfolio": "Featured", etc.
};

// Fallback project type based on stars & forks
function inferProjectType(project) {
  const stars = project.stars || 0;
  const forks = project.forks || 0;

  if (stars >= 10 || forks >= 2) return "Featured";
  if (forks > 0) return "Library";
  if (stars === 0 && forks === 0) return "Experiment";
  return "Project";
}

// Public API used by components
export function getCaseStudy(project) {
  if (!project) return null;

  if (caseStudies[project.name]) return caseStudies[project.name];
  if (caseStudies[project.fullName]) return caseStudies[project.fullName];

  return buildFallbackStudy(project);
}

export function getProjectType(project) {
  if (!project) return "Project";
  if (explicitProjectTypes[project.name])
    return explicitProjectTypes[project.name];
  if (explicitProjectTypes[project.fullName])
    return explicitProjectTypes[project.fullName];

  return inferProjectType(project);
}
