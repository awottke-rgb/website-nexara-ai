"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Projektlaufzeit",
    traditional: "3 bis 6 Monate Wartezeit",
    nexara: "2 bis 4 Wochen (Express-Launch)",
  },
  {
    feature: "Geschwindigkeit",
    traditional: "Träge Baukästen & WordPress",
    nexara: "High-End & augenblicklich geladen",
  },
  {
    feature: "Umsatz-Fokus",
    traditional: "Reine, passive Visitenkarte",
    nexara: "Aktiver Wunschkunden-Magnet",
  },
  {
    feature: "Kommunikation",
    traditional: "Viel Fachchinesisch",
    nexara: "Klar, verständlich & auf Augenhöhe",
  },
  {
    feature: "Preisstruktur",
    traditional: "Versteckte Folgekosten & Abos",
    nexara: "Garantierte, transparente Fixpreise",
  },
];

export default function ComparisonSection() {
  return (
    <section id="vorteile" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
            Der Unterschied
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
            Warum Nexara AI?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ich habe verstanden, was kleine und mittlere Unternehmen wirklich brauchen:
            Ergebnisse statt endloser Meetings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-card shadow-2xl"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-white/[0.02]">
            <div className="hidden md:block p-6"></div>
            <div className="p-6 text-center border-b md:border-b-0 md:border-r border-white/10">
              <h3 className="text-lg font-semibold text-gray-400">Traditionelle Agentur</h3>
            </div>
            <div className="p-6 text-center relative overflow-hidden bg-brand-blue/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue" />
              <h3 className="text-lg font-bold text-white font-serif tracking-wide">Nexara AI</h3>
            </div>
          </div>

          {/* Features Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 hover:bg-white/[0.01] transition-colors">
                <div className="p-5 md:p-6 flex items-center justify-center md:justify-start">
                  <span className="font-medium text-gray-300">{item.feature}</span>
                </div>
                <div className="p-5 md:p-6 text-center text-gray-500 flex flex-col md:flex-row items-center justify-center gap-3 border-t md:border-t-0 md:border-r border-white/5">
                  <X className="w-5 h-5 text-red-400 opacity-70" />
                  <span>{item.traditional}</span>
                </div>
                <div className="p-5 md:p-6 text-center bg-brand-blue/[0.03] text-white flex flex-col md:flex-row items-center justify-center gap-3 font-medium">
                  <Check className="w-5 h-5 text-brand-blue" />
                  <span>{item.nexara}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
