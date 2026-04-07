"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role=button]")) {
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.borderColor = "rgba(124,58,237,0.8)";
        ring.style.backgroundColor = "rgba(124,58,237,0.08)";
      } else {
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.borderColor = "rgba(255,255,255,0.4)";
        ring.style.backgroundColor = "transparent";
      }
    };

    const tick = () => {
      // Dot snaps instantly
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      // Ring lerps
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      const rw = parseInt(ring.style.width || "32");
      ring.style.transform = `translate(${rx - rw / 2}px, ${ry - rw / 2}px)`;
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 rounded-full border z-[9998] pointer-events-none"
        style={{
          width: 32,
          height: 32,
          borderColor: "rgba(255,255,255,0.4)",
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />
    </>
  );
}
