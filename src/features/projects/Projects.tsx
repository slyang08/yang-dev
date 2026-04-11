// src/features/projects/Projects.tsx
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects.data";

export function Projects() {
  return (
    <>
      <h1 className="text-5xl">Projects</h1>

      <div className="mt-6 flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
