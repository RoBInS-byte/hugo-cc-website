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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2 bg-white/90 backdrop-blur-lg shadow-lg'
            : 'py-3 bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
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
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    isScrolled
                      ? 'text-hugo-navy hover:text-hugo-teal'
                      : 'text-hugo-navy hover:text-hugo-teal'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hugo-teal transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+4972315694554">
                <Button
                  className="bg-hugo-navy hover:bg-hugo-teal text-white transition-all duration-300 gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Anrufen</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-hugo-navy" />
              ) : (
                <Menu className="w-6 h-6 text-hugo-navy" />
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
            <Button className="bg-hugo-navy hover:bg-hugo-teal text-white gap-2 mt-4">
              <Phone className="w-5 h-5" />
              <span>Anrufen</span>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
