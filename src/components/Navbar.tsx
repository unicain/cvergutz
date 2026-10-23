import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';

interface Props {
  onOpenBooking: (treatmentTitle?: string) => void;
  onOpenPhotoManager: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenBooking, onOpenPhotoManager }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DFD3]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single cohesive brand mark with logo) */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-lg sm:text-xl font-serif tracking-tight text-[#242220] hover:text-[#967238] transition-colors whitespace-nowrap shrink-0 group"
        >
          <img 
            src="/assets/aistudio/2_8f0ec99e.png" 
            alt="Dra. Carolina Vergutz" 
            className="w-10 h-10 object-contain rounded-full border border-[#E5DFD3] p-0.5 bg-[#F4EFE6] shadow-sm group-hover:scale-105 transition-transform" 
          />
          <span className="font-semibold text-base sm:text-lg tracking-wide uppercase">
            Dra. Carolina Vergutz
          </span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E6A64]">
          <a 
            href="#sobre" 
            className="hover:text-[#242220] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Sobre
          </a>
          <a 
            href="#tratamentos" 
            className="hover:text-[#242220] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Tratamentos
          </a>
          <a 
            href="#diferenciais" 
            className="hover:text-[#242220] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Diferenciais
          </a>
          <a 
            href="#depoimentos" 
            className="hover:text-[#242220] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Depoimentos
          </a>
          <a 
            href="#localizacao" 
            className="hover:text-[#242220] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Localização
          </a>
          <a 
            href="#duvidas" 
            className="hover:text-[#242220] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#967238] hover:bg-[#805F2B] active:scale-[0.98] rounded-xl transition-all shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Consulta
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#6E6A64] hover:text-[#242220] hover:bg-[#EAE3D6]/60 rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5DFD3] bg-[#FAF7F2] px-5 py-6 space-y-4 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#6E6A64]">
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#242220]"
            >
              Sobre a Dra. Carolina
            </a>
            <a 
              href="#tratamentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#242220]"
            >
              Tratamentos & Procedimentos
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#242220]"
            >
              Por que Nos Escolher
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#242220]"
            >
              Avaliações de Pacientes
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#242220]"
            >
              Como Chegar (Borges de Medeiros, 274)
            </a>
            <a 
              href="#duvidas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#242220]"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-4 border-t border-[#E5DFD3] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#967238] rounded-xl shadow-sm hover:bg-[#805F2B] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Consulta no WhatsApp
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotoManager();
              }}
              className="w-full text-center py-2 text-xs font-medium text-[#6E6A64] hover:text-[#242220]"
            >
              Personalizar fotos da página
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
