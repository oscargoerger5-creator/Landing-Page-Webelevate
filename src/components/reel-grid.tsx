"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Carrousel de réels : une rangée à faire défiler horizontalement (accroche
// carte par carte), avec les flèches de navigation en haut à droite comme le
// carrousel de l'accueil. Au survol, la vidéo se lance en muet ; un clic
// active le son (nouveau clic : pause). Préchargement coupé.
function Reel({
  src,
  poster,
  label,
  vertical = false,
}: {
  src: string;
  poster?: string;
  label: string;
  vertical?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const play = (withSound: boolean) => {
    const v = ref.current;
    if (!v) return;
    v.muted = !withSound;
    setMuted(!withSound);
    void v.play();
    setPlaying(true);
  };
  const pause = () => {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.muted = true;
    setMuted(true);
    setPlaying(false);
  };

  return (
    <button
      type="button"
      aria-label={label}
      onMouseEnter={() => {
        if (!playing) play(false);
      }}
      onMouseLeave={pause}
      onClick={() => {
        if (!playing || muted) play(true);
        else pause();
      }}
      className={cn(
        "relative block shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl bg-neutral-100 text-left",
        vertical ? "w-56 sm:w-64 md:w-72" : "w-72 sm:w-96 md:w-[26rem]",
      )}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        loop
        playsInline
        preload="none"
        className={cn(
          "w-full object-cover",
          vertical ? "aspect-[9/16]" : "aspect-[4/3]",
        )}
      />
      {/* Pastille : lecture à l'arrêt, état du son pendant la lecture */}
      <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur">
        {!playing ? (
          <Play className="ml-0.5 size-3.5 fill-neutral-900 text-neutral-900" />
        ) : muted ? (
          <VolumeX className="size-4 text-neutral-900" />
        ) : (
          <Volume2 className="size-4 text-neutral-900" />
        )}
      </span>
    </button>
  );
}

export function ReelGrid({
  reels,
  client,
  title = "Leurs réels",
  vertical = false,
}: {
  reels: { src: string; poster?: string }[];
  client: string;
  title?: string;
  vertical?: boolean;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Active/désactive les flèches selon la position de défilement.
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

  // Quand tout tient sans défiler, on masque les flèches et on centre.
  const fits = !canPrev && !canNext;

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h2>
        <div
          className={cn("flex shrink-0 items-center gap-2", fits && "hidden")}
        >
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Réel précédent"
            className="rounded-full disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Réel suivant"
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
          fits && "justify-center",
        )}
      >
        {reels.map((r, i) => (
          <Reel
            key={r.src}
            src={r.src}
            poster={r.poster}
            vertical={vertical}
            label={`${client} : réel ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
