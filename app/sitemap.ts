import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yassine-azouanat.dev",
      lastModified: new Date("2026-05-18"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
