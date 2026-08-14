import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { studioProjects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Photo & vidéo — la vitrine créative de Webelevate : projets et clients accompagnés.",
};

// Dispositions asymétriques (effet éditorial / galerie).
const spans = [
  "col-span-2 md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "col-span-2 md:col-span-3",
  "md:col-span-3",
];

// STUDIO — vitrine créative photo/vidéo (structure + placeholders média).
export default function StudioPage() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:pt-32">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Studio créatif
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Photo &amp; Vidéo
        </h1>
        <p className="mt-6 max-w-xl text-lg text-black/60">
          On capture l'image de votre marque — et celle des personnes qu'on
          accompagne. Quelques projets qu'on a réalisés.
        </p>
      </section>

      {/* Galerie */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-6">
          {studioProjects.map((p, i) => (
            <article
              key={p.slug}
              className={cn(
                "group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-5 text-white",
                spans[i] ?? "md:col-span-2",
              )}
            >
              {/* Emplacement média (image/vidéo à venir) */}
              <span className="absolute inset-0 flex items-center justify-center text-xs text-white/20">
                [ {p.type} ]
              </span>
              <span className="absolute right-3 top-3 rounded-full border border-white/20 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white/70">
                {p.type}
              </span>
              <div className="relative translate-y-1 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs text-white/50">{p.client}</p>
                <h3 className="text-lg font-medium">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Confiance */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-center text-sm text-black/40">
          Ils nous ont fait confiance
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {["Client A", "Client B", "Client C", "Client D", "Client E"].map(
            (c) => (
              <span key={c} className="text-lg font-medium text-black/50">
                {c}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-neutral-900 p-10 text-center text-white md:p-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Un projet photo ou vidéo ?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Parlons de votre image. On vous répond sous 24h.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 bg-white text-black hover:bg-white/90",
            )}
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </div>
  );
}
