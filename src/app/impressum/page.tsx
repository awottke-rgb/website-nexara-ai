export default function Impressum() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>
        <div className="prose prose-invert prose-blue">
          <p className="text-gray-400 mb-8">
            Dies ist ein Platzhalter für das Impressum. Bitte fügen Sie hier Ihre
            rechtlich bindenden Angaben (gemäß § 5 TMG) ein, bevor die Website live
            geht.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-400 leading-relaxed">
            Max Mustermann<br />
            Musterstraße 1<br />
            12345 Musterstadt
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-400 leading-relaxed">
            Telefon: +49 (0) 123 44 55 66<br />
            E-Mail: kontakt@nexara-ai.de
          </p>
        </div>
      </div>
    </div>
  );
}
