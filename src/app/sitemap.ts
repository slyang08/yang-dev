// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { myDomain } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: myDomain,
      lastModified: new Date(),
    },
  ];
}
