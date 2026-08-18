"use client";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Vidéo héro avec son activable : démarre automatiquement en muet (règle des
// navigateurs), un clic active ou coupe le son. Pastille d'état en bas à
// droite, comme les réels.
export function HeroVideo({
  src,
  poster,
  alt,
}: {
  src: string;
  poster?: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) void v.play().catch(() => {});
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={muted ? `${alt} : activer le son` : `${alt} : couper le son`}
      className="relative block w-full cursor-pointer"
    >
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className="aspect-video w-full object-cover"
      />
      <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-transform hover:scale-105">
        {muted ? (
          <VolumeX className="size-4.5 text-neutral-900" />
        ) : (
          <Volume2 className="size-4.5 text-neutral-900" />
        )}
      </span>
    </button>
  );
}
