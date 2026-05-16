"use client";

import { Globe, Bot, BarChart3, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import React, { useState, useRef } from "react";

const services = [
  {
    icon: Bot,
    title: "KI-Automatisierung",
    description:
      "Intelligente Chatbots und Automatisierungen, die Kundenanfragen 24/7 beantworten und Ihnen Stunden an Arbeit ersparen.",
    features: ["24/7 Chatbots", "Prozessautomatisierung", "Lead-Qualifizierung"],
    colSpan: "md:col-span-1",
  },
  {
    icon: Globe,
    title: "Premium Webdesign",
    description:
      "Maßgeschneiderte, blitzschnelle Websites, die Besucher in Kunden verwandeln.",
    features: ["Responsive", "SEO-optimiert", "Conversion-Fokus"],
    colSpan: "md:col-span-1",
  },
];

function BentoCard({ service, index, isInView }: { service: any; index: number; isInView: boolean }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = service.icon;

  return (
    <div
      className={`card-antigravity p-10 flex flex-col h-full group
                 ${service.colSpan} ${isInView ? "section-visible" : "section-hidden"} stagger-${index + 1}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-blue/10 transition-colors border border-white/5">
        <Icon className="w-7 h-7 text-white group-hover:text-brand-blue transition-colors" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 font-display">
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
  );
}

export default function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="leistungen" className="py-32 sm:py-48" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-24 ${isInView ? "section-visible" : "section-hidden"}`}>
          <p className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Unsere Services
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Fokus auf das Wesentliche.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Wir kombinieren modernste Web-Technologien mit KI-gestützter Automatisierung, 
            um messbare Ergebnisse für Ihr Unternehmen zu erzielen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <BentoCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
