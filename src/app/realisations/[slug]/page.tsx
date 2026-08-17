import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
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

  const categoryLabel =
    realisationCategories.find((c) => c.key === r.category)?.label ??
    r.category;

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
          {r.video ? (
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

        {/* Chiffres clés : minimalistes, juste le chiffre et son libellé */}
        {r.stats && (
          <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10 md:flex md:flex-wrap md:justify-between md:gap-x-8">
            {r.stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-semibold leading-none tracking-tight md:text-[2.75rem]">
                  {s.value}
                </p>
                <p className="mt-2.5 max-w-[11rem] text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">
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

        {/* Témoignage du client */}
        {r.testimonial && (
          <figure className="mt-12 rounded-2xl bg-neutral-900 p-7 text-white md:p-9">
            <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
              « {r.testimonial.quote} »
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              {r.testimonial.author}
              {r.testimonial.role && ` · ${r.testimonial.role}`}
            </figcaption>
          </figure>
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
