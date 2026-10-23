import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { usePhotos } from '../context/PhotoContext';
import { 
  MessageCircle, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Camera, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface Props {
  onOpenBooking: (treatmentTitle?: string) => void;
  onOpenPhotoManager: (slotId?: 'photo1' | 'photo2' | 'photo3') => void;
}

export const HeroSection: React.FC<Props> = ({ onOpenBooking, onOpenPhotoManager }) => {
  const { slots } = usePhotos();
  const photo1 = slots.photo1;
  const [photoError, setPhotoError] = React.useState(false);
  const activeImage = photo1.customSrc || (!photoError ? photo1.defaultSrc : null);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E5DFD3]">
      {/* Subtle brand ambient accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#C5A367]/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-[#EAE3D6]/70 rounded-full blur-2xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Notice for Emergency & Search Intent */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 text-xs text-[#6E6A64]">
          <span className="font-semibold text-[#967238] uppercase tracking-wider">
            {CLINIC_INFO.cro}
          </span>
          <span aria-hidden="true">·</span>
          <span>Santa Cruz do Sul - RS</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#242220] font-medium">Borges de Medeiros, 274</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-medium">
            Plantão para Urgências
          </span>
        </div>

        {/* 2-Column Desktop Grid with balanced heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copy & Conversions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#242220] leading-[1.12] tracking-tight text-balance">
              Odontologia humanizada, cuidadosa e sem pressa para o seu sorriso.
            </h1>

            <p className="text-base sm:text-lg text-[#6E6A64] max-w-2xl leading-relaxed">
              Atendimento acolhedor e personalizado conduzido exclusivamente pela 
              <strong className="text-[#242220] font-semibold"> Dra. Carolina Vergutz </strong> 
              no Centro / Higienópolis de Santa Cruz do Sul. Protocolos modernos de estética, clareamento, clínica geral e alívio imediato da dor.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#3D3A36]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#967238] shrink-0" />
                <span>Atendimento 100% individualizado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#967238] shrink-0" />
                <span>Anestesia moderna e sem desconforto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#967238] shrink-0" />
                <span>Sala 401 com acessibilidade & elevador</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#967238] shrink-0" />
                <span>Reserva de horário sem salas de espera cheias</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#967238] hover:bg-[#805F2B] active:scale-[0.98] rounded-xl transition-all shadow-md group"
              >
                <MessageCircle className="w-5 h-5 text-white/90" />
                <span>Agendar Consulta no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#242220] bg-[#FFFFFF] hover:bg-[#F4EFE6] border border-[#E5DFD3] rounded-xl transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#967238]" />
                <span>Ver Rota no Google Maps</span>
              </a>
            </div>

            {/* Trust and Rating strip */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-[#6E6A64]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#242220]">5.0</span>
                <span>no Google Meu Negócio</span>
              </div>
              <span aria-hidden="true" className="text-[#D8CEBE]">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#967238]" />
                <span>Clínica Inaugurada em Abril/2026</span>
              </div>
            </div>

          </div>

          {/* Column 2: Photo Slot 1 & Focal Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#FFFFFF] to-[#EAE3D6] border border-[#E5DFD3] shadow-xl">
                
                {/* Main image container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4EFE6] flex items-center justify-center">
                  {activeImage ? (
                    <img
                      src={activeImage}
                      alt={photo1.alt}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Default high-aesthetic brand representation */
                    <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FAF7F2] to-[#EAE3D6]">
                      <div className="relative w-44 h-44 rounded-full bg-[#FFFFFF] p-3 shadow-md border border-[#E5DFD3] flex items-center justify-center mb-6">
                        <img
                          src="./assets/aistudio/2_8f0ec99e.png"
                          alt="Dra. Carolina Vergutz - Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-[#242220]">
                        Dra. Carolina Vergutz
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-[#967238] font-semibold mt-1">
                        Cirurgiã-Dentista · CRO-RS 34390
                      </p>
                      <p className="text-xs text-[#6E6A64] mt-3 max-w-xs leading-relaxed">
                        Consultório Odontológico acolhedor no Centro / Higienópolis de Santa Cruz do Sul.
                      </p>

                      <button
                        onClick={() => onOpenPhotoManager('photo1')}
                        className="mt-6 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#967238] bg-[#FFFFFF] border border-[#E5DFD3] rounded-lg hover:bg-[#F4EFE6] transition-colors shadow-sm"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Inserir foto da Dra. Carolina</span>
                      </button>
                    </div>
                  )}

                  {/* Corner button to easily replace photo */}
                  <button
                    onClick={() => onOpenPhotoManager('photo1')}
                    title="Substituir foto de apresentação"
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-[#242220] rounded-xl shadow-md border border-[#E5DFD3] backdrop-blur-sm transition-all"
                  >
                    <Camera className="w-4 h-4 text-[#967238]" />
                  </button>
                </div>

                {/* Floating badge bottom */}
                <div className="absolute -bottom-5 left-6 right-6 bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#E5DFD3] p-3.5 rounded-2xl shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#242220]">Atendimento com Hora Marcada</p>
                    <p className="text-[11px] text-[#6E6A64]">Seg a Sex: 08h às 18h30 · Sáb: 08h30 às 12h</p>
                  </div>
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-[#967238] hover:bg-[#805F2B] rounded-lg transition-colors whitespace-nowrap"
                  >
                    Consultar horários
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Quick Proof Strip below hero */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E5DFD3]/60">
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]/70">
            <span className="block font-serif text-2xl font-bold text-[#967238] tabular-nums">
              100%
            </span>
            <span className="text-xs font-medium text-[#242220] block mt-0.5">
              Atendimento Exclusivo
            </span>
            <span className="text-[11px] text-[#6E6A64] block">
              Sempre com a Dra. Carolina
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]/70">
            <span className="block font-serif text-2xl font-bold text-[#967238] tabular-nums">
              5.0 ★
            </span>
            <span className="text-xs font-medium text-[#242220] block mt-0.5">
              Avaliação Máxima
            </span>
            <span className="text-[11px] text-[#6E6A64] block">
              No Google Meu Negócio
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]/70">
            <span className="block font-serif text-2xl font-bold text-[#967238] tabular-nums">
              0 min
            </span>
            <span className="text-xs font-medium text-[#242220] block mt-0.5">
              Sem Fila de Espera
            </span>
            <span className="text-[11px] text-[#6E6A64] block">
              Pontualidade rigorosa
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DFD3]/70">
            <span className="block font-serif text-2xl font-bold text-[#967238] tabular-nums">
              Centro
            </span>
            <span className="text-xs font-medium text-[#242220] block mt-0.5">
              Higienópolis / Centro
            </span>
            <span className="text-[11px] text-[#6E6A64] block">
              Borges de Medeiros, 274
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
