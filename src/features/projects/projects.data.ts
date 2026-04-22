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
    description: `Built a backend-driven inventory management system for a Malaysian durian
                  retailer, implementing authentication (login/logout/password management), daily
                  stock tracking, and CRUD operations for products and inventory data.
                  The frontend serves as a lightweight interface for displaying shop information,
                  location, and current stock levels.`,
    image: {
      src: "/lss-demo-laptop.png",
      alt: "LiuShuShu Demo",
      aspectRatio: "phone",
    },
    github: "https://github.com/slyang08/LiuShuShu",
    demo: "https://liushushu.vercel.app",
    highlights: [],
    tags: ["TypeScript", "Node.js", "Express", "Next.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "fintrackeasy",
    name: "FinTrackEasy",
    description: `Built a multi-user finance tracking system with JWT authentication,
                  RESTful API architecture, and MongoDB-based transaction persistence.`,
    image: {
      src: "/fte-demo-laptop.png",
      alt: "FinTrackEasy Demo",
      aspectRatio: "laptop",
    },
    github: "https://github.com/Project-Implementation-PRJ666/FinTrackEasy",
    demo: "https://fintrackeasy.vercel.app/",
    highlights: [
      "Designed authentication system (JWT-based)",
      "Built RESTful API architecture",
      "Structured database schema for financial data",
      "Optimized API response structure",
    ],
    tags: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Tailwind CSS"],
  },
];
