import { CategoryConfig } from './types';

// ============================================================================
// BRANIFY AI — 3 PREMIUM UAE BEAUTY-BUSINESS TEMPLATES
// Gents Salon, Ladies Salon, Spa & Wellness
// Each is a distinct, client-ready template with rich demo data.
// ============================================================================

// ---------------------------------------------------------------------------
// TEMPLATE 1: GENTS SALON
// Visual identity: dark charcoal + gold + steel blue, masculine premium
// Inspired by Afroza Gents Salon architecture (independent implementation)
// ---------------------------------------------------------------------------
export const GENTS_SALON_PREMIUM: CategoryConfig = {
  id: 'spas-massage', // reuses spa id for routing compat, but is distinct
  name: 'Gents Salon',
  shortName: 'Gents Salon',
  description: 'Premium Dubai men\'s grooming — haircuts, beard sculpting, hot towel shaves, and grooming packages.',
  theme: {
    primary: '#1E3A5F',       // steel navy
    secondary: '#3B5998',     // accent blue
    accent: '#D4AF37',        // antique gold
    bgDark: '#0F1115',        // near-black charcoal
    bgLight: '#F8F9FB',       // cool grey-white
    textDark: '#1A1D24',
    textLight: '#F5F5F5',
    fontHeading: "'Oswald', sans-serif",
    fontBody: "'Inter', sans-serif",
    tone: 'technical'
  },
  business: {
    name: 'Afroza Gents Salon',
    tagline: 'Dubai\'s Premier Men\'s Grooming Atelier',
    description: 'A premium men\'s grooming destination in the heart of Dubai Marina, offering master barbering, traditional hot-towel shaves, and modern styling for the discerning gentleman.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Marina Walk, Dubai Marina, Dubai, UAE',
    phone: '+971 4 555 0188',
    whatsapp: '+971501234567',
    email: 'book@afrozagents.ae',
    website: 'afrozagents.ae',
    hours: [
      { day: 'Sat – Wed', time: '9:00 AM – 11:00 PM' },
      { day: 'Thu', time: '9:00 AM – 1:00 AM' },
      { day: 'Fri', time: '2:00 PM – 1:00 AM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Facebook', url: 'https://facebook.com' },
      { label: 'Google Maps', url: 'https://maps.google.com' }
    ],
    establishedYear: 2019
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Sharp Looks. Sharp Men.',
    subheadline: 'Master barbers. Hot-towel shaves. Premium grooming in Dubai Marina. Book your chair in 30 seconds.',
    primaryCta: 'Book Appointment',
    secondaryCta: 'View Services',
    stats: [
      { label: 'Happy Clients', value: '8,400+' },
      { label: 'Master Barbers', value: '6' },
      { label: 'Years in Marina', value: '6' },
      { label: 'Google Rating', value: '4.9' }
    ],
    gradient: 'linear-gradient(135deg, #0F1115 0%, #1E3A5F 50%, #D4AF37 100%)'
  },
  about: {
    title: 'Where Gentlemen Are Crafted',
    paragraphs: [
      'Founded in 2019, Afroza Gents Salon was born from a simple belief: a man\'s grooming should be an experience, not an errand. Our master barbers bring 15+ years of combined experience from London, Istanbul, and Dubai.',
      'Every chair in our Marina Walk atelier is a private grooming station — leather, oak, and brass. Hot towels, single-blade razors, and premium products from American Crew and Hanzo de Tokyo.',
      'We are the only gents salon in Dubai Marina offering a 30-minute "Executive Express" service for busy professionals — same precision, optimized for your lunch break.'
    ],
    values: [
      { title: 'Master Barbers', description: '15+ years combined experience from London, Istanbul, Dubai.', icon: 'scissors' },
      { title: 'Single-Blade Shaves', description: 'Traditional hot-towel wet shaves, never electric trimmers.', icon: 'flame' },
      { title: 'Premium Products', description: 'American Crew, Hanzo de Tokyo, Proraro exclusively.', icon: 'shield' }
    ]
  },
  services: [
    { name: 'Executive Haircut', description: 'Consultation, cut, style, and neck shave. By senior barber.', price: 'AED 120', duration: '45 min', icon: 'scissors', popular: true },
    { name: 'Classic Haircut', description: 'Cut and style by junior barber. Same standard, faster.', price: 'AED 75', duration: '30 min', icon: 'scissors' },
    { name: 'Hot Towel Shave', description: 'Traditional single-blade shave with hot towels and pre-shave oil.', price: 'AED 95', duration: '45 min', icon: 'flame', popular: true },
    { name: 'Beard Sculpting', description: 'Beard line-up, shape, and hot towel finish.', price: 'AED 65', duration: '30 min', icon: 'beard' },
    { name: 'Hair Color & Grey Coverage', description: 'Premium ammonia-free color, natural finish.', price: 'AED 180', duration: '60 min', icon: 'palette' },
    { name: 'Executive Facial', description: 'Deep clean, exfoliation, mask, and moisturizer.', price: 'AED 140', duration: '45 min', icon: 'sparkles' },
    { name: 'Hair Wash & Style', description: 'Wash, condition, and style. No cut.', price: 'AED 45', duration: '20 min', icon: 'droplet' },
    { name: 'Executive Express (30 min)', description: 'Cut + style in 30 minutes. For the busy professional.', price: 'AED 95', duration: '30 min', icon: 'clock' }
  ],
  pricing: [
    { name: 'Walk-In', price: 'AED 120', period: 'per visit', features: ['Executive haircut', 'No appointment needed', '15-min wait max', 'Neck shave included'], cta: 'Find Us' },
    { name: 'Marina Member', price: 'AED 399', period: 'per month', features: ['4 haircuts/month', '2 hot towel shaves', '1 facial included', 'Priority booking', '15% off all services', 'Free product on birthday'], highlighted: true, cta: 'Join Membership' },
    { name: 'Groom Package', price: 'AED 850', period: 'one-time', features: ['Haircut + beard + shave', 'Executive facial', 'Hair styling', 'Scalp treatment', 'Complimentary beverage', 'Take-home grooming kit'], cta: 'Book Package' }
  ],
  team: [
    { name: 'Karim Hassan', role: 'Founder & Master Barber', bio: '15 years. Trained at Truefitt & Hill London.', specialty: 'Classic Cuts & Wet Shaves', rating: 5.0, avatarInitials: 'KH' },
    { name: 'Marco Rossi', role: 'Senior Barber', bio: '10 years. Ex-Fellowes Barberia Milano.', specialty: 'Modern Styles & Beard Sculpting', rating: 4.9, avatarInitials: 'MR' },
    { name: 'Ahmed Al Rashid', role: 'Senior Barber', bio: '8 years. Specialist in fades and Middle Eastern styles.', specialty: 'Fades & Arabian Cuts', rating: 4.9, avatarInitials: 'AR' },
    { name: 'Yusuf Demir', role: 'Barber', bio: '6 years. Hot towel shave specialist from Istanbul.', specialty: 'Hot Towel Shaves', rating: 4.8, avatarInitials: 'YD' },
    { name: 'Sofia Lindqvist', role: 'Facial Specialist', bio: 'Esthetician. 7 years experience.', specialty: 'Facials & Skincare', rating: 5.0, avatarInitials: 'SL' },
    { name: 'Daniel Okonkwo', role: 'Junior Barber', bio: '4 years. Rising star in modern cuts.', specialty: 'Modern & Editorial Cuts', rating: 4.8, avatarInitials: 'DO' }
  ],
  gallery: [
    { title: 'Skin Fade', caption: 'Executive cut by Karim', category: 'Cuts', gradient: 'linear-gradient(135deg, #0F1115, #1E3A5F)' },
    { title: 'Beard Sculpt', caption: 'Line-up by Marco', category: 'Beard', gradient: 'linear-gradient(135deg, #1E3A5F, #3B5998)' },
    { title: 'Hot Towel Shave', caption: 'Traditional single-blade', category: 'Shave', gradient: 'linear-gradient(135deg, #0F1115, #D4AF37)' },
    { title: 'Classic Pompadour', caption: 'Vintage styling', category: 'Styles', gradient: 'linear-gradient(135deg, #1E3A5F, #D4AF37)' },
    { title: 'Executive Facial', caption: 'Pre-event grooming', category: 'Grooming', gradient: 'linear-gradient(135deg, #0F1115, #3B5998)' },
    { title: 'Marina Chair', caption: 'Private grooming station', category: 'Atelier', gradient: 'linear-gradient(135deg, #1A1D24, #1E3A5F)' },
    { title: 'Grey Coverage', caption: 'Natural finish', category: 'Color', gradient: 'linear-gradient(135deg, #1E3A5F, #525252)' },
    { title: 'Hot Towel Station', caption: 'Traditional setup', category: 'Atelier', gradient: 'linear-gradient(135deg, #0F1115, #1A1D24)' }
  ],
  testimonials: [
    { name: 'James Whitfield', location: 'Dubai Marina', rating: 5, text: 'Best haircut I have had in 5 years in Dubai. Karim understood my face shape immediately. The hot towel shave was the most relaxing 45 minutes of my week. The app booking is instant.', date: '1 week ago', service: 'Executive Haircut + Hot Towel Shave' },
    { name: 'Ahmed Al Sabah', location: 'Emirates Hills', rating: 5, text: 'As a member for 2 years, I get priority booking and a free shave monthly. Marco knows my beard better than I do. This is what a premium men\'s grooming experience should be.', date: '2 weeks ago', service: 'Marina Member' },
    { name: 'Daniel Foster', location: 'DIFC', rating: 5, text: 'The Executive Express saved my week. 30-minute cut during lunch break, walked out looking sharp for client meetings. The hot towel finish made it feel premium.', date: '3 days ago', service: 'Executive Express (30 min)' },
    { name: 'Hassan Al Rashid', location: 'Downtown Dubai', rating: 5, text: 'Got the Groom Package before my wedding. Haircut, beard, shave, facial — 2 hours of pure grooming. The take-home kit was a thoughtful touch. Highly recommend.', date: '1 month ago', service: 'Groom Package' }
  ],
  faq: [
    { question: 'Do I need an appointment?', answer: 'Walk-ins are welcome, but we strongly recommend booking through our app to guarantee your preferred barber and time slot. Members get priority booking.' },
    { question: 'What is the Executive Express?', answer: 'A 30-minute cut and style designed for busy professionals. Same quality as our Executive Haircut, optimized for speed. Available weekdays 12 PM – 2 PM.' },
    { question: 'Do you do children\'s haircuts?', answer: 'Yes, for boys aged 5+. We have a dedicated junior barber. AED 55 for under-12s. Book through the app and mention the age.' },
    { question: 'What products do you use?', answer: 'We use American Crew, Hanzo de Tokyo, and Proraro exclusively. All products are available for purchase at the atelier.' },
    { question: 'Do you offer corporate packages?', answer: 'Yes. We partner with DIFC companies for monthly on-site grooming. Minimum 10 employees. Contact book@afrozagents.ae for a proposal.' },
    { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 2 hours before. Within 2 hours, a 50% fee applies. Members get one free late-cancel per month.' }
  ],
  whatsappMessage: 'Hi Afroza! I would like to book an appointment. What time slots are available this week?',
  admin: {
    metrics: [
      { label: "Today's Appointments", value: '34', delta: '+8', positive: true, icon: 'calendar' },
      { label: 'Revenue (Today)', value: 'AED 4,820', delta: '+12%', positive: true, icon: 'trending-up' },
      { label: 'New Customers', value: '6', delta: '+2', positive: true, icon: 'users' },
      { label: 'Avg. Rating', value: '4.92', delta: '+0.03', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 3200 }, { label: 'Tue', value: 3800 }, { label: 'Wed', value: 4200 },
      { label: 'Thu', value: 5800 }, { label: 'Fri', value: 6400 }, { label: 'Sat', value: 7200 }, { label: 'Sun', value: 4820 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 22 }, { label: 'Tue', value: 26 }, { label: 'Wed', value: 28 },
      { label: 'Thu', value: 38 }, { label: 'Fri', value: 42 }, { label: 'Sat', value: 48 }, { label: 'Sun', value: 34 }
    ],
    appointments: [
      { id: 'APT-101', customerName: 'James Whitfield', service: 'Executive Haircut + Shave', staff: 'Karim Hassan', date: 'Today', time: '10:00 AM', duration: '90 min', status: 'completed', amount: 'AED 215', initials: 'JW' },
      { id: 'APT-102', customerName: 'Ahmed Al Sabah', service: 'Member Cut + Beard', staff: 'Marco Rossi', date: 'Today', time: '11:00 AM', duration: '60 min', status: 'completed', amount: 'AED 0', initials: 'AS' },
      { id: 'APT-103', customerName: 'Daniel Foster', service: 'Executive Express', staff: 'Ahmed Al Rashid', date: 'Today', time: '12:30 PM', duration: '30 min', status: 'completed', amount: 'AED 95', initials: 'DF' },
      { id: 'APT-104', customerName: 'Hassan Al Rashid', service: 'Groom Package', staff: 'Karim Hassan', date: 'Today', time: '2:00 PM', duration: '120 min', status: 'in-progress', amount: 'AED 850', initials: 'HR' },
      { id: 'APT-105', customerName: 'Omar Farouk', service: 'Beard Sculpting', staff: 'Marco Rossi', date: 'Today', time: '3:30 PM', duration: '30 min', status: 'confirmed', amount: 'AED 65', initials: 'OF' },
      { id: 'APT-106', customerName: 'Yusuf Rahman', service: 'Hair Color', staff: 'Ahmed Al Rashid', date: 'Today', time: '4:00 PM', duration: '60 min', status: 'confirmed', amount: 'AED 180', initials: 'YR' },
      { id: 'APT-107', customerName: 'Tom Bradley', service: 'Executive Facial', staff: 'Sofia Lindqvist', date: 'Today', time: '5:00 PM', duration: '45 min', status: 'pending', amount: 'AED 140', initials: 'TB' },
      { id: 'APT-108', customerName: 'Liam Walsh', service: 'Hot Towel Shave', staff: 'Yusuf Demir', date: 'Today', time: '6:00 PM', duration: '45 min', status: 'confirmed', amount: 'AED 95', initials: 'LW' }
    ],
    customers: [
      { id: 'CUST-001', name: 'James Whitfield', email: 'james@example.com', phone: '+971 50 123 4567', totalBookings: 42, totalSpent: 'AED 9,240', lastVisit: '1 week ago', status: 'vip', initials: 'JW' },
      { id: 'CUST-002', name: 'Ahmed Al Sabah', email: 'ahmed@example.com', phone: '+971 50 234 5678', totalBookings: 88, totalSpent: 'AED 18,400', lastVisit: '2 weeks ago', status: 'vip', initials: 'AS' },
      { id: 'CUST-003', name: 'Daniel Foster', email: 'daniel@example.com', phone: '+971 50 345 6789', totalBookings: 18, totalSpent: 'AED 2,160', lastVisit: '3 days ago', status: 'active', initials: 'DF' },
      { id: 'CUST-004', name: 'Hassan Al Rashid', email: 'hassan@example.com', phone: '+971 50 456 7890', totalBookings: 6, totalSpent: 'AED 4,100', lastVisit: 'today', status: 'active', initials: 'HR' },
      { id: 'CUST-005', name: 'Omar Farouk', email: 'omar@example.com', phone: '+971 50 567 8901', totalBookings: 24, totalSpent: 'AED 3,120', lastVisit: '1 week ago', status: 'active', initials: 'OF' },
      { id: 'CUST-006', name: 'Yusuf Rahman', email: 'yusuf@example.com', phone: '+971 50 678 9012', totalBookings: 9, totalSpent: 'AED 1,620', lastVisit: '2 weeks ago', status: 'active', initials: 'YR' }
    ],
    recentActivity: [
      { time: '4 min ago', text: 'New booking: Omar Farouk beard sculpting 3:30 PM', type: 'info' },
      { time: '22 min ago', text: 'Payment received: AED 850 from Hassan Al Rashid', type: 'success' },
      { time: '1 hr ago', text: 'New member signup: Daniel Foster (monthly)', type: 'success' },
      { time: '2 hr ago', text: 'Low stock: American Crew Fiber (3 jars left)', type: 'warning' },
      { time: '3 hr ago', text: 'New 5-star Google review from James Whitfield', type: 'success' }
    ],
    staff: [
      { name: 'Karim Hassan', role: 'Founder & Master Barber', bio: '15 years. Trained at Truefitt & Hill London.', specialty: 'Classic Cuts & Wet Shaves', rating: 5.0, avatarInitials: 'KH' },
      { name: 'Marco Rossi', role: 'Senior Barber', bio: '10 years. Ex-Fellowes Barberia Milano.', specialty: 'Modern Styles & Beard', rating: 4.9, avatarInitials: 'MR' },
      { name: 'Ahmed Al Rashid', role: 'Senior Barber', bio: '8 years. Fades specialist.', specialty: 'Fades & Arabian Cuts', rating: 4.9, avatarInitials: 'AR' },
      { name: 'Yusuf Demir', role: 'Barber', bio: '6 years. Istanbul-trained.', specialty: 'Hot Towel Shaves', rating: 4.8, avatarInitials: 'YD' },
      { name: 'Sofia Lindqvist', role: 'Facial Specialist', bio: 'Esthetician. 7 years.', specialty: 'Facials & Skincare', rating: 5.0, avatarInitials: 'SL' },
      { name: 'Daniel Okonkwo', role: 'Junior Barber', bio: '4 years. Rising star.', specialty: 'Modern Cuts', rating: 4.8, avatarInitials: 'DO' }
    ],
    services: [
      { name: 'Executive Haircut', description: 'Consultation, cut, style, neck shave. Senior barber.', price: 'AED 120', duration: '45 min', icon: 'scissors', popular: true },
      { name: 'Hot Towel Shave', description: 'Traditional single-blade shave with hot towels.', price: 'AED 95', duration: '45 min', icon: 'flame', popular: true },
      { name: 'Beard Sculpting', description: 'Beard line-up, shape, hot towel finish.', price: 'AED 65', duration: '30 min', icon: 'beard' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Afroza Gents Salon',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'privacy@afrozagents.ae',
    policies: {
      privacy: [
        'Afroza Gents Salon ("we") collects your name, contact details, grooming preferences, and payment information to deliver personalized men\'s grooming services.',
        'We use your data to confirm bookings, send WhatsApp/SMS reminders, remember your preferred barber and style, and process payments securely through our PCI-compliant provider.',
        'Photographs of your haircut/grooming may be taken with your explicit consent for our portfolio and social media. You can withdraw consent at any time.',
        'We do not sell your data. Information is shared only with our payment processor and the specific barber assigned to your appointment.',
        'Email privacy@afrozagents.ae to request access, correction, or deletion of your data. We respond within 30 days.'
      ],
      terms: [
        'Arrive 5 minutes before your appointment for check-in. Late arrivals may have their service time reduced accordingly.',
        'A 50% deposit is required for the Groom Package and color services. Deposits are non-refundable within 48 hours of the appointment.',
        'Membership benefits are non-transferable. Unused monthly services do not roll over to the next month.',
        'We reserve the right to refuse service to intoxicated clients or those exhibiting abusive behavior.',
        'All services include a 7-day satisfaction guarantee. If anything needs adjusting, come back free of charge.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking cart, and preference storage.',
        'Analytics cookies (optional) help us understand which services are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Deposits for Groom Package and color services are non-refundable within 48 hours of the appointment.',
        'Single services are payable after completion. If dissatisfied, contact us within 7 days for a free fix.',
        'Membership fees are non-refundable once a billing cycle has started.',
        'Gift cards expire 12 months from purchase and are non-refundable but transferable.'
      ],
      cancellation: [
        'Cancel at least 2 hours before your appointment via the app or by calling +971 4 555 0188.',
        'Late cancellations (within 2 hours): 50% of service fee. No-shows: 100%.',
        'Members get one free late-cancel per month.',
        'Repeated no-shows (3+ in 60 days) may require prepayment for future bookings.'
      ],
      accessibility: [
        'Our Marina Walk atelier has step-free access from the promenade level.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android) for booking.',
        'Barbers can accommodate clients with mobility limitations, sensory sensitivities, or specific needs. Mention at booking.',
        'Contact accessibility@afrozagents.ae for any concerns.'
      ]
    }
  },
  pwa: {
    appName: 'Afroza Gents Salon',
    shortName: 'Afroza',
    themeColor: '#1E3A5F',
    backgroundColor: '#0F1115',
    description: 'Book your grooming appointment instantly. Members get priority and free monthly shaves.'
  },
  features: ['Appointment Booking', 'Barber Selection', 'Membership Tiers', 'WhatsApp Reminders', 'Service History', 'Loyalty Points', 'Gift Cards', 'Push Notifications'],
  moduleCount: 19,
  pageEstimate: 18
};

// ---------------------------------------------------------------------------
// TEMPLATE 2: LADIES SALON
// Visual identity: deep charcoal + champagne + rose + soft gold, editorial luxury
// Distinct from Gents Salon — feminine, sophisticated, bridal-focused
// ---------------------------------------------------------------------------
export const LADIES_SALON_PREMIUM: CategoryConfig = {
  id: 'salons-beauty',
  name: 'Ladies Salon',
  shortName: 'Ladies Salon',
  description: 'Editorial beauty atelier — hair, color, nails, bridal, and luxury skincare.',
  theme: {
    primary: '#4A2C3F',       // deep mauve-charcoal
    secondary: '#8B6B7E',    // muted rose
    accent: '#C9A961',       // champagne gold
    bgDark: '#1A1118',        // deep rose-black
    bgLight: '#FCF7F2',       // warm cream
    textDark: '#2D1B26',
    textLight: '#F8E8E0',
    fontHeading: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    tone: 'editorial'
  },
  business: {
    name: 'Maison Lumière Beauty Atelier',
    tagline: 'Where Beauty Becomes Art',
    description: 'An editorial beauty atelier in DIFC, specializing in luxury hair color, bridal artistry, nail couture, and advanced skincare for the modern Dubai woman.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'DIFC Gate Village, Building 6, Dubai, UAE',
    phone: '+971 4 555 0199',
    whatsapp: '+971509876543',
    email: 'book@maisonlumiere.ae',
    website: 'maisonlumiere.ae',
    hours: [
      { day: 'Mon', time: 'Closed' },
      { day: 'Tue – Fri', time: '10:00 AM – 9:00 PM' },
      { day: 'Sat', time: '9:00 AM – 10:00 PM' },
      { day: 'Sun', time: '10:00 AM – 6:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Pinterest', url: 'https://pinterest.com' },
      { label: 'Vogue Arabia', url: 'https://example.com' }
    ],
    establishedYear: 2020
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Beauty, Crafted Like Couture',
    subheadline: 'Award-winning color. Bridal artistry. Nail couture. DIFC\'s most talked-about beauty atelier.',
    primaryCta: 'Book Now',
    secondaryCta: 'Meet Our Stylists',
    stats: [
      { label: 'Brides Styled', value: '320+' },
      { label: 'Master Stylists', value: '6' },
      { label: 'Industry Awards', value: '4' },
      { label: 'Instagram', value: '85K' }
    ],
    gradient: 'linear-gradient(135deg, #1A1118 0%, #4A2C3F 50%, #C9A961 100%)'
  },
  about: {
    title: 'Where Editorial Meets Everyday',
    paragraphs: [
      'Maison Lumière was founded in 2020 by Léa Moreau, a Paris-trained colorist who brought French atelier discipline to Dubai\'s beauty scene. Every appointment begins with a 15-minute consultation — face shape, lifestyle, maintenance commitment, and inspiration imagery.',
      'Our 4 industry awards include "Best Colorist UAE 2024" and "Bridal Stylist of the Year 2023". We are the official styling partner for three fashion publications and have been featured in Vogue Arabia twice.',
      'We use only ammonia-free color lines from L\'Oréal Professionnel and Wella Koleston Perfect, paired with Olaplex bond-building treatments to keep hair healthy through any transformation.'
    ],
    values: [
      { title: 'French Precision', description: 'Cutting technique from L\'Oréal Academy Paris.', icon: 'scissors' },
      { title: 'Clean Color', description: 'Ammonia-free, vegan, cruelty-free products.', icon: 'leaf' },
      { title: 'Consultation First', description: 'Every visit starts with 15-min consultation.', icon: 'message' }
    ]
  },
  services: [
    { name: 'Precision Cut & Style', description: 'Consultation, cut, blow-dry, and styling by senior stylist.', price: 'AED 280', duration: '75 min', icon: 'scissors', popular: true },
    { name: 'Balayage & Highlights', description: 'Hand-painted color with Olaplex bond protection.', price: 'AED 650', duration: '180 min', icon: 'palette', popular: true },
    { name: 'Keratin Treatment', description: 'Frizz-taming smoothing, lasts 4 months.', price: 'AED 890', duration: '150 min', icon: 'sparkles' },
    { name: 'Bridal Makeup & Hair', description: 'Trial + wedding day + touch-up kit.', price: 'AED 2,800', duration: 'Full day', icon: 'crown' },
    { name: 'Gel Nail Couture', description: 'Custom nail art with premium gels.', price: 'AED 220', duration: '90 min', icon: 'brush' },
    { name: 'Manicure & Pedicure', description: 'Luxury spa mani-pedi with massage.', price: 'AED 180', duration: '75 min', icon: 'hand' },
    { name: 'Volume Lash Extensions', description: 'Mink-free synthetic, natural look.', price: 'AED 320', duration: '120 min', icon: 'eye' },
    { name: 'Brow Lamination', description: 'Shape, tint, and laminate for full brows.', price: 'AED 180', duration: '60 min', icon: 'eye' },
    { name: 'Signature Facial', description: 'Deep cleanse, exfoliation, mask, LED therapy.', price: 'AED 350', duration: '75 min', icon: 'sparkles' }
  ],
  pricing: [
    { name: 'First Visit', price: 'AED 199', period: 'one-time', features: ['Consultation + cut + style', '15-min scalp treatment', 'Take-home care guide'], cta: 'Book First Visit' },
    { name: 'Lumière Member', price: 'AED 599', period: 'per month', features: ['1 cut + 1 color/month', 'Free Olaplex add-on', 'Priority weekend booking', '15% off all services', 'Free birthday blow-dry', 'Member-only events'], highlighted: true, cta: 'Become Member' },
    { name: 'Bridal Atelier', price: 'AED 4,500', period: 'per event', features: ['Trial + wedding day', 'Bridal party (4 people)', 'Touch-up kit included', 'Pre-wedding hair treatment', 'On-location option', '5-year anniversary touch-up'], cta: 'Enquire Bridal' }
  ],
  team: [
    { name: 'Léa Moreau', role: 'Founder & Master Colorist', bio: 'Paris-trained. 12 years. L\'Oréal Ambassador 2024.', specialty: 'Balayage & Color Correction', rating: 5.0, avatarInitials: 'LM' },
    { name: 'Sofia Ricci', role: 'Senior Stylist', bio: 'Ex-Vidal Sassoon London. Bridal specialist.', specialty: 'Cuts & Bridal Updos', rating: 4.9, avatarInitials: 'SR' },
    { name: 'Mei Wong', role: 'Nail Couture Artist', bio: 'Tokyo-trained. 8 years experience.', specialty: 'Nail Art & Gel Extensions', rating: 4.9, avatarInitials: 'MW' },
    { name: 'Aaliyah Brown', role: 'Bridal Makeup Artist', bio: 'NYFW 2023. Bridal specialist.', specialty: 'Bridal & Editorial Makeup', rating: 5.0, avatarInitials: 'AB' },
    { name: 'Dr. Yuki Tanaka', role: 'Skincare Specialist', bio: 'Dermatologist. Advanced facials.', specialty: 'Facials & Skincare', rating: 5.0, avatarInitials: 'YT' },
    { name: 'Priya Sharma', role: 'Lash & Brow Artist', bio: '7 years. Volume lash specialist.', specialty: 'Lashes & Brows', rating: 4.9, avatarInitials: 'PS' }
  ],
  gallery: [
    { title: 'Balayage Transformation', caption: 'Before & after', category: 'Color', gradient: 'linear-gradient(135deg, #4A2C3F, #C9A961)' },
    { title: 'Bridal Updo', caption: 'Wedding day styling', category: 'Bridal', gradient: 'linear-gradient(135deg, #1A1118, #8B6B7E)' },
    { title: 'Nail Couture', caption: 'Hand-painted art', category: 'Nails', gradient: 'linear-gradient(135deg, #4A2C3F, #C9A961)' },
    { title: 'Precision Bob', caption: 'French cutting technique', category: 'Cuts', gradient: 'linear-gradient(135deg, #2D1B26, #8B6B7E)' },
    { title: 'Editorial Look', caption: 'Magazine shoot', category: 'Editorial', gradient: 'linear-gradient(135deg, #1A1118, #4A2C3F)' },
    { title: 'Volume Lashes', caption: 'Natural volume set', category: 'Beauty', gradient: 'linear-gradient(135deg, #4A2C3F, #C9A961)' },
    { title: 'Signature Facial', caption: 'LED therapy', category: 'Skincare', gradient: 'linear-gradient(135deg, #1A1118, #C9A961)' },
    { title: 'Bridal Party', caption: '4 bridesmaids styled', category: 'Bridal', gradient: 'linear-gradient(135deg, #2D1B26, #C9A961)' }
  ],
  testimonials: [
    { name: 'Olivia Bennett', location: 'Downtown Dubai', rating: 5, text: 'Léa fixed a balayage disaster from another salon. I cried happy tears. The app booking was instant. The consultation alone was worth the visit.', date: '1 week ago', service: 'Balayage & Highlights' },
    { name: 'Fatima Al Zahra', location: 'Palm Jumeirah', rating: 5, text: 'My bridal trial was flawless. Sofia understood exactly the updo I wanted from one Pinterest photo. Wedding day was perfect. The touch-up kit saved me.', date: '2 weeks ago', service: 'Bridal Makeup & Hair' },
    { name: 'Rachel Kim', location: 'Business Bay', rating: 5, text: 'The Lumière membership pays for itself. Free Olaplex every color, priority weekend slots, and I never wait. This is what luxury service feels like.', date: '1 month ago', service: 'Lumière Member' },
    { name: 'Aisha Al Mansoori', location: 'Emirates Hills', rating: 5, text: 'Dr. Yuki\'s signature facial transformed my skin. 3 sessions and my pigmentation is visibly lighter. The LED therapy is the real deal.', date: '3 weeks ago', service: 'Signature Facial' }
  ],
  faq: [
    { question: 'How do I book a specific stylist?', answer: 'In the app, select your service, then choose your preferred stylist. Senior stylists (Léa, Sofia) may have a 2-week wait. Members get priority.' },
    { question: 'Do you offer color consultations?', answer: 'Yes, every color appointment includes a 15-minute consultation. For major transformations (corrective color), book a standalone consultation first (AED 80, credited to your service).' },
    { question: 'What if I don\'t like my result?', answer: 'We offer a 7-day satisfaction guarantee. If anything feels off, come back for a free adjustment. Your happiness is our reputation.' },
    { question: 'Can I bring inspiration photos?', answer: 'Please do! Pinterest and Instagram screenshots help. We will honestly tell you if it suits your hair type and face shape.' },
    { question: 'Do you do bridal home visits?', answer: 'Yes, bridal packages include on-location within Dubai for an additional AED 500 travel fee. Book at least 3 months in advance. Bridal party of 4+ gets 10% off.' },
    { question: 'What products do you use?', answer: 'L\'Oréal Professionnel, Wella Koleston Perfect, Olaplex, OPI, and CND for nails. Skincare: Image Skincare and our own Dr. Yuki-formulated line.' }
  ],
  whatsappMessage: 'Hi Maison Lumière! I would love to book an appointment. Could you share availability for this week?',
  admin: {
    metrics: [
      { label: "Today's Appointments", value: '28', delta: '+6', positive: true, icon: 'calendar' },
      { label: 'Revenue (Today)', value: 'AED 12,840', delta: '+15%', positive: true, icon: 'trending-up' },
      { label: 'Bridal Bookings (Month)', value: '4', delta: '+2', positive: true, icon: 'crown' },
      { label: 'Avg. Rating', value: '4.94', delta: '+0.01', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 0 }, { label: 'Tue', value: 9400 }, { label: 'Wed', value: 10800 },
      { label: 'Thu', value: 11500 }, { label: 'Fri', value: 14200 }, { label: 'Sat', value: 16800 }, { label: 'Sun', value: 12840 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 0 }, { label: 'Tue', value: 22 }, { label: 'Wed', value: 26 },
      { label: 'Thu', value: 28 }, { label: 'Fri', value: 34 }, { label: 'Sat', value: 38 }, { label: 'Sun', value: 28 }
    ],
    appointments: [
      { id: 'SAL-201', customerName: 'Olivia Bennett', service: 'Balayage & Highlights', staff: 'Léa Moreau', date: 'Today', time: '11:00 AM', duration: '180 min', status: 'in-progress', amount: 'AED 650', initials: 'OB' },
      { id: 'SAL-202', customerName: 'Fatima Al Zahra', service: 'Bridal Trial', staff: 'Sofia Ricci', date: 'Today', time: '1:00 PM', duration: '120 min', status: 'confirmed', amount: 'AED 1,200', initials: 'FZ' },
      { id: 'SAL-203', customerName: 'Rachel Kim', service: 'Keratin Treatment', staff: 'Léa Moreau', date: 'Today', time: '3:30 PM', duration: '150 min', status: 'confirmed', amount: 'AED 890', initials: 'RK' },
      { id: 'SAL-204', customerName: 'Hannah Lee', service: 'Precision Cut & Style', staff: 'Sofia Ricci', date: 'Today', time: '4:45 PM', duration: '75 min', status: 'confirmed', amount: 'AED 280', initials: 'HL' },
      { id: 'SAL-205', customerName: 'Maya Patel', service: 'Gel Nail Couture', staff: 'Mei Wong', date: 'Today', time: '5:30 PM', duration: '90 min', status: 'pending', amount: 'AED 220', initials: 'MP' },
      { id: 'SAL-206', customerName: 'Zara Ali', service: 'Volume Lash Extensions', staff: 'Priya Sharma', date: 'Today', time: '6:00 PM', duration: '120 min', status: 'confirmed', amount: 'AED 320', initials: 'ZA' },
      { id: 'SAL-207', customerName: 'Aisha Al Mansoori', service: 'Signature Facial', staff: 'Dr. Yuki Tanaka', date: 'Today', time: '6:30 PM', duration: '75 min', status: 'confirmed', amount: 'AED 350', initials: 'AM' },
      { id: 'SAL-208', customerName: 'Lara Nabil', service: 'Bridal Makeup (Full Day)', staff: 'Aaliyah Brown', date: 'Tomorrow', time: '8:00 AM', duration: 'Full day', status: 'confirmed', amount: 'AED 2,800', initials: 'LN' }
    ],
    customers: [
      { id: 'CUST-101', name: 'Olivia Bennett', email: 'olivia@example.com', phone: '+971 50 234 1111', totalBookings: 22, totalSpent: 'AED 14,300', lastVisit: '1 week ago', status: 'vip', initials: 'OB' },
      { id: 'CUST-102', name: 'Fatima Al Zahra', email: 'fatima@example.com', phone: '+971 50 234 2222', totalBookings: 8, totalSpent: 'AED 9,800', lastVisit: '2 weeks ago', status: 'vip', initials: 'FZ' },
      { id: 'CUST-103', name: 'Rachel Kim', email: 'rachel@example.com', phone: '+971 50 234 3333', totalBookings: 15, totalSpent: 'AED 7,650', lastVisit: '5 days ago', status: 'active', initials: 'RK' },
      { id: 'CUST-104', name: 'Hannah Lee', email: 'hannah@example.com', phone: '+971 50 234 4444', totalBookings: 2, totalSpent: 'AED 560', lastVisit: '3 days ago', status: 'new', initials: 'HL' },
      { id: 'CUST-105', name: 'Maya Patel', email: 'maya@example.com', phone: '+971 50 234 5555', totalBookings: 11, totalSpent: 'AED 3,200', lastVisit: '1 month ago', status: 'active', initials: 'MP' },
      { id: 'CUST-106', name: 'Aisha Al Mansoori', email: 'aisha@example.com', phone: '+971 50 234 6666', totalBookings: 47, totalSpent: 'AED 18,840', lastVisit: '3 days ago', status: 'vip', initials: 'AM' }
    ],
    recentActivity: [
      { time: '4 min ago', text: 'New booking: Olivia Bennett balayage 11 AM', type: 'info' },
      { time: '22 min ago', text: 'Payment received: AED 1,200 from Fatima Al Zahra', type: 'success' },
      { time: '47 min ago', text: 'New 5-star review from Rachel Kim', type: 'success' },
      { time: '1 hr ago', text: 'Loyalty member upgrade: Hannah Lee', type: 'info' },
      { time: '3 hr ago', text: 'Low stock: Wella Koleston 7/0 (4 tubes left)', type: 'warning' }
    ],
    staff: [
      { name: 'Léa Moreau', role: 'Founder & Master Colorist', bio: 'Paris-trained. 12 years.', specialty: 'Balayage & Color', rating: 5.0, avatarInitials: 'LM' },
      { name: 'Sofia Ricci', role: 'Senior Stylist', bio: 'Ex-Vidal Sassoon London.', specialty: 'Cuts & Bridal', rating: 4.9, avatarInitials: 'SR' },
      { name: 'Mei Wong', role: 'Nail Couture Artist', bio: 'Tokyo-trained.', specialty: 'Nail Art', rating: 4.9, avatarInitials: 'MW' },
      { name: 'Aaliyah Brown', role: 'Bridal Makeup Artist', bio: 'NYFW 2023.', specialty: 'Bridal Makeup', rating: 5.0, avatarInitials: 'AB' },
      { name: 'Dr. Yuki Tanaka', role: 'Skincare Specialist', bio: 'Dermatologist.', specialty: 'Facials & Skincare', rating: 5.0, avatarInitials: 'YT' },
      { name: 'Priya Sharma', role: 'Lash & Brow Artist', bio: '7 years experience.', specialty: 'Lashes & Brows', rating: 4.9, avatarInitials: 'PS' }
    ],
    services: [
      { name: 'Precision Cut & Style', description: 'Consultation, cut, blow-dry, styling.', price: 'AED 280', duration: '75 min', icon: 'scissors', popular: true },
      { name: 'Balayage & Highlights', description: 'Hand-painted color with Olaplex.', price: 'AED 650', duration: '180 min', icon: 'palette', popular: true },
      { name: 'Bridal Makeup & Hair', description: 'Trial + wedding day + touch-up kit.', price: 'AED 2,800', duration: 'Full day', icon: 'crown' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Maison Lumière Beauty Atelier',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'privacy@maisonlumiere.ae',
    policies: {
      privacy: [
        'Maison Lumière Beauty Atelier ("we") collects your name, contact details, hair/skin history, allergy information, and service preferences to deliver personalized beauty services.',
        'We use your information to confirm appointments, send reminders, recommend services, and process payments securely.',
        'Photographs of your hair/makeup may be taken with your explicit consent for our portfolio and social media. You can withdraw consent at any time.',
        'We do not sell your data. Information is shared only with our payment processor and the specific stylist assigned to your appointment.',
        'Email privacy@maisonlumiere.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'A 50% deposit is required for balayage, keratin, and bridal bookings. Deposits are non-refundable within 48 hours of the appointment.',
        'Color results vary based on hair history, porosity, and previous treatments. Our stylists will discuss realistic outcomes during consultation.',
        'Patch tests are required 48 hours before any color service for new clients. This is a safety requirement, not optional.',
        'Loyalty memberships are non-transferable. Unused monthly services do not roll over.',
        'We reserve the right to refuse service for abusive behavior, intoxication, or failure to follow stylist guidance.'
      ],
      cookies: [
        'Our app uses essential cookies for session, preferred stylist, and service history.',
        'Analytics cookies (optional) help us understand which services are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Deposits for color and bridal services are non-refundable within 48 hours of the appointment.',
        'If dissatisfied with a service, contact us within 7 days. We offer free adjustment or partial refund at our discretion.',
        'Loyalty membership fees are non-refundable once a billing cycle has started.',
        'Gift cards expire 12 months from purchase and are non-refundable but transferable.'
      ],
      cancellation: [
        'Cancel at least 24 hours before your appointment via the app or by calling +971 4 555 0199.',
        'Late cancellations (within 24 hours) forfeit the deposit. Members get one free late-cancel per quarter.',
        'No-shows are charged at 100% of the service price.',
        'Repeated late cancellations (3+ in 90 days) require prepayment for future bookings.'
      ],
      accessibility: [
        'Our DIFC atelier has step-free access from Gate Village parking and an accessible treatment room.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android).',
        'Stylists are trained to assist clients with limited mobility, visual impairment, or sensory sensitivity.',
        'For specific needs, mention at booking. Contact accessibility@maisonlumiere.ae for any concerns.'
      ]
    }
  },
  pwa: {
    appName: 'Maison Lumière',
    shortName: 'Lumière',
    themeColor: '#4A2C3F',
    backgroundColor: '#1A1118',
    description: 'Book your stylist instantly. Members get priority weekend slots and free Olaplex add-ons.'
  },
  features: ['Stylist Booking', 'Bridal Packages', 'Color Consultations', 'Loyalty Rewards', 'Portfolio Gallery', 'WhatsApp Reminders', 'Patch Test Scheduling', 'Push Notifications'],
  moduleCount: 19,
  pageEstimate: 18
};

// ---------------------------------------------------------------------------
// TEMPLATE 3: SPA & WELLNESS
// Visual identity: deep charcoal + warm sand + cream + muted green + champagne
// Calm, immersive, luxury hospitality feel — NOT like either salon
// ---------------------------------------------------------------------------
export const SPA_WELLNESS_PREMIUM: CategoryConfig = {
  id: 'spas-massage',
  name: 'Spa & Wellness',
  shortName: 'Spa & Wellness',
  description: 'Luxury wellness sanctuary — massages, facials, body treatments, and holistic therapies.',
  theme: {
    primary: '#5B6B5A',       // muted sage green
    secondary: '#8FA68E',     // soft sage
    accent: '#C4A77D',        // warm sand/champagne
    bgDark: '#1C1B17',        // deep warm charcoal
    bgLight: '#F7F3ED',       // warm cream
    textDark: '#2A2823',
    textLight: '#F0EBE0',
    fontHeading: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    tone: 'luxury'
  },
  business: {
    name: 'Serenity Sanctuary Spa',
    tagline: 'Where Stillness Heals',
    description: 'A luxury wellness sanctuary in the heart of the Dubai desert, offering holistic treatments, therapeutic massages, and immersive wellness journeys designed to restore body and mind.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Bab Al Shams Desert Resort, Dubai, UAE',
    phone: '+971 4 555 0177',
    whatsapp: '+971501122334',
    email: 'serenity@sanctuaryspa.ae',
    website: 'sanctuaryspa.ae',
    hours: [
      { day: 'Sun – Wed', time: '9:00 AM – 9:00 PM' },
      { day: 'Thu – Fri', time: '9:00 AM – 11:00 PM' },
      { day: 'Sat', time: '10:00 AM – 10:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Pinterest', url: 'https://pinterest.com' },
      { label: 'Google Maps', url: 'https://maps.google.com' }
    ],
    establishedYear: 2018
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Surrender to Stillness',
    subheadline: 'Award-winning treatments. Desert sanctuary setting. Holistic therapies that restore body, mind, and spirit. Book your journey.',
    primaryCta: 'Book Treatment',
    secondaryCta: 'Explore Treatments',
    stats: [
      { label: 'Guests Pampered', value: '15,000+' },
      { label: 'Expert Therapists', value: '10' },
      { label: 'Years of Calm', value: '8' },
      { label: 'Awards', value: '7' }
    ],
    gradient: 'linear-gradient(135deg, #1C1B17 0%, #5B6B5A 50%, #C4A77D 100%)'
  },
  about: {
    title: 'A Sanctuary Born from Stillness',
    paragraphs: [
      'Serenity Sanctuary Spa was founded in 2018 in the heart of the Dubai desert at Bab Al Shams. We believe true wellness comes from harmony between body, mind, and environment — every detail of our sanctuary is designed to lower cortisol from the moment you arrive.',
      'Our 12 treatment rooms include 2 couples suites with private gardens, a traditional Moroccan hammam, a hydrotherapy circuit, and a dedicated meditation pavilion. Soundscapes, aromatherapy, and lighting are calibrated to induce deep relaxation within 90 seconds.',
      'We are the only desert spa in the UAE certified in both traditional Thai Royal Massage and clinical sports recovery protocols. Our therapists hold international ITEC qualifications and train annually in Bali, Thailand, and Switzerland.'
    ],
    values: [
      { title: 'Holistic Healing', description: 'We treat the whole person — body, mind, and spirit.', icon: 'leaf' },
      { title: 'Desert Sanctuary', description: '45 minutes from Dubai, a world away from the city.', icon: 'sun' },
      { title: 'Clinical Expertise', description: 'ITEC-certified therapists. Sports recovery protocols.', icon: 'shield' }
    ]
  },
  services: [
    { name: 'Royal Thai Massage', description: 'Traditional assisted-stretching therapy from Thailand.', price: 'AED 380', duration: '90 min', icon: 'flower', popular: true },
    { name: 'Deep Tissue Recovery', description: 'Targeted pressure for chronic tension and sports recovery.', price: 'AED 320', duration: '60 min', icon: 'muscle', popular: true },
    { name: 'Aromatherapy Journey', description: 'Custom essential oil blend in a private suite.', price: 'AED 420', duration: '75 min', icon: 'droplet' },
    { name: 'Hot Stone Therapy', description: 'Heated volcanic basalt stones to melt deep tension.', price: 'AED 450', duration: '90 min', icon: 'flame' },
    { name: 'Couples Sanctuary', description: 'Private suite for two with garden access and champagne.', price: 'AED 880', duration: '120 min', icon: 'heart', popular: true },
    { name: 'Moroccan Hammam Ritual', description: 'Traditional steam, scrub, and clay wrap.', price: 'AED 380', duration: '75 min', icon: 'sparkles' },
    { name: 'Signature Facial', description: 'Deep cleanse, exfoliation, mask, and LED therapy.', price: 'AED 350', duration: '75 min', icon: 'sparkles' },
    { name: 'Hydrotherapy Circuit', description: 'Hot/cold contrast pools, sauna, steam, ice plunge.', price: 'AED 220', duration: '60 min', icon: 'droplet' },
    { name: 'Meditation Session', description: 'Guided meditation in our pavilion. 30 min.', price: 'AED 120', duration: '30 min', icon: 'sun' }
  ],
  pricing: [
    { name: 'Day Retreat', price: 'AED 599', period: '4 hours', features: ['Choice of 2 treatments', 'Hammam access', 'Hydrotherapy circuit', 'Healthy lunch', 'Meditation session', 'Spa gift bag'], cta: 'Book Day Retreat' },
    { name: 'Wellness Membership', price: 'AED 1,899', period: 'per month', features: ['4 treatments/month', '20% off all services', 'Priority booking', 'Free hydrotherapy', 'Monthly guest pass', 'Private locker', 'Member-only events'], highlighted: true, cta: 'Join Membership' },
    { name: 'Couples Sanctuary', price: 'AED 880', period: '2 hours', features: ['Private suite for two', 'Choice of 2 treatments', 'Champagne & chocolates', 'Garden access', 'Couples meditation', 'Photo keepsake'], cta: 'Book Couples' }
  ],
  team: [
    { name: 'Amara Chen', role: 'Lead Therapist', bio: '15 years. Former Banyan Tree Bangkok.', specialty: 'Thai & Deep Tissue', rating: 4.9, avatarInitials: 'AC' },
    { name: 'Layla Hassan', role: 'Aromatherapist', bio: 'Certified in Grasse, France. 10 years.', specialty: 'Aromatherapy & Hot Stone', rating: 5.0, avatarInitials: 'LH' },
    { name: 'Yuki Tanaka', role: 'Reflexology Specialist', bio: 'Japan Shiatsu College, Tokyo.', specialty: 'Reflexology & Shiatsu', rating: 4.8, avatarInitials: 'YT' },
    { name: 'Priya Sharma', role: 'Wellness Director', bio: '10 years luxury hospitality. 4 languages.', specialty: 'Couples & Signature', rating: 4.9, avatarInitials: 'PS' },
    { name: 'Sofia Lindqvist', role: 'Hammam Specialist', bio: 'Trained in Marrakech. 8 years.', specialty: 'Hammam & Body Treatments', rating: 5.0, avatarInitials: 'SL' },
    { name: 'Dr. Marco Bianchi', role: 'Sports Recovery', bio: 'DPT. Sports injury rehabilitation.', specialty: 'Sports Recovery & Deep Tissue', rating: 5.0, avatarInitials: 'MB' }
  ],
  gallery: [
    { title: 'Private Suite', caption: 'Couples therapy room', category: 'Rooms', gradient: 'linear-gradient(135deg, #1C1B17, #5B6B5A)' },
    { title: 'Hammam', caption: 'Traditional Moroccan steam', category: 'Facilities', gradient: 'linear-gradient(135deg, #5B6B5A, #C4A77D)' },
    { title: 'Hot Stone Setup', caption: 'Volcanic basalt stones', category: 'Treatments', gradient: 'linear-gradient(135deg, #1C1B17, #C4A77D)' },
    { title: 'Meditation Pavilion', caption: 'Quiet reflection space', category: 'Facilities', gradient: 'linear-gradient(135deg, #2A2823, #5B6B5A)' },
    { title: 'Hydrotherapy Pool', caption: 'Hot/cold contrast circuit', category: 'Facilities', gradient: 'linear-gradient(135deg, #5B6B5A, #8FA68E)' },
    { title: 'Couples Garden', caption: 'Private outdoor space', category: 'Rooms', gradient: 'linear-gradient(135deg, #1C1B17, #8FA68E)' },
    { title: 'Aromatherapy Oils', caption: 'Custom essential blends', category: 'Products', gradient: 'linear-gradient(135deg, #5B6B5A, #C4A77D)' },
    { title: 'Tea Ceremony', caption: 'Post-treatment lounge', category: 'Facilities', gradient: 'linear-gradient(135deg, #2A2823, #C4A77D)' }
  ],
  testimonials: [
    { name: 'Elena Petrova', location: 'Dubai Marina', rating: 5, text: 'Best massage I have had in 10 years in Dubai. Amara understood exactly where I held tension. The desert setting is magical. Booking through the app took 30 seconds.', date: '2 weeks ago', service: 'Royal Thai Massage' },
    { name: 'James Whitfield', location: 'Jumeirah', rating: 5, text: 'The couples sanctuary was worth every dirham. Private suite, garden, champagne, 2-hour journey. We booked again next month. The meditation pavilion is a hidden gem.', date: '1 month ago', service: 'Couples Sanctuary' },
    { name: 'Aisha Al Mansoori', location: 'Emirates Hills', rating: 5, text: 'As a member for 2 years, the priority booking and free hydrotherapy make me feel valued. The app remembers my therapist preferences. The desert drive is worth it.', date: '3 weeks ago', service: 'Wellness Membership' },
    { name: 'David Cohen', location: 'DIFC', rating: 5, text: 'Dr. Marco fixed my sports injury in 3 sessions. The deep tissue recovery is clinical-grade. I went from chronic back pain to pain-free in 2 weeks. Highly recommend.', date: '1 week ago', service: 'Deep Tissue Recovery' }
  ],
  faq: [
    { question: 'How far is the spa from Dubai?', answer: 'We are located at Bab Al Shams Desert Resort, 45 minutes from Downtown Dubai. Complimentary shuttle service runs twice daily from Dubai Marina and Downtown. Schedule at booking.' },
    { question: 'What should I wear?', answer: 'We provide robes, slippers, and disposable undergarments for all treatments. Arrive 30 minutes early to enjoy the relaxation lounge and hydrotherapy circuit before your treatment.' },
    { question: 'Can I request a specific therapist?', answer: 'Yes, select your preferred therapist when booking through the app. Members get priority on popular time slots. All our therapists are ITEC-certified.' },
    { question: 'What is the cancellation policy?', answer: 'Free cancellation up to 24 hours before. Within 24 hours, 50% fee applies. Day-of cancellations and no-shows are charged at 100%. Members get one free late-cancel per month.' },
    { question: 'Do you offer day retreats?', answer: 'Yes, our AED 599 Day Retreat includes 2 treatments, hammam, hydrotherapy, lunch, meditation, and a spa gift bag. 4-hour experience. Book through the app.' },
    { question: 'Is the spa suitable for men?', answer: 'Absolutely. We have male and female therapists, gender-segregated hydrotherapy areas, and a dedicated men\'s grooming lounge. Dr. Marco specializes in sports recovery for male athletes.' }
  ],
  whatsappMessage: 'Hello Serenity Sanctuary! I would like to book a treatment. Could you check availability for this weekend?',
  admin: {
    metrics: [
      { label: "Today's Bookings", value: '32', delta: '+18%', positive: true, icon: 'calendar' },
      { label: 'Revenue (Today)', value: 'AED 14,820', delta: '+12%', positive: true, icon: 'trending-up' },
      { label: 'Active Members', value: '184', delta: '+12', positive: true, icon: 'users' },
      { label: 'Avg. Rating', value: '4.92', delta: '+0.03', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 9200 }, { label: 'Tue', value: 10800 }, { label: 'Wed', value: 12400 },
      { label: 'Thu', value: 14800 }, { label: 'Fri', value: 18400 }, { label: 'Sat', value: 19200 }, { label: 'Sun', value: 14820 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 22 }, { label: 'Tue', value: 26 }, { label: 'Wed', value: 28 },
      { label: 'Thu', value: 34 }, { label: 'Fri', value: 42 }, { label: 'Sat', value: 44 }, { label: 'Sun', value: 32 }
    ],
    appointments: [
      { id: 'APT-301', customerName: 'Elena Petrova', service: 'Royal Thai Massage', staff: 'Amara Chen', date: 'Today', time: '10:00 AM', duration: '90 min', status: 'completed', amount: 'AED 380', initials: 'EP' },
      { id: 'APT-302', customerName: 'James Whitfield', service: 'Couples Sanctuary', staff: 'Priya Sharma', date: 'Today', time: '11:00 AM', duration: '120 min', status: 'in-progress', amount: 'AED 880', initials: 'JW' },
      { id: 'APT-303', customerName: 'Aisha Al Mansoori', service: 'Aromatherapy Journey', staff: 'Layla Hassan', date: 'Today', time: '1:00 PM', duration: '75 min', status: 'confirmed', amount: 'AED 420', initials: 'AM' },
      { id: 'APT-304', customerName: 'David Cohen', service: 'Deep Tissue Recovery', staff: 'Dr. Marco Bianchi', date: 'Today', time: '2:30 PM', duration: '60 min', status: 'confirmed', amount: 'AED 320', initials: 'DC' },
      { id: 'APT-305', customerName: 'Sarah Goldberg', service: 'Moroccan Hammam Ritual', staff: 'Sofia Lindqvist', date: 'Today', time: '3:00 PM', duration: '75 min', status: 'pending', amount: 'AED 380', initials: 'SG' },
      { id: 'APT-306', customerName: 'Yusuf Rahman', service: 'Hot Stone Therapy', staff: 'Layla Hassan', date: 'Today', time: '4:00 PM', duration: '90 min', status: 'confirmed', amount: 'AED 450', initials: 'YR' },
      { id: 'APT-307', customerName: 'Mei Lin', service: 'Day Retreat (4hr)', staff: 'Multiple', date: 'Today', time: '10:00 AM', duration: '4 hours', status: 'in-progress', amount: 'AED 599', initials: 'ML' },
      { id: 'APT-308', customerName: 'Hassan Ali', service: 'Hydrotherapy Circuit', staff: 'Self-service', date: 'Today', time: '5:30 PM', duration: '60 min', status: 'confirmed', amount: 'AED 220', initials: 'HA' }
    ],
    customers: [
      { id: 'CUST-201', name: 'Elena Petrova', email: 'elena@example.com', phone: '+971 50 345 1111', totalBookings: 28, totalSpent: 'AED 9,240', lastVisit: '2 weeks ago', status: 'vip', initials: 'EP' },
      { id: 'CUST-202', name: 'James Whitfield', email: 'james@example.com', phone: '+971 50 345 2222', totalBookings: 19, totalSpent: 'AED 12,800', lastVisit: '1 month ago', status: 'vip', initials: 'JW' },
      { id: 'CUST-203', name: 'Aisha Al Mansoori', email: 'aisha@example.com', phone: '+971 50 345 3333', totalBookings: 47, totalSpent: 'AED 18,840', lastVisit: '3 weeks ago', status: 'vip', initials: 'AM' },
      { id: 'CUST-204', name: 'David Cohen', email: 'david@example.com', phone: '+971 50 345 4444', totalBookings: 8, totalSpent: 'AED 2,560', lastVisit: '1 week ago', status: 'active', initials: 'DC' },
      { id: 'CUST-205', name: 'Sarah Goldberg', email: 'sarah@example.com', phone: '+971 50 345 5555', totalBookings: 3, totalSpent: 'AED 880', lastVisit: '5 days ago', status: 'new', initials: 'SG' },
      { id: 'CUST-206', name: 'Yusuf Rahman', email: 'yusuf@example.com', phone: '+971 50 345 6666', totalBookings: 12, totalSpent: 'AED 4,200', lastVisit: '1 month ago', status: 'active', initials: 'YR' }
    ],
    recentActivity: [
      { time: '2 min ago', text: 'New booking: Elena Petrova Royal Thai 10 AM', type: 'success' },
      { time: '14 min ago', text: 'Payment received: AED 880 from James Whitfield', type: 'success' },
      { time: '38 min ago', text: 'Aisha Al Mansoori upgraded to Wellness Membership', type: 'info' },
      { time: '1 hr ago', text: 'Low stock: Lavender essential oil (3 bottles left)', type: 'warning' },
      { time: '2 hr ago', text: 'New 5-star review from David Cohen', type: 'success' }
    ],
    staff: [
      { name: 'Amara Chen', role: 'Lead Therapist', bio: '15 years. Former Banyan Tree Bangkok.', specialty: 'Thai & Deep Tissue', rating: 4.9, avatarInitials: 'AC' },
      { name: 'Layla Hassan', role: 'Aromatherapist', bio: 'Certified in Grasse, France.', specialty: 'Aromatherapy & Hot Stone', rating: 5.0, avatarInitials: 'LH' },
      { name: 'Yuki Tanaka', role: 'Reflexology Specialist', bio: 'Japan Shiatsu College.', specialty: 'Reflexology & Shiatsu', rating: 4.8, avatarInitials: 'YT' },
      { name: 'Priya Sharma', role: 'Wellness Director', bio: '10 years luxury hospitality.', specialty: 'Couples & Signature', rating: 4.9, avatarInitials: 'PS' },
      { name: 'Sofia Lindqvist', role: 'Hammam Specialist', bio: 'Trained in Marrakech.', specialty: 'Hammam & Body', rating: 5.0, avatarInitials: 'SL' },
      { name: 'Dr. Marco Bianchi', role: 'Sports Recovery', bio: 'DPT. Sports rehab.', specialty: 'Sports Recovery', rating: 5.0, avatarInitials: 'MB' }
    ],
    services: [
      { name: 'Royal Thai Massage', description: 'Traditional assisted-stretching from Thailand.', price: 'AED 380', duration: '90 min', icon: 'flower', popular: true },
      { name: 'Deep Tissue Recovery', description: 'Targeted pressure for chronic tension.', price: 'AED 320', duration: '60 min', icon: 'muscle', popular: true },
      { name: 'Couples Sanctuary', description: 'Private suite for two with garden.', price: 'AED 880', duration: '120 min', icon: 'heart' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Serenity Sanctuary Spa',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'privacy@sanctuaryspa.ae',
    policies: {
      privacy: [
        'Serenity Sanctuary Spa ("we") respects your privacy. This policy explains how we collect, use, and protect your personal information when you book treatments, purchase memberships, or use our mobile app.',
        'We collect your name, contact details, treatment preferences, health information you disclose (allergies, injuries, conditions), and payment details. Health information is collected only to ensure safe treatment delivery.',
        'We use your data to confirm bookings, send appointment reminders via WhatsApp and SMS, process payments securely, personalize treatment recommendations, and send promotional offers (only with consent).',
        'We do not sell your data to third parties. We share information only with our payment processor, booking infrastructure, and the specific therapist assigned to your appointment.',
        'You may request access to, correction of, or deletion of your data at any time by emailing privacy@sanctuaryspa.ae. We respond within 30 days.'
      ],
      terms: [
        'By booking a treatment at Serenity Sanctuary Spa, you agree to arrive 30 minutes before your appointment time for check-in and to enjoy our relaxation facilities.',
        'Treatments are provided by certified therapists. While we take every care to ensure your safety, you must disclose any health conditions, allergies, or injuries before treatment begins.',
        'Pricing is in UAE Dirhams (AED) and includes all applicable taxes. Prices are subject to change with 30 days notice.',
        'Membership benefits are non-transferable. Unused treatments in a billing cycle do not roll over unless explicitly stated.',
        'We reserve the right to refuse service to any client who is intoxicated, abusive, or fails to follow therapist instructions during treatment.'
      ],
      cookies: [
        'Our web app and mobile app use minimal cookies and local storage to remember your login session, preferred therapist, and booking history.',
        'Essential cookies: session token, authentication state. These cannot be disabled if you want to use the app.',
        'Analytics cookies: anonymized usage data to improve our services. You can opt out in Settings → Privacy.',
        'We do not use third-party advertising cookies.'
      ],
      refund: [
        'Treatments cancelled more than 24 hours in advance receive a full refund to the original payment method within 5–7 business days.',
        'Treatments cancelled within 24 hours are charged at 50%. No-shows are charged at 100%.',
        'Membership fees are non-refundable once the billing cycle has started. You may cancel future renewals at any time.',
        'Day retreats and packages are non-refundable within 48 hours of the booking.'
      ],
      cancellation: [
        'To cancel or reschedule, use the app at least 24 hours before your appointment, or call +971 4 555 0177 during opening hours.',
        'Members receive one free late-cancellation per month (within the 24-hour window) without penalty.',
        'If you need to cancel due to a medical emergency, contact us within 24 hours and the fee will be waived with documentation.',
        'Repeated late cancellations (3+ in 60 days) may result in a requirement to prepay for future bookings.'
      ],
      accessibility: [
        'Serenity Sanctuary Spa is committed to making wellness accessible to all. Our desert sanctuary has step-free access throughout, a treatment room equipped for wheelchair transfer, and therapists trained in adaptive techniques.',
        'Our mobile app supports iOS VoiceOver and Android TalkBack. We are working toward WCAG 2.1 AA compliance for all digital touchpoints.',
        'If you have specific accessibility needs (visual impairment, hearing impairment, limited mobility, sensory sensitivity), please mention this at booking so we can prepare appropriately.',
        'Contact accessibility@sanctuaryspa.ae with any concerns. We respond within 2 business days.'
      ]
    }
  },
  pwa: {
    appName: 'Serenity Sanctuary',
    shortName: 'Serenity',
    themeColor: '#5B6B5A',
    backgroundColor: '#1C1B17',
    description: 'Book luxury spa treatments instantly. Members get priority booking and exclusive wellness events.'
  },
  features: ['Treatment Booking', 'Therapist Selection', 'Day Retreats', 'Wellness Membership', 'Couples Packages', 'Hammam Access', 'WhatsApp Reminders', 'Push Notifications'],
  moduleCount: 19,
  pageEstimate: 18
};

export const PREMIUM_TEMPLATES: CategoryConfig[] = [
  GENTS_SALON_PREMIUM,
  LADIES_SALON_PREMIUM,
  SPA_WELLNESS_PREMIUM
];

export function getPremiumTemplateById(id: string): CategoryConfig | undefined {
  return PREMIUM_TEMPLATES.find((t) => t.id === id || t.shortName === id);
}
