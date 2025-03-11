
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
              <a href="#" className="text-white flex items-center">
                <img 
                  src="https://cdn.prod.website-files.com/65f962dc30fecb695292b486/660fe4e76a5da038752d173b_logo_go4clic_black.svg" 
                  alt="Go4Clic Logo" 
                  className="h-10 bg-white rounded-md px-2 py-1"
                />
              </a>
            </div>
            
            <div className="text-white/50 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} Go4Clic. Todos los derechos reservados.</p>
              <div className="mt-2 space-x-4">
                <a href="https://www.go4clic.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-cyan transition-colors">Política de Privacidad</a>
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
