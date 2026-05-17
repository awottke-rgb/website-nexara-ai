"use client";

import { 
  Clock, 
  AlertCircle, 
  TrendingDown, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const problems = [
  {
    icon: Clock,
    title: "Interessenten kommen — und gehen",
    description: "Die meisten Besucher entscheiden in 15 Sekunden. Ohne klare Botschaft sind sie weg, bevor sie Ihr Angebot verstanden haben.",
  },
  {
    icon: AlertCircle,
    title: "Anfragen fallen durch das Raster",
    description: "Kein System fängt Interesse auf. Wer nicht sofort bucht, wird nie wieder kontaktiert.",
  },
  {
    icon: TrendingDown,
    title: "Vertrieb arbeitet gegen sich selbst",
    description: "Termine mit unqualifizierten Interessenten kosten Zeit — und echte Deals gehen verloren.",
  },
];

const features = [
  "Website bis zu 5 Seiten — klar, schnell, conversion-optimiert",
  "Booking-System direkt integriert (Cal.com)",
  "Automatische Bestätigungs-E-Mail bei jeder Anfrage",
  "Kontaktformular mit automatischem Follow-up",
  "Mobile-First & Ladezeit unter 2,5 Sekunden",
  "Analytics-Setup (damit Sie sehen was funktioniert)",
  "7 Tage Post-Launch-Korrekturen",
  "30-Tage Performance-Report nach Launch",
  "60-minütiges Übergabe-Meeting + schriftliche Dokumentation",
];

const nonFeatures = [
  "Keine bezahlten Anzeigen oder Ad-Management",
  "Kein E-Mail-Marketing",
  "Keine laufende Wartung nach 7 Tagen",
];

const timeline = [
  { step: "Step 1", title: "Kickoff & Analyse", duration: "Tag 1–2" },
  { step: "Step 2", title: "Design & Entwicklung", duration: "Tag 3–16" },
  { step: "Step 3", title: "Launch & Optimierung", duration: "Tag 17–30" },
];

export default function Angebot() {
  return (
    <section id="angebot" className="py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BLOCK 1: HEADLINE + KPI PROMISE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display leading-tight max-w-4xl mx-auto">
            In 60 Tagen wissen Sie exakt, warum Besucher nicht buchen — 
            <span className="text-brand-blue"> und haben ein System das das ändert.</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-8">
            Ich optimiere Ihre Website so, dass Interessenten nicht mehr nach 15 Sekunden abspringen — sondern einen Termin buchen.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            <span className="text-brand-blue text-sm font-bold tracking-wider">📊 Messbar. 60 Tage nach Launch.</span>
          </div>
        </motion.div>

        {/* BLOCK 2: DAS PROBLEM */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white font-display uppercase tracking-widest opacity-50">Was heute passiert</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-antigravity p-8 flex flex-col group border-0 relative"
              >
                {/* Border Glow Effect */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                  style={{
                    background: `radial-gradient(400px circle at center, rgba(37, 99, 235, 0.2), transparent 40%)`,
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div className="relative z-20">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 border border-brand-blue/20">
                    <item.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 font-display leading-tight">{item.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOCK 3: WAS ICH LIEFERE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-10 font-display">Was Sie bekommen</h3>
            <ul className="space-y-5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 font-medium group">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-12"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 opacity-70">
              <h3 className="text-xl font-bold text-white/80 mb-8 font-display">Was Sie nicht bekommen</h3>
              <ul className="space-y-4">
                {nonFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="pl-8 text-xs text-gray-600 italic">
                  → Optional buchbar ab 99 €/Monat
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* BLOCK 4: WIE ES FUNKTIONIERT */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent hidden md:block" />
            
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center p-8"
              >
                <div className="w-12 h-12 rounded-full bg-navy border-2 border-brand-blue flex items-center justify-center mb-6 shadow-xl shadow-brand-blue/20">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                <p className="text-brand-blue text-sm font-bold uppercase tracking-widest">{step.duration}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-8 italic">
            Die Uhr startet, wenn alle Unterlagen vollständig eingegangen sind.
          </p>
        </div>

        {/* BLOCK 5: OPTIONAL ADD-ONS */}
        <div className="mb-32 max-w-4xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-lg font-bold font-display uppercase tracking-widest mb-12"
          >
            Optionale Erweiterungen
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-blue/20 transition-colors">
              <h4 className="text-white font-bold mb-2">Wartungs-Paket Basic</h4>
              <p className="text-brand-blue font-bold text-sm mb-4">99 €/Monat</p>
              <p className="text-gray-500 text-sm">Hosting, Sicherheitsupdates, 1h Änderungen/Monat</p>
            </div>
            <div className="border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-blue/20 transition-colors">
              <h4 className="text-white font-bold mb-2">Wartungs-Paket Pro</h4>
              <p className="text-brand-blue font-bold text-sm mb-4">199 €/Monat</p>
              <p className="text-gray-500 text-sm">+ monatlicher Conversion-Report, bis zu 3h Änderungen/Monat</p>
            </div>
          </div>
        </div>

        {/* BLOCK 6: SINGLE CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 bg-brand-blue/5 border border-brand-blue/10 rounded-[40px] relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Der nächste Schritt ist ein <span className="text-brand-blue">15-Minuten-Gespräch.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Wir sichten gemeinsam Ihre aktuelle Situation — und ich zeige Ihnen, was konkret möglich ist.
            </p>
            
            <div className="flex justify-center mb-6">
              <Magnetic strength={0.2}>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all shadow-xl shadow-white/5 group"
                >
                  Gespräch buchen
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
            
            <p className="text-gray-600 text-[13px] font-medium tracking-wide">
              Kein Angebot. Kein Druck. Nur Klarheit.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
