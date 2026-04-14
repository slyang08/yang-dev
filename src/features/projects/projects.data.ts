// src/features/projects/projects.data.ts

export type Project = {
  id: string;
  name: string;
  description: string;
  image?: {
    name: string;
    src: string;
    alt: string;
  };
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
    image: {
      name: "LiuShuShu phone Demo",
      src: "/lss-demo-phone.png",
      alt: "LiuShuShu Demo",
    },
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
    image: {
      name: "FinTrackEasy laptop Demo",
      src: "/fte-demo-laptop.png",
      alt: "FinTrackEasy Demo",
    },
    github: "https://github.com/Project-Implementation-PRJ666/FinTrackEasy",
    demo: "https://fintrackeasy.vercel.app/",
    highlights: [
      "Implemented JWT authentication",
      "Designed relational database schema",
      "Optimized API performance",
    ],
    tags: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Tailwind CSS"],
  },
];
