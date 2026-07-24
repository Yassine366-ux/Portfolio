"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { SocialLinks } from "@/components/ui/social-links";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home section">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-cyanGlow text-sm font-black text-slate-950 shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:text-white",
                activeSection === item.id && "bg-cyanGlow/10 text-cyanGlow"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks iconClassName="h-9 w-9" />
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyanGlow hover:shadow-glow"
          >
            Contact
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
            className="glass mx-auto mt-3 max-w-6xl rounded-lg p-3 md:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white",
                    activeSection === item.id && "bg-cyanGlow/10 text-cyanGlow"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
              <SocialLinks />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-cyanGlow px-4 py-2 text-sm font-semibold text-slate-950"
              >
                Contact
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
