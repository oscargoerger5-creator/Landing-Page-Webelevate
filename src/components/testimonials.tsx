import { testimonials } from "@/lib/site";

// TÉMOIGNAGES — cartes sombres avec photo de profil (la couleur vient des photos).
export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Témoignages
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Ce qu'ils en disent
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-2xl bg-neutral-900 text-white"
          >
            <div className="relative overflow-hidden">
              {t.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-[270px] w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="flex h-[270px] w-full items-center justify-center bg-neutral-800 text-xs text-white/30">
                  [ Photo de profil ]
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-900 to-transparent" />
            </div>
            <figcaption className="px-6 pb-6">
              <blockquote className="border-b border-white/10 pb-5 font-medium">
                « {t.quote} »
              </blockquote>
              <p className="mt-4">— {t.name}</p>
              <p className="text-sm text-white/50">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
