
import React, { useState } from 'react';
import { useIntersectionObserver, classNames } from '../utils/animations';
import { FileText, CheckCircle, BookOpen, PieChart, Users } from 'lucide-react';

const contentItems = [
  {
    title: 'Introducción a la IA en RRHH',
    description: 'Fundamentos y conceptos clave sobre el uso de inteligencia artificial en recursos humanos.',
    icon: BookOpen,
  },
  {
    title: 'Selección y reclutamiento inteligente',
    description: 'Cómo usar la IA para filtrar candidatos y detectar el mejor talento para cada posición.',
    icon: Users,
  },
  {
    title: 'Análisis predictivo en RRHH',
    description: 'Utilización de datos para predecir comportamientos y tendencias en tu equipo.',
    icon: PieChart,
  },
  {
    title: 'Checklist de implementación',
    description: '5 pasos prácticos para incorporar IA en tu departamento de recursos humanos.',
    icon: CheckCircle,
  },
];

const ContentPreview: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section 
      id="contenido" 
      className="py-20 relative"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy to-brand-navy-light"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-brand-cyan font-semibold tracking-wider mb-2">CONTENIDO</h4>
          <h2 className="section-title">Un adelanto de lo que <span className="highlight-text">aprenderás</span></h2>
          <p className="section-subtitle">
            Explora los temas clave que cubrimos en nuestra guía especializada sobre IA en Recursos Humanos.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={classNames(
            'relative',
            isVisible ? 'animate-slide-right' : 'opacity-0'
          )}>
            <div className="glass-card p-1 rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] bg-brand-navy-light rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full max-w-sm">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                      <div className="flex items-center space-x-3 mb-8">
                        <FileText className="h-6 w-6 text-brand-cyan" />
                        <h3 className="text-xl font-bold">Guía IA en RRHH</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {contentItems.map((item, idx) => (
                          <div 
                            key={idx}
                            className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                              activeTab === idx 
                                ? 'bg-white/10 shadow-lg' 
                                : 'hover:bg-white/5'
                            }`}
                            onClick={() => setActiveTab(idx)}
                          >
                            <div className="flex items-start gap-3">
                              <item.icon className={`h-5 w-5 mt-0.5 ${
                                activeTab === idx ? 'text-brand-cyan' : 'text-white/60'
                              }`} />
                              <div>
                                <h4 className={`font-medium ${
                                  activeTab === idx ? 'text-white' : 'text-white/80'
                                }`}>
                                  {item.title}
                                </h4>
                                {activeTab === idx && (
                                  <p className="text-sm text-white/60 mt-1 animate-fade-in">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-cyan/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-brand-navy-light rounded-full border border-brand-cyan/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-cyan">35</div>
                <div className="text-xs text-white/70">páginas de<br />contenido</div>
              </div>
            </div>
          </div>
          
          <div className={classNames(
            'space-y-8',
            isVisible ? 'animate-slide-left' : 'opacity-0'
          )}>
            <div>
              <h3 className="text-3xl font-bold mb-6">Todo lo que necesitas para implementar IA en tu departamento</h3>
              <p className="text-white/80 text-lg mb-6">
                Nuestra guía está diseñada para profesionales de RRHH que quieren mantenerse a la vanguardia tecnológica sin necesitar conocimientos técnicos avanzados.
              </p>
              <p className="text-white/70">
                Con ejemplos claros, casos de estudio y recomendaciones prácticas, podrás empezar a implementar soluciones de IA desde el primer día.
              </p>
            </div>
            
            <div className="space-y-4">
              {contentItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-white/70 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#hero" 
                className="cta-button inline-block"
              >
                QUIERO LA GUÍA GRATUITA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
