import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Parlons de votre projet web. Réponse sous 24h.",
};

// CONTACT — structure placeholder (formulaire non branché).
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Démarrer un projet
      </h1>
      <p className="mt-4 text-lg text-black/60">
        Dites-nous où vous en êtes. On revient vers vous sous 24h.
      </p>

      <form className="mt-12 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-black/70">Nom</label>
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border border-black/15 bg-black/5 px-4 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black/40"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-black/70">Email</label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-black/15 bg-black/5 px-4 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black/40"
              placeholder="vous@exemple.com"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-black/70">Projet</label>
          <textarea
            name="message"
            rows={5}
            className="w-full rounded-lg border border-black/15 bg-black/5 px-4 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black/40"
            placeholder="Décrivez votre projet en quelques lignes…"
          />
        </div>
        {/* Formulaire non branché — logique d'envoi à ajouter (email / service). */}
        <Button type="submit" size="lg" variant="secondary" disabled>
          Envoyer (à brancher)
        </Button>
      </form>

      <p className="mt-10 text-sm text-black/50">
        Ou par email :{" "}
        <a href={`mailto:${site.email}`} className="text-black hover:underline">
          {site.email}
        </a>
      </p>
    </div>
  );
}
