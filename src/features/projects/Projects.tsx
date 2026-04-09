// src/features/projects/Projects.tsx

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Project Name</h3>
          <p className="text-muted-foreground mt-2 text-sm">Short description of what it does.</p>
        </div>
      </div>
    </section>
  );
}
