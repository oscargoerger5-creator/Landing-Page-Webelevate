import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
};

// Mentions complètes (LCEN art. 6-III).
export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Mentions légales
      </h1>
      <p className="mt-4 text-sm text-black/50">
        En vigueur au {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-black/70">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            1. Éditeur du site
          </h2>
          <p>
            Le site webelevate (ci-après « le Site ») est édité par :
            <br />
            <strong className="text-neutral-900">
              Oscar Goerger, entrepreneur individuel
            </strong>
            <br />
            Siège social : 16 rue Eugène Dischert, 67230 Benfeld
            <br />
            SIRET : 930 129 572 00010
            <br />
            TVA non applicable, art. 293 B du CGI
            <br />
            Contact : {site.email} · Téléphone : 06 58 48 87 14
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            2. Directeur de la publication
          </h2>
          <p>Oscar Goerger</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            3. Hébergement
          </h2>
          <p>
            Le Site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133,
            Covina, CA 91723, États-Unis (
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline underline-offset-4"
            >
              vercel.com
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            4. Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des éléments du Site (textes, images, photographies,
            vidéos, logos, marques, structure et charte graphique) est protégé
            par le droit de la propriété intellectuelle et appartient à
            l'éditeur ou à ses clients, qui ont autorisé leur diffusion. Toute
            reproduction, représentation, modification ou exploitation, totale
            ou partielle, sans autorisation écrite préalable est interdite et
            constitue une contrefaçon au sens des articles L.335-2 et suivants
            du Code de la propriété intellectuelle.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            5. Données personnelles
          </h2>
          <p>
            Le traitement des données personnelles collectées via le Site est
            détaillé dans notre{" "}
            <a
              href="/confidentialite"
              className="text-neutral-900 underline underline-offset-4"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            6. Responsabilité
          </h2>
          <p>
            L'éditeur s'efforce d'assurer l'exactitude des informations
            diffusées sur le Site, sans garantir qu'elles soient exemptes
            d'erreurs ou d'omissions. Le Site peut contenir des liens vers des
            sites tiers dont l'éditeur ne contrôle pas le contenu et décline
            toute responsabilité quant à celui-ci.
          </p>
        </section>
      </div>
    </div>
  );
}
