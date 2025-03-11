
import React, { useEffect, useState } from 'react';
import { useScrollProgress } from '../utils/animations';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollProgress = useScrollProgress();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsScrolled(scrollProgress > 0.01);
  }, [scrollProgress]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-brand-navy/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-white flex items-center"
            aria-label="Logo"
          >
            <img 
              src="https://cdn.prod.website-files.com/65f962dc30fecb695292b486/660fe4e76a5da038752d173b_logo_go4clic_black.svg" 
              alt="Go4Clic Logo" 
              className="h-10 bg-white rounded-md px-2 py-1"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-white/80 hover:text-brand-cyan transition-colors duration-300 text-sm font-medium">
              Beneficios
            </a>
            <a href="#contenido" className="text-white/80 hover:text-brand-cyan transition-colors duration-300 text-sm font-medium">
              Contenido
            </a>
            <a href="#testimonios" className="text-white/80 hover:text-brand-cyan transition-colors duration-300 text-sm font-medium">
              Testimonios
            </a>
            <a 
              href="#hero" 
              className="cta-button"
            >
              DESCARGAR GRATIS
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-brand-cyan transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="py-4 px-6 space-y-4 bg-brand-navy-light/95 backdrop-blur-md">
            <a 
              href="#beneficios" 
              className="block text-white/80 hover:text-brand-cyan transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#contenido" 
              className="block text-white/80 hover:text-brand-cyan transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contenido
            </a>
            <a 
              href="#testimonios" 
              className="block text-white/80 hover:text-brand-cyan transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#hero" 
              className="cta-button block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              DESCARGAR GRATIS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
