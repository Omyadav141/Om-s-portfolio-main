export type Project = {
  slug: string;
  title: string;
  category: "AI/ML" | "Web" | "IoT" | "Data" | "3D" | "Game";
  tags: string[];
  cover: string;
  description: string;
  long?: string;
  href?: string;
  hrefLabel?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

export const projects: Project[] = [
  {
    slug: "finease",
    title: "Finease — Financial App",
    category: "Web",
    tags: ["HTML", "CSS", "JavaScript"],
    cover: "/portfolio/fineaselog.png",
    description:
      "A comprehensive financial management website empowering users with tools, accessible insights, and personalized financial guidance.",
    long:
      "Finease is a full financial-wellness platform: budgeting tools, expense categorization, goal tracking, and personalized recommendations. Built as a web-first experience with a clean responsive UI. Published in IJIRTS (ICCTESM 2024).",
    href: "https://github.com/Omyadav141/finease",
    hrefLabel: "View on GitHub",
    size: "xl",
  },
  {
    slug: "ai-career-coach",
    title: "Full-Stack AI Career Coach",
    category: "AI/ML",
    tags: ["Python", "Next.js", "AI/LLM"],
    cover: "/portfolio/AIMLPROJ.png",
    description:
      "AI-powered career guidance for resume analysis, skill-gap detection, and personalized recommendations.",
    href: "https://github.com/Omyadav141/AI-Career-Coach",
    hrefLabel: "View on GitHub",
    size: "lg",
  },
  {
    slug: "syquora",
    title: "Syquora — Blue Carbon Platform",
    category: "Web",
    tags: ["React", "Node.js", "Climate"],
    cover: "/portfolio/geometric.png",
    description:
      "Climate-tech platform for tracking blue carbon restoration projects and transparent carbon-credit workflows.",
    href: "https://omyadav141.github.io/SYQUORA/",
    hrefLabel: "Live site",
    size: "md",
  },
  {
    slug: "iot-home",
    title: "IoT Home Appliance Control",
    category: "IoT",
    tags: ["IoT", "Android", "Hardware"],
    cover: "/portfolio/iot.png",
    description:
      "Smart devices — lights, thermostats, cameras, appliances — unified into a network controllable via smartphone or voice.",
    long:
      "Published research paper in IRJMETS (Vol 6, Issue 8, Aug 2024). Hardware-software integration for unified home control over Android.",
    href: "/portfolio/IOTPROJ.jpg",
    hrefLabel: "Project image",
    size: "lg",
  },
  {
    slug: "3d-virtual-human",
    title: "3D Virtual Human",
    category: "3D",
    tags: ["Unity 3D", "Three.js", "WebGL"],
    cover: "/portfolio/3dvirtual.png",
    description:
      "Realistic 3D virtual human built with Unity 3D and Three.js — animations for actions, expressions, and immersive web rendering.",
    href: "https://github.com/Omyadav141/3d-virtual-man",
    hrefLabel: "View on GitHub",
    size: "md",
  },
  {
    slug: "football-game",
    title: "Football Browser Game",
    category: "Game",
    tags: ["HTML", "CSS", "JS"],
    cover: "/portfolio/football.png",
    description:
      "An interactive football game built entirely in the browser. Score goals with smooth animations — pure HTML, CSS & JS.",
    href: "https://github.com/Omyadav141/Football-game",
    hrefLabel: "View on GitHub",
    size: "sm",
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    category: "Web",
    tags: ["HTML", "CSS", "JS"],
    cover: "/portfolio/taskmanage.png",
    description:
      "Create, update, and delete tasks. Organize by priority, due date, and status with a clean responsive UI.",
    href: "https://github.com/Omyadav141/Task-manager",
    hrefLabel: "View on GitHub",
    size: "sm",
  },
  {
    slug: "fake-news-nlp",
    title: "Fake News Detection (NLP)",
    category: "AI/ML",
    tags: ["Python", "NLP", "Scikit-learn"],
    cover: "/portfolio/AIMLPROJ.png",
    description:
      "NLP + ML classifiers to detect and flag fake news. Text preprocessing, feature extraction, model evaluation.",
    size: "sm",
  },
  {
    slug: "geometric-universe",
    title: "Geometric Universe",
    category: "Web",
    tags: ["HTML", "CSS"],
    cover: "/portfolio/geometric.png",
    description:
      "Intricate geometric patterns rendered with pure CSS — a visual showcase of mathematical beauty.",
    href: "https://github.com/Omyadav141/geometric-universe",
    hrefLabel: "View on GitHub",
    size: "md",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    category: "Web",
    tags: ["TanStack", "R3F", "Framer Motion"],
    cover: "/portfolio/portfolio.png",
    description:
      "A custom cinematic portfolio showcasing work, research, startups, and experiences. Designed from scratch.",
    size: "md",
  },
];

export const projectCategories = [
  "All",
  "AI/ML",
  "Web",
  "IoT",
  "3D",
  "Game",
] as const;