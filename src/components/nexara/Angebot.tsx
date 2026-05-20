"use client";

import { 
  Clock, 
  AlertCircle, 
  TrendingDown, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  ChevronRight,
  BarChart3
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

const pains = [
  "Unqualifizierte Anfragen, die Ihre wertvolle Zeit im Tagesgeschäft rauben",
  "15-Sekunden-Absprünge von potenziellen Kunden wegen unklarer Botschaften",
  "Manuelles Hinterhertelefonieren bei unvollständigen Anfragen",
  "Absoluter Blindflug ohne Daten darüber, was Besucher auf Ihrer Seite tun",
  "Technische Kopfschmerzen, lahme Ladezeiten und ständige Wartungsangst",
];

const outcomes = [
  "Ein digitaler Flaggschiff-Auftritt, der sofort Vertrauen und Premium-Preise rechtfertigt",
  "Automatisches Lead-Capturing & Vorqualifizierung auf absolutem Autopilot",
  "Erstklassig vorqualifizierte Termine direkt in Ihrem Kalender, während Sie arbeiten",
  "Glasklare Daten und Transparenz über das Verhalten Ihrer profitabelsten Besucher",
  "Ein absolut sorgenfreier Launch — ich übernehme die komplette technische Abwicklung",
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
          <h2 className="text-[1.75rem] min-[375px]:text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display leading-tight max-w-4xl mx-auto">
            In 60 Tagen wissen Sie exakt, warum Besucher nicht buchen — 
            <span className="text-brand-blue"> und haben ein System das das ändert.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-xl font-medium max-w-2xl mx-auto mb-8">
            Ich optimiere Ihre Website so, dass Interessenten nicht mehr nach 15 Sekunden abspringen — sondern einen Termin buchen.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            <BarChart3 className="w-4 h-4 text-brand-blue" />
            <span className="text-brand-blue text-sm font-bold tracking-wider">Messbar. 60 Tage nach Launch.</span>
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
                className="card-antigravity p-6 sm:p-8 flex flex-col group border-0 relative rounded-[24px] sm:rounded-[40px]"
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
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 border border-brand-blue/20 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-blue flex-shrink-0" size={24} style={{ width: '24px', height: '24px' }} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 font-display leading-snug py-1">{item.title}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed py-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOCK 3: PAIN VS OUTCOME TRANSFORMATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-stretch">
          {/* Left Column: Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.01] border border-white/5 rounded-[24px] sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 font-display">
                Was Sie <span className="text-red-500/80">hinter sich lassen</span>
              </h3>
              <p className="text-gray-500 text-sm mb-8 font-medium">
                Schluss mit ineffizienten Prozessen und Websites, die zwar gut aussehen, aber keine Resultate liefern.
              </p>
              <ul className="space-y-6">
                {pains.map((pain, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-400 font-medium group">
                    <XCircle className="w-6 h-6 text-red-500/50 flex-shrink-0 mt-0.5" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Dream Outcome */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue/5 border border-brand-blue/20 rounded-[24px] sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-blue/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 font-display">
                Was wir <span className="text-brand-blue">gemeinsam bauen</span>
              </h3>
              <p className="text-gray-400 text-sm mb-8 font-medium">
                Ein vollständig automatisiertes, conversion-optimiertes Kundengewinnungs-System für Ihr Unternehmen.
              </p>
              <ul className="space-y-6">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-200 font-medium group">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>



        {/* BLOCK 5: OPTIONAL ADD-ONS */}
        <div className="mb-32 max-w-5xl mx-auto px-4">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm sm:text-base font-bold font-display uppercase tracking-[0.25em] mb-16"
          >
            Optionale Erweiterungen
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-antigravity border border-white/5 rounded-[24px] sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center group hover:border-brand-blue/30 transition-all duration-300 relative overflow-hidden bg-white/[0.01]">
              <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 font-display">Wartungs-Paket Basic</h4>
              <p className="text-brand-blue font-extrabold text-xl sm:text-3xl mb-6 font-display">99 €<span className="text-gray-500 text-sm font-medium"> / Monat</span></p>
              <p className="text-gray-400 text-sm sm:text-lg font-medium leading-relaxed">Hosting, Sicherheitsupdates & 1h flexible Änderungen pro Monat</p>
            </div>
            <div className="card-antigravity border border-white/5 rounded-[24px] sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center group hover:border-brand-blue/30 transition-all duration-300 relative overflow-hidden bg-white/[0.01]">
              <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 font-display">Wartungs-Paket Pro</h4>
              <p className="text-brand-blue font-extrabold text-xl sm:text-3xl mb-6 font-display">199 €<span className="text-gray-500 text-sm font-medium"> / Monat</span></p>
              <p className="text-gray-400 text-sm sm:text-lg font-medium leading-relaxed">Monatlicher Conversion-Report, SEO-Tracking & bis zu 3h Änderungen pro Monat</p>
            </div>
          </div>
        </div>

        {/* BLOCK 6: SINGLE CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-10 sm:py-20 bg-brand-blue/5 border border-brand-blue/10 rounded-[24px] sm:rounded-[40px] relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 px-6">
            <h2 className="text-2xl sm:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Der nächste Schritt ist ein <span className="text-brand-blue">15-Minuten-Gespräch.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Ich sichte gemeinsam mit Ihnen Ihre aktuelle Situation — und zeige Ihnen, was konkret möglich ist.
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
