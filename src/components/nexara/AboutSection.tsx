"use client";

import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="py-32 sm:py-48 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Photo Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border-2 border-brand-blue/30 p-2 relative group">
              <div className="w-full h-full rounded-full bg-navy-light overflow-hidden relative shadow-2xl shadow-brand-blue/20">
                <Image
                  src="/profile.jpg"
                  alt="Adrien Wottke"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border border-brand-blue/50 animate-ping opacity-20 pointer-events-none" />
            </div>

            {/* Location Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Bautzen, Sachsen</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left flex-1"
          >
            <p className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Hinter Nexara AI
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 font-display leading-tight">
              Technik trifft <br />
              <span className="text-brand-blue italic">Mittelstand.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-medium mb-10">
              Maschinenbau-Student, 3 Jahre Formula Student, Sales-Erfahrung — 
              ich verstehe technische Prozesse und spreche die Sprache des Mittelstands. 
              Wir bauen nicht nur Websites, wir bauen digitale Werkzeuge für Ihren Erfolg.
            </p>

            <a 
              href="https://www.linkedin.com/in/adrien-wottke-03a4872b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all group"
            >
              <svg className="w-5 h-5 text-brand-blue fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Vernetzen auf LinkedIn
              <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
