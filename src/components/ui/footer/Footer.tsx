// src/components/ui/footer/Footer.tsx

export function Footer() {
  return (
    <footer className="mt-10 border-t py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 md:flex-row md:justify-between">
        <div>
          <p className="font-semibold">Sheng-Lin Yang</p>
          <p className="text-muted-foreground text-sm">Software Developer | Full Stack Developer</p>
        </div>

        <div className="flex gap-4">
          <a className="text-sm hover:underline" href="mailto:slyang8008@gmail.com">
            Email
          </a>
          <a className="text-sm hover:underline" href="https://github.com/slyang08">
            GitHub
          </a>
          <a className="text-sm hover:underline" href="https://linkedin.com/in/slyang08">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
