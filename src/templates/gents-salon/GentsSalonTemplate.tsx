import React from 'react';
import { SalonProvider } from './context/SalonContext';
import AfrozaApp from './App';
import './index.css';

/**
 * Gents Salon Template — Afroza Gents Salon
 * ===========================================
 * This is the complete Afroza Gents Salon application integrated as a
 * self-contained template within BRANIFY AI. It includes:
 *
 * - Full customer frontend (hero, services, pricing, gallery, reviews, location)
 * - Complete admin dashboard (appointments, services, offers, gallery, reviews, settings)
 * - Real business images (9 high-quality JPGs)
 * - PWA support (manifest, service worker, install prompt)
 * - Booking modal with WhatsApp integration
 * - Legal pages (privacy, terms, refunds, cookies, disclaimer)
 * - Template customizer (business name, phone, colors, etc.)
 * - Supabase integration (appointments, reviews, gallery sync)
 *
 * Routes (namespaced under /template/gents-salon):
 * - /template/gents-salon           → public frontend
 * - /template/gents-salon/admin     → admin dashboard (login required)
 * - /template/gents-salon/admin/*   → admin sub-pages
 *
 * The Afroza app uses window.location.pathname for internal routing,
 * which works correctly when mounted inside BRANIFY's React Router.
 */
export const GentsSalonTemplate: React.FC = () => {
  return (
    <SalonProvider>
      <AfrozaApp />
    </SalonProvider>
  );
};

export default GentsSalonTemplate;
