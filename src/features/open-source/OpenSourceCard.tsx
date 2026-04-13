// src/features/open-source/OpenSourceCard.tsx
import { type OpenSource, capitalize } from "./openSource.data";
import { SquareArrowOutUpRight } from "lucide-react";

const typeStyle: Record<OpenSource["type"], { label: string; className: string }> = {
  FEATURE: {
    label: "Feature",
    className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  },
  ENHANCEMENT: {
    label: "Enhancement",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
  },
  BUG_FIX: {
    label: "Bug Fix",
    className: "bg-red-100 text-red-700 border border-red-200",
  },
  DOCS: {
    label: "Docs",
    className: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  },
};

export function OpenSourceCard({ item }: { item: OpenSource }) {
  return (
    <div className="group rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm font-medium">{item.project}</span>

        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeStyle[item.type].className}`}
        >
          {typeStyle[item.type].label}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="mt-2 text-lg leading-snug font-semibold">{item.title}</h3>

      {/* CONTENT */}
      <div className="mt-4 space-y-2 text-sm leading-relaxed">
        <p>
          <span className="text-foreground font-semibold">What:</span>{" "}
          {capitalize(item.contribution)}
        </p>
        {item.impact && (
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Impact:</span> {item.impact}
          </p>
        )}
      </div>

      {/* TAGS */}
      {item.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="bg-muted rounded-md px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {/* LINKS */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={item.links.prLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center rounded-md bg-black px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-80"
        >
          View PR&ensp;
          <SquareArrowOutUpRight className="h-3 w-3" />
        </a>

        <a
          href={item.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground text-xs font-medium"
        >
          Repo
        </a>

        {item.links.blog && (
          <a
            href={item.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-xs font-medium"
          >
            Blog
          </a>
        )}
      </div>
    </div>
  );
}
