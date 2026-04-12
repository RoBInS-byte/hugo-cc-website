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
    <section id="leistungen" ref={sectionRef} className="py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-hugo-teal/10 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="w-4 h-4 text-hugo-teal" />
            <span className="text-sm font-medium text-hugo-teal">Unsere Leistungen</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-hugo-navy mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Vielfältige Dienstleistungen<span className="text-hugo-teal"> aus einer Hand</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.id} className={`group relative bg-white rounded-2xl overflow-hidden shadow-hugo hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-hugo-navy/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-hugo-teal" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-hugo-navy mb-2 group-hover:text-hugo-teal transition-colors">{service.title}</h3>
                <p className="text-hugo-navy/60 text-sm mb-3 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-hugo-light text-hugo-navy/70 text-xs font-medium rounded-full">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <a href="#kontakt">
            <Button className="bg-hugo-navy hover:bg-hugo-teal text-white px-8 py-6 text-lg font-semibold transition-all duration-300">
              Kontaktieren Sie uns
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
