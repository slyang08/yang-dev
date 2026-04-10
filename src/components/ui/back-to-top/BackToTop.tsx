// src/components/ui/back-to-top/BackToTop.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowUpToLine } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-primary text-primary-foreground fixed right-6 bottom-6 z-50 rounded-full px-3 py-2 text-sm shadow-lg transition hover:opacity-80 md:cursor-pointer"
    >
      <ArrowUpToLine />
    </Button>
  );
}
