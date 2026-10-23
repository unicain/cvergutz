import React from 'react';
import { Treatment, CLINIC_INFO } from '../data/clinicData';
import { X, CheckCircle2, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

interface Props {
  treatment: Treatment | null;
  onClose: () => void;
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const TreatmentModal: React.FC<Props> = ({ treatment, onClose, onOpenBooking }) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-[#242220] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-[#E5DFD3]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#967238]">
              Tratamento Odontológico
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#242220] mt-1">
              {treatment.title}
            </h3>
            <p className="text-xs text-[#967238] font-medium mt-0.5">
              {treatment.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6E6A64] hover:text-[#242220] rounded-full hover:bg-[#EAE3D6]/50 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-sm text-[#6E6A64] leading-relaxed">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#242220] mb-2">
              Como funciona o procedimento
            </h4>
            <p>{treatment.fullDesc}</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#242220] mb-3">
              Principais Vantagens & Diferenciais
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#3D3A36]">
                  <CheckCircle2 className="w-4 h-4 text-[#967238] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6E6A64] bg-[#EAE3D6]/50 p-3 rounded-lg">
            <Clock className="w-4 h-4 text-[#967238]" />
            <span><strong>Duração estimada:</strong> {treatment.duration}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6E6A64]">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Procedimento realizado com rigorosos protocolos de biossegurança e conforto.</span>
          </div>
        </div>

        <div className="mt-7 pt-4 border-t border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#6E6A64] hover:text-[#242220] transition-colors"
          >
            Voltar
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenBooking(treatment.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#967238] hover:bg-[#805F2B] rounded-xl shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar {treatment.title}
          </button>
        </div>
      </div>
    </div>
  );
};
