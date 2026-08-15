import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { RealisationsGallery } from "@/components/realisations-gallery";
import { Testimonials } from "@/components/testimonials";

// ACCUEIL — ordre : Hero → Clients → Réalisations → Services → Process → Avis → CTA.
export default function HomePage() {
  return (
    <>
      {/* HERO (composant dédié) + slider clients */}
      <Hero />

      {/* RÉALISATIONS — carrousel de projets */}
      <RealisationsGallery />

      {/* SERVICES — grille bento (média pour photo/vidéo, propre pour sites/IA) */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
              Ce qu'on fait
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Web, image &amp; IA
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-sm text-black/60 hover:text-black sm:block"
          >
            Tous les services →
          </Link>
        </div>

        <div className="grid gap-4 md:auto-rows-[210px] md:grid-cols-4">
          {/* Photo — grande tuile média */}
          <Link
            href="/studio"
            className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white md:col-span-2 md:row-span-2"
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs text-white/20">
              [ Visuel projet photo ]
            </span>
            <span className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              Photo
            </span>
            <div className="relative">
              <h3 className="text-2xl font-medium">Photo</h3>
              <p className="mt-1 max-w-xs text-sm text-white/60">
                Shootings produits, portraits et images de marque qui marquent.
              </p>
            </div>
          </Link>

          {/* Sites internet — tuile claire */}
          <Link
            href="/services"
            className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-black/25 md:col-span-2"
          >
            <h3 className="text-xl font-medium">Sites internet</h3>
            <p className="text-sm text-black/60">
              Sites vitrines, e-commerce et web-apps sur-mesure, pensés pour
              convertir.
            </p>
          </Link>

          {/* IA — tuile claire */}
          <Link
            href="/services"
            className="flex min-h-[160px] flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-black/25 md:col-span-2"
          >
            <h3 className="text-xl font-medium">IA</h3>
            <p className="text-sm text-black/60">
              Automatisations et solutions IA pour gagner du temps et créer plus.
            </p>
          </Link>

          {/* Vidéo — tuile média large */}
          <Link
            href="/studio"
            className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white md:col-span-4"
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs text-white/20">
              [ Showreel vidéo ]
            </span>
            <span className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              Vidéo
            </span>
            <div className="relative">
              <h3 className="text-2xl font-medium">Vidéo</h3>
              <p className="mt-1 max-w-md text-sm text-white/60">
                Films de marque, reels et contenus vidéo à forte identité.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* PROCESS — comment on travaille */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight md:text-3xl">
          Notre processus
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Cadrage", "Design", "Développement", "Lancement"].map((step, i) => (
            <div key={step} className="rounded-xl border border-black/10 p-6">
              <span className="text-sm text-black/40">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-medium">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* AVIS / TÉMOIGNAGES — renfort social juste avant le CTA */}
      <Testimonials />

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-black/10 bg-black/5 p-10 text-center md:p-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Un projet en tête ?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-black/60">
            Parlons-en. On revient vers vous sous 24h.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
              className: "mt-8",
            })}
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </>
  );
}
