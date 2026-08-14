import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/logo";

// Footer placeholder — structure only, design à venir (composant 21st).
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo className="h-8" wordmarkClassName="text-xl" theme="light" />
          <p className="mt-3 max-w-xs text-sm text-black/60">{site.description}</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
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
