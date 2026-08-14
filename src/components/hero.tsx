import Link from "next/link";
import { cn } from "@/lib/utils";
import { testimonials, socialProof } from "@/lib/site";
import { ClientLogos } from "@/components/client-logos";
import { DotPattern } from "@/components/ui/dot-pattern";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

// Bloc de preuve sociale affiché AU-DESSUS du titre (remplace l'ancien badge).
function SocialProof() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-sm">
      <div className="flex -space-x-2">
        {testimonials.slice(0, 3).map((t, i) =>
          t.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={t.photo}
              alt=""
              className="size-6 rounded-full border-2 border-white object-cover"
            />
          ) : (
            <span
              key={i}
              className="grid size-6 place-items-center rounded-full border-2 border-white bg-neutral-200 text-[10px] font-medium text-neutral-600"
            >
              {t.name.charAt(0)}
            </span>
          ),
        )}
      </div>
      <div className="flex text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="size-3.5" />
        ))}
      </div>
      <span className="text-xs text-black/60">
        <span className="font-semibold text-black">{socialProof.rating}</span> ·{" "}
        {socialProof.count} {socialProof.label}
      </span>
    </div>
  );
}

// HERO — adapté à Webelevate (sites, photo, vidéo, IA), thème clair.
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fond en pointillés noirs, léger, estompé au centre */}
      <DotPattern
        cr={1.3}
        className={cn(
          "-z-10 fill-black/25",
          "[mask-image:radial-gradient(620px_circle_at_50%_32%,white,transparent)]",
        )}
      />
      {/* Halo doux en haut pour la profondeur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.6),transparent)]"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-24 text-center md:pt-28">
        <SocialProof />

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          On donne à votre marque l'image qu'elle mérite.
        </h1>

        <p className="mt-5 max-w-xl text-lg text-black/60">
          Sites web, photo, vidéo et IA. On réunit le créatif et la tech pour
          faire rayonner votre marque.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Démarrer un projet
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/realisations"
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-black/15 px-6 text-sm font-medium text-neutral-900 transition-colors hover:bg-black/5"
          >
            Voir nos réalisations
          </Link>
        </div>
      </div>

      <ClientLogos />
    </section>
  );
}
