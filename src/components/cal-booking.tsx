"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";

// Intégration Cal.com (appel découverte 15 min).
// - CalInline : agenda embarqué dans la page (page Contact)
// - BookCallButton : bouton qui ouvre l'agenda en modale (CTA)

const CAL_NAMESPACE = "decouverte";
const CAL_LINK = "oscargoerger/decouverte";
const CAL_UI = {
  cssVarsPerTheme: {
    light: { "cal-brand": "#111111" },
    dark: { "cal-brand": "#fafafa" },
  },
  hideEventTypeDetails: false,
  layout: "month_view",
  theme: "light", // le site est toujours clair, l'agenda aussi
} as const;

function useCalUi() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", CAL_UI);
    })();
  }, []);
}

export function CalInline() {
  useCalUi();
  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%" }}
      config={{
        layout: "month_view",
        theme: "light",
        useSlotsViewOnSmallScreen: "true",
      }}
    />
  );
}

export function BookCallButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  useCalUi();
  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view","theme":"light","useSlotsViewOnSmallScreen":"true"}'
      className={className}
    >
      {children}
    </button>
  );
}

// La modale Cal persiste dans le <body> entre les navigations Next :
// on la retire à chaque changement de page pour éviter qu'elle réapparaisse.
export function CalModalCleanup() {
  const pathname = usePathname();
  useEffect(() => {
    document.querySelectorAll("cal-modal-box").forEach((el) => el.remove());
  }, [pathname]);
  return null;
}
