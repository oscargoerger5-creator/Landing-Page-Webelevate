import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Nos projets clients : refontes, sites vitrines et e-commerce livrés par Webelevate.",
};

// RÉALISATIONS (index) — structure placeholder.
export default function RealisationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Réalisations
      </h1>
      <p className="mt-4 max-w-xl text-lg text-black/60">
        Une sélection de projets qu'on a menés.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Link
            key={c.slug}
            href={`/realisations/${c.slug}`}
            className="group rounded-xl border border-black/10 p-6 transition-colors hover:border-black/25"
          >
            <div className="mb-6 flex aspect-video items-center justify-center rounded-lg border border-black/10 bg-black/5 text-xs text-black/30">
              [Mockup projet]
            </div>
            <p className="text-sm text-black/50">{c.client}</p>
            <h2 className="mt-1 text-xl font-medium group-hover:underline">
              {c.title}
            </h2>
            <p className="mt-2 text-sm text-black/60">{c.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/15 px-3 py-1 text-xs text-black/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
