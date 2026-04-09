// src/app/page.tsx
import { About } from "@/features/about";

export default function Home() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20">
      <About />
    </section>
  );
}
