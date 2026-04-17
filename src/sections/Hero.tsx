import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Shield, Clock, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Autoplay video on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.play().catch(() => {});
  }, []);

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
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
    <section className="relative min-h-screen bg-hugo-navy overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-hugo-teal/10 blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-hugo-navy/50 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] rounded-full bg-hugo-gold/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-hugo-teal/20 border border-hugo-teal/40 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-hugo-gold" />
              <span className="text-sm font-medium text-white">
                Professionelle Dienstleistungen in Pforzheim
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Hugo CC <span className="text-hugo-teal">UG</span>
            </h1>

            {/* Slogan */}
            <p
              className={`text-xl sm:text-2xl text-hugo-gold font-semibold mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              Clean Clever
            </p>

            {/* Subheadline */}
            <p
              className={`text-xl text-white/80 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Ihr Partner für makellose Sauberkeit
            </p>

            {/* Description */}
            <p
              className={`text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-700 ${
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
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-hugo-teal hover:bg-hugo-teal/90 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                Jetzt Angebot einholen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a href="tel:+4972315694554">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-hugo-gold text-hugo-gold hover:bg-hugo-gold hover:text-hugo-navy font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
                >
                  07231 5694554
                </Button>
              </a>
            </div>

            {/* Features */}
            <div
              className={`mt-10 flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <div className="w-10 h-10 rounded-full bg-hugo-teal/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-hugo-teal" />
                  </div>
                  <div>
                    <span className="text-hugo-teal font-bold text-sm block">{feature.text.split(' ')[0]}</span>
                    <span className="text-sm">{feature.text.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Mascot Video */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-hugo-teal/30 bg-hugo-navy">
                <video
                  ref={videoRef}
                  src="/images/HugoMaskottechen.mp4"
                  muted={isMuted}
                  playsInline
                  loop
                  autoPlay
                  className="w-full max-w-[400px] h-auto block"
                />
              </div>
              
              {/* Audio Toggle Button */}
              <button
                onClick={handleVideoToggle}
                className={`
                  absolute -bottom-4 left-1/2 transform -translate-x-1/2
                  flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm
                  transition-all duration-300 hover:scale-105 shadow-lg
                  ${isMuted 
                    ? 'bg-gradient-to-r from-hugo-gold to-yellow-500 text-hugo-navy hover:from-yellow-400 hover:to-yellow-300' 
                    : 'bg-hugo-teal text-white hover:bg-hugo-teal/90'}
                `}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-5 h-5" />
                    <span>Hugo spricht!</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5" />
                    <span>Hugo ist zu hören!</span>
                  </>
                )}
              </button>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-hugo-gold/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-hugo-teal/20 rounded-full blur-xl -z-10" />
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
            fill="#F5F7FA"
          />
        </svg>
      </div>
    </section>
  );
}
