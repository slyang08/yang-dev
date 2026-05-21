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
    id: "kindaseen",
    name: "KindaSeen",
    description: `A full-stack, AI-ready personal media repository designed to help users track and
                  never forget the media they have consumed. Built with a decoupled monorepo
                  architecture, it provides a centralized memory log that aggregates movies, shows,
                  and books by securely fetching and caching rich metadata from third-party APIs.`,
    image: {
      src: "/ks-demo-laptop.png",
      alt: "KindaSeen Demo",
      aspectRatio: "laptop",
    },
    github: "https://github.com/slyang08/KindaSeen",
    demo: "https://kindaseen.vercel.app",
    tags: ["Python", "FastAPI", "TypeScript", "Next.js", "Supabase", "Docker", "GitHub Actions"],
    highlights: [
      "Designed a secure server-side proxy architecture via FastAPI to query TMDB API, preventing client-side API key exposure.",
      "Engineered a persistent database schema using Supabase/PostgreSQL to cache metadata (overviews, genres), laying the groundwork for future AI recommendation embeddings.",
      "Optimized UX resilience by developing an advanced search dialog component that preserves intermediate input states upon accidental dismissal.",
      "Established an automated CI/CD pipeline leveraging GitHub Actions and Docker for consistent multi-stage builds and automated linting.",
    ],
  },
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
    tags: ["TypeScript", "Node.js", "NestJS", "Next.js", "PostgreSQL", "Tailwind CSS"],
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
