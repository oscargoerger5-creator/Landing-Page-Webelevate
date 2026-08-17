import type { MetadataRoute } from "next";
import { realisationsList } from "@/lib/realisations";

// TODO : remplacer par https://webelevate.fr quand le domaine sera actif
// (penser aussi au metadataBase du layout).
const BASE_URL = "https://landing-page-webelevate.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/realisations", priority: 0.9 },
    { path: "/studio", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/mentions-legales", priority: 0.2 },
    { path: "/confidentialite", priority: 0.2 },
    { path: "/cgv", priority: 0.2 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      lastModified: new Date(),
      priority: p.priority,
    })),
    ...realisationsList.map((r) => ({
      url: `${BASE_URL}/realisations/${r.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
