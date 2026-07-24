import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { socials } from "@/lib/portfolio-data";

const iconMap: Record<(typeof socials)[number]["icon"], LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
  mail: Mail
};

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={cn(
              "group relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 backdrop-blur transition duration-300 hover:border-cyanGlow/70 hover:text-white hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyanGlow",
              iconClassName
            )}
          >
            <Icon size={18} aria-hidden="true" />
            <span className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 rounded bg-slate-950 px-2 py-1 text-xs text-white opacity-0 shadow-lg ring-1 ring-white/10 transition group-hover:opacity-100">
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
