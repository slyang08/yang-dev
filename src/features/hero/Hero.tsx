// src/feature/hero/Hero.tsx
import Link from "next/link";

export function Hero() {
  return (
    <>
      <p className="text-muted-foreground mt-2 max-w-2xl">Hello, I am</p>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sheng-Lin Yang</h1>
      <div className="text-muted-foreground mt-4 max-w-2xl">
        <p>Backend-focused Full Stack Developer specializing in scalable APIs and system design.</p>
        <p>Built production-ready systems with Node.js, PostgreSQL, and modern cloud tools.</p>
      </div>
      <p className="text-muted-foreground mt-4 max-w-2xl">
        I build scalable backend systems and full-stack applications using Node.js, Next.js, and
        modern web technologies.
      </p>

      <p className="text-muted-foreground mt-2 max-w-2xl">
        Focused on API design, database architecture, and system performance.
      </p>

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
