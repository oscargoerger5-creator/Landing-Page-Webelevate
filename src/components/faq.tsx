"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faq } from "@/lib/site";

// FAQ — accordéon minimaliste : une question ouverte à la fois,
// ouverture animée (grid-rows), icône + qui pivote en ×.
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Les questions qu'on nous pose
        </h2>
      </div>

      <div className="mx-auto max-w-2xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[15px] font-medium md:text-lg">
                  {item.question}
                </span>
                <Plus
                  strokeWidth={1.5}
                  className={cn(
                    "size-5 shrink-0 text-black/40 transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-xl pb-6 text-sm leading-relaxed text-black/55 md:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
