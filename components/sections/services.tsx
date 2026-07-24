"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  GitBranch,
  Network,
  ShieldCheck,
  type LucideIcon
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/portfolio-data";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  shield: ShieldCheck,
  check: CheckCircle2,
  diagram: GitBranch,
  network: Network
};

export function ServicesSection() {
  return (
    <section className="section-shell py-20">
      <SectionHeader
        eyebrow="Services"
        title="Expertise that covers the product from model to launch."
        description="A focused set of capabilities for teams that need clean implementation, secure APIs, and thoughtful validation."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] ?? Code2;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass group rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-cyanGlow/50 hover:shadow-glow"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded bg-cyanGlow/10 text-cyanGlow transition group-hover:bg-cyanGlow group-hover:text-slate-950">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
