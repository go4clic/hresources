
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ContentPreview from '../components/ContentPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import ClosingSection from '../components/ClosingSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll implementation for hash links
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetSection = document.querySelector(link.hash);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    // Handle initial hash in URL
    if (window.location.hash) {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection) {
        setTimeout(() => {
          window.scrollTo({
            top: targetSection.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }, 500);
      }
    }
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navbar />
      
      <main>
        <HeroSection />
        <BenefitsSection />
        <ContentPreview />
        <TestimonialsSection />
        <ClosingSection />
      </main>
      
      <footer className="py-10 bg-brand-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-white font-bold text-2xl flex items-center">
                <span className="text-brand-cyan">IA</span>
                <span className="mx-1">en</span>
                <span className="text-brand-pink">RRHH</span>
              </a>
            </div>
            
            <div className="text-white/50 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} IA en RRHH. Todos los derechos reservados.</p>
              <div className="mt-2 space-x-4">
                <a href="#" className="text-white/70 hover:text-brand-cyan transition-colors">Política de Privacidad</a>
                <a href="#" className="text-white/70 hover:text-brand-cyan transition-colors">Términos de Uso</a>
                <a href="#" className="text-white/70 hover:text-brand-cyan transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
