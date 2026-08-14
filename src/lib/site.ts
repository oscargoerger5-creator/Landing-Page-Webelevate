// Configuration centrale du site Webelevate.
// Source unique pour la navigation, les services, le studio et les réalisations.
// Contenus encore en partie placeholders — à affiner avec le vrai contenu/médias.

export const site = {
  name: "webelevate",
  tagline: "Sites web, photo, vidéo & IA — sous un même toit",
  description:
    "Webelevate est une agence créative et tech : on conçoit des sites, on produit vos images et vidéos, et on met l'IA à votre service.",
  email: "hello@webelevate.fr",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];

// "tech" = côté web/IA (présentation structurée) ; "studio" = créatif (photo/vidéo, visuel).
export type ServiceCategory = "tech" | "studio";

export type Service = {
  slug: string;
  title: string;
  description: string;
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    slug: "sites-internet",
    title: "Sites internet",
    description:
      "Sites vitrines, e-commerce et web-apps sur-mesure, pensés pour convertir.",
    category: "tech",
  },
  {
    slug: "ia",
    title: "IA",
    description:
      "Automatisations et solutions IA pour gagner du temps et créer plus.",
    category: "tech",
  },
  {
    slug: "photo",
    title: "Photo",
    description:
      "Shootings produits, portraits et images de marque qui marquent.",
    category: "studio",
  },
  {
    slug: "video",
    title: "Vidéo",
    description:
      "Films de marque, reels et contenus vidéo à forte identité.",
    category: "studio",
  },
];

// Projets du Studio (photo / vidéo) — la vitrine créative.
// media : chemin vers une image dans public/ (à remplacer par tes vrais visuels).
export type StudioProject = {
  slug: string;
  client: string;
  title: string;
  type: "photo" | "video";
  media?: string;
};

export const studioProjects: StudioProject[] = [
  {
    slug: "projet-photo-1",
    client: "Client A",
    title: "Direction artistique & shooting produit",
    type: "photo",
  },
  {
    slug: "projet-video-1",
    client: "Client B",
    title: "Film de marque",
    type: "video",
  },
  {
    slug: "projet-photo-2",
    client: "Client C",
    title: "Portraits d'équipe",
    type: "photo",
  },
  {
    slug: "projet-video-2",
    client: "Client D",
    title: "Reels réseaux sociaux",
    type: "video",
  },
  {
    slug: "projet-photo-3",
    client: "Client E",
    title: "Images de marque",
    type: "photo",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  tags: string[];
  context: string;
  solution: string;
  result: string;
};

// Placeholders — remplacer par les vrais projets fournis par le client.
export const caseStudies: CaseStudy[] = [
  {
    slug: "projet-alpha",
    client: "Client Alpha",
    title: "Refonte complète d'un site vitrine",
    summary: "Une refonte moderne qui a doublé le taux de prise de contact.",
    tags: ["Site internet", "Design", "SEO"],
    context: "Contexte du projet à compléter.",
    solution: "Solution apportée à compléter.",
    result: "Résultats chiffrés à compléter.",
  },
  {
    slug: "projet-beta",
    client: "Client Beta",
    title: "Boutique e-commerce sur-mesure",
    summary: "Une expérience d'achat rapide et fluide, du panier au paiement.",
    tags: ["E-commerce", "Performance"],
    context: "Contexte du projet à compléter.",
    solution: "Solution apportée à compléter.",
    result: "Résultats chiffrés à compléter.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
