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
  "Délai et budget clairs à la fin",
];

// CONTACT — page minimaliste : l'agenda Cal.com en pleine largeur (paysage),
// les repères de l'appel au-dessus, les contacts écrits en dessous.
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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

      {/* Les 3 repères de l'appel, sur une ligne */}
      <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-2.5">
        {CALL_POINTS.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-black/60">
            <span className="grid size-4.5 shrink-0 place-items-center rounded-full bg-neutral-900">
              <Check className="size-2.5 text-white" strokeWidth={3.5} />
            </span>
            {point}
          </li>
        ))}
      </ul>

      {/* Agenda Cal.com, pleine largeur en paysage */}
      <div className="mx-auto mt-10 h-[620px] max-w-5xl overflow-hidden rounded-2xl border border-black/10 shadow-sm sm:h-[560px]">
        <CalInline />
      </div>

      {/* Contacts écrits, discrets */}
      <p className="mt-8 text-center text-sm text-black/50">
        Vous préférez écrire ?{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-black/75 underline-offset-4 transition-colors hover:text-black hover:underline"
        >
          {site.email}
        </a>{" "}
        <span className="mx-1.5">·</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/75 underline-offset-4 transition-colors hover:text-black hover:underline"
        >
          WhatsApp
        </a>
      </p>
    </div>
  );
}
