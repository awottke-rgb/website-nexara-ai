"use client";

import { AlertTriangle, Clock, TrendingDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

import { motion } from "framer-motion";

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

export default function ProblemSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="probleme" className="py-32 sm:py-48" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
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
            aber keine messbaren Resultate liefern. Wir lösen dieses Problem.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-antigravity p-12 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-10 border border-red-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 font-display">
                  {problem.title}
                </h3>
                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
