"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { X, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  initialEmail?: string;
  initialWebsite?: string;
}

export default function LeadModal({ 
  isOpen, 
  onClose, 
  source = "modal",
  initialEmail = "",
  initialWebsite = "" 
}: LeadModalProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEmail(initialEmail);
      setWebsite(initialWebsite);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialEmail, initialWebsite]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedWebsite = website.trim();

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      setStatus("error");
      return;
    }

    if (source !== "exit" && !trimmedWebsite) {
      setErrorMsg("Bitte geben Sie Ihre Website-URL ein.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, website: trimmedWebsite, source }),
      });

      if (res.ok || res.status === 409) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es erneut.");
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-navy-card border border-border rounded-2xl p-8 shadow-2xl shadow-black/40">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Vielen Dank!</h3>
            <p className="text-gray-400 text-sm mb-6">
              Wir melden uns innerhalb von 48 Stunden mit Ihrer kostenlosen Website-Analyse.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 font-serif">
                {source === "exit" ? "Warten Sie kurz..." : "Kostenlose Website-Analyse"}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {source === "exit" 
                  ? "Gehen Sie nicht ohne Ihr Geschenk. Holen Sie sich unsere exklusive KMU-Checkliste: '5 versteckte Website-Fehler, die Sie täglich Kunden kosten' – kostenlos als PDF."
                  : "Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie eine detaillierte Analyse Ihrer aktuellen Website — völlig kostenlos."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-email-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">E-Mail-Adresse</label>
                <input
                  ref={inputRef}
                  id="lead-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="ihre@email.de"
                  className="w-full px-4 py-3.5 bg-navy border border-border rounded-xl text-white placeholder-gray-500 
                             focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/25 
                             transition-all text-sm font-medium"
                />
              </div>

              {source !== "exit" && (
                <div>
                  <label htmlFor="lead-website-input" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Website-URL</label>
                  <input
                    id="lead-website-input"
                    type="text"
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="www.ihre-website.de"
                    className="w-full px-4 py-3.5 bg-navy border border-border rounded-xl text-white placeholder-gray-500 
                               focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/25 
                               transition-all text-sm font-medium"
                  />
                </div>
              )}

              {status === "error" && (
                <p className="text-red-400 text-xs font-medium mt-1">{errorMsg}</p>
              )}

              <button
                id="lead-submit-button"
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-semibold 
                           rounded-xl hover:bg-brand-blue-light transition-all duration-300
                           shadow-lg shadow-brand-blue/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    {source === "exit" ? "Checkliste anfordern" : "Analyse anfordern"}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-4 text-center">
              Kein Spam — Ihre Daten sind bei uns sicher. 
              <a href="/datenschutz" className="text-brand-blue hover:underline ml-1">
                Datenschutz
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
