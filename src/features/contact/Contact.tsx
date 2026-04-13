// src/features/contact/Contact.tsx

export function Contact() {
  return (
    <>
      <h1 className="text-5xl">Contact</h1>

      <p className="text-muted-foreground mt-3">Open to Full-Stack / Backend Engineer roles.</p>

      <p className="text-muted-foreground mt-2">
        Feel free to{" "}
        <a href="mailto:slyang8008@gmail.com" className="text-foreground font-medium underline">
          email me
        </a>{" "}
        for opportunities or collaboration.
      </p>

      <div className="text-muted-foreground mt-8 flex gap-6 text-sm">
        <a
          href="https://github.com/slyang08"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/slyang08"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground underline"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}
