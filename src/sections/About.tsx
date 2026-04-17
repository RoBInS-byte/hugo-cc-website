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
    <section id="ueber-uns" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/ueber-uns-team.jpg" alt="Hugo CC UG Team" className="w-full h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-hugo-navy/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className={`absolute bottom-8 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-hugo-teal/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-hugo-teal" />
                </div>
                <div>
                  <p className="font-bold text-hugo-navy text-sm">Mit Leidenschaft</p>
                  <p className="text-xs text-gray-500">für jeden Auftrag</p>
                </div>
              </div>
            </div>
            
            {/* Decorative blur element */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-hugo-gold/20 rounded-full blur-xl -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <div className={`flex items-center gap-2 mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
              <Users className="w-5 h-5 text-hugo-teal" />
              <span className="text-hugo-teal font-semibold text-sm uppercase tracking-wider">Über Uns</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold text-hugo-navy mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              Ein junges Unternehmen<span className="text-hugo-teal"> mit großen Zielen</span>
            </h2>

            <p className={`space-y-4 text-gray-600 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
              Hugo CC UG ist ein dynamisches, wachsendes Unternehmen in Pforzheim. Gegründet mit der Vision, professionelle Reinigungsdienste und Facility-Management aus einer Hand anzubieten.
            </p>

            <div className={`grid sm:grid-cols-2 gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-hugo-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-hugo-teal" />
                  </div>
                  <span className="text-sm text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <div className="bg-hugo-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm mx-auto">
                  <TrendingUp className="w-6 h-6 text-hugo-teal" />
                </div>
                <p className="font-bold text-hugo-navy">Wachsend</p>
                <p className="text-sm text-gray-500">Stetige Expansion</p>
              </div>
              <div className="bg-hugo-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm mx-auto">
                  <Users className="w-6 h-6 text-hugo-teal" />
                </div>
                <p className="font-bold text-hugo-navy">Engagiert</p>
                <p className="text-sm text-gray-500">Qualifiziertes Team</p>
              </div>
              <div className="bg-hugo-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm mx-auto">
                  <Calendar className="w-6 h-6 text-hugo-teal" />
                </div>
                <p className="font-bold text-hugo-navy">Flexibel</p>
                <p className="text-sm text-gray-500">Individuelle Termine</p>
              </div>
              <div className="bg-hugo-light rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm mx-auto">
                  <Award className="w-6 h-6 text-hugo-teal" />
                </div>
                <p className="font-bold text-hugo-navy">Qualität</p>
                <p className="text-sm text-gray-500">Höchste Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
