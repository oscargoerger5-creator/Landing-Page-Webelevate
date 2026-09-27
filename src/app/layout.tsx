import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CalModalCleanup } from "@/components/cal-booking";
import { site } from "@/lib/site";
import { siteJsonLd } from "@/lib/schema";

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
  metadataBase: new URL("https://webelevate.fr"),
  title: {
    // Mot-clé métier + zone géographique : ce qui s'affiche dans Google.
    default: "Webelevate · Agence web, photo & vidéo à Strasbourg",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
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
            __html: JSON.stringify(siteJsonLd),
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
