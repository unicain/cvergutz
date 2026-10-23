import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PhotoSlot {
  id: 'photo1' | 'photo2' | 'photo3';
  title: string;
  subtitle: string;
  defaultSrc: string;
  customSrc: string | null;
  alt: string;
}

interface PhotoContextType {
  slots: Record<'photo1' | 'photo2' | 'photo3', PhotoSlot>;
  updatePhoto: (slotId: 'photo1' | 'photo2' | 'photo3', dataUrl: string) => void;
  resetPhoto: (slotId: 'photo1' | 'photo2' | 'photo3') => void;
  resetAll: () => void;
  isCustomized: boolean;
}

// Visual placeholders carefully crafted matching Dra. Carolina's nude/gold luxury dental aesthetic
const DEFAULT_SLOTS: Record<'photo1' | 'photo2' | 'photo3', PhotoSlot> = {
  photo1: {
    id: 'photo1',
    title: 'Dra. Carolina Vergutz',
    subtitle: 'Cirurgiã-Dentista (CRO-RS 34390) no Consultório',
    defaultSrc: '/assets/aistudio/2_8f0ec99e.png',
    customSrc: null,
    alt: 'Dra. Carolina Vergutz - Cirurgiã-Dentista em Santa Cruz do Sul',
  },
  photo2: {
    id: 'photo2',
    title: 'Atendimento Clínico Humanizado',
    subtitle: 'Tecnologia moderna e cuidado sem pressa',
    defaultSrc: '/assets/aistudio/2_8f0ec99e.png',
    customSrc: null,
    alt: 'Dra. Carolina Vergutz realizando atendimento odontológico cuidadoso',
  },
  photo3: {
    id: 'photo3',
    title: 'Consultório no Centro / Higienópolis',
    subtitle: 'Rua Borges de Medeiros, 274 - Sala 401',
    defaultSrc: '/assets/aistudio/2_8f0ec99e.png',
    customSrc: null,
    alt: 'Consultório odontológico acolhedor da Dra. Carolina Vergutz',
  },
};

const PhotoContext = createContext<PhotoContextType | null>(null);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slots, setSlots] = useState<Record<'photo1' | 'photo2' | 'photo3', PhotoSlot>>(DEFAULT_SLOTS);

  useEffect(() => {
    try {
      const saved1 = localStorage.getItem('dra_carolina_photo1');
      const saved2 = localStorage.getItem('dra_carolina_photo2');
      const saved3 = localStorage.getItem('dra_carolina_photo3');

      if (saved1 || saved2 || saved3) {
        setSlots(prev => ({
          photo1: { ...prev.photo1, customSrc: saved1 || null },
          photo2: { ...prev.photo2, customSrc: saved2 || null },
          photo3: { ...prev.photo3, customSrc: saved3 || null },
        }));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const updatePhoto = (slotId: 'photo1' | 'photo2' | 'photo3', dataUrl: string) => {
    setSlots(prev => ({
      ...prev,
      [slotId]: {
        ...prev[slotId],
        customSrc: dataUrl,
      },
    }));
    try {
      localStorage.setItem(`dra_carolina_${slotId}`, dataUrl);
    } catch (e) {
      console.warn('LocalStorage limit reached for photo save', e);
    }
  };

  const resetPhoto = (slotId: 'photo1' | 'photo2' | 'photo3') => {
    setSlots(prev => ({
      ...prev,
      [slotId]: {
        ...prev[slotId],
        customSrc: null,
      },
    }));
    try {
      localStorage.removeItem(`dra_carolina_${slotId}`);
    } catch {
      // ignore
    }
  };

  const resetAll = () => {
    setSlots(DEFAULT_SLOTS);
    try {
      localStorage.removeItem('dra_carolina_photo1');
      localStorage.removeItem('dra_carolina_photo2');
      localStorage.removeItem('dra_carolina_photo3');
    } catch {
      // ignore
    }
  };

  const isCustomized = Boolean(slots.photo1.customSrc || slots.photo2.customSrc || slots.photo3.customSrc);

  return (
    <PhotoContext.Provider value={{ slots, updatePhoto, resetPhoto, resetAll, isCustomized }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
