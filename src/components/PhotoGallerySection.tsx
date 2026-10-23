import React from 'react';
import { usePhotos } from '../context/PhotoContext';
import { Camera, Sparkles, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenPhotoManager: (slotId?: 'photo1' | 'photo2' | 'photo3') => void;
}

export const PhotoGallerySection: React.FC<Props> = ({ onOpenPhotoManager }) => {
  const { slots } = usePhotos();

  const galleryItems = [
    {
      slotId: 'photo1' as const,
      tag: 'Apresentação & Perfil',
      slot: slots.photo1,
      desc: 'Dra. Carolina Vergutz · Cirurgiã-Dentista (CRO-RS 34390)',
    },
    {
      slotId: 'photo2' as const,
      tag: 'Atendimento & Tecnologia',
      slot: slots.photo2,
      desc: 'Biossegurança rigorosa e atendimento sem pressa ou dor',
    },
    {
      slotId: 'photo3' as const,
      tag: 'Estrutura & Acolhimento',
      slot: slots.photo3,
      desc: 'Rua Borges de Medeiros, 274 · Sala 401 (Centro / Higienópolis)',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
              Espaço & Identidade
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1">
              Conheça Nosso Espaço em Santa Cruz do Sul
            </h2>
            <p className="mt-2 text-sm text-[#6E6A64] max-w-xl">
              Um ambiente planejado nos mínimos detalhes para transmitir serenidade, aconchego e máxima higiene.
            </p>
          </div>

          <button
            onClick={() => onOpenPhotoManager('photo1')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#967238] bg-white border border-[#E5DFD3] hover:border-[#967238] rounded-xl transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <Camera className="w-4 h-4" />
            <span>Gerenciar 3 fotos da Dra. Carolina</span>
          </button>
        </div>

        {/* 3-Card Grid for the 3 Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const hasCustom = Boolean(item.slot.customSrc);
            return (
              <div 
                key={item.slotId}
                className="group relative rounded-2xl bg-white border border-[#E5DFD3] p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#F4EFE6] flex items-center justify-center">
                  {item.slot.customSrc ? (
                    <img
                      src={item.slot.customSrc}
                      alt={item.slot.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FAF7F2] to-[#EAE3D6]/70">
                      <div className="w-20 h-20 rounded-full bg-white p-2 shadow-sm border border-[#E5DFD3] flex items-center justify-center mb-3">
                        <img 
                          src="/assets/aistudio/2_8f0ec99e.png" 
                          alt="Dra Carolina" 
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#967238]">
                        Foto 0{index + 1}
                      </span>
                      <h4 className="font-serif text-lg font-medium text-[#242220] mt-1">
                        {item.slot.title}
                      </h4>
                      <p className="text-xs text-[#6E6A64] mt-1.5 leading-relaxed">
                        {item.slot.subtitle}
                      </p>
                      
                      <button
                        onClick={() => onOpenPhotoManager(item.slotId)}
                        className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-[#967238] bg-white border border-[#E5DFD3] rounded-lg hover:bg-[#F4EFE6] transition-colors shadow-sm"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Carregar esta foto</span>
                      </button>
                    </div>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#242220]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-[10px] font-medium tracking-wide">
                    {item.tag}
                  </div>

                  {/* Edit button */}
                  <button
                    onClick={() => onOpenPhotoManager(item.slotId)}
                    title={`Editar ou trocar Foto 0${index + 1}`}
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-[#242220] rounded-xl shadow-md border border-[#E5DFD3] backdrop-blur-sm transition-all"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#967238]" />
                  </button>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-between text-xs text-[#6E6A64]">
                    <span className="font-medium text-[#242220]">{item.slot.title}</span>
                    {hasCustom && (
                      <span className="text-emerald-700 font-medium text-[11px] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Ativa
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#6E6A64] mt-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
