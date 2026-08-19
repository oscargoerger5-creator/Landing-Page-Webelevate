"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardVideo } from "@/components/realisations-grid";

// Mosaïque du Studio.
// - Desktop : maçonnerie de tuiles vivantes. Chaque tuile photo est un
//   diaporama des images de SA réalisation (fondu lent, tuiles
//   désynchronisées), les tuiles vidéo se lancent à l'écran.
// - Mobile : trois rangées qui glissent en continu (sens alternés), pour une
//   mosaïque en mouvement plutôt que statique.
type MosaicItem = {
  client: string;
  slug: string;
  aspect: string; // classe aspect-* : fige la hauteur des tuiles
  images?: string[]; // diaporama (1 = statique)
  video?: string;
  poster?: string;
};

const mosaic: MosaicItem[] = [
  { client: "Fynn · Porsche Spyder RS", slug: "fynn-porsche", aspect: "aspect-[2/3]", images: ["/realisations/fynn-10.jpg", "/realisations/fynn-12.jpg", "/realisations/fynn-2.jpg"] },
  { client: "Dachser", slug: "dachser", aspect: "aspect-[3/2]", images: ["/realisations/dachser.jpg"] },
  { client: "SaaS Summit", slug: "saas-summit", aspect: "aspect-[2/3]", images: ["/realisations/saas-summit-7.jpg", "/realisations/saas-summit-3.jpg", "/realisations/saas-summit-5.jpg"] },
  { client: "MG Chapelon", slug: "mg-chapelon", aspect: "aspect-[9/16]", video: "/realisations/mg-reel-2.mp4", poster: "/realisations/mg-reel-2.jpg" },
  { client: "Thomas · Cupra", slug: "thomas-cupra", aspect: "aspect-[2/3]", images: ["/realisations/thomas-1.jpg", "/realisations/thomas-4.jpg", "/realisations/thomas-6.jpg"] },
  { client: "D4MSS", slug: "d4mss", aspect: "aspect-[2/3]", images: ["/realisations/d4mss-1.jpg", "/realisations/d4mss-3.jpg", "/realisations/d4mss-5.jpg"] },
  { client: "Cuisine Schmidt", slug: "cuisine-schmidt", aspect: "aspect-video", images: ["/realisations/cuisine-schmidt.jpg"] },
  { client: "AHB", slug: "ahb", aspect: "aspect-[9/16]", video: "/realisations/ahb-reel-1.mp4", poster: "/realisations/ahb-reel-1.jpg" },
  { client: "Tout & Bon", slug: "tout-et-bon", aspect: "aspect-[3/4]", images: ["/realisations/tout-et-bon-1.jpg", "/realisations/tout-et-bon-4.jpg", "/realisations/tout-et-bon-7.jpg"] },
  { client: "MG Chapelon", slug: "mg-chapelon", aspect: "aspect-video", images: ["/realisations/mg-chapelon.jpg"] },
  { client: "Fleur et Végétal", slug: "fleur-et-vegetal-afterwork", aspect: "aspect-[3/4]", images: ["/realisations/fleur-tbv-1.jpg", "/realisations/fleur-tbv-4.jpg"] },
  { client: "HSG", slug: "hsg", aspect: "aspect-[3/4]", images: ["/realisations/hsg-2.jpg", "/realisations/hsg-4.jpg"] },
  { client: "Fynn · Porsche Spyder RS", slug: "fynn-porsche", aspect: "aspect-[9/16]", video: "/realisations/fynn-reel-2.mp4", poster: "/realisations/fynn-reel-2.jpg" },
  { client: "Benfeld avec vous, pour vous", slug: "benfeld-avec-vous", aspect: "aspect-[3/2]", images: ["/realisations/benfeld.jpg"] },
  { client: "Le petit atelier de Sab", slug: "sab-shooting-produit", aspect: "aspect-[3/4]", images: ["/realisations/sab-produit-2.jpg", "/realisations/sab-produit-5.jpg"] },
  { client: "Solvation Germany", slug: "solvation-germany", aspect: "aspect-[3/4]", images: ["/realisations/solvation-2.jpg", "/realisations/solvation-4.jpg"] },
  { client: "TBV", slug: "tbv", aspect: "aspect-[3/4]", images: ["/realisations/tbv-2.jpg", "/realisations/tbv-5.jpg"] },
  { client: "Les Piraths Handball", slug: "piraths-handball", aspect: "aspect-[9/16]", video: "/realisations/piraths-reel-1.mp4", poster: "/realisations/piraths-reel-1.jpg" },
  { client: "Julien Krieg", slug: "julien-krieg", aspect: "aspect-[3/4]", images: ["/realisations/julien-krieg-3.jpg", "/realisations/julien-krieg-6.jpg"] },
  { client: "Ambiance & Styles", slug: "ambiance-styles", aspect: "aspect-[3/4]", images: ["/realisations/ambiance-1.jpg", "/realisations/ambiance-3.jpg"] },
  { client: "SaaS Summit Workshop", slug: "saas-workshop", aspect: "aspect-[3/4]", images: ["/realisations/saas-workshop-3.jpg", "/realisations/saas-workshop-6.jpg"] },
  { client: "Fynn · Porsche Spyder RS", slug: "fynn-porsche", aspect: "aspect-[3/4]", images: ["/realisations/fynn-4.jpg", "/realisations/fynn-7.jpg"] },
  { client: "HSG", slug: "hsg", aspect: "aspect-[9/16]", video: "/realisations/hsg-reel-1.mp4", poster: "/realisations/hsg-reel-1.jpg" },
  { client: "Metz Handball", slug: "metz-handball", aspect: "aspect-[3/2]", images: ["/realisations/metz.jpg"] },
  { client: "Tout & Bon", slug: "tout-et-bon", aspect: "aspect-[3/4]", images: ["/realisations/tout-et-bon-5.jpg", "/realisations/tout-et-bon-8.jpg"] },
  { client: "Karcher TP", slug: "karcher-tp", aspect: "aspect-video", video: "/realisations/karcher.mp4", poster: "/realisations/karcher.jpg" },
  { client: "AHB", slug: "ahb", aspect: "aspect-[3/4]", images: ["/realisations/ahb-2.jpg", "/realisations/ahb-5.jpg"] },
];

// Diaporama d'une tuile : fondu lent entre les images de la réalisation.
// `offset` désynchronise les tuiles pour que tout ne change pas en même temps.
function FadingImages({
  images,
  alt,
  offset,
}: {
  images: string[];
  alt: string;
  offset: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setIndex((v) => (v + 1) % images.length);
      interval = setInterval(
        () => setIndex((v) => (v + 1) % images.length),
        4600,
      );
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [images.length, offset]);

  if (images.length === 1) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={images[0]}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  return (
    <>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </>
  );
}

function Tile({ item, offset }: { item: MosaicItem; offset: number }) {
  return (
    <Link
      href={`/realisations/${item.slug}`}
      className="group relative block overflow-hidden rounded-xl"
    >
      <span className={cn("relative block w-full", item.aspect)}>
        {item.video ? (
          <span className="absolute inset-0 transition duration-500 group-hover:brightness-75">
            <CardVideo src={item.video} poster={item.poster} />
          </span>
        ) : (
          <span className="absolute inset-0 transition duration-500 group-hover:scale-[1.03] group-hover:brightness-75">
            <FadingImages
              images={item.images ?? []}
              alt={item.client}
              offset={offset}
            />
          </span>
        )}
      </span>
      <span className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {item.client}
        <ArrowUpRight className="size-3.5" />
      </span>
    </Link>
  );
}

export function StudioMosaic() {
  // Mobile : trois rangées qui glissent (sens alternés), images uniquement
  // (les vidéos y sont représentées par leur poster pour rester légères).
  const flat = mosaic.map((m) => ({
    src: m.images?.[0] ?? m.poster ?? "",
    client: m.client,
    slug: m.slug,
  }));
  const rows = [flat.slice(0, 9), flat.slice(9, 18), flat.slice(18, 27)];
  const durations = [52, 64, 46];

  return (
    <>
      {/* Desktop : maçonnerie vivante */}
      <div className="columns-2 gap-4 max-md:hidden md:columns-3 [&>a]:mb-4">
        {mosaic.map((m, i) => (
          <Tile key={`${m.slug}-${i}`} item={m} offset={(i * 700) % 4600} />
        ))}
      </div>

      {/* Mobile : rangées en glissement continu */}
      <div className="space-y-3 md:hidden">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            <div
              className="flex w-max gap-3"
              style={{
                animation: `marquee ${durations[ri]}s linear infinite`,
                animationDirection: ri % 2 === 1 ? "reverse" : "normal",
              }}
            >
              {[...row, ...row].map((it, i) => (
                <Link
                  key={`${it.src}-${i}`}
                  href={`/realisations/${it.slug}`}
                  className="block shrink-0 overflow-hidden rounded-lg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.src}
                    alt={it.client}
                    loading="lazy"
                    className="h-44 w-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
