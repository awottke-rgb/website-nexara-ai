"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  length: number;
  width: number;
  rotation: number;
  color: string;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const mouseActive = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let fadeOpacity = 0;

    const colors = ["#2563EB", "#60A5FA", "#FFFFFF"];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      const count = 525;
      particles = [];
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles.push({
          x,
          y,
          z: 0,
          baseX: x,
          baseY: y,
          baseZ: 0,
          vx: 0,
          vy: 0,
          vz: 0,
          length: Math.random() * 3 + 1.5,
          width: Math.random() * 3 + 1.5,
          rotation: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.6 + 0.4, // Higher base opacity
        });
      }
    };

    const animate = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      if (fadeOpacity < 1) fadeOpacity += 0.01;

      const centerX = mouseActive.current ? mouse.current.x : w / 2;
      const centerY = mouseActive.current ? mouse.current.y : h / 2;

      // Pulse effect math
      const pulse = Math.sin(time * 0.002) * 30;
      const dynamicRadius = 350 + pulse;

      particles.forEach((p) => {
        const dx = p.baseX - centerX;
        const dy = p.baseY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetZ = 0;
        let opacityMultiplier = 0;
        
        if (mouseActive.current && dist < dynamicRadius) {
          // Semi-sphere with pulse influence
          targetZ = Math.sqrt(Math.pow(dynamicRadius, 2) - Math.pow(dist, 2)) * 0.6;
          
          // Sharper fade-out for higher contrast spotlight
          opacityMultiplier = Math.pow(Math.max(0, 1 - (dist / dynamicRadius)), 0.7);
        }

        const pushForce = targetZ * 0.2;
        const angle = Math.atan2(dy, dx);
        
        const targetX = p.baseX + Math.cos(angle) * pushForce;
        const targetY = p.baseY + Math.sin(angle) * pushForce;

        p.x += (targetX - p.x) * 0.1;
        p.y += (targetY - p.y) * 0.1;
        p.z += (targetZ - p.z) * 0.1;

        const focalLength = 800;
        const scale = focalLength / (focalLength - p.z);
        
        const screenX = centerX + (p.x - centerX) * scale;
        const screenY = centerY + (p.y - centerY) * scale;

        // Skip drawing if invisible
        if (opacityMultiplier <= 0) return;

        ctx.save();
        ctx.translate(screenX, screenY);
        // Boost overall opacity for contrast
        ctx.globalAlpha = p.opacity * fadeOpacity * opacityMultiplier * (scale * 0.6 + 0.4);
        ctx.fillStyle = p.color;
        
        const size = p.width * scale;
        
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Stronger glow
        if (p.z > 20) {
          ctx.shadowBlur = p.z * 0.3;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
        
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animationId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Check if mouse is within canvas bounds
      if (
        mouseX >= 0 &&
        mouseX <= rect.width &&
        mouseY >= 0 &&
        mouseY <= rect.height
      ) {
        mouse.current = { x: mouseX, y: mouseY };
        mouseActive.current = true;
      } else {
        mouseActive.current = false;
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    />
  );
}
