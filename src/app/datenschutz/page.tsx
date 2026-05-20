import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, CheckCircle, AlertTriangle, ExternalLink, ChevronUp } from "lucide-react";
import Footer from "@/components/nexara/Footer";

export const metadata = {
  title: "Datenschutzerklärung - Nexara AI",
  description: "Erfahren Sie, wie Nexara AI Ihre personenbezogenen Daten schützt und verarbeitet. DSGVO-konform und transparent.",
};

export default function Datenschutz() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Datenschutz & Vertrauen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Datenschutzerklärung
          </h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
            In dieser Datenschutzerklärung klären wir Sie über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten auf unserer Website auf. Transparent, sicher und DSGVO-konform.
          </p>
          <div className="mt-4 text-xs text-gray-500 font-mono">
            Stand: 20. Mai 2026
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Index Sidebar (Desktop only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-navy-card/45 backdrop-blur-md border border-border rounded-3xl p-6 max-h-[75vh] overflow-y-auto">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display flex items-center gap-2 pb-2 border-b border-border">
              <Eye className="w-4 h-4 text-brand-blue-light" />
              <span>Inhaltsübersicht</span>
            </h2>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <a href="#m716" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Präambel</span>
                </a>
              </li>
              <li>
                <a href="#m3" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Verantwortlicher</span>
                </a>
              </li>
              <li>
                <a href="#mOverview" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Übersicht der Verarbeitungen</span>
                </a>
              </li>
              <li>
                <a href="#m2427" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Maßgebliche Rechtsgrundlagen</span>
                </a>
              </li>
              <li>
                <a href="#m27" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Sicherheitsmaßnahmen</span>
                </a>
              </li>
              <li>
                <a href="#m25" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Übermittlung von Daten</span>
                </a>
              </li>
              <li>
                <a href="#m24" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Internationale Transfers</span>
                </a>
              </li>
              <li>
                <a href="#m12" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Speicherung und Löschung</span>
                </a>
              </li>
              <li>
                <a href="#m10" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Rechte der Betroffenen</span>
                </a>
              </li>
              <li>
                <a href="#m317" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Geschäftliche Leistungen</span>
                </a>
              </li>
              <li>
                <a href="#m225" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Onlineangebot & Webhosting</span>
                </a>
              </li>
              <li>
                <a href="#m134" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Einsatz von Cookies</span>
                </a>
              </li>
              <li>
                <a href="#m182" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Kontakt- & Anfragen</span>
                </a>
              </li>
              <li>
                <a href="#m638" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Werbliche Kommunikation</span>
                </a>
              </li>
              <li>
                <a href="#m264" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Onlinemarketing</span>
                </a>
              </li>
              <li>
                <a href="#m136" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Soziale Netzwerke</span>
                </a>
              </li>
              <li>
                <a href="#m15" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Änderungen</span>
                </a>
              </li>
              <li>
                <a href="#m42" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/55"></span>
                  <span>Begriffsdefinitionen</span>
                </a>
              </li>
            </ul>
          </aside>

          {/* Core Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Präambel */}
            <section id="m716" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Präambel</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als &quot;Daten&quot; bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als &quot;Onlineangebot&quot;).
                </p>
                <p>
                  Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                </p>
              </div>
            </section>

            {/* Verantwortlicher */}
            <section id="m3" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Verantwortlicher</h2>
              <div className="bg-navy/50 border border-border/80 rounded-2xl p-6 font-mono text-sm text-gray-300 space-y-2">
                <p className="font-bold text-white">Vorname, Name / Firma</p>
                <p>Straße, Hausnr.</p>
                <p>PLZ, Ort, Land</p>
                <p className="pt-2">
                  E-Mail-Adresse:{" "}
                  <a href="mailto:vorname.name@beispielsdomain.eu" className="text-brand-blue-light hover:underline">
                    vorname.name@beispielsdomain.eu
                  </a>
                </p>
              </div>
            </section>

            {/* Übersicht der Verarbeitungen */}
            <section id="mOverview" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Übersicht der Verarbeitungen</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue-light mb-3">Arten der verarbeiteten Daten</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Bestandsdaten", "Zahlungsdaten", "Kontaktdaten", "Inhaltsdaten", "Vertragsdaten", "Nutzungsdaten", "Meta-, Kommunikations- und Verfahrensdaten", "Protokolldaten"].map((item) => (
                      <span key={item} className="bg-white/5 border border-border rounded-full px-3 py-1 text-xs text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue-light mb-3">Kategorien betroffener Personen</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Leistungsempfänger und Auftraggeber", "Interessenten", "Kommunikationspartner", "Nutzer", "Geschäfts- und Vertragspartner"].map((item) => (
                      <span key={item} className="bg-white/5 border border-border rounded-full px-3 py-1 text-xs text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue-light mb-3">Zwecke der Verarbeitung</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten",
                      "Kommunikation",
                      "Sicherheitsmaßnahmen",
                      "Direktmarketing",
                      "Reichweitenmessung",
                      "Tracking",
                      "Büro- und Organisationsverfahren",
                      "Zielgruppenbildung",
                      "Organisations- und Verwaltungsverfahren",
                      "Feedback",
                      "Marketing",
                      "Profile mit nutzerbezogenen Informationen",
                      "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit",
                      "Informationstechnische Infrastruktur",
                      "Öffentlichkeitsarbeit",
                      "Absatzförderung",
                      "Geschäftsprozesse und betriebswirtschaftliche Verfahren"
                    ].map((item) => (
                      <span key={item} className="bg-white/5 border border-border rounded-full px-3 py-1 text-xs text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Maßgebliche Rechtsgrundlagen */}
            <section id="m2427" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Maßgebliche Rechtsgrundlagen</h2>
              <div className="text-gray-400 leading-relaxed space-y-6">
                <p>
                  <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                </p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
                    </div>
                  </li>
                </ul>
                <p>
                  <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
                </p>
                <p>
                  <strong>Hinweis auf Geltung DSGVO und Schweizer DSG:</strong> Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung&quot; von „Personendaten&quot;, &quot;überwiegendes Interesse&quot; und &quot;besonders schützenswerte Personendaten&quot; werden die in der DSGVO verwendeten Begriffe „Verarbeitung&quot; von „personenbezogenen Daten&quot; sowie &quot;berechtigtes Interesse&quot; und &quot;besondere Kategorien von Daten&quot; verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                </p>
                <p>
                  <strong>Geltung der Datenschutzvorgaben im Sitzland:</strong> In dem Land, in dem der Verantwortliche seinen Sitz hat, gelten neben der Datenschutz-Grundverordnung (DSGVO) auch nationale Datenschutzvorschriften.
                </p>
              </div>
            </section>

            {/* Sicherheitsmaßnahmen */}
            <section id="m27" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Sicherheitsmaßnahmen</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                </p>
                <p>
                  Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
                </p>
                <p className="bg-navy/30 border border-brand-blue/20 rounded-2xl p-5 flex gap-4 text-sm text-gray-300">
                  <Lock className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):</strong> Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Dies wird durch die Anzeige von HTTPS in der URL signalisiert.
                  </span>
                </p>
              </div>
            </section>

            {/* Übermittlung von personenbezogenen Daten */}
            <section id="m25" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Übermittlung von personenbezogenen Daten</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
                </p>
              </div>
            </section>

            {/* Internationale Datentransfers */}
            <section id="m24" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Internationale Datentransfers</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland (d. h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln oder dies im Rahmen der Nutzung von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen geschieht (was erkennbar wird anhand der Postadresse des jeweiligen Anbieters oder wenn in der Datenschutzerklärung ausdrücklich auf den Datentransfer in Drittländer hingewiesen wird), erfolgt dies stets im Einklang mit den gesetzlichen Vorgaben.
                </p>
                <p>
                  Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern Standardvertragsklauseln abgeschlossen, die den Vorgaben der EU-Kommission entsprechen und vertragliche Verpflichtungen zum Schutz Ihrer Daten festlegen.
                </p>
                <p>
                  Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF bildet die primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche Sicherheit dienen. Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die Standardvertragsklauseln als zuverlässige Rückfalloption ein. So stellen wir sicher, dass Ihre Daten auch bei etwaigen politischen oder rechtlichen Veränderungen stets angemessen geschützt bleiben.
                </p>
                <p>
                  Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie nach dem DPF zertifiziert sind und ob Standardvertragsklauseln vorliegen. Weitere Informationen zum DPF und eine Liste der zertifizierten Unternehmen finden Sie auf der Website des US-Handelsministeriums unter{" "}
                  <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1">
                    <span>https://www.dataprivacyframework.gov/</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  (in englischer Sprache).
                </p>
                <p>
                  Für Datenübermittlungen in andere Drittländer gelten entsprechende Sicherheitsmaßnahmen, insbesondere Standardvertragsklauseln, ausdrückliche Einwilligungen oder gesetzlich erforderliche Übermittlungen. Informationen zu Drittlandtransfers und geltenden Angemessenheitsbeschlüssen können Sie dem Informationsangebot der EU-Kommission entnehmen:{" "}
                  <a href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1">
                    <span>Informationsangebot der EU-Kommission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
              </div>
            </section>

            {/* Allgemeine Informationen zur Datenspeicherung und Löschung */}
            <section id="m12" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.
                </p>
                <p>
                  Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.
                </p>
                <p>
                  Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.
                </p>
                <p>
                  Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.
                </p>
                <p>
                  <strong>Aufbewahrung und Löschung von Daten:</strong> Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach deutschem Recht:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-white">10 Jahre:</strong> Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).
                  </li>
                  <li>
                    <strong className="text-white">8 Jahre:</strong> Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).
                  </li>
                  <li>
                    <strong className="text-white">6 Jahre:</strong> Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung von Bedeutung sind, z. B. Stundenlohnzettel, Betriebsabrechnungsbögen, Kalkulationsunterlagen, Preisauszeichnungen, aber auch Lohnabrechnungsunterlagen, soweit sie nicht bereits Buchungsbelege sind und Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).
                  </li>
                  <li>
                    <strong className="text-white">3 Jahre:</strong> Daten, die erforderlich sind, um potenzielle Gewährleistungs- und Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und Rechte zu berücksichtigen sowie damit verbundene Anfragen zu bearbeiten, basierend auf früheren Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die Dauer der regulären gesetzlichen Verjährungsfrist von drei Jahren gespeichert (§§ 195, 199 BGB).
                  </li>
                </ul>
                <p>
                  <strong>Fristbeginn mit Ablauf des Jahres:</strong> Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall laufender Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das fristauslösende Ereignis der Zeitpunkt des Wirksamwerdens der Kündigung oder sonstige Beendigung des Rechtsverhältnisses.
                </p>
              </div>
            </section>

            {/* Rechte der betroffenen Personen */}
            <section id="m10" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Rechte der betroffenen Personen</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  <strong>Rechte der betroffenen Personen aus der DSGVO:</strong> Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
                </p>
                <ul className="space-y-4 list-none pl-0">
                  <li className="bg-red-500/5 border border-red-500/10 rounded-2xl p-5 flex gap-4 text-sm text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white uppercase tracking-wider block text-xs mb-1">Widerspruchsrecht</strong>
                      Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue-light flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Geschäftliche Leistungen */}
            <section id="m317" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Geschäftliche Leistungen</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner, etwa Kunden, Auftraggeber, Interessenten, Lieferanten und sonstige Kooperationspartner (zusammenfassend „Vertragspartner&quot;), zur Anbahnung, Durchführung und Abwicklung von Vertragsverhältnissen sowie vergleichbaren Rechtsverhältnissen. Dies umfasst auch vorvertragliche Maßnahmen, die auf Anfrage erfolgen, sowie die Kommunikation im Zusammenhang mit dem jeweiligen Vertragsverhältnis.
                </p>
                <p>
                  Die Verarbeitung dient insbesondere der Erfüllung unserer vertraglichen Haupt- und Nebenpflichten. Hierzu zählen die Erbringung der vereinbarten Leistungen, etwaige Aktualisierungs- und Informationspflichten, die Bearbeitung von Gewährleistungs- und sonstigen Leistungsstörungen, die Abwicklung von Widerrufen, Kündigungen von Dauerschuldverhältnissen, Rückabwicklungen, Erstattungen sowie die Bearbeitung sonstiger vertragsbezogener Erklärungen und Anfragen. Erfasst sind sowohl einmalige Verträge als auch fortlaufende Vertragsbeziehungen.
                </p>
                <p>
                  Verarbeitet werden insbesondere Stammdaten wie Name, Anschrift und ggf. Firma, Kontaktdaten wie E-Mail-Adresse und Telefonnummer, Vertrags- und Leistungsdaten wie Vertragsgegenstand, Vertragslaufzeit, Bestell- oder Vorgangsnummer, Nutzungs- und Leistungsdaten, Zahlungs- und Abrechnungsdaten sowie Kommunikationsinhalte und -historien. Soweit erforderlich, verarbeiten wir auch Daten, die uns im Rahmen der Durchführung eines Auftrags offengelegt oder übermittelt werden.
                </p>
                <p>
                  Darüber hinaus verarbeiten wir die Daten zur Wahrung unserer Rechte sowie zur Erfüllung gesetzlicher Verpflichtungen. Dies umfasst insbesondere handels- und steuerrechtliche Aufbewahrungspflichten, Dokumentationspflichten sowie gegebenenfalls Nachweis- und Rechenschaftspflichten. Zudem erfolgt eine Verarbeitung auf Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen Geschäftsführung, internen Verwaltung, Risikosteuerung und IT-Sicherheit sowie am Schutz unseres Geschäftsbetriebs und unserer Vertragspartner vor Missbrauch, Gefährdung von Daten, Geheimnissen und sonstigen Rechtsgütern. Hierzu kann auch die Einbindung externer Dienstleister wie IT- und Telekommunikationsanbieter, Transport- und Logistikunternehmen, Zahlungsdienstleister, Banken, Steuer- und Rechtsberater oder sonstige Erfüllungsgehilfen gehören, soweit dies für die Vertragsdurchführung oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.
                </p>
                <p>
                  Eine Weitergabe personenbezogener Daten an Dritte erfolgt ausschließlich, soweit dies zur Vertragserfüllung, zur Durchführung vorvertraglicher Maßnahmen, zur Wahrung berechtigter Interessen oder zur Erfüllung gesetzlicher Verpflichtungen erforderlich ist. Über darüberhinausgehende Verarbeitungen, insbesondere zu Marketingzwecken, informieren wir gesondert im Rahmen dieser Datenschutzerklärung.
                </p>
                <p>
                  Welche Daten im Einzelfall erforderlich sind, teilen wir den Vertragspartnern im Rahmen der Datenerhebung mit, etwa in Onlineformularen durch entsprechende Kennzeichnung oder im persönlichen Kontakt.
                </p>
                <p>
                  Die Löschung der Daten erfolgt, sobald sie für die vorgenannten Zwecke nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Gesetzliche Aufbewahrungsfristen, insbesondere nach Handels- und Steuerrecht, können eine längere Speicherung erfordern. Daten, die im Rahmen eines konkreten Auftrags übermittelt wurden, löschen wir nach Abschluss des Auftrags und Ablauf etwaiger Aufbewahrungsfristen, sofern keine weiteren gesetzlichen oder vertraglichen Verpflichtungen zur Speicherung bestehen.
                </p>
                <p>
                  Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen und zur Erfüllung des jeweiligen Vertragsverhältnisses sowie Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung gesetzlicher Verpflichtungen. Soweit die Verarbeitung auf berechtigten Interessen beruht, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO gestützt wird, erfolgt sie zur Wahrung unserer berechtigten Interessen an einer ordnungsgemäßen und effizienten Geschäftsorganisation, der internen Verwaltung und Dokumentation von Geschäftsvorgängen, der Durchsetzung und Verteidigung von Rechtsansprüchen, der Sicherstellung der IT- und Datensicherheit, der Verhinderung von Missbrauch und Betrug sowie der wirtschaftlichen Steuerung und Weiterentwicklung unseres Geschäftsbetriebs. Diese Interessen bestehen insbesondere in der Gewährleistung eines sicheren und rechtssicheren Geschäftsbetriebs sowie in der Wahrung unserer unternehmerischen Handlungsfähigkeit.
                </p>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern). Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie).</li>
                  <li><strong>Betroffene Personen:</strong> Leistungsempfänger und Auftraggeber; Interessenten. Geschäfts- und Vertragspartner.</li>
                  <li><strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten; Kommunikation; Büro- und Organisationsverfahren; Organisations- und Verwaltungsverfahren. Geschäftsprozesse und betriebswirtschaftliche Verfahren.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.</li>
                  <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
              </div>
            </section>

            {/* Bereitstellung des Onlineangebots und Webhosting */}
            <section id="m225" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
                </p>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).</li>
                  <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                  <li><strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
                <p className="font-semibold text-white mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
                <ul className="m-elements list-disc pl-5 space-y-4 text-sm">
                  <li>
                    <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz:</strong> Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch &quot;Webhoster&quot; genannt) mieten oder anderweitig beziehen; <span className="text-gray-500">Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                  </li>
                  <li>
                    <strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser Onlineangebot wird in Form von sogenannten &quot;Server-Logfiles&quot; protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; <span className="text-gray-500">Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span> <strong className="text-white block mt-1">Löschung von Daten:</strong> Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                  </li>
                </ul>
              </div>
            </section>

            {/* Einsatz von Cookies */}
            <section id="m134" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Einsatz von Cookies</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Unter dem Begriff „Cookies“ werden Funktionen, die Informationen auf Endgeräten der Nutzer speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der Sicherheit und des Komforts von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme. Wir verwenden Cookies gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung der Nutzer ein. Ist eine Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen. Dies gilt, wenn das Speichern und Auslesen von Informationen unerlässlich ist, um ausdrücklich angeforderte Inhalte und Funktionen bereitstellen zu können. Dazu zählen etwa die Speicherung von Einstellungen sowie die Sicherstellung der Funktionalität und Sicherheit unseres Onlineangebots. Die Einwilligung kann jederzeit widerrufen werden. Wir informieren klar über deren Umfang und welche Cookies genutzt werden.
                </p>
                <p>
                  <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen:</strong> Ob wir personenbezogene Daten mithilfe von Cookies verarbeiten, hängt von einer Einwilligung ab. Liegt eine Einwilligung vor, dient sie als Rechtsgrundlage. Ohne Einwilligung stützen wir uns auf unsere berechtigten Interessen, die vorstehend in diesem Abschnitt und im Kontext der jeweiligen Dienste und Verfahren erläutert sind.
                </p>
                <p>
                  <strong>Speicherdauer:</strong> Im Hinblick auf die Speicherdauer werden die folgenden Arten von Cookies unterschieden:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Temporäre Cookies (auch: Session- oder Sitzungscookies):</strong> Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Onlineangebot verlassen und sein Endgerät (z. B. Browser oder mobile Applikation) geschlossen hat.
                  </li>
                  <li>
                    <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Endgeräts gespeichert. So können beispielsweise der Log-in-Status gespeichert und bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die mithilfe von Cookies erhobenen Nutzerdaten zur Reichweitenmessung Verwendung finden. Sofern wir Nutzern keine expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z. B. im Rahmen der Einholung der Einwilligung), sollten sie davon ausgehen, dass diese permanent sind und die Speicherdauer bis zu zwei Jahre betragen kann.
                  </li>
                </ul>
                <p>
                  <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out):</strong> Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen ihres Browsers, erklären.
                </p>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</li>
                  <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</li>
                </ul>
                <p className="font-semibold text-white mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
                <ul className="m-elements list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:</strong> Wir setzen eine Einwilligungs-Management-Lösung ein, bei der die Einwilligung der Nutzer zur Verwendung von Cookies oder zu den im Rahmen der Einwilligungs-Management-Lösung genannten Verfahren und Anbietern eingeholt wird. Dieses Verfahren dient der Einholung, Protokollierung, Verwaltung und dem Widerruf von Einwilligungen. Die Dauer der Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei wird ein pseudonymer Nutzer-Identifikator erstellt, der zusammen mit dem Zeitpunkt der Einwilligung, den Angaben zum Umfang der Einwilligung sowie Informationen über den Browser, das System und das verwendete Endgerät gespeichert wird; <span className="text-gray-500">Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Kontakt- und Anfrageverwaltung */}
            <section id="m182" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Kontakt- und Anfrageverwaltung</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
                </p>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</li>
                  <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                  <li><strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Kommunikation; Organisations- und Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</li>
                </ul>
                <p className="font-semibold text-white mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
                <ul className="m-elements list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Kontaktformular:</strong> Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns übermittelten personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens. Dies umfasst in der Regel Angaben wie Name, Kontaktinformationen und gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur angemessenen Bearbeitung erforderlich sind; <span className="text-gray-500">Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon */}
            <section id="m638" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über diverse Kanäle, wie z. B. E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.
                </p>
                <p>
                  Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der werblichen Kommunikation jederzeit kostenlos über die oben genannten Kontaktmöglichkeit zu widersprechen.
                </p>
                <p>
                  Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen Berechtigung erforderlichen Daten zur Kontaktaufnahme oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der Grundlage unserer berechtigten Interessen. Die Verarbeitung dieser Daten ist auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Auf der Grundlage des berechtigten Interesses, den Widerruf bzw. Widerspruch der Nutzer dauerhaft zu beachten, speichern wir ferner die zur Vermeidung einer erneuten Kontaktaufnahme erforderlichen Daten (z. B. je nach Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).
                </p>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern). Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung).</li>
                  <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                  <li><strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Direktmarketing (z. B. per E-Mail oder postalisch); Marketing. Absatzförderung.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.</li>
                  <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
              </div>
            </section>

            {/* Onlinemarketing */}
            <section id="m264" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Onlinemarketing</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir verarbeiten personenbezogene Daten zum Zweck des Onlinemarketings, worunter insbesondere die Vermarktung von Werbeflächen oder die Darstellung von werbenden und sonstigen Inhalten (zusammenfassend als „Inhalte“ bezeichnet) anhand potenzieller Interessen der Nutzer sowie die Messung ihrer Effektivität fallen können.
                </p>
                <p>
                  Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in einer Datei (der sogenannte „Cookie“) gespeichert oder ähnliche Verfahren genutzt, mittels derer die für die Darstellung der vorgenannten Inhalte relevanten Angaben zum Nutzer gespeichert werden. Hierzu können beispielsweise betrachtete Inhalte, besuchte Websites, genutzte Onlinenetzwerke, aber auch Kommunikationspartner und technische Angaben gehören, wie etwa der verwendete Browser, das benutzte Computersystem sowie Auskünfte zu Nutzungszeiten und genutzten Funktionen. Sofern Nutzer in die Erhebung ihrer Standortdaten eingewilligt haben, können auch diese verarbeitet werden.
                </p>
                <p>
                  Zudem werden die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir zur Verfügung stehende IP-Masking-Verfahren (d. h. Pseudonymisierung durch Kürzung der IP-Adresse) zum Nutzerschutz. Generell werden im Rahmen des Onlinemarketingverfahrens keine Klardaten der Nutzer (wie z. B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme. Das heißt, wir als auch die Anbieter der Onlinemarketingverfahren kennen nicht die tatsächliche Nutzeridentität, sondern nur die in deren Profilen gespeicherten Angaben.
                </p>
                <p>
                  Die Aussagen in den Profilen werden im Regelfall in den Cookies oder mittels ähnlicher Verfahren gespeichert. Diese Cookies können später generell auch auf anderen Websites, die dasselbe Onlinemarketingverfahren einsetzen, ausgelesen und zum Zweck der Darstellung von Inhalten analysiert sowie mit weiteren Daten ergänzt und auf dem Server des Onlinemarketingverfahrensanbieters gespeichert werden.
                </p>
                <p>
                  Ausnahmsweise ist es möglich, Klardaten den Profilen zuzuordnen, vornehmlich dann, wenn die Nutzer zum Beispiel Mitglieder eines sozialen Netzwerks sind, dessen Onlinemarketingverfahren wir einsetzen und das Netzwerk die Nutzerprofile mit den vorgenannten Angaben verbindet. Wir bitten darum, zu beachten, dass Nutzer mit den Anbietern zusätzliche Abreden treffen können, etwa durch Einwilligung im Rahmen der Registrierung.
                </p>
                <p>
                  Wir erhalten grundsätzlich nur Zugang zu zusammengefassten Informationen über den Erfolg unserer Werbeanzeigen. Jedoch können wir im Rahmen sogenannter Konversionsmessungen prüfen, welche unserer Onlinemarketingverfahren zu einer sogenannten Konversion geführt haben, d. h. beispielsweise zu einem Vertragsschluss mit uns. Die Konversionsmessung wird alleine zur Erfolgsanalyse unserer Marketingmaßnahmen verwendet.
                </p>
                <p>
                  Solange nicht anders angegeben, bitten wir Sie, davon auszugehen, dass eingesetzte Cookies für einen Zeitraum von zwei Jahren gespeichert werden.
                </p>
                <p>
                  <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
                </p>
                <p>
                  <strong>Hinweise zum Widerruf und Widerspruch:</strong> Wir verweisen auf die Datenschutzhinweise der jeweiligen Anbieter und die zu den Anbietern angegebenen Widerspruchsmöglichkeiten (sog. &quot;Opt-Out&quot;). Sofern keine explizite Opt-Out-Möglichkeit angegeben wurde, besteht zum einen die Möglichkeit, dass Sie Cookies in den Einstellungen Ihres Browsers abschalten. Hierdurch können jedoch Funktionen unseres Onlineangebotes eingeschränkt werden. Wir empfehlen daher zusätzlich die folgenden Opt-Out-Möglichkeiten, die zusammenfassend auf jeweilige Gebiete gerichtet angeboten werden:
                </p>
                <ul className="list-none pl-0 space-y-2 text-sm">
                  <li>a) Europa: <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1"><span>https://www.youronlinechoices.eu</span><ExternalLink className="w-3 h-3" /></a></li>
                  <li>b) Kanada: <a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1"><span>https://youradchoices.ca/</span><ExternalLink className="w-3 h-3" /></a></li>
                  <li>c) USA: <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1"><span>https://optout.aboutads.info/</span><ExternalLink className="w-3 h-3" /></a></li>
                  <li>d) Gebietsübergreifend: <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1"><span>https://optout.aboutads.info</span><ExternalLink className="w-3 h-3" /></a></li>
                </ul>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen). Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen).</li>
                  <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                  <li><strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Reichweitenmessung (z. B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher); Tracking (z. B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies); Zielgruppenbildung; Marketing. Profile mit nutzerbezogenen Informationen (Erstellen von Nutzerprofilen).</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;. Speicherung von Cookies von bis zu 2 Jahren (Sofern nicht anders angegeben, können Cookies und ähnliche Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer gespeichert werden.).</li>
                  <li><strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
              </div>
            </section>

            {/* Präsenzen in sozialen Netzwerken */}
            <section id="m136" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Präsenzen in sozialen Netzwerken (Social Media)</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.
                </p>
                <p>
                  Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
                </p>
                <p>
                  Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können beispielsweise anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Daher werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräten gespeichert werden (insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und dort eingeloggt sind).
                </p>
                <p>
                  Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.
                </p>
                <p>
                  Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur Letztere haben jeweils Zugriff auf die Nutzerdaten und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
                </p>
                <ul className="m-elements space-y-2 mt-4 bg-navy/20 border border-border/80 rounded-2xl p-5 text-xs text-gray-300">
                  <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung). Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen).</li>
                  <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                  <li><strong>Zwecke der Verarbeitung und berechtigte Interessen:</strong> Kommunikation; Feedback (z. B. Sammeln von Feedback via Online-Formular). Öffentlichkeitsarbeit.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt &quot;Allgemeine Informationen zur Datenspeicherung und Löschung&quot;.</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
                <p className="font-semibold text-white mt-6">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
                <ul className="m-elements list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>LinkedIn:</strong> Soziales Netzwerk - Wir sind gemeinsam mit LinkedIn Irland Unlimited Company für die Erhebung (jedoch nicht die weitere Verarbeitung) von Daten der Besucher verantwortlich, die zur Erstellung der „Page-Insights“ (Statistiken) unserer LinkedIn-Profile genutzt werden. Zu diesen Daten gehören Informationen über die Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie interagieren, sowie die von ihnen vorgenommenen Handlungen. Außerdem werden Details über die genutzten Geräte erfasst, wie z. B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen und Cookie-Daten, sowie Angaben aus den Nutzerprofilen, wie Berufsfunktion, Land, Branche, Hierarchieebene, Unternehmensgröße und Beschäftigungsstatus. Datenschutzinformationen zur Verarbeitung von Nutzerdaten durch LinkedIn können den Datenschutzhinweisen von LinkedIn entnommen werden: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1"><span>https://www.linkedin.com/legal/privacy-policy</span><ExternalLink className="w-3 h-3" /></a>.<br />
                    Wir haben mit LinkedIn Irland eine spezielle Vereinbarung geschlossen („Page Insights Joint Controller Addendum“, <a href="https://legal.linkedin.com/pages-joint-controller-addendum" target="_blank" rel="noopener noreferrer" className="text-brand-blue-light hover:underline inline-flex items-center gap-1"><span>https://legal.linkedin.com/pages-joint-controller-addendum</span><ExternalLink className="w-3 h-3" /></a>), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen LinkedIn beachten muss und in der LinkedIn sich bereit erklärt hat, die Rechte der Betroffenen zu erfüllen (d. h. Nutzer können z. B. Auskunfts- oder Löschungsanfragen direkt an LinkedIn richten). Die Rechte der Nutzer (insbesondere das Recht auf Auskunft, Löschung, Widerspruch und Beschwerde) können gegenüber LinkedIn geltend gemacht werden. LinkedIn ist der primäre Ansprechpartner für diese Rechte; <span className="text-gray-500">Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Änderung und Aktualisierung */}
            <section id="m15" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Änderung und Aktualisierung</h2>
              <div className="text-gray-400 leading-relaxed space-y-4">
                <p>
                  Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
                </p>
                <p>
                  Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich im Laufe der Zeit ändern können und bitten die Angaben vor direkter Kontaktaufnahme zu prüfen.
                </p>
              </div>
            </section>

            {/* Begriffsdefinitionen */}
            <section id="m42" className="scroll-mt-32 card-antigravity p-8">
              <h2 className="text-2xl font-bold font-display text-white mb-4">Begriffsdefinitionen</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind rechtlich verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
              </p>
              
              <dl className="space-y-6">
                {[
                  {
                    term: "Bestandsdaten",
                    def: "Bestandsdaten sind grundlegende Informationen, die zur Abwicklung eines Vertrags- oder Geschäftsverhältnisses oder zur Durchführung vorvertraglicher Maßnahmen zwingend erforderlich sind, wie z. B. Name, Anschrift, Kontaktdaten oder Geburtsdatum."
                  },
                  {
                    term: "Betroffene Person",
                    def: "Als \"betroffene Person\" (auch \"Betroffener\" genannt) wird im Datenschutzrecht jede identifizierte oder identifizierbare natürliche Person bezeichnet, deren personenbezogene Daten verarbeitet werden."
                  },
                  {
                    term: "Inhaltsdaten",
                    def: "Inhaltsdaten umfassen Informationen, die von Nutzern aktiv erstellt, eingegeben oder übermittelt werden, wie z. B. Texte, Bilder, Videos, Kommentare oder Dateien in Kontaktformularen oder Chats."
                  },
                  {
                    term: "Kontaktdaten",
                    def: "Kontaktdaten sind Angaben, die eine direkte Kommunikation mit einer Person ermöglichen, wie z. B. E-Mail-Adressen, Telefonnummern, Postanschriften oder Social-Media-Benutzernamen."
                  },
                  {
                    term: "Meta-, Kommunikations- und Verfahrensdaten",
                    def: "Hierbei handelt es sich um Daten, die im Rahmen der Nutzung digitaler Dienste im Hintergrund anfallen (z. B. IP-Adressen, Gerätedaten, Browserinformationen, Zeitstempel, System- und Serverprotokolle) sowie um Daten über Kommunikationsvorgänge und informationstechnische Abläufe."
                  },
                  {
                    term: "Nutzungsdaten",
                    def: "Nutzungsdaten erfassen das Verhalten von Nutzern auf Webseiten oder in Apps, wie z. B. besuchte Unterseiten, Klickpfade, Verweildauern, Interaktionen mit Inhalten, genutzte Suchbegriffe oder die Häufigkeit von Seitenbesuchen."
                  },
                  {
                    term: "Personenbezogene Daten",
                    def: "\"Personenbezogene Daten\" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (die \"betroffene Person\") beziehen. Identifizierbar ist eine Person, wenn sie direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten oder zu Online-Kennungen identifiziert werden kann."
                  },
                  {
                    term: "Profile mit nutzerbezogenen Informationen",
                    def: "Die Verarbeitung von \"Profilen mit nutzerbezogenen Informationen\" (auch kurz \"Profile\" genannt) umfasst jede Art der automatisierten Verarbeitung personenbezogener Daten, bei der diese Daten verwendet werden, um bestimmte persönliche Aspekte einer natürlichen Person zu analysieren, vorherzusagen oder zu bewerten (z. B. Interessen, Kaufverhalten, Vorlieben oder Aufenthaltsort). Typische Anwendungsbereiche sind personalisierte Werbung oder Nutzeranalysen."
                  },
                  {
                    term: "Protokolldaten",
                    def: "Protokolldaten sind systematisch erfasste Aufzeichnungen über Ereignisse, Vorgänge oder Zugriffe in IT-Systemen (z. B. Server-Logfiles, Anmelde-Protokolle, Fehler-Protokolle oder Historien von Datenänderungen). Sie dienen der Sicherheit, Stabilität und Nachvollziehbarkeit."
                  },
                  {
                    term: "Reichweitenmessung",
                    def: "Die Reichweitenmessung dient der statistischen Auswertung des Besucherverhaltens auf einer Website. Dabei wird erhoben, wie viele Nutzer eine Seite besuchen, woher sie kommen und welche Inhalte sie lesen, um das Onlineangebot zu optimieren und den Erfolg von Marketingmaßnahmen zu bewerten."
                  },
                  {
                    term: "Tracking",
                    def: "Tracking bezeichnet das Beobachten und Verfolgen des Verhaltens von Nutzern über einen längeren Zeitraum und gegebenenfalls über mehrere Webseiten oder Dienste hinweg, um z. B. Nutzerprofile zu erstellen und interessenbasierte Werbung auszuspielen."
                  },
                  {
                    term: "Verantwortlicher",
                    def: "Als \"Verantwortlicher\" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle bezeichnet, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet."
                  },
                  {
                    term: "Verarbeitung",
                    def: "\"Verarbeitung\" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung."
                  },
                  {
                    term: "Vertragsdaten",
                    def: "Vertragsdaten sind Informationen, die im Rahmen einer vertraglichen Vereinbarung oder eines vorvertraglichen Verhältnisses erhoben und verarbeitet werden, wie z. B. Vertragsgegenstand, Laufzeit, Preise, Zahlungsmodalitäten, Bestellungen, Rechnungsdaten oder die Vertragshistorie."
                  },
                  {
                    term: "Zahlungsdaten",
                    def: "Zahlungsdaten umfassen alle Informationen, die zur Abwicklung von Zahlungsvorgängen erforderlich sind, wie z. B. Bankverbindungen (IBAN, BIC), Kreditkartendaten, Rechnungsnummern, Zahlungshistorien oder Transaktionsdaten."
                  }
                ].map(({ term, def }) => (
                  <div key={term} className="border-l-2 border-brand-blue/30 pl-4 py-1">
                    <dt className="text-white font-bold font-display text-sm mb-1">{term}</dt>
                    <dd className="text-gray-400 text-sm leading-relaxed">{def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Seal / Footer Note */}
            <div className="pt-6 border-t border-border flex justify-center text-center">
              <p className="text-xs text-gray-500 font-medium">
                <a 
                  href="https://datenschutz-generator.de/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer" 
                  className="hover:text-brand-blue-light transition-colors"
                >
                  Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
                </a>
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Floating Scroll to Top Button */}
      <a 
        href="#"
        className="fixed bottom-6 right-6 z-[100] bg-navy-card border border-border hover:border-brand-blue/30 text-gray-400 hover:text-white p-3 rounded-full shadow-lg shadow-black/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Nach oben scrollen"
      >
        <ChevronUp className="w-5 h-5" />
      </a>

      <Footer />
    </div>
  );
}
