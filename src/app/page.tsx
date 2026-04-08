// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1>Sheng-Lin Yang</h1>
      <p>Full Stack Developer</p>

      <p>I build scalable web applications using modern technologies:</p>
      <p>
        <strong>Node.js, Next.js, React, and TypeScript.</strong>
      </p>

      <Link href="https://github.com/slyang08">GitHub</Link>
      <Link href="https://www.linkedin.com/in/slyang08/">LinkedIn</Link>
    </div>
  );
}
