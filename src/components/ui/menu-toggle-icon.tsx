"use client";
import React from "react";
import { cn } from "@/lib/utils";

type MenuToggleProps = React.ComponentProps<"svg"> & {
  open: boolean;
  duration?: number;
};

// Burger minimaliste : trois traits identiques qui se transforment en croix
// (trait du haut et du bas pivotent, celui du milieu s'efface).
export function MenuToggleIcon({
  open,
  className,
  stroke = "currentColor",
  strokeWidth = 2,
  duration = 300,
  ...props
}: MenuToggleProps) {
  const lineClass =
    "origin-center [transform-box:fill-box] transition-all ease-in-out";
  const style = { transitionDuration: `${duration}ms` };

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      {...props}
    >
      <line
        x1="7"
        y1="9"
        x2="25"
        y2="9"
        style={style}
        className={cn(lineClass, open && "translate-y-[7px] rotate-45")}
      />
      <line
        x1="7"
        y1="16"
        x2="25"
        y2="16"
        style={style}
        className={cn(lineClass, open && "opacity-0")}
      />
      <line
        x1="7"
        y1="23"
        x2="25"
        y2="23"
        style={style}
        className={cn(lineClass, open && "-translate-y-[7px] -rotate-45")}
      />
    </svg>
  );
}
