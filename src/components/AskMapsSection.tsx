import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Navigation, Compass, ExternalLink, Clock, Car, PhoneCall, Building2, Check } from 'lucide-react';

export const AskMapsSection: React.FC = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('Centro');

  const origins = [
    { name: 'Centro', time: '1 a 3 min', desc: 'A poucas quadras da Marechal Floriano e Praça Getúlio Vargas' },
    { name: 'Higienópolis', time: '2 a 4 min', desc: 'Acesso imediato pela continuação da Borges de Medeiros' },
    { name: 'Universitário / UNISC', time: '6 a 8 min', desc: 'Via Avenida Independência direto ao Centro' },
    { name: 'Santo Inácio / Arroio Grande', time: '7 a 10 min', desc: 'Acesso fluido com vagas de estacionamento próximas' },
  ];

  return (
    <section id="localizacao" className="py-20 bg-[#FAF7F2] border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
            Localização Estratégica · Ask Maps & Google Meu Negócio
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#242220] mt-1 text-balance">
            Fácil de Chegar no Centro / Higienópolis de Santa Cruz do Sul
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6A64] leading-relaxed">
            Consultório moderno e acessível na Rua Borges de Medeiros, com elevador, facilidade de estacionamento e localização central.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Clinic Coordinates & Instructions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#E5DFD3] shadow-sm">
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] flex items-center justify-center text-[#967238] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#967238]">
                    Endereço Completo
                  </span>
                  <h3 className="text-lg font-semibold text-[#242220] leading-snug">
                    {CLINIC_INFO.street} - {CLINIC_INFO.complement}
                  </h3>
                  <p className="text-xs text-[#6E6A64] mt-0.5">
                    Bairro {CLINIC_INFO.neighborhood} · CEP {CLINIC_INFO.postalCode}
                  </p>
                  <p className="text-xs font-medium text-[#242220] mt-0.5">
                    Santa Cruz do Sul - RS
                  </p>
                </div>
              </div>

              {/* Building Facilities */}
              <div className="space-y-2.5 pt-4 border-t border-[#E5DFD3]/60 text-xs text-[#3D3A36]">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#967238] shrink-0" />
                  <span>Edifício com elevador moderno e acessibilidade para PCD</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#967238] shrink-0" />
                  <span>Facilidade de estacionamento rotativo e garagens na rua</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#967238] shrink-0" />
                  <span>Atendimento pontual com hora marcada</span>
                </div>
              </div>

              {/* Interactive Distance calculator by neighborhood */}
              <div className="pt-4 border-t border-[#E5DFD3]/60">
                <p className="text-xs font-semibold text-[#242220] mb-2.5">
                  Tempo estimado de deslocamento:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {origins.map((o) => (
                    <button
                      key={o.name}
                      onClick={() => setSelectedOrigin(o.name)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedOrigin === o.name
                          ? 'bg-[#FAF7F2] border-[#967238] text-[#242220] shadow-sm'
                          : 'bg-white border-[#E5DFD3] text-[#6E6A64] hover:border-[#C5A367]/60'
                      }`}
                    >
                      <span className="block text-xs font-medium text-[#242220]">{o.name}</span>
                      <span className="text-[11px] text-[#967238] font-semibold">{o.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Search / Ask Maps Answer Capsule */}
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DFD3] text-xs text-[#6E6A64] leading-relaxed">
                <span className="font-semibold text-[#242220] block mb-1">
                  💡 Como chegar no consultório da Dra. Carolina Vergutz:
                </span>
                Siga pela Rua Borges de Medeiros até o número 274, próximo ao cruzamento que liga o Centro ao bairro Higienópolis. Suba pelo elevador até o 4º andar (Sala 401).
              </div>

            </div>

            {/* Direct Map Action Buttons */}
            <div className="mt-6 pt-5 border-t border-[#E5DFD3]/60 flex flex-col sm:flex-row gap-3">
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#967238] hover:bg-[#805F2B] rounded-xl shadow-sm transition-colors text-center whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={CLINIC_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#242220] bg-[#FAF7F2] hover:bg-[#EAE3D6] border border-[#E5DFD3] rounded-xl transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-[#967238]" />
                <span>Abrir Waze</span>
              </a>
            </div>
          </div>

          {/* Column 2: Visual Map Embed Representation (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E5DFD3] overflow-hidden shadow-sm flex flex-col justify-between">
            
            {/* Top Bar of Map Container */}
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E5DFD3] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-[#242220]">
                  Google Meu Negócio · Perfil Oficial Verificado
                </span>
              </div>
              <a
                href={CLINIC_INFO.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#967238] hover:text-[#805F2B] flex items-center gap-1"
              >
                <span>Ver no Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Styled Map View */}
            <div className="relative min-h-[380px] bg-[#EAE5D9] flex items-center justify-center p-6 overflow-hidden">
              {/* Map grid streets simulation */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="street-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6E6A64" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#street-grid)" />
                </svg>
              </div>

              {/* Main Streets representation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Rua Borges de Medeiros line */}
                <div className="w-full h-8 bg-white/70 -rotate-12 absolute shadow-sm flex items-center justify-center">
                  <span className="text-[10px] font-bold tracking-widest text-[#6E6A64] uppercase">
                    Rua Borges de Medeiros
                  </span>
                </div>
                {/* Transversal street */}
                <div className="h-full w-8 bg-white/70 rotate-78 absolute shadow-sm" />
              </div>

              {/* Pin at the center */}
              <div className="relative z-10 flex flex-col items-center animate-bounce-subtle">
                <div className="p-3 bg-white rounded-2xl shadow-xl border-2 border-[#967238] flex items-center gap-3">
                  <img
                    src="/assets/aistudio/2_8f0ec99e.png"
                    alt="Dra. Carolina Vergutz"
                    className="w-10 h-10 object-contain rounded-full bg-[#FAF7F2] p-1 border border-[#E5DFD3]"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#242220]">
                      Dra. Carolina Vergutz
                    </h4>
                    <p className="text-[11px] text-[#967238] font-medium">
                      R. Borges de Medeiros, 274 · Sala 401
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-[#6E6A64]">
                      <span>★ 5.0 (Google)</span>
                      <span>· Centro / Higienópolis</span>
                    </div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#967238] rotate-45 -mt-2 shadow-md" />
              </div>

              {/* Nearby reference tags */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-medium text-[#6E6A64] border border-[#E5DFD3]">
                📍 Praça Getúlio Vargas (~3 min)
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-medium text-[#6E6A64] border border-[#E5DFD3]">
                📍 Parque da Oktoberfest (~4 min)
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-medium text-[#6E6A64] border border-[#E5DFD3]">
                📍 Bairro Higienópolis
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="p-4 bg-[#FAF7F2] border-t border-[#E5DFD3] flex flex-wrap items-center justify-between text-xs text-[#6E6A64] gap-2">
              <span>Coordenadas: <strong>-29.7155, -52.4286</strong> (Santa Cruz do Sul)</span>
              <span>Dra. Carolina Vergutz (CRO-RS 34390)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
