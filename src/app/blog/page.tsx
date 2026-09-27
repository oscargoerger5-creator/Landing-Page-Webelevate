import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/final-cta";
import { contentPath, getContent, type ContentEntry } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog : prix, conseils site internet, vidéo & photo",
  description:
    "Prix d'un site internet, d'une vidéo d'entreprise, délais, conseils par métier : le blog de Webelevate, agence web, photo et vidéo à Strasbourg.",
  alternates: { canonical: "/blog" },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ e, cta }: { e: ContentEntry; cta: string }) {
  return (
    <Link
      href={contentPath(e)}
      className="group flex flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/25"
    >
      <p className="text-xs text-black/40">{formatDate(e.datePublished)}</p>
      <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
        {e.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-black/55">{e.description}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-black/60 group-hover:text-black">
        {cta}
        <ArrowUpRight className="size-3.5" />
      </span>
    </Link>
  );
}

// BLOG — tous les contenus SEO, rangés par catégorie : guides et conseils
// (content/blog), pages services, pages locales et pages métier.
const SECTIONS: {
  title: string;
  cta: string;
  items: () => ContentEntry[];
}[] = [
  { title: "Guides et conseils", cta: "Lire l'article", items: () => getContent("blog") },
  { title: "Nos services en détail", cta: "Découvrir", items: () => getContent("services") },
  {
    title: "Près de chez vous",
    cta: "Voir la page",
    items: () => getContent("pages").filter((e) => e.kind === "ville"),
  },
  {
    title: "Site internet par métier",
    cta: "Voir la page",
    items: () => getContent("pages").filter((e) => e.kind === "metier"),
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20 md:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-black/40">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Prix, délais, conseils : on vous dit tout.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-black/60">
            Des réponses claires aux questions qu&apos;on nous pose sur les
            sites internet, la vidéo, la photo et l&apos;IA.
          </p>
        </div>

        {SECTIONS.map((section) => {
          const items = section.items();
          if (items.length === 0) return null;
          return (
            <div key={section.title}>
              <h2 className="mt-16 text-sm font-medium uppercase tracking-widest text-black/40">
                {section.title}
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((e) => (
                  <ArticleCard key={e.slug} e={e} cta={section.cta} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <FinalCta />
    </>
  );
}
