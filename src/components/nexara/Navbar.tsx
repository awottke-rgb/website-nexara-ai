"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image 
            src="/logo.svg" 
            alt="Nexara AI" 
            width={160}
            height={40}
            className="h-8 w-auto invert opacity-90 group-hover:opacity-100 transition-opacity" 
          />
        </a>

        {/* CTA */}
        <div className="p-4 -mr-4"> {/* Wrapper for larger hover area for magnetic effect */}
          <button
            id="navbar-cta"
            ref={buttonRef}
            onClick={onCtaClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-6 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-xl
                       hover:bg-brand-blue-light transition-colors duration-300
                       shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 cursor-pointer"
            style={{ transition: 'transform 0.1s ease-out, background-color 0.3s, box-shadow 0.3s' }}
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    </nav>
  );
}
