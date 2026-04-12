// src/features/open-source/OpenSource.tsx
import { OpenSourceCard } from "./OpenSourceCard";
import { openSources } from "./openSource.data";

export function OpenSource() {
  return (
    <>
      <h1 className="text-5xl">Open Source</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {openSources.map((item) => (
          <OpenSourceCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
