import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Shield, Clock, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayHint, setShowPlayHint] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer für das Video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().then(() => {
              video.muted = false;
            }).catch(() => {
              setShowPlayHint(true);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = false;
    setShowPlayHint(false);
    
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Sparkles, text: 'Makellose Sauberkeit' },
    { icon: Shield, text: 'Verlässlich & Sicher' },
    { icon: Clock, text: 'Pünktlich & Flexibel' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-hugo-light via-white to-hugo-light"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-hugo-teal/10 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ transitionDelay: '0.3s' }}
        />
        <div
          className={`absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-hugo-navy/5 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-[200px] h-[200px] rounded-full bg-hugo-gold/10 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ transitionDelay: '0.7s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Side - Text Content (7 columns) */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-hugo-teal/10 rounded-full mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Sparkles className="w-4 h-4 text-hugo-teal" />
                <span className="text-sm font-medium text-hugo-teal">
                  Professionelle Dienstleistungen in Pforzheim
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-black text-hugo-navy leading-tight mb-2 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                Hugo CC
                <span className="text-hugo-teal"> UG</span>
              </h1>

              {/* Slogan */}
              <p
                className={`text-2xl sm:text-3xl text-hugo-teal font-medium mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                Clean Clever
              </p>

              {/* Subheadline */}
              <p
                className={`text-xl sm:text-2xl text-hugo-navy/80 font-medium mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                Ihr Partner für makellose Sauberkeit
              </p>

              {/* Description */}
              <p
                className={`text-base sm:text-lg text-hugo-navy/60 max-w-xl mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                Wir sorgen für hygienische und gepflegte Räumlichkeiten 
                in Pforzheim und Umgebung. Vertrauen Sie auf unsere Professionalität 
                und Leidenschaft für Sauberkeit.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-hugo-navy hover:bg-hugo-teal text-white px-8 py-6 text-lg font-semibold transition-all duration-300 group"
                >
                  Jetzt Angebot einholen
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="tel:+4972315694554">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-hugo-navy text-hugo-navy hover:bg-hugo-navy hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
                  >
                    <span className="mr-2">07231 5694554</span>
                  </Button>
                </a>
              </div>

              {/* Features */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.7s' }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm"
                  >
                    <div className="w-8 h-8 bg-hugo-teal/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-hugo-teal" />
                    </div>
                    <span className="text-sm font-medium text-hugo-navy">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Mascot Video (5 columns) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start lg:pt-0">
              <div
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                {/* Video Container */}
                <div 
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-hugo-lg bg-white cursor-pointer"
                  onClick={handleVideoClick}
                >
                  <video
                    ref={videoRef}
                    src="/images/HugoMaskottechen.mp4"
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Overlay */}
                  {showPlayHint && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-hugo-navy/60 hover:bg-hugo-navy/70 transition-colors">
                      <Volume2 className="w-12 h-12 text-white mb-2" />
                      <span className="text-white text-sm font-medium">Zum Abspielen klicken</span>
                    </div>
                  )}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-hugo-teal/20 rounded-full -z-10" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-hugo-gold/20 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
