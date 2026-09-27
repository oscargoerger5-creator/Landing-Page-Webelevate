import type { MetadataRoute } from "next";
import { realisationsList } from "@/lib/realisations";

// Pas de lastModified : une date qui change à chaque build (new Date())
// n'apporte rien et Google finit par ignorer le champ. À réintroduire avec de
// vraies dates de mise à jour quand les contenus en auront.
const BASE_URL = "https://webelevate.fr";

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
      priority: p.priority,
    })),
    ...realisationsList.map((r) => ({
      url: `${BASE_URL}/realisations/${r.slug}`,
      priority: 0.7,
    })),
  ];
}
