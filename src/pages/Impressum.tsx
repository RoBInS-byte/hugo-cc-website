import { ArrowLeft, FileText, Mail, Phone, MapPin, User, Building2, Scale } from 'lucide-react';

export default function Impressum() {
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
                <FileText className="w-6 h-6 text-hugo-teal" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-hugo-navy">Impressum</h1>
            </div>

            <div className="prose prose-lg max-w-none text-hugo-navy/80">
              <p className="text-sm text-hugo-navy/60 mb-8">Angaben gemäß § 5 DDG</p>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-hugo-teal" />Unternehmensangaben
                </h2>
                <div className="bg-hugo-light p-6 rounded-xl space-y-4">
                  <div><p className="font-semibold text-hugo-navy text-lg">Hugo CC UG (haftungsbeschränkt)</p></div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-hugo-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-hugo-navy/80">Berliner Str. 12</p>
                      <p className="text-hugo-navy/80">75172 Pforzheim</p>
                      <p className="text-hugo-navy/80">Deutschland</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                    <a href="tel:+4972315694554" className="text-hugo-navy/80 hover:text-hugo-teal transition-colors">07231 5694554</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                    <a href="mailto:hugo-cc@gmx.de" className="text-hugo-navy/80 hover:text-hugo-teal transition-colors">hugo-cc@gmx.de</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                    <p className="text-hugo-navy/80"><span className="font-medium">Geschäftsführer:</span> Nurten Atar</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-6 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-hugo-teal" />Handelsregister
                </h2>
                <div className="bg-hugo-light p-6 rounded-xl space-y-3">
                  <p className="text-hugo-navy/80"><span className="font-medium">Registergericht:</span> Amtsgericht Mannheim</p>
                  <p className="text-hugo-navy/80"><span className="font-medium">Registernummer:</span> HRB 75 10 28</p>
                </div>
                <p className="text-sm text-hugo-navy/60 mt-3">Hinweis: Die UG (haftungsbeschränkt) haftet nur mit ihrem Gesellschaftsvermögen.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-6">Steuernummer</h2>
                <div className="bg-hugo-light p-6 rounded-xl">
                  <p className="text-hugo-navy/80"><span className="font-medium">Steuernummer:</span></p>
                  <p className="text-hugo-navy/80 mt-2">41409/34872</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-xl font-bold text-hugo-navy mb-6">Streitschlichtung</h2>
                <p className="mb-4">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-hugo-teal hover:underline">https://ec.europa.eu/consumers/odr</a></p>
                <p className="font-medium text-hugo-navy">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-hugo-navy mb-6">Quelle</h2>
                <p className="mb-4">Dieses Impressum wurde mit Hilfe des Impressum-Generators von <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-hugo-teal hover:underline">e-recht24.de</a> erstellt.</p>
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
