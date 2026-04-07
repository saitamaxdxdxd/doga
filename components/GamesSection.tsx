"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useLang, T } from "@/lib/i18n";
import { GAMES, type Game } from "@/lib/games";
import FadeIn from "@/components/FadeIn";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C7.08 3.04 6 4.63 6 6.5h12c0-1.87-1.08-3.46-2.47-4.34zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  );
}

function GameCard({ game, index }: { game: Game; index: number }) {
  const lang = useLang();
  const tx = T[lang].games;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -12, y: (px - 0.5) * 12 });
    setShine({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <FadeIn delay={index * 0.1}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.08s ease" : "transform 0.5s ease",
        }}
        className="group relative bg-[#111111] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-[0_20px_60px_-10px_rgba(124,58,237,0.3)] will-change-transform"
      >
        {/* Shine overlay */}
        {hovered && (
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-opacity"
            style={{
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            }}
          />
        )}
        <div
          className={`w-full aspect-square rounded-2xl mb-5 overflow-hidden bg-gradient-to-br ${game.gradient} flex items-center justify-center ${game.comingSoon ? "opacity-40" : ""}`}
        >
          {game.icon ? (
            <Image
              src={game.icon}
              alt={game.name}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-5xl font-black text-white/30 tracking-tight select-none">
              ?
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-lg">{game.name}</h3>
          {game.comingSoon && (
            <span className="shrink-0 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border border-violet-500/30 text-violet-400">
              {tx.comingSoon}
            </span>
          )}
        </div>

        <p className="text-zinc-500 text-sm mb-4 leading-snug">
          {lang === "es" ? game.descEs : game.descEn}
        </p>

        {!game.comingSoon && (
          <>
            <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4">
              <AppleIcon />
              <AndroidIcon />
              <span>{tx.platforms}</span>
            </div>
            <div className="flex gap-2">
              {game.appStoreUrl && (
                <a
                  href={game.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/10 text-xs font-medium text-zinc-300 hover:border-white/25 hover:text-white transition-colors"
                >
                  <AppleIcon />
                  {tx.appStore}
                </a>
              )}
              {game.googlePlayUrl && (
                <a
                  href={game.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-white/10 text-xs font-medium text-zinc-300 hover:border-white/25 hover:text-white transition-colors"
                >
                  <AndroidIcon />
                  {tx.googlePlay}
                </a>
              )}
            </div>
          </>
        )}

        {game.comingSoon && (
          <div className="flex items-center gap-2 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs text-zinc-600">
              {lang === "es" ? "En desarrollo" : "In development"}
            </span>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function GamesSection() {
  const lang = useLang();
  const tx = T[lang].games;

  return (
    <section id="juegos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-500 mb-3 block">
            {tx.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            {tx.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GAMES.map((game, i) => (
            <GameCard key={game.name} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
