import type { MetadataRoute } from "next";

const SITE_URL = "https://cifrasde.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const legalLastModified = new Date("2026-05-22");
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terminos`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
