"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Code2,
  Handshake,
  Infinity as InfinityIcon,
  Map,
  MonitorCheck,
  Palette,
  PenTool,
  Phone,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { processInfo } from "@/lib/site";

// Icône minimaliste associée à chaque jour du process.
const ICONS: Record<number, LucideIcon> = {
  1: Phone,
  2: Handshake,
  4: Map,
  8: Palette,
  9: Camera,
  11: PenTool,
  15: Code2,
  17: MonitorCheck,
  18: Sparkles,
  19: Rocket,
};

// PROCESS — timeline minimaliste noir & blanc. Une fine ligne se remplit au
// scroll ; chaque jour « s'allume » à son passage : gros numéro gris clair qui
// devient noir, titre et description sobres. Aucun autre artifice.

export function ProcessTimeline() {
  const { promise, subtitle, cta, events, guarantee } = processInfo;
  const finishIndex = events.length - 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeCount, setActiveCount] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const fillPx = Math.min(
        rect.height,
        Math.max(0, window.innerHeight * 0.62 - rect.top),
      );
      fill.style.height = `${fillPx}px`;
      let count = 0;
      rowRefs.current.forEach((row) => {
        if (row && row.offsetTop + 40 <= fillPx) count += 1;
      });
      setActiveCount(Math.max(1, count));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="processus" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Notre processus
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {promise}
        </h2>
        <p className="mt-4 text-black/60">{subtitle}</p>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative mx-auto mt-16 max-w-3xl">
        {/* Ligne (rail + remplissage au scroll) */}
        <div className="absolute bottom-0 top-0 left-24 w-px -translate-x-1/2 bg-neutral-200 md:left-48" />
        <div
          ref={fillRef}
          className="absolute top-0 left-24 w-px -translate-x-1/2 bg-neutral-900 md:left-48"
          style={{ height: 0 }}
        >
          {/* pointe du remplissage */}
          <span className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-neutral-900" />
        </div>

        <ul>
          {events.map((e, i) => {
            const active = i < activeCount;
            const isFinish = i === finishIndex;
            return (
              <li
                key={e.day}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="relative grid grid-cols-[4.5rem_3rem_1fr] items-center py-8 md:grid-cols-[9rem_6rem_1fr] md:py-12"
              >
                {/* Gros numéro du jour — centré sur la ligne du point */}
                <span
                  className={cn(
                    "text-right text-4xl font-semibold leading-none tracking-tighter transition-colors duration-500 md:text-7xl",
                    active ? "text-neutral-900" : "text-neutral-200",
                  )}
                >
                  J{e.day}
                </span>

                {/* Point sur la ligne */}
                <span className="relative flex h-full items-center justify-center">
                  <span
                    className={cn(
                      "size-3 rounded-full border-2 bg-white transition-colors duration-500",
                      active
                        ? "border-neutral-900 bg-neutral-900"
                        : "border-neutral-300",
                    )}
                  />
                </span>

                {/* Contenu */}
                <div
                  className={cn(
                    "flex items-center gap-4 transition-all duration-500 md:gap-5",
                    active ? "opacity-100" : "translate-y-1 opacity-40",
                  )}
                >
                  {(() => {
                    const Icon = ICONS[e.day];
                    return Icon ? (
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-500 md:size-10",
                          active
                            ? "border-neutral-900 text-neutral-900"
                            : "border-neutral-300 text-neutral-400",
                        )}
                      >
                        <Icon strokeWidth={1.5} className="size-4 md:size-[18px]" />
                      </span>
                    ) : null;
                  })()}
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-semibold tracking-tight md:text-2xl",
                        isFinish && "underline decoration-2 underline-offset-8",
                      )}
                    >
                      {e.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm text-black/50 md:text-[15px]">
                      {e.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Retours illimités — texte simple, mis en avant */}
      <p className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-center text-xl font-semibold tracking-tight md:text-2xl">
        <InfinityIcon className="size-7 md:size-8" />
        {guarantee.title}
        <span className="font-normal text-black/50">
          {guarantee.description}
        </span>
      </p>

      <div className="mt-8 text-center">
        <Link
          href={cta.href}
          className="inline-flex h-11 items-center gap-1.5 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          {cta.label}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
