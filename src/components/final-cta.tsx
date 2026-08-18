import { ArrowUpRight } from "lucide-react";
import { BookCallButton } from "@/components/cal-booking";
import { AvatarStack, LogoRow } from "@/components/trust-strip";

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

        {/* Preuve sociale : les marques d'abord (logos couleur, variantes
            fond sombre), puis les entrepreneurs */}
        <div className="mt-12 flex flex-col items-center gap-7">
          <LogoRow
            tone="dark"
            className="mx-auto max-w-3xl gap-x-7 md:gap-x-9"
            imgClassName="h-8 max-w-[96px] md:h-9 md:max-w-[120px]"
          />
          <div className="flex flex-col items-center gap-3">
            <AvatarStack
              size="size-10 md:size-11"
              ringClassName="ring-neutral-900"
              max={7}
            />
            <p className="text-sm text-white/50">
              Ils travaillent déjà avec nous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
