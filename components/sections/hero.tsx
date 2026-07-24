"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileDown, MessageCircle, Sparkles } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { SocialLinks } from "@/components/ui/social-links";
import { heroRoles, profile, whatsappHref } from "@/lib/portfolio-data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % heroRoles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center pt-32 sm:pt-36 lg:pt-28"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm font-semibold text-cyanGlow">
            <Sparkles size={16} aria-hidden="true" />
            Available for impactful developer opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            {profile.role}
          </p>

          <h1 className="text-balance text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-balance bg-gradient-to-r from-cyanGlow via-sky-200 to-electricBlue bg-clip-text text-3xl font-black leading-[1.1] text-transparent sm:text-4xl lg:text-5xl">
            {profile.headline}
          </p>

          <div className="mt-6 flex min-h-9 items-center gap-3 text-lg font-semibold text-slate-200 sm:text-2xl">
            <span className="text-slate-500">I am a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={heroRoles[roleIndex]}
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                transition={{ duration: 0.36 }}
                className="text-cyanGlow"
              >
                {heroRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary} I enjoy turning structured ideas into polished web
            experiences, secure APIs, and tested systems that feel fast and dependable.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <GlowButton href={profile.cvHref} download aria-label="Download Yassine Azouanat CV">
              <FileDown size={18} aria-hidden="true" />
              Download CV
            </GlowButton>
            <GlowButton
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="glass"
              aria-label="Contact Yassine on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Contact me on WhatsApp
            </GlowButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SocialLinks />
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyanGlow"
            >
              View projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute -inset-6 rounded-full bg-cyanGlow/20 blur-3xl" aria-hidden="true" />
          <div className="gradient-border glass relative overflow-hidden rounded-lg p-4">
            <div className="absolute right-6 top-6 z-10 rounded-full border border-cyanGlow/30 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyanGlow backdrop-blur">
              Kenitra, Morocco
            </div>
            <Image
              src="/assets/profile-orbit.svg"
              alt="Futuristic developer profile visual for Yassine Azouanat"
              width={1200}
              height={1200}
              priority
              className="aspect-square rounded object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">B2</p>
                <p className="mt-1 text-xs text-slate-400">French & English</p>
              </div>
              <div className="rounded border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-white">430</p>
                <p className="mt-1 text-xs text-slate-400">TCF score</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
