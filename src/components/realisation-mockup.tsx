import { Check, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

// Visuels générés en code pour les réalisations sites / e-commerce / IA :
// - SiteScreenMockup : la capture du site livré dans une fenêtre navigateur,
//   légèrement inclinée en 3D sur les cartes ; au survol la fenêtre se
//   redresse et la page défile jusqu'en bas.
// - Mockups dessinés (registre ci-dessous) : pour les projets sans site à
//   montrer (tunnel Owen, dashboard IA PRCP).

type MockupProps = { hero?: boolean };

/* ------------------------------ Primitives ------------------------------- */

// Fenêtre navigateur : barre de titre avec pastilles et URL, contenu en dessous.
function Browser({
  url,
  children,
  hero,
  tilt = false,
  className,
}: {
  url: string;
  children: React.ReactNode;
  hero?: boolean;
  tilt?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col bg-neutral-100",
        hero ? "p-8 pb-0 md:p-12 md:pb-0" : "p-6 pb-0",
        tilt && "[perspective:1200px]",
      )}
    >
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-xl border border-b-0 border-black/10 bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.3)]",
          // Inclinaison 3D subtile, redressée au survol de la carte.
          tilt &&
            "transition-transform duration-500 ease-out [transform:rotateX(4deg)_rotateY(-8deg)_rotateZ(1deg)_scale(1.07)] group-hover:[transform:scale(1.01)]",
          className,
        )}
      >
        <div className="flex items-center gap-2 border-b border-black/[0.07] bg-neutral-50 px-3.5 py-2">
          <span className="size-2 rounded-full bg-neutral-300" />
          <span className="size-2 rounded-full bg-neutral-300" />
          <span className="size-2 rounded-full bg-neutral-300" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-0.5 text-[10px] text-neutral-400 ring-1 ring-black/[0.06]">
            {url}
          </span>
        </div>
        <div className="min-h-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

/* --------------------------- Capture du site ----------------------------- */

// La page du client mise en scène, en couleur.
// - Carte (grille) : fond sombre, la page inclinée en perspective 3D marquée,
//   ancrée en haut à gauche et qui fuit vers le bas droit (style LIMOVA).
//   Au survol, la page se redresse légèrement.
// - Héro (page détail) : fenêtre navigateur sur grille de points ; la page
//   défile jusqu'en bas au survol.
export function SiteScreenMockup({
  screen,
  client,
  hero = false,
}: {
  screen: { src: string; url: string };
  client: string;
  hero?: boolean;
}) {
  if (!hero) {
    // La page « couchée » en perspective sur fond clair : ancrée en haut à
    // gauche (nette), elle fuit vers la droite où elle devient floue
    // (profondeur de champ, comme la référence). Le flou progressif est une
    // copie floutée de l'image révélée par un masque dégradé côté droit.
    const plane =
      "w-full max-w-none rounded-xl ring-1 ring-black/10";
    return (
      <div className="relative h-full w-full overflow-hidden bg-neutral-100">
        <div className="absolute left-[7%] top-[13%] w-[125%] origin-top-left transition-transform duration-500 ease-out [transform:perspective(1200px)_rotateX(24deg)_rotateY(-14deg)_rotateZ(7deg)] group-hover:[transform:perspective(1200px)_rotateX(16deg)_rotateY(-9deg)_rotateZ(5deg)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screen.src}
            alt={`Site ${client} réalisé par Webelevate`}
            className={cn(plane, "shadow-[0_40px_80px_-24px_rgba(0,0,0,0.4)]")}
          />
          {/* copie floutée, visible seulement vers la droite */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screen.src}
            alt=""
            aria-hidden
            className={cn(
              plane,
              "absolute inset-0 blur-[5px] [mask-image:linear-gradient(105deg,transparent_45%,black_78%)]",
            )}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col bg-neutral-100 px-10 pt-10 [background-image:radial-gradient(circle,rgba(0,0,0,0.10)_1px,transparent_1px)] [background-size:14px_14px] md:px-16 md:pt-14">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-xl bg-white shadow-[0_32px_70px_-28px_rgba(0,0,0,0.45)] ring-1 ring-black/10">
        <div className="flex items-center gap-2 border-b border-black/[0.07] bg-neutral-50 px-3.5 py-2">
          <span className="size-2 rounded-full bg-neutral-300" />
          <span className="size-2 rounded-full bg-neutral-300" />
          <span className="size-2 rounded-full bg-neutral-300" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-0.5 text-[10px] text-neutral-400 ring-1 ring-black/[0.06]">
            {screen.url}
          </span>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screen.src}
            alt={`Site ${client} réalisé par Webelevate`}
            className="h-full w-full object-cover [object-position:0_0] transition-[object-position] duration-[6000ms] ease-linear group-hover:[object-position:0_100%]"
          />
        </div>
      </div>
    </div>
  );
}

/* ----------------------- Owen : tunnel de vente -------------------------- */

function OwenMockup({ hero }: MockupProps) {
  const steps = [
    { label: "Page de vente", note: "Copywriting travaillé" },
    { label: "Offre de coaching", note: "Parcours simplifié" },
    { label: "Paiement", note: "Vente confirmée" },
  ];
  return (
    <Browser url="Tunnel de vente · Owen" hero={hero}>
      <div className="px-4 py-4">
        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Tunnel de vente
        </span>
        <div className="mt-2.5 space-y-1.5">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-full text-[8px] font-bold",
                  i === 2
                    ? "bg-neutral-900 text-white"
                    : "border border-black/15 text-neutral-500",
                )}
              >
                {i === 2 ? <Check className="size-2.5" /> : i + 1}
              </span>
              <div
                className={cn(
                  "flex flex-1 items-center justify-between rounded-lg border p-2",
                  i === 2
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-black/[0.08] bg-white",
                )}
              >
                <span className="text-[10px] font-semibold tracking-tight">{s.label}</span>
                <span
                  className={cn(
                    "text-[8px]",
                    i === 2 ? "text-white/60" : "text-neutral-400",
                  )}
                >
                  {s.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* ----------------- PRCP : dashboard d'accueil téléphonique --------------- */

function PrcpMockup({ hero }: MockupProps) {
  const calls = [
    { who: "Appel entrant", to: "Orienté · Devis rénovation" },
    { who: "Appel entrant", to: "Orienté · Suivi de chantier" },
    { who: "Appel de nuit", to: "Demande captée · E-mail envoyé" },
  ];
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col bg-neutral-100",
        hero ? "p-8 pb-0 md:p-12 md:pb-0" : "p-5 pb-0",
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-xl border border-b-0 border-black/10 bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between border-b border-black/[0.07] bg-neutral-50 px-3.5 py-2">
          <span className="text-[10px] font-bold tracking-tight text-neutral-900">
            PRCP · Accueil IA
          </span>
          <span className="flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-wide text-white">
            <span className="size-1 rounded-full bg-white" />
            En ligne 24h/24
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-3 px-3.5 py-3">
          <div className="space-y-1.5">
            {calls.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-black/[0.07] bg-white p-2 shadow-sm"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-neutral-900">
                  <Phone className="size-2.5 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold text-neutral-800">{c.who}</p>
                  <p className="truncate text-[8px] text-neutral-400">{c.to}</p>
                </div>
                <Check className="ml-auto size-3 shrink-0 text-neutral-800" />
              </div>
            ))}
          </div>
          <div className="flex w-20 flex-col justify-between rounded-lg bg-neutral-900 p-2.5 text-white">
            <p className="text-[7px] uppercase tracking-wide text-white/50">
              Appels manqués
            </p>
            <p className="text-xl font-bold tracking-tight">0</p>
            <div className="flex items-end gap-0.5">
              {[3, 7, 5, 9, 6, 10, 8].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-sm bg-white/30"
                  style={{ height: `${h * 1.6}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Registre -------------------------------- */

const mockups: Record<string, (p: MockupProps) => React.ReactNode> = {
  owen: (p) => <OwenMockup {...p} />,
  prcp: (p) => <PrcpMockup {...p} />,
};

export function hasMockup(slug: string) {
  return slug in mockups;
}

export function RealisationMockup({
  slug,
  hero = false,
}: {
  slug: string;
  hero?: boolean;
}) {
  const render = mockups[slug];
  if (!render) return null;
  return render({ hero });
}
