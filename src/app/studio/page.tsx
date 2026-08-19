import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { StudioMosaic } from "@/components/studio-mosaic";
import { StudioTerrains } from "@/components/studio-terrains";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Le studio créatif de Webelevate : photo et vidéo pour les marques et les entrepreneurs. Showreel, images et terrains de jeu.",
  alternates: { canonical: "/studio" },
};

// STUDIO — la vitrine créative, en négatif du reste du site : fond noir,
// zéro argumentaire, seulement l'image. Révélation « bulle » à l'arrivée.
export default function StudioPage() {
  return (
    <div className="relative">
      {/* Toile blanche derrière la bulle : visible pendant la révélation */}
      <div aria-hidden className="studio-canvas pointer-events-none fixed inset-0 bg-white" />
      <div className="studio-reveal relative bg-neutral-950 text-white">
        <div className="studio-zoom">
        {/* Héro : le mot, puis le showreel en très grand */}
        <section className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
          <h1 className="studio-pop text-center text-[19vw] font-semibold leading-none tracking-tight md:text-[11rem]">
            Studio
          </h1>
          <p className="studio-fade mx-auto mt-4 max-w-md text-center text-base text-white/50 md:text-lg">
            Le regard créatif de Webelevate. Photo et vidéo pour les marques et
            les entrepreneurs.
          </p>
          <div className="studio-fade mt-12 overflow-hidden rounded-2xl md:mt-16">
            <video
              src="/videos/showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>
        </section>

        {/* Manifesto : deux lignes, rien de plus */}
        <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-2xl font-medium leading-snug tracking-tight text-white/90 md:text-4xl">
            On ne prend pas des photos, on construit des images.
            <br className="max-sm:hidden" />
            <span className="text-white/40">
              {" "}
              Chaque plan sert la marque qui nous le confie.
            </span>
          </p>
        </section>

        {/* Mosaïque best-of : tuiles vivantes (diaporamas + vidéos) */}
        <section className="mx-auto max-w-6xl px-6 pb-8">
          <StudioMosaic />
        </section>

        {/* Terrains de jeu : accordéon, les projets s'ouvrent sur place */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-white/40">
            Nos terrains de jeu
          </p>
          <div className="mt-8">
            <StudioTerrains />
          </div>
          <p className="mt-6 text-sm text-white/40">
            Les études de cas complètes, avec les résultats, sont sur la page{" "}
            <Link
              href="/realisations"
              className="text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Réalisations
            </Link>
            .
          </p>
        </section>

        {/* Ce qu'on produit : le pont entre « c'est beau » et « je commande » */}
        <section className="mx-auto max-w-6xl px-6 pb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-white/40">
            Ce qu'on produit
          </p>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {[
              {
                title: "Films de marque & événementiel",
                text: "Aftermovies, films corporate, captation complète de vos temps forts.",
              },
              {
                title: "Reels & contenus réseaux",
                text: "Formats verticaux calibrés pour Instagram, TikTok et YouTube.",
              },
              {
                title: "Shootings photo",
                text: "Produit, portrait, automobile, culinaire, magasin : en studio ou sur site.",
              },
              {
                title: "Accompagnement mensuel",
                text: "Un rythme régulier de photos et de vidéos, comme pour Cuisine Schmidt.",
              },
            ].map((o) => (
              <div key={o.title} className="border-l border-white/15 pl-5">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/services#video"
            className="group mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Le détail des prestations
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </section>

          <FinalCta />
        </div>
      </div>
    </div>
  );
}
