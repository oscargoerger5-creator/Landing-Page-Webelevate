import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
};

// ⚠️ Placeholders à compléter : forme juridique, SIRET, adresse, hébergeur.
export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Mentions légales
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-black/70">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Éditeur du site
          </h2>
          <p>
            {site.name}, [forme juridique à compléter]
            <br />
            [Adresse à compléter]
            <br />
            SIRET : [à compléter]
            <br />
            Contact : {site.email}
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Directeur de la publication
          </h2>
          <p>[Nom du responsable à compléter]</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Hébergement
          </h2>
          <p>
            [Hébergeur à compléter, ex. Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des contenus de ce site (textes, images, vidéos, logos)
            est la propriété de {site.name} ou de ses clients et ne peut être
            reproduit sans autorisation préalable.
          </p>
        </section>
      </div>
    </div>
  );
}
