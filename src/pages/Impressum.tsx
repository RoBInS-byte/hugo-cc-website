import { ArrowLeft, FileText, Building2, Phone, Mail, Scale } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Impressum() {
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
          <h1 className="text-3xl lg:text-4xl font-bold text-hugo-navy mb-8">Impressum</h1>

          <div className="space-y-8 text-gray-600">
            {/* Unternehmensangaben */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-semibold text-hugo-navy mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-hugo-teal" />
                Unternehmensangaben
              </h2>
              <div className="space-y-2">
                <p className="font-semibold text-hugo-navy">Hugo CC UG (haftungsbeschränkt)</p>
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-hugo-teal mt-1 flex-shrink-0" />
                  <div>
                    <p>Berliner Str. 12</p>
                    <p>75172 Pforzheim</p>
                    <p>Deutschland</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-hugo-teal flex-shrink-0" />
                  <a href="tel:072315694554" className="text-hugo-teal hover:underline">07231 5694554</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-hugo-teal flex-shrink-0" />
                  <a href="mailto:hugo-cc@gmx.de" className="text-hugo-teal hover:underline">hugo-cc@gmx.de</a>
                </div>
                <p className="mt-2">
                  Geschäftsführer: <span className="font-semibold text-hugo-navy">Nurten Atar</span>
                </p>
              </div>
            </div>

            {/* Handelsregister */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-semibold text-hugo-navy mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-hugo-teal" />
                Handelsregister
              </h2>
              <div className="space-y-2">
                <p><span className="font-medium">Registergericht:</span> Amtsgericht Mannheim</p>
                <p><span className="font-medium">Registernummer:</span> HRB 75 10 28</p>
                <p className="text-sm text-gray-500 mt-2 italic">Hinweis: Die UG (haftungsbeschränkt) haftet nur mit ihrem Gesellschaftsvermögen.</p>
              </div>
            </div>

            {/* Steuernummer */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-semibold text-hugo-navy mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-hugo-teal" />
                Steuernummer
              </h2>
              <div className="space-y-2">
                <p><span className="font-medium">Steuernummer:</span></p>
                <p className="font-mono bg-white px-3 py-2 rounded-lg inline-block">41409/34872</p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-lg font-semibold text-hugo-navy mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-hugo-teal" />
                Streitschlichtung
              </h2>
              <div className="space-y-3">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-hugo-teal hover:underline break-all">https://ec.europa.eu/consumers/odr</a>
                </p>
                <p className="text-sm">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Quelle */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                <span className="font-medium">Quelle:</span>{' '}
                <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-hugo-teal hover:underline">e-recht24.de</a>
              </p>
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
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
