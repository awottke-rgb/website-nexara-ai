"use client";

import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

interface CtaSectionProps {
  onAnalyseClick: () => void;
}

export default function CtaSection({ onAnalyseClick }: CtaSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <section id="kontakt" className="py-16 sm:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`card-antigravity p-12 sm:p-20 shadow-2xl shadow-black/5 ${
            isInView ? "section-visible" : "section-hidden"
          }`}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Side */}
            <div className="text-left">
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 font-display leading-tight">
                Bereit für <br />
                <span className="text-brand-blue italic">das Neue?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                Wählen Sie einen Termin für ein kurzes Erstgespräch oder fordern Sie direkt Ihre kostenlose Analyse an.
              </p>

              <div className="space-y-8">
                <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5">
                  <p className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Anfrage per E-Mail</p>
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ihre E-Mail-Adresse"
                      className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-full text-white focus:outline-none focus:border-brand-blue transition-colors font-medium"
                    />
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Ihre Website-URL"
                      className="w-full px-6 py-4 bg-black/20 border border-white/10 rounded-full text-white focus:outline-none focus:border-brand-blue transition-colors font-medium"
                    />
                    <button
                      onClick={onAnalyseClick}
                      className="btn-primary w-full px-8 py-4 bg-white text-black font-bold whitespace-nowrap cursor-pointer mt-2"
                    >
                      Kostenlose Analyse starten
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Side */}
            <div className="bg-white rounded-[32px] overflow-hidden border border-white/5 shadow-2xl h-[600px]">
              <iframe
                src="https://cal.com/adrien-wottke-hogs97/15min"
                title="Termin buchen"
                width="100%"
                height="100%"
                frameBorder="0"
                className="grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
