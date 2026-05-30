// src/features/projects/Projects.tsx
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects.data";

export function Projects() {
  return (
    <>
      <h1 className="text-5xl">Projects</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} priority={index === 0} />
        ))}
      </div>
    </>
  );
}
