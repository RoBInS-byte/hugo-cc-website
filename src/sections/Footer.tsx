import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Über Uns', href: '#ueber-uns' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const services = [
    { name: 'Unterhaltsreinigung', href: '#leistungen' },
    { name: 'Glasreinigung', href: '#leistungen' },
    { name: 'Grundreinigung', href: '#leistungen' },
    { name: 'Fassadenreinigung', href: '#leistungen' },
    { name: 'Hausmeisterservice', href: '#leistungen' },
    { name: 'Gartenarbeiten', href: '#leistungen' },
    { name: 'Entrümplungsservice', href: '#leistungen' },
    { name: 'Umzugsservice', href: '#leistungen' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-hugo-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/logo-hugo-cc-new.png" 
                alt="Hugo CC UG Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für professionelle Reinigungsdienste 
              und Facility-Management in Pforzheim und Umgebung.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-hugo-teal transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-hugo-teal transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-hugo-teal transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-hugo-teal transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Leistungen</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-white/70 hover:text-hugo-teal transition-colors text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hugo-teal flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Berliner Str. 12<br />
                  75172 Pforzheim
                </span>
              </li>
              <li>
                <a href="tel:+4972315694554" className="flex items-center gap-3 text-white/70 hover:text-hugo-teal transition-colors text-sm">
                  <Phone className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                  07231 5694554
                </a>
              </li>
              <li>
                <a href="tel:+4917655224838" className="flex items-center gap-3 text-white/70 hover:text-hugo-teal transition-colors text-sm">
                  <Smartphone className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                  0176 55224838
                </a>
              </li>
              <li>
                <a href="mailto:hugo-cc@gmx.de" className="flex items-center gap-3 text-white/70 hover:text-hugo-teal transition-colors text-sm">
                  <Mail className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                  hugo-cc@gmx.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              &copy; {currentYear} Hugo CC UG. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link to="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/agb" className="hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
