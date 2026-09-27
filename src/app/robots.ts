import type { MetadataRoute } from "next";

const BASE_URL = "https://webelevate.fr";

// Robots des moteurs de recherche IA, autorisés explicitement : c'est ce qui
// permet à ChatGPT, Perplexity, Claude, Gemini ou Copilot de lire et citer le site.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
