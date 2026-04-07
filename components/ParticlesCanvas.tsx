"use client";

import { useEffect, useRef } from "react";

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;
    let mx = -9999;
    let my = -9999;

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      baseVx: number; baseVy: number;
      r: number; alpha: number; color: string;
    };

    const COLORS = ["#7C3AED", "#06B6D4", "#A78BFA", "#67E8F9"];
    const COUNT = 100;
    const MOUSE_RADIUS = 110;
    const MOUSE_FORCE = 0.18;
    const particles: Particle[] = [];

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }

    function spawn(): Particle {
      const baseVx = (Math.random() - 0.5) * 0.35;
      const baseVy = (Math.random() - 0.5) * 0.35;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        r: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.55 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    }

    resize();
    for (let i = 0; i < COUNT; i++) particles.push(spawn());
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mx = -9999; my = -9999; };
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mx = e.touches[0].clientX - rect.left;
      my = e.touches[0].clientY - rect.top;
    };
    const onTouchEnd = () => { mx = -9999; my = -9999; };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      // Lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        const dxm = p.x - mx;
        const dym = p.y - my;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        const nearMouse = distm < MOUSE_RADIUS && distm > 0;

        if (nearMouse) {
          // Push away from cursor
          const force = (1 - distm / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx += (dxm / distm) * force;
          p.vy += (dym / distm) * force;
          // Clamp max speed while disturbed
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          const MAX_SPEED = 2.5;
          if (speed > MAX_SPEED) {
            p.vx = (p.vx / speed) * MAX_SPEED;
            p.vy = (p.vy / speed) * MAX_SPEED;
          }
        } else {
          // Drift back toward base velocity
          p.vx += (p.baseVx - p.vx) * 0.02;
          p.vy += (p.baseVy - p.vy) * 0.02;
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle =
          p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx!.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
    />
  );
}
