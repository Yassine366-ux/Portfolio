import { SocialLinks } from "@/components/ui/social-links";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 py-10">
      <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            Full-stack developer portfolio. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
