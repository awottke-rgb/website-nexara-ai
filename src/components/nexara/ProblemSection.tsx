"use client";

import { AlertTriangle, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Veraltete Website",
    description:
      "Ihre Website sieht aus wie 2015 — potenzielle Kunden springen sofort ab und gehen zur Konkurrenz.",
  },
  {
    icon: Clock,
    title: "Keine Zeit für Marketing",
    description:
      "Sie sind Experte in Ihrem Fach, nicht im Webdesign. Jede Stunde, die Sie online verbringen, fehlt im Tagesgeschäft.",
  },
];

function ProblemCard({ problem, i }: { problem: any; i: number }) {
  const Icon = problem.icon;
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
      className="relative card-antigravity p-12 flex flex-col items-center text-center group border-0"
    >
      {/* Border Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(234, 67, 53, 0.4), transparent 40%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Corner Tech Accents */}
      <span className="absolute top-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-red-500/50 transition-colors">+</span>
      <span className="absolute top-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-red-500/50 transition-colors">+</span>
      <span className="absolute bottom-5 left-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-red-500/50 transition-colors">+</span>
      <span className="absolute bottom-5 right-5 text-[10px] font-mono text-gray-700/60 pointer-events-none select-none group-hover:text-red-500/50 transition-colors">+</span>

      <div className="relative z-20 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-10 border border-red-500/20 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
          <Icon className="w-10 h-10 text-red-500 flex-shrink-0" size={40} style={{ width: '40px', height: '40px' }} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 font-display leading-normal pb-2 overflow-visible min-h-[6rem] flex items-start justify-center w-full">
          {problem.title}
        </h3>
        <p className="text-gray-400 text-lg font-medium leading-relaxed">
          {problem.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="probleme" className="py-16 sm:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Die Herausforderung
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 font-display">
            Warum die meisten Websites <br />
            <span className="text-brand-blue italic">unsichtbar bleiben.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Viele Unternehmen investieren in Webseiten, die zwar gut aussehen, 
            aber keine messbaren Resultate liefern. Ich löse dieses Problem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.title} problem={problem} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
