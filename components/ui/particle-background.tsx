"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 7) * 0.35,
  duration: 5 + (index % 5)
}));

export function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-mask opacity-60" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-radial-cyan blur-3xl animate-aurora" />
      <div className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-radial-blue blur-3xl animate-aurora" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyanGlow/10 blur-3xl animate-pulse-soft" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyanGlow/70 shadow-[0_0_16px_rgba(0,212,255,0.95)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -18, 0], opacity: [0.18, 0.82, 0.18] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
