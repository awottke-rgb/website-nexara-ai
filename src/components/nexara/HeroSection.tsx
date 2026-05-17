"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onAnalyseClick: () => void;
}

export default function HeroSection({ onAnalyseClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-24"
    >
      <AnimatedBackground />

      {/* Centered Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
          <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">
            Nexara AI / Sachsen
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.05] mb-10 font-display text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {"Ihre Website.".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <motion.span 
            className="text-brand-blue italic inline-block"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            Neu definiert.
          </motion.span>
        </h1>

        {/* Subline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Wir bauen digitale Erlebnisse, die Ihre Konkurrenz alt aussehen lassen. 
          Performance-fokussiert, KI-gestützt und kompromisslos im Design.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            id="hero-analyse-cta"
            onClick={onAnalyseClick}
            className="btn-primary group px-10 py-5 bg-white text-black font-bold
                       flex items-center justify-center gap-3 cursor-pointer"
          >
            Analyse anfordern
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#leistungen"
            className="px-10 py-5 text-gray-400 font-bold rounded-full
                       hover:text-white hover:bg-white/5
                       transition-all duration-300
                       flex items-center justify-center gap-2"
          >
            Unsere Services
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
