"use client";

import { motion } from "framer-motion";
import { Users, Cpu, PhoneCall, Quote } from "lucide-react";

export default function WhySection() {
  const cards = [
    {
      icon: Users,
      title: "Die Mittelstand-DNA",
      description: "30 Jahre Praxis-Erfahrung. Aufgewachsen in einem Familienbetrieb. Ich verstehe die echten, täglichen Probleme von KMUs und baue Lösungen, die Ihren Betrieb entlasten – ohne theoretischen Overhead.",
    },
    {
      icon: Cpu,
      title: "Racetrack-Präzision",
      description: "Formula-Student-Mindset. 3 Jahre Entwicklung im Rennsport haben mich geprägt: Ich optimiere Ladezeiten, SEO und Code-Qualität mit der Präzision eines Ingenieurs. Jede Millisekunde zählt.",
    },
    {
      icon: PhoneCall,
      title: "Die direkte Linie",
      description: "Keine anonyme Agentur. Sie sprechen direkt mit dem Gründer und Entwickler. Kein Vertriebler, kein Junior-Projektleiter, kein Informationsverlust. Schnelle Entscheidungen und WhatsApp-Support.",
    },
  ];

  return (
    <section id="warum-ich" className="py-16 sm:py-24 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Personal Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Quote className="w-10 h-10 text-brand-blue/30 rotate-180" />
                <span className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase">
                  Mein Versprechen
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 font-display leading-tight">
                Warum ich Ihr Projekt <span className="text-brand-blue italic font-normal">persönlich</span> nehme.
              </h2>
              
              <div className="space-y-6 text-gray-400 text-base sm:text-lg font-medium leading-relaxed">
                <p>
                  Ich bin nicht an schnellen Einmal-Aufträgen interessiert. Wenn wir zusammenarbeiten, nehme ich Ihr Projekt persönlich. Da ich mir gerade mit Nexara AI einen erstklassigen Namen aufbaue, ist Ihr Erfolg meine wichtigste Referenz. Ich kann und will mir keinen unzufriedenen Kunden leisten.
                </p>
                <p>
                  Weil ich selbst aus einer selbstständigen Familie komme, weiß ich, dass eine Website kein nettes Design-Spielzeug sein darf – sie muss Ihnen Zeit sparen und neue Kunden bringen. Ich gebe mein Wort darauf, dass ich so lange optimiere, bis Ihr digitaler Auftritt genau diese Ergebnisse liefert.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-start gap-1">
              <span className="font-serif italic text-2xl text-brand-blue font-semibold tracking-wide">
                Adrien Wottke
              </span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Gründer, Nexara AI
              </span>
            </div>
          </motion.div>

          {/* Right Column: 3 Competence Pillars */}
          <div className="lg:col-span-6 space-y-6 w-full">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-antigravity p-8 border border-white/5 rounded-3xl bg-white/[0.01] hover:border-brand-blue/30 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle card internal glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Corner Tech Accents */}
                <span className="absolute top-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
                <span className="absolute top-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
                <span className="absolute bottom-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>
                <span className="absolute bottom-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-brand-blue/50 transition-colors">+</span>

                <div className="flex gap-6 items-start relative z-10">
                  <div className="p-3.5 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-black transition-all duration-300">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-display">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
