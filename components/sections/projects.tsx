"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, MonitorSmartphone } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell scroll-mt-28 py-20">
      <SectionHeader
        eyebrow="Projects"
        title="Modern project cards for real CV work and academic builds."
        description="A curated showcase of secure APIs, interactive maps, e-commerce work, algorithms, testing, and cybersecurity analysis."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.58, delay: index * 0.05 }}
            className="glass group rounded-lg p-5 transition duration-300 hover:-translate-y-2 hover:border-cyanGlow/45 hover:shadow-glow"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {project.metric}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyanGlow"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <GlowButton
                  href={project.demoHref}
                  variant="glass"
                  className="min-h-10 px-4 py-2"
                >
                  <MonitorSmartphone size={16} />
                  Live Demo
                </GlowButton>

                <GlowButton
                  href={project.codeHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="min-h-10 px-4 py-2"
                >
                  <Github size={16} />
                  GitHub
                  <ArrowUpRight size={14} />
                </GlowButton>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}