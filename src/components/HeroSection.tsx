
import React, { useEffect, useRef } from 'react';
import EmailForm from './ui-custom/EmailForm';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
      
      const decorElements = heroRef.current.querySelectorAll('.decor-element');
      
      decorElements.forEach((elem, i) => {
        const factor = (i + 1) * 0.1;
        (elem as HTMLElement).style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden" ref={heroRef}>
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-cyan/10 blur-3xl decor-element"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-brand-pink/10 blur-3xl decor-element"></div>
      <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-brand-cyan decor-element"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-brand-pink decor-element"></div>
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h4 className="text-brand-cyan mb-2 font-semibold tracking-wider">GUÍA GRATUITA</h4>
              <h1 className="section-title">
                Descubre el poder de la <span className="highlight-text">IA en Recursos Humanos</span>
              </h1>
              <p className="text-xl text-white/80 mt-6">
                La Inteligencia Artificial está revolucionando la gestión del talento. 
                Aprende cómo aplicarla en tu empresa con nuestra guía gratuita.
              </p>
            </div>
            
            <div className="pt-4">
              <EmailForm />
            </div>
            
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Más de 3,000 profesionales ya la han descargado</span>
            </div>
          </div>
          
          <div className="relative animate-slide-left">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-cyan/20 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Profesional usando IA en RRHH"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card p-4 z-20 max-w-xs animate-float">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-cyan flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Optimiza tu equipo con IA</h4>
                  <p className="text-xs text-white/70 mt-1">Reduce hasta un 75% el tiempo de contratación</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 glass-card p-4 z-20 max-w-xs animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-pink flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Toma mejores decisiones</h4>
                  <p className="text-xs text-white/70 mt-1">Análisis predictivo para retener talento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#beneficios" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-cyan transition-colors duration-300 flex flex-col items-center animate-bounce"
        aria-label="Ver más"
      >
        <span className="text-sm mb-2">Ver más</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;
