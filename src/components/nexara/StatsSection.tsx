"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Users, Zap } from "lucide-react";

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

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={TrendingUp}
            value={200}
            suffix="%"
            label="Mehr Anfragen"
            description="Durchschnittliche Steigerung der Kontaktanfragen nach Optimierung."
          />
          <StatCard
            icon={Users}
            value={50}
            suffix="+"
            label="Kundenprojekte"
            description="KMUs vertrauen auf unsere technische & strategische Expertise."
          />
          <StatCard
            icon={Zap}
            value={98}
            suffix="+"
            label="Lighthouse Score"
            description="Wir bauen Websites, die nicht nur gut aussehen, sondern auch rasend schnell laden."
          />
        </div>
      </div>
    </section>
  );
}
