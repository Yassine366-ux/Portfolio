import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "glass" | "ghost";
};

const variants = {
  primary:
    "bg-cyanGlow text-slate-950 shadow-glow hover:bg-white hover:shadow-glow-strong",
  glass:
    "border border-cyanGlow/25 bg-white/5 text-white hover:border-cyanGlow/70 hover:bg-cyanGlow/10 hover:shadow-glow",
  ghost:
    "border border-slate-700/80 bg-slate-950/30 text-slate-200 hover:border-cyanGlow/50 hover:text-white"
};

export function GlowButton({
  children,
  className,
  variant = "primary",
  ...props
}: GlowButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanGlow",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-white/30 blur-xl transition duration-700 group-hover:translate-x-[220%]" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}
