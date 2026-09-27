import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { contentPath, getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Guides : prix, conseils site internet, vidéo & photo",
  description:
    "Prix d'un site internet, d'une vidéo d'entreprise, délais, choix techniques : les guides de Webelevate, agence web, photo et vidéo à Strasbourg.",
  alternates: { canonical: "/guides" },
};

// GUIDES — hub des articles (content/guides/*.md), du plus récent au plus ancien.
export default function GuidesPage() {
  const guides = getContent("guides");
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-black/40">
            Guides
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Prix, délais, conseils : on vous dit tout.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-black/60">
            Des réponses claires aux questions qu&apos;on nous pose sur les
            sites internet, la vidéo, la photo et l&apos;IA.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={contentPath(g)}
              className="group flex flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/25"
            >
              <h2 className="text-lg font-semibold leading-snug tracking-tight">
                {g.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-black/55">
                {g.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-black/60 group-hover:text-black">
                Lire le guide
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
