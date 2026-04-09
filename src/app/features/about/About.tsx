// src/app/features/about/About.tsx
import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Sheng-Lin Yang — Full Stack Developer
      </h1>

      <p className="text-muted-foreground mt-4 max-w-2xl">
        I build scalable web applications using Next.js, React, and modern backend technologies.
      </p>

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
    </section>
  );
}
