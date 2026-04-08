// src/components/ui/header/header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          Yang
        </Link>

        {/* desktop */}
        <div className="hidden gap-6 md:flex">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* mobile */}
        <button className="md:hidden">☰</button>
      </nav>
    </header>
  );
}
