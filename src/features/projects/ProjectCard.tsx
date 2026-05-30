// src/features/projects/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "./projects.data";

export function ProjectCard({
  id,
  name,
  description,
  image,
  github,
  demo,
  tags,
  priority,
}: Project) {
  return (
    <article className="bg-background overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {image && (
        <div className="relative h-56 w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={priority}
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{description}</p>

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-muted rounded-md px-2 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Link
            href={`/projects/${id}`}
            className="bg-primary text-primary-foreground inline-flex rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            View Details
          </Link>
        </div>

        <div className="mt-4 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium hover:underline"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
