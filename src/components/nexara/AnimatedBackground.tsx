"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseX: number;
  baseY: number;
  speed: number;
  offset: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let fadeOpacity = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const createParticles = () => {
      const count = Math.min(45, Math.max(25, Math.floor(window.innerWidth / 30)));
      particles = [];
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: Math.random() * 2 + 0.8,
          speed: Math.random() * 0.3 + 0.1,
          offset: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.12 + 0.06,
          color: Math.random() > 0.3 ? "#2563EB" : "#FFFFFF",
        });
      }
    };

    const drawConnections = (p1: Particle, p2: Particle, dist: number, maxDist: number) => {
      const opacity = (1 - dist / maxDist) * 0.04 * fadeOpacity;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    };

    const animate = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Fade in
      if (fadeOpacity < 1) {
        fadeOpacity = Math.min(1, fadeOpacity + 0.008);
      }

      const t = time * 0.001;
      const maxConnectionDist = 150;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Sine-wave floating motion
        p.x = p.baseX + Math.sin(t * p.speed + p.offset) * 40;
        p.y = p.baseY + Math.cos(t * p.speed * 0.7 + p.offset) * 30;

        // Wrap around edges
        const w = rect.width;
        const h = rect.height;
        if (p.x < -20) p.baseX += w + 40;
        if (p.x > w + 20) p.baseX -= w + 40;
        if (p.y < -20) p.baseY += h + 40;
        if (p.y > h + 20) p.baseY -= h + 40;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color === "#2563EB"
            ? `rgba(37, 99, 235, ${p.opacity * fadeOpacity})`
            : `rgba(255, 255, 255, ${p.opacity * fadeOpacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxConnectionDist) {
            drawConnections(p, p2, dist, maxConnectionDist);
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
