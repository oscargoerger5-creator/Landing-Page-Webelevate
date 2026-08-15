"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { realisations } from "@/lib/site";

// RÉALISATIONS — carrousel de projets (adapté de shadcn Gallery6).
// Thème clair : fond blanc, textes noirs, flèches noires.
export function RealisationsGallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 text-neutral-900 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
              Nos projets
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Réalisations
            </h2>
            <Link
              href="/realisations"
              className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-black/70 hover:text-black"
            >
              Tous les projets
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Précédent"
              className="rounded-full border-black/15 text-neutral-900 disabled:opacity-40"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Suivant"
              className="rounded-full border-black/15 text-neutral-900 disabled:opacity-40"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: { "(max-width: 768px)": { dragFree: true } },
          }}
        >
          <CarouselContent>
            {realisations.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-[85%] sm:basis-[55%] lg:basis-[40%]"
              >
                <Link
                  href={item.url ?? "/realisations"}
                  className="group flex flex-col"
                >
                  <div className="flex aspect-[3/2] overflow-hidden rounded-xl border border-black/10 bg-black/[0.04]">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-black/30">
                        [ Projet ]
                      </div>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-medium md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-black/60">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium">
                    Voir le projet
                    <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
