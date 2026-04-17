import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Building2, Sparkles, Home, SprayCan, Wrench, Flower2, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { id: 1, title: 'Unterhaltsreinigung', description: 'Regelmäßige Reinigung für Büros, Praxen und Gewerberäume.', image: '/images/service-unterhaltsreinigung.jpg', icon: Building2, features: ['Büroreinigung', 'Praxisreinigung', 'Gemeinschaftsflächen'] },
  { id: 2, title: 'Glasreinigung', description: 'Streifenfreie Klarheit für Fenster, Fassaden und Glasfronten.', image: '/images/service-glasreinigung.jpg', icon: Sparkles, features: ['Fensterreinigung', 'Glasfronten', 'Innen & Außen'] },
  { id: 3, title: 'Grundreinigung', description: 'Intensive Tiefenreinigung für Neuanfang oder besondere Anlässe.', image: '/images/service-grundreinigung.jpg', icon: Home, features: ['Bodenreinigung', 'Teppichreinigung', 'Desinfektion'] },
  { id: 4, title: 'Fassadenreinigung', description: 'Werterhaltung durch professionelle Außenreinigung.', image: '/images/service-fassadenreinigung.jpg', icon: SprayCan, features: ['Hochdruckreinigung', 'Graffitientfernung', 'Imprägnierung'] },
  { id: 5, title: 'Hausmeisterservice', description: 'Zuverlässige Betreuung und Wartung Ihrer Immobilie.', image: '/images/service-hausmeister.jpg', icon: Wrench, features: ['Kleinreparaturen', 'Wartungsarbeiten', 'Notfallservice'] },
  { id: 6, title: 'Gartenarbeiten', description: 'Pflege und Gestaltung Ihrer Grünanlagen.', image: '/images/service-garten.jpg', icon: Flower2, features: ['Rasenpflege', 'Heckenschnitt', 'Laubentsorgung'] },
  { id: 7, title: 'Entrümplungsservice', description: 'Professionelle Entrümpelung von Wohnungen und Kellern.', image: '/images/service-entruempelung.jpg', icon: Package, features: ['Wohnungsauflösung', 'Kellerräumung', 'Sperrmüllentsorgung'] },
  { id: 8, title: 'Umzugsservice', description: 'Stressfreier Umzug mit professioneller Unterstützung.', image: '/images/service-umzug.jpg', icon: Truck, features: ['Möbeltransport', 'Verpackungsservice', 'Möbelmontage'] },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="leistungen" ref={sectionRef} className="py-20 bg-hugo-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center gap-2 mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="w-5 h-5 text-hugo-teal" />
            <span className="text-hugo-teal font-semibold text-sm uppercase tracking-wider">Unsere Leistungen</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-hugo-navy mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Vielfältige Dienstleistungen<span className="text-hugo-teal"> aus einer Hand</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-hugo-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-hugo-teal rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-hugo-navy mb-3 group-hover:text-hugo-teal transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-hugo-light text-hugo-navy/70 text-xs font-medium rounded-full">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <p className="text-gray-600 mb-4">Benötigen Sie eine individuelle Lösung?</p>
          <a href="#kontakt">
            <Button className="inline-flex items-center gap-2 text-hugo-teal font-semibold hover:text-hugo-navy transition-colors bg-transparent hover:bg-transparent">
              Kontaktieren Sie uns
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
