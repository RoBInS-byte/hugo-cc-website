import { ArrowLeft, FileText, Scale, Key, Building2, Euro, ClipboardCheck, Shield, Calendar, BookOpen } from 'lucide-react';

export default function AGB() {
  return (
    <div className="min-h-screen bg-hugo-light">
      <header className="bg-hugo-navy text-white py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-4 group">
              <img src="/images/logo-hugo-cc-new.png" alt="Hugo CC UG Logo" className="h-12 w-auto object-contain" />
            </a>
            <a href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" /><span>Zurück zur Startseite</span>
            </a>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-hugo p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-hugo-teal/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-hugo-teal" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-hugo-navy">Allgemeine Geschäftsbedingungen</h1>
            </div>

            <div className="prose prose-lg max-w-none text-hugo-navy/80">
              <p className="text-sm text-hugo-navy/60 mb-8">Hugo CC UG (haftungsbeschränkt)</p>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-hugo-teal" />§ 1 Geltungsbereich</h2>
                <p className="mb-4">Diese AGB gelten für alle Verträge und Leistungen zwischen der Hugo CC UG, Pforzheim (Auftragnehmer) und ihren Kunden (Auftraggeber).</p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><Key className="w-5 h-5 text-hugo-teal" />§ 2 Schlüsselübergabe und Zutritt</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Der Auftraggeber stellt sicher, dass dem Personal der Hugo CC UG zum vereinbarten Termin Zugang zum Objekt gewährt wird.</li>
                  <li>Werden der Hugo CC UG Schlüssel überlassen, werden diese mit größter Sorgfalt verwahrt.</li>
                  <li>Bei Verlust eines Schlüssels haftet die Hugo CC UG im Rahmen der Betriebshaftpflichtversicherung.</li>
                  <li>Die Übergabe und Rückgabe von Schlüsseln muss schriftlich (Schlüsselprotokoll) quittiert werden.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-hugo-teal" />§ 3 Besonderheiten bei Bau- und Bauendreinigungen</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Die Baureinigung umfasst die Beseitigung von Handwerkerschmutz sowie das Entfernen von Schutzfolien/Etiketten, sofern beauftragt.</li>
                  <li>Das Objekt muss zum Reinigungstermin frei von Hindernissen sein.</li>
                  <li><strong>Wartezeiten:</strong> Verzögert sich der Reinigungsbeginn durch andere Gewerke, wird die Wartezeit als Regiestunde gesondert berechnet.</li>
                  <li><strong>Haftungsausschluss:</strong> Für Kratzer oder Schäden durch unsachgemäße Vorbehandlung anderer Gewerke wird keine Haftung übernommen.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-hugo-teal" />§ 4 Leistungsumfang und Pflichten des Auftraggebers</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Der Umfang ergibt sich aus dem Angebot. Mehrleistungen werden separat berechnet.</li>
                  <li>Der Auftraggeber stellt Wasser und Strom sowie einen abschließbaren Raum für Reinigungsmaterialien unentgeltlich zur Verfügung.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><Euro className="w-5 h-5 text-hugo-teal" />§ 5 Preise und Zahlungsbedingungen</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Alle Preise verstehen sich zzgl. der gesetzlichen MwSt.</li>
                  <li>Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zahlbar.</li>
                  <li>Bei Zahlungsverzug kann die Arbeit nach Vorankündigung eingestellt werden.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-hugo-teal" />§ 6 Abnahme und Reklamation</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Mängel sind innerhalb von 24 Stunden nach Abschluss der Reinigung schriftlich anzuzeigen.</li>
                  <li>Die Hugo CC UG hat das Recht auf zweimalige Nachbesserung. Eine Kürzung der Rechnung ohne vorherige Nachbesserungsfrist ist unzulässig.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-hugo-teal" />§ 7 Haftung</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Die Haftung ist auf die Deckungssumme der Betriebshaftpflichtversicherung begrenzt.</li>
                  <li>Für Schäden durch ungenügende Information des Kunden besteht keine Haftung.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-hugo-teal" />§ 8 Kündigung</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li><strong>Unterhaltsreinigung (Daueraufträge):</strong> Kündigungsfrist von einem Monat zum Monatsende, sofern nicht anders vereinbart.</li>
                  <li><strong>Einmalaufträge:</strong> Stornierung bis 48h vorher kostenfrei, danach können 50% des Auftragswertes als Ausfallpauschale berechnet werden.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-hugo-teal" />§ 9 Schlussbestimmungen</h2>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Änderungen bedürfen der Schriftform.</li>
                  <li>Gerichtsstand ist Pforzheim.</li>
                  <li>Sollte eine Bestimmung unwirksam sein, bleiben die restlichen Bedingungen davon unberührt.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-hugo-navy text-white py-8">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Hugo CC UG. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="/#/datenschutz" className="text-white/50 hover:text-white text-sm transition-colors">Datenschutz</a>
              <a href="/#/impressum" className="text-white/50 hover:text-white text-sm transition-colors">Impressum</a>
              <a href="/#/agb" className="text-white/50 hover:text-white text-sm transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
