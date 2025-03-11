
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface EmailFormProps {
  buttonText?: string;
  placeholder?: string;
  showPrivacyCheckbox?: boolean;
  onSubmit?: (email: string) => void;
  variant?: 'primary' | 'secondary';
}

const EmailForm: React.FC<EmailFormProps> = ({
  buttonText = "DESCARGAR GRATIS",
  placeholder = "Tu correo electrónico",
  showPrivacyCheckbox = true,
  onSubmit,
  variant = 'primary'
}) => {
  const [email, setEmail] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor, introduce tu correo electrónico');
      return;
    }
    
    if (showPrivacyCheckbox && !agreedToPrivacy) {
      toast.error('Debes aceptar la política de privacidad');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(email);
      }
      
      toast.success('¡Guía enviada! Revisa tu correo electrónico');
      setEmail('');
      setAgreedToPrivacy(false);
    } catch (error) {
      toast.error('Ocurrió un error. Por favor, inténtalo de nuevo');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="glass-input w-full py-4 px-5 pr-16 text-white"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`absolute right-2 top-1/2 -translate-y-1/2 ${
            variant === 'primary' ? 'cta-button' : 'cta-button-secondary'
          } py-2 px-4 flex items-center`}
          aria-label={buttonText}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 rounded-full border-2 border-brand-navy border-r-transparent animate-spin" />
          ) : (
            <ArrowRight className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {showPrivacyCheckbox && (
        <div className="mt-4 flex items-start gap-2">
          <div 
            className={`h-5 w-5 border ${
              agreedToPrivacy 
                ? 'bg-brand-cyan border-brand-cyan text-brand-navy' 
                : 'border-white/30 bg-white/10'
            } rounded flex items-center justify-center cursor-pointer transition-colors duration-200`}
            onClick={() => setAgreedToPrivacy(!agreedToPrivacy)}
          >
            {agreedToPrivacy && <Check className="h-3.5 w-3.5" />}
          </div>
          <label 
            className="text-sm text-white/70 cursor-pointer"
            onClick={() => setAgreedToPrivacy(!agreedToPrivacy)}
          >
            Acepto la <a href="https://www.go4clic.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-brand-cyan underline hover:text-brand-pink transition-colors">Política de Privacidad</a>
          </label>
        </div>
      )}
    </form>
  );
};

export default EmailForm;
