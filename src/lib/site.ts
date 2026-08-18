// Configuration centrale du site Webelevate.
// Source unique pour la navigation, les services, le studio et les réalisations.
// Contenus encore en partie placeholders, à affiner avec le vrai contenu/médias.

import { realisationsList } from "./realisations";

export const site = {
  name: "webelevate",
  tagline: "Sites web, photo, vidéo & IA sous un même toit",
  description:
    "Webelevate est une agence créative et tech : on conçoit des sites, on produit vos images et vidéos, et on met l'IA à votre service.",
  email: "oscargoergerpro@gmail.com", // TODO : passer sur contact@webelevate.fr quand le domaine sera actif
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
    slug: "video",
    title: "Vidéo",
    description:
      "Films de marque, reels et contenus vidéo à forte identité.",
    category: "studio",
  },
  {
    slug: "photo",
    title: "Photo",
    description:
      "Shootings produits, portraits et images de marque qui marquent.",
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
  // true : visible uniquement dans le marquee de l'accueil (pas dans les
  // bandes de preuve sociale Contact / CTA, calibrées pour 7 logos).
  marqueeOnly?: boolean;
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
  {
    type: "company",
    name: "Eugenia School",
    logo: "/clients/eugenia-school.png",
  },
  { type: "company", name: "TBV", logo: "/clients/tbv.png" },
  {
    type: "person",
    name: "Kylian Khalifa",
    role: "Founder Taap.it & Corporations",
    photo: "/clients/kyliankhalifa.jpg",
  },
  {
    type: "company",
    name: "Solvation",
    logo: "/clients/solvation.jpg",
    marqueeOnly: true,
  },
  {
    type: "company",
    name: "Ambiance & Styles",
    logo: "/clients/ambiance-styles.jpg",
    logoClassName: "rounded-md",
  },
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
    marqueeOnly: true,
  },
  {
    type: "company",
    name: "Tout & Bon",
    logo: "/clients/tout-et-bon.jpg",
    logoClassName: "rounded-md",
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
    type: "company",
    name: "DNA · Dernières Nouvelles d'Alsace",
    logo: "/clients/dna.png",
    logoClassName: "rounded-md",
    marqueeOnly: true,
  },
  {
    type: "company",
    name: "Les Piraths Handball",
    logo: "/clients/piraths-handball.png",
    marqueeOnly: true,
  },
  {
    type: "company",
    name: "Metz Handball",
    logo: "/clients/metz-handball.png",
    marqueeOnly: true,
  },
  {
    type: "person",
    name: "Rafael Guilbert",
    role: "Co-founder & CTO of Speechly",
    photo: "/clients/rafael-glbrt.jpg",
  },
];

// Sous-ensembles par type (sections séparées entreprises / entrepreneurs).
export const clientPersons = clients.filter((c) => c.type === "person");
export const clientCompanies = clients.filter((c) => c.type === "company");

// Témoignages. Dépose les photos dans public/testimonials/ puis renseigne `photo`
// (ex. "/testimonials/jean.jpg"). Ici des photos de placeholder (à remplacer).
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: string; // personne : photo ronde
  logo?: string; // entreprise : logo affiché dans une pastille
};

// Avis de vrais clients — textes placeholders crédibles, À FAIRE VALIDER par
// chaque client (ou à remplacer par leurs vrais mots) avant mise en ligne.
export const testimonials: Testimonial[] = [
  // Entrepreneurs — photo & vidéo
  {
    name: "Mathias et Grégoire Chapelon",
    role: "SaaS Builder",
    quote:
      "Shooting et vidéos livrés en avance, rendu au-dessus de ce qu'on imaginait. L'équipe capte vite et propose toujours mieux que ce qu'on demande.",
    photo: "/clients/chapelon-mg.jpg",
  },
  {
    name: "Robin Dormion",
    role: "Founder Blow Up AI",
    quote:
      "Des photos et des vidéos carrées, avec une vraie direction artistique. Notre image a pris un niveau au-dessus, et les délais ont été tenus.",
    photo: "/clients/robin-dormion.jpg",
  },
  {
    name: "Kylian Khalifa",
    role: "Founder Taap.it & Corporations",
    quote:
      "Ils ont géré le shooting photo et les vidéos en même temps. Une seule équipe pour toute l'image de marque, ça change tout.",
    photo: "/clients/kyliankhalifa.jpg",
  },
  // Entrepreneurs — vidéo
  {
    name: "Florent Ghizzoni",
    role: "Fondateur Ikovaline",
    quote:
      "Vidéos livrées dans les temps, process ultra clair, retours pris en compte en moins de 24h. On savait exactement où on allait.",
    photo: "/clients/florent-ghizzoni.png",
  },
  {
    name: "Paul-Marie Hamon",
    role: "Founder Speechly & Readyt AI",
    quote:
      "Ils ont produit nos vidéos avec une vraie exigence sur les détails. Le rendu reflète enfin le niveau de nos produits.",
    photo: "/clients/paulm-hm.jpg",
  },
  // Entrepreneurs — photo & vidéo
  {
    name: "Raphael Guilhem",
    role: "Founding growth Pletor AI",
    quote:
      "Des photos et des vidéos qui claquent, pensées pour nos réseaux et notre site. Exactement le contenu qu'il nous fallait.",
    photo: "/clients/raph-guilhem.jpg",
  },
  {
    name: "Rafael Guilbert",
    role: "Co-founder & CTO of Speechly",
    quote:
      "Photos et vidéos impeccables : bien préparées, bien produites, livrées vite. Rare de voir une équipe aussi carrée.",
    photo: "/clients/rafael-glbrt.jpg",
  },
  // Entreprises — vidéo
  {
    name: "Dachser",
    role: "Transport & logistique",
    quote:
      "Des vidéos corporate à la hauteur d'un groupe international. Cadrage, tournage, livraison : tout était carré.",
    logo: "/clients/dachser.png",
  },
  {
    name: "Cuisine Schmidt",
    role: "Cuisiniste",
    quote:
      "Des vidéos de nos showrooms impeccables. On les utilise partout, du site aux réseaux sociaux.",
    logo: "/clients/cuisine-schmidt.png",
  },
  {
    name: "TBV",
    role: "Entreprise",
    quote:
      "Des vidéos qui ont donné un vrai coup de neuf à notre image. Réactifs et à l'écoute du début à la fin.",
    logo: "/clients/tbv.png",
  },
  // Entreprises — site internet
  {
    name: "Solvation",
    role: "Entreprise",
    quote:
      "Un site clair qui inspire confiance, livré dans les temps. Exactement ce qu'il nous fallait.",
    logo: "/clients/solvation.jpg",
  },
  {
    name: "Cuisina Création",
    role: "Cuisiniste",
    quote:
      "Notre nouveau site met vraiment en valeur nos réalisations. Nos clients le remarquent tout de suite.",
    logo: "/clients/cuisina-creations.png",
  },
  {
    name: "Naawah",
    role: "Entreprise",
    quote:
      "Un site qui nous ressemble, créatif et efficace. Le résultat dépasse le brief.",
    logo: "/clients/naawah.png",
  },
];

// Note affichée dans le bloc de preuve sociale du hero.
export const socialProof = {
  rating: "5,0",
  count: "30+",
  label: "projets réalisés",
} as const;

// Réalisations mises en avant dans le carrousel de l'accueil :
// une sélection des vrais projets (données dans lib/realisations.ts).
const featuredSlugs = [
  "dachser",
  "cuisine-schmidt",
  "saas-summit",
  "mg-chapelon",
  "naawah",
  "saas-workshop",
  "fynn-porsche",
];

export type Realisation = {
  title: string;
  summary: string;
  url?: string;
  image?: string;
  video?: string; // illustration vidéo (lecture différée dans le carrousel)
};

export const realisations: Realisation[] = featuredSlugs
  .map((slug) => realisationsList.find((r) => r.slug === slug))
  .filter((r) => r !== undefined)
  .map((r) => ({
    title: `${r.client} : ${r.title}`,
    summary: r.summary,
    url: `/realisations/${r.slug}`,
    // À défaut de photo, la capture du site sert d'illustration (cadrée haut).
    image: r.image ?? r.screen?.src,
    video: r.video,
  }));

// Détail des services (page /services) — accroche, description longue et
// liste de ce qui est inclus. Ordre d'affichage = ordre du tableau.
export type ServiceDetail = {
  slug: string;
  kicker: string; // sous-titre métier au-dessus du titre
  title: string;
  headline: string;
  description: string;
  included: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "sites-internet",
    kicker: "Conception & développement",
    title: "Site internet",
    headline: "Votre site ne doit pas juste exister. Il doit vendre.",
    description:
      "Vitrine, e-commerce ou web-app : on conçoit un site sur-mesure qui raconte votre marque et transforme vos visiteurs en clients. Pas de template, rien de superflu.",
    included: [
      "Design sur-mesure, à votre image",
      "Rapide, sécurisé, irréprochable sur mobile",
      "Optimisé pour Google dès le premier jour",
      "En ligne en 21 jours, retours illimités",
      "Vous restez propriétaire de tout",
    ],
  },
  {
    slug: "ia",
    kicker: "Automatisation & assistants",
    title: "IA",
    headline: "Vos journées font 24 heures. On vous en rend quelques-unes.",
    description:
      "On repère ce qui vous fait perdre du temps (relances, contenus, support, admin) et on l'automatise avec des outils simples, branchés sur ceux que vous utilisez déjà.",
    included: [
      "Audit de vos process, sans jargon",
      "Automatisations qui tournent seules",
      "Assistants et chatbots à votre voix",
      "Intégrés à vos outils existants",
      "Votre équipe formée et autonome",
    ],
  },
  {
    slug: "video",
    kicker: "Production & montage",
    title: "Vidéo",
    headline: "Vous avez 3 secondes pour capter l'attention. On les soigne.",
    description:
      "Films de marque, événementiel, automobile, formats réseaux : on écrit, on tourne, on monte. Vous repartez avec des vidéos prêtes à publier, partout.",
    included: [
      "Films de marque et corporate",
      "Événementiel couvert de bout en bout",
      "Reels et formats verticaux inclus",
      "Tournage, montage, étalonnage : tout est là",
      "Déclinés pour chaque plateforme",
    ],
  },
  {
    slug: "photo",
    kicker: "Shooting & direction artistique",
    title: "Photo",
    headline: "On ne prend pas des photos. On construit votre image.",
    description:
      "Produits, portraits, événements, automobile : des images dirigées artistiquement, cohérentes avec votre marque, prêtes pour votre site comme pour vos réseaux.",
    included: [
      "Direction artistique incluse",
      "Produits, portraits, reportage",
      "Retouches professionnelles",
      "Livrées optimisées web et print",
      "Cohérentes avec votre site, forcément",
    ],
  },
];

// FAQ — questions générales (accueil). Réponses à affiner si besoin.
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Comment est-ce que vous fonctionnez ?",
    answer:
      "Tout commence par un appel pour comprendre votre marque et vos objectifs. Ensuite on cadre le projet, on pose la direction artistique, on produit (design, photo, vidéo, développement) et on vous présente une V1. Vous donnez vos retours, on ajuste, et on met en ligne. Vous avez un seul interlocuteur du début à la fin.",
  },
  {
    question: "Combien de temps ça prend ?",
    answer:
      "Un site est livré en 21 jours en moyenne, du premier appel à la mise en ligne. Pour un shooting photo ou une vidéo seuls, comptez une à deux semaines selon la production. On vous donne un planning précis dès le kick-off.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Chaque projet est sur devis, selon le périmètre : nombre de pages, shooting, vidéo, automatisations… Vous recevez un prix clair et détaillé après le premier appel, sans surprise ensuite.",
  },
  {
    question: "Et si le résultat ne me plaît pas ?",
    answer:
      "Les retours sont illimités : on ajuste jusqu'à votre satisfaction totale. C'est notre engagement. Vous validez chaque étape, du design à la mise en ligne.",
  },
  {
    question: "Vous vous occupez aussi des photos et des vidéos ?",
    answer:
      "Oui, c'est notre force : studio photo/vidéo et développement web sous le même toit. Votre site est pensé avec vos visuels dès le départ, pas rempli d'images de banque.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "On ne disparaît pas : maintenance, évolutions, nouvelles pages, contenus… On reste disponibles pour faire vivre votre site. Et vous restez propriétaire de tout (site, nom de domaine, contenus).",
  },
];

// Process (agenda 21 jours) — à ajuster avec ton vrai déroulé.
// Chaque événement est placé sur un jour du calendrier.
// `day` = jour du calendrier où l'étape est placée (jour cliquable).
export type ProcessEvent = {
  day: number;
  title: string;
  short: string; // libellé court affiché sous le chiffre dans le calendrier
  emoji: string;
  description: string;
};

export const processInfo = {
  promise: "Votre site livré en 21 jours.",
  subtitle: "Un déroulé clair, jour par jour, du premier appel à la mise en ligne.",
  cta: { label: "Réserver un appel", href: "/contact" },
  events: [
    {
      day: 1,
      title: "Appel de vente",
      short: "Appel",
      emoji: "📞",
      description: "On cadre vos objectifs, votre marque et vos besoins.",
    },
    {
      day: 2,
      title: "Kick-off projet",
      short: "Kick-off",
      emoji: "🤝",
      description: "On lance le projet ensemble et on planifie tout.",
    },
    {
      day: 4,
      title: "Cadrage & arborescence",
      short: "Cadrage",
      emoji: "🗺️",
      description: "Structure du site, contenus et parcours utilisateur.",
    },
    {
      day: 8,
      title: "Direction artistique",
      short: "DA",
      emoji: "🎨",
      description: "On pose l'univers visuel de votre marque.",
    },
    {
      day: 9,
      title: "Shooting photo & vidéo",
      short: "Shooting",
      emoji: "📸",
      description: "On produit vos visuels et vos vidéos.",
    },
    {
      day: 11,
      title: "Maquettes design",
      short: "Design",
      emoji: "🖌️",
      description: "Le design de chaque page, validé avec vous.",
    },
    {
      day: 15,
      title: "Développement",
      short: "Dev",
      emoji: "💻",
      description: "On construit un site rapide et optimisé.",
    },
    {
      day: 17,
      title: "Présentation de votre V1",
      short: "V1",
      emoji: "🖥️",
      description: "Vous découvrez votre site et donnez vos retours.",
    },
    {
      day: 18,
      title: "Ajustements",
      short: "Ajustements",
      emoji: "✨",
      description: "On peaufine jusqu'au moindre détail.",
    },
    {
      day: 21,
      title: "Mise en ligne",
      short: "En ligne",
      emoji: "🚀",
      description: "Votre site est en ligne, prêt à performer.",
    },
  ] as ProcessEvent[],
  guarantee: {
    title: "Retours illimités",
    description: "On ajuste jusqu'à votre satisfaction totale.",
  },
};
