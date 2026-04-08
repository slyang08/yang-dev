// src/app/robots.ts
import { MetadataRoute } from "next";
import { myDomain } from "./layout";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${myDomain}/sitemap.xml`,
  };
}
