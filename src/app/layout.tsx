import { BackToTop } from "@/components/ui/back-to-top";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const myDomain = "https://yang-dev.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(myDomain),

  title: {
    default: "Sheng-Lin Yang | Software Developer",
    template: "%s | Yang",
  },
  description:
    "Full-stack developer specializing in Next.js, React, and modern web technologies. Explore my portfolio and projects.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Sheng-Lin Yang",
    "Yang",
    "Andy Yang",
    "Full Stack Developer",
    "Backend Developer",
    "TypeScript",
    "Java",
    "Python",
    "Go",
    "Golang",
    "Node.js",
    "Express",
    "Spring Boot",
    "Echo",
    "Next.js",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "Azure SQL",
    "Prisma",
    "Google OAuth",
    "Google Gmail",
    "RESTful APIs",
    "Husky",
    "Jira",
    "Supabase",
    "Jest",
    "Vitest",
    "Portfolio",
  ],

  authors: [{ name: "Sheng-Lin Yang" }],
  creator: "Sheng-Lin Yang",

  openGraph: {
    title: "Sheng-Lin Yang | Full Stack Developer",
    description: "Explore Yang's portfolio, projects, and full-stack development skills.",
    url: `${myDomain}`,
    siteName: "Yang Portfolio",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_CA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>

        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sheng-Lin Yang",
              url: `${myDomain}`,
              // image: `${myDomain}/avatar.png`,
              sameAs: ["https://github.com/slyang08", "https://www.linkedin.com/in/slyang08/"],
              "@id": `${myDomain}/#person`,
              jobTitle: "Full Stack Developer",
              knowsAbout: [
                "TypeScript",
                "Node.js",
                "Express.js",
                "Express",
                "React",
                "Next.js",
                "Backend Development",
              ],
            }),
          }}
        />

        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
