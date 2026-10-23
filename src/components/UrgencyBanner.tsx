import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { AlertCircle, PhoneCall, MessageCircle, Clock, ShieldAlert } from 'lucide-react';

interface Props {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const UrgencyBanner: React.FC<Props> = ({ onOpenBooking }) => {
  const handleUrgentWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá Dra. Carolina! Estou com uma URGÊNCIA odontológica (dor de dente / trauma) em Santa Cruz do Sul e gostaria de verificar o horário mais rápido possível para atendimento.'
    );
    window.open(`https://wa.me/${CLINIC_INFO.phoneClean}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-[#242220] text-[#FAF7F2] py-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-80 h-80 bg-[#C5A367]/15 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A367]/20 border border-[#C5A367]/40 rounded-lg text-xs font-semibold text-[#DFCAA2]">
              <AlertCircle className="w-4 h-4 text-[#C5A367]" />
              <span>Plantão & Encaixe de Urgência Odontológica</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white leading-snug">
              Está com dor de dente aguda, dente fraturado ou sofreu um trauma?
            </h2>

            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">
              Dor de dente não espera. A Dra. Carolina Vergutz disponibiliza canal prioritário de triagem para pacientes em Santa Cruz do Sul com dor intensa, inflamação ou necessidade de alívio rápido.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#FAF7F2]/70 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A367]" />
                Encaixes prioritários no mesmo dia
              </span>
              <span aria-hidden="true">·</span>
              <span>Anestesia com alívio imediato</span>
              <span aria-hidden="true">·</span>
              <span>Centro / Higienópolis</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={handleUrgentWhatsApp}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold text-[#242220] bg-[#C5A367] hover:bg-[#D5B880] active:scale-[0.98] rounded-xl transition-all shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar Atendimento de Urgência
            </button>

            <a
              href={`tel:+${CLINIC_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A367]" />
              Ligar: {CLINIC_INFO.phoneDisplay}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
