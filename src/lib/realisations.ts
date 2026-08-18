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
  // Catégories additionnelles : le projet apparaît aussi dans ces filtres
  // (ex. SaaS Summit couvert en vidéo ET en photo).
  extraCategories?: RealisationCategory[];
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
  videoSound?: boolean; // la vidéo héro a une piste audio (son au clic)
  // Capture du site livré, affichée dans un mockup navigateur (carte + héro).
  screen?: { src: string; url: string };
  // Page détail : galerie photos affichée après le récit (accordéon si 4
  // photos ou plus, sinon grille simple).
  gallery?: string[];
  // Page détail : réels vidéo (lecture au survol / au tap).
  reels?: { src: string; poster?: string }[];
  // Réels au format vertical 9:16 (sinon 4:3).
  reelsVertical?: boolean;
  // Page détail : identifiant d'une vidéo YouTube mise en avant après le récit.
  youtube?: string;
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
      "La Poissonnerie du Centre, tenue par Cédric Guillemot à Gisors, n'avait aucune vraie présence en ligne. Tout son savoir-faire se jouait au comptoir : produits frais, créations artisanales, plateaux et prestations traiteur pour les événements privés. Il fallait une vitrine capable de montrer tout cela, d'être trouvée par les clients de la ville et de faciliter la commande.",
    solution:
      "Nous avons conçu un site vitrine sur-mesure, clair et rapide, qui présente la maison et son poissonnier : les créations, les plateaux, le service traiteur pour les événements privés, les offres du mois et les avis clients. Les informations pratiques (deux points de vente, horaires, fermetures exceptionnelles) restent toujours à jour, et le parcours de contact permet de commander ou de se renseigner sans friction.",
    results:
      "La poissonnerie a gagné une vraie visibilité en ligne : les clients découvrent les prestations traiteur, consultent les offres du moment et commandent en avance. Le site capte énormément de demandes, pour le magasin comme pour les événements privés.",
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
      "F Comme Fermetures, artisan menuisier spécialisé dans la pose de fenêtres, volets et portes, dépendait du bouche-à-oreille pour trouver ses chantiers. L'objectif : générer un flux de demandes qualifiées sur son secteur, avec un budget publicitaire maîtrisé et un retour mesurable.",
    solution:
      "Nous avons tout construit de bout en bout : la landing page et les campagnes Google Ads. Les annonces ciblent l'Alsace sur des mots-clés précis liés à la pose de fenêtres, volets et portes. Chaque clic arrive sur une page pensée pour convertir : promesse claire, avis Google 5 étoiles mis en avant et formulaire de devis accessible dès le premier écran. Les performances sont suivies campagne par campagne, pour savoir exactement ce que rapporte chaque euro investi.",
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
      "BS Traiteur, cuisinier à domicile et traiteur événementiel à Wittelsheim (mariages, baptêmes, apéritifs dînatoires, événements d'entreprise), avait besoin d'une présence en ligne à la hauteur de ses prestations, capable de transformer les recherches Google en demandes de devis.",
    solution:
      "Nous avons travaillé sur trois fronts : un site vitrine élégant qui met les prestations en appétit, avec des pages dédiées aux entreprises et aux particuliers ; le référencement naturel (structure, contenus, pages optimisées) ; et la collecte d'avis Google pour bâtir la preuve sociale. Le parcours de demande de devis a été simplifié au maximum.",
    results:
      "Le site est 1er sur Google sur les recherches BS Traiteur, devant des traiteurs bien installés, avec une note de 5 étoiles portée par des dizaines d'avis clients. Résultat : un flux régulier de demandes de devis et de nouveaux contacts qualifiés.",
  },
  {
    slug: "owen",
    client: "Owen",
    category: "site-internet",
    title: "Un tunnel de vente qui transforme l'audience en clients",
    summary:
      "Création d'un tunnel de vente complet pour une offre de coaching : un parcours pensé pour convertir, de la page de vente au paiement.",
    context:
      "Owen vend des coachings en un contre un. Son audience s'intéressait, mais rien ne la guidait jusqu'à l'achat : pas de page de vente, pas de parcours structuré, des ventes qui reposaient uniquement sur les échanges en direct.",
    solution:
      "Nous avons construit son tunnel de vente complet sur Systeme.io : une page de vente au copywriting travaillé, une offre claire, un parcours réduit au strict nécessaire et un paiement en ligne fluide. Chaque étape a été pensée pour transformer l'intérêt en achat, sans intervention manuelle.",
    results:
      "Le tunnel a généré des ventes dès son lancement et Owen est pleinement satisfait du résultat. Son offre de coaching dispose maintenant d'un parcours qui convertit en continu, pendant qu'il se concentre sur ses clients.",
    tags: ["Tunnel de vente", "Systeme.io", "Copywriting"],
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
      "Le petit atelier de Sab personnalise à la main textile, gourdes, gobelets et objets gravés. Sabrina n'avait aucun site : les commandes se géraient au fil des messages, pièce par pièce. Il lui fallait une boutique en ligne fidèle à son univers, capable de présenter ses sept familles de produits, de simplifier la gestion des commandes et de la rendre visible en ligne.",
    solution:
      "Nous avons créé son e-commerce de zéro, dans un univers chaleureux qui lui ressemble : sept univers de produits clairement organisés, personnalisation directement sur la fiche produit (texte, visuel), paiement sécurisé et parcours de commande simple. Le tout pensé pour qu'elle soit totalement autonome au quotidien.",
    results:
      "Sab est passée de zéro présence en ligne à une boutique complète qu'elle pilote seule : les clients personnalisent et commandent sur le site, l'atelier produit et expédie. Les demandes arrivent désormais directement en ligne.",
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
      "Naawah, marque de cacao de luxe, sortait d'une expérience difficile : l'ancien prestataire avait livré un site incohérent, loin du positionnement haut de gamme de la marque et inexploitable au quotidien. Il fallait tout reprendre, vite et bien.",
    solution:
      "Nous avons reconstruit l'e-commerce de zéro : architecture propre, design sobre et élégant à la hauteur de l'univers du luxe, mise en valeur des grands crus et des terroirs, parcours d'achat fluide. Chaque page a été pensée pour refléter l'image de marque, de la collection aux engagements de la maison.",
    results:
      "Une boutique enfin fiable et élégante, alignée avec le positionnement premium de Naawah, sur des fondations techniques saines. La marque dispose d'un e-commerce qui lui ressemble et qu'elle peut faire évoluer sereinement.",
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
      "Fleur et Végétal, fleuriste haut de gamme, disposait d'une partie e-commerce vieillissante : design daté, parcours d'achat confus, une expérience qui freinait les ventes en ligne.",
    solution:
      "Nous avons repris toute la partie e-commerce : design modernisé, pages produits retravaillées côté UX/UI, catalogue organisé par type de création (bouquets, plantes, créations végétales) et un tunnel de vente simplifié où chaque étape est optimisée pour la conversion, sur ordinateur comme sur mobile.",
    results:
      "Une boutique plus claire, plus élégante et plus simple à parcourir : le passage à l'achat est devenu naturel, et le site reflète enfin le niveau des créations de l'atelier.",
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
      "Cuisine Schmidt cherchait un partenaire régulier pour animer la présence en ligne de son magasin : du contenu de qualité, publié à un rythme constant. Un premier contrat d'un an de community management a été signé en mars 2025.",
    solution:
      "Chaque mois, nous venons produire photos et vidéos au showroom : formats courts pour les réseaux sociaux, mise en valeur des cuisines et de l'équipe, couverture des événements du magasin. Un rythme régulier, une qualité constante et une image cohérente sur tous les canaux.",
    results:
      "250 000 vues en 2 semaines seulement sur les premières publications, une notoriété locale en nette hausse et un impact direct sur l'activité du magasin. Résultat : le contrat initial d'un an a été renouvelé pour 3 ans de collaboration.",
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
      "Dachser, groupe international de transport et logistique, voulait valoriser ses temps forts internes et partenaires avec des vidéos à la hauteur de sa marque. Trois événements nous ont été confiés.",
    solution:
      "Trois tournages menés de bout en bout : une journée avec les collaborateurs aux Internationaux de Strasbourg (meetings le matin, repas, puis le tennis), la journée des partenaires à l'agence de Strasbourg avec des plans drone du site, et la journée des collaborateurs avec l'ensemble des équipes. À chaque fois : captation, montage et livraison de films prêts à diffuser.",
    results:
      "Des films professionnels que le groupe utilise pour sa communication interne et externe, et une collaboration installée sur la durée : trois événements confiés, trois fois renouvelée.",
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
    youtube: "_kIxjlEf_0U",
    gallery: [
      "/realisations/saas-summit-1.jpg",
      "/realisations/saas-summit-2.jpg",
      "/realisations/saas-summit-3.jpg",
      "/realisations/saas-summit-4.jpg",
      "/realisations/saas-summit-5.jpg",
      "/realisations/saas-summit-6.jpg",
      "/realisations/saas-summit-7.jpg",
    ],
    client: "SaaS Summit",
    category: "video",
    extraCategories: ["photo"],
    title: "Au cœur de l'événement des entrepreneurs du SaaS",
    stats: [{ value: "200", label: "founders réunis à l'événement" }],
    summary:
      "Captation vidéo et photo d'un événement entrepreneurial : conférences, workshops et interviews des fondateurs présents.",
    context:
      "Organisé en collaboration avec les frères Chapelon (Mathias et Grégoire Chapelon), Paul-Marie Hamon et Rafael Guilbert, le SaaS Summit réunissait de nombreux entrepreneurs, dont Kylian Khalifa, Robin Dormion et Raphaël Guilhem, autour de conférences et de workshops.",
    solution:
      "Nous avons couvert l'événement et les workshops : captation des temps forts, des interventions et de l'énergie de la salle, avec des formats pensés pour les réseaux sociaux.",
    results:
      "Des contenus qui prolongent l'événement bien après sa clôture et valorisent ses intervenants comme ses organisateurs.",
  },
  {
    slug: "saas-workshop",
    tags: ["Captation d'événement", "Workshop privé", "Vidéo YouTube"],
    client: "SaaS Summit Workshop",
    category: "video",
    extraCategories: ["photo"],
    image: "/realisations/saas-workshop.jpg",
    video: "/realisations/saas-workshop.mp4",
    youtube: "n-3MkCnVCPI",
    gallery: [
      "/realisations/saas-workshop-1.jpg",
      "/realisations/saas-workshop-2.jpg",
      "/realisations/saas-workshop-3.jpg",
      "/realisations/saas-workshop-4.jpg",
      "/realisations/saas-workshop-5.jpg",
      "/realisations/saas-workshop-6.jpg",
      "/realisations/saas-workshop-7.jpg",
      "/realisations/saas-workshop-8.jpg",
    ],
    title: "Un workshop privé capté de bout en bout",
    summary:
      "Captation vidéo et photo du workshop privé du SaaS Summit au Novotel Paris Bercy : une journée d'ateliers entre entrepreneurs, à huis clos.",
    context:
      "Au lendemain du SaaS Summit, les organisateurs réunissaient une sélection d'entrepreneurs pour une journée complète de workshop privé à l'hôtel Novotel Paris Bercy : des ateliers concrets, des échanges directs et beaucoup de valeur partagée, loin du public de la veille.",
    solution:
      "Nous avons couvert la journée en vidéo et en photo de bout en bout : les ateliers, les échanges entre entrepreneurs et l'énergie des sessions, avec la discrétion qu'impose un événement à huis clos. Le tout décliné en formats courts pour les réseaux et en une vidéo YouTube qui retrace la journée.",
    results:
      "Des contenus qui font vivre ce workshop privé au-delà de ses participants : la vidéo YouTube retrace la journée et les formats courts valorisent l'événement comme ses organisateurs.",
  },
  {
    slug: "mg-chapelon",
    tags: ["Direction artistique", "Tournage", "Montage"],
    image: "/realisations/mg-chapelon.jpg",
    reels: [
      { src: "/realisations/mg-reel-1.mp4", poster: "/realisations/mg-reel-1.jpg" },
      { src: "/realisations/mg-reel-2.mp4", poster: "/realisations/mg-reel-2.jpg" },
      { src: "/realisations/mg-reel-3.mp4", poster: "/realisations/mg-reel-3.jpg" },
      { src: "/realisations/mg-reel-4.mp4", poster: "/realisations/mg-reel-4.jpg" },
      { src: "/realisations/mg-reel-5.mp4", poster: "/realisations/mg-reel-5.jpg" },
    ],
    client: "MG Chapelon",
    category: "video",
    title: "L'image de marque qui accompagne leur croissance",
    summary:
      "Travail de fond sur l'image de marque de Mathias et Grégoire Chapelon : direction artistique et qualité de contenu.",
    context:
      "Mathias et Grégoire Chapelon voulaient professionnaliser leur image pour accompagner leur croissance : des contenus à la hauteur de leurs ambitions, cohérents sur tous leurs canaux.",
    solution:
      "Nous travaillons leur image de marque en continu : vidéos YouTube, reels et photos pour Instagram, avec une direction artistique constante, des tournages soignés et un montage exigeant. La collaboration s'étend à leurs événements, aux côtés de Paul-Marie Hamon et Rafael Guilbert.",
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
    extraCategories: ["photo"],
    image: "/realisations/ahb.jpg",
    gallery: [
      "/realisations/ahb-1.jpg",
      "/realisations/ahb-2.jpg",
      "/realisations/ahb-3.jpg",
      "/realisations/ahb-4.jpg",
      "/realisations/ahb-5.jpg",
      "/realisations/ahb-6.jpg",
    ],
    reels: [
      { src: "/realisations/ahb-reel-1.mp4", poster: "/realisations/ahb-reel-1.jpg" },
    ],
    reelsVertical: true,
    title: "Des vidéos sportives vues des centaines de milliers de fois",
    summary:
      "Vidéos et photos d'équipe pour le club AHB : des réels qui dépassent les 160 000 vues.",
    context:
      "Le club AHB voulait faire rayonner ses équipes au-delà de ses supporters et donner envie de suivre le club.",
    solution:
      "Nous produisons des vidéos sportives à forte intensité : temps forts des matchs, coulisses des équipes et formats courts calibrés pour les réseaux sociaux, complétés par des photos de match.",
    results:
      "Une visibilité énorme pour le club : le réel ci-dessous dépasse à lui seul les 160 000 vues, et plusieurs autres atteignent des centaines de milliers de vues.",
    stats: [{ value: "160 000+", label: "vues sur un seul réel" }],
  },
  {
    slug: "hsg",
    tags: ["Vidéo sportive", "Formats courts", "Réseaux sociaux"],
    client: "HSG",
    category: "video",
    extraCategories: ["photo"],
    image: "/realisations/hsg.jpg",
    gallery: [
      "/realisations/hsg-1.jpg",
      "/realisations/hsg-2.jpg",
      "/realisations/hsg-3.jpg",
      "/realisations/hsg-4.jpg",
      "/realisations/hsg-5.jpg",
    ],
    reels: [
      { src: "/realisations/hsg-reel-1.mp4", poster: "/realisations/hsg-reel-1.jpg" },
    ],
    reelsVertical: true,
    title: "Le club vit aussi en dehors du terrain",
    summary:
      "Vidéos et photos d'équipe pour le club HSG : des contenus qui donnent de la visibilité au club et à ses joueurs.",
    context:
      "Comme beaucoup de clubs, HSG manquait de contenus à la hauteur de ce qui se joue sur le terrain.",
    solution:
      "Nous filmons les équipes et les matchs, puis produisons des formats courts pensés pour les réseaux sociaux du club, complétés par des photos de match.",
    results:
      "Une présence en ligne dynamisée et une visibilité en nette hausse pour le club et ses équipes.",
  },
  {
    slug: "piraths-handball",
    tags: ["Vidéo sportive", "Formats courts", "Coulisses"],
    client: "Les Piraths Handball",
    category: "video",
    image: "/realisations/piraths.jpg",
    reels: [
      { src: "/realisations/piraths-reel-1.mp4", poster: "/realisations/piraths-reel-1.jpg" },
      { src: "/realisations/piraths-reel-2.mp4", poster: "/realisations/piraths-reel-2.jpg" },
      { src: "/realisations/piraths-reel-3.mp4", poster: "/realisations/piraths-reel-3.jpg" },
    ],
    reelsVertical: true,
    title: "L'intensité du handball en formats courts",
    summary:
      "Vidéos pour le club des Piraths : temps forts des matchs et coulisses en formats courts pour les réseaux.",
    context:
      "Les Piraths voulaient des contenus vidéo réguliers pour faire vivre le club en ligne et rassembler leur communauté au-delà des tribunes.",
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
    image: "/realisations/metz.jpg",
    reels: [
      { src: "/realisations/metz-reel-1.mp4", poster: "/realisations/metz-reel-1.jpg" },
    ],
    reelsVertical: true,
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
    image: "/realisations/karcher.jpg",
    video: "/realisations/karcher.mp4",
    videoSound: true,
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
    category: "photo",
    image: "/realisations/tbv.jpg",
    gallery: [
      "/realisations/tbv-1.jpg",
      "/realisations/tbv-2.jpg",
      "/realisations/tbv-3.jpg",
      "/realisations/tbv-4.jpg",
      "/realisations/tbv-5.jpg",
      "/realisations/tbv-6.jpg",
    ],
    title: "Une soirée After Work capturée en photos",
    summary:
      "Couverture photo de la soirée After Work de TBV : l'ambiance du showroom et de ses invités, prête à revivre sur les réseaux.",
    context:
      "TBV organisait une soirée After Work dans son showroom automobile et voulait en garder une trace à la hauteur de l'événement, pour ses invités comme pour sa communication.",
    solution:
      "Nous avons couvert la soirée en photo : l'ambiance, les voitures, les invités et les moments forts, puis livré une série de photos prêtes à publier.",
    results:
      "Des photos qui prolongent l'événement bien après la soirée et que TBV réutilise sur ses réseaux pour entretenir son image.",
    tags: ["Photo événementiel", "Showroom", "Réseaux sociaux"],
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
      "Pour les élections municipales de Benfeld, la liste « Benfeld avec vous, pour vous » voulait une campagne moderne et incarnée : présenter son équipe et ses idées pour la ville, au-delà des tracts classiques.",
    solution:
      "Nous avons pris en charge toute l'image de la campagne : l'ensemble des photos et des vidéos, des portraits de l'équipe aux vidéos de présentation du programme, avec des formats calibrés pour les réseaux sociaux.",
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
      "Chez PRCP, entreprise de rénovation de piscines, le téléphone sonne pendant les chantiers, entre deux rendez-vous et hors horaires. Chaque appel manqué était un chantier potentiel perdu, et les congés laissaient l'accueil complètement à l'arrêt.",
    solution:
      "Nous avons déployé une IA téléphonique qui décroche chaque appel entrant, comprend la demande et oriente l'appelant vers le bon secteur de l'entreprise : devis, suivi de chantier ou entretien. En parallèle, une automatisation transmet chaque demande par e-mail à l'équipe concernée, immédiatement, même pendant les congés. L'accueil ne s'arrête jamais.",
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
    extraCategories: ["video"],
    gallery: [
      "/realisations/fynn-1.jpg",
      "/realisations/fynn-2.jpg",
      "/realisations/fynn-3.jpg",
      "/realisations/fynn-4.jpg",
      "/realisations/fynn-5.jpg",
      "/realisations/fynn-6.jpg",
      "/realisations/fynn-7.jpg",
      "/realisations/fynn-8.jpg",
      "/realisations/fynn-9.jpg",
      "/realisations/fynn-10.jpg",
      "/realisations/fynn-11.jpg",
      "/realisations/fynn-12.jpg",
      "/realisations/fynn-13.jpg",
      "/realisations/fynn-14.jpg",
    ],
    reels: [
      { src: "/realisations/fynn-reel-1.mp4", poster: "/realisations/fynn-reel-1.jpg" },
      { src: "/realisations/fynn-reel-2.mp4", poster: "/realisations/fynn-reel-2.jpg" },
    ],
    reelsVertical: true,
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
  {
    slug: "thomas-cupra",
    tags: ["Shooting automobile", "Direction artistique", "Retouche & étalonnage"],
    client: "Thomas",
    category: "photo",
    title: "Le caractère d'une Cupra en images",
    summary:
      "Shooting photo automobile : la Cupra de Thomas mise en scène, cadrages dynamiques et retouche soignée.",
    context:
      "Thomas voulait des images à la hauteur de sa Cupra : des photos soignées qui rendent justice au caractère de la voiture, pour le plaisir et pour les partager.",
    solution:
      "Nous avons organisé le shooting de bout en bout : repérage des décors, prises de vue en situation, plans de détail, puis retouche et étalonnage pour un rendu fidèle au tempérament de la voiture.",
    results:
      "Une série de photos que Thomas est fier de partager, dans la lignée de notre exigence sur l'automobile.",
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
  "saas-workshop",
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
