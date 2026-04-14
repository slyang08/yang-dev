// src/features/projects/ProjectCard.tsx
import Image from "next/image";
import type { Project } from "./projects.data";

export function ProjectCard({ name, description, image, github, demo, tags }: Project) {
  return (
    <>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={200}
          height={200}
          className="mb-3 h-50 w-50 rounded-md"
        />
      )}
      <div className="rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-muted-foreground mt-2 text-sm">{description}</p>

        {tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-muted rounded px-2 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex gap-4 text-sm">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="underline">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </>
  );
}
