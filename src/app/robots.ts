import type { MetadataRoute } from "next";

// TODO : remplacer par https://webelevate.fr quand le domaine sera actif.
const BASE_URL = "https://landing-page-webelevate.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
