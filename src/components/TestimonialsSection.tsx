import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Star, ShieldCheck, Quote, ExternalLink, ThumbsUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  return (
    <section id="depoimentos" className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Authority */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
              Autoridade & Confiança Imediata
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
              O que dizem os pacientes que já transformaram o sorriso conosco
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6E6A64] leading-relaxed">
              Desde o início dos atendimentos no consultório em abril de 2026, cada paciente é tratado com dedicação integral, paciência e o mais alto padrão odontológico.
            </p>
          </div>

          {/* Google Review Badge with direct link */}
          <div className="p-4 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm flex items-center gap-4 shrink-0 self-start lg:self-auto">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] flex items-center justify-center p-2 border border-[#E5DFD3]">
              {/* Google G logo representation */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base text-[#242220]">5.0 de 5.0</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#6E6A64]">Google Meu Negócio · 100% positivo</p>
            </div>
            <a
              href={CLINIC_INFO.googleMyBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#967238] hover:text-[#805F2B] ml-2 flex items-center gap-1"
            >
              <span>Ver no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8C877E]">{t.date}</span>
                </div>

                <p className="text-sm text-[#3D3A36] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5DFD3]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm text-[#242220]">{t.name}</h4>
                  <p className="text-[11px] text-[#6E6A64]">{t.location}</p>
                </div>
                <span className="text-[10px] font-medium text-[#967238] bg-[#FAF7F2] px-2 py-1 rounded border border-[#E5DFD3]">
                  {t.treatment}
                </span>
              </div>
            </div>
          ))}

          {/* Invitation to leave a review card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#EAE3D6] border border-[#C5A367]/40 flex flex-col justify-between text-center">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-white mx-auto flex items-center justify-center text-[#967238] shadow-sm">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#242220]">
                Já foi paciente da Dra. Carolina?
              </h3>
              <p className="text-xs text-[#6E6A64] leading-relaxed">
                Sua opinião é fundamental para ajudar outros moradores de Santa Cruz do Sul a encontrarem um atendimento odontológico ético e humanizado.
              </p>
            </div>

            <div className="mt-6">
              <a
                href={CLINIC_INFO.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#967238] hover:bg-[#805F2B] rounded-xl shadow-sm transition-colors"
              >
                <span>Avaliar no Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
