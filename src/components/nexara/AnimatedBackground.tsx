"use client";

import { useEffect, useRef } from "react";

interface Particle {
  baseX: number;
  baseY: number;
  baseZ: number;
  length: number;
  width: number;
  color: string;
  opacity: number;
  randomOffset: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

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
    };

    const createParticles = () => {
      const count = 1200; // Massive number of particles
      particles = [];
      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

      // Vibrant tech palette inspired by antigravity
      const colors = [
        "#FF3D00", // Vibrant Orange
        "#FF006E", // Pink
        "#8338EC", // Purple
        "#3A86FF", // Blue
        "#00E5FF", // Cyan
      ];

      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;

        // 3D coordinates on a unit sphere
        const sphereX = Math.cos(theta) * radiusAtY;
        const sphereY = y;
        const sphereZ = Math.sin(theta) * radiusAtY;

        // Assign color based on the horizontal angle to create sweeping gradients
        const angle = Math.atan2(sphereZ, sphereX);
        let normalizedAngle = (angle + Math.PI) / (Math.PI * 2); // 0 to 1
        
        // Add some noise to color selection for blending
        normalizedAngle = (normalizedAngle + Math.random() * 0.1) % 1;
        const colorIdx = Math.floor(normalizedAngle * colors.length);

        particles.push({
          baseX: sphereX,
          baseY: sphereY,
          baseZ: sphereZ,
          length: Math.random() * 16 + 6, // Long, markant dashes
          width: Math.random() * 2.5 + 1.5,
          color: colors[colorIdx],
          opacity: Math.random() * 0.6 + 0.4,
          randomOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    let time = 0;

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      if (fadeOpacity < 1) fadeOpacity += 0.01;
      time += 0.0015;

      // Smooth mouse interpolation
      targetMouse.current.x += (mouse.current.x - targetMouse.current.x) * 0.05;
      targetMouse.current.y += (mouse.current.y - targetMouse.current.y) * 0.05;

      // Base rotation + mouse tilt
      const mouseTiltX = (targetMouse.current.y - h / 2) * 0.0005;
      const mouseTiltY = (targetMouse.current.x - w / 2) * 0.0005;

      const rotationX = time * 0.5 + mouseTiltX;
      const rotationY = time + mouseTiltY;
      const rotationZ = time * 0.2;

      // Sphere radius - scales with screen size
      const radius = Math.min(w, h) * 0.75; 
      const focalLength = 1200;

      particles.forEach((p) => {
        // 3D Rotations
        // Z-axis rotation
        let x1 = p.baseX * Math.cos(rotationZ) - p.baseY * Math.sin(rotationZ);
        let y1 = p.baseX * Math.sin(rotationZ) + p.baseY * Math.cos(rotationZ);
        let z1 = p.baseZ;

        // Y-axis rotation
        let x2 = x1 * Math.cos(rotationY) - z1 * Math.sin(rotationY);
        let z2 = x1 * Math.sin(rotationY) + z1 * Math.cos(rotationY);
        let y2 = y1;

        // X-axis rotation
        let y3 = y2 * Math.cos(rotationX) - z2 * Math.sin(rotationX);
        let z3 = y2 * Math.sin(rotationX) + z2 * Math.cos(rotationX);
        let x3 = x2;

        const px = x3 * radius;
        const py = y3 * radius;
        const pz = z3 * radius;

        // Projection
        const scale = focalLength / (focalLength - pz + 500); 
        const screenX = w / 2 + px * scale;
        const screenY = h / 2 + py * scale;

        // Depth fading
        const depthNormalized = (pz + radius) / (radius * 2); // 0 (back) to 1 (front)
        
        // Hide particles completely behind the sphere
        if (depthNormalized < 0.2) return;

        // Dynamic pulsing opacity
        const pulse = Math.sin(time * 10 + p.randomOffset) * 0.3 + 0.7;
        const zOpacity = Math.max(0, depthNormalized) * pulse;

        // Angle of dash: tangent to the circular flow with slight spiral
        const angleOnScreen = Math.atan2(py, px) + Math.PI / 2 + 0.2;

        ctx.save();
        ctx.translate(screenX, screenY);
        ctx.rotate(angleOnScreen);
        
        // Brighten up the opacity globally
        ctx.globalAlpha = p.opacity * zOpacity * fadeOpacity * 0.8;
        ctx.fillStyle = p.color;

        const sizeW = p.width * scale;
        const sizeL = p.length * scale;

        // Draw pill/dash shape
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-sizeW / 2, -sizeL / 2, sizeW, sizeL, sizeW / 2);
        } else {
          ctx.rect(-sizeW / 2, -sizeL / 2, sizeW, sizeL);
        }
        ctx.fill();

        // Add glow for front-most particles
        if (depthNormalized > 0.8) {
          ctx.shadowBlur = 15 * scale;
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
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Initial mouse center
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    targetMouse.current = { ...mouse.current };

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
        maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
      }}
    />
  );
}
