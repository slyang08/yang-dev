// src/components/ui/footer/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 md:flex-row md:justify-between">
        <div>
          <p className="font-semibold">Sheng-Lin Yang</p>
          <p className="text-muted-foreground text-sm">Software Developer | Full Stack Developer</p>
        </div>

        <div className="flex gap-4">
          <Link href="mailto:slyang8008@gmail.com">Email</Link>
          <Link href="https://github.com/slyang08">GitHub</Link>
          <Link href="https://linkedin.com/in/slyang08">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
