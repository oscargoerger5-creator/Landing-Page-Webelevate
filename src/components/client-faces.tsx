import { clientPersons } from "@/lib/site";

// Grille des entrepreneurs accompagnés (photo + nom + activité) — pour le Studio.
export function ClientFaces() {
  return (
    <div>
      <p className="mb-9 text-center text-sm font-medium uppercase tracking-widest text-black/40">
        Ils nous font confiance
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
        {clientPersons.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            {c.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={c.photo}
                alt={c.name}
                className="size-14 rounded-full object-cover"
              />
            ) : (
              <span className="grid size-14 place-items-center rounded-full bg-neutral-200 text-base font-semibold text-neutral-600">
                {c.name.charAt(0)}
              </span>
            )}
            <div className="text-left leading-tight">
              <p className="font-semibold text-black/80">{c.name}</p>
              {c.role && <p className="text-sm text-black/45">{c.role}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
