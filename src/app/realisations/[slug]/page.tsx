import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  ExpandingGallery,
  PhotoCarousel,
} from "@/components/expanding-gallery";
import { FinalCta } from "@/components/final-cta";
import { HeroVideo } from "@/components/hero-video";
import { ReelGrid } from "@/components/reel-grid";
import {
  hasMockup,
  RealisationMockup,
  SiteScreenMockup,
} from "@/components/realisation-mockup";
import {
  getRealisation,
  orderedRealisations,
  realisationCategories,
  realisationsList,
} from "@/lib/realisations";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return realisationsList.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = getRealisation(slug);
  if (!r) return {};
  return {
    title: `${r.client} : ${r.title}`,
    description: r.summary,
    alternates: { canonical: `/realisations/${r.slug}` },
    openGraph: {
      title: `${r.client} · ${site.name}`,
      description: r.summary,
      type: "article",
      ...(r.image ? { images: [r.image] } : {}),
    },
  };
}

// Page projet : Contexte → Solution → Résultat, témoignage client si
// disponible, chiffres clés et données structurées (SEO / GEO).
export default async function RealisationPage({
  params,
}: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const r = getRealisation(slug);
  if (!r) notFound();

  const categoryLabel = [r.category, ...(r.extraCategories ?? [])]
    .map(
      (key) =>
        realisationCategories.find((c) => c.key === key)?.label ?? key,
    )
    .join(" · ");

  // Données structurées : l'étude de cas comme CreativeWork signée Webelevate.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${r.client} : ${r.title}`,
    description: r.summary,
    about: categoryLabel,
    author: { "@type": "Organization", name: "Webelevate" },
    publisher: { "@type": "Organization", name: "Webelevate" },
    ...(r.image ? { image: r.image } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-6 pb-16 pt-16 md:pt-24">
        <Link
          href="/realisations"
          className="inline-flex items-center gap-1.5 text-sm text-black/50 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Toutes les réalisations
        </Link>

        {/* En-tête */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/60">
              {categoryLabel}
            </span>
            <span className="text-sm font-medium uppercase tracking-widest text-black/40">
              {r.client}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {r.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-black/60">{r.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {r.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-black/[0.05] px-3 py-1.5 text-xs font-medium text-black/65"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Visuel principal : vidéo, capture du site, image, mockup, logo ou nom */}
        <div className="group mt-10 overflow-hidden rounded-2xl border border-black/10 bg-neutral-100">
          {r.video && r.videoSound ? (
            <HeroVideo
              src={r.video}
              poster={r.image}
              alt={`${r.client} : ${r.title}`}
            />
          ) : r.video ? (
            <video
              src={r.video}
              autoPlay
              muted
              loop
              playsInline
              poster={r.image}
              className="aspect-video w-full object-cover"
            />
          ) : r.screen ? (
            <div className="aspect-[16/10] w-full">
              <SiteScreenMockup screen={r.screen} client={r.client} hero />
            </div>
          ) : r.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={r.image}
              alt={`${r.client} : ${r.title}`}
              className="max-h-[560px] w-full object-cover"
            />
          ) : hasMockup(r.slug) ? (
            <div className="aspect-[16/9] w-full">
              <RealisationMockup slug={r.slug} hero />
            </div>
          ) : r.logo ? (
            <div className="grid aspect-[16/9] w-full place-items-center bg-neutral-50 p-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.logo}
                alt={r.client}
                className="max-h-20 w-auto max-w-[60%] object-contain"
              />
            </div>
          ) : (
            <div className="grid aspect-[16/9] w-full place-items-center">
              <span className="px-6 text-center text-4xl font-semibold tracking-tight text-neutral-300">
                {r.client}
              </span>
            </div>
          )}
        </div>

        {/* Chiffres clés : grille à colonnes égales, chiffres alignés */}
        {r.stats && (
          <div
            className={`mt-14 grid grid-cols-2 gap-x-8 gap-y-10 ${
              { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3" }[
                r.stats.length
              ] ?? "md:grid-cols-4"
            }`}
          >
            {r.stats.map((s) => (
              <div key={s.label}>
                <p className="whitespace-nowrap text-3xl font-semibold leading-none tracking-tight md:text-[2rem]">
                  {s.value}
                </p>
                <p className="mt-2.5 text-[11px] font-medium uppercase leading-snug tracking-[0.14em] text-black/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Récit du projet : court, structuré, scannable */}
        <div className="mt-14 space-y-12">
          {[
            { number: "01", heading: "Le contexte", text: r.context },
            { number: "02", heading: "La solution", text: r.solution },
            { number: "03", heading: "Le résultat", text: r.results },
          ].map((s) => (
            <section key={s.number} className="grid grid-cols-[3.5rem_1fr] gap-4 md:grid-cols-[5rem_1fr] md:gap-6">
              <span className="text-4xl font-semibold leading-none tracking-tighter text-neutral-200 md:text-5xl">
                {s.number}
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-black/65">{s.text}</p>
              </div>
            </section>
          ))}
        </div>

        {/* Galerie photos : carrousel à flèches pour les grandes séries
            (plus de 8), accordéon dès 4 photos, sinon grille simple */}
        {r.gallery && r.gallery.length > 8 ? (
          <div className="mt-14">
            <PhotoCarousel images={r.gallery} client={r.client} />
          </div>
        ) : r.gallery && r.gallery.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              En images
            </h2>
            <div className="mt-5">
              {r.gallery.length >= 4 ? (
                <ExpandingGallery images={r.gallery} client={r.client} />
              ) : (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {r.gallery.map((src, i) => (
                    <div key={src} className="overflow-hidden rounded-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${r.client} : photo ${i + 1}`}
                        loading="lazy"
                        className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ) : null}

        {/* Réels vidéo : carrousel avec flèches, lecture au survol / au tap */}
        {r.reels && r.reels.length > 0 && (
          <div className="mt-14">
            <ReelGrid
              reels={r.reels}
              client={r.client}
              vertical={r.reelsVertical}
              title={
                r.reels.length === 1
                  ? "Le réel"
                  : r.category === "photo"
                    ? "Les réels"
                    : "Leurs réels"
              }
            />
          </div>
        )}

        {/* Vidéo YouTube mise en avant */}
        {r.youtube && (
          <section className="mt-14">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              La vidéo de l'événement
            </h2>
            <div className="mt-5 aspect-video overflow-hidden rounded-2xl border border-black/10 bg-neutral-900">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${r.youtube}`}
                title={`${r.client} : vidéo YouTube`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </section>
        )}
        {/* Projet suivant : on garde le visiteur dans les réalisations */}
        {(() => {
          const idx = orderedRealisations.findIndex((p) => p.slug === r.slug);
          const next =
            orderedRealisations[(idx + 1) % orderedRealisations.length];
          return (
            <Link
              href={`/realisations/${next.slug}`}
              className="group mt-14 flex items-center justify-between rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/25 md:p-7"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-black/40">
                  Projet suivant
                </p>
                <p className="mt-1.5 text-lg font-semibold tracking-tight md:text-xl">
                  {next.client} : {next.title}
                </p>
              </div>
              <span className="ml-6 grid size-11 shrink-0 place-items-center rounded-full border border-black/15 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                <ArrowLeft className="size-4 rotate-180" />
              </span>
            </Link>
          );
        })()}
      </article>

      <FinalCta />
    </>
  );
}
