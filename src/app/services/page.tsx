import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Création de site, refonte, e-commerce, SEO — les services de l'agence Webelevate.",
};

// SERVICES — structure placeholder.
export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Services
      </h1>
      <p className="mt-4 max-w-xl text-lg text-black/60">
        Ce qu'on peut construire ensemble.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.slug}
            className="rounded-xl border border-black/10 p-8 transition-colors hover:border-black/25"
          >
            <h2 className="text-2xl font-medium">{s.title}</h2>
            <p className="mt-3 text-black/60">{s.description}</p>
            <p className="mt-6 text-xs text-black/30">
              [Détail du service — page dédiée /services/{s.slug} en phase 2]
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link
          href="/contact"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Discuter de votre projet
        </Link>
      </div>
    </div>
  );
}
