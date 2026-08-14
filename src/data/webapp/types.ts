// ============================================================================
// BRANIFY Web App Builder — Type Definitions
// Config-driven demo system: 10 official business categories, each with its
// own theme, demo data, frontend sections, admin modules, and legal content.
// ============================================================================

export type CategoryId =
  | 'spas-massage'
  | 'salons-beauty'
  | 'restaurants-cafes'
  | 'car-repair-detailing'
  | 'cleaning-maid'
  | 'tailors-boutiques'
  | 'photographers-videographers'
  | 'fitness-gyms'
  | 'pet-grooming-boarding'
  | 'tutoring-training';

export type SectionId =
  | 'hero'
  | 'about'
  | 'services'
  | 'pricing'
  | 'gallery'
  | 'booking'
  | 'team'
  | 'testimonials'
  | 'location'
  | 'contact'
  | 'faq'
  | 'whatsapp-cta'
  | 'pwa-install';

export type AdminModuleId =
  | 'overview'
  | 'analytics'
  | 'appointments'
  | 'customers'
  | 'services'
  | 'staff'
  | 'reviews'
  | 'messages'
  | 'gallery'
  | 'offers'
  | 'settings'
  | 'profile'
  | 'hours'
  | 'whatsapp'
  | 'pwa-settings';

export interface Theme {
  primary: string;      // main brand color
  secondary: string;    // supporting color
  accent: string;       // highlight / CTA color
  bgDark: string;       // darkest background
  bgLight: string;      // lightest background
  textDark: string;     // dark text on light bg
  textLight: string;    // light text on dark bg
  fontHeading: string;  // CSS font-family for headings
  fontBody: string;     // CSS font-family for body
  tone: 'luxury' | 'modern' | 'appetizing' | 'technical' | 'fresh' | 'editorial' | 'cinematic' | 'energetic' | 'warm' | 'academic';
}

export interface ServiceItem {
  name: string;
  description: string;
  price: string;
  duration?: string;
  period?: string;
  icon?: string;
  popular?: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  rating: number;
  avatarInitials: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  category: string;
  gradient: string; // CSS gradient for placeholder image
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  hours: { day: string; time: string }[];
  social: { label: string; url: string }[];
  establishedYear: number;
}

export interface DemoMetric {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
  icon: string;
}

export interface AdminAppointment {
  id: string;
  customerName: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  duration: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled' | 'in-progress';
  amount: string;
  initials: string;
}

export interface AdminCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalBookings: number;
  totalSpent: string;
  lastVisit: string;
  status: 'active' | 'vip' | 'new' | 'inactive';
  initials: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface AdminConfig {
  metrics: DemoMetric[];
  revenueChart: ChartPoint[];
  bookingsChart: ChartPoint[];
  appointments: AdminAppointment[];
  customers: AdminCustomer[];
  recentActivity: { time: string; text: string; type: 'info' | 'success' | 'warning' }[];
  staff: TeamMember[];
  services: ServiceItem[];
}

export interface LegalContent {
  businessName: string;
  jurisdiction: string;
  lastUpdated: string;
  contactEmail: string;
  // Pre-built paragraph blocks per policy type — category-specific tone
  policies: {
    privacy: string[];
    terms: string[];
    cookies: string[];
    refund: string[];
    cancellation: string[];
    accessibility: string[];
  };
}

export interface CategoryConfig {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  theme: Theme;
  business: BusinessInfo;
  // Frontend
  sections: SectionId[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { label: string; value: string }[];
    gradient: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    values: { title: string; description: string; icon: string }[];
  };
  services: ServiceItem[];
  pricing: PricingTier[];
  team: TeamMember[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  whatsappMessage: string;
  // Admin
  admin: AdminConfig;
  adminModules: AdminModuleId[];
  // Legal
  legal: LegalContent;
  // PWA
  pwa: {
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    description: string;
  };
  // Feature list shown in the Web App Builder card
  features: string[];
  moduleCount: number;
  pageEstimate: number;
}

export interface CustomizationState {
  businessName: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  primaryColor: string;
  accentColor: string;
  selectedModules: string[];
}
