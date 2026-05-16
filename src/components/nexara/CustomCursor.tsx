"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if device has a pointer (desktop)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Lerp effect simulation with CSS transition
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isPointer) return null;

  return (
    <div
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        background: "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)",
        filter: "blur(4px)",
      }}
    />
  );
}
