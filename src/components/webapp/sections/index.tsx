import React, { useState } from 'react';
import {
  BusinessInfo, Theme, ServiceItem, PricingTier, TeamMember, GalleryItem,
  Testimonial, FaqItem
} from '../../../data/webapp/types';

// ============================================================================
// Shared section components — every frontend section lives here.
// All use inline styles with CSS variables passed from the category theme.
// ============================================================================

interface SectionProps {
  theme: Theme;
}

// ---------------------------------------------------------------------------
// NAVBAR
// ---------------------------------------------------------------------------
export interface DemoNavbarProps {
  business: BusinessInfo;
  theme: Theme;
  onBookClick?: () => void;
}

export const DemoNavbar: React.FC<DemoNavbarProps> = ({ business, theme, onBookClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Pricing', 'Gallery', 'Contact'];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: theme.bgDark,
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${theme.primary}22`
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            background: theme.primary,
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.bgLight,
            fontWeight: 800,
            fontSize: '16px',
            fontFamily: theme.fontHeading
          }}>
            {business.name.charAt(0)}
          </div>
          <div>
            <div style={{
              color: theme.textLight,
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: theme.fontHeading,
              lineHeight: 1.1
            }}>
              {business.name}
            </div>
            <div style={{ color: theme.textLight, opacity: 0.5, fontSize: '10px' }}>
              {business.tagline}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden-mobile">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: theme.textLight,
                opacity: 0.8,
                fontSize: '13px',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onBookClick}
            style={{
              padding: '9px 18px',
              background: theme.accent,
              color: theme.bgDark,
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              padding: '8px',
              background: 'transparent',
              border: 'none',
              color: theme.textLight,
              cursor: 'pointer'
            }}
            className="mobile-only"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ padding: '16px 24px', background: theme.bgDark, borderTop: `1px solid ${theme.primary}22` }} className="mobile-only-block">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '10px 0',
                color: theme.textLight,
                fontSize: '14px',
                textDecoration: 'none',
                opacity: 0.8
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
export interface HeroSectionProps {
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
    gradient: string;
  };
  business: BusinessInfo;
  theme: Theme;
  onBookClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ hero, business, theme, onBookClick }) => (
  <section id="home" style={{
    background: hero.gradient,
    padding: '80px 24px 100px',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center'
    }} className="hero-grid">
      <div>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: `${theme.accent}22`,
          border: `1px solid ${theme.accent}55`,
          borderRadius: '999px',
          color: theme.accent,
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '20px'
        }}>
          ★ {business.establishedYear} • {business.city}
        </div>
        <h1 style={{
          fontFamily: theme.fontHeading,
          fontSize: '52px',
          fontWeight: 800,
          color: theme.textLight,
          lineHeight: 1.05,
          marginBottom: '20px'
        }}>
          {hero.headline}
        </h1>
        <p style={{
          fontSize: '18px',
          color: theme.textLight,
          opacity: 0.85,
          lineHeight: 1.5,
          marginBottom: '32px',
          maxWidth: '500px'
        }}>
          {hero.subheadline}
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={onBookClick}
            style={{
              padding: '14px 28px',
              background: theme.accent,
              color: theme.bgDark,
              border: 'none',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            {hero.primaryCta}
          </button>
          <a
            href="#services"
            style={{
              padding: '14px 28px',
              background: 'transparent',
              color: theme.textLight,
              border: `1px solid ${theme.textLight}55`,
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            {hero.secondaryCta} →
          </a>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>
        {hero.stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.12)',
              ...(i === 0 || i === 3 ? { transform: 'translateY(12px)' } : {})
            }}
          >
            <div style={{
              fontSize: '32px',
              fontWeight: 800,
              color: theme.accent,
              fontFamily: theme.fontHeading,
              lineHeight: 1
            }}>
              {stat.value}
            </div>
            <div style={{
              color: theme.textLight,
              opacity: 0.7,
              fontSize: '12px',
              marginTop: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------
export interface AboutSectionProps {
  about: {
    title: string;
    paragraphs: string[];
    values: { title: string; description: string; icon: string }[];
  };
  theme: Theme;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, theme }) => (
  <section id="about" style={{ padding: '80px 24px', background: theme.bgLight }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ maxWidth: '700px', marginBottom: '56px' }}>
        <h2 style={{
          fontFamily: theme.fontHeading,
          fontSize: '38px',
          fontWeight: 700,
          color: theme.textDark,
          marginBottom: '24px',
          lineHeight: 1.1
        }}>
          {about.title}
        </h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: theme.textDark,
            opacity: 0.85,
            marginBottom: '16px'
          }}>
            {p}
          </p>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {about.values.map((value) => (
          <div
            key={value.title}
            style={{
              padding: '28px',
              background: '#fff',
              borderRadius: '14px',
              border: `1px solid ${theme.primary}11`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              background: `${theme.primary}11`,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.primary,
              fontSize: '20px',
              marginBottom: '16px'
            }}>
              ◆
            </div>
            <h3 style={{
              fontFamily: theme.fontHeading,
              fontSize: '18px',
              fontWeight: 700,
              color: theme.textDark,
              marginBottom: '8px'
            }}>
              {value.title}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: theme.textDark, opacity: 0.7 }}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export interface ServicesSectionProps {
  services: ServiceItem[];
  theme: Theme;
  onBookClick?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, theme, onBookClick }) => (
  <section id="services" style={{ padding: '80px 24px', background: theme.bgDark }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: `${theme.accent}22`,
          borderRadius: '999px',
          color: theme.accent,
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          OUR SERVICES
        </div>
        <h2 style={{
          fontFamily: theme.fontHeading,
          fontSize: '36px',
          fontWeight: 700,
          color: theme.textLight
        }}>
          What We Offer
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {services.map((service) => (
          <div
            key={service.name}
            style={{
              padding: '28px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '14px',
              border: `1px solid ${theme.primary}22`,
              position: 'relative',
              transition: 'transform 0.2s, border-color 0.2s'
            }}
          >
            {service.popular && (
              <span style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                padding: '3px 10px',
                background: theme.accent,
                color: theme.bgDark,
                borderRadius: '999px',
                fontSize: '10px',
                fontWeight: 700
              }}>
                POPULAR
              </span>
            )}
            <div style={{
              width: '40px',
              height: '40px',
              background: `${theme.primary}22`,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.primary,
              fontSize: '18px',
              marginBottom: '16px'
            }}>
              ◆
            </div>
            <h3 style={{
              fontFamily: theme.fontHeading,
              fontSize: '18px',
              fontWeight: 700,
              color: theme.textLight,
              marginBottom: '8px'
            }}>
              {service.name}
            </h3>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.5,
              color: theme.textLight,
              opacity: 0.7,
              marginBottom: '16px'
            }}>
              {service.description}
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '14px',
              borderTop: `1px solid ${theme.primary}22`
            }}>
              <div>
                <div style={{ color: theme.accent, fontSize: '18px', fontWeight: 700 }}>
                  {service.price}
                </div>
                {service.duration && (
                  <div style={{ color: theme.textLight, opacity: 0.5, fontSize: '11px' }}>
                    {service.duration}
                  </div>
                )}
              </div>
              <button
                onClick={onBookClick}
                style={{
                  padding: '8px 14px',
                  background: 'transparent',
                  color: theme.textLight,
                  border: `1px solid ${theme.textLight}55`,
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Book →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// PRICING
// ---------------------------------------------------------------------------
export interface PricingSectionProps {
  pricing: PricingTier[];
  theme: Theme;
  onBookClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ pricing, theme, onBookClick }) => (
  <section id="pricing" style={{ padding: '80px 24px', background: theme.bgLight }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: `${theme.primary}11`,
          borderRadius: '999px',
          color: theme.primary,
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          PACKAGES & PRICING
        </div>
        <h2 style={{
          fontFamily: theme.fontHeading,
          fontSize: '36px',
          fontWeight: 700,
          color: theme.textDark
        }}>
          Choose Your Plan
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        {pricing.map((tier) => (
          <div
            key={tier.name}
            style={{
              padding: '36px 28px',
              background: '#fff',
              borderRadius: '18px',
              border: tier.highlighted ? `2px solid ${theme.primary}` : '1px solid rgba(0,0,0,0.08)',
              boxShadow: tier.highlighted ? `0 12px 32px ${theme.primary}33` : '0 4px 12px rgba(0,0,0,0.04)',
              position: 'relative'
            }}
          >
            {tier.highlighted && (
              <span style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '4px 16px',
                background: theme.primary,
                color: theme.bgLight,
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 700,
                whiteSpace: 'nowrap'
              }}>
              ★ BEST VALUE
              </span>
            )}
            <h3 style={{
              fontFamily: theme.fontHeading,
              fontSize: '20px',
              fontWeight: 700,
              color: theme.textDark,
              marginBottom: '8px'
            }}>
              {tier.name}
            </h3>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '36px', fontWeight: 800, color: theme.primary, fontFamily: theme.fontHeading }}>
                {tier.price}
              </span>
              {tier.period && (
                <span style={{ fontSize: '13px', color: theme.textDark, opacity: 0.6, marginLeft: '6px' }}>
                  / {tier.period}
                </span>
              )}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              {tier.features.map((f) => (
                <li key={f} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                  fontSize: '14px',
                  color: theme.textDark
                }}>
                  <span style={{ color: theme.primary, fontWeight: 700, marginTop: '2px' }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onBookClick}
              style={{
                width: '100%',
                padding: '13px',
                background: tier.highlighted ? theme.primary : 'transparent',
                color: tier.highlighted ? theme.bgLight : theme.primary,
                border: tier.highlighted ? 'none' : `1px solid ${theme.primary}`,
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// TEAM
// ---------------------------------------------------------------------------
export interface TeamSectionProps {
  team: TeamMember[];
  theme: Theme;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team, theme }) => (
  <section id="team" style={{ padding: '80px 24px', background: theme.bgDark }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: `${theme.accent}22`,
          borderRadius: '999px',
          color: theme.accent,
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          MEET THE TEAM
        </div>
        <h2 style={{
          fontFamily: theme.fontHeading,
          fontSize: '36px',
          fontWeight: 700,
          color: theme.textLight
        }}>
          Our Specialists
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px'
      }}>
        {team.map((member) => (
          <div
            key={member.name}
            style={{
              padding: '32px 24px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '16px',
              border: `1px solid ${theme.primary}22`,
              textAlign: 'center'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.bgLight,
              fontSize: '28px',
              fontWeight: 800,
              fontFamily: theme.fontHeading
            }}>
              {member.avatarInitials}
            </div>
            <h3 style={{
              fontFamily: theme.fontHeading,
              fontSize: '18px',
              fontWeight: 700,
              color: theme.textLight,
              marginBottom: '4px'
            }}>
              {member.name}
            </h3>
            <div style={{
              color: theme.accent,
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '12px'
            }}>
              {member.role}
            </div>
            <div style={{
              display: 'inline-block',
              padding: '3px 10px',
              background: `${theme.accent}22`,
              borderRadius: '6px',
              color: theme.accent,
              fontSize: '11px',
              marginBottom: '12px'
            }}>
              ★ {member.rating} • {member.specialty}
            </div>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.5,
              color: theme.textLight,
              opacity: 0.6
            }}>
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// GALLERY
// ---------------------------------------------------------------------------
export interface GallerySectionProps {
  gallery: GalleryItem[];
  theme: Theme;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery, theme }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(gallery.map((g) => g.category)))];
  const filtered = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <section id="gallery" style={{ padding: '80px 24px', background: theme.bgLight }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: `${theme.primary}11`,
            borderRadius: '999px',
            color: theme.primary,
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px'
          }}>
            GALLERY
          </div>
          <h2 style={{
            fontFamily: theme.fontHeading,
            fontSize: '36px',
            fontWeight: 700,
            color: theme.textDark,
            marginBottom: '20px'
          }}>
            Recent Work
          </h2>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '6px 14px',
                  background: filter === cat ? theme.primary : 'transparent',
                  color: filter === cat ? theme.bgLight : theme.textDark,
                  border: `1px solid ${filter === cat ? theme.primary : '#00000022'}`,
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}>
          {filtered.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: item.gradient,
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '16px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)'
              }}>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                  {item.title}
                </div>
                <div style={{ color: '#fff', opacity: 0.8, fontSize: '11px' }}>
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// BOOKING
// ---------------------------------------------------------------------------
export interface BookingSectionProps {
  business: BusinessInfo;
  services: ServiceItem[];
  theme: Theme;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ business, services, theme }) => {
  const [selectedService, setSelectedService] = useState(services[0]?.name || '');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" style={{ padding: '80px 24px', background: theme.bgDark }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: `${theme.accent}22`,
            borderRadius: '999px',
            color: theme.accent,
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px'
          }}>
            BOOK NOW
          </div>
          <h2 style={{
            fontFamily: theme.fontHeading,
            fontSize: '36px',
            fontWeight: 700,
            color: theme.textLight
          }}>
            Reserve Your Spot
          </h2>
        </div>

        {submitted ? (
          <div style={{
            padding: '48px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '18px',
            border: `1px solid ${theme.accent}55`,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
            <h3 style={{ color: theme.textLight, fontFamily: theme.fontHeading, fontSize: '24px', marginBottom: '12px' }}>
              Booking Received!
            </h3>
            <p style={{ color: theme.textLight, opacity: 0.8, fontSize: '15px' }}>
              We will WhatsApp you on {business.whatsapp} within 5 minutes to confirm.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: '24px',
                padding: '12px 24px',
                background: 'transparent',
                color: theme.textLight,
                border: `1px solid ${theme.textLight}55`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              Book Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            style={{
              padding: '36px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '18px',
              border: `1px solid ${theme.primary}22`
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
              <div>
                <label style={{ display: 'block', color: theme.textLight, fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input type="text" required style={inputStyle(theme)} placeholder="John Smith" />
              </div>
              <div>
                <label style={{ display: 'block', color: theme.textLight, fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                  Phone / WhatsApp *
                </label>
                <input type="tel" required style={inputStyle(theme)} placeholder="+971 50 123 4567" />
              </div>
              <div>
                <label style={{ display: 'block', color: theme.textLight, fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                  Email
                </label>
                <input type="email" style={inputStyle(theme)} placeholder="you@email.com" />
              </div>
              <div>
                <label style={{ display: 'block', color: theme.textLight, fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                  Preferred Date *
                </label>
                <input type="date" required style={inputStyle(theme)} />
              </div>
            </div>
            <div style={{ marginTop: '16px' }}>
              <label style={{ display: 'block', color: theme.textLight, fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                Service *
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                style={{ ...inputStyle(theme), cursor: 'pointer' }}
              >
                {services.map((s) => (
                  <option key={s.name} value={s.name} style={{ color: '#000' }}>
                    {s.name} — {s.price} ({s.duration})
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginTop: '16px' }}>
              <label style={{ display: 'block', color: theme.textLight, fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                Notes (optional)
              </label>
              <textarea rows={3} style={{ ...inputStyle(theme), resize: 'vertical' }} placeholder="Any preferences, allergies, or special requests?" />
            </div>
            <button
              type="submit"
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '16px',
                background: theme.accent,
                color: theme.bgDark,
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Confirm Booking →
            </button>
            <p style={{ textAlign: 'center', color: theme.textLight, opacity: 0.5, fontSize: '11px', marginTop: '12px' }}>
              You will receive WhatsApp confirmation within 5 minutes.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

const inputStyle = (theme: Theme): React.CSSProperties => ({
  width: '100%',
  padding: '12px 14px',
  background: 'rgba(0,0,0,0.2)',
  color: theme.textLight,
  border: `1px solid ${theme.primary}33`,
  borderRadius: '8px',
  fontSize: '14px',
  fontFamily: 'inherit',
  boxSizing: 'border-box'
});

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  theme: Theme;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, theme }) => (
  <section id="reviews" style={{ padding: '80px 24px', background: theme.bgLight }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          background: `${theme.primary}11`,
          borderRadius: '999px',
          color: theme.primary,
          fontSize: '12px',
          fontWeight: 600,
          marginBottom: '12px'
        }}>
          CUSTOMER REVIEWS
        </div>
        <h2 style={{
          fontFamily: theme.fontHeading,
          fontSize: '36px',
          fontWeight: 700,
          color: theme.textDark
        }}>
          What Clients Say
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              padding: '28px',
              background: '#fff',
              borderRadius: '14px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{
              display: 'flex',
              gap: '2px',
              color: theme.accent,
              fontSize: '14px',
              marginBottom: '12px'
            }}>
              {'★'.repeat(t.rating)}
            </div>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: theme.textDark,
              marginBottom: '20px',
              fontStyle: 'italic'
            }}>
              "{t.text}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px'
              }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: theme.textDark, fontSize: '13px' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '11px', color: theme.textDark, opacity: 0.6 }}>
                  {t.location} • {t.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// LOCATION
// ---------------------------------------------------------------------------
export interface LocationSectionProps {
  business: BusinessInfo;
  theme: Theme;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ business, theme }) => (
  <section id="location" style={{ padding: '80px 24px', background: theme.bgDark }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }} className="location-grid">
        <div>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: `${theme.accent}22`,
            borderRadius: '999px',
            color: theme.accent,
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px'
          }}>
            VISIT US
          </div>
          <h2 style={{
            fontFamily: theme.fontHeading,
            fontSize: '36px',
            fontWeight: 700,
            color: theme.textLight,
            marginBottom: '24px'
          }}>
            Find Us in {business.city}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: theme.accent, fontSize: '18px' }}>📍</span>
              <div>
                <div style={{ color: theme.textLight, fontSize: '11px', opacity: 0.6, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Address</div>
                <div style={{ color: theme.textLight, fontSize: '15px' }}>{business.address}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: theme.accent, fontSize: '18px' }}>📞</span>
              <div>
                <div style={{ color: theme.textLight, fontSize: '11px', opacity: 0.6, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</div>
                <div style={{ color: theme.textLight, fontSize: '15px' }}>{business.phone}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: theme.accent, fontSize: '18px' }}>✉️</span>
              <div>
                <div style={{ color: theme.textLight, fontSize: '11px', opacity: 0.6, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</div>
                <div style={{ color: theme.textLight, fontSize: '15px' }}>{business.email}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: theme.accent, fontSize: '18px' }}>🕒</span>
              <div>
                <div style={{ color: theme.textLight, fontSize: '11px', opacity: 0.6, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Hours</div>
                {business.hours.map((h) => (
                  <div key={h.day} style={{ color: theme.textLight, fontSize: '14px' }}>
                    <span style={{ opacity: 0.7 }}>{h.day}:</span> {h.time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{
          height: '400px',
          borderRadius: '18px',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.primary}33, ${theme.accent}33)`,
          border: `1px solid ${theme.primary}22`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ fontSize: '48px' }}>🗺️</div>
          <div style={{ color: theme.textLight, fontSize: '14px', opacity: 0.7 }}>Map preview</div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              background: theme.accent,
              color: theme.bgDark,
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export interface FaqSectionProps {
  faq: FaqItem[];
  theme: Theme;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faq, theme }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: '80px 24px', background: theme.bgLight }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: `${theme.primary}11`,
            borderRadius: '999px',
            color: theme.primary,
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '12px'
          }}>
            FAQ
          </div>
          <h2 style={{
            fontFamily: theme.fontHeading,
            fontSize: '36px',
            fontWeight: 700,
            color: theme.textDark
          }}>
            Common Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faq.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: `1px solid ${open === i ? theme.primary : 'rgba(0,0,0,0.08)'}`,
                overflow: 'hidden',
                transition: 'border-color 0.2s'
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <span style={{ fontWeight: 600, color: theme.textDark, fontSize: '15px' }}>
                  {item.question}
                </span>
                <span style={{
                  color: theme.primary,
                  fontSize: '20px',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.2s'
                }}>
                  +
                </span>
              </button>
              {open === i && (
                <div style={{
                  padding: '0 24px 20px',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: theme.textDark,
                  opacity: 0.8
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// WHATSAPP CTA
// ---------------------------------------------------------------------------
export interface WhatsAppCtaSectionProps {
  business: BusinessInfo;
  whatsappMessage: string;
  theme: Theme;
}

export const WhatsAppCtaSection: React.FC<WhatsAppCtaSectionProps> = ({ business, whatsappMessage, theme }) => {
  const waLink = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section style={{ padding: '60px 24px', background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})` }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <div>
          <h2 style={{
            fontFamily: theme.fontHeading,
            fontSize: '28px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '8px'
          }}>
            Chat with us on WhatsApp
          </h2>
          <p style={{ color: '#fff', opacity: 0.9, fontSize: '15px' }}>
            Get instant answers, book directly, or ask anything.
          </p>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '14px 28px',
            background: '#25D366',
            color: '#fff',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
          }}
        >
          💬 WhatsApp Now
        </a>
      </div>
    </section>
  );
};

// ---------------------------------------------------------------------------
// PWA INSTALL
// ---------------------------------------------------------------------------
export interface PwaInstallSectionProps {
  pwa: {
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    description: string;
  };
  theme: Theme;
}

export const PwaInstallSection: React.FC<PwaInstallSectionProps> = ({ pwa, theme }) => (
  <section style={{ padding: '60px 24px', background: theme.bgDark }}>
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px',
      background: 'rgba(255,255,255,0.04)',
      borderRadius: '20px',
      border: `1px solid ${theme.primary}33`,
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
      flexWrap: 'wrap'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '18px',
        background: `linear-gradient(135deg, ${pwa.themeColor}, ${theme.accent})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '36px',
        color: '#fff',
        fontWeight: 800,
        fontFamily: theme.fontHeading,
        flexShrink: 0
      }}>
        {pwa.shortName.charAt(0)}
      </div>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <h3 style={{
          fontFamily: theme.fontHeading,
          fontSize: '20px',
          fontWeight: 700,
          color: theme.textLight,
          marginBottom: '6px'
        }}>
          Install the {pwa.appName}
        </h3>
        <p style={{ color: theme.textLight, opacity: 0.7, fontSize: '13px', marginBottom: '16px' }}>
          {pwa.description}
        </p>
        <button
          onClick={() => alert('In a real PWA deployment, this would trigger the browser install prompt. The app would then be installable on iOS (Add to Home Screen) and Android (Install App).')}
          style={{
            padding: '10px 22px',
            background: theme.accent,
            color: theme.bgDark,
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          📲 Install App
        </button>
      </div>
    </div>
  </section>
);

// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------
export interface FooterSectionProps {
  business: BusinessInfo;
  theme: Theme;
  pwa: any;
  showLegalLinks?: boolean;
  activeLegalPage?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ business, theme, pwa, showLegalLinks, activeLegalPage }) => (
  <footer style={{
    background: theme.bgDark,
    borderTop: `1px solid ${theme.primary}22`,
    padding: '48px 24px 24px'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '32px',
        marginBottom: '32px'
      }} className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: theme.primary,
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.bgLight,
              fontWeight: 800,
              fontSize: '15px',
              fontFamily: theme.fontHeading
            }}>
              {business.name.charAt(0)}
            </div>
            <div style={{ color: theme.textLight, fontWeight: 700, fontSize: '15px' }}>
              {business.name}
            </div>
          </div>
          <p style={{ color: theme.textLight, opacity: 0.6, fontSize: '13px', lineHeight: 1.6, marginBottom: '16px', maxWidth: '320px' }}>
            {business.description}
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {business.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.textLight,
                  fontSize: '12px',
                  textDecoration: 'none',
                  opacity: 0.7,
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              >
                {s.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: theme.textLight, fontSize: '12px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <a href={`tel:${business.phone}`} style={{ color: theme.textLight, opacity: 0.6, fontSize: '13px', textDecoration: 'none' }}>{business.phone}</a>
            <a href={`mailto:${business.email}`} style={{ color: theme.textLight, opacity: 0.6, fontSize: '13px', textDecoration: 'none' }}>{business.email}</a>
            <span style={{ color: theme.textLight, opacity: 0.6, fontSize: '13px' }}>{business.address}</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: theme.textLight, fontSize: '12px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Hours
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {business.hours.map((h) => (
              <div key={h.day} style={{ color: theme.textLight, opacity: 0.6, fontSize: '12px' }}>
                <span style={{ opacity: 0.7 }}>{h.day}:</span> {h.time}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: theme.textLight, fontSize: '12px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Legal
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {showLegalLinks ? (
              <>
                {[
                  { id: 'privacy', label: 'Privacy Policy' },
                  { id: 'terms', label: 'Terms & Conditions' },
                  { id: 'cookies', label: 'Cookie Policy' },
                  { id: 'refund', label: 'Refund Policy' },
                  { id: 'cancellation', label: 'Cancellation Policy' },
                  { id: 'accessibility', label: 'Accessibility' }
                ].map((l) => (
                  <a
                    key={l.id}
                    href={`#legal-${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      // Dispatch custom event for parent to handle
                      window.dispatchEvent(new CustomEvent('showLegalPage', { detail: l.id }));
                    }}
                    style={{
                      color: activeLegalPage === l.id ? theme.accent : theme.textLight,
                      opacity: activeLegalPage === l.id ? 1 : 0.6,
                      fontSize: '12px',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {l.label}
                  </a>
                ))}
              </>
            ) : (
              <span style={{ color: theme.textLight, opacity: 0.5, fontSize: '12px' }}>
                See demo for legal pages
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={{
        paddingTop: '24px',
        borderTop: `1px solid ${theme.primary}22`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ color: theme.textLight, opacity: 0.5, fontSize: '12px' }}>
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
        <div style={{ color: theme.textLight, opacity: 0.4, fontSize: '11px' }}>
          Powered by <span style={{ color: theme.accent, fontWeight: 600 }}>BRANIFY AI</span> • Demo legal content — customize before production
        </div>
      </div>
    </div>
  </footer>
);
