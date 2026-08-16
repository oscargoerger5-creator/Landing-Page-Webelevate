import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { RealisationsGallery } from "@/components/realisations-gallery";
import { ServicesBento } from "@/components/services-bento";
import { Testimonials } from "@/components/testimonials";

// ACCUEIL — ordre : Hero → Clients → Réalisations → Services → Process → Avis → CTA.
export default function HomePage() {
  return (
    <>
      {/* HERO (composant dédié) + slider clients */}
      <Hero />

      {/* SERVICES — bento 2×2 (Vidéo · Photo · Site · IA) */}
      <ServicesBento />

      {/* RÉALISATIONS — carrousel de projets */}
      <RealisationsGallery />

      {/* PROCESS — frise parcours + délai */}
      <ProcessTimeline />

      {/* AVIS / TÉMOIGNAGES — renfort social juste avant le CTA */}
      <Testimonials />

      {/* FAQ — lever les dernières objections avant le CTA */}
      <Faq />

      {/* CTA final */}
      <FinalCta />
    </>
  );
}
