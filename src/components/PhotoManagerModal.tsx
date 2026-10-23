import React, { useRef, useState } from 'react';
import { usePhotos } from '../context/PhotoContext';
import { Camera, Upload, Trash2, X, Check, Image as ImageIcon } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeSlotId?: 'photo1' | 'photo2' | 'photo3';
}

export const PhotoManagerModal: React.FC<Props> = ({ isOpen, onClose, activeSlotId = 'photo1' }) => {
  const { slots, updatePhoto, resetPhoto } = usePhotos();
  const [selectedSlot, setSelectedSlot] = useState<'photo1' | 'photo2' | 'photo3'>(activeSlotId);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentSlot = slots[selectedSlot];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      alert('Por favor, selecione uma imagem de até 8MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        updatePhoto(selectedSlot, result);
        setSuccessMsg(`Foto ${selectedSlot === 'photo1' ? '1' : selectedSlot === 'photo2' ? '2' : '3'} atualizada com sucesso!`);
        setTimeout(() => setSuccessMsg(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#E5DFD3] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-[#242220]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD3]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#967238]">
              Gerenciador de Fotos
            </span>
            <h3 className="text-2xl font-serif text-[#242220]">
              Personalizar Fotos da Dra. Carolina
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6E6A64] hover:text-[#242220] rounded-full hover:bg-[#EAE3D6]/50 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-3 text-sm text-[#6E6A64] leading-relaxed">
          Você mencionou que possui 3 fotos da Dra. Carolina para o site. Você pode selecioná-las e carregá-las aqui diretamente do seu dispositivo. Elas serão salvas no navegador e exibidas instantaneamente em toda a página!
        </p>

        {/* Slot Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 mt-5 p-1 bg-[#EAE3D6]/60 rounded-xl">
          {(['photo1', 'photo2', 'photo3'] as const).map((slotId, idx) => {
            const hasCustom = Boolean(slots[slotId].customSrc);
            const isSelected = selectedSlot === slotId;
            return (
              <button
                key={slotId}
                onClick={() => setSelectedSlot(slotId)}
                className={`py-2 px-3 text-xs font-medium rounded-lg transition-all text-center ${
                  isSelected
                    ? 'bg-[#FFFFFF] text-[#242220] shadow-sm font-semibold'
                    : 'text-[#6E6A64] hover:text-[#242220]'
                }`}
              >
                <span>Foto 0{idx + 1}</span>
                {hasCustom && (
                  <span className="block text-[10px] text-[#967238] font-normal">Personalizada</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Slot Preview & Action */}
        <div className="mt-6 p-4 rounded-xl border border-[#E5DFD3] bg-[#FFFFFF] flex flex-col sm:flex-row gap-5 items-center">
          <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-[#F4EFE6] border border-[#E5DFD3] shrink-0 shadow-inner flex items-center justify-center">
            {currentSlot.customSrc ? (
              <img
                src={currentSlot.customSrc}
                alt={currentSlot.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="p-3 text-center flex flex-col items-center justify-center text-[#967238]">
                <img 
                  src="./assets/aistudio/2_8f0ec99e.png" 
                  alt="Logo Dra. Carolina" 
                  className="w-20 h-20 object-contain opacity-80"
                />
                <span className="mt-1 text-[11px] font-medium text-[#6E6A64]">Identidade Padrão</span>
              </div>
            )}
          </div>

          <div className="flex-1 w-full text-center sm:text-left">
            <h4 className="font-semibold text-base text-[#242220]">{currentSlot.title}</h4>
            <p className="text-xs text-[#6E6A64] mt-0.5">{currentSlot.subtitle}</p>

            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#967238] hover:bg-[#83612D] rounded-lg transition-colors shadow-sm"
              >
                <Upload className="w-3.5 h-3.5" />
                Carregar Arquivo da Foto
              </button>

              {currentSlot.customSrc && (
                <button
                  onClick={() => resetPhoto(selectedSlot)}
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors border border-rose-200"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Restaurar
                </button>
              )}
            </div>

            {successMsg && (
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-700 font-medium">
                <Check className="w-3.5 h-3.5" />
                {successMsg}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-[#E5DFD3]">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#242220] bg-[#EAE3D6] hover:bg-[#DDD4C4] rounded-lg transition-colors"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
