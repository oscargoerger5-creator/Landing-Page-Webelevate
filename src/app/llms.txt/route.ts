import { faq, serviceDetails, site } from "@/lib/site";
import { orderedRealisations, realisationCategories } from "@/lib/realisations";

// /llms.txt : résumé du site en texte brut pour les moteurs IA (ChatGPT,
// Perplexity, Claude…). Généré depuis les données du site, donc toujours à
// jour : une nouvelle réalisation ou un nouveau service y apparaît tout seul.
export const dynamic = "force-static";

export function GET() {
  const label = (key: string) =>
    realisationCategories.find((c) => c.key === key)?.label ?? key;

  const lines = [
    "# Webelevate",
    "",
    `> ${site.description}`,
    "",
    "Webelevate est une agence web, photo et vidéo basée à Strasbourg, fondée par Oscar Goerger. Une seule équipe réunit le studio photo/vidéo et le développement web : les sites sont conçus avec les vrais visuels du client. Intervention à Strasbourg, dans toute l'Alsace et partout en France (sites internet et IA à distance ; tournages et shootings sur place).",
    "",
    "## Services",
    "",
    ...serviceDetails.map(
      (s) =>
        `- [${s.title}](${site.url}/services#${s.slug}) : ${s.description} Inclus : ${s.included.join(", ")}.`,
    ),
    "",
    "## Chiffres clés",
    "",
    "- Site internet livré en 21 jours en moyenne, retours illimités",
    "- Plus de 30 projets réalisés (sites, e-commerce, vidéo, photo)",
    "- Le client reste propriétaire de tout (site, nom de domaine, contenus)",
    "",
    "## Réalisations",
    "",
    ...orderedRealisations.map(
      (r) =>
        `- [${r.client} : ${r.title}](${site.url}/realisations/${r.slug}) (${label(r.category)}) : ${r.summary}`,
    ),
    "",
    "## Questions fréquentes",
    "",
    ...faq.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Contact",
    "",
    `- Site : ${site.url}`,
    `- Appel découverte de 15 min : ${site.url}/contact`,
    `- Téléphone / WhatsApp : ${site.phone}`,
    `- Email : ${site.email}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
