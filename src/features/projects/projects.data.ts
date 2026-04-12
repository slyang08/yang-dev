// src/features/projects/projects.data.ts

export type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
  github: string;
  demo?: string;
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
    description:
      "FinTrackEasy is a user-friendly personal finance tracking application that helps users manage their daily income and expenses.",
    github: "https://github.com/Project-Implementation-PRJ666/FinTrackEasy",
    tags: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Tailwind CSS"],
  },
];
