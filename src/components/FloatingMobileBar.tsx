import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Phone, Navigation } from 'lucide-react';

interface Props {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E5DFD3] p-2.5 shadow-lg"
      style={{ maxHeight: '12vh' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Main WhatsApp CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#967238] active:bg-[#805F2B] text-white font-semibold text-xs shadow-md whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>Agendar no WhatsApp</span>
        </button>

        {/* Quick Call */}
        <a
          href={`tel:+${CLINIC_INFO.phoneClean}`}
          className="p-3 rounded-xl bg-white border border-[#E5DFD3] text-[#242220] hover:bg-[#FAF7F2] transition-colors flex items-center justify-center shrink-0 shadow-sm"
          aria-label="Ligar para o consultório"
        >
          <Phone className="w-4 h-4 text-[#967238]" />
        </a>

        {/* Quick Map Route */}
        <a
          href={CLINIC_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white border border-[#E5DFD3] text-[#242220] hover:bg-[#FAF7F2] transition-colors flex items-center justify-center shrink-0 shadow-sm"
          aria-label="Traçar rota no Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#967238]" />
        </a>

      </div>
    </div>
  );
};
