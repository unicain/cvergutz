import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, MessageCircle } from 'lucide-react';

interface Props {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const SmileQuizSection: React.FC<Props> = ({ onOpenBooking }) => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedSensation, setSelectedSensation] = useState<string | null>(null);

  const goals = [
    { id: 'clareamento', title: 'Quero clarear meus dentes', icon: '✨', rec: 'Clareamento de Consultório ou Caseiro com Moldeiras' },
    { id: 'limpeza', title: 'Faz mais de 6 meses que não faço limpeza', icon: '🦷', rec: 'Profilaxia Completa com remoção de tártaro e flúor' },
    { id: 'dor', title: 'Estou sentindo dor ou incômodo agudo', icon: '⚡', rec: 'Atendimento de Urgência & Alívio Imediato' },
    { id: 'estetica', title: 'Dentes lascados ou restaurações antigas', icon: '💎', rec: 'Restaurações Estéticas Biomiméticas em Resina' },
  ];

  const sensations = [
    { id: 'nenhuma', label: 'Não sinto dor, apenas quero cuidar da estética e prevenção' },
    { id: 'frio_quente', label: 'Sinto pontadas de dor com água gelada, café ou doces' },
    { id: 'sangramento', label: 'Minha gengiva sangra ao passar fio dental ou escovar' },
    { id: 'constante', label: 'Dor contínua que atrapalha dormir ou mastigar' },
  ];

  const handleStartConsultation = () => {
    const currentGoal = goals.find(g => g.id === selectedGoal);
    const goalTitle = currentGoal ? currentGoal.title : 'Avaliação Geral';
    const recTitle = currentGoal ? currentGoal.rec : 'Consulta de Avaliação';
    
    let text = `Olá Dra. Carolina! Fiz o teste no seu site:\n`;
    text += `• *Objetivo:* ${goalTitle}\n`;
    if (selectedSensation) {
      const sens = sensations.find(s => s.id === selectedSensation)?.label;
      text += `• *Sintoma/Sensação:* ${sens}\n`;
    }
    text += `• *Recomendação prévia:* ${recTitle}\n\n`;
    text += `Gostaria de agendar uma avaliação com você no consultório em Santa Cruz do Sul.`;

    window.open(`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const currentGoalObj = goals.find(g => g.id === selectedGoal);

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
            Triagem Interativa em 1 Minuto
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
            Descubra o cuidado ideal para o seu sorriso
          </h2>
          <p className="mt-2 text-sm text-[#6E6A64]">
            Selecione suas preferências abaixo para receber uma orientação direta personalizada no WhatsApp.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD3] shadow-sm">
          
          {/* Step 1: Goal */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3A36] mb-3">
              1. Qual é a sua prioridade principal hoje?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    selectedGoal === g.id
                      ? 'border-[#967238] bg-[#FAF7F2] shadow-sm text-[#242220]'
                      : 'border-[#E5DFD3] hover:border-[#C5A367]/60 text-[#6E6A64]'
                  }`}
                >
                  <span className="text-xl">{g.icon}</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#242220]">{g.title}</h4>
                    <p className="text-[11px] text-[#6E6A64] mt-0.5">{g.rec}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Sensation */}
          {selectedGoal && (
            <div className="mt-8 pt-6 border-t border-[#E5DFD3]/60 animate-fade-in">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D3A36] mb-3">
                2. Você tem sentido algum incômodo recente?
              </label>
              <div className="space-y-2">
                {sensations.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSensation(s.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                      selectedSensation === s.id
                        ? 'border-[#967238] bg-[#FAF7F2] text-[#242220] font-semibold'
                        : 'border-[#E5DFD3] hover:border-[#C5A367]/60 text-[#6E6A64]'
                    }`}
                  >
                    <span>{s.label}</span>
                    {selectedSensation === s.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#967238] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result card & Action */}
          {selectedGoal && (
            <div className="mt-8 pt-6 border-t border-[#E5DFD3]/60 bg-[#FAF7F2] p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#967238]">
                  Recomendação indicada:
                </span>
                <h4 className="text-base font-serif font-bold text-[#242220]">
                  {currentGoalObj?.rec}
                </h4>
                <p className="text-xs text-[#6E6A64] mt-0.5">
                  Agende sua consulta para um diagnóstico detalhado com a Dra. Carolina Vergutz.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleStartConsultation}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-white bg-[#967238] hover:bg-[#805F2B] rounded-xl shadow-md transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar ao WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedGoal(null);
                    setSelectedSensation(null);
                  }}
                  className="p-3 text-[#6E6A64] hover:text-[#242220] rounded-xl hover:bg-white border border-[#E5DFD3] transition-colors"
                  title="Reiniciar teste"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
