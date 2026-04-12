import { useEffect, useRef, useState } from 'react';
import { Users, CheckCircle2, TrendingUp, Heart, Calendar, Award } from 'lucide-react';

const values = [
  'Zuverlässigkeit und Pünktlichkeit',
  'Höchste Qualitätsstandards',
  'Umweltfreundliche Reinigungsmittel',
  'Individuelle Betreuung',
  'Flexible Terminierung',
  'Faire und transparente Preise',
];

export default function About() {
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
    <section id="ueber-uns" ref={sectionRef} className="py-24 bg-hugo-light">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-hugo-lg">
              <img src="/images/ueber-uns-team.jpg" alt="Hugo CC UG Team" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-hugo-navy/30 to-transparent" />
            </div>
            <div className={`absolute -bottom-6 -right-4 lg:right-6 bg-white rounded-2xl shadow-hugo-lg p-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-hugo-teal/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-hugo-teal" />
                </div>
                <div>
                  <p className="text-lg font-bold text-hugo-navy">Mit Leidenschaft</p>
                  <p className="text-xs text-hugo-navy/60">für jeden Auftrag</p>
                </div>
              </div>
            </div>
            <div className={`absolute -top-6 -left-6 w-24 h-24 bg-hugo-gold/20 rounded-2xl -z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} style={{ transitionDelay: '0.2s' }} />
          </div>

          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-hugo-teal/10 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
              <Users className="w-4 h-4 text-hugo-teal" />
              <span className="text-sm font-medium text-hugo-teal">Über Uns</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-hugo-navy mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Ein junges Unternehmen<span className="text-hugo-teal"> mit großen Zielen</span>
            </h2>

            <p className={`text-hugo-navy/70 text-lg mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
              Hugo CC UG ist ein dynamisches, wachsendes Unternehmen in Pforzheim. Gegründet mit der Vision, professionelle Reinigungsdienste und Facility-Management aus einer Hand anzubieten.
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-hugo-teal flex-shrink-0" />
                  <span className="text-sm text-hugo-navy/80">{value}</span>
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <TrendingUp className="w-6 h-6 text-hugo-teal mx-auto mb-2" />
                <p className="text-xl font-bold text-hugo-navy">Wachsend</p>
                <p className="text-xs text-hugo-navy/60">Stetige Expansion</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Users className="w-6 h-6 text-hugo-teal mx-auto mb-2" />
                <p className="text-xl font-bold text-hugo-navy">Engagiert</p>
                <p className="text-xs text-hugo-navy/60">Qualifiziertes Team</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Calendar className="w-6 h-6 text-hugo-teal mx-auto mb-2" />
                <p className="text-xl font-bold text-hugo-navy">Flexibel</p>
                <p className="text-xs text-hugo-navy/60">Individuelle Termine</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Award className="w-6 h-6 text-hugo-teal mx-auto mb-2" />
                <p className="text-xl font-bold text-hugo-navy">Qualität</p>
                <p className="text-xs text-hugo-navy/60">Höchste Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
