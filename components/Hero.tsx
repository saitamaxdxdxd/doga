"use client";

import { motion } from "framer-motion";
import { useLang, T } from "@/lib/i18n";
import ParticlesCanvas from "@/components/ParticlesCanvas";

export default function Hero() {
  const lang = useLang();
  const tx = T[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesCanvas />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, #06B6D4 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="hero-animate-1">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-6">
            {tx.badge}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            {tx.h1a}{" "}
            <span className="gradient-text">{tx.h1b}</span>
            <br />
            {tx.h1c}
          </h1>
          <p className="text-lg text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
            {tx.sub}
          </p>
        </div>

        <div className="hero-animate-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#juegos"
            className="px-8 py-3.5 rounded-full font-semibold text-white text-sm"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            {tx.cta1}
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-full font-semibold text-sm border border-white/15 text-zinc-300 hover:border-white/30 hover:text-white transition-colors"
          >
            {tx.cta2}
          </a>
        </div>
      </div>

      <div className="hero-animate-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-zinc-600 tracking-widest uppercase">
          {tx.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </div>
    </section>
  );
}
