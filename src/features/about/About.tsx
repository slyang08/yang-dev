// src/features/about/About.tsx
import Link from "next/link";

export function About() {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-5xl">About</h1>
        <p>
          I am a full-stack developer with a strong focus on backend systems, API design, and
          scalable architecture.
        </p>

        <p className="text-muted-foreground">
          I have designed and built RESTful APIs using Node.js and PostgreSQL, including
          authentication systems, database schema design, and performance optimization.
        </p>
        <p className="text-muted-foreground">
          In production environments, I have worked with Docker for containerization, GitHub Actions
          for CI/CD automation, and deployed applications using platforms such as Vercel.
        </p>

        <p className="text-muted-foreground">
          On the frontend, I use React and Next.js to build clean and responsive interfaces that
          integrate with backend services.
        </p>

        <p className="text-muted-foreground">
          I enjoy solving complex problems, designing systems, improving backend performance, and
          building reliable, production-ready applications.
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Link href="#projects" className="underline">
          View Projects
        </Link>
        <a href="https://github.com/slyang08" className="underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/slyang08/" className="underline">
          LinkedIn
        </a>
      </div>
    </>
  );
}
