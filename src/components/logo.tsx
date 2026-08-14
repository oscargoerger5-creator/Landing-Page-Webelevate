import Image from "next/image";
import { cn } from "@/lib/utils";

// Logo Webelevate — icône "wi" + wordmark, côte à côte.
// `theme` = couleur du FOND sur lequel le logo est posé :
//   - "light" (fond clair, ex. header blanc) → icône carré noir + wordmark noir
//   - "dark"  (fond sombre, ex. footer)      → icône blanche + wordmark blanc
type LogoProps = {
  className?: string;
  wordmarkClassName?: string;
  theme?: "light" | "dark";
};

export function Logo({
  className,
  wordmarkClassName,
  theme = "light",
}: LogoProps) {
  const isDarkBg = theme === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={isDarkBg ? "/logo-mark-white.png" : "/logo-webelevate-icon.png"}
        alt="webelevate"
        width={isDarkBg ? 1332 : 336}
        height={isDarkBg ? 1368 : 336}
        priority
        className="h-full w-auto"
      />
      <span
        className={cn(
          "font-sans font-semibold lowercase leading-none tracking-tight",
          isDarkBg ? "text-white" : "text-neutral-900",
          wordmarkClassName ?? "text-2xl",
        )}
      >
        webelevate
      </span>
    </span>
  );
}
