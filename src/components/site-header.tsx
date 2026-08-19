"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";
import { usePathname } from "next/navigation";

// WhatsApp Webelevate — ouvre une conversation directe avec le numéro.
const WHATSAPP_URL = "https://wa.me/33658488714";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.481-8.46" />
    </svg>
  );
}

// Header Webelevate — pill flottant BLANC (façon 21st) qui ressort sur le fond noir.
// Se rétrécit et flotte au scroll (animation). Texte noir, logo foncé.
export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  // Page Studio : le header passe en négatif (fond noir, textes blancs).
  const dark = usePathname() === "/studio";

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Signale l'état du menu au reste de la page (ex. bouton WhatsApp flottant).
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const navLink = dark
    ? "rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
    : "rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-black/5 hover:text-neutral-900";
  const cta = dark
    ? "inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
    : "inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full text-neutral-900 transition-all duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-[max-width,border-radius,top]",
        scrolled && !open
          ? // Scrollé : pill flottant (desktop) avec ombre marquée
            dark
            ? "border-b border-transparent bg-neutral-950/90 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.25)] backdrop-blur-lg md:top-4 md:max-w-4xl md:rounded-2xl md:border md:border-white/15"
            : "border-b border-transparent bg-white/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] backdrop-blur-lg md:top-4 md:max-w-4xl md:rounded-2xl md:border md:border-black/10"
          : // En haut : pleine largeur, ombre douce
            dark
            ? "border-b border-white/10 bg-neutral-950 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.18)] md:max-w-full md:rounded-none"
            : "border-b border-black/[0.07] bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)] md:max-w-full md:rounded-none",
        open && (dark ? "bg-neutral-950" : "bg-white"),
        dark ? "text-white" : "text-neutral-900",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 transition-all duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          { "md:px-4": scrolled },
        )}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          {/* Wordmark masqué entre 640 et 830px pour laisser la place à la nav */}
          <Logo
            className="h-10"
            wordmarkClassName="text-2xl sm:max-[830px]:hidden"
            theme={dark ? "dark" : "light"}
          />
        </Link>

        {/* max-sm:hidden (plutôt que hidden+sm:flex) : la classe `hidden` peut
            être écrasée par le CSS injecté de certaines extensions Chrome. */}
        <div className="flex items-center gap-0.5 max-sm:hidden md:gap-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={navLink}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className={cn(cta, "ml-2 md:ml-3")}>
            Démarrer un projet
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous écrire sur WhatsApp"
            title="WhatsApp"
            className="ml-2 inline-flex size-10 items-center justify-center rounded-lg bg-[#25D366] text-white transition-all duration-200 max-md:hidden hover:bg-[#1EBE57] hover:shadow-[0_0_0_4px_rgba(37,211,102,0.28)]"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={cn(
            "flex size-10 items-center justify-center rounded-lg border sm:hidden",
            dark ? "border-white/20 text-white" : "border-black/10 text-neutral-900",
          )}
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col overflow-hidden border-t sm:hidden",
          dark ? "border-white/10 bg-neutral-950" : "border-black/10 bg-white",
          open ? "block" : "max-sm:hidden",
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
            "flex h-full w-full flex-col justify-between gap-y-2 p-6",
          )}
        >
          <div className="grid gap-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(navLink, "px-3 py-3 text-base")}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(cta, "h-12 w-full")}
            >
              Démarrer un projet
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-medium text-white transition-colors hover:bg-[#1EBE57]"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
