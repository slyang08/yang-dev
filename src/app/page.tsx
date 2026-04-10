// src/app/page.tsx
import { About } from "@/features/about";
import { Projects } from "@/features/projects";

export default function Home() {
  return (
    <>
      <section id="hero" className="mb-20 max-w-5xl px-4">
        <p className="text-muted-foreground mt-2 max-w-2xl">Hello, I am</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sheng-Lin Yang</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Software Developer | Full Stack Developer (Backend-focused)
        </p>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          I build scalable backend systems and full-stack applications using Node.js, Next.js, and
          modern web technologies.
        </p>

        <p className="text-muted-foreground mt-2 max-w-2xl">
          Focused on API design, database architecture, and system performance.
        </p>
      </section>
      <section id="about" className="mb-20 max-w-5xl px-4">
        <About />
      </section>
      <section id="projects" className="mb-20 max-w-5xl px-4">
        <Projects />
      </section>
    </>
  );
}
