/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import ServicesBento from './components/ServicesBento';
import EstimateCalculator from './components/EstimateCalculator';
import VoiceAssistantBanner from './components/VoiceAssistantBanner';
import AboutTeam from './components/AboutTeam';
import ReviewsAndProof from './components/ReviewsAndProof';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Water Heater Installation / Repair');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* 1. Top Navigation Bar (Strict 3-Zone Contract) */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 3. Hero Section with 2-Column Split, 16:9 Image, Trust Strip & Voice Prompt */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Card-Based Our Services Showcase */}
        <OurServices onSelectService={handleOpenBooking} />

        {/* 5. Core Capabilities & Diagnostic Bento Grid */}
        <ServicesBento onSelectService={handleOpenBooking} />

        {/* 5. Live Interactive Price Bracket & Dispatch Estimator */}
        <EstimateCalculator />

        {/* 6. Voice AI Assistant Feature Banner */}
        <VoiceAssistantBanner />

        {/* 7. Master Plumber Team Credentials & Standards */}
        <AboutTeam onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Local Neighborhood Testimonials & Proof */}
        <ReviewsAndProof />

        {/* 9. Direct Contact & Dispatch Hub */}
        <ContactSection />
      </main>

      {/* 10. Quiet Professional Footer */}
      <Footer />

      {/* Interactive Booking / Dispatch Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
