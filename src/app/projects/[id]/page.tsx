// src/app/project/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/features/projects/projects.data";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-3xl p-2">
      <h1 className="text-4xl font-bold">{project.name}</h1>

      {project.image && (
        <div className="relative mt-6 h-96 w-full">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <p className="text-muted-foreground mt-6">{project.description}</p>

      {project.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-muted rounded px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.highlights && (
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-semibold">Project Highlights</h2>
          <ul className="list-disc space-y-1 pl-5">
            {project.highlights.map((hl) => (
              <li key={hl} className="text-muted-foreground text-sm">
                {hl}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
