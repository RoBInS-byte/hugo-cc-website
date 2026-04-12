import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react';

export default function Datenschutz() {
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
                <Shield className="w-6 h-6 text-hugo-teal" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-hugo-navy">Datenschutzerklärung</h1>
            </div>

            <div className="prose prose-lg max-w-none text-hugo-navy/80">
              <p className="text-sm text-hugo-navy/60 mb-8">Stand: April 2026</p>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-semibold text-hugo-navy mb-3">Allgemeine Hinweise</h3>
                <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>

                <h3 className="text-lg font-semibold text-hugo-navy mb-3">Datenerfassung auf dieser Website</h3>
                <p className="mb-4"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4">2. Hosting</h2>
                <p className="mb-4">Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4">3. Hinweis zur verantwortlichen Stelle</h2>
                <div className="bg-hugo-light p-6 rounded-xl mb-4">
                  <p className="font-semibold text-hugo-navy mb-2">Hugo CC UG (haftungsbeschränkt)</p>
                  <p className="text-hugo-navy/80">Berliner Str. 12</p>
                  <p className="text-hugo-navy/80">75172 Pforzheim</p>
                  <p className="text-hugo-navy/80 mt-3"><Phone className="w-4 h-4 inline mr-2" />07231 5694554</p>
                  <p className="text-hugo-navy/80"><Mail className="w-4 h-4 inline mr-2" />hugo-cc@gmx.de</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4">4. Kontaktformular</h2>
                <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-4">5. Ihre Rechte</h2>
                <p className="mb-4">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-hugo-navy mb-4">Quelle</h2>
                <p className="mb-4">Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators von <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-hugo-teal hover:underline">e-recht24.de</a> erstellt.</p>
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
