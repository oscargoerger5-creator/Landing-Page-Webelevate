import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

// ⚠️ Placeholder à relire/compléter selon les traitements réels (formulaire,
// analytics…) avant mise en ligne.
export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Politique de confidentialité
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-black/70">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Données collectées
          </h2>
          <p>
            Lorsque vous nous contactez (formulaire, e-mail ou WhatsApp), nous
            collectons uniquement les informations nécessaires au traitement de
            votre demande : nom, e-mail, téléphone et le contenu de votre
            message.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Utilisation des données
          </h2>
          <p>
            Ces données servent exclusivement à répondre à votre demande et à
            assurer le suivi de votre projet. Elles ne sont ni vendues ni
            partagées avec des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Durée de conservation
          </h2>
          <p>
            Vos données sont conservées le temps de la relation commerciale et
            au maximum 3 ans après le dernier contact.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de
            rectification et de suppression de vos données. Pour l'exercer,
            écrivez-nous à {site.email}.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            Cookies
          </h2>
          <p>
            Ce site n'utilise pas de cookies publicitaires. [À compléter si un
            outil de mesure d'audience est ajouté.]
          </p>
        </section>
      </div>
    </div>
  );
}
