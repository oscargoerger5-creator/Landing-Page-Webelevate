import { ArrowUpRight } from "lucide-react";
import { BookCallButton } from "@/components/cal-booking";

const WHATSAPP_URL = "https://wa.me/33658488714";

// CTA final : grand bloc sombre qui clôt la page avant le footer.
// « Réserver un appel » ouvre l'agenda Cal.com en modale.
export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-16 text-center text-white md:px-16 md:py-24">
        {/* halo discret */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        />
        <p className="text-sm font-medium uppercase tracking-widest text-white/40">
          Prêt à commencer ?
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Donnons à votre marque l'image qu'elle mérite.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-white/60 md:text-lg">
          Un appel de 15 minutes pour cadrer votre projet. Votre site en ligne
          en 21 jours.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookCallButton className="inline-flex h-12 cursor-pointer items-center gap-1.5 rounded-full bg-white px-7 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200">
            Réserver un appel
            <ArrowUpRight className="size-4" />
          </BookCallButton>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-full border border-white/20 px-7 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Nous écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
