"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { nav, services, site } from "@/lib/site";
import { Logo } from "@/components/logo";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Conditions générales de vente", href: "/cgv" },
];

// Footer — logo + texte à gauche, colonnes Pages / Services / Légal à droite.
// Sur la page Studio (fond noir), le footer passe en négatif.
export function SiteFooter() {
  const dark = usePathname() === "/studio";
  const link = cn(
    "text-sm transition-colors",
    dark ? "text-white/55 hover:text-white" : "text-black/55 hover:text-black",
  );
  return (
    <footer
      className={cn(
        "border-t",
        dark
          ? "border-white/10 bg-neutral-950 text-white"
          : "mt-24 border-black/10",
      )}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
        {/* Marque */}
        <div>
          <Logo
            className="h-8"
            wordmarkClassName="text-xl"
            theme={dark ? "dark" : "light"}
          />
          <p
            className={cn(
              "mt-4 max-w-xs text-sm leading-relaxed",
              dark ? "text-white/55" : "text-black/55",
            )}
          >
            {site.description}
          </p>
          <a
            href={`mailto:${site.email}`}
            className={cn(
              "mt-4 inline-block text-sm underline-offset-4 transition-colors hover:underline",
              dark
                ? "text-white/70 hover:text-white"
                : "text-black/70 hover:text-black",
            )}
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
                <Link href={item.href} className={link}>
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
                <Link href={`/services#${s.slug}`} className={link}>
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
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={cn("border-t", dark ? "border-white/10" : "border-black/10")}>
        <div
          className={cn(
            "mx-auto max-w-6xl px-6 py-6 text-xs",
            dark ? "text-white/40" : "text-black/40",
          )}
        >
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
