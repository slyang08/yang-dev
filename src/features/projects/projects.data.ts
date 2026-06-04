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

  priority?: boolean;
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
      `Built a full-stack media tracking app supporting movies, dramas, anime, and manga, with
        complete CRUD, soft delete, and Supabase-based user authentication (register / login / logout).`,
      `Designed a secure server-side FastAPI proxy for the TMDB API, preventing client-side
       token exposure and centralizing metadata fetching (posters, genres, overviews) for future caching.`,
      `Implemented a Favorites & Sharing system with public profile pages (/u/username)
       and private token-based share links (/share/p/token), backed by a dedicated favorites
        table designed for future social features.`,
      `Engineered optimistic UI with TanStack Query for instant feedback on mutations,
       with automatic cache rollback on API failure, eliminating full-page refreshes on user interactions.`,
      `Built a Statistics dashboard visualizing watching habits (media type breakdown, activity trends)
       using Recharts, with client-side aggregation over user record data.`,
      `Engineered a PostgreSQL schema via Supabase, with server-side JWT verification
       (ES256 / JWKS via PyJWT + TTLCache) and Alembic-managed migrations, laying the groundwork
        for future OpenAI embedding-based recommendations.`,
      `Established a CI/CD pipeline with GitHub Actions and Docker for automated linting,
       multi-stage builds, and deployment to Render (backend) and Vercel (frontend).`,
      `Engineered a PostgreSQL schema via Supabase with server-side JWT verification (ES256 / JWKS via PyJWT + TTLCache)
       and Alembic-managed migrations; integrated a Supabase Webhook to automatically sync new
        Auth users into a user_profiles table on registration, decoupling identity management from application data.`,
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
