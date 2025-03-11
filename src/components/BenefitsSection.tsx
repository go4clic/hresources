
import React from 'react';
import { useIntersectionObserver, classNames } from '../utils/animations';
import { Search, Shield, BarChart, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Optimiza la selección de talento con IA',
    description: 'Automatiza la búsqueda de candidatos ideales y reduce el tiempo de contratación hasta un 75%.',
    icon: Search,
    iconBg: 'bg-brand-cyan',
  },
  {
    title: 'Herramientas que aumentan la eficiencia',
    description: 'Conoce las mejores soluciones tecnológicas para automatizar procesos repetitivos en RRHH.',
    icon: Shield,
    iconBg: 'bg-yellow-400',
  },
  {
    title: 'Mejora la retención con predicción de datos',
    description: 'Detecta patrones de comportamiento que indican posible rotación y actúa antes de perder talento.',
    icon: BarChart,
    iconBg: 'bg-brand-pink',
  },
  {
    title: 'Casos de éxito de empresas líderes',
    description: 'Analiza ejemplos reales de implementación de IA en departamentos de RRHH y sus resultados.',
    icon: Users,
    iconBg: 'bg-purple-500',
  },
];

const BenefitsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section id="beneficios" className="py-20 relative overflow-hidden" ref={ref as React.RefObject<HTMLDivElement>}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-brand-navy-dark opacity-50"></div>
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-cyan/5 to-transparent"></div>
      <div className="absolute left-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-t from-brand-pink/5 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-brand-cyan font-semibold tracking-wider mb-2">BENEFICIOS</h4>
          <h2 className="section-title">¿Cómo te ayudará <span className="highlight-text">esta guía</span>?</h2>
          <p className="section-subtitle">
            Descubre las ventajas competitivas que la IA ofrece a los departamentos de Recursos Humanos modernos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <div 
                key={index}
                className={classNames(
                  'benefit-card appear-animation stagger-appear',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`h-14 w-14 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            );
          })}
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

export default BenefitsSection;
