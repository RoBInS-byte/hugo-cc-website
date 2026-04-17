import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Über Uns', href: '#ueber-uns' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-md shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src="/images/logo-hugo-cc-new.png" 
                alt="Hugo CC UG Logo" 
                className="h-14 w-auto object-contain rounded-lg"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-hugo-teal ${
                    isScrolled ? 'text-hugo-navy' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+4972315694554">
                <Button
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-hugo-teal hover:bg-hugo-teal/90 text-white'
                      : 'bg-white hover:bg-white/90 text-hugo-navy'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">Anrufen</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-hugo-navy hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-bold text-hugo-navy hover:text-hugo-teal transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a href="tel:+4972315694554">
            <Button className="bg-hugo-teal hover:bg-hugo-teal/90 text-white gap-2 mt-4">
              <Phone className="w-5 h-5" />
              <span>Anrufen</span>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
