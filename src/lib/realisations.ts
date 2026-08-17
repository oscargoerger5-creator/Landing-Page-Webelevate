// Réalisations Webelevate : données et contenus rédigés.
// - `image` : visuel de la carte et de la page détail (à déposer dans
//   public/realisations/, ex. "/realisations/cg-poissonnerie.jpg").
// - `stats` : chiffres mis en avant en gros sur la page détail.
// - Les projets non validés (Énergies Solution, AHB site) ou en cours
//   (Cuisina) ne figurent pas ici : les ajouter une fois validés.

export type RealisationCategory =
  | "site-internet"
  | "e-commerce"
  | "video"
  | "photo"
  | "ia";

export const realisationCategories: {
  key: RealisationCategory;
  label: string;
}[] = [
  { key: "site-internet", label: "Site internet" },
  { key: "e-commerce", label: "E-commerce" },
  { key: "video", label: "Vidéo" },
  { key: "photo", label: "Photo" },
  { key: "ia", label: "IA" },
];

export type Realisation = {
  slug: string;
  client: string;
  category: RealisationCategory;
  title: string; // accroche de la carte et de la page détail
  summary: string; // 1 à 2 phrases (carte + meta description SEO)
  context: string; // le contexte
  solution: string; // la solution apportée
  results: string; // le résultat
  tags: string[]; // prestations livrées, affichées en badges
  stats?: { value: string; label: string }[];
  testimonial?: { quote: string; author: string; role?: string };
  image?: string;
  logo?: string; // visuel de secours : logo centré sur fond neutre
  video?: string; // page détail : vidéo en héro à la place de l'image
  // Capture du site livré, affichée dans un mockup navigateur (carte + héro).
  screen?: { src: string; url: string };
};

export const realisationsList: Realisation[] = [
  // ------------------------------- SITES ---------------------------------
  {
    slug: "cg-poissonnerie",
    tags: ["Site vitrine", "Avis clients", "Référencement local"],
    client: "CG Poissonnerie",
    category: "site-internet",
    screen: {
      src: "/realisations/site-cg-poissonnerie.jpg",
      url: "poissonnerieducentre.com",
    },
    title: "Le site vitrine qui remplit le carnet de commandes",
    summary:
      "Un site vitrine pour la Poissonnerie du Centre à Gisors : produits frais, créations artisanales et service traiteur, pensé pour capter les demandes.",
    context:
      "La Poissonnerie du Centre, à Gisors, voulait une vraie présence en ligne : être trouvée par les clients de la ville, montrer son savoir-faire artisanal et faciliter la commande.",
    solution:
      "Nous avons conçu un site vitrine sur-mesure, clair et rapide : présentation de la maison et de son poissonnier, mise en avant des créations, plateaux et prestations traiteur, et un parcours de contact sans friction pour commander ou se renseigner.",
    results:
      "Le site capte énormément de demandes et donne à la poissonnerie une vitrine en ligne à la hauteur de son comptoir : les clients découvrent les prestations traiteur et commandent en avance.",
  },
  {
    slug: "f-comme-fermeture",
    tags: ["Google Ads", "Page de conversion", "Suivi des performances"],
    client: "F Comme Fermetures",
    category: "site-internet",
    screen: {
      src: "/realisations/site-f-comme-fermeture.jpg",
      url: "fcommefermetures.com",
    },
    title: "1 500 € investis en publicité, 18 000 € de chiffre d'affaires",
    summary:
      "Landing page et campagnes publicitaires pour un artisan menuisier alsacien : un retour sur investissement de 12 fois la mise.",
    context:
      "F Comme Fermetures, artisan menuisier spécialisé dans la pose de fenêtres, volets et portes en Alsace, voulait générer des demandes qualifiées sans dépendre du bouche-à-oreille. L'enjeu : transformer un budget publicitaire maîtrisé en clients signés.",
    solution:
      "Nous avons mis en place des campagnes Google Ads ciblées et une landing page pensée pour convertir : promesse claire, avis Google 5 étoiles mis en avant et formulaire de devis accessible dès le premier écran.",
    results:
      "Avec 1 500 € investis, la campagne a généré 1 500 clics, 30 leads qualifiés et 6 clients signés, pour 18 000 € de chiffre d'affaires. Un retour sur investissement de 12 pour 1.",
    stats: [
      { value: "×12", label: "retour sur investissement" },
      { value: "30", label: "leads qualifiés" },
      { value: "6", label: "clients signés" },
      { value: "18 000 €", label: "de chiffre d'affaires généré" },
    ],
  },
  {
    slug: "bs-traiteur",
    tags: ["Site vitrine", "SEO", "Demandes de devis"],
    client: "BS Traiteur",
    category: "site-internet",
    screen: {
      src: "/realisations/site-bs-traiteur.jpg",
      url: "bs-traiteur.fr",
    },
    title: "Le traiteur que Google place en tête des recherches",
    summary:
      "Site vitrine et référencement pour un traiteur événementiel : des demandes de devis en continu grâce à un très bon positionnement Google.",
    context:
      "BS Traiteur, cuisinier à domicile et traiteur événementiel (mariages, baptêmes, événements d'entreprise), avait besoin d'un site à la hauteur de ses prestations, capable de transformer les recherches locales en demandes de devis.",
    solution:
      "Nous avons créé un site vitrine élégant qui met les prestations en appétit, structuré pour le référencement naturel : contenus travaillés, pages dédiées aux entreprises et aux particuliers, avis clients mis en avant et parcours de demande de devis simplifié.",
    results:
      "Le site est 1er sur Google sur les recherches BS Traiteur, devant des traiteurs parisiens réputés, et capte énormément de demandes de devis. Le traiteur reçoit un flux régulier de nouveaux contacts qualifiés.",
  },
  {
    slug: "owen",
    client: "Owen",
    category: "site-internet",
    title: "Un tunnel de vente qui transforme l'audience en clients",
    summary:
      "Création d'un tunnel de vente complet pour une offre de coaching : un parcours pensé pour convertir, de la page de vente au paiement.",
    context:
      "Owen vendait ses coachings sans parcours structuré : son audience s'intéressait, mais rien ne la guidait jusqu'à l'achat. Il lui fallait un tunnel de vente clair et convaincant.",
    solution:
      "Nous avons conçu son tunnel de bout en bout : une page de vente au copywriting travaillé, un parcours simplifié au maximum et un paiement fluide, sans étape superflue.",
    results:
      "Le tunnel a généré des ventes dès son lancement et Owen est pleinement satisfait du résultat. Son offre de coaching dispose maintenant d'un parcours qui convertit, en continu et sans intervention manuelle.",
    tags: ["Tunnel de vente", "Copywriting", "Paiement en ligne"],
  },

  // ----------------------------- E-COMMERCE ------------------------------
  {
    slug: "sab",
    tags: ["E-commerce", "Personnalisation produit", "Autonomie de gestion"],
    client: "Le petit atelier de Sab",
    category: "e-commerce",
    screen: {
      src: "/realisations/site-sab.jpg",
      url: "lepetitatelierdesab.fr",
    },
    title: "Un e-commerce aussi soigné que ses créations",
    summary:
      "Boutique en ligne pour un atelier de personnalisation : textile floqué, gravure, objets personnalisés. Un parcours simple, de l'idée à la commande.",
    context:
      "Le petit atelier de Sab personnalise à la main textile, gourdes, gobelets et objets gravés. Il fallait une boutique en ligne chaleureuse, capable de présenter sept univers de produits et de guider chaque client vers sa création.",
    solution:
      "Nous avons conçu un e-commerce fidèle à l'identité de l'atelier : univers clairs, personnalisation directement sur la fiche produit (texte, visuel), parcours de commande simple et paiement sécurisé.",
    results:
      "Une boutique opérationnelle que Sab pilote en toute autonomie : les clients personnalisent et commandent en ligne, l'atelier produit et expédie.",
  },
  {
    slug: "naawah",
    tags: ["Refonte e-commerce", "Design premium", "Base technique saine"],
    logo: "/realisations/naawah-logo.png",
    screen: {
      src: "/realisations/site-naawah.jpg",
      url: "naawah.com",
    },
    client: "Naawah",
    category: "e-commerce",
    title: "Reconstruire l'e-commerce d'une marque de cacao de luxe",
    summary:
      "Refonte complète d'une boutique en ligne haut de gamme après un prestataire défaillant : tout a été reconstruit proprement.",
    context:
      "Naawah, marque de cacao de luxe, sortait d'une expérience difficile : l'ancien prestataire avait livré un site incohérent et inexploitable. Il fallait tout reprendre, vite et bien.",
    solution:
      "Nous avons reconstruit l'e-commerce de zéro : architecture propre, design à la hauteur du positionnement luxe de la marque, parcours d'achat fluide et base technique saine pour la suite.",
    results:
      "Une boutique en ligne enfin fiable et élégante, alignée avec le positionnement premium de la marque, sur des fondations techniques solides.",
    testimonial: {
      quote:
        "Un site qui nous ressemble, créatif et efficace. Le résultat dépasse le brief.",
      author: "Naawah",
    },
  },
  {
    slug: "fleur-et-vegetal",
    tags: ["Refonte e-commerce", "Parcours d'achat", "Mobile"],
    client: "Fleur et Végétal",
    category: "e-commerce",
    screen: {
      src: "/realisations/site-fleur-et-vegetal.jpg",
      url: "fleuretvegetal.fr",
    },
    title: "Une boutique en ligne remise au goût du jour",
    summary:
      "Modernisation de la boutique en ligne d'un fleuriste : un catalogue clair et un parcours d'achat repensé pour vendre mieux.",
    context:
      "Fleur et Végétal, fleuriste haut de gamme, disposait d'une partie e-commerce vieillissante qui freinait les ventes en ligne.",
    solution:
      "Nous avons refondu la boutique : catalogue organisé par type de création (bouquets du moment, sur commande, fleurs séchées, roses), photos mises en valeur, parcours d'achat simplifié et expérience mobile revue.",
    results:
      "Un e-commerce plus clair et plus agréable, qui facilite le passage à l'achat.",
  },

  // ------------------------------- VIDÉO ---------------------------------
  {
    slug: "cuisine-schmidt",
    tags: ["Vidéos récurrentes", "Image de marque", "Événementiel"],
    image: "/realisations/cuisine-schmidt.jpg",
    client: "Cuisine Schmidt",
    category: "video",
    title: "250 000 vues en 2 semaines, un contrat renouvelé pour 3 ans",
    summary:
      "Production vidéo récurrente pour Cuisine Schmidt : image de marque, contenus et événements. Premier contrat d'un an transformé en partenariat de 3 ans.",
    context:
      "Cuisine Schmidt cherchait un partenaire vidéo régulier pour nourrir son image de marque : contenus, branding et couverture d'événements. Un premier contrat d'un an a été signé en mars 2025.",
    solution:
      "Nous produisons des vidéos récurrentes qui alimentent la marque sur tous ses canaux : films d'image, contenus pour les réseaux, captation d'événements. Un rythme régulier, une qualité constante.",
    results:
      "250 000 vues en 2 semaines seulement sur les premières publications, une notoriété en hausse et un impact direct sur l'activité. Résultat : le contrat initial d'un an a été renouvelé pour 3 ans.",
    stats: [
      { value: "250 000", label: "vues en 2 semaines" },
      { value: "3 ans", label: "de contrat renouvelé" },
    ],
    testimonial: {
      quote:
        "Des vidéos de nos showrooms impeccables. On les utilise partout, du site aux réseaux sociaux.",
      author: "Cuisine Schmidt",
      role: "Cuisiniste",
    },
  },
  {
    slug: "dachser",
    tags: ["Événementiel", "Drone", "Film corporate"],
    image: "/realisations/dachser.jpg",
    client: "Dachser",
    category: "video",
    title: "Trois tournages pour un groupe logistique international",
    summary:
      "Couverture vidéo des événements Dachser : journée tennis aux Internationaux de Strasbourg, journée des partenaires et journée des collaborateurs, avec prises de vue drone.",
    context:
      "Dachser, groupe international de transport et logistique, voulait valoriser ses événements internes et ses moments partenaires avec des vidéos à la hauteur de sa marque.",
    solution:
      "Trois tournages menés de bout en bout : une journée tennis pour illustrer leurs rencontres aux Internationaux de Strasbourg, la journée des partenaires et la journée des collaborateurs, avec prises de vue au drone pour donner de l'ampleur aux images.",
    results:
      "Des films professionnels que le groupe utilise pour sa communication interne et externe, et une collaboration installée sur la durée : trois tournages livrés, trois fois renouvelée.",
    testimonial: {
      quote:
        "Des vidéos corporate à la hauteur d'un groupe international. Cadrage, tournage, livraison : tout était carré.",
      author: "Dachser",
      role: "Transport & logistique",
    },
  },
  {
    slug: "saas-summit",
    tags: ["Captation d'événement", "Interviews", "Formats réseaux"],
    image: "/realisations/saas-summit.jpg",
    video: "/realisations/saas-summit.mp4",
    client: "SaaS Summit",
    category: "video",
    title: "Au cœur de l'événement des entrepreneurs du SaaS",
    summary:
      "Captation vidéo d'un événement entrepreneurial : conférences, workshops et interviews des fondateurs présents.",
    context:
      "En collaboration avec les frères Chapelon, Paul-Marie et Rafael, le SaaS Summit réunissait de nombreux entrepreneurs (Kylian, Robin, Raphaël et d'autres) autour de conférences et de workshops.",
    solution:
      "Nous avons couvert l'événement et les workshops : captation des temps forts, des interventions et de l'énergie de la salle, avec des formats pensés pour les réseaux sociaux.",
    results:
      "Des contenus qui prolongent l'événement bien après sa clôture et valorisent ses intervenants comme ses organisateurs.",
  },
  {
    slug: "mg-chapelon",
    tags: ["Direction artistique", "Tournage", "Montage"],
    image: "/realisations/mg-chapelon.jpg",
    client: "MG Chapelon",
    category: "video",
    title: "L'image de marque qui accompagne leur croissance",
    summary:
      "Travail de fond sur l'image de marque de Mathias et Grégoire Chapelon : direction artistique et qualité de contenu.",
    context:
      "Mathias et Grégoire Chapelon voulaient professionnaliser leur image et la qualité de leurs contenus pour accompagner leur croissance.",
    solution:
      "Nous travaillons leur image de marque en vidéo : direction artistique, tournages soignés et montage exigeant, avec une cohérence visuelle sur tous leurs contenus, des réseaux sociaux à leurs événements.",
    results:
      "Une identité visuelle affirmée, des contenus dont la qualité sert directement leur crédibilité d'entrepreneurs, et une collaboration qui dure depuis maintenant plusieurs mois.",
    testimonial: {
      quote:
        "Shooting et vidéos livrés en avance, rendu au-dessus de ce qu'on imaginait. L'équipe capte vite et propose toujours mieux que ce qu'on demande.",
      author: "Mathias et Grégoire Chapelon",
      role: "SaaS Builder",
    },
  },
  {
    slug: "ahb",
    tags: ["Vidéo sportive", "Reels", "Réseaux sociaux"],
    client: "AHB",
    category: "video",
    title: "Des vidéos sportives vues des centaines de milliers de fois",
    summary:
      "Vidéos d'équipe pour le club AHB : des réels qui atteignent des centaines de milliers de vues.",
    context:
      "Le club AHB voulait faire rayonner ses équipes au-delà de ses supporters et donner envie de suivre le club.",
    solution:
      "Nous produisons des vidéos sportives à forte intensité : temps forts des matchs, coulisses des équipes et formats courts calibrés pour les réseaux sociaux.",
    results:
      "Une visibilité énorme pour le club : plusieurs réels atteignent des centaines de milliers de vues.",
    stats: [{ value: "100 000+", label: "vues sur plusieurs réels" }],
  },
  {
    slug: "hsg",
    tags: ["Vidéo sportive", "Formats courts", "Réseaux sociaux"],
    client: "HSG",
    category: "video",
    title: "Le club vit aussi en dehors du terrain",
    summary:
      "Vidéos d'équipe pour le club HSG : des contenus qui donnent de la visibilité au club et à ses joueurs.",
    context:
      "Comme beaucoup de clubs, HSG manquait de contenus à la hauteur de ce qui se joue sur le terrain.",
    solution:
      "Nous filmons les équipes et les matchs, puis produisons des formats courts pensés pour les réseaux sociaux du club.",
    results:
      "Une présence en ligne dynamisée et une visibilité en nette hausse pour le club et ses équipes.",
  },
  {
    slug: "pirates-handball",
    tags: ["Vidéo sportive", "Formats courts", "Coulisses"],
    client: "Les Pirates Handball",
    category: "video",
    title: "L'intensité du handball en formats courts",
    summary:
      "Vidéos pour le club des Pirates : temps forts des matchs et coulisses en formats courts pour les réseaux.",
    context:
      "Les Pirates voulaient des contenus vidéo réguliers pour faire vivre le club en ligne et rassembler leur communauté au-delà des tribunes.",
    solution:
      "Captation des matchs et des coulisses, montage rythmé et formats verticaux prêts à publier sur les réseaux du club.",
    results:
      "Des contenus qui fédèrent la communauté et augmentent la visibilité du club et de ses équipes.",
  },
  {
    slug: "metz-handball",
    tags: ["Vidéo sportive", "Formats courts", "Réseaux sociaux"],
    client: "Metz Handball",
    category: "video",
    title: "Des images à la hauteur d'un grand club",
    summary:
      "Production vidéo pour Metz Handball : l'intensité des matchs captée et montée en formats courts pour les réseaux.",
    context:
      "Metz Handball, club de référence du handball français, attend des contenus au niveau de son exigence sportive.",
    solution:
      "Nous captons l'intensité des rencontres et la vie du club, puis livrons des formats courts calibrés pour les réseaux sociaux.",
    results:
      "Des images à la hauteur du club, qui font vivre les matchs bien au-delà de la salle.",
  },
  {
    slug: "karcher-tp",
    tags: ["Interview", "Film d'entreprise", "Sponsoring"],
    client: "Karcher TP",
    category: "video",
    title: "Une vidéo d'entreprise pour un dossier de sponsoring",
    summary:
      "Interview et plans de l'entreprise : une vidéo professionnelle réalisée pour appuyer un sponsoring.",
    context:
      "Karcher TP avait besoin d'une vidéo d'entreprise soignée dans le cadre d'un sponsoring : présenter l'activité et incarner la société.",
    solution:
      "Nous avons tourné une interview et des plans de l'entreprise en activité, puis monté un film clair et valorisant.",
    results:
      "Une vidéo professionnelle qui présente l'entreprise sous son meilleur jour et sert son image de sponsor.",
  },
  {
    slug: "tbv",
    client: "TBV",
    category: "video",
    title: "Une soirée After Work capturée en vidéo et en photos",
    summary:
      "Couverture photo et vidéo de la soirée After Work de TBV : l'ambiance du showroom et de ses invités, prête à revivre sur les réseaux.",
    context:
      "TBV organisait une soirée After Work dans son showroom automobile et voulait en garder une trace à la hauteur de l'événement, pour ses invités comme pour sa communication.",
    solution:
      "Nous avons couvert la soirée en photo et en vidéo : l'ambiance, les voitures, les invités et les moments forts, puis livré un aftermovie et une série de photos prêtes à publier.",
    results:
      "Des contenus qui prolongent l'événement bien après la soirée et que TBV réutilise sur ses réseaux pour entretenir son image.",
    tags: ["Aftermovie", "Photo événementiel", "Réseaux sociaux"],
    testimonial: {
      quote:
        "Des vidéos qui ont donné un vrai coup de neuf à notre image. Réactifs et à l'écoute du début à la fin.",
      author: "TBV",
    },
  },
  {
    slug: "benfeld-avec-vous",
    tags: ["Vidéos de campagne", "Portraits d'équipe", "Réseaux sociaux"],
    client: "Benfeld avec vous, pour vous",
    category: "video",
    title: "Une campagne municipale portée par la vidéo",
    summary:
      "Vidéos de campagne pour les élections municipales de Benfeld : présentation de l'équipe et de ses idées, relayée par les DNA.",
    context:
      "Pour les élections municipales de Benfeld, la liste « Benfeld avec vous, pour vous » voulait présenter son équipe et ses idées pour la ville de manière moderne et accessible.",
    solution:
      "Nous avons conçu et produit les vidéos de campagne : présentation des membres de l'équipe, mise en valeur du programme et formats adaptés aux réseaux sociaux.",
    results:
      "Une campagne très visible, reprise par les DNA (Dernières Nouvelles d'Alsace), qui a permis à la liste de toucher bien au-delà de ses cercles habituels.",
  },
  // -------------------------------- IA -----------------------------------
  {
    slug: "prcp",
    client: "PRCP",
    category: "ia",
    title: "L'accueil téléphonique qui ne manque plus jamais un appel",
    summary:
      "IA téléphonique pour une entreprise de rénovation de piscines : elle répond aux appels entrants, oriente vers le bon service et capte chaque demande, 24h/24.",
    context:
      "Chez PRCP, entreprise de rénovation de piscines, chaque appel manqué était un chantier potentiel perdu : impossible de répondre à tout, tout le temps, entre les interventions, les congés et les horaires d'ouverture.",
    solution:
      "Nous avons déployé une IA téléphonique qui décroche chaque appel entrant, comprend la demande et oriente l'appelant vers le bon interlocuteur : devis, suivi de chantier ou entretien. En parallèle, une automatisation d'e-mails enregistre chaque demande et la transmet immédiatement à l'équipe concernée.",
    results:
      "L'accueil tourne désormais 24h/24, 7j/7, congés compris : chaque appel est pris en charge, chaque demande est captée et tracée. Plus aucun client perdu faute de réponse.",
    tags: ["IA téléphonique", "Automatisation d'e-mails", "Accueil 24h/24"],
    stats: [
      { value: "24h/24", label: "de disponibilité, congés compris" },
      { value: "0", label: "appel laissé sans réponse" },
      { value: "100 %", label: "des demandes captées et tracées" },
    ],
  },

  // ------------------------------- PHOTO ---------------------------------
  {
    slug: "fynn-porsche",
    client: "Fynn",
    category: "photo",
    title: "Une Porsche Spyder RS sous son meilleur angle",
    summary:
      "Shooting photo et vidéo automobile : la Porsche de Fynn mise en scène sur route et en lumière naturelle, du détail de jante au plan large.",
    context:
      "Fynn voulait des images à la hauteur de sa Porsche Spyder RS : des photos et des vidéos soignées, pour le plaisir et pour les partager.",
    solution:
      "Nous avons organisé un shooting complet : repérage des décors, prises de vue sur route et en pleine nature, plans de détail de la voiture, puis retouche et étalonnage pour un rendu digne d'un constructeur.",
    results:
      "Une série de photos et de vidéos que leur propriétaire est fier de partager, et qui montre notre exigence sur l'automobile.",
    tags: ["Shooting automobile", "Vidéo", "Retouche & étalonnage"],
    image: "/photos/photo-7.jpg",
  },
];

// Ordre de mise en avant : les projets les plus forts d'abord (vue « Tous »
// et carrousel de l'accueil). Les slugs absents gardent l'ordre du tableau.
export const featuredOrder = [
  "dachser",
  "cuisine-schmidt",
  "saas-summit",
  "mg-chapelon",
  "naawah",
  "fynn-porsche",
];

export const orderedRealisations: Realisation[] = [
  ...featuredOrder
    .map((slug) => realisationsList.find((r) => r.slug === slug))
    .filter((r): r is Realisation => r !== undefined),
  ...realisationsList.filter((r) => !featuredOrder.includes(r.slug)),
];

export function getRealisation(slug: string): Realisation | undefined {
  return realisationsList.find((r) => r.slug === slug);
}
