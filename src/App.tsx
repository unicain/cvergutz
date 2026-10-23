/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { UrgencyBanner } from './components/UrgencyBanner';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TreatmentModal } from './components/TreatmentModal';
import { SmileQuizSection } from './components/SmileQuizSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AskMapsSection } from './components/AskMapsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { BookingModal } from './components/BookingModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { Treatment } from './data/clinicData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTreatment, setBookingTreatment] = useState<string | undefined>(undefined);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [photoManagerOpen, setPhotoManagerOpen] = useState(false);
  const [activePhotoSlot, setActivePhotoSlot] = useState<'photo1' | 'photo2' | 'photo3'>('photo1');

  const handleOpenBooking = (treatmentTitle?: string) => {
    setBookingTreatment(treatmentTitle);
    setBookingOpen(true);
  };

  const handleOpenPhotoManager = (slotId: 'photo1' | 'photo2' | 'photo3' = 'photo1') => {
    setActivePhotoSlot(slotId);
    setPhotoManagerOpen(true);
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242220]">
        
        {/* Navigation Bar */}
        <Navbar 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenPhotoManager={() => handleOpenPhotoManager('photo1')}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section with Photo Slot 1 & Focal Anchor */}
          <HeroSection
            onOpenBooking={handleOpenBooking}
            onOpenPhotoManager={handleOpenPhotoManager}
          />

          {/* Emergency / Urgency Odontológica Banner */}
          <UrgencyBanner onOpenBooking={handleOpenBooking} />

          {/* About Section with Photo Slot 2 */}
          <AboutSection
            onOpenBooking={() => handleOpenBooking()}
            onOpenPhotoManager={handleOpenPhotoManager}
          />

          {/* Treatments & Bento Grid */}
          <TreatmentsSection
            onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
            onOpenBooking={handleOpenBooking}
          />

          {/* Interactive Smile Quiz / Triage */}
          <SmileQuizSection onOpenBooking={handleOpenBooking} />

          {/* Why Choose Us vs Franchise Clinics */}
          <WhyChooseUsSection />

          {/* 3 Photos Showcase & Management */}
          <PhotoGallerySection onOpenPhotoManager={handleOpenPhotoManager} />

          {/* Real Patient Testimonials & Google My Business Rating */}
          <TestimonialsSection />

          {/* Ask Maps & Location in Santa Cruz do Sul */}
          <AskMapsSection />

          {/* FAQ Section for SEO */}
          <FaqSection onOpenBooking={() => handleOpenBooking()} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Mobile Bar for 74% Mobile Traffic */}
        <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Modals */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          initialTreatment={bookingTreatment}
        />

        <TreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
          onOpenBooking={handleOpenBooking}
        />

        <PhotoManagerModal
          isOpen={photoManagerOpen}
          onClose={() => setPhotoManagerOpen(false)}
          activeSlotId={activePhotoSlot}
        />

      </div>
    </PhotoProvider>
  );
}
