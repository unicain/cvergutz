import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Instagram, MapPin, Phone, Mail, ArrowUp, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242220] text-[#FAF7F2] pt-16 pb-28 md:pb-16 border-t border-[#3D3A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Professional Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./assets/aistudio/2_8f0ec99e.png"
                alt="Logo Dra. Carolina Vergutz"
                className="w-12 h-12 object-contain rounded-full bg-[#FAF7F2] p-1"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                  Carolina Vergutz
                </h3>
                <p className="text-[11px] text-[#C5A367] tracking-widest uppercase">
                  Cirurgiã-Dentista
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">
              Odontologia humanizada, estética e acolhedora em Santa Cruz do Sul - RS. Atendimento exclusivo e individualizado com foco em sua saúde e bem-estar.
            </p>

            <div className="text-xs text-[#C5A367] font-semibold">
              {CLINIC_INFO.cro}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A367]">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Dra. Carolina
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-white transition-colors">
                  Tratamentos & Procedimentos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais de Atendimento
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização no Centro / Higienópolis
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Horários */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A367]">
              Atendimento & Endereço
            </h4>
            <div className="space-y-2 text-xs text-[#FAF7F2]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A367] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.street} - {CLINIC_INFO.complement}<br />
                  Centro / Higienópolis<br />
                  Santa Cruz do Sul - RS<br />
                  CEP {CLINIC_INFO.postalCode}
                </span>
              </p>
              <div className="pt-2 text-[11px] text-[#FAF7F2]/60">
                <p><strong>Seg a Sex:</strong> 08:00 às 18:30</p>
                <p><strong>Sábados:</strong> 08:30 às 12:00</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A367]">
              Conecte-se
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/80">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C5A367] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C5A367]" />
                <span>@{CLINIC_INFO.instagram}</span>
              </a>

              <a
                href={CLINIC_INFO.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C5A367] transition-colors"
              >
                <span className="w-4 h-4 rounded-full bg-[#C5A367] text-[#242220] flex items-center justify-center font-bold text-[10px]">
                  G
                </span>
                <span>Google Meu Negócio (Perfil Oficial)</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Voltar ao topo</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/50 text-center md:text-left">
          <p>
            © 2026 Dra. Carolina Vergutz · Cirurgiã-Dentista (CRO-RS 34390). Todos os direitos reservados.
          </p>
          <p className="max-w-md">
            As imagens e conteúdos deste site têm caráter informativo, em conformidade com o Código de Ética Odontológica (Resolução CFO 196/2019).
          </p>
        </div>

      </div>
    </footer>
  );
};
