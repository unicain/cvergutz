import React from 'react';
import { UserCheck, Clock, ShieldCheck, HeartHandshake, Sparkles, X, Check, Heart } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-[#F4EFE6]/60 border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
            Uma Nova Experiência Odontológica
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
            Cuidar do seu sorriso não precisa ser um momento desconfortável
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6A64] leading-relaxed">
            Sabemos que ir ao dentista desperta receios e inseguranças em muitas pessoas. Por isso, cada detalhe do nosso consultório foi pensado para transformar a sua relação com a saúde bucal em Santa Cruz do Sul.
          </p>
        </div>

        {/* Comparison Cards: Receios Tradicionais vs Compromisso da Dra. Carolina */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Receios Comuns (O que o paciente deixa para trás) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E5DFD3] text-[#6E6A64] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A8A29E]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C877E]">
                  Receios Tradicionais de Consultório
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#4A4742] mb-6">
                O Que Você Deixa Para Trás
              </h3>

              <ul className="space-y-4 text-sm text-[#6E6A64]">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D3A36] font-medium block">Medo de sentir dor ou desconforto:</strong>
                    <span className="text-xs">
                      A ansiedade comum provocada por procedimentos desconfortáveis ou experiências traumáticas no passado.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D3A36] font-medium block">Consultas apressadas e sem diálogo:</strong>
                    <span className="text-xs">
                      Sair do atendimento sem entender claramente o diagnóstico, os motivos dos procedimentos ou os custos.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D3A36] font-medium block">Atrasos crônicos e salas cheias:</strong>
                    <span className="text-xs">
                      A perda de tempo e o estresse de esperar muito além do horário marcado em recepções lotadas.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3D3A36] font-medium block">Insegurança após o atendimento:</strong>
                    <span className="text-xs">
                      Dificuldade para tirar dúvidas simples ou receber orientações no pós-procedimento ao chegar em casa.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5DFD3]/60 text-xs text-[#8C877E] italic">
              Entendemos a sua ansiedade e cuidamos de você com respeito ao seu tempo e ao seu ritmo.
            </div>
          </div>

          {/* Card 2: A Experiência com a Dra. Carolina (Destaque Nobre) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border-2 border-[#C5A367]/50 shadow-md relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#967238]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#967238]">
                  O Nosso Compromisso com Você
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#242220] mb-6">
                A Experiência no Nosso Consultório
              </h3>

              <ul className="space-y-4 text-sm text-[#3D3A36]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220] font-semibold block">Anestesia suave e respeito ao seu ritmo:</strong>
                    <span className="text-[#6E6A64] text-xs">
                      Técnicas anestésicas confortáveis, acolhimento sem pressa e pausa a qualquer momento que você desejar.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220] font-semibold block">Tempo dedicado e escuta atenta:</strong>
                    <span className="text-[#6E6A64] text-xs">
                      Consultas com intervalo generoso para tirar todas as dúvidas, explicar cada detalhe com fotos e calma.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220] font-semibold block">A mesma profissional do início ao fim:</strong>
                    <span className="text-[#6E6A64] text-xs">
                      Avaliação, planejamento, tratamento e acompanhamento conduzidos exclusivamente pela Dra. Carolina (CRO-RS 34390).
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220] font-semibold block">Pontualidade e ambiente silencioso:</strong>
                    <span className="text-[#6E6A64] text-xs">
                      Horário reservado para você no Edifício Leonardo da Vinci, sem esperas desnecessárias ou tumulto.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#967238] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#242220] font-semibold block">Suporte direto pelo WhatsApp:</strong>
                    <span className="text-[#6E6A64] text-xs">
                      Acompanhamento próximo no pós-atendimento para você se sentir seguro e acolhido antes, durante e depois.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5DFD3]/60 flex items-center gap-2 text-xs font-semibold text-[#967238]">
              <Heart className="w-4 h-4 text-[#967238]" />
              <span>Odontologia humanizada no Centro / Higienópolis de Santa Cruz do Sul.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
