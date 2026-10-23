import React from 'react';
import { UserCheck, Clock, ShieldCheck, HeartHandshake, PhoneCall, Sparkles, X, Check } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-[#F4EFE6]/60 border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
            Diferenciais Claros
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
            Por que escolher um consultório acolhedor e exclusivo?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6A64] leading-relaxed">
            Em vez da rotatividade acelerada de grandes redes e franquias, descubra o valor de ser atendido por quem realmente se importa com você em Santa Cruz do Sul.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Consultório Dra. Carolina */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#C5A367]/50 shadow-md relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#967238]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#967238]">
                Consultório Dra. Carolina Vergutz
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#242220] mb-6">
              Odontologia Personalizada & Humanizada
            </h3>

            <ul className="space-y-4 text-sm text-[#3D3A36]">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#242220] font-semibold block">A mesma profissional do início ao fim:</strong>
                  <span className="text-[#6E6A64] text-xs">
                    Toda consulta, avaliação e retorno é realizado diretamente pela Dra. Carolina (CRO-RS 34390).
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#242220] font-semibold block">Tempo dedicado e sem pressa:</strong>
                  <span className="text-[#6E6A64] text-xs">
                    Consultas com intervalo generoso para ouvir suas dúvidas, explicar procedimentos e anestesiar no seu ritmo.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#242220] font-semibold block">Pontualidade no horário marcado:</strong>
                  <span className="text-[#6E6A64] text-xs">
                    Sem salas de espera superlotadas ou atrasos crônicos. Seu tempo é respeitado.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#242220] font-semibold block">Contato direto e pós-atendimento:</strong>
                  <span className="text-[#6E6A64] text-xs">
                    Suporte pelo WhatsApp para orientações pós-procedimento com quem de fato realizou seu tratamento.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: Clínicas de Franquia / Grande Massa */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#6E6A64]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A8A29E]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A8A29E]">
                Clínicas de Franquia & Massa
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#6E6A64] mb-6">
              Atendimento Padrão em Larga Escala
            </h3>

            <ul className="space-y-4 text-sm text-[#6E6A64]">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3D3A36] font-medium block">Alta rotatividade de profissionais:</strong>
                  <span className="text-xs">
                    Você começa com um dentista e nas próximas consultas é atendido por profissionais diferentes.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3D3A36] font-medium block">Atendimento com meta de velocidade:</strong>
                  <span className="text-xs">
                    Consultas rápidas e encaixadas com pouco tempo para conversar ou entender suas particularidades.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3D3A36] font-medium block">Salas de espera cheias:</strong>
                  <span className="text-xs">
                    Filas frequentes de espera gerando ansiedade e perda de tempo na sua rotina.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3D3A36] font-medium block">Atendimento por robôs:</strong>
                  <span className="text-xs">
                    Dificuldade de tirar dúvidas simples pós-operatórias com a equipe que atendeu você.
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
