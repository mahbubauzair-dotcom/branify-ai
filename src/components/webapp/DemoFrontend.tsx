import React, { useState, useEffect } from 'react';
import { CategoryConfig } from '../../data/webapp/types';
import { HeroSection, AboutSection, ServicesSection, PricingSection, TeamSection, GallerySection, BookingSection, TestimonialsSection, LocationSection, FaqSection, WhatsAppCtaSection, PwaInstallSection, FooterSection, DemoNavbar } from './sections';
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton';

interface DemoFrontendProps {
  config: CategoryConfig;
  customization?: {
    businessName?: string;
    primaryColor?: string;
    accentColor?: string;
    phone?: string;
    whatsapp?: string;
    address?: string;
  };
  legalPage?: string | null;
}

/**
 * Universal demo frontend renderer.
 * Composes sections based on the category config's `sections` array.
 * Applies the category theme via CSS variables on the root wrapper.
 */
export const DemoFrontend: React.FC<DemoFrontendProps> = ({ config, customization, legalPage }) => {
  const [bookingOpen, setBookingOpen] = useState(false);

  // Apply customization overrides on top of the category theme
  const theme = {
    ...config.theme,
    primary: customization?.primaryColor || config.theme.primary,
    accent: customization?.accentColor || config.theme.accent
  };

  const business = {
    ...config.business,
    name: customization?.businessName || config.business.name,
    phone: customization?.phone || config.business.phone,
    whatsapp: customization?.whatsapp || config.business.whatsapp,
    address: customization?.address || config.business.address
  };

  const sectionMap: Record<string, React.ReactNode> = {
    hero: <HeroSection key="hero" hero={config.hero} business={business} theme={theme} onBookClick={() => setBookingOpen(true)} />,
    about: <AboutSection key="about" about={config.about} theme={theme} />,
    services: <ServicesSection key="services" services={config.services} theme={theme} onBookClick={() => setBookingOpen(true)} />,
    pricing: <PricingSection key="pricing" pricing={config.pricing} theme={theme} onBookClick={() => setBookingOpen(true)} />,
    team: <TeamSection key="team" team={config.team} theme={theme} />,
    gallery: <GallerySection key="gallery" gallery={config.gallery} theme={theme} />,
    booking: <BookingSection key="booking" business={business} services={config.services} theme={theme} />,
    testimonials: <TestimonialsSection key="testimonials" testimonials={config.testimonials} theme={theme} />,
    location: <LocationSection key="location" business={business} theme={theme} />,
    faq: <FaqSection key="faq" faq={config.faq} theme={theme} />,
    'whatsapp-cta': <WhatsAppCtaSection key="whatsapp" business={business} whatsappMessage={config.whatsappMessage} theme={theme} />,
    'pwa-install': <PwaInstallSection key="pwa" pwa={config.pwa} theme={theme} />
  };

  // If a legal page is requested, show it instead of the full demo
  if (legalPage) {
    const legalContent = config.legal;
    const policyTitles: Record<string, string> = {
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      cookies: 'Cookie Policy',
      refund: 'Refund Policy',
      cancellation: 'Cancellation Policy',
      accessibility: 'Accessibility Statement'
    };
    const policyTexts: Record<string, string[]> = {
      privacy: legalContent.policies.privacy,
      terms: legalContent.policies.terms,
      cookies: legalContent.policies.cookies,
      refund: legalContent.policies.refund,
      cancellation: legalContent.policies.cancellation,
      accessibility: legalContent.policies.accessibility
    };

    return (
      <div
        style={{
          background: theme.bgLight,
          color: theme.textDark,
          fontFamily: theme.fontBody,
          minHeight: '100%'
        }}
      >
        <DemoNavbar business={business} theme={theme} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 80px' }}>
          <h1 style={{
            fontFamily: theme.fontHeading,
            fontSize: '36px',
            fontWeight: 700,
            color: theme.primary,
            marginBottom: '8px',
            lineHeight: 1.2
          }}>
            {policyTitles[legalPage] || 'Policy'}
          </h1>
          <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '32px' }}>
            Last updated: {legalContent.lastUpdated} • {legalContent.businessName} • {legalContent.jurisdiction}
          </p>
          {policyTexts[legalPage]?.map((para, i) => (
            <p key={i} style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '18px' }}>
              {para}
            </p>
          ))}
          <div style={{
            marginTop: '48px',
            padding: '20px',
            background: 'rgba(0,0,0,0.04)',
            borderRadius: '12px',
            border: `1px solid ${theme.primary}33`,
            fontSize: '13px',
            color: theme.textDark,
            opacity: 0.85
          }}>
            <strong>Contact:</strong> {legalContent.contactEmail}<br />
            <em style={{ display: 'block', marginTop: '8px' }}>
              Demo legal content — customize and review before production use.
            </em>
          </div>
          <button
            onClick={() => window.history.back()}
            style={{
              marginTop: '32px',
              padding: '10px 24px',
              background: theme.primary,
              color: theme.bgLight,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            ← Back to Demo
          </button>
        </div>
        <FooterSection business={business} theme={theme} pwa={config.pwa} showLegalLinks={true} activeLegalPage={legalPage} />
      </div>
    );
  }

  return (
    <div
      style={{
        background: theme.bgLight,
        color: theme.textDark,
        fontFamily: theme.fontBody,
        minHeight: '100%'
      }}
    >
      <DemoNavbar business={business} theme={theme} onBookClick={() => setBookingOpen(true)} />

      {config.sections.map((sectionId) => sectionMap[sectionId]).filter(Boolean)}

      <FooterSection business={business} theme={theme} pwa={config.pwa} showLegalLinks={true} />

      {/* Floating WhatsApp button — fixed bottom-right on every page */}
      <WhatsAppFloatingButton
        whatsappNumber={business.whatsapp}
        defaultMessage={config.whatsappMessage}
        themeColor={theme.primary}
      />

      {/* Booking modal trigger */}
      {bookingOpen && (
        <div
          onClick={() => setBookingOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: theme.bgLight,
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
          >
            <h3 style={{ fontFamily: theme.fontHeading, fontSize: '24px', color: theme.primary, marginBottom: '16px' }}>
              Quick Booking
            </h3>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
              Select a service to see available time slots:
            </p>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.primary}55`, marginBottom: '12px', fontSize: '14px' }}>
              {config.services.map((s) => (
                <option key={s.name}>{s.name} — {s.price}</option>
              ))}
            </select>
            <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.primary}55`, marginBottom: '12px', fontSize: '14px' }} />
            <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.primary}55`, marginBottom: '12px', fontSize: '14px' }} />
            <input type="tel" placeholder="Phone / WhatsApp" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${theme.primary}55`, marginBottom: '20px', fontSize: '14px' }} />
            <button
              onClick={() => {
                alert('Demo booking received! In production this would create an appointment and send WhatsApp confirmation.');
                setBookingOpen(false);
              }}
              style={{
                width: '100%',
                padding: '14px',
                background: theme.primary,
                color: theme.bgLight,
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Confirm Booking
            </button>
            <button
              onClick={() => setBookingOpen(false)}
              style={{
                width: '100%',
                padding: '10px',
                background: 'transparent',
                color: theme.textDark,
                border: 'none',
                fontSize: '13px',
                cursor: 'pointer',
                marginTop: '8px',
                opacity: 0.6
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
