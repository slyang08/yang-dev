// src/features/projects/projects.data.ts

export type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
  github: string;
  demo?: string;
  highlights?: string[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "liushushu",
    name: "LiuShuShu",
    description:
      "Built this project with Node.js (Express), Next.js, and PostgreSQL for a Malaysian durian retailer",
    // image: "/projects/portfolio.png",
    github: "https://github.com/slyang08/LiuShuShu",
    demo: "https://liushushu.vercel.app",
    tags: ["TypeScript", "Node.js", "Express", "Next.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "fintrackeasy",
    name: "FinTrackEasy",
    description: `Built a full-stack personal finance tracking system with Node.js, Express, and MongoDB.
                  Implemented CRUD operations, data persistence, and responsive UI with React.
                  Focused on improving user experience and efficient data management.`,
    github: "https://github.com/Project-Implementation-PRJ666/FinTrackEasy",
    highlights: [
      "Implemented JWT authentication",
      "Designed relational database schema",
      "Optimized API performance",
    ],
    tags: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Tailwind CSS"],
  },
];
