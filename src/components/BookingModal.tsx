import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { X, MessageCircle, Clock, Calendar, Check, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<Props> = ({ isOpen, onClose, initialTreatment = '' }) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialTreatment || 'Check-up Geral & Limpeza Profilática'
  );
  const [patientName, setPatientName] = useState<string>('');
  const [preferredShift, setPreferredShift] = useState<string>('Manhã (08h às 12h)');
  const [hasUrgency, setHasUrgency] = useState<boolean>(initialTreatment?.toLowerCase().includes('urgência') || false);

  if (!isOpen) return null;

  const services = [
    'Check-up Geral & Limpeza Profilática',
    'Clareamento Dental (Consultório / Caseiro com Moldeiras)',
    'Restauração Estética em Resina',
    'Atendimento de Urgência / Dor de Dente',
    'Tratamento de Canal (Endodontia)',
    'Extração de Sisos / Cirurgia Oral',
    'Próteses & Reabilitação Oral',
    'Outro procedimento / Dúvida',
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Olá Dra. Carolina Vergutz!\n`;
    if (patientName.trim()) {
      text += `Meu nome é *${patientName.trim()}*.\n`;
    } else {
      text += `Gostaria de agendar um atendimento no seu consultório.\n`;
    }

    text += `\n📍 *Procedimento de interesse:* ${selectedService}`;
    text += `\n⏰ *Preferência de horário:* ${preferredShift}`;

    if (hasUrgency) {
      text += `\n⚠️ *Aviso de urgência:* Estou com dor ou desconforto agudo e preciso do encaixe mais rápido possível em Santa Cruz do Sul.`;
    }

    text += `\n\nVi seu consultório no Google / Site oficial e aguardo seu retorno. Obrigado!`;

    const url = `https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-[#242220] max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD3]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
              Agendamento Direto
            </span>
            <h3 className="text-2xl font-serif text-[#242220]">
              Agende sua Consulta
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6E6A64] hover:text-[#242220] rounded-full hover:bg-[#EAE3D6]/50 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-[#6E6A64] leading-relaxed">
          Preencha rapidamente para enviar sua solicitação direto ao WhatsApp da Dra. Carolina Vergutz (CRO-RS 34390).
        </p>

        <form onSubmit={handleSendWhatsApp} className="mt-5 space-y-4">
          
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3A36] mb-1.5">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Ex: Ana Luíza da Silva"
              className="w-full px-4 py-2.5 rounded-xl border border-[#E5DFD3] bg-white text-sm text-[#242220] placeholder-[#8C877E] focus:outline-none focus:border-[#967238] transition-colors"
            />
          </div>

          {/* Procedure Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3A36] mb-1.5">
              Motivo da Consulta ou Tratamento
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#E5DFD3] bg-white text-sm text-[#242220] focus:outline-none focus:border-[#967238] transition-colors"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Shift */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D3A36] mb-1.5">
              Melhor Período para Atendimento
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Manhã (08h às 12h)',
                'Tarde (13h30 às 18h30)',
                'Sábado pela manhã',
                'Primeiro horário disponível',
              ].map((shift) => (
                <button
                  type="button"
                  key={shift}
                  onClick={() => setPreferredShift(shift)}
                  className={`p-2 text-xs font-medium rounded-xl border text-left transition-all ${
                    preferredShift === shift
                      ? 'bg-white border-[#967238] text-[#967238] shadow-sm font-semibold'
                      : 'bg-[#FAF7F2] border-[#E5DFD3] text-[#6E6A64] hover:text-[#242220]'
                  }`}
                >
                  {shift}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency toggle */}
          <div className="pt-2">
            <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E5DFD3] bg-white cursor-pointer hover:bg-[#FAF7F2] transition-colors">
              <input
                type="checkbox"
                checked={hasUrgency}
                onChange={(e) => setHasUrgency(e.target.checked)}
                className="w-4 h-4 text-[#967238] rounded border-gray-300 focus:ring-[#967238]"
              />
              <span className="text-xs text-[#242220] font-medium">
                Estou com dor ou desconforto agudo (Urgência)
              </span>
            </label>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#967238] hover:bg-[#805F2B] active:scale-[0.98] rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Continuar no WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-[#6E6A64] mt-2">
              Atendimento seguro e confidencial. Respondemos em poucos instantes.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
