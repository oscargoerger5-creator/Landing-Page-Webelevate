import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Logo } from "@/components/logo";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Conditions générales de vente", href: "/cgv" },
];

// Footer — logo + texte à gauche, colonnes Pages / Services / Légal à droite.
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
        {/* Marque */}
        <div>
          <Logo className="h-8" wordmarkClassName="text-xl" theme="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-black/55">
            {site.description}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm text-black/70 underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            {site.email}
          </a>
        </div>

        {/* Pages */}
        <nav aria-label="Pages">
          <p className="text-sm font-semibold">Pages</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <p className="text-sm font-semibold">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Légal */}
        <nav aria-label="Légal">
          <p className="text-sm font-semibold">Légal</p>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-black/55 transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-black/40">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
