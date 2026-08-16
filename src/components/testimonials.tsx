"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/site";

// TÉMOIGNAGES — colonnes défilantes en continu (design 21st adapté au thème
// clair du site). 3 colonnes desktop, 2 tablette, 1 mobile ; pause au survol
// via l'effet de mise en avant de la carte.

// Mélange personnes / entreprises en alternance pour varier les cartes.
const persons = testimonials.filter((t) => t.photo);
const companies = testimonials.filter((t) => t.logo);
const mixed: Testimonial[] = [];
for (let i = 0; i < Math.max(persons.length, companies.length); i++) {
  if (persons[i]) mixed.push(persons[i]);
  if (companies[i]) mixed.push(companies[i]);
}

const firstColumn = mixed.slice(0, 5);
const secondColumn = mixed.slice(5, 9);
const thirdColumn = mixed.slice(9, 13);

function TestimonialsColumn({
  className,
  items,
  duration = 16,
  reverse = false,
}: {
  className?: string;
  items: Testimonial[];
  duration?: number;
  reverse?: boolean; // true : défile vers le bas
}) {
  return (
    <div className={className}>
      <motion.ul
        initial={{ translateY: reverse ? "-50%" : "0%" }}
        animate={{ translateY: reverse ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-6 p-0 pb-6"
      >
        {Array.from({ length: 2 }, (_, dup) => (
          <React.Fragment key={dup}>
            {items.map((t, i) => (
              <motion.li
                key={`${dup}-${i}`}
                aria-hidden={dup === 1}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="w-full max-w-xs cursor-default select-none rounded-2xl border border-black/10 bg-white p-8 shadow-sm shadow-black/5"
              >
                <blockquote className="m-0 p-0">
                  <p className="m-0 text-[15px] leading-relaxed text-black/60">
                    « {t.quote} »
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    {t.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.photo}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="size-10 rounded-full object-cover ring-2 ring-black/[0.06]"
                      />
                    ) : t.logo ? (
                      <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-white ring-2 ring-black/[0.06]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={t.logo}
                          alt={t.name}
                          className="size-full object-contain p-1"
                        />
                      </span>
                    ) : (
                      <span className="grid size-10 place-items-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-600">
                        {t.name.charAt(0)}
                      </span>
                    )}
                    <div className="flex flex-col">
                      <cite className="text-sm font-semibold not-italic leading-5 tracking-tight">
                        {t.name}
                      </cite>
                      <span className="mt-0.5 text-xs leading-4 text-black/45">
                        {t.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-6"
      >
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-black/40">
            Témoignages
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Ce qu'ils en disent
          </h2>
          <p className="mt-4 text-black/60">
            Des fondateurs et des marques qui nous confient leur image.
          </p>
        </div>

        <div
          className="flex max-h-[620px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          role="region"
          aria-label="Avis clients"
        >
          <TestimonialsColumn items={firstColumn} duration={42} />
          <TestimonialsColumn
            items={secondColumn}
            className="max-sm:hidden"
            duration={35}
            reverse
          />
          <TestimonialsColumn
            items={thirdColumn}
            className="max-md:hidden"
            duration={39}
          />
        </div>
      </motion.div>
    </section>
  );
}
