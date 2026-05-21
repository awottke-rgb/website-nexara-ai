"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import Magnetic from "./Magnetic";

interface NavbarProps {
  onCtaClick: () => void;
}

export default function Navbar({ onCtaClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über mich", href: "#ueber-mich" },
    { label: "Vorteile", href: "#vorteile" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group z-10">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image 
              src="/icon.png" 
              alt="Nexara AI Logo" 
              fill
              className="object-contain opacity-95 group-hover:opacity-100 transition-opacity" 
              priority
            />
          </div>
          <span className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-white select-none">
            <span>Nexara</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light font-sans font-extrabold">AI</span>
          </span>
        </a>

        {/* Centered Navigation Links (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 z-10">
          {navItems.map((item) => (
            <Magnetic key={item.label} strength={0.15}>
              <a
                href={item.href}
                className="relative text-sm font-medium text-gray-450 hover:text-white transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* CTA (Premium White Pill) */}
        <div className="flex items-center z-10">
          <Magnetic strength={0.15}>
            <button
              id="navbar-cta"
              onClick={onCtaClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full
                         hover:bg-gray-200 active:scale-95 transition-all duration-300 cursor-pointer
                         shadow-lg shadow-white/5 hover:shadow-white/10"
            >
              <Phone className="w-4 h-4" />
              <span>Anfragen</span>
            </button>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}
