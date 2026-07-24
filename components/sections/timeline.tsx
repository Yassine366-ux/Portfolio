"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { education, experience, type TimelineItem } from "@/lib/portfolio-data";

function TimelineList({
  items,
  icon: Icon
}: {
  items: TimelineItem[];
  icon: LucideIcon;
}) {
  return (
    <div className="relative space-y-5 before:absolute before:left-5 before:top-5 before:h-[calc(100%-2.5rem)] before:w-px before:bg-gradient-to-b before:from-cyanGlow before:via-electricBlue before:to-transparent">
      {items.map((item, index) => (
        <motion.article
          key={`${item.title}-${item.period}`}
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
          className="relative pl-14"
        >
          <div className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded bg-cyanGlow text-slate-950 shadow-glow">
            <Icon size={20} aria-hidden="true" />
          </div>
          <div className="glass rounded-lg p-5 transition duration-300 hover:border-cyanGlow/45 hover:shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyanGlow">
              {item.period}
            </p>
            <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-300">{item.organization}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-shell scroll-mt-28 py-20">
      <SectionHeader
        eyebrow="Timeline"
        title="Professional experience and education in one focused path."
        description="The portfolio timeline translates the CV into a concise story of internships, degree progress, and engineering foundations."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <BriefcaseBusiness className="text-cyanGlow" size={24} aria-hidden="true" />
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>
          <TimelineList items={experience} icon={BriefcaseBusiness} />
        </div>

        <div id="education" className="scroll-mt-28">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-cyanGlow" size={26} aria-hidden="true" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <TimelineList items={education} icon={GraduationCap} />
        </div>
      </div>
    </section>
  );
}
