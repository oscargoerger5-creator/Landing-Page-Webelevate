import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CalModalCleanup } from "@/components/cal-booking";
import { site } from "@/lib/site";

// Police principale : Outfit — sans-serif géométrique proche du wordmark Webelevate.
const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO : passer à https://webelevate.fr quand le domaine sera actif
  // (mettre aussi à jour sitemap.ts et robots.ts).
  metadataBase: new URL("https://webelevate.fr"),
  title: {
    // Mot-clé métier + zone géographique : ce qui s'affiche dans Google.
    default: "Webelevate · Agence web, photo & vidéo en Alsace",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

// Données structurées : l'agence en tant qu'entreprise locale (SEO / GEO).
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webelevate",
  description: site.description,
  url: "https://webelevate.fr",
  logo: "https://webelevate.fr/logo-webelevate-icon.png",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 rue Eugène Dischert",
    postalCode: "67230",
    addressLocality: "Benfeld",
    addressRegion: "Alsace",
    addressCountry: "FR",
  },
  areaServed: ["Alsace", "Strasbourg", "Grand Est", "France"],
  knowsAbout: [
    "Création de sites internet",
    "Photographie professionnelle",
    "Production vidéo",
    "Automatisation IA",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fontSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        <CalModalCleanup />
        {/* Taap.it (Radar) — suivi d'audience : trafic, clics sortants, formulaires.
            Script async natif : React 19 le remonte dans le <head> et le sert dès
            le HTML initial (requis par Radar pour détecter l'installation). */}
        <script
          async
          src="https://taap.it/scripts/tracker.js"
          data-project="pk_06d76aa0c956a33cbb135892765a825b"
          data-track-outbound="true"
          data-track-forms="true"
        />
      </body>
    </html>
  );
}
