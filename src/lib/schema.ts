// Données structurées (JSON-LD) globales : l'entreprise, son fondateur et le
// site, reliés par des @id. Google et les moteurs IA s'en servent pour
// comprendre qui est Webelevate, où elle intervient et ce qu'elle fait.
// L'adresse et le téléphone doivent rester identiques à la fiche Google Business.

import { site } from "./site";

export const BUSINESS_ID = `${site.url}/#business`;
export const FOUNDER_ID = `${site.url}/#oscar`;
export const WEBSITE_ID = `${site.url}/#website`;

// Transforme un chemin local ("/realisations/x.jpg") en URL absolue.
export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "Webelevate",
      description: site.description,
      url: site.url,
      logo: absoluteUrl("/logo-webelevate-icon.png"),
      image: absoluteUrl("/logo-webelevate-icon.png"),
      email: site.email,
      telephone: "+33658488714",
      // Même localisation que la fiche Google Business (zone de service
      // « Strasbourg ») ; le siège légal (Benfeld) figure dans les mentions légales.
      address: {
        "@type": "PostalAddress",
        addressLocality: "Strasbourg",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Strasbourg" },
        { "@type": "City", name: "Benfeld" },
        { "@type": "City", name: "Erstein" },
        { "@type": "City", name: "Sélestat" },
        { "@type": "City", name: "Obernai" },
        { "@type": "AdministrativeArea", name: "Eurométropole de Strasbourg" },
        { "@type": "AdministrativeArea", name: "Alsace" },
        { "@type": "AdministrativeArea", name: "Grand Est" },
        { "@type": "Country", name: "France" },
      ],
      knowsAbout: [
        "Création de sites internet",
        "Site e-commerce",
        "Production vidéo d'entreprise",
        "Captation d'événements",
        "Photographie d'entreprise",
        "Shooting photo produit",
        "Automatisation IA",
        "Référencement local",
      ],
      founder: { "@id": FOUNDER_ID },
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Oscar Goerger",
      jobTitle: "Fondateur de Webelevate",
      worksFor: { "@id": BUSINESS_ID },
      url: `${site.url}/studio`,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: site.url,
      name: "Webelevate",
      inLanguage: "fr-FR",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};
