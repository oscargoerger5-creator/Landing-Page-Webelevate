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

// ---------------------------------------------------------------------------
// Preuve sociale : logos clients (slider), témoignages, note.
// ---------------------------------------------------------------------------

// Clients affichés en preuve sociale.
// - type "company" : une entreprise → logo (public/clients/xxx.svg) ou nom en texte
// - type "person"  : un entrepreneur → photo (public/clients/xxx.jpg) + nom + activité
export type Client = {
  type: "company" | "person";
  name: string;
  logo?: string; // company
  logoClassName?: string; // company : override de taille du logo (ex. TBV)
  role?: string; // person (son activité, ex. "Coach business")
  photo?: string; // person
};

export const clients: Client[] = [
  // Ordre : 1 entreprise puis 1 entrepreneur, selon la numérotation fournie.
  { type: "company", name: "Dachser", logo: "/clients/dachser.png" },
  {
    type: "person",
    name: "Mathias et Grégoire Chapelon",
    role: "SaaS Builder",
    photo: "/clients/chapelon-mg.jpg",
  },
  { type: "company", name: "Schmidt", logo: "/clients/cuisine-schmidt.png" },
  {
    type: "person",
    name: "Robin Dormion",
    role: "Founder Blow Up AI",
    photo: "/clients/robin-dormion.jpg",
  },
  { type: "company", name: "TBV", logo: "/clients/tbv.png" },
  {
    type: "person",
    name: "Kylian Khalifa",
    role: "Founder Taap.it & Corporations",
    photo: "/clients/kyliankhalifa.jpg",
  },
  { type: "company", name: "Solvation", logo: "/clients/solvation.jpg" },
  {
    type: "person",
    name: "Florent Ghizzoni",
    role: "Fondateur Ikovaline",
    photo: "/clients/florent-ghizzoni.png",
  },
  {
    type: "company",
    name: "Cuisina création",
    logo: "/clients/cuisina-creations.png",
  },
  {
    type: "person",
    name: "Paul-Marie Hamon",
    role: "Founder Speechly & Readyt AI",
    photo: "/clients/paulm-hm.jpg",
  },
  { type: "company", name: "Naawah", logo: "/clients/naawah.png" },
  {
    type: "person",
    name: "Raphael Guilhem",
    role: "Founding growth Pletor AI",
    photo: "/clients/raph-guilhem.jpg",
  },
  {
    type: "person",
    name: "Rafael Guilbert",
    role: "Co-founder & CTO of Speechly",
    photo: "/clients/rafael-glbrt.jpg",
  },
];

// Uniquement les entrepreneurs (pour la version complète sur le Studio).
export const clientPersons = clients.filter((c) => c.type === "person");

// Témoignages. Dépose les photos dans public/testimonials/ puis renseigne `photo`
// (ex. "/testimonials/jean.jpg"). Ici des photos de placeholder (à remplacer).
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jean Dupont",
    role: "Fondateur, Marque A",
    quote:
      "Webelevate a transformé notre présence en ligne — site, photos et vidéos, tout est cohérent et pro.",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
  },
  {
    name: "Camille Martin",
    role: "Dirigeante, Marque B",
    quote:
      "Des visuels bluffants et un site rapide. On a doublé nos demandes de contact.",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
  },
  {
    name: "Alex Bernard",
    role: "CEO, Marque C",
    quote:
      "Réactifs, créatifs et carrés. L'IA qu'ils ont intégrée nous fait gagner un temps fou.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop",
  },
];

// Note affichée dans le bloc de preuve sociale du hero.
export const socialProof = {
  rating: "5,0",
  count: "30+",
  label: "projets réalisés",
} as const;

// Réalisations du carrousel (accueil) — PLACEHOLDERS à remplir.
// Ajoute `image` (ex. "/realisations/projet.jpg") ; sinon un cadre placeholder s'affiche.
export type Realisation = {
  title: string;
  summary: string;
  url?: string;
  image?: string;
};

export const realisations: Realisation[] = [
  {
    title: "Refonte de site vitrine",
    summary: "Un site moderne et rapide qui convertit mieux.",
    url: "/realisations",
  },
  {
    title: "Boutique e-commerce",
    summary: "Une expérience d'achat fluide, du panier au paiement.",
    url: "/realisations",
  },
  {
    title: "Film de marque",
    summary: "Une vidéo à forte identité pour marquer les esprits.",
    url: "/realisations",
  },
  {
    title: "Shooting produit",
    summary: "Des visuels léchés qui valorisent vos produits.",
    url: "/realisations",
  },
  {
    title: "Automatisation IA",
    summary: "Des process automatisés pour gagner un temps précieux.",
    url: "/realisations",
  },
];
