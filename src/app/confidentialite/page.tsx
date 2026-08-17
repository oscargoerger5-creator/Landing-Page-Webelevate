import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

// ⚠️ Compléter le responsable de traitement (section 1) avec les mêmes
// informations que les mentions légales avant mise en production.
export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm text-black/50">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-black/70">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            1. Responsable de traitement
          </h2>
          <p>
            Les données personnelles collectées sur ce site sont traitées par
            Oscar Goerger, entrepreneur individuel, 16 rue Eugène Dischert,
            67230 Benfeld, joignable à l'adresse{" "}
            {site.email}.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            2. Données collectées et finalités
          </h2>
          <p>
            Nous collectons uniquement les données nécessaires aux finalités
            suivantes :
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-neutral-900">Réservation d'un appel</strong>{" "}
              (via Cal.com) : nom, adresse e-mail, numéro de téléphone, besoin
              exprimé et informations que vous choisissez de transmettre.
              Finalité : organiser l'appel et préparer l'échange. Base légale :
              mesures précontractuelles (art. 6.1.b RGPD).
            </li>
            <li>
              <strong className="text-neutral-900">Contact par e-mail ou WhatsApp</strong>{" "}
              : les coordonnées et le contenu de votre message. Finalité :
              répondre à votre demande. Base légale : intérêt légitime et
              mesures précontractuelles.
            </li>
            <li>
              <strong className="text-neutral-900">Exécution d'un projet</strong>{" "}
              : coordonnées de facturation et éléments nécessaires à la
              prestation. Base légale : exécution du contrat et obligations
              légales (comptabilité).
            </li>
          </ul>
          <p className="mt-3">
            Aucune donnée n'est vendue, louée ou utilisée à des fins de
            prospection pour le compte de tiers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            3. Destinataires et sous-traitants
          </h2>
          <p>
            Les données sont accessibles au seul éditeur du site et à ses
            sous-traitants techniques, dans la limite de leurs missions :
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-neutral-900">Cal.com, Inc.</strong> (prise
              de rendez-vous) ;
            </li>
            <li>
              <strong className="text-neutral-900">Vercel Inc.</strong>{" "}
              (hébergement du site) ;
            </li>
            <li>
              <strong className="text-neutral-900">Google LLC</strong>{" "}
              (visioconférence Google Meet lors des appels) ;
            </li>
            <li>
              <strong className="text-neutral-900">Meta Platforms</strong>{" "}
              (WhatsApp, si vous choisissez ce canal).
            </li>
          </ul>
          <p className="mt-3">
            Certains de ces prestataires sont situés aux États-Unis. Les
            transferts sont encadrés par des garanties appropriées (clauses
            contractuelles types de la Commission européenne et, le cas
            échéant, certification au Data Privacy Framework).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            4. Durées de conservation
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Prospects (demande sans suite) : 3 ans après le dernier contact ;
            </li>
            <li>
              Clients : durée de la relation contractuelle, puis archivage des
              pièces comptables et contractuelles pendant 10 ans (obligation
              légale) ;
            </li>
            <li>Rendez-vous Cal.com : selon la politique de Cal.com.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            5. Vos droits
          </h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous
            disposez d'un droit d'accès, de rectification, d'effacement, de
            limitation, d'opposition et de portabilité de vos données. Pour
            l'exercer, écrivez à {site.email}. Nous répondons dans un délai
            d'un mois. Si vous estimez que vos droits ne sont pas respectés,
            vous pouvez saisir la CNIL (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline underline-offset-4"
            >
              cnil.fr
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            6. Cookies
          </h2>
          <p>
            Le site ne dépose pas de cookies publicitaires ni de traceurs de
            mesure d'audience. Le module de réservation Cal.com peut déposer
            des cookies strictement nécessaires à son fonctionnement,
            exemptés de consentement. Si un outil de mesure d'audience ou de
            marketing venait à être ajouté, cette politique serait mise à jour
            et un bandeau de consentement affiché.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            7. Sécurité
          </h2>
          <p>
            Le site est servi intégralement en HTTPS. Les données sont
            traitées via des prestataires appliquant des mesures de sécurité
            reconnues de l'état de l'art (chiffrement en transit, contrôle
            d'accès).
          </p>
        </section>
      </div>
    </div>
  );
}
