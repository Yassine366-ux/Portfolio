"use client";

import { motion } from "framer-motion";
import { Award, Brain, Languages, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { profile } from "@/lib/portfolio-data";

const strengths = [
  {
    title: "Analytical mindset",
    description: "Comfortable modeling problems, comparing solutions, and building with structure.",
    icon: Brain
  },
  {
    title: "Team-ready",
    description: "Experience in clubs and group projects with clear communication and adaptability.",
    icon: Users
  },
  {
    title: "Language range",
    description: "Arabic native speaker with French B2 and English B2 professional communication.",
    icon: Languages
  },
  {
    title: "Rigorous execution",
    description: "A precise working style shaped by testing, QA reports, and technical internships.",
    icon: Award
  }
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-28 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="About me"
          title="A developer profile shaped by engineering discipline and product polish."
          description={profile.summary}
          align="left"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="glass rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40 hover:shadow-glow"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded bg-cyanGlow/10 text-cyanGlow">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
