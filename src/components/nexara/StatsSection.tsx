"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function StatCard({ icon: Icon, value, suffix, label, description }: StatCardProps) {
  const { count, countRef } = useCountUp(value);

  return (
    <div
      ref={countRef}
      className="group p-8 rounded-3xl bg-navy-card border border-white/5 text-center hover:border-brand-blue/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-blue/20 transition-colors">
        <Icon className="w-6 h-6 text-brand-blue" />
      </div>
      <p className="text-5xl font-bold text-white mb-2 font-display">
        {count}{suffix}
      </p>
      <p className="text-white font-semibold mb-2">{label}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const stats = [
  { icon: TrendingUp, value: 200, suffix: "%", label: "Mehr Anfragen", description: "Durchschnittliche Steigerung der Kontaktanfragen nach Optimierung." },
  { icon: Users, value: 50, suffix: "+", label: "Kundenprojekte", description: "KMUs vertrauen auf unsere technische & strategische Expertise." },
  { icon: Zap, value: 98, suffix: "+", label: "Lighthouse Score", description: "Wir bauen Websites, die nicht nur gut aussehen, sondern auch rasend schnell laden." },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <StatCard
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
