import React, { useState } from 'react';
import { TREATMENTS, Treatment } from '../data/clinicData';
import { Sparkles, Shield, AlertTriangle, Smile, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const TreatmentsSection: React.FC<Props> = ({ onSelectTreatment, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'estetica' | 'prevencao' | 'urgencia' | 'reabilitacao'>('all');

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeCategory);

  return (
    <section id="tratamentos" className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
            Especialidades & Cuidados
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
            Tratamentos Odontológicos Completos em Santa Cruz do Sul
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6A64] leading-relaxed">
            Procedimentos realizados com foco em preservação dental, mínima invasão e resultado biológico natural.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#EAE3D6]/70 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-[#242220] shadow-sm font-semibold'
                  : 'text-[#6E6A64] hover:text-[#242220]'
              }`}
            >
              Todos os Procedimentos
            </button>
            <button
              onClick={() => setActiveCategory('estetica')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'estetica'
                  ? 'bg-white text-[#242220] shadow-sm font-semibold'
                  : 'text-[#6E6A64] hover:text-[#242220]'
              }`}
            >
              Estética & Clareamento
            </button>
            <button
              onClick={() => setActiveCategory('prevencao')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'prevencao'
                  ? 'bg-white text-[#242220] shadow-sm font-semibold'
                  : 'text-[#6E6A64] hover:text-[#242220]'
              }`}
            >
              Prevenção & Profilaxia
            </button>
            <button
              onClick={() => setActiveCategory('urgencia')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'urgencia'
                  ? 'bg-white text-[#242220] shadow-sm font-semibold'
                  : 'text-[#6E6A64] hover:text-[#242220]'
              }`}
            >
              Dor & Urgências
            </button>
            <button
              onClick={() => setActiveCategory('reabilitacao')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === 'reabilitacao'
                  ? 'bg-white text-[#242220] shadow-sm font-semibold'
                  : 'text-[#6E6A64] hover:text-[#242220]'
              }`}
            >
              Próteses & Reabilitação
            </button>
          </div>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment, idx) => {
            const isMarquee = idx === 0 || treatment.id === 'urgencias';
            return (
              <div
                key={treatment.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#C5A367]/60 transition-all shadow-sm hover:shadow-md ${
                  isMarquee && activeCategory === 'all' ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#FAF7F2]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#967238]">
                      {treatment.category === 'estetica' && 'Odontologia Estética'}
                      {treatment.category === 'prevencao' && 'Saúde & Prevenção'}
                      {treatment.category === 'urgencia' && 'Alívio & Urgência'}
                      {treatment.category === 'reabilitacao' && 'Reabilitação Funcional'}
                    </span>
                    <span className="text-[11px] text-[#6E6A64] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#967238]" />
                      {treatment.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#242220]">
                    {treatment.title}
                  </h3>

                  <p className="text-xs font-medium text-[#967238] mt-1">
                    {treatment.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#6E6A64] leading-relaxed">
                    {treatment.shortDesc}
                  </p>

                  {/* Key Benefits */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-[#E5DFD3]/60">
                    {treatment.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3D3A36]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#967238] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 flex items-center justify-between gap-3 border-t border-[#E5DFD3]/60">
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="text-xs font-semibold text-[#967238] hover:text-[#805F2B] transition-colors"
                  >
                    Ver detalhes completos →
                  </button>

                  <button
                    onClick={() => onOpenBooking(treatment.title)}
                    className="px-4 py-2 text-xs font-medium text-[#242220] bg-[#FAF7F2] hover:bg-[#EAE3D6] border border-[#E5DFD3] rounded-lg transition-colors whitespace-nowrap"
                  >
                    Agendar este
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
