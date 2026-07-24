"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { testimonials } from "@/lib/portfolio-data";

export function TestimonialsSection() {
  return (
    <section className="section-shell py-20">
      <SectionHeader
        eyebrow="Testimonials"
        title="Signals from mentors, collaborators, and project environments."
        description="Short professional references written from the strengths shown across the CV: rigor, teamwork, testing, and full-stack delivery."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="glass rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40 hover:shadow-glow"
          >
            <Quote className="text-cyanGlow" size={28} aria-hidden="true" />
            <p className="mt-5 text-sm leading-7 text-slate-300">{testimonial.quote}</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-bold text-white">{testimonial.author}</p>
              <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
