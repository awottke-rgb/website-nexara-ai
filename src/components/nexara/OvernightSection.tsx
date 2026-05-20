"use client";

import { motion, Variants } from "framer-motion";
import { 
  ClipboardList, 
  Home, 
  Moon, 
  Bot, 
  Zap, 
  Paintbrush, 
  CheckCircle2, 
  Rocket, 
  Timer, 
  RefreshCw, 
  Briefcase 
} from "lucide-react";

export default function OvernightSection() {
  // Animation variants
  const sectionHeaderVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const leftItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const rightItemVariants: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.96 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.12
      }
    })
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const leftTimeline = [
    {
      time: "18:00",
      icon: ClipboardList,
      emoji: "📋",
      title: "Briefing",
      description: "Sie schildern, was Sie brauchen."
    },
    {
      time: "18:30",
      icon: Home,
      emoji: "🏠",
      title: "Feierabend",
      description: "Sie schalten ab und entspannen."
    },
    {
      time: "22:00",
      icon: Moon,
      emoji: "😴",
      title: "Schlafphase",
      description: "Sie schlafen."
    }
  ];

  const rightTimeline = [
    {
      time: "23:00",
      icon: Bot,
      emoji: "🤖",
      title: "Autostart",
      description: "KI-Agent startet automatisch."
    },
    {
      time: "01:00",
      icon: Zap,
      emoji: "⚡",
      title: "Entwicklung",
      description: "Erste Komponenten gebaut & getestet."
    },
    {
      time: "03:30",
      icon: Paintbrush,
      emoji: "🎨",
      title: "Feinschliff",
      description: "Design verfeinert, Mobile optimiert."
    },
    {
      time: "06:00",
      icon: CheckCircle2,
      emoji: "✅",
      title: "Validierung",
      description: "Automatische Tests: alle grün."
    },
    {
      time: "07:00",
      icon: Rocket,
      emoji: "🚀",
      title: "Bereitstellung",
      description: "Live-Preview deployed. Bereit für Ihr Review."
    }
  ];

  const resultCards = [
    {
      icon: Timer,
      emoji: "⏱",
      title: "2–3 Tage Lieferzeit",
      description: "Statt wochenlangem Hin-und-Her: Ihre neue Website ist in 2–3 Werktagen live."
    },
    {
      icon: RefreshCw,
      emoji: "🔄",
      title: "Feedback heute, live morgen",
      description: "Sie geben um 18 Uhr Feedback — wir implementieren über Nacht. Morgens sehen Sie das Ergebnis."
    },
    {
      icon: Briefcase,
      emoji: "💼",
      title: "Kein Entwickler nötig",
      description: "Sie brauchen keinen internen IT-Mitarbeiter. Das System läuft vollautomatisch."
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-navy">
      {/* Visual background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headline block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionHeaderVariants}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            Effizienz neu definiert
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-[1.1]">
            Während Sie schlafen,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-white">
              bauen wir Ihre Website.
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
            KI-gestützte Entwicklung läuft nachts durch — Sie reviewen morgens das Ergebnis.
          </p>
        </motion.div>

        {/* Visual Timeline centerpiece block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-24">
          
          {/* Left Column - Ihr Tag */}
          <div className="flex flex-col">
            <div className="mb-6 pb-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-bold font-display text-white">Ihr Tag</h3>
              <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Normaler Ablauf</span>
            </div>
            
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {leftTimeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={leftItemVariants}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.02] hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    <div className="font-mono text-sm font-semibold text-gray-500 bg-white/5 px-2.5 py-1 rounded-md mt-0.5">
                      {item.time}
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5 flex items-center gap-1.5">
                        <span>{item.emoji}</span>
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Unser System */}
          <div className="flex flex-col relative">
            <div className="mb-6 pb-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
                </span>
                <span>Unser System</span>
              </h3>
              <span className="text-xs text-brand-blue-light font-mono tracking-widest uppercase">Overnight Automation</span>
            </div>

            {/* Subtle Vertical Connector Line */}
            <div className="absolute left-[70px] top-[100px] bottom-[40px] w-px bg-gradient-to-b from-brand-blue/60 via-brand-blue/30 to-transparent hidden sm:block pointer-events-none" />

            <div className="space-y-6 flex-1 flex flex-col justify-between">
              {rightTimeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={rightItemVariants}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-brand-blue/[0.02] border border-brand-blue/10 hover:border-brand-blue/30 hover:bg-brand-blue/[0.04] transition-all duration-500 shadow-lg shadow-black/10 group relative"
                  >
                    {/* Ambient Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="font-mono text-sm font-semibold text-brand-blue-light bg-brand-blue/10 px-2.5 py-1 rounded-md mt-0.5 border border-brand-blue/10 group-hover:border-brand-blue/30 transition-colors z-10">
                      {item.time}
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue-light border border-brand-blue/20 group-hover:bg-brand-blue/20 group-hover:text-white transition-all flex-shrink-0 z-10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="z-10">
                      <h4 className="text-sm font-bold text-white mb-0.5 flex items-center gap-1.5">
                        <span>{item.emoji}</span>
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Three Result Cards block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resultCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="card-antigravity p-8 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center mb-6 border border-brand-blue/10 text-brand-blue-light">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display flex items-center gap-2">
                  <span>{card.emoji}</span>
                  <span>{card.title}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Single Proof Line block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xs text-gray-400 italic font-medium">
            Möglich durch KI-gestützte Entwicklung mit automatischen Tests und direktem Deployment auf Vercel.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
