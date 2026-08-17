import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
};

// CGV complètes (auto-entrepreneur, clientèle pro, acompte 50 %, solde à
// la livraison). Relecture par un juriste recommandée avant signature.
export default function CgvPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Conditions générales de vente
      </h1>
      <p className="mt-4 text-sm text-black/50">
        En vigueur au {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-black/70">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            1. Objet et champ d'application
          </h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent toute
            prestation fournie par Oscar Goerger, entrepreneur individuel,
            SIRET 930 129 572 00010 (ci-après « le Prestataire ») : conception et développement de sites internet,
            production photographique et vidéo, prestations liées à
            l'intelligence artificielle et prestations associées. Les
            prestations s'adressent aux professionnels. Toute commande
            implique l'acceptation sans réserve des présentes CGV,
            qui prévalent sur tout autre document du client, sauf dérogation
            écrite au devis.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            2. Devis et commande
          </h2>
          <p>
            Chaque prestation fait l'objet d'un devis gratuit, valable 30
            jours à compter de son émission. La commande devient ferme à la
            réception du devis signé (ou accepté par e-mail) et du versement
            de l'acompte de 50 % du montant total. L'acompte
            n'est pas remboursable en cas d'annulation du fait du client après
            le démarrage des travaux.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            3. Prix et paiement
          </h2>
          <p>
            Les prix sont exprimés en euros, TVA non applicable, art. 293 B
            du CGI. Le solde est payable à la livraison (mise en ligne du
            site ou remise des fichiers), par virement bancaire. Toute prestation non prévue au devis fait
            l'objet d'un devis complémentaire.
          </p>
          <p className="mt-3">
            En cas de retard de paiement, des pénalités égales à trois fois le
            taux d'intérêt légal sont exigibles de plein droit, ainsi que,
            pour les professionnels, l'indemnité forfaitaire de recouvrement
            de 40 € (art. L.441-10 du Code de commerce). Le Prestataire se
            réserve le droit de suspendre les travaux et la mise en ligne
            jusqu'au complet paiement.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            4. Délais et obligations du client
          </h2>
          <p>
            Les délais indiqués (notamment la livraison en 21 jours) courent à
            compter de la réception de l'acompte ET de l'ensemble des éléments
            nécessaires à la prestation (contenus, accès, validations). Tout
            retard du client dans la fourniture de ces éléments ou dans ses
            validations prolonge d'autant le délai de livraison, sans
            pénalité pour le Prestataire. Le client garantit détenir les
            droits sur tous les éléments qu'il fournit (textes, images,
            logos, marques).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            5. Retours et validations
          </h2>
          <p>
            Le Prestataire s'engage à effectuer les retours et ajustements
            demandés par le client <strong className="text-neutral-900">dans la
            limite du périmètre défini au devis</strong>, jusqu'à validation
            finale : les allers-retours sur les livrables prévus ne sont pas
            limités en nombre. Toute demande sortant du périmètre initial
            (nouvelle page, nouvelle fonctionnalité, changement de direction
            artistique après validation d'étape, nouveau tournage ou
            shooting) constitue une prestation supplémentaire faisant l'objet
            d'un devis complémentaire. Chaque étape validée par le client
            (maquette, direction artistique, V1) est réputée acquise.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            6. Livraison et réception
          </h2>
          <p>
            La livraison s'entend de la mise en ligne du site ou de la remise
            des fichiers (photo, vidéo). Sans réserve formulée par écrit dans
            un délai de 7 jours suivant la livraison, la prestation est
            réputée acceptée. Les fichiers sources et livrables sont conservés
            par le Prestataire pendant 6 mois après livraison ; il appartient
            au client d'en assurer la sauvegarde au-delà.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            7. Propriété intellectuelle
          </h2>
          <p>
            Les livrables (site, photographies, vidéos) sont cédés au client
            au complet paiement du prix, pour les exploitations prévues au
            devis. Jusqu'au paiement intégral, le Prestataire demeure
            titulaire de l'ensemble des droits. Les outils, méthodes et
            développements génériques du Prestataire restent sa propriété. Le
            client autorise le Prestataire à mentionner et présenter les
            réalisations dans son portfolio et sur ses supports de
            communication, sauf demande contraire écrite.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            8. Hébergement, nom de domaine et services tiers
          </h2>
          <p>
            Sauf mention contraire au devis, les abonnements aux services
            tiers (hébergement, nom de domaine, outils, licences) sont
            souscrits au nom et à la charge du client, qui en reste titulaire.
            Le Prestataire ne saurait être tenu responsable des
            dysfonctionnements imputables à ces services tiers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            9. Responsabilité
          </h2>
          <p>
            Le Prestataire est tenu à une obligation de moyens. Sa
            responsabilité, toutes causes confondues, est limitée au montant
            effectivement payé par le client au titre de la prestation
            concernée. Il ne saurait être tenu responsable des dommages
            indirects (perte de chiffre d'affaires, de clientèle, de données,
            préjudice d'image) ni du contenu publié par le client sur ses
            supports après livraison.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            10. Droit de rétractation (consommateurs)
          </h2>
          <p>
            Si le client est un consommateur au sens du Code de la
            consommation et que le contrat est conclu à distance, il dispose
            d'un délai de rétractation de 14 jours à compter de la conclusion
            du contrat (art. L.221-18). S'il demande l'exécution de la
            prestation avant l'expiration de ce délai, il reconnaît devoir le
            paiement du service exécuté jusqu'à sa rétractation, et renonce à
            son droit de rétractation si la prestation est entièrement
            exécutée avant la fin du délai (art. L.221-28).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            11. Force majeure
          </h2>
          <p>
            Aucune partie ne pourra être tenue responsable d'un manquement dû
            à un cas de force majeure au sens de l'article 1218 du Code civil.
            Les délais sont suspendus pendant toute la durée de l'événement.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            12. Médiation et litiges
          </h2>
          <p>
            Les présentes CGV sont soumises au droit français. Les parties
            s'engagent à rechercher une solution amiable avant toute action.
            À défaut, tout litige entre professionnels sera porté devant le
            tribunal compétent du ressort du siège du Prestataire. Dans
            l'hypothèse où un client consommateur viendrait à contracter, il
            bénéficierait du dispositif de médiation de la consommation prévu
            aux articles L.612-1 et suivants du Code de la consommation.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">
            13. Contact
          </h2>
          <p>Pour toute question relative aux présentes CGV : {site.email}.</p>
        </section>
      </div>
    </div>
  );
}
