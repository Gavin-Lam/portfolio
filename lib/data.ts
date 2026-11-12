// All of the site's content lives here. Edit this file to update the page.

export const PROFILE = {
  name: "Gavin Lam",
  location: "Jersey City, NJ",
  email: "gglam1371@gmail.com",
  github: "https://github.com/Gavin-Lam",
  githubLabel: "github.com/Gavin-Lam",
  linkedin: "https://linkedin.com/in/gavin-g-lam/",
  linkedinLabel: "linkedin.com/in/gavin-g-lam",
  resume: "/resume.pdf", // served from public/resume.pdf
  resumeFilename: "Lam_Gavin_Resume.pdf",
  school: "Stevens Institute of Technology",
  degree: "B.S. Computer Science",
  graduation: "May 2026",
  status: "Actively seeking full-time software engineering roles",
};

export const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  line: string; // one line only; the résumé carries the full detail
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Confidential Company (NDA)",
    role: "Database & Backend Engineer",
    period: "Sep 2025 – May 2026",
    line: "Increased processing efficiency by 40% by architecting a centralized Next.js + SQL Server application.",
  },
  {
    company: "Stevens Institute of Technology",
    role: "Course Assistant, Systems & Security",
    period: "Sep 2025 – Dec 2025",
    line: "Supported lab sessions and guided students through hands-on pwn.college exercises.",
  },
  {
    company: "Creative Intell",
    role: "Software Engineer Intern",
    period: "Sep 2024 – Jan 2025",
    line: "Preprocessed specialized data to fine-tune a large language model.",
  },
];

export type ProjectId =
  | "xur"
  | "wrenchlog"
  | "ava"
  | "fittrack"
  | "todo"
  | "pubg"
  | "sql-engine"
  | "cicd";

export type Project = {
  id: ProjectId; // also the anchor on /projects, e.g. /projects#xur
  title: string;
  shortTitle: string; // used in the jump list and the "Also built" line
  tagline: string;
  period: string | null;
  status: string | null;
  featured: boolean; // true = shown as a card on the home page (keep to three)
  points: string[]; // home-page card bullets; keep to two short ones
  problem: string | null; // why the project exists
  summary: string; // what it does
  features: string[];
  decisions: string[] | null; // technical decisions and challenges
  highlight: string | null; // headline result
  stack: string[];
  github: string | null;
  live: string | null;
  liveLabel?: string;
};

// TODO(Gavin): wherever `problem` or `decisions` is null below, the section
// is hidden on /projects. Fill these in with your own words: interviewers
// ask about exactly these things.
export const PROJECTS: Project[] = [
  {
    id: "xur",
    title: "Xur",
    shortTitle: "Xur",
    tagline: "Voice assistant with a 3D holographic map table",
    period: "2026",
    status: null,
    featured: true,
    points: [
      "Ask for a place and it appears in 3D",
      "Plots routes on the map in 3D",
    ],
    problem:
      "Maps are usually flat. Xur is meant to feel like the holographic map table from a movie: you ask for a place and it rises up in front of you.",
    summary:
      "An AI assistant that helps users navigate, explore and plot routes on maps. Built with React and Tailwind, it uses LLM APIs to give real-time guidance.",
    features: [
      "Voice-interactive AI map guide",
      "Ask it to show a place and the place appears in 3D",
      "3D route mapping",
    ],
    decisions: null, // TODO(Gavin): e.g. why Gemini and Mapbox, how voice input maps to map actions, the hardest 3D problem
    highlight: "Voice-interactive AI map guide",
    stack: ["React", "JavaScript", "Tailwind", "Gemini API", "Mapbox API"],
    github: "https://github.com/Gavin-Lam/Xur",
    live: null, // TODO(Gavin): add a demo URL or video if you have one
  },
  {
    id: "wrenchlog",
    title: "Wrenchlog",
    shortTitle: "Wrenchlog",
    tagline: "Maintenance tracker for my own car",
    period: null, // TODO(Gavin): add dates, e.g. "2026"
    status: "In development", // TODO(Gavin): remove or change once it ships
    featured: true,
    points: [
      "Tracks all-season and winter tire sets",
      "Forecast-driven tire swap alerts",
    ],
    problem:
      "I run two sets of tires, all-season and winter, and need to know when to swap them and what winter maintenance is due. I built this for my own car.",
    summary:
      "A vehicle maintenance tracker with winter maintenance and tire tracking built in. A weather integration watches the forecast and raises an alert when it is time to swap tire sets.",
    features: [
      "Maintenance tracking, including winter maintenance",
      "Tire tracking for two sets: all-season and winter",
      "Forecast-driven tire swap alerts through a weather integration",
    ],
    decisions: [
      "Python and FastAPI backend with SQLite for storage, and a React frontend",
      "Backend tested with pytest",
      "Authentication is planned for a later version",
    ],
    highlight: null,
    stack: ["Python", "FastAPI", "SQLite", "React", "pytest"],
    github: null, // TODO(Gavin): add the repo URL when it is public
    live: null, // TODO(Gavin): add a demo URL if you deploy it
  },
  {
    id: "ava",
    title: "AVA (HealthChat)",
    shortTitle: "AVA",
    tagline: "Voice chatbot for mental and physical health",
    period: "2025",
    status: null,
    featured: true,
    points: ["Rebuilt solo from a scripted team prototype into a real AI assistant", "Runs in the browser, containerized with Docker"],
    problem: null, // TODO(Gavin): who it is for and why you built it
    summary:
      "AI-powered voice chatbot that helps users talk through mental and surface-level physical health concerns. It started as a team project where the \"chatbot\" just matched input against a fixed file of questions and answers. I rebuilt it on my own around real AI-driven conversation logic, and reworked nearly everything else along the way. It is containerized with Docker and served by a Python web app in the browser.",
    features: [
      "Voice-interactive AI health assistant",
      "Covers mental and surface-level physical health concerns",
      "Runs in the browser, served by a Python web app",
      "Containerized with Docker",
    ],
    decisions: [
      "Replaced the original scripted Q&A lookup with AI-driven conversation logic",
      "Built the conversation pipeline with LangChain, calling Google Gemini as the model",
      // TODO(Gavin): how conversation context/memory is handled, and how sensitive health topics are kept safe
    ],
    highlight: "Voice-interactive AI health assistant",
    stack: ["Python", "LangChain", "Gemini", "JavaScript", "HTML/CSS", "Docker"],
    github: "https://github.com/Gavin-Lam/healthchat",
    live: null,
  },
  {
    id: "fittrack",
    title: "FitTrack",
    shortTitle: "FitTrack",
    tagline: "Nutrition and workout tracking in one app",
    period: null, // TODO(Gavin): add dates
    status: "In development", // TODO(Gavin): remove or change once it ships
    featured: false,
    points: [],
    problem:
      "I wanted MyFitnessPal Premium-style nutrition tracking and a workout tracker in a single app.",
    summary:
      "A web app that combines nutrition tracking in the style of MyFitnessPal Premium with a workout tracker and a full program generator.",
    features: [
      "Food data from USDA and Open Food Facts",
      "Workout tracker alongside the food log",
      "Full training program generator",
    ],
    decisions: [
      "Built on Django REST Framework and React, a stack I chose in order to learn it",
      "Single user for now",
      "Web app only: no wearable syncing or live GPS",
    ],
    highlight: null,
    stack: ["Django REST Framework", "React", "USDA food data", "Open Food Facts"],
    github: null, // TODO(Gavin): add the repo URL when it is public
    live: null, // TODO(Gavin): add a demo URL if you deploy it
  },
  {
    id: "todo",
    title: "ToDo: Full-Stack Task Manager",
    shortTitle: "ToDo task manager",
    tagline: "Full-stack task management platform",
    period: "Mar 2025 – May 2025",
    status: null,
    featured: false,
    points: [],
    problem: null, // TODO(Gavin): context, e.g. course or team, and your part in it
    summary:
      "Full-stack task management platform built with React and Node.js following Scrum methodology. Features RESTful APIs for task creation, prioritization, and user persistence, containerized with Docker.",
    features: [
      "RESTful APIs for task creation, prioritization, and user persistence",
      "Built following Scrum methodology",
      "Containerized with Docker",
    ],
    decisions: null, // TODO(Gavin)
    highlight: "Scrum, CI/CD, containerized",
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Jira"],
    github: "https://github.com/ZhangTerrence/todo",
    live: null,
  },
  {
    id: "pubg",
    title: "PUBG Player Performance Prediction",
    shortTitle: "PUBG placement prediction",
    tagline: "ML pipeline predicting top 10% match placement",
    period: "Dec 2025",
    status: null,
    featured: false,
    points: [],
    problem: null, // TODO(Gavin): why this dataset and question
    summary:
      "ML pipeline processing 6.3M+ PUBG player records to predict top 10% match placement. Benchmarked 10+ models including LightGBM, Random Forest, ANNs, SVM, and CART with hyperparameter tuning.",
    features: [
      "Processes 6.3M+ PUBG player records",
      "Predicts top 10% match placement",
      "Benchmarks 10+ models: LightGBM, Random Forest, ANNs, SVM, CART and more",
      "Hyperparameter tuning",
    ],
    decisions: null, // TODO(Gavin): which model won and why, feature engineering
    highlight: "~90% classification accuracy",
    stack: ["Python", "PyTorch", "Pandas", "NumPy", "Google Colab"],
    github: null,
    live: "https://colab.research.google.com/drive/1sUeBFpkITTe-BpNzlF5JCkLU0W91l3yP?usp=sharing",
    liveLabel: "Open the Colab notebook",
  },
  {
    id: "sql-engine",
    title: "Extended SQL Query Engine",
    shortTitle: "Extended SQL query engine",
    tagline: "Multi-pass query engine with a new 'such that' clause",
    period: "May 2025",
    status: null,
    featured: false,
    points: [],
    problem: null, // TODO(Gavin): what plain SQL makes awkward that this solves
    summary:
      "Built a multi-pass query engine in Python to simulate SQL-style grouped aggregation using dynamic predicate evaluation and in-memory data structures. Designed a novel 'such that' clause extending SQL's expressiveness for advanced conditional logic across grouping variables.",
    features: [
      "Multi-pass evaluation of SQL-style grouped aggregation",
      "Dynamic predicate evaluation over in-memory data structures",
      "A 'such that' clause for conditional logic across grouping variables",
    ],
    decisions: null, // TODO(Gavin)
    highlight: "Novel 'such that' SQL clause",
    stack: ["Python", "SQL", "PGAdmin"],
    github: "https://github.com/Gavin-Lam/562-Project",
    live: null,
  },
  {
    id: "cicd",
    title: "Enterprise CI/CD Pipeline",
    shortTitle: "Enterprise CI/CD pipeline",
    tagline: "Perforce, Swarm and Jenkins on cloud Linux",
    period: "Sep 2025 – Dec 2025",
    status: null,
    featured: false,
    points: [],
    problem: null, // TODO(Gavin): what was slow or manual before
    summary:
      "Deployed and configured 3 integrated DevOps services (Perforce, Swarm, Jenkins) in a cloud Linux environment. Reduced manual build process from ~5 minutes to under 30 seconds per commit.",
    features: [
      "Three integrated services: Perforce, Swarm and Jenkins",
      "Runs in a cloud Linux environment",
      "Manual build cut from ~5 minutes to under 30 seconds per commit",
    ],
    decisions: null, // TODO(Gavin)
    highlight: "80% faster environment setup",
    stack: ["Jenkins", "Docker", "Perforce", "Linux", "DigitalOcean"],
    // TODO(Gavin): the old site linked this to your GitHub profile, not a
    // repo. Add the repo URL if there is one.
    github: null,
    live: null,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);

export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express.js", "LangChain"],
  },
  {
    category: "Databases & ML",
    items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Pandas", "NumPy"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Linux",
      "CI/CD",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "Perforce",
      "Git",
    ],
  },
];
