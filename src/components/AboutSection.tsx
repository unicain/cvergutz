import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { usePhotos } from '../context/PhotoContext';
import { Heart, Sparkles, Award, Camera, ShieldCheck, Check, Clock } from 'lucide-react';

interface Props {
  onOpenBooking: () => void;
  onOpenPhotoManager: (slotId?: 'photo1' | 'photo2' | 'photo3') => void;
}

export const AboutSection: React.FC<Props> = ({ onOpenBooking, onOpenPhotoManager }) => {
  const { slots } = usePhotos();
  const photo2 = slots.photo2;
  const [photoError, setPhotoError] = React.useState(false);
  const activeImage = photo2.customSrc || (!photoError ? photo2.defaultSrc : null);

  return (
    <section id="sobre" className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Photo Slot 2 (Atendimento & Consultório) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl p-3 bg-white border border-[#E5DFD3] shadow-lg">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4EFE6] flex items-center justify-center">
                  {activeImage ? (
                    <img
                      src={activeImage}
                      alt={photo2.alt}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FAF7F2] to-[#EAE3D6]">
                      <div className="w-24 h-24 rounded-full bg-[#FFFFFF] p-2 shadow-inner border border-[#E5DFD3] flex items-center justify-center mb-4">
                        <img 
                          src="./assets/aistudio/2_8f0ec99e.png" 
                          alt="Dra. Carolina Vergutz" 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#967238]">
                        Atendimento Clínico
                      </span>
                      <h4 className="font-serif text-xl font-semibold text-[#242220] mt-1">
                        Cuidado & Tecnologia
                      </h4>
                      <p className="text-xs text-[#6E6A64] mt-2 max-w-xs leading-relaxed">
                        Atendimento humanizado com foco em conforto, biossegurança e resultados estéticos naturais.
                      </p>
                      <button
                        onClick={() => onOpenPhotoManager('photo2')}
                        className="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#967238] bg-[#FFFFFF] border border-[#E5DFD3] rounded-lg hover:bg-[#F4EFE6] transition-colors shadow-sm"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Adicionar foto de atendimento</span>
                      </button>
                    </div>
                  )}

                  {/* Quick replace trigger */}
                  <button
                    onClick={() => onOpenPhotoManager('photo2')}
                    title="Substituir foto de atendimento"
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-[#242220] rounded-xl shadow-md border border-[#E5DFD3] backdrop-blur-sm transition-all"
                  >
                    <Camera className="w-4 h-4 text-[#967238]" />
                  </button>
                </div>

                {/* Subtitle card */}
                <div className="mt-3 p-3 bg-[#FAF7F2] rounded-xl text-center">
                  <p className="text-xs font-semibold text-[#242220]">Consultório no Centro / Higienópolis</p>
                  <p className="text-[11px] text-[#6E6A64]">Rua Borges de Medeiros, 274 · Sala 401</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Biography & Philosophy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
                Conheça a Profissional
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1">
                Dra. Carolina Vergutz
              </h2>
              <p className="text-sm font-medium text-[#6E6A64]">
                Cirurgiã-Dentista · CRO-RS 34390 · Santa Cruz do Sul
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#6E6A64] leading-relaxed">
              <p>
                Formada com sólida base acadêmica e protocolos científicos contemporâneos, a 
                <strong className="text-[#242220] font-medium"> Dra. Carolina Vergutz </strong> 
                iniciou os atendimentos em seu consultório em abril de 2026, com o propósito de transformar a experiência de ir ao dentista em Santa Cruz do Sul.
              </p>
              <p>
                Acreditamos que cada paciente é único. Esqueça aquela sensação de atendimento impessoal, filas demoradas ou procedimentos apressados. Aqui, reservamos tempo integral para ouvir suas queixas, tirar todas as suas dúvidas com calma e construir um plano de tratamento feito sob medida para você.
              </p>
            </div>

            {/* 4 Pillars of Care */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#967238] mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#242220]">Atendimento Sem Medo</h3>
                <p className="text-xs text-[#6E6A64] mt-1">
                  Abordagem gentil, anestesia confortável e acolhimento especial para pacientes que têm ansiedade odontológica.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#967238] mb-2">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#242220]">Materiais Contemporâneos</h3>
                <p className="text-xs text-[#6E6A64] mt-1">
                  Resinas biomiméticas, clareadores de alta performance e equipamentos que preservam a estrutura original dos dentes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#967238] mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#242220]">Pontualidade Rigorosa</h3>
                <p className="text-xs text-[#6E6A64] mt-1">
                  Seu tempo é precioso. Agendamentos espaçados para você ser atendido no horário marcado, sem esperas desnecessárias.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#967238] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-[#242220]">Transparência Total</h3>
                <p className="text-xs text-[#6E6A64] mt-1">
                  Explicações claras em cada etapa, sem termos complicados, com fotos e radiografias para você acompanhar a sua evolução.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#967238] hover:bg-[#805F2B] rounded-xl transition-colors shadow-sm"
              >
                Conversar com a Dra. Carolina no WhatsApp
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
