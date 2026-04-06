"use client";

import { useLang, T } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

export default function ContactSection() {
  const lang = useLang();
  const tx = T[lang].contact;

  return (
    <section id="contacto" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="max-w-xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-500 mb-3 block">
            {tx.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            {tx.title}
          </h2>
          <p className="text-zinc-400 text-lg mb-8">{tx.sub}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-zinc-300 font-mono text-sm bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
              alan@domotics.mx
            </span>
            <a
              href="mailto:alan@domotics.mx"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
            >
              {tx.btn}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
