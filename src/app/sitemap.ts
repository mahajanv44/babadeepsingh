export const dynamic = 'force-static';

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://babadeepsinghkhadstore.in";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "weekly", priority: 1 },
  ];
}

