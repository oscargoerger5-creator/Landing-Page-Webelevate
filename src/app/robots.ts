import type { MetadataRoute } from "next";

// TODO : remplacer par https://webelevate.fr quand le domaine sera actif.
const BASE_URL = "https://www.webelevate.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
