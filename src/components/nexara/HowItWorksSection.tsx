"use client";

import { MessageSquare, Palette, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Kostenlose Analyse",
    description: "Wir analysieren Ihre aktuelle Online-Präsenz und identifizieren konkrete Verbesserungspotenziale.",
  },
  {
    num: "02",
    icon: Palette,
    title: "Strategie & Design",
    description: "Basierend auf Ihren Zielen entwickeln wir ein maßgeschneidertes Konzept mit modernem Design und klarer Struktur.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Umsetzung & Launch",
    description: "In wenigen Wochen geht Ihre neue Website live — optimiert für Suchmaschinen und maximale Conversion.",
  },
];

export default function HowItWorksSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="prozess" className="py-24 sm:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 ${isInView ? "section-visible" : "section-hidden"}`}>
          <p className="text-brand-blue font-bold text-xs tracking-[0.2em] uppercase mb-3">
            So funktioniert&apos;s
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            In 3 Schritten zu mehr Kunden
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            Einfach, transparent und auf Ergebnisse fokussiert.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue/30 via-brand-blue/10 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col md:flex-row md:items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                    } ${isInView ? "section-visible" : "section-hidden"} stagger-${i + 1}`}
                >
                  {/* Step number dot */}
                  <div className="hidden sm:flex absolute left-6 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-brand-blue/40 items-center justify-center z-10">
                    <span className="text-xs font-bold text-brand-blue">{step.num}</span>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`p-8 rounded-2xl card-antigravity border border-white/5 ${i % 2 === 1 ? "md:ml-auto md:mr-12" : "md:ml-12"
                      } max-w-md`}>
                      <div className={`flex items-center gap-4 mb-4 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center flex-shrink-0 border border-brand-blue/10">
                          <Icon className="w-6 h-6 text-brand-blue" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
