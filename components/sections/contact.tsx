"use client";

import {
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  type LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/glow-button";
import { SectionHeader } from "@/components/ui/section-header";
import { SocialLinks } from "@/components/ui/social-links";
import { contactCards, profile, whatsappHref } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof contactCards)[number]["icon"], LucideIcon> = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle
};

export function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-28 py-20">
      <div className="gradient-border glass overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Ready to build something sharp, secure, and memorable."
              description="Use email, phone, WhatsApp, LinkedIn, or GitHub. The CV is also available as a direct download."
              align="left"
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <GlowButton href={profile.cvHref} download aria-label="Download CV from contact section">
                <Download size={18} aria-hidden="true" />
                Download CV
              </GlowButton>
              <GlowButton
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                variant="glass"
                aria-label="Open WhatsApp with prefilled message"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Contact me on WhatsApp
              </GlowButton>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card, index) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={cn(
                    "group rounded-lg border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/60 hover:bg-cyanGlow/10 hover:shadow-glow",
                    card.label === "Email" && "sm:col-span-2"
                  )}
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded bg-cyanGlow/10 text-cyanGlow transition group-hover:bg-cyanGlow group-hover:text-slate-950">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-slate-500">{card.label}</p>
                  <p className="mt-2 break-words font-semibold text-white">{card.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
