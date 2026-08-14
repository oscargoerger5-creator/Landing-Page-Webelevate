import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/site";

// Pré-génère une page par cas client (SEO).
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

// RÉALISATION (détail) — structure placeholder.
export default async function CaseStudyPage({
  params,
}: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/realisations"
        className="text-sm text-black/50 hover:text-black"
      >
        ← Toutes les réalisations
      </Link>

      <p className="mt-8 text-sm text-black/50">{study.client}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
        {study.title}
      </h1>
      <p className="mt-4 text-lg text-black/60">{study.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-black/15 px-3 py-1 text-xs text-black/60"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Emplacement visuel principal (mockup couleur) */}
      <div className="mt-12 flex aspect-video items-center justify-center rounded-xl border border-black/10 bg-black/5 text-xs text-black/30">
        [Mockup / capture du projet]
      </div>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-black/40">
            Contexte
          </h2>
          <p className="mt-3 text-black/70">{study.context}</p>
        </section>
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-black/40">
            Solution
          </h2>
          <p className="mt-3 text-black/70">{study.solution}</p>
        </section>
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-black/40">
            Résultats
          </h2>
          <p className="mt-3 text-black/70">{study.result}</p>
        </section>
      </div>
    </article>
  );
}
