import { cn } from "@/lib/utils";
import { clientCompanies, clientPersons } from "@/lib/site";

// Preuve sociale compacte, réutilisable là où le visiteur hésite à passer à
// l'action. Ordre voulu : d'abord les marques (logos, toujours en couleur),
// ensuite les entrepreneurs (avatars). Deux usages : bande complète sous
// l'agenda Contact, version courte dans le CTA final (fond sombre : chaque
// logo couleur est posé sur une pastille blanche).

// Variantes des logos préparées pour le fond sombre du CTA : fond détouré et
// éléments noirs passés en blanc, couleurs de marque conservées (générées
// dans public/clients/*-dark.png). Les logos absents d'ici passent tels quels
// (Dachser, Schmidt : déjà lisibles sur fond noir).
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

// Rangée de logos entreprises en couleur, sur une seule ligne dès md.
// `tone` : "plain" sur page claire, "dark" sur le fond noir du CTA.
export function LogoRow({
  tone = "plain",
  className,
  imgClassName = "h-8 max-w-[100px] md:h-9",
}: {
  tone?: "plain" | "dark";
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-7 gap-y-5 md:flex-nowrap",
        className,
      )}
    >
      {clientCompanies
        .filter((c) => c.logo)
        .map((c) => {
          const dark = tone === "dark" ? darkLogos[c.name] : undefined;
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={c.name}
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
        })}
    </div>
  );
}

// Pile de photos rondes qui se chevauchent. `ringClassName` doit reprendre la
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
  const persons = clientPersons.filter((p) => p.photo).slice(0, max);
  return (
    <div className="flex items-center -space-x-3">
      {persons.map((p) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={p.name}
          src={p.photo}
          alt={p.name}
          title={p.name}
          className={cn(
            "rounded-full object-cover ring-2",
            size,
            ringClassName,
          )}
        />
      ))}
    </div>
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
      <div className="mt-10 flex justify-center">
        <AvatarStack size="size-12 md:size-14" />
      </div>
      <p className="mt-5 text-sm text-black/50">
        Des grands groupes et des entrepreneurs nous font déjà confiance.
      </p>
    </div>
  );
}
