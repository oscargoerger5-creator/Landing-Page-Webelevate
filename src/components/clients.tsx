"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { clientCompanies, clientPersons, type Client } from "@/lib/site";

function CompanyItem({ c }: { c: Client }) {
  return c.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={c.logo}
      alt={c.name}
      className={cn(
        "h-10 w-auto max-w-[150px] object-contain md:h-12",
        c.logoClassName,
      )}
    />
  ) : (
    <span className="whitespace-nowrap text-xl font-semibold text-black/40">
      {c.name}
    </span>
  );
}

function PersonItem({ c }: { c: Client }) {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap">
      {c.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={c.photo}
          alt={c.name}
          className="size-12 rounded-full object-cover"
        />
      ) : (
        <span className="grid size-12 place-items-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-600">
          {c.name.charAt(0)}
        </span>
      )}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-sm font-semibold text-black/75">{c.name}</span>
        {c.role && <span className="text-xs text-black/45">{c.role}</span>}
      </span>
    </span>
  );
}

// Marquee à VITESSE constante : la durée s'adapte à la largeur du contenu
// (durée = largeur d'une copie / vitesse), donc les deux sliders bougent
// exactement à la même vitesse quelle que soit la largeur.
function Marquee({
  items,
  render,
  reverse = false,
  speed = 55, // pixels par seconde
}: {
  items: Client[];
  render: (c: Client) => React.ReactNode;
  reverse?: boolean;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const copyWidth = el.scrollWidth / 2; // on affiche la liste deux fois
      if (copyWidth > 0) setDuration(copyWidth / speed);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [speed]);

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        ref={ref}
        className={cn(
          "flex w-max items-center gap-14 pr-14",
          reverse && "[animation-direction:reverse]",
        )}
        style={{
          animationName: "marquee",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDuration: `${duration}s`,
        }}
      >
        {items.map((c, i) => (
          <span key={`a${i}`}>{render(c)}</span>
        ))}
        {items.map((c, i) => (
          <span key={`b${i}`}>{render(c)}</span>
        ))}
      </div>
    </div>
  );
}

// CLIENTS — deux sliders animés (même vitesse) : entreprises et entrepreneurs.
export function Clients() {
  return (
    <section className="border-t border-black/[0.07] py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Ils nous font confiance
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Des marques qui avancent avec nous
        </h2>
      </div>

      <p className="mb-5 text-center text-sm text-black/40">Des entreprises</p>
      <Marquee
        items={clientCompanies}
        render={(c) => <CompanyItem c={c} />}
        speed={55}
      />

      <p className="mb-5 mt-14 text-center text-sm text-black/40">
        …et des entrepreneurs
      </p>
      {/* Ordre d'origine : au chargement on voit les Chapelon, Robin et
          Kylian en premier (priorité à la première impression). */}
      <Marquee
        items={clientPersons}
        render={(c) => <PersonItem c={c} />}
        reverse
        speed={55}
      />
    </section>
  );
}
