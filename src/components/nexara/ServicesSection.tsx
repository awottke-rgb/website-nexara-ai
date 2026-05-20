"use client";

import { Globe, Bot } from "lucide-react";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const services = [
  {
    icon: Bot,
    title: "KI-Automatisierung",
    description:
      "Intelligente Chatbots und Automatisierungen, die Kundenanfragen 24/7 beantworten und Ihnen Stunden an Arbeit ersparen.",
    features: ["24/7 Lead Capturing", "Support-Entlastung", "Skalierbarkeit"],
    colSpan: "md:col-span-1",
  },
  {
    icon: Globe,
    title: "Premium Webdesign",
    description:
      "Maßgeschneiderte, blitzschnelle Websites, die Besucher in Kunden verwandeln.",
    features: ["High-Performance", "Premium Branding", "Conversion-Fokus"],
    colSpan: "md:col-span-1",
  },
];

function BentoCard({ service, index }: { service: any; index: number }) {
  const Icon = service.icon;
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative card-antigravity pt-10 px-10 pb-12 flex flex-col h-full min-h-[380px] group ${service.colSpan} border-0`}
    >
      {/* Border Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.4), transparent 40%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Spotlight Background */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.05), transparent 40%)`,
        }}
      />

      {/* Corner Tech Accents */}
      <span className="absolute top-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
      <span className="absolute top-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
      <span className="absolute bottom-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
      <span className="absolute bottom-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>

      <div className="relative z-20">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-blue/10 transition-colors border border-white/5 flex-shrink-0">
          <Icon className="w-7 h-7 text-white group-hover:text-brand-blue transition-colors flex-shrink-0" size={28} style={{ width: '28px', height: '28px' }} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 font-display leading-snug py-1">
          {service.title}
        </h3>
        <p className="text-gray-400 mb-10 leading-relaxed font-medium">
          {service.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {service.features.map((feature: string) => (
            <span
              key={feature}
              className="px-4 py-1.5 rounded-full bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest border border-white/5"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Meine Services
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Fokus auf das Wesentliche.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Ich kombiniere modernste Web-Technologien mit KI-gestützter Automatisierung,
            um messbare Ergebnisse für Ihr Unternehmen zu erzielen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <BentoCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
