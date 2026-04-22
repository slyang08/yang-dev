// src/feature/hero/Hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <>
      <p className="text-muted-foreground mt-2 max-w-2xl">Hello, I am</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sheng-Lin Yang</h1>
      <div className="text-muted-foreground mt-4 max-w-2xl">
        <p>Backend-focused Full Stack Developer</p>
        <p>
          Building scalable APIs, authentication systems, and production-grade applications using
          Node.js and PostgreSQL.
        </p>
        <p>
          Experienced in system design, containerized deployments with Docker, and CI/CD pipelines
          using GitHub Actions.
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Link href="#projects" className="underline">
          View Projects
        </Link>
        <a href="https://github.com/slyang08" className="underline">
          GitHub
        </a>
      </div>
    </>
  );
}
