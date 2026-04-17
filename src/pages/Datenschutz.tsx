import { ArrowLeft, Shield, Server, User, Mail, MessageSquare, Lock } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Datenschutz() {
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
            <Shield className="w-8 h-8 text-hugo-teal" />
            <h1 className="text-3xl lg:text-4xl font-bold text-hugo-navy">Datenschutzerklärung</h1>
          </div>

          <p className="text-gray-500 mb-8 flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Stand: April 2026
          </p>

          <div className="space-y-8 text-gray-600">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Datenschutz auf einen Blick
              </h2>
              <div className="ml-10 space-y-4">
                <h3 className="font-semibold text-hugo-navy">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                <h3 className="font-semibold text-hugo-navy mt-4">Datenerfassung auf dieser Website</h3>
                <p className="font-medium text-hugo-navy">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt &quot;Hinweis zur Verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.</p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <Server className="w-5 h-5 text-hugo-teal" />
                Hosting
              </h2>
              <p className="ml-10">Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
            </div>

            {/* 3 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <User className="w-5 h-5 text-hugo-teal" />
                Verantwortliche Stelle
              </h2>
              <div className="ml-10 space-y-2">
                <p className="font-semibold text-hugo-navy">Hugo CC UG (haftungsbeschränkt)</p>
                <p>Berliner Str. 12</p>
                <p>75172 Pforzheim</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-medium text-hugo-navy">Tel:</span>
                  <span>07231 5694554</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-hugo-teal" />
                  <a href="mailto:hugo-cc@gmx.de" className="text-hugo-teal hover:underline">hugo-cc@gmx.de</a>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <MessageSquare className="w-5 h-5 text-hugo-teal" />
                Kontaktformular
              </h2>
              <p className="ml-10">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
            </div>

            {/* 5 */}
            <div className="bg-hugo-light rounded-xl p-6">
              <h2 className="text-xl font-bold text-hugo-navy mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-hugo-teal text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <Lock className="w-5 h-5 text-hugo-teal" />
                Ihre Rechte
              </h2>
              <p className="ml-10">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
            </div>

            {/* Quelle */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                <span className="font-medium">Quelle:</span> Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators von{' '}
                <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-hugo-teal hover:underline">e-recht24.de</a> erstellt.
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
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
