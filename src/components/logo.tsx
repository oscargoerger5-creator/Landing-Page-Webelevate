import Image from "next/image";
import { cn } from "@/lib/utils";

// Logo Webelevate — icône "wi" + wordmark, côte à côte.
// `theme` = couleur du FOND sur lequel le logo est posé :
//   - "light" (fond clair, ex. header blanc) → icône carré noir + wordmark noir
//   - "dark"  (fond sombre, ex. page Studio) → icône inversée + wordmark blanc
// Les deux icônes sont superposées et se fondent l'une dans l'autre quand le
// thème change (transition douce du header en arrivant sur /studio).
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
      <span className="relative h-full">
        <Image
          src="/logo-webelevate-icon.png"
          alt="webelevate"
          width={336}
          height={336}
          priority
          className={cn(
            "h-full w-auto transition-opacity duration-500",
            isDarkBg && "opacity-0",
          )}
        />
        <Image
          src="/logo-webelevate-icon-inverse.png"
          alt=""
          aria-hidden
          width={304}
          height={304}
          priority
          className={cn(
            "absolute inset-0 h-full w-auto transition-opacity duration-500",
            !isDarkBg && "opacity-0",
          )}
        />
      </span>
      <span
        className={cn(
          "font-sans font-semibold lowercase leading-none tracking-tight transition-colors duration-500",
          isDarkBg ? "text-white" : "text-neutral-900",
          wordmarkClassName ?? "text-2xl",
        )}
      >
        webelevate
      </span>
    </span>
  );
}
