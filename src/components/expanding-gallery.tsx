import { cn } from "@/lib/utils";

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
