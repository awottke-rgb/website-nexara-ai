import Link from "next/link";
import { ArrowLeft, Landmark, Mail, Phone, ShieldCheck, HelpCircle, FileText, Scale } from "lucide-react";
import Footer from "@/components/nexara/Footer";

export const metadata = {
  title: "Impressum - Nexara AI",
  description: "Rechtliche Angaben und Impressum für Nexara AI gemäß § 5 TMG.",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-navy text-foreground relative flex flex-col font-sans">
      {/* Top Floating Mini Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl bg-navy-card/85 backdrop-blur-xl border border-border rounded-full py-3 px-6 flex justify-between items-center shadow-lg shadow-black/20">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-white group select-none">
          <span className="flex items-center gap-1.5">
            <span>Nexara</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light font-sans font-extrabold">AI</span>
          </span>
        </Link>
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors py-1.5 px-3 rounded-full border border-border hover:border-brand-blue/30 bg-navy/50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Zurück zur Startseite</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden flex-shrink-0">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-3 py-1 text-xs font-semibold text-brand-blue-light mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span>Rechtliche Informationen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Impressum
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Rechtliche Angaben und Anbieterkennzeichnung von Nexara AI gemäß § 5 TMG.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pb-32 relative z-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Angaben Card */}
          <div className="card-antigravity p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light">
                  <Landmark className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-white">Angaben gemäß § 5 TMG</h2>
              </div>
              <p className="text-gray-300 leading-relaxed font-medium">
                Adrien Wottke<br />
                Brösaer Dorfstraße 29<br />
                02694 Malschwitz OT Brösa<br />
                Deutschland
              </p>
            </div>
          </div>

          {/* Kontakt Card */}
          <div className="card-antigravity p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-white">Kontakt</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                  <a href="tel:+491603233104" className="hover:text-white transition-colors font-mono">
                    +49 160 3233104
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-brand-blue-light flex-shrink-0" />
                  <a href="mailto:a.wottke@nexara-ai.de" className="hover:text-white transition-colors font-mono">
                    a.wottke@nexara-ai.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Redaktionell Verantwortlich */}
          <div className="card-antigravity p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-white">Redaktionell verantwortlich</h2>
              </div>
              <p className="text-gray-300 leading-relaxed font-medium">
                Adrien Wottke<br />
                Brösaer Dorfstraße 29<br />
                02694 Malschwitz
              </p>
            </div>
          </div>

          {/* Umsatzsteuer-ID Card */}
          <div className="card-antigravity p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-white">Umsatzsteuer-ID</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="font-mono text-brand-blue-light font-semibold mt-1 block">Wird nachgereicht</span>
              </p>
            </div>
          </div>
        </div>

        {/* Streitbeilegung Card */}
        <div className="card-antigravity p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold font-display text-white">Verbraucherstreitbeilegung</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        {/* Quelle */}
        <div className="pt-6 border-t border-border flex justify-center text-center">
          <p className="text-xs text-gray-500 font-medium">
            Quelle:{" "}
            <a 
              href="https://www.e-recht24.de/impressum-generator.html" 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="hover:text-brand-blue-light transition-colors inline-flex items-center gap-0.5"
            >
              <span>e-recht24.de Impressum-Generator</span>
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
