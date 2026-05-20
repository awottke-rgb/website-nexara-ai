"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageSquare, LayoutGrid, User, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

interface DockNavbarProps {
  onCtaClick: () => void;
}

export default function DockNavbar({ onCtaClick }: DockNavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Leistungen", icon: LayoutGrid, href: "#leistungen" },
    { label: "Über mich", icon: User, href: "#ueber-mich" },
    { label: "Vorteile", icon: MessageSquare, href: "#vorteile" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: -100, opacity: 0, x: "-50%" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:block"
        >
          <nav className="flex items-center gap-2 p-2 bg-black/50 backdrop-blur-3xl border border-white/5 rounded-full shadow-2xl">
            {/* Logo */}
            <div className="pl-3 pr-4 border-r border-white/5 flex items-center gap-2">
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image 
                  src="/icon.svg" 
                  alt="Nexara AI Logo" 
                  fill
                  className="object-contain opacity-95" 
                />
              </div>
              <span className="font-display text-sm font-bold tracking-tight text-white select-none">
                Nexara <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light font-sans font-extrabold">AI</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Magnetic key={item.label} strength={0.15}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* CTA */}
            <Magnetic strength={0.2}>
              <button
                onClick={onCtaClick}
                className="ml-2 flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
              >
                <Phone className="w-4 h-4" />
                Anfragen
              </button>
            </Magnetic>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
