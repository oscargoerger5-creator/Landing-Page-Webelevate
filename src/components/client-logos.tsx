import { cn } from "@/lib/utils";
import { clients, type Client } from "@/lib/site";

// Un élément du marquee : logo (entreprise) ou visage + nom + activité (entrepreneur).
function ClientItem({ c }: { c: Client }) {
  if (c.type === "person") {
    return (
      <span className="inline-flex items-center gap-3 whitespace-nowrap">
        {c.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={c.photo}
            alt={c.name}
            className="size-11 rounded-full object-cover"
          />
        ) : (
          <span className="grid size-11 place-items-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-600">
            {c.name.charAt(0)}
          </span>
        )}
        <span className="flex flex-col text-left leading-tight">
          <span className="text-base font-semibold text-black/75">
            {c.name}
          </span>
          {c.role && <span className="text-sm text-black/40">{c.role}</span>}
        </span>
      </span>
    );
  }

  // Entreprise
  return c.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={c.logo}
      alt={c.name}
      className={cn(
        "h-12 w-auto max-w-[210px] object-contain md:h-14",
        c.logoClassName,
      )}
    />
  ) : (
    <span className="whitespace-nowrap text-2xl font-semibold text-black/35 md:text-3xl">
      {c.name}
    </span>
  );
}

// Slider clients (marquee) — mélange entreprises (logos) et entrepreneurs (visages).
export function ClientLogos() {
  const loop = [...clients, ...clients];

  return (
    <div className="border-t border-black/[0.07] py-12 md:py-16">
      <p className="mb-9 text-center text-sm font-medium uppercase tracking-widest text-black/40">
        Ils nous ont fait confiance
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max items-center gap-16 pr-16 animate-[marquee_38s_linear_infinite]">
          {loop.map((c, i) => (
            <ClientItem key={i} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
