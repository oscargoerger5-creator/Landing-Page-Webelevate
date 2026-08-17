import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CalInline } from "@/components/cal-booking";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réservez un appel découverte de 15 minutes : objectifs, besoins, budget. Réponse claire à la fin de l'appel.",
};

const WHATSAPP_URL = "https://wa.me/33658488714";

const CALL_POINTS = [
  "15 minutes, sans engagement",
  "On cadre vos objectifs et vos besoins",
  "À la fin : délai et budget, en toute clarté",
];

// CONTACT — l'agenda Cal.com embarqué, avec le déroulé de l'appel à côté.
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-black/40">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Réservez votre appel découverte.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-black/60">
          Choisissez un créneau, on s'occupe du reste.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[1fr_1.7fr] md:gap-12">
        {/* Déroulé de l'appel + autres moyens de contact */}
        <div className="md:sticky md:top-28">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Comment ça se passe ?
          </h2>
          <ul className="mt-5 space-y-3">
            {CALL_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-neutral-900">
                  <Check className="size-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-black/75">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-black/[0.08] pt-7">
            <p className="text-sm font-semibold">Vous préférez écrire ?</p>
            <div className="mt-3 space-y-2 text-[15px]">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-black/70 underline-offset-4 transition-colors hover:text-black hover:underline"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 underline-offset-4 transition-colors hover:text-black hover:underline"
                >
                  WhatsApp : réponse dans la journée
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Agenda Cal.com embarqué */}
        <div className="min-h-[560px] overflow-hidden rounded-2xl border border-black/10 shadow-sm md:min-h-[640px]">
          <CalInline />
        </div>
      </div>
    </div>
  );
}
