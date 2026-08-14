import React from 'react';
import { SalonProvider } from './context/SalonContext';
import SalonApp from './App';
import './index.css';

/**
 * Gents Salon Demo Template — Royal Crown Gents Salon
 * =====================================================
 * A second gents salon demo built on the same proven Afroza architecture,
 * configured as a completely separate fictional business:
 *
 * - Business: Royal Crown Gents Salon
 * - Location: Al Rigga Street, Deira, Dubai, UAE
 * - Phone/WhatsApp: +971 52 845 3320
 * - Theme: Navy + silver (distinct from Afroza's amber/black)
 * - Services: Royal Signature Package, Executive Grooming Package, etc.
 * - Barbers: Different fictional team
 * - Testimonials: Different fictional clients
 * - Appointments: Different demo bookings
 *
 * Routes (namespaced under /template/gents-salon-demo):
 * - /template/gents-salon-demo           → public frontend
 * - /template/gents-salon-demo/admin     → admin dashboard (demo mode)
 * - /template/gents-salon-demo/admin/*   → admin sub-pages
 *
 * This demonstrates that the BRANIFY template engine can produce
 * multiple distinct gents salon webapps from the same codebase —
 * each with its own branding, location, services, and data.
 */
export const GentsSalonDemoTemplate: React.FC = () => {
  return (
    <SalonProvider>
      <SalonApp />
    </SalonProvider>
  );
};

export default GentsSalonDemoTemplate;
