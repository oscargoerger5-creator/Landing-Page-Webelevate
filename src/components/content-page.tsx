import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BookCallButton } from "@/components/cal-booking";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { RealisationCard } from "@/components/realisations-grid";
import {
  contentPath,
  getAllContent,
  type ContentEntry,
} from "@/lib/content";
import { getRealisation } from "@/lib/realisations";
import { absoluteUrl, BUSINESS_ID } from "@/lib/schema";
import { site } from "@/lib/site";

const KIND_LABEL: Record<ContentEntry["kind"], string> = {
  service: "Service",
  ville: "Local",
  metier: "Par métier",
  guide: "Article",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Données structurées de la page : Service (pages service / locales / métier)
// ou Article (articles du blog), + FAQPage + fil d'Ariane.
function contentJsonLd(entry: ContentEntry, parent: { name: string; path: string }) {
  const url = absoluteUrl(contentPath(entry));
  const main =
    entry.kind === "guide"
      ? {
          "@type": "Article",
          headline: entry.title,
          description: entry.description,
          datePublished: entry.datePublished,
          dateModified: entry.dateModified,
          author: { "@id": `${site.url}/#oscar` },
          publisher: { "@id": BUSINESS_ID },
          mainEntityOfPage: url,
          inLanguage: "fr-FR",
        }
      : {
          "@type": "Service",
          name: entry.title,
          description: entry.description,
          url,
          provider: { "@id": BUSINESS_ID },
          areaServed: entry.city
            ? { "@type": "City", name: entry.city }
            : { "@type": "Country", name: "France" },
          ...(entry.prices.length
            ? {
                offers: entry.prices.map((p) => ({
                  "@type": "Offer",
                  name: p.label,
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    minPrice: Number(p.from.replace(/[^\d]/g, "")),
                    priceCurrency: "EUR",
                  },
                })),
              }
            : {}),
        };

  return [
    { "@context": "https://schema.org", ...main },
    ...(entry.faq.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: entry.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : []),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
        ...(parent.path !== "/"
          ? [{ "@type": "ListItem", position: 2, name: parent.name, item: absoluteUrl(parent.path) }]
          : []),
        {
          "@type": "ListItem",
          position: parent.path !== "/" ? 3 : 2,
          name: entry.title,
          item: url,
        },
      ],
    },
  ];
}

// Gabarit commun des pages de contenu SEO : H1 → réponse directe → preuves
// (réalisations) → corps → prix → FAQ → CTA → pages liées.
export function ContentPage({
  entry,
  parent,
}: {
  entry: ContentEntry;
  parent: { name: string; path: string };
}) {
  const realisations = entry.realisations
    .map((slug) => getRealisation(slug))
    .filter((r) => r !== undefined)
    .slice(0, 3);

  const all = getAllContent();
  const related = entry.related
    .map((p) => all.find((e) => contentPath(e) === p))
    .filter((e) => e !== undefined);

  return (
    <>
      {contentJsonLd(entry, parent).map((json, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      ))}

      <article className="mx-auto max-w-3xl px-6 pb-8 pt-16 md:pt-24">
        <Link
          href={parent.path}
          className="inline-flex items-center gap-1.5 text-sm text-black/50 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          {parent.name}
        </Link>

        <header className="mt-8">
          <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/60">
            {KIND_LABEL[entry.kind]}
          </span>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            {entry.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-black/70">
            {entry.answer}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BookCallButton className="inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
              Réserver un appel de 15 min
              <ArrowUpRight className="size-4" />
            </BookCallButton>
            <a
              href={site.phoneHref}
              className="inline-flex h-11 items-center rounded-full border border-black/15 px-6 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              {site.phone}
            </a>
          </div>
          <p className="mt-6 text-xs text-black/40">
            Par Oscar Goerger, fondateur de Webelevate · Mis à jour le{" "}
            {formatDate(entry.dateModified)}
          </p>
        </header>
      </article>

      {realisations.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm font-medium uppercase tracking-widest text-black/40">
            Nos réalisations
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((r) => (
              <RealisationCard key={r.slug} r={r} />
            ))}
          </div>
        </section>
      )}

      <div
        className="content-body mx-auto max-w-3xl px-6 py-10"
        dangerouslySetInnerHTML={{ __html: entry.html }}
      />

      {entry.prices.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Nos tarifs
          </h2>
          <div className="mt-6 divide-y divide-black/[0.08] rounded-2xl border border-black/10">
            {entry.prices.map((p) => (
              <div
                key={p.label}
                className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4"
              >
                <div>
                  <p className="font-medium">{p.label}</p>
                  {p.note && <p className="mt-1 text-sm text-black/55">{p.note}</p>}
                </div>
                <p className="text-lg font-semibold">à partir de {p.from}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-black/50">
            Chaque projet est chiffré sur mesure après un appel de 15 minutes :
            prix clair et détaillé, sans surprise ensuite.
          </p>
        </section>
      )}

      {entry.faq.length > 0 && (
        <Faq
          title="Questions fréquentes"
          items={entry.faq.map((f) => ({ question: f.q, answer: f.a }))}
        />
      )}

      <FinalCta />

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-black/40">
            À lire aussi
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <Link
                key={contentPath(e)}
                href={contentPath(e)}
                className="group rounded-2xl border border-black/10 p-5 transition-colors hover:border-black/25"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-black/40">
                  {KIND_LABEL[e.kind]}
                </p>
                <p className="mt-1.5 font-semibold leading-snug tracking-tight">
                  {e.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-black/55 group-hover:text-black">
                  Lire
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
