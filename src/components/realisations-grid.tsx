"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  hasMockup,
  RealisationMockup,
  SiteScreenMockup,
} from "@/components/realisation-mockup";
import {
  orderedRealisations,
  realisationCategories,
  type Realisation,
  type RealisationCategory,
} from "@/lib/realisations";

const categoryLabel = (key: RealisationCategory) =>
  realisationCategories.find((c) => c.key === key)?.label ?? key;

function RealisationCard({ r }: { r: Realisation }) {
  return (
    <Link
      href={`/realisations/${r.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:border-black/25"
    >
      {/* Visuel (ou placeholder monochrome tant que le mockup n'est pas fourni) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        {r.screen ? (
          <SiteScreenMockup screen={r.screen} client={r.client} />
        ) : r.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={r.image}
            alt={`${r.client} : ${r.title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : hasMockup(r.slug) ? (
          <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]">
            <RealisationMockup slug={r.slug} />
          </div>
        ) : r.logo ? (
          <div className="grid h-full w-full place-items-center bg-neutral-50 p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.logo}
              alt={r.client}
              className="max-h-14 w-auto max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="px-4 text-center text-3xl font-semibold tracking-tight text-neutral-300">
              {r.client}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-black/60 backdrop-blur">
          {categoryLabel(r.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-black/40">
          {r.client}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight">
          {r.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-black/55">{r.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-black/60 transition-colors group-hover:text-black">
          Voir le projet
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

// Grille filtrable par catégorie (Tous · Site internet · E-commerce · Vidéo).
export function RealisationsGrid() {
  const [active, setActive] = useState<RealisationCategory | "all">("all");
  // Vue « Tous » : ordre de mise en avant (les projets les plus forts en
  // premier). Vue filtrée : les projets de la catégorie, même logique.
  const filtered =
    active === "all"
      ? orderedRealisations
      : orderedRealisations.filter((r) => r.category === active);

  const pill = (selected: boolean) =>
    cn(
      "h-10 cursor-pointer rounded-full border px-5 text-sm font-medium transition-colors",
      selected
        ? "border-neutral-900 bg-neutral-900 text-white"
        : "border-black/15 text-black/60 hover:border-black/30 hover:text-black",
    );

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={pill(active === "all")}
        >
          Tous
        </button>
        {realisationCategories.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            className={pill(active === c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grille */}
      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <RealisationCard key={r.slug} r={r} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-black/50">
          Les projets de cette catégorie arrivent bientôt.
        </p>
      )}
    </div>
  );
}
