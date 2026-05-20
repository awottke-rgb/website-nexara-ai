"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import TypingText from "./TypingText";

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
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Nexara AI / Sachsen</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-10 tracking-tight font-display leading-[0.95]">
          {"Ihre Website.".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br />
          <span className="text-brand-blue italic relative inline-block mt-4">
            {"Neu definiert.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1, delay: 0.8 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subline */}
        <div className="max-w-2xl mx-auto mb-12 flex justify-center">
          <TypingText 
            text="Ich baue digitale Erlebnisse, die Ihre Konkurrenz alt aussehen lassen. Performance-fokussiert, KI-gestützt und kompromisslos im Design."
            className="text-gray-400 text-lg sm:text-xl font-medium leading-relaxed justify-center"
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Magnetic strength={0.15}>
            <button
              id="hero-analyse-cta"
              onClick={onAnalyseClick}
              className="btn-primary group px-10 py-5 bg-white text-black font-bold
                         flex items-center justify-center gap-3 cursor-pointer"
            >
              Analyse anfordern
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href="#leistungen"
              className="px-10 py-5 text-gray-400 font-bold rounded-full
                         hover:text-white hover:bg-white/5
                         transition-all duration-300
                         flex items-center justify-center gap-2"
            >
              Meine Services
              <ChevronDown className="w-5 h-5" />
            </a>
          </Magnetic>
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
