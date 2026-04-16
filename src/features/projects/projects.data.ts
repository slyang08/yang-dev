// src/features/projects/projects.data.ts

type ImageConfig = {
  src: string;
  alt: string;
  aspectRatio?: "phone" | "laptop";
  fit?: "cover" | "contain";
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image?: ImageConfig;
  github: string;
  demo?: string;
  tags?: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    id: "liushushu",
    name: "LiuShuShu",
    description: `Built this project for a Malaysian durian retailer with Node.js, Express, Next.js,
                  and PostgreSQL for a Malaysian durian retailer`,
    image: {
      src: "/lss-demo-laptop.png",
      alt: "LiuShuShu Demo",
      aspectRatio: "phone",
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
      src: "/fte-demo-laptop.png",
      alt: "FinTrackEasy Demo",
      aspectRatio: "laptop",
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
