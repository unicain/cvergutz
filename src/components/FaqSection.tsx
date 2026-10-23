import React, { useState } from 'react';
import { FAQ_ITEMS, FaqItem } from '../data/clinicData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface Props {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<Props> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
            Perguntas Frequentes & SEO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
            Tire Suas Dúvidas Sobre o Atendimento
          </h2>
          <p className="mt-2 text-sm text-[#6E6A64]">
            Respostas transparentes sobre localização, horários, urgências e procedimentos.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E5DFD3] bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-[#242220]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#967238] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#6E6A64] leading-relaxed border-t border-[#FAF7F2]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for remaining questions */}
        <div className="mt-10 p-6 rounded-2xl bg-[#EAE3D6]/40 border border-[#E5DFD3] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-semibold text-sm text-[#242220]">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-[#6E6A64] mt-0.5">Nossa equipe responde diretamente no WhatsApp sem nenhum compromisso.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#967238] hover:bg-[#805F2B] rounded-xl shadow-sm transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Dra. Carolina</span>
          </button>
        </div>

      </div>
    </section>
  );
};
