// src/app/page.tsx
import { About } from "@/features/about";
import { Contact } from "@/features/contact";
import { Hero } from "@/features/hero";
import { OpenSource } from "@/features/open-source";
import { Projects } from "@/features/projects";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4">
        <section id="hero" className="mb-20">
          <Hero />
        </section>

        <section id="about" className="mb-20">
          <About />
        </section>

        <section id="projects" className="mb-20">
          <Projects />
        </section>

        <section id="open-source" className="mb-20">
          <OpenSource />
        </section>

        <section id="contact" className="mb-20">
          <Contact />
        </section>
      </div>
    </main>
  );
}
