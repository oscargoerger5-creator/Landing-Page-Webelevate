import { clients } from "@/lib/site";

// Slider clients (marquee) sous le hero.
// Chaque client sans `logo` s'affiche en texte ; sinon on affiche l'image
// (déposée dans public/clients/).
export function ClientLogos() {
  // On duplique la liste pour un défilement en boucle sans couture.
  const loop = [...clients, ...clients];

  return (
    <div className="border-t border-black/[0.07] py-12 md:py-16">
      <p className="mb-9 text-center text-sm font-medium uppercase tracking-widest text-black/40">
        Ils nous ont fait confiance
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max items-center gap-20 pr-20 animate-[marquee_35s_linear_infinite]">
          {loop.map((c, i) =>
            c.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={c.logo}
                alt={c.name}
                className="h-9 w-auto opacity-60 md:h-11"
              />
            ) : (
              <span
                key={i}
                className="whitespace-nowrap text-2xl font-semibold text-black/35 md:text-3xl"
              >
                {c.name}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
