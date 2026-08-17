import type { Metadata } from "next";
import { RealisationsGrid } from "@/components/realisations-grid";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Sites internet, e-commerce et vidéos réalisés par Webelevate : CG Poissonnerie, Cuisine Schmidt, Dachser, Naawah et bien d'autres. Découvrez nos projets et leurs résultats.",
};

// RÉALISATIONS — grille filtrable par catégorie, chaque carte mène à une
// page projet rédigée (SEO).
export default function RealisationsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-black/40">
            Réalisations
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Des projets qui parlent pour nous.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-black/60">
            Sites, e-commerce, vidéos : chaque projet raconte un client, un
            besoin et un résultat.
          </p>
        </div>

        <RealisationsGrid />
      </section>

      <FinalCta />
    </>
  );
}
