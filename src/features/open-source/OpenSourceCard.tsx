// src/features/open-source/OpenSourceCard.tsx
import type { OpenSource } from "./openSource.data";

const typeColor: Record<OpenSource["type"], string> = {
  PR: "bg-green-100 text-green-700",
  Issue: "bg-yellow-100 text-yellow-700",
  Feature: "bg-blue-100 text-blue-700",
  Docs: "bg-purple-100 text-purple-700",
  BugFix: "bg-red-100 text-red-700",
};

export function OpenSourceCard({
  project,
  repo,
  prTitle,
  prLink,
  // description,
  blog,
  type,
  tags,
}: OpenSource) {
  return (
    <div className="rounded-xl border p-5 transition hover:shadow-md">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project}</h3>

        <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-medium ${typeColor[type]}`}>
          {type}
        </span>
      </div>

      {/* PR TITLE */}
      <p className="text-foreground mt-2 text-sm font-medium">{prTitle}</p>

      {/* DESCRIPTION */}
      {/* <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{description}</p> */}

      {/* TAGS */}
      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-muted rounded px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {/* LINKS */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a
          href={prLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          View PR
        </a>

        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline"
        >
          Repo
        </a>

        {blog && (
          <a
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline"
          >
            Blog
          </a>
        )}
      </div>
    </div>
  );
}
