import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { AiChat, BrowserMockup } from "@/components/services-bento";
import { FinalCta } from "@/components/final-cta";
import { serviceDetails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites internet, IA, vidéo et photo : les services de l'agence Webelevate, sous un même toit.",
};

// Diaporama par paires de la même catégorie : humains ensemble, voitures
// ensemble. Chaque duo reste 4s puis le suivant fond par-dessus (pair-cycle).
const PHOTO_PAIRS: [string, string][] = [
  ["/photos/photo-1.jpg", "/photos/photo-2.jpg"], // événementiel
  ["/photos/photo-4.jpg", "/photos/photo-7.jpg"], // automobile — nuit
  ["/photos/photo-5.jpg", "/photos/photo-8.jpg"], // automobile — nature
  ["/photos/photo-6.jpg", "/photos/photo-9.jpg"], // automobile — caractère
];

function Pair({
  photos,
  className,
  style,
}: {
  photos: [string, string];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("absolute inset-0 grid grid-cols-2 gap-1", className)}
      style={style}
    >
      {photos.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={src} src={src} alt="" className="h-full w-full object-cover" />
      ))}
    </div>
  );
}

function PairSlideshow() {
  const total = PHOTO_PAIRS.length * 4;
  return (
    <div className="relative h-full w-full bg-white">
      {/* fond stable : première paire */}
      <Pair photos={PHOTO_PAIRS[0]} />
      {PHOTO_PAIRS.map((p, i) => (
        <Pair
          key={i}
          photos={p}
          className="opacity-0"
          style={{
            animation: `pair-cycle ${total}s linear infinite`,
            animationDelay: `${i * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

// Visuel associé à chaque service.
function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "sites-internet":
      return (
        <div className="flex h-full items-center justify-center bg-neutral-50 p-6">
          <BrowserMockup />
        </div>
      );
    case "ia":
      return (
        <div className="flex h-full items-center justify-center bg-neutral-50 p-6">
          <AiChat />
        </div>
      );
    case "video":
      return (
        <video
          src="/videos/showreel.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      );
    case "photo":
      return <PairSlideshow />;
    default:
      return null;
  }
}

// SERVICES — une grande section par service, alternée, numérotée 01 → 04
// (même écho typographique que les J1 → J19 du process).
export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-6 pt-20 text-center md:pt-28">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Nos services
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Une seule équipe pour toute votre image.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-black/60">
          Site, IA, vidéo, photo : pensés ensemble, produits ensemble.
          Résultat&nbsp;: une image cohérente partout où on vous voit.
        </p>
      </section>

      {/* Services */}
      <div className="mx-auto max-w-6xl px-6">
        {serviceDetails.map((s, i) => {
          const number = String(i + 1).padStart(2, "0");
          const reversed = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-24 items-center gap-10 border-t border-black/[0.07] py-16 first:border-t-0 md:grid-cols-2 md:gap-14 md:py-24"
            >
              {/* Texte */}
              <div className={cn(reversed && "md:order-2")}>
                <div className="flex items-center gap-5">
                  <span className="text-7xl font-semibold leading-none tracking-tighter text-neutral-200 md:text-8xl">
                    {number}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-black/40">
                      {s.kicker}
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                      {s.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-6 max-w-md text-xl font-medium leading-snug tracking-tight md:text-[1.6rem]">
                  {s.headline}
                </p>
                <p className="mt-4 max-w-md text-black/60">{s.description}</p>
                <ul className="mt-7 space-y-2.5">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neutral-900">
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-black/75">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex h-11 items-center gap-1.5 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Discuter de ce projet
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

              {/* Visuel — plein cadre, contours fins */}
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border border-black/[0.06] shadow-sm",
                  s.slug === "video" ? "aspect-video" : "aspect-[4/3]",
                  reversed && "md:order-1",
                )}
              >
                <ServiceVisual slug={s.slug} />
              </div>
            </section>
          );
        })}
      </div>

      {/* Rappel process */}
      <section className="border-y border-black/[0.07] bg-neutral-50/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">
              Votre site livré en 21 jours.
            </p>
            <p className="mt-2 text-black/55">
              Un process clair, jour par jour, avec des retours illimités.
            </p>
          </div>
          <Link
            href="/#processus"
            className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full border border-black/15 px-6 text-sm font-medium transition-colors hover:bg-black/5"
          >
            Voir le processus
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <FinalCta />
    </>
  );
}
