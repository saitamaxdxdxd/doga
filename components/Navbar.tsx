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
  const [menuOpen, setMenuOpen] = useState(false);
  const tx = T[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight select-none">
          D<span className="gradient-text">O</span>GA
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
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

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-semibold tracking-widest text-zinc-500 hover:text-white transition-colors select-none"
            aria-label="Switch language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="text-zinc-400 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-white/5 bg-[#0A0A0A]/95">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#juegos"
              onClick={closeMenu}
              className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
            >
              {tx.games}
            </a>
            <a
              href="#nosotros"
              onClick={closeMenu}
              className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
            >
              {tx.about}
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-colors text-center"
            >
              {tx.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
