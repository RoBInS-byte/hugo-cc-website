import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Star, Leaf, ThumbsUp, Headphones } from 'lucide-react';

const advantages = [
  { icon: Shield, title: 'Zuverlässig', description: 'Wir halten unsere Termine ein und erledigen unsere Arbeit gründlich und pünktlich.' },
  { icon: Clock, title: 'Flexibel', description: 'Wir passen uns Ihren Betriebszeiten an – früh, spät oder am Wochenende.' },
  { icon: Star, title: 'Gründlich', description: 'Keine Ecke wird übersehen. Wir arbeiten nach höchsten Qualitätsstandards.' },
  { icon: Leaf, title: 'Umweltfreundlich', description: 'Wir verwenden umweltfreundliche Reinigungsmittel und nachhaltige Methoden.' },
  { icon: ThumbsUp, title: 'Erfahren', description: 'Über 10 Jahre Erfahrung in der Gebäudereinigung für verschiedenste Branchen.' },
  { icon: Headphones, title: 'Persönlich', description: 'Ihr persönlicher Ansprechpartner steht Ihnen jederzeit zur Verfügung.' },
];

export default function WhyUs() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-hugo-teal/10 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <ThumbsUp className="w-4 h-4 text-hugo-teal" />
            <span className="text-sm font-medium text-hugo-teal">Warum HUGO CC</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-hugo-navy mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Das macht uns<span className="text-hugo-teal"> besonders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className={`group relative bg-white rounded-2xl p-8 shadow-hugo hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-hugo-teal/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-hugo-teal group-hover:scale-110">
                <advantage.icon className="w-8 h-8 text-hugo-teal transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-hugo-navy mb-3 group-hover:text-hugo-teal transition-colors">{advantage.title}</h3>
              <p className="text-hugo-navy/60 text-sm leading-relaxed">{advantage.description}</p>
              <div className="absolute top-0 right-0 w-20 h-20 bg-hugo-gold/5 rounded-bl-full -z-10 transition-all duration-300 group-hover:bg-hugo-gold/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
