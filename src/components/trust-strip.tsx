"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/clients";
import { clientCompanies, clientPersons } from "@/lib/site";

// Preuve sociale compacte, réutilisable là où le visiteur hésite à passer à
// l'action. Ordre voulu : d'abord les marques (logos, toujours en couleur),
// ensuite les entrepreneurs (avatars). Desktop : rangées statiques sur une
// ligne. Mobile : deux sliders (un entreprises, un entrepreneurs) pour ne pas
// allonger la page. Deux usages : bande complète sous l'agenda Contact,
// version courte dans le CTA final (fond sombre, variantes de logos dédiées).

// Variantes des logos préparées pour le fond sombre du CTA : fond détouré et
// éléments noirs passés en blanc, couleurs de marque conservées (générées
// dans public/clients/*-dark.png). Les logos absents d'ici passent tels quels.
const darkLogos: Record<string, { src: string; className?: string }> = {
  // « DACHSER » bleu conservé, « Intelligent Logistics » passé en blanc.
  Dachser: { src: "/clients/dachser-dark.png" },
  TBV: { src: "/clients/tbv-dark.png" },
  Solvation: { src: "/clients/solvation-dark.png" },
  // Logo carré : léger agrandissement pour l'équilibrer avec les logos larges.
  "Cuisina création": { src: "/clients/cuisina-dark.png", className: "scale-130" },
  // Eugenia School : logo d'origine conservé (couleur bordeaux voulue).
  Naawah: { src: "/clients/naawah-dark.png" },
};

// Rangée de logos entreprises en couleur : statique sur une ligne dès md,
// slider sur mobile. `tone` : "plain" sur page claire, "dark" sur le CTA noir.
export function LogoRow({
  tone = "plain",
  className,
  imgClassName = "h-8 max-w-[100px] md:h-9",
}: {
  tone?: "plain" | "dark";
  className?: string;
  imgClassName?: string;
}) {
  // Les entrées marqueeOnly (clubs sportifs) restent sur le slider de
  // l'accueil : ces rangées sont calibrées pour tenir sur une ligne.
  const logos = clientCompanies.filter((c) => c.logo && !c.marqueeOnly);
  const logoImg = (c: (typeof logos)[number]) => {
    const dark = tone === "dark" ? darkLogos[c.name] : undefined;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={dark?.src ?? c.logo}
        alt={c.name}
        className={cn(
          "w-auto object-contain",
          imgClassName,
          c.logoClassName,
          dark?.className,
        )}
      />
    );
  };

  return (
    <>
      {/* Desktop : une seule ligne statique */}
      <div
        className={cn(
          "flex items-center justify-center gap-x-7 max-md:hidden md:gap-x-9",
          className,
        )}
      >
        {logos.map((c) => (
          <span key={c.name}>{logoImg(c)}</span>
        ))}
      </div>
      {/* Mobile : slider */}
      <div className="w-full md:hidden">
        <Marquee items={logos} render={logoImg} speed={40} />
      </div>
    </>
  );
}

// Entrepreneurs : pile de photos rondes qui se chevauchent sur desktop,
// slider de photos espacées sur mobile. `ringClassName` doit reprendre la
// couleur du fond (white sur page claire, neutral-900 dans le CTA sombre).
export function AvatarStack({
  size = "size-10",
  ringClassName = "ring-white",
  max = 7,
}: {
  size?: string;
  ringClassName?: string;
  max?: number;
}) {
  const persons = clientPersons.filter((p) => p.photo);
  const avatar = (p: (typeof persons)[number], overlap: boolean) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={p.photo}
      alt={p.name}
      title={p.name}
      className={cn(
        "rounded-full object-cover",
        size,
        overlap && cn("ring-2", ringClassName),
      )}
    />
  );

  return (
    <>
      {/* Desktop : pile qui se chevauche */}
      <div className="flex items-center justify-center -space-x-3 max-md:hidden">
        {persons.slice(0, max).map((p) => (
          <span key={p.name}>{avatar(p, true)}</span>
        ))}
      </div>
      {/* Mobile : slider (sens inverse des logos) */}
      <div className="w-full md:hidden">
        <Marquee items={persons} render={(p) => avatar(p, false)} reverse speed={40} />
      </div>
    </>
  );
}

// Bande complète (page Contact) : les marques d'abord, en couleur et en
// grand, puis les entrepreneurs à la même échelle.
export function TrustStrip() {
  return (
    <div className="mx-auto mt-16 max-w-4xl text-center">
      <LogoRow
        className="gap-x-8 md:gap-x-11"
        imgClassName="h-9 max-w-[110px] md:h-11 md:max-w-[150px]"
      />
      <div className="mt-8 md:mt-10">
        <AvatarStack size="size-12 md:size-14" />
      </div>
      <p className="mt-5 text-sm text-black/50">
        Des grands groupes et des entrepreneurs nous font déjà confiance.
      </p>
    </div>
  );
}
