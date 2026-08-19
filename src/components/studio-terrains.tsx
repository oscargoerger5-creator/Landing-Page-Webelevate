"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Terrains de jeu du Studio : liste éditoriale dont chaque ligne s'ouvre en
// accordéon sur les projets correspondants (vignettes cliquables vers les
// études de cas). La flèche pivote vers le bas à l'ouverture.
type Terrain = {
  label: string;
  projects: { slug: string; client: string; src: string }[];
};

const terrains: Terrain[] = [
  {
    label: "Événementiel",
    projects: [
      { slug: "saas-summit", client: "SaaS Summit", src: "/realisations/saas-summit-7.jpg" },
      { slug: "saas-workshop", client: "SaaS Summit Workshop", src: "/realisations/saas-workshop.jpg" },
      { slug: "tbv", client: "TBV · After Work", src: "/realisations/tbv-2.jpg" },
      { slug: "fleur-et-vegetal-afterwork", client: "Fleur et Végétal", src: "/realisations/fleur-tbv.jpg" },
      { slug: "dachser", client: "Dachser", src: "/realisations/dachser.jpg" },
    ],
  },
  {
    label: "Corporate",
    projects: [
      { slug: "dachser", client: "Dachser", src: "/realisations/dachser.jpg" },
      { slug: "karcher-tp", client: "Karcher TP", src: "/realisations/karcher.jpg" },
      { slug: "solvation-germany", client: "Solvation Germany", src: "/realisations/solvation.jpg" },
      { slug: "cuisine-schmidt", client: "Cuisine Schmidt", src: "/realisations/cuisine-schmidt.jpg" },
      { slug: "ambiance-styles", client: "Ambiance & Styles", src: "/realisations/ambiance.jpg" },
    ],
  },
  {
    label: "Sport",
    projects: [
      { slug: "ahb", client: "AHB", src: "/realisations/ahb.jpg" },
      { slug: "hsg", client: "HSG", src: "/realisations/hsg.jpg" },
      { slug: "piraths-handball", client: "Les Piraths Handball", src: "/realisations/piraths.jpg" },
      { slug: "metz-handball", client: "Metz Handball", src: "/realisations/metz.jpg" },
    ],
  },
  {
    label: "Automobile",
    projects: [
      { slug: "fynn-porsche", client: "Fynn · Porsche Spyder RS", src: "/realisations/fynn-10.jpg" },
      { slug: "thomas-cupra", client: "Thomas · Cupra", src: "/realisations/thomas-1.jpg" },
      { slug: "tbv", client: "TBV", src: "/realisations/tbv.jpg" },
    ],
  },
  {
    label: "Portrait",
    projects: [
      { slug: "mg-chapelon", client: "MG Chapelon", src: "/realisations/mg-chapelon.jpg" },
      { slug: "d4mss", client: "D4MSS", src: "/realisations/d4mss.jpg" },
      { slug: "julien-krieg", client: "Julien Krieg", src: "/realisations/julien-krieg.jpg" },
      { slug: "benfeld-avec-vous", client: "Benfeld avec vous, pour vous", src: "/realisations/benfeld.jpg" },
    ],
  },
  {
    label: "Culinaire",
    projects: [
      { slug: "tout-et-bon", client: "Tout & Bon", src: "/realisations/tout-et-bon.jpg" },
    ],
  },
  {
    label: "Produit",
    projects: [
      { slug: "sab-shooting-produit", client: "Le petit atelier de Sab", src: "/realisations/sab-produit.jpg" },
    ],
  },
];

export function StudioTerrains() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {terrains.map((t, i) => {
        const open = openIndex === i;
        return (
          <li key={t.label}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="group flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:bg-white/[0.03] md:py-6"
            >
              <span
                className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors md:text-4xl",
                  open ? "text-white" : "text-white/80 group-hover:text-white",
                )}
              >
                {t.label}
              </span>
              <ArrowUpRight
                className={cn(
                  "size-6 transition-all duration-300",
                  open
                    ? "rotate-[135deg] text-white"
                    : "text-white/30 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white",
                )}
              />
            </button>

            {/* Panneau : ouverture fluide via grid-template-rows */}
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="flex gap-3 overflow-x-auto pb-6 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {t.projects.map((p) => (
                    <Link
                      key={`${t.label}-${p.slug}`}
                      href={`/realisations/${p.slug}`}
                      className="group/card w-44 shrink-0 md:w-56"
                    >
                      <span className="block overflow-hidden rounded-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.src}
                          alt={p.client}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover/card:scale-[1.05]"
                        />
                      </span>
                      <span className="mt-2 flex items-center gap-1 text-xs font-medium text-white/60 transition-colors group-hover/card:text-white">
                        {p.client}
                        <ArrowUpRight className="size-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
