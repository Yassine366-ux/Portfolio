"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/portfolio-data";

export function StatsSection() {
  return (
    <section className="section-shell py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="gradient-border glass rounded-lg p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <p className="text-4xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
