"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Infinity as InfinityIcon } from "lucide-react";
import { BookCallButton } from "@/components/cal-booking";
import { cn } from "@/lib/utils";
import { processInfo } from "@/lib/site";

const WEEKDAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

// Blocs monochromes, fidèles à la DA : gris très clair au repos,
// noir pour le bloc actif et pour l'arrivée (mise en ligne).
function blockClasses(isFinish: boolean, isActive = false) {
  return isFinish || isActive
    ? "bg-neutral-900 text-white"
    : "bg-black/[0.05] text-neutral-800";
}

// PROCESS — calendrier complet des 21 jours, façon Cal.com : 3 semaines,
// les étapes en blocs colorés dans les cases, détail au survol ou au clic.
export function ProcessTimeline() {
  const { promise, subtitle, cta, events, guarantee } = processInfo;
  const eventByDay = new Map(events.map((e) => [e.day, e]));
  const finishDay = events[events.length - 1].day;
  const [activeDay, setActiveDay] = useState(events[0].day);
  const active = eventByDay.get(activeDay) ?? events[0];

  // Mobile : révèle les lignes de l'agenda une à une au scroll.
  const agendaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rows = agendaRef.current?.querySelectorAll(".reveal-m");
    if (!rows?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
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

      {/* Calendrier */}
      <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        {/* Barre du haut, sobre */}
        <div className="flex items-center justify-between border-b border-black/[0.07] px-4 py-3 sm:px-5">
          <p className="text-sm font-semibold">Votre projet</p>
          <span className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] font-medium text-black/50">
            3 semaines
          </span>
        </div>

        {/* Jours de la semaine (desktop) */}
        <div className="grid grid-cols-7 border-b border-black/[0.07] bg-neutral-50/60 max-sm:hidden">
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="py-2.5 text-center text-[11px] font-medium uppercase tracking-wider text-slate-400"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Grille des 21 jours (desktop) */}
        <div className="grid grid-cols-7 max-sm:hidden">
          {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => {
            const ev = eventByDay.get(day);
            const isFinish = day === finishDay;
            const isActive = ev && day === activeDay;
            return (
              <div
                key={day}
                onClick={ev ? () => setActiveDay(day) : undefined}
                onMouseEnter={ev ? () => setActiveDay(day) : undefined}
                className={cn(
                  "relative flex min-h-16 flex-col gap-1 border-b border-r border-black/[0.06] p-1 sm:min-h-[88px] sm:p-1.5",
                  "[&:nth-child(7n)]:border-r-0 [&:nth-last-child(-n+7)]:border-b-0",
                  ev && "cursor-pointer",
                )}
              >
                <span
                  className={cn(
                    "px-1 text-[11px] font-medium sm:text-xs",
                    ev ? "text-slate-600" : "text-slate-300",
                  )}
                >
                  {day}
                </span>
                {ev && (
                  <div
                    className={cn(
                      "rounded-md px-1.5 py-1 leading-tight transition-colors duration-200 sm:px-2 sm:py-1.5",
                      blockClasses(isFinish, !!isActive),
                    )}
                  >
                    <p className="truncate text-[10px] font-semibold sm:text-[11px]">
                      {ev.short}
                    </p>
                    <p className="hidden text-[10px] opacity-70 sm:block">
                      Jour {day}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Agenda vertical (mobile) : compact, groupé par semaine, révélé au scroll */}
        <div ref={agendaRef} className="sm:hidden">
          {[1, 2, 3].map((week) => {
            const weekEvents = events.filter(
              (e) => e.day > (week - 1) * 7 && e.day <= week * 7,
            );
            return (
              <div
                key={week}
                style={{ transitionDelay: `${(week - 1) * 90}ms` }}
                className="reveal-m border-b border-black/[0.06] px-5 py-4 last:border-b-0"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">
                  Semaine {week}
                </p>
                <ul className="mt-2.5 space-y-2">
                  {weekEvents.map((e) => {
                    const isFinish = e.day === finishDay;
                    return isFinish ? (
                      <li
                        key={e.day}
                        className="-mx-2 flex items-baseline gap-3 rounded-lg bg-neutral-900 px-3 py-2.5 text-white"
                      >
                        <span className="w-8 shrink-0 text-sm font-bold">
                          J{e.day}
                        </span>
                        <span className="text-[15px] font-semibold">
                          {e.title}
                        </span>
                      </li>
                    ) : (
                      <li key={e.day} className="flex items-baseline gap-3">
                        <span className="w-8 shrink-0 text-sm font-bold text-neutral-400">
                          J{e.day}
                        </span>
                        <span className="text-[15px] font-medium">{e.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Détail de l'étape survolée / cliquée (desktop) */}
        <div className="flex min-h-[58px] items-center gap-3 border-t border-black/[0.07] bg-neutral-50/60 px-4 py-3 max-sm:hidden sm:px-5">
          <span className="size-2.5 shrink-0 rounded-full bg-neutral-900" />
          <div className="leading-snug">
            <span className="text-sm font-semibold">
              Jour {active.day} · {active.title}
            </span>
            <span className="ml-2 hidden text-sm text-black/55 sm:inline">
              {active.description}
            </span>
            <p className="text-xs text-black/55 sm:hidden">{active.description}</p>
          </div>
        </div>
      </div>

      {/* Retours illimités, en texte simple */}
      <p className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-center text-xl font-semibold tracking-tight md:text-2xl">
        <InfinityIcon className="size-7 md:size-8" />
        {guarantee.title}
        <span className="font-normal text-black/50">
          {guarantee.description}
        </span>
      </p>

      <div className="mt-8 text-center">
        <BookCallButton className="inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
          {cta.label}
          <ArrowUpRight className="size-4" />
        </BookCallButton>
      </div>
    </section>
  );
}
