import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image 
                  src="/icon.svg" 
                  alt="Nexara AI Logo" 
                  fill
                  className="object-contain opacity-95 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              <span className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-white select-none">
                <span>Nexara</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-blue-light font-sans font-extrabold">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              KI-gestützte Digitalagentur. Ich entwickle Webseiten, die Kunden
              gewinnen.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm">
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7391833568660066304/?origin=NETWORK_CONVERSATIONS"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex justify-center">
          <p className="text-gray-600 text-xs text-center">
            &copy; {new Date().getFullYear()} Nexara AI. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
