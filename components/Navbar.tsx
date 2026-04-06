"use client";

import { useEffect, useState } from "react";
import { type Lang, T } from "@/lib/i18n";

export default function Navbar({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const tx = T[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight select-none">
          D<span className="gradient-text">O</span>GA
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#juegos"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {tx.games}
          </a>
          <a
            href="#nosotros"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            {tx.about}
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-colors"
          >
            {tx.contact}
          </a>

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-semibold tracking-widest text-zinc-500 hover:text-white transition-colors select-none"
            aria-label="Switch language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
}
