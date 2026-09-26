import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://virtuwebz.com", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://virtuwebz.com/projects", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
