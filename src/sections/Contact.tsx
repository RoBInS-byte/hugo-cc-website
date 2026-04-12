import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Smartphone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfos = [
  { icon: MapPin, title: 'Adresse', content: 'Hugo CC UG\nBerliner Str. 12\n75172 Pforzheim' },
  { icon: Phone, title: 'Telefon', content: '07231 5694554', href: 'tel:+4972315694554', subContent: '0176 55224838', subHref: 'tel:+4917655224838' },
  { icon: Mail, title: 'E-Mail', content: 'hugo-cc@gmx.de', href: 'mailto:hugo-cc@gmx.de' },
  { icon: Clock, title: 'Öffnungszeiten', content: 'Mo - Fr: 07:00 - 18:00 Uhr\nSa: 08:00 - 12:00 Uhr' },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/xgopjgwb', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.');
      }
    } catch (error) {
      setSubmitError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" ref={sectionRef} className="py-24 bg-hugo-light">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-hugo-teal/10 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Mail className="w-4 h-4 text-hugo-teal" />
            <span className="text-sm font-medium text-hugo-teal">Kontakt</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-hugo-navy mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            Lassen Sie uns<span className="text-hugo-teal"> sprechen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={`bg-white rounded-2xl p-8 lg:p-10 shadow-hugo transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-hugo-navy mb-6">Schreiben Sie uns</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-hugo-teal/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-hugo-teal" />
                </div>
                <h4 className="text-xl font-bold text-hugo-navy mb-2">Vielen Dank!</h4>
                <p className="text-hugo-navy/60">Wir haben Ihre Nachricht erhalten und melden uns umgehend bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-hugo-navy font-medium">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ihr Name" required disabled={isSubmitting} className="border-hugo-navy/20 focus:border-hugo-teal focus:ring-hugo-teal/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-hugo-navy font-medium">E-Mail *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="ihre@email.de" required disabled={isSubmitting} className="border-hugo-navy/20 focus:border-hugo-teal focus:ring-hugo-teal/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-hugo-navy font-medium">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="07231 5694554" disabled={isSubmitting} className="border-hugo-navy/20 focus:border-hugo-teal focus:ring-hugo-teal/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-hugo-navy font-medium">Nachricht *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Wie können wir Ihnen helfen?" required rows={5} disabled={isSubmitting} className="border-hugo-navy/20 focus:border-hugo-teal focus:ring-hugo-teal/20 resize-none" />
                </div>
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}
                <Button type="submit" disabled={isSubmitting} className="w-full bg-hugo-navy hover:bg-hugo-teal text-white py-6 text-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Wird gesendet...</>) : (<><Send className="w-5 h-5 mr-2" />Nachricht senden</>)}
                </Button>
                <p className="text-xs text-hugo-navy/50 text-center">Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
              </form>
            )}
          </div>

          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-hugo mb-8">
              <img src="/images/kontakt-buero.jpg" alt="Hugo CC UG Büro" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-hugo-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">Hugo CC UG</p>
                <p className="text-sm opacity-80">Ihr Partner in Pforzheim</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfos.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-hugo transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-hugo-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-hugo-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-hugo-navy mb-1">{info.title}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-hugo-navy/70 hover:text-hugo-teal transition-colors whitespace-pre-line block">{info.content}</a>
                      ) : (
                        <p className="text-sm text-hugo-navy/70 whitespace-pre-line">{info.content}</p>
                      )}
                      {info.subContent && info.subHref && (
                        <a href={info.subHref} className="text-sm text-hugo-navy/70 hover:text-hugo-teal transition-colors flex items-center gap-1 mt-1">
                          <Smartphone className="w-3 h-3" />{info.subContent}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-hugo-navy rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Schneller Kontakt</h4>
              <p className="text-white/70 text-sm mb-4">Rufen Sie uns direkt an für ein unverbindliches Beratungsgespräch.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+4972315694554" className="inline-flex items-center justify-center gap-2 bg-hugo-teal hover:bg-hugo-gold text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  <Phone className="w-5 h-5" />07231 5694554
                </a>
                <a href="tel:+4917655224838" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  <Smartphone className="w-5 h-5" />0176 55224838
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
