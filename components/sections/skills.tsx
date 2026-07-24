"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { skills } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-28 py-20">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for secure, maintainable full-stack products."
        description="The CV combines backend depth, modern frontend tools, databases, algorithms, and testing habits."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="glass rounded-lg p-5 transition duration-300 hover:border-cyanGlow/45 hover:shadow-glow"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white">{skill.name}</h3>
                <p className="text-sm text-slate-500">{skill.category}</p>
              </div>
              <span className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyanGlow">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyanGlow to-electricBlue shadow-[0_0_22px_rgba(0,212,255,0.55)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
