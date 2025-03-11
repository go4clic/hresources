
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver, classNames } from '../utils/animations';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Gracias a la IA, redujimos el tiempo de contratación un 75%. Esta guía nos dio el impulso inicial que necesitábamos.",
    author: "María Rodríguez",
    position: "HR Manager, Viterbit",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4MzAyMzU0MQ&ixlib=rb-4.0.3&q=80&w=300"
  },
  {
    quote: "El análisis predictivo nos ayudó a retener a nuestros mejores talentos, anticipándonos a posibles renuncias. Una inversión que recomiendo.",
    author: "Carlos Mendoza",
    position: "IBM Talent Director",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTY4MzAyMzU2NQ&ixlib=rb-4.0.3&q=80&w=300"
  },
  {
    quote: "Esta guía es el mejor punto de partida para digitalizar RRHH con IA. Explicaciones claras y ejemplos prácticos que facilitan la implementación.",
    author: "Laura Sánchez",
    position: "Consultora HR Tech",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tYW58fHx8fHwxNjgzMDIzNTg2&ixlib=rb-4.0.3&q=80&w=300"
  },
  {
    quote: "Implementamos el chatbot de IA para preguntas frecuentes del personal y liberamos un 30% del tiempo de nuestro equipo de RRHH. Excelente guía.",
    author: "Alejandro Torres",
    position: "Director de Personas, TechCorp",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFufHx8fHx8MTY4MzAyMzU2NQ&ixlib=rb-4.0.3&q=80&w=300"
  }
];

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToNext = () => {
    setDirection('right');
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const goToPrevious = () => {
    setDirection('left');
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section 
      id="testimonios" 
      className="py-20 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="absolute inset-0 bg-brand-navy-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-navy-light to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-brand-cyan font-semibold tracking-wider mb-2">TESTIMONIOS</h4>
          <h2 className="section-title">Lo que dicen los <span className="highlight-text">expertos en RRHH</span> sobre la IA</h2>
          <p className="section-subtitle">
            Descubre cómo profesionales del sector están transformando sus departamentos gracias a la inteligencia artificial.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6">
                  <div className={classNames(
                    'testimonial-card text-center mx-auto max-w-2xl',
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  )}>
                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-white/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>
                    
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 'right' : 'left');
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-brand-cyan' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#hero" 
            className="cta-button inline-block"
          >
            DESCARGAR AHORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
