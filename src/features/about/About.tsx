// src/features/about/About.tsx
import Link from "next/link";

export function About() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-5xl">About</h1>
        <p>
          I am a full-stack developer with a strong focus on backend development and system design.
        </p>

        <p className="text-muted-foreground">
          I have experience building RESTful APIs, designing database schemas, and developing
          scalable web applications using Node.js, Express, and PostgreSQL.
        </p>

        <p className="text-muted-foreground">
          On the frontend, I work with React and Next.js to create clean and responsive user
          interfaces that integrate seamlessly with backend systems.
        </p>

        <p className="text-muted-foreground">
          I enjoy solving complex problems, improving system performance, and building reliable
          applications.
        </p>

        <p className="text-muted-foreground">
          Currently, I am seeking opportunities as a full-stack developer with a focus on backend
          engineering.
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Link href="#projects" className="underline">
          View Projects
        </Link>
        <Link href="https://github.com/slyang08" className="underline">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/slyang08/" className="underline">
          LinkedIn
        </Link>
      </div>
    </>
  );
}
