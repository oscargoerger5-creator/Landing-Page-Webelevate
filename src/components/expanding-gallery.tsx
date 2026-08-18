"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Carrousel photos : une seule rangée compacte à faire défiler, flèches en
// haut à droite (même langage que le carrousel de réels). Utilisé pour les
// grandes séries (plus de 8 photos) où l'accordéon devient trop imposant.
export function PhotoCarousel({
  images,
  client,
  title = "En images",
}: {
  images: string[];
  client: string;
  title?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 12 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h2>
        <div className="flex shrink-0 items-center gap-2 max-md:hidden">
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Photo précédente"
            className="rounded-full disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Photo suivante"
            className="rounded-full disabled:opacity-40"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
      <div
        ref={scroller}
        className={cn(
          "-mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="shrink-0 snap-center overflow-hidden rounded-2xl bg-neutral-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${client} : photo ${i + 1}`}
              loading="lazy"
              className="h-80 w-auto md:h-[24rem]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Galerie « accordéon » (inspirée du composant 21st.dev fourni par Oscar) :
// une rangée de photos verticales compressées ; au survol, la photo s'étend
// et prend toute la largeur disponible. Sur mobile (pas de survol), la
// galerie devient un défilement horizontal avec accroche par photo.
export function ExpandingGallery({
  images,
  client,
}: {
  images: string[];
  client: string;
}) {
  return (
    <>
      {/* Desktop : rangée accordéon au survol */}
      <div className="flex h-[420px] w-full items-center gap-2 max-md:hidden">
        {images.map((src, i) => (
          <div
            key={src}
            className="group relative h-full w-56 flex-grow overflow-hidden rounded-xl transition-all duration-500 hover:w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${client} : photo ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Mobile : défilement horizontal, une photo par accroche */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 md:hidden">
        {images.map((src, i) => (
          <div
            key={src}
            className="h-80 w-60 shrink-0 snap-center overflow-hidden rounded-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${client} : photo ${i + 1}`}
              loading="lazy"
              className={cn("h-full w-full object-cover object-center")}
            />
          </div>
        ))}
      </div>
    </>
  );
}
