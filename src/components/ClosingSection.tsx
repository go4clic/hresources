
import React from 'react';
import { useIntersectionObserver, classNames } from '../utils/animations';
import EmailForm from './ui-custom/EmailForm';
import { Zap } from 'lucide-react';

const ClosingSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      className="py-20 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark to-brand-navy"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-cyan/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-brand-pink/10 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={classNames(
            'glass-card p-10 md:p-16 rounded-2xl border border-white/10 relative overflow-hidden',
            isVisible ? 'animate-scale-in' : 'opacity-0'
          )}>
            {/* Background glow effect */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-pink mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empieza a transformar tu departamento de RRHH con IA
              </h2>
              
              <p className="text-white/70 text-lg mb-8">
                Descarga la guía ahora y da el primer paso hacia el futuro de la gestión de talento. Obtén herramientas, estrategias y ejemplos prácticos que puedes implementar de inmediato.
              </p>
              
              <div className="max-w-md mx-auto">
                <EmailForm buttonText="DESCARGAR GRATIS AHORA" />
              </div>
              
              <div className="mt-8 text-xs text-white/50">
                Al descargar esta guía aceptas recibir información relevante sobre IA en RRHH. Puedes darte de baja en cualquier momento.
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-2">
                  <svg className="h-5 w-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-white/70">Actualizada mensualmente</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-2">
                  <svg className="h-5 w-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-sm text-white/70">Descarga segura</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-2">
                  <svg className="h-5 w-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <span className="text-sm text-white/70">Acceso inmediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
