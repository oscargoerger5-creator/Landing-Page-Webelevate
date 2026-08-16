import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
};

// ⚠️ Placeholder à compléter avec tes vraies conditions (tarifs, acomptes,
// délais de paiement, résiliation…) — idéalement relu par un juriste.
export default function CgvPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Conditions générales de vente
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-black/70">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            1. Objet
          </h2>
          <p>
            Les présentes conditions générales de vente encadrent les
            prestations proposées par {site.name} : création de sites internet,
            production photo et vidéo, et solutions d'intelligence artificielle.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            2. Devis et commande
          </h2>
          <p>
            Chaque prestation fait l'objet d'un devis détaillé et gratuit. La
            commande est confirmée à la signature du devis, accompagnée d'un
            acompte de [pourcentage à compléter] %.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            3. Délais et livraison
          </h2>
          <p>
            Les délais sont précisés au devis et courent à partir de la
            réception de l'acompte et des éléments nécessaires au projet. Les
            retours sont illimités jusqu'à validation finale du client.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            4. Paiement
          </h2>
          <p>
            [Modalités à compléter : solde à la livraison, moyens de paiement,
            pénalités de retard…]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            5. Propriété et droits
          </h2>
          <p>
            À l'issue du paiement intégral, le client devient propriétaire des
            livrables (site, photos, vidéos). {site.name} conserve le droit de
            présenter les réalisations dans son portfolio, sauf demande
            contraire du client.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            6. Contact
          </h2>
          <p>
            Pour toute question relative aux présentes conditions :{" "}
            {site.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
