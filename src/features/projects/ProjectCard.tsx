// src/features/projects/ProjectCard.tsx
import Image from "next/image";
import type { Project } from "./projects.data";

export function ProjectCard({ name, description, image, github, demo, tags }: Project) {
  return (
    <>
      <div className="group bg-background flex overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-40 w-56 shrink-0 overflow-hidden">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-md object-cover transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col px-4">
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>

          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{description}</p>

          {tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="bg-muted rounded px-2 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex gap-5 text-sm">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
