"use client";

import { useLang, T } from "@/lib/i18n";
import FadeIn from "@/components/FadeIn";

function MinimalistIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function AddictiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2a10 10 0 1 0 10 10" strokeLinecap="round" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 2v4h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IndieIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" strokeLinejoin="round" />
    </svg>
  );
}

const PILLAR_ICONS = [
  <MinimalistIcon key="m" />,
  <AddictiveIcon key="a" />,
  <IndieIcon key="i" />,
];

export default function AboutSection() {
  const lang = useLang();
  const tx = T[lang].about;
  const pillars = T[lang].pillars;

  return (
    <section id="nosotros" className="py-32 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="max-w-2xl mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-3 block">
            {tx.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">
            {tx.title}
          </h2>
          <div className="space-y-5 text-zinc-400 text-lg leading-relaxed">
            <p>{tx.p1}</p>
            <p>
              {tx.p2}{" "}
              <span className="text-white font-medium italic">
                {tx.p2highlight}
              </span>
            </p>
            <p>{tx.p3}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))",
                    border: "1px solid rgba(124,58,237,0.2)",
                    color: "#A78BFA",
                  }}
                >
                  {PILLAR_ICONS[i]}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{pillar.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
