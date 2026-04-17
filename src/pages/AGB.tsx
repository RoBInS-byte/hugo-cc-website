import { ArrowLeft, FileCheck, Key, Building2, ClipboardList, Euro, ShieldCheck, AlertTriangle, Gavel, FileSignature } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AGB() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-hugo-light">
      {/* Header */}
      <header className="bg-hugo-navy py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück zur Startseite</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="w-8 h-8 text-hugo-teal" />
            <h1 className="text-3xl lg:text-4xl font-bold text-hugo-navy">Allgemeine Geschäftsbedingungen</h1>
          </div>

          <p className="text-gray-500 mb-8 flex items-center gap-2">
            <span className="font-semibold text-hugo-navy">Hugo CC UG (haftungsbeschränkt)</span>
          </p>

          <div className="space-y-6 text-gray-600">
            {/* §1 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§1</span>
                <FileSignature className="w-5 h-5 text-hugo-teal" />
                Geltungsbereich
              </h2>
              <p className="ml-10">Diese AGB gelten für alle Verträge und Leistungen zwischen der Hugo CC UG, Pforzheim (Auftragnehmer) und ihren Kunden (Auftraggeber).</p>
            </div>

            {/* §2 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§2</span>
                <Key className="w-5 h-5 text-hugo-teal" />
                Schlüsselübergabe und Zutritt
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Der Auftraggeber stellt sicher, dass dem Personal der Hugo CC UG zum vereinbarten Termin Zugang zum Objekt gewährt wird.</li>
                <li>Werden der Hugo CC UG Schlüssel überlassen, werden diese mit größter Sorgfalt verwahrt.</li>
                <li>Bei Verlust eines Schlüssels haftet die Hugo CC UG im Rahmen der Betriebshaftpflichtversicherung.</li>
                <li>Die Übergabe und Rückgabe von Schlüsseln muss schriftlich (Schlüsselprotokoll) quittiert werden.</li>
              </ul>
            </div>

            {/* §3 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§3</span>
                <Building2 className="w-5 h-5 text-hugo-teal" />
                Baureinigung
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Die Baureinigung umfasst die Beseitigung von Handwerkerschmutz sowie das Entfernen von Schutzfolien/Etiketten, sofern beauftragt.</li>
                <li>Das Objekt muss zum Reinigungstermin frei von Hindernissen sein.</li>
                <li>Wartezeiten: Wartezeiten aufgrund nicht freigegebener Bereiche werden als Arbeitszeit berechnet.</li>
                <li>Haftungsausschluss: Für Schäden an nicht fachgerecht verlegten Bodenbelägen oder nicht entfernbaren Verschmutzungen wird nicht gehaftet.</li>
              </ul>
            </div>

            {/* §4 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§4</span>
                <ClipboardList className="w-5 h-5 text-hugo-teal" />
                Leistungsumfang
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Der Umfang ergibt sich aus dem Angebot. Mehrleistungen werden separat berechnet.</li>
                <li>Der Auftraggeber stellt Wasser und Strom sowie einen abschließbaren Raum für Reinigungsmaterialien unentgeltlich zur Verfügung.</li>
              </ul>
            </div>

            {/* §5 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§5</span>
                <Euro className="w-5 h-5 text-hugo-teal" />
                Preise und Zahlungsbedingungen
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Alle Preise verstehen sich zzgl. der gesetzlichen MwSt.</li>
                <li>Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zahlbar.</li>
                <li>Bei Zahlungsverzug kann die Arbeit nach Vorankündigung eingestellt werden.</li>
              </ul>
            </div>

            {/* §6 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§6</span>
                <AlertTriangle className="w-5 h-5 text-hugo-teal" />
                Gewährleistung / Mängel
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Mängel sind innerhalb von 24 Stunden nach Abschluss der Reinigung schriftlich anzuzeigen.</li>
                <li>Die Hugo CC UG hat das Recht auf zweimalige Nachbesserung. Eine Kürzung der Rechnung ohne vorherige Nachbesserungsfrist ist unzulässig.</li>
              </ul>
            </div>

            {/* §7 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§7</span>
                <ShieldCheck className="w-5 h-5 text-hugo-teal" />
                Haftung
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Die Haftung ist auf die Deckungssumme der Betriebshaftpflichtversicherung begrenzt.</li>
                <li>Für Schäden durch ungenügende Information des Kunden besteht keine Haftung.</li>
              </ul>
            </div>

            {/* §8 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§8</span>
                <FileCheck className="w-5 h-5 text-hugo-teal" />
                Kündigung
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Unterhaltsreinigung (Daueraufträge): Kündigungsfrist 1 Monat zum Monatsende.</li>
                <li>Einmalaufträge: Bis 48 Stunden vor Termin kostenfrei, danach 50% des Auftragswerts.</li>
              </ul>
            </div>

            {/* §9 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-bold text-hugo-navy mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">§9</span>
                <Gavel className="w-5 h-5 text-hugo-teal" />
                Schlussbestimmungen
              </h2>
              <ul className="ml-10 space-y-2 list-disc list-inside">
                <li>Änderungen bedürfen der Schriftform.</li>
                <li>Gerichtsstand ist Pforzheim.</li>
                <li>Sollte eine Bestimmung unwirksam sein, bleiben die restlichen Bedingungen davon unberührt.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-hugo-navy text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Hugo CC UG (haftungsbeschränkt)</p>
            <div className="flex gap-4">
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
