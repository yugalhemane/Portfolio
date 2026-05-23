// src/data/caseStudies.js

const caseStudies = {
  "Pokedex-Lite": {
    role: "Frontend Developer",
    type: "Product Experience",
    problem:
      "People need a faster, cleaner way to explore Pokemon data without digging through heavy fan sites or confusing layouts.",
    solution:
      "Built a focused React interface with search, filtering, and responsive cards so users can discover Pokemon details quickly.",
    outcome:
      "Turned a public API into a polished browsing experience with clear data presentation and smooth UI flow.",
    challenges:
      "Keeping API calls efficient, handling loading/error states, and making the interface feel fast on smaller screens.",
    learnings:
      "Improved React state handling, API integration, component structure, and performance-minded UI decisions.",
  },
  CyberNinja: {
    role: "Fullstack Developer",
    type: "Security Learning Tool",
    problem:
      "Cybersecurity beginners often learn theory but do not get a guided, interactive way to practice real concepts.",
    solution:
      "Designed a mission-based terminal-style experience where users complete security scenarios and progress through challenges.",
    outcome:
      "Created a learning flow that makes cybersecurity practice feel more engaging, structured, and beginner-friendly.",
    challenges:
      "Balancing realism with simplicity, designing scenario progression, and structuring APIs for future missions.",
    learnings:
      "Improved API design, interactive UX planning, and the ability to explain complex security ideas through product design.",
  },
  portfolio: {
    role: "Fullstack Developer",
    type: "Personal Brand System",
    problem:
      "A developer portfolio must communicate capability quickly without relying only on GitHub stats or raw repository lists.",
    solution:
      "Built a full portfolio system with project case studies, certificates, contact flow, theme controls, and GitHub-backed project loading.",
    outcome:
      "Created a recruiter-facing experience that turns projects, skills, and learning history into a cohesive professional story.",
    challenges:
      "Balancing visual polish, responsive behavior, real data, and a clear narrative that does not overexplain.",
    learnings:
      "Strengthened frontend architecture, design iteration, deployment workflow, and presentation strategy.",
  },
};

function humanizeName(name = "Project") {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildFallbackStudy(project) {
  const name = project.name || "This project";
  const readableName = humanizeName(name);
  const description =
    project.description ||
    "A practical build focused on turning an idea into a usable software experience.";

  return {
    role: "Fullstack Developer",
    type: "Applied Build",
    problem: `Build ${readableName} as a practical solution around a real product idea, not just a code experiment.`,
    solution: `Structured the project around usable features, clean UI flow, and maintainable implementation so the work can be understood quickly by visitors.`,
    outcome:
      "Demonstrates the ability to plan, build, present, and iterate on a complete software idea.",
    challenges:
      "Clarifying scope, keeping the interface understandable, and making the implementation easy to extend.",
    learnings:
      "Improved product thinking, project structure, version control workflow, and practical delivery habits.",
    description,
  };
}

const explicitProjectTypes = {
  "Pokedex-Lite": "Case Study",
  CyberNinja: "Security Tool",
  portfolio: "Portfolio System",
};

export function getCaseStudy(project) {
  if (!project) return null;

  if (caseStudies[project.name]) return caseStudies[project.name];
  if (caseStudies[project.fullName]) return caseStudies[project.fullName];

  const nameLower = project.name?.toLowerCase();
  const fullNameLower = project.fullName?.toLowerCase();

  if (caseStudies[nameLower]) return caseStudies[nameLower];
  if (caseStudies[fullNameLower]) return caseStudies[fullNameLower];

  return buildFallbackStudy(project);
}

export function getProjectType(project) {
  if (!project) return "Project";
  if (explicitProjectTypes[project.name]) {
    return explicitProjectTypes[project.name];
  }
  if (explicitProjectTypes[project.fullName]) {
    return explicitProjectTypes[project.fullName];
  }

  const nameLower = project.name?.toLowerCase();
  const fullNameLower = project.fullName?.toLowerCase();

  if (explicitProjectTypes[nameLower]) {
    return explicitProjectTypes[nameLower];
  }
  if (explicitProjectTypes[fullNameLower]) {
    return explicitProjectTypes[fullNameLower];
  }

  return getCaseStudy(project)?.type || "Project";
}
