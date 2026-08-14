import { CategoryConfig } from './types';

// ============================================================================
// Categories 1-5: Spa, Salon, Restaurant, Garage, Cleaning
// Each has a distinct visual identity (tone) and category-specific demo data.
// All demo businesses and customer info are FICTIONAL.
// ============================================================================

export const SPA_CONFIG: CategoryConfig = {
  id: 'spas-massage',
  name: 'Spas & Massage Centers',
  shortName: 'Spa',
  description: 'Luxury wellness, treatments, therapists, and appointment booking.',
  theme: {
    primary: '#7C3AED',      // deep violet
    secondary: '#C4B5FD',    // lavender
    accent: '#FBBF24',       // gold
    bgDark: '#1A1033',       // deep plum
    bgLight: '#FAF5FF',      // soft lavender white
    textDark: '#2D1B4E',
    textLight: '#F5F3FF',
    fontHeading: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    tone: 'luxury'
  },
  business: {
    name: 'Serenity Lotus Spa & Wellness',
    tagline: 'Where Ancient Healing Meets Modern Luxury',
    description: 'A sanctuary of calm offering expert massage therapy, holistic treatments, and wellness journeys designed to restore body and mind.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Al Wasl Road, Jumeirah 1, Dubai, UAE',
    phone: '+971 4 555 0188',
    whatsapp: '+971501234567',
    email: 'hello@serenitylotus.ae',
    website: 'serenitylotus.ae',
    hours: [
      { day: 'Mon – Wed', time: '9:00 AM – 9:00 PM' },
      { day: 'Thu – Fri', time: '9:00 AM – 10:00 PM' },
      { day: 'Sat – Sun', time: '10:00 AM – 8:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Facebook', url: 'https://facebook.com' },
      { label: 'TikTok', url: 'https://tiktok.com' }
    ],
    establishedYear: 2018
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Unwind into Pure Serenity',
    subheadline: 'Award-winning massage therapy and holistic treatments in the heart of Jumeirah. Book your escape today.',
    primaryCta: 'Book Your Treatment',
    secondaryCta: 'View Treatments',
    stats: [
      { label: 'Happy Clients', value: '12,000+' },
      { label: 'Expert Therapists', value: '8' },
      { label: 'Years of Calm', value: '6' },
      { label: '5-Star Reviews', value: '1,840' }
    ],
    gradient: 'linear-gradient(135deg, #1A1033 0%, #4C1D95 50%, #7C3AED 100%)'
  },
  about: {
    title: 'A Sanctuary Built on Stillness',
    paragraphs: [
      'Founded in 2018, Serenity Lotus Spa was born from a single belief: that true wellness comes from harmony between body, mind, and environment. Our therapists blend traditional Eastern techniques with modern Western science.',
      'Every treatment room is designed to lower cortisol from the moment you step inside — soundscapes, aromatherapy, and lighting calibrated to induce deep relaxation within 90 seconds.',
      'We are the only spa in Jumeirah certified in both Thai Royal Massage and clinical sports recovery protocols.'
    ],
    values: [
      { title: 'Holistic Healing', description: 'We treat the whole person, not just the symptom.', icon: 'leaf' },
      { title: 'Certified Therapists', description: 'Every therapist holds international ITEC qualifications.', icon: 'shield' },
      { title: 'Organic Products', description: '100% plant-based oils, ethically sourced.', icon: 'sparkles' }
    ]
  },
  services: [
    { name: 'Royal Thai Massage', description: 'Traditional assisted-stretching therapy from Thailand.', price: 'AED 320', duration: '90 min', icon: 'flower', popular: true },
    { name: 'Deep Tissue Recovery', description: 'Targeted pressure for chronic tension and sports recovery.', price: 'AED 280', duration: '60 min', icon: 'muscle' },
    { name: 'Aromatherapy Journey', description: 'Custom essential oil blend in a private suite.', price: 'AED 350', duration: '75 min', icon: 'droplet', popular: true },
    { name: 'Hot Stone Therapy', description: 'Heated volcanic basalt stones to melt deep tension.', price: 'AED 380', duration: '90 min', icon: 'flame' },
    { name: 'Couples Retreat', description: 'Private suite for two with champagne and chocolates.', price: 'AED 720', duration: '120 min', icon: 'heart' },
    { name: 'Reflexology Session', description: 'Pressure point therapy on feet to restore energy flow.', price: 'AED 220', duration: '45 min', icon: 'circle' }
  ],
  pricing: [
    { name: 'Wellness Intro', price: 'AED 199', period: 'first visit', features: ['60-min signature massage', 'Welcome herbal tea ritual', 'Spa tour & consultation'], cta: 'Book Intro' },
    { name: 'Monthly Membership', price: 'AED 899', period: 'per month', features: ['2 treatments/month', '15% off all add-ons', 'Priority booking', 'Free aromatherapy upgrade', 'Member-only events'], highlighted: true, cta: 'Join Membership' },
    { name: 'Annual Serenity', price: 'AED 8,999', period: 'per year', features: ['24 treatments/year', '20% off all services', 'Free monthly guest pass', 'Private locker', 'Birthday couples package'], cta: 'Go Annual' }
  ],
  team: [
    { name: 'Amara Chen', role: 'Lead Therapist', bio: '15 years experience. Former therapist at Banyan Tree Bangkok.', specialty: 'Thai & Deep Tissue', rating: 4.9, avatarInitials: 'AC' },
    { name: 'Layla Hassan', role: 'Aromatherapist', bio: 'Certified in clinical aromatherapy from Grasse, France.', specialty: 'Aromatherapy & Hot Stone', rating: 5.0, avatarInitials: 'LH' },
    { name: 'Yuki Tanaka', role: 'Reflexology Specialist', bio: 'Trained at the Japan Shiatsu College, Tokyo.', specialty: 'Reflexology & Shiatsu', rating: 4.8, avatarInitials: 'YT' },
    { name: 'Priya Sharma', role: 'Wellness Director', bio: '10 years in luxury hospitality. Speaks 4 languages.', specialty: 'Couples & Signature Treatments', rating: 4.9, avatarInitials: 'PS' }
  ],
  gallery: [
    { title: 'Private Suite', caption: 'Couples therapy room', category: 'Rooms', gradient: 'linear-gradient(135deg, #4C1D95, #7C3AED)' },
    { title: 'Hot Stone Setup', caption: 'Volcanic basalt stones', category: 'Treatments', gradient: 'linear-gradient(135deg, #92400E, #F59E0B)' },
    { title: 'Relaxation Lounge', caption: 'Pre-treatment calm zone', category: 'Facilities', gradient: 'linear-gradient(135deg, #1A1033, #6D28D9)' },
    { title: 'Aromatherapy Oils', caption: 'Organic essential blends', category: 'Products', gradient: 'linear-gradient(135deg, #166534, #4ADE80)' },
    { title: 'Foot Ritual', caption: 'Welcome ceremony', category: 'Rituals', gradient: 'linear-gradient(135deg, #7C2D12, #FB923C)' },
    { title: 'Tea Ceremony', caption: 'Post-treatment lounge', category: 'Facilities', gradient: 'linear-gradient(135deg, #365314, #84CC16)' }
  ],
  testimonials: [
    { name: 'Elena Petrova', location: 'Dubai Marina', rating: 5, text: 'Best massage I have had in 10 years living in Dubai. Amara understood exactly where I held tension. Booking through the app took 30 seconds.', date: '2 weeks ago', service: 'Deep Tissue Recovery' },
    { name: 'James Whitfield', location: 'Jumeirah', rating: 5, text: 'The couples retreat was worth every dirham. The private suite, the champagne, the 2-hour journey — flawless. We booked again next month.', date: '1 month ago', service: 'Couples Retreat' },
    { name: 'Aisha Al Mansoori', location: 'Emirates Hills', rating: 5, text: 'As a member for 2 years, the priority booking and free upgrades make me feel genuinely valued. The app remembers my therapist preferences.', date: '3 weeks ago', service: 'Monthly Membership' }
  ],
  faq: [
    { question: 'What should I wear for my treatment?', answer: 'We provide disposable underwear and robes for all treatments. You will be professionally draped throughout — only the area being treated is exposed.' },
    { question: 'Can I request a specific therapist?', answer: 'Yes, when booking through our app you can select your preferred therapist. Members get priority on popular time slots.' },
    { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 12 hours before your appointment. Within 12 hours, a 50% fee applies. Members get one free late-cancel per month.' },
    { question: 'Are gift vouchers available?', answer: 'Yes, digital and physical vouchers from AED 199 to AED 2,000 are available through the app and redeemable for any treatment.' },
    { question: 'Do you serve male and female clients?', answer: 'Yes, we have separate treatment areas and both male and female therapists available. Specify your preference at booking.' }
  ],
  whatsappMessage: 'Hello Serenity Lotus! I would like to book a treatment. Could you check availability for this weekend?',
  admin: {
    metrics: [
      { label: "Today's Bookings", value: '24', delta: '+18%', positive: true, icon: 'calendar' },
      { label: 'Revenue (Today)', value: 'AED 8,420', delta: '+12%', positive: true, icon: 'trending-up' },
      { label: 'Active Clients', value: '1,284', delta: '+47', positive: true, icon: 'users' },
      { label: 'Avg. Rating', value: '4.92', delta: '+0.03', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 6200 }, { label: 'Tue', value: 7100 }, { label: 'Wed', value: 8800 },
      { label: 'Thu', value: 9400 }, { label: 'Fri', value: 11200 }, { label: 'Sat', value: 13800 }, { label: 'Sun', value: 8420 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 18 }, { label: 'Tue', value: 21 }, { label: 'Wed', value: 26 },
      { label: 'Thu', value: 28 }, { label: 'Fri', value: 34 }, { label: 'Sat', value: 41 }, { label: 'Sun', value: 24 }
    ],
    appointments: [
      { id: 'APT-2841', customerName: 'Elena Petrova', service: 'Royal Thai Massage', staff: 'Amara Chen', date: 'Today', time: '2:30 PM', duration: '90 min', status: 'confirmed', amount: 'AED 320', initials: 'EP' },
      { id: 'APT-2842', customerName: 'James Whitfield', service: 'Couples Retreat', staff: 'Priya Sharma', date: 'Today', time: '3:00 PM', duration: '120 min', status: 'confirmed', amount: 'AED 720', initials: 'JW' },
      { id: 'APT-2843', customerName: 'Aisha Al Mansoori', service: 'Aromatherapy Journey', staff: 'Layla Hassan', date: 'Today', time: '4:15 PM', duration: '75 min', status: 'pending', amount: 'AED 350', initials: 'AM' },
      { id: 'APT-2844', customerName: 'Sarah Goldberg', service: 'Deep Tissue Recovery', staff: 'Amara Chen', date: 'Today', time: '5:30 PM', duration: '60 min', status: 'confirmed', amount: 'AED 280', initials: 'SG' },
      { id: 'APT-2845', customerName: 'Yusuf Rahman', service: 'Hot Stone Therapy', staff: 'Layla Hassan', date: 'Today', time: '6:45 PM', duration: '90 min', status: 'pending', amount: 'AED 380', initials: 'YR' },
      { id: 'APT-2846', customerName: 'Mei Lin', service: 'Reflexology Session', staff: 'Yuki Tanaka', date: 'Today', time: '7:30 PM', duration: '45 min', status: 'completed', amount: 'AED 220', initials: 'ML' }
    ],
    customers: [
      { id: 'CUST-001', name: 'Aisha Al Mansoori', email: 'aisha@example.com', phone: '+971 50 123 4567', totalBookings: 47, totalSpent: 'AED 18,840', lastVisit: '3 days ago', status: 'vip', initials: 'AM' },
      { id: 'CUST-002', name: 'Elena Petrova', email: 'elena@example.com', phone: '+971 50 234 5678', totalBookings: 28, totalSpent: 'AED 9,240', lastVisit: '1 week ago', status: 'active', initials: 'EP' },
      { id: 'CUST-003', name: 'James Whitfield', email: 'james@example.com', phone: '+971 50 345 6789', totalBookings: 19, totalSpent: 'AED 12,800', lastVisit: '2 weeks ago', status: 'active', initials: 'JW' },
      { id: 'CUST-004', name: 'Sarah Goldberg', email: 'sarah@example.com', phone: '+971 50 456 7890', totalBookings: 3, totalSpent: 'AED 880', lastVisit: '5 days ago', status: 'new', initials: 'SG' },
      { id: 'CUST-005', name: 'Yusuf Rahman', email: 'yusuf@example.com', phone: '+971 50 567 8901', totalBookings: 12, totalSpent: 'AED 4,200', lastVisit: '1 month ago', status: 'inactive', initials: 'YR' }
    ],
    recentActivity: [
      { time: '2 min ago', text: 'New booking from Elena Petrova — Royal Thai Massage', type: 'success' },
      { time: '14 min ago', text: 'Payment received: AED 720 from James Whitfield', type: 'success' },
      { time: '38 min ago', text: 'Aisha Al Mansoori upgraded to Annual Membership', type: 'info' },
      { time: '1 hr ago', text: 'Low stock alert: Lavender essential oil (3 bottles left)', type: 'warning' },
      { time: '2 hr ago', text: 'New 5-star review from Sarah Goldberg', type: 'success' }
    ],
    staff: [
      { name: 'Amara Chen', role: 'Lead Therapist', bio: '15 years experience. Former therapist at Banyan Tree Bangkok.', specialty: 'Thai & Deep Tissue', rating: 4.9, avatarInitials: 'AC' },
      { name: 'Layla Hassan', role: 'Aromatherapist', bio: 'Certified in clinical aromatherapy from Grasse, France.', specialty: 'Aromatherapy & Hot Stone', rating: 5.0, avatarInitials: 'LH' },
      { name: 'Yuki Tanaka', role: 'Reflexology Specialist', bio: 'Trained at the Japan Shiatsu College, Tokyo.', specialty: 'Reflexology & Shiatsu', rating: 4.8, avatarInitials: 'YT' },
      { name: 'Priya Sharma', role: 'Wellness Director', bio: '10 years in luxury hospitality. Speaks 4 languages.', specialty: 'Couples & Signature Treatments', rating: 4.9, avatarInitials: 'PS' }
    ],
    services: [
      { name: 'Royal Thai Massage', description: 'Traditional assisted-stretching therapy from Thailand.', price: 'AED 320', duration: '90 min', icon: 'flower', popular: true },
      { name: 'Deep Tissue Recovery', description: 'Targeted pressure for chronic tension and sports recovery.', price: 'AED 280', duration: '60 min', icon: 'muscle' },
      { name: 'Aromatherapy Journey', description: 'Custom essential oil blend in a private suite.', price: 'AED 350', duration: '75 min', icon: 'droplet', popular: true }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Serenity Lotus Spa & Wellness',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'privacy@serenitylotus.ae',
    policies: {
      privacy: [
        'Serenity Lotus Spa & Wellness ("we", "us") respects your privacy. This policy explains how we collect, use, and protect your personal information when you book treatments, purchase memberships, or use our mobile app.',
        'We collect your name, contact details, treatment preferences, health information you disclose (allergies, injuries, conditions), and payment details. Health information is collected only to ensure safe treatment delivery.',
        'We use your data to confirm bookings, send appointment reminders via WhatsApp and SMS, process payments securely through our PCI-compliant provider, personalize treatment recommendations, and send promotional offers (only with your consent).',
        'We do not sell your data to third parties. We share information only with our payment processor (Stripe), booking infrastructure (Supabase), and the specific therapist assigned to your appointment.',
        'You may request access to, correction of, or deletion of your data at any time by emailing privacy@serenitylotus.ae. We respond within 30 days.'
      ],
      terms: [
        'By booking a treatment at Serenity Lotus Spa, you agree to arrive 10 minutes before your appointment time for check-in and consultation.',
        'Treatments are provided by certified therapists. While we take every care to ensure your safety, you must disclose any health conditions, allergies, or injuries before treatment begins.',
        'Pricing is in UAE Dirhams (AED) and includes all applicable taxes. Prices are subject to change with 30 days notice. Booked treatments are honored at the booked price.',
        'Membership benefits are non-transferable. Unused treatments in a billing cycle do not roll over unless explicitly stated in your membership tier.',
        'We reserve the right to refuse service to any client who is intoxicated, abusive, or fails to follow therapist instructions during treatment.'
      ],
      cookies: [
        'Our web app and mobile app use minimal cookies and local storage to remember your login session, preferred therapist, and booking history.',
        'Essential cookies: session token, authentication state. These cannot be disabled if you want to use the app.',
        'Analytics cookies: anonymized usage data to improve our services. You can opt out in Settings → Privacy.',
        'We do not use third-party advertising cookies.'
      ],
      refund: [
        'Treatments cancelled more than 12 hours in advance receive a full refund to the original payment method within 5–7 business days.',
        'Treatments cancelled within 12 hours are charged at 50%. No-shows are charged at 100%.',
        'Membership fees are non-refundable once the billing cycle has started. You may cancel future renewals at any time from your account.',
        'Gift vouchers are non-refundable but transferable to another person. Vouchers expire 12 months from purchase date.'
      ],
      cancellation: [
        'To cancel or reschedule, use the app at least 12 hours before your appointment, or call +971 4 555 0188 during opening hours.',
        'Members receive one free late-cancellation per month (within the 12-hour window) without penalty.',
        'If you need to cancel due to a medical emergency, contact us within 24 hours and the fee will be waived with documentation.',
        'Repeated late cancellations (3+ in 60 days) may result in a requirement to prepay for future bookings.'
      ],
      accessibility: [
        'Serenity Lotus Spa is committed to making wellness accessible to all. Our Jumeirah location has step-free access, a treatment room equipped for wheelchair transfer, and therapists trained in adaptive massage techniques.',
        'Our mobile app supports iOS VoiceOver and Android TalkBack. We are working toward WCAG 2.1 AA compliance for all digital touchpoints.',
        'If you have specific accessibility needs (visual impairment, hearing impairment, limited mobility, sensory sensitivity), please mention this at booking so we can prepare appropriately.',
        'Contact accessibility@serenitylotus.ae with any concerns. We respond within 2 business days.'
      ]
    }
  },
  pwa: {
    appName: 'Serenity Lotus Spa',
    shortName: 'Serenity',
    themeColor: '#7C3AED',
    backgroundColor: '#1A1033',
    description: 'Book luxury spa treatments instantly. Members get priority booking and exclusive offers.'
  },
  features: ['Treatment Booking', 'Therapist Selection', 'Membership Tiers', 'WhatsApp Reminders', 'Gift Vouchers', 'Loyalty Points', 'Appointment History', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const SALON_CONFIG: CategoryConfig = {
  id: 'salons-beauty',
  name: 'Salons & Beauty Parlours',
  shortName: 'Salon',
  description: 'Hair, nails, beauty, stylists, and instant seat booking.',
  theme: {
    primary: '#EC4899',       // hot pink
    secondary: '#FBCFE8',     // soft pink
    accent: '#1F2937',        // black
    bgDark: '#1C1018',        // deep rose-black
    bgLight: '#FFF1F7',       // blush white
    textDark: '#3F1D2C',
    textLight: '#FFF1F5',
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Poppins', sans-serif",
    tone: 'modern'
  },
  business: {
    name: 'Maison Lumière Beauty Atelier',
    tagline: 'Where Style Becomes Identity',
    description: 'An award-winning beauty atelier specializing in precision cuts, balayage, bridal artistry, and nail couture.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'City Walk, Al Wasl Road, Dubai, UAE',
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
      { label: 'TikTok', url: 'https://tiktok.com' },
      { label: 'Pinterest', url: 'https://pinterest.com' }
    ],
    establishedYear: 2019
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Your Look, Masterfully Crafted',
    subheadline: 'Award-winning stylists. Couture color. Bridal artistry. Book your transformation at Dubai\'s most talked-about atelier.',
    primaryCta: 'Book Appointment',
    secondaryCta: 'Meet Our Stylists',
    stats: [
      { label: 'Brides Styled', value: '320+' },
      { label: 'Master Stylists', value: '6' },
      { label: 'Industry Awards', value: '4' },
      { label: 'Instagram Followers', value: '85K' }
    ],
    gradient: 'linear-gradient(135deg, #1C1018 0%, #831843 50%, #EC4899 100%)'
  },
  about: {
    title: 'Crafting Beauty Since 2019',
    paragraphs: [
      'Maison Lumière was founded by Léa Moreau, a Paris-trained colorist who brought French atelier discipline to Dubai\'s beauty scene. Every appointment begins with a full consultation — face shape, lifestyle, maintenance commitment, and inspiration imagery.',
      'Our 4 industry awards include "Best Colorist UAE 2024" and "Bridal Stylist of the Year 2023". We are the official styling partner for three fashion publications.',
      'We use only ammonia-free color lines from L\'Oréal Professionnel and Wella Koleston Perfect, paired with Olaplex bond-building treatments to keep hair healthy through any transformation.'
    ],
    values: [
      { title: 'French Precision', description: 'Cutting technique taught at the L\'Oréal Academy Paris.', icon: 'scissors' },
      { title: 'Clean Products', description: 'Ammonia-free, vegan, cruelty-free color lines.', icon: 'leaf' },
      { title: 'Consultation First', description: 'Every visit starts with a 15-min consultation.', icon: 'message' }
    ]
  },
  services: [
    { name: 'Precision Cut & Style', description: 'Consultation, cut, blow-dry, and styling by a senior stylist.', price: 'AED 280', duration: '75 min', icon: 'scissors', popular: true },
    { name: 'Balayage & Highlights', description: 'Hand-painted color with Olaplex bond protection.', price: 'AED 650', duration: '180 min', icon: 'palette', popular: true },
    { name: 'Bridal Makeup & Hair', description: 'Trial + wedding day, includes touch-up kit.', price: 'AED 2,800', duration: 'Full day', icon: 'crown' },
    { name: 'Keratin Treatment', description: 'Frizz-taming smoothing treatment, lasts 4 months.', price: 'AED 890', duration: '150 min', icon: 'sparkles' },
    { name: 'Gel Nail Couture', description: 'Custom nail art with premium gels.', price: 'AED 220', duration: '90 min', icon: 'brush' },
    { name: 'Lash Extensions', description: 'Volume or classic, mink-free synthetic lashes.', price: 'AED 320', duration: '120 min', icon: 'eye' }
  ],
  pricing: [
    { name: 'First Visit', price: 'AED 199', period: 'one-time', features: ['Consultation + cut + style', '15-min scalp treatment', 'Take-home care guide'], cta: 'Book First Visit' },
    { name: 'Loyalty Member', price: 'AED 499', period: 'per month', features: ['1 cut + 1 color/month', 'Free Olaplex add-on', 'Priority weekend booking', '15% off all services', 'Free birthday blow-dry'], highlighted: true, cta: 'Become Member' },
    { name: 'Bridal Package', price: 'AED 4,500', period: 'per event', features: ['Trial + wedding day', 'Bridal party (4 people)', 'Touch-up kit included', 'Pre-wedding hair treatment', 'On-location option'], cta: 'Enquire Bridal' }
  ],
  team: [
    { name: 'Léa Moreau', role: 'Founder & Master Colorist', bio: 'Paris-trained. 12 years experience. L\'Oréal Ambassador 2024.', specialty: 'Balayage & Color Correction', rating: 5.0, avatarInitials: 'LM' },
    { name: 'Sofia Ricci', role: 'Senior Stylist', bio: 'Former Vidal Sassoon London. Specialist in precision cuts.', specialty: 'Cuts & Bridal Updos', rating: 4.9, avatarInitials: 'SR' },
    { name: 'Mei Wong', role: 'Nail Artist', bio: 'Tokyo-trained nail couture. 8 years experience.', specialty: 'Nail Art & Gel Extensions', rating: 4.9, avatarInitials: 'MW' },
    { name: 'Aaliyah Brown', role: 'Makeup Artist', bio: 'Bridal specialist. Worked NYFW 2023.', specialty: 'Bridal & Editorial Makeup', rating: 5.0, avatarInitials: 'AB' }
  ],
  gallery: [
    { title: 'Balayage Transformation', caption: 'Before & after', category: 'Color', gradient: 'linear-gradient(135deg, #831843, #EC4899)' },
    { title: 'Bridal Updo', caption: 'Wedding day styling', category: 'Bridal', gradient: 'linear-gradient(135deg, #1C1018, #BE185D)' },
    { title: 'Nail Couture', caption: 'Custom hand-painted', category: 'Nails', gradient: 'linear-gradient(135deg, #9F1239, #F472B6)' },
    { title: 'Precision Bob', caption: 'French cutting technique', category: 'Cuts', gradient: 'linear-gradient(135deg, #500724, #DB2777)' },
    { title: 'Editorial Look', caption: 'Magazine shoot', category: 'Editorial', gradient: 'linear-gradient(135deg, #1C1018, #831843)' },
    { title: 'Lash Set', caption: 'Volume lash extensions', category: 'Beauty', gradient: 'linear-gradient(135deg, #831843, #F9A8D4)' }
  ],
  testimonials: [
    { name: 'Olivia Bennett', location: 'Downtown Dubai', rating: 5, text: 'Léa fixed a balayage disaster from another salon. I cried happy tears. The app let me book a same-day emergency consultation.', date: '1 week ago', service: 'Balayage & Highlights' },
    { name: 'Fatima Al Zahra', location: 'Palm Jumeirah', rating: 5, text: 'My bridal trial was flawless. Sofia understood exactly the updo I wanted from one Pinterest photo. Wedding day was perfect.', date: '2 weeks ago', service: 'Bridal Makeup & Hair' },
    { name: 'Rachel Kim', location: 'Business Bay', rating: 5, text: 'The loyalty membership pays for itself. Free Olaplex every color appointment, and I never wait for weekend slots anymore.', date: '1 month ago', service: 'Loyalty Member' }
  ],
  faq: [
    { question: 'How do I book a specific stylist?', answer: 'In the app, select your service, then choose your preferred stylist from the available list. Senior stylists may have a 2-week wait.' },
    { question: 'Do you offer color consultations?', answer: 'Yes, every color appointment includes a 15-minute consultation. For major transformations (corrective color), book a standalone consultation first.' },
    { question: 'What if I do not like my result?', answer: 'We offer a 7-day satisfaction guarantee. If anything feels off, come back for a free adjustment. Your happiness is our reputation.' },
    { question: 'Can I bring inspiration photos?', answer: 'Please do! Pinterest and Instagram screenshots help us understand the vibe you want. We will tell you honestly if it suits your hair type.' },
    { question: 'Do you do home visits for bridal?', answer: 'Yes, bridal packages include on-location option within Dubai for an additional AED 500 travel fee. Book at least 3 months in advance.' }
  ],
  whatsappMessage: 'Hi Maison Lumière! I would love to book an appointment. Could you share availability for this week?',
  admin: {
    metrics: [
      { label: "Today's Appointments", value: '31', delta: '+9%', positive: true, icon: 'calendar' },
      { label: 'Revenue (Today)', value: 'AED 12,840', delta: '+15%', positive: true, icon: 'trending-up' },
      { label: 'Active Clients', value: '892', delta: '+23', positive: true, icon: 'users' },
      { label: 'Avg. Rating', value: '4.94', delta: '+0.01', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 0 }, { label: 'Tue', value: 9400 }, { label: 'Wed', value: 10800 },
      { label: 'Thu', value: 11500 }, { label: 'Fri', value: 14200 }, { label: 'Sat', value: 16800 }, { label: 'Sun', value: 12840 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 0 }, { label: 'Tue', value: 24 }, { label: 'Wed', value: 28 },
      { label: 'Thu', value: 31 }, { label: 'Fri', value: 38 }, { label: 'Sat', value: 45 }, { label: 'Sun', value: 31 }
    ],
    appointments: [
      { id: 'SAL-9101', customerName: 'Olivia Bennett', service: 'Balayage & Highlights', staff: 'Léa Moreau', date: 'Today', time: '11:00 AM', duration: '180 min', status: 'confirmed', amount: 'AED 650', initials: 'OB' },
      { id: 'SAL-9102', customerName: 'Fatima Al Zahra', service: 'Bridal Trial', staff: 'Sofia Ricci', date: 'Today', time: '1:00 PM', duration: '120 min', status: 'confirmed', amount: 'AED 1,200', initials: 'FZ' },
      { id: 'SAL-9103', customerName: 'Rachel Kim', service: 'Keratin Treatment', staff: 'Léa Moreau', date: 'Today', time: '3:30 PM', duration: '150 min', status: 'pending', amount: 'AED 890', initials: 'RK' },
      { id: 'SAL-9104', customerName: 'Hannah Lee', service: 'Precision Cut & Style', staff: 'Sofia Ricci', date: 'Today', time: '4:45 PM', duration: '75 min', status: 'confirmed', amount: 'AED 280', initials: 'HL' },
      { id: 'SAL-9105', customerName: 'Maya Patel', service: 'Gel Nail Couture', staff: 'Mei Wong', date: 'Today', time: '5:30 PM', duration: '90 min', status: 'confirmed', amount: 'AED 220', initials: 'MP' },
      { id: 'SAL-9106', customerName: 'Zara Ali', service: 'Lash Extensions', staff: 'Aaliyah Brown', date: 'Today', time: '6:00 PM', duration: '120 min', status: 'pending', amount: 'AED 320', initials: 'ZA' }
    ],
    customers: [
      { id: 'CUST-101', name: 'Olivia Bennett', email: 'olivia@example.com', phone: '+971 50 234 1111', totalBookings: 22, totalSpent: 'AED 14,300', lastVisit: '1 week ago', status: 'vip', initials: 'OB' },
      { id: 'CUST-102', name: 'Fatima Al Zahra', email: 'fatima@example.com', phone: '+971 50 234 2222', totalBookings: 8, totalSpent: 'AED 9,800', lastVisit: '2 weeks ago', status: 'active', initials: 'FZ' },
      { id: 'CUST-103', name: 'Rachel Kim', email: 'rachel@example.com', phone: '+971 50 234 3333', totalBookings: 15, totalSpent: 'AED 7,650', lastVisit: '5 days ago', status: 'active', initials: 'RK' },
      { id: 'CUST-104', name: 'Hannah Lee', email: 'hannah@example.com', phone: '+971 50 234 4444', totalBookings: 2, totalSpent: 'AED 560', lastVisit: '3 days ago', status: 'new', initials: 'HL' },
      { id: 'CUST-105', name: 'Maya Patel', email: 'maya@example.com', phone: '+971 50 234 5555', totalBookings: 11, totalSpent: 'AED 3,200', lastVisit: '1 month ago', status: 'active', initials: 'MP' }
    ],
    recentActivity: [
      { time: '4 min ago', text: 'New booking from Olivia Bennett — Balayage', type: 'success' },
      { time: '22 min ago', text: 'Payment received: AED 1,200 from Fatima Al Zahra', type: 'success' },
      { time: '47 min ago', text: 'New 5-star review from Rachel Kim', type: 'success' },
      { time: '1 hr ago', text: 'Loyalty member upgrade: Hannah Lee', type: 'info' },
      { time: '3 hr ago', text: 'Low stock: Wella Koleston 7/0 (4 tubes left)', type: 'warning' }
    ],
    staff: [
      { name: 'Léa Moreau', role: 'Founder & Master Colorist', bio: 'Paris-trained. 12 years experience.', specialty: 'Balayage & Color Correction', rating: 5.0, avatarInitials: 'LM' },
      { name: 'Sofia Ricci', role: 'Senior Stylist', bio: 'Former Vidal Sassoon London.', specialty: 'Cuts & Bridal Updos', rating: 4.9, avatarInitials: 'SR' },
      { name: 'Mei Wong', role: 'Nail Artist', bio: 'Tokyo-trained nail couture.', specialty: 'Nail Art & Gel Extensions', rating: 4.9, avatarInitials: 'MW' },
      { name: 'Aaliyah Brown', role: 'Makeup Artist', bio: 'Bridal specialist. NYFW 2023.', specialty: 'Bridal & Editorial Makeup', rating: 5.0, avatarInitials: 'AB' }
    ],
    services: [
      { name: 'Precision Cut & Style', description: 'Consultation, cut, blow-dry, and styling.', price: 'AED 280', duration: '75 min', icon: 'scissors', popular: true },
      { name: 'Balayage & Highlights', description: 'Hand-painted color with Olaplex.', price: 'AED 650', duration: '180 min', icon: 'palette', popular: true },
      { name: 'Bridal Makeup & Hair', description: 'Trial + wedding day.', price: 'AED 2,800', duration: 'Full day', icon: 'crown' }
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
        'We use your information to confirm appointments, send reminders, recommend services based on your history, and process payments securely.',
        'Photographs of your hair/makeup may be taken with your explicit consent for our portfolio and social media. You can withdraw consent at any time and we will remove your images within 30 days.',
        'We do not sell your data. We share information only with our payment processor and the specific stylist assigned to your appointment.',
        'Email privacy@maisonlumiere.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'A 50% deposit is required for balayage, keratin, and bridal bookings. Deposits are non-refundable within 48 hours of the appointment.',
        'Color results vary based on hair history, porosity, and previous treatments. Our stylists will discuss realistic outcomes during consultation.',
        'Patch tests are required 48 hours before any color service for new clients. This is a safety requirement, not optional.',
        'Loyalty memberships are non-transferable. Unused monthly services do not roll over to the next month.',
        'We reserve the right to refuse service for abusive behavior, intoxication, or failure to follow stylist guidance.'
      ],
      cookies: [
        'Our app uses cookies/local storage to remember your session, preferred stylist, and service history.',
        'Essential: authentication token, booking cart. These are required to use the app.',
        'Analytics: aggregated usage data to improve our services. Optional, can be disabled.',
        'No third-party advertising cookies are used.'
      ],
      refund: [
        'Deposits for color and bridal services are non-refundable within 48 hours of the appointment.',
        'If you are dissatisfied with a service, contact us within 7 days. We offer free adjustment or partial refund at our discretion.',
        'Loyalty membership fees are non-refundable once a billing cycle has started.',
        'Gift cards expire 12 months from purchase and are non-refundable but transferable.'
      ],
      cancellation: [
        'Cancel or reschedule at least 24 hours before your appointment via the app or by calling +971 4 555 0199.',
        'Late cancellations (within 24 hours) forfeit the deposit. Members get one free late-cancel per quarter.',
        'No-shows are charged at 100% of the service price.',
        'Repeated late cancellations (3+ in 90 days) require prepayment for future bookings.'
      ],
      accessibility: [
        'Our City Walk atelier has step-free access from the parking level and an accessible treatment room.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android). We aim for WCAG 2.1 AA compliance.',
        'Stylists are trained to assist clients with limited mobility, visual impairment, or sensory sensitivity.',
        'For specific needs, mention at booking. Contact accessibility@maisonlumiere.ae for any concerns.'
      ]
    }
  },
  pwa: {
    appName: 'Maison Lumière',
    shortName: 'Lumière',
    themeColor: '#EC4899',
    backgroundColor: '#1C1018',
    description: 'Book your stylist instantly. Members get priority weekend slots and free Olaplex add-ons.'
  },
  features: ['Stylist Booking', 'Bridal Packages', 'Color Consultations', 'Loyalty Rewards', 'Portfolio Gallery', 'WhatsApp Reminders', 'Patch Test Scheduling', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const RESTAURANT_CONFIG: CategoryConfig = {
  id: 'restaurants-cafes',
  name: 'Restaurants & Cafes',
  shortName: 'Restaurant',
  description: 'Menu, ordering, table reservations, and kitchen status.',
  theme: {
    primary: '#B45309',       // warm amber
    secondary: '#FED7AA',     // cream
    accent: '#7C2D12',        // deep brown
    bgDark: '#1C1410',        // coffee black
    bgLight: '#FFFBEB',       // cream
    textDark: '#451A03',
    textLight: '#FEF3C7',
    fontHeading: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    tone: 'appetizing'
  },
  business: {
    name: 'Olivetta Trattoria',
    tagline: 'Coastal Italian, Cooked with Fire',
    description: 'A wood-fired Italian kitchen celebrating Mediterranean seafood, handmade pasta, and natural wines.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Bluewaters Island, Dubai, UAE',
    phone: '+971 4 555 0177',
    whatsapp: '+971501122334',
    email: 'ciao@olivetta.ae',
    website: 'olivetta.ae',
    hours: [
      { day: 'Mon – Wed', time: '12:00 PM – 11:00 PM' },
      { day: 'Thu – Fri', time: '12:00 PM – 1:00 AM' },
      { day: 'Sat', time: '11:00 AM – 1:00 AM' },
      { day: 'Sun', time: '11:00 AM – 11:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Facebook', url: 'https://facebook.com' },
      { label: 'Google Maps', url: 'https://maps.google.com' }
    ],
    establishedYear: 2021
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Fire, Sea, and Slow Sunday Lunches',
    subheadline: 'Handmade pasta. Wood-fired seafood. Natural wines. Reserve your table at Bluewaters.',
    primaryCta: 'Reserve a Table',
    secondaryCta: 'View Menu',
    stats: [
      { label: 'Google Rating', value: '4.8' },
      { label: 'Seats', value: '120' },
      { label: 'Years Open', value: '5' },
      { label: 'Wines Curated', value: '180' }
    ],
    gradient: 'linear-gradient(135deg, #1C1410 0%, #7C2D12 50%, #B45309 100%)'
  },
  about: {
    title: 'A Love Letter to the Italian Coast',
    paragraphs: [
      'Olivetta was born in 2021 when Chef Marco Bianchi brought his grandmother\'s Ligurian recipes to Bluewaters Island. Every dish starts with a single question: would Nonna approve?',
      'Our wood-fired oven burns olive and oak at 480°C, giving our seafood the smoky char that defines coastal Italian cooking. We import flour from Molino Pasqua in Verona for our fresh pasta, made every morning by hand.',
      'Our natural wine cellar features 180 bottles from small Italian and French producers — no additives, no shortcuts. Ask our sommelier for a pairing; she has stories for every bottle.'
    ],
    values: [
      { title: 'Wood-Fired Everything', description: 'Our oven never goes below 300°C.', icon: 'flame' },
      { title: 'Handmade Daily', description: 'Pasta, bread, and desserts made fresh every morning.', icon: 'wheat' },
      { title: 'Natural Wines', description: 'Low-intervention bottles from small producers.', icon: 'wine' }
    ]
  },
  services: [
    { name: 'Lunch Experience', description: '3-course set lunch with house wine.', price: 'AED 195', duration: '90 min', icon: 'sun', popular: true },
    { name: 'Chef\'s Tasting Menu', description: '7 courses with optional wine pairing.', price: 'AED 480', duration: '150 min', icon: 'crown', popular: true },
    { name: 'Wood-Fired Seafood', description: 'Whole branzino, prawns, and calamari for two.', price: 'AED 360', duration: '60 min', icon: 'fish' },
    { name: 'Sunday Long Lunch', description: 'Family-style 4-course menu with aperitivo.', price: 'AED 280', duration: '180 min', icon: 'sun' },
    { name: 'Private Dining', description: 'Secluded chef\'s table for 8–12 guests.', price: 'AED 4,800', duration: '180 min', icon: 'crown' },
    { name: 'Wine Pairing Flight', description: '5 glasses paired with antipasti.', price: 'AED 240', duration: '60 min', icon: 'wine' }
  ],
  pricing: [
    { name: 'Weekday Lunch', price: 'AED 195', period: 'per person', features: ['3-course set menu', '1 glass house wine', 'Daily bread & olive oil', 'Espresso'], cta: 'Reserve Lunch' },
    { name: 'Chef\'s Tasting', price: 'AED 480', period: 'per person', features: ['7 seasonal courses', 'Optional wine pairing (+AED 220)', 'Chef introduction', 'Recipe card gift', 'Priority booking'], highlighted: true, cta: 'Book Tasting' },
    { name: 'Private Dining', price: 'AED 4,800', period: 'room (up to 12)', features: ['Secluded chef\'s table', 'Custom 5-course menu', 'Sommelier on-site', 'Welcome aperitivo', 'Dedicated server'], cta: 'Enquire' }
  ],
  team: [
    { name: 'Marco Bianchi', role: 'Chef Patron', bio: 'Trained at Osteria Francescana. Ligurian roots.', specialty: 'Wood-Fired Seafood & Pasta', rating: 4.9, avatarInitials: 'MB' },
    { name: 'Sofia Conti', role: 'Head Sommelier', bio: 'WSET Level 4. Italian wine specialist.', specialty: 'Natural Wines & Pairings', rating: 4.8, avatarInitials: 'SC' },
    { name: 'Giuseppe Romano', role: 'Pasta Chef', bio: 'From Modena. Makes 40kg of pasta daily by hand.', specialty: 'Fresh Pasta & Risotto', rating: 4.9, avatarInitials: 'GR' },
    { name: 'Amira Khalil', role: 'Pastry Chef', bio: 'Le Cordon Bleu Paris. Tiramisu legend.', specialty: 'Dolci & Gelato', rating: 5.0, avatarInitials: 'AK' }
  ],
  gallery: [
    { title: 'Wood-Fired Branzino', caption: 'Signature whole fish', category: 'Mains', gradient: 'linear-gradient(135deg, #7C2D12, #F59E0B)' },
    { title: 'Handmade Tagliatelle', caption: 'Made fresh every morning', category: 'Pasta', gradient: 'linear-gradient(135deg, #92400E, #FCD34D)' },
    { title: 'Natural Wine Cellar', caption: '180 small-producer bottles', category: 'Wine', gradient: 'linear-gradient(135deg, #451A03, #92400E)' },
    { title: 'Tiramisu', caption: 'Amira\'s award recipe', category: 'Dessert', gradient: 'linear-gradient(135deg, #78350F, #D97706)' },
    { title: 'Wood Oven', caption: '480°C olive wood fire', category: 'Kitchen', gradient: 'linear-gradient(135deg, #1C1410, #DC2626)' },
    { title: 'Dining Room', caption: '120 seats, Bluewaters view', category: 'Interior', gradient: 'linear-gradient(135deg, #1C1410, #7C2D12)' }
  ],
  testimonials: [
    { name: 'Daniel Foster', location: 'Dubai Marina', rating: 5, text: 'The chef\'s tasting menu was the best meal I have had in Dubai. 7 courses of pure joy. Sofia\'s wine pairing made it transcendent.', date: '3 days ago', service: 'Chef\'s Tasting Menu' },
    { name: 'Carla Romano', location: 'Jumeirah', rating: 5, text: 'As an Italian expat, I am picky. Olivetta\'s tagliatelle tastes like my grandmother\'s. Giuseppe is a master. Booking via the app was instant.', date: '1 week ago', service: 'Sunday Long Lunch' },
    { name: 'Ahmed Al Rashid', location: 'Downtown Dubai', rating: 4, text: 'Wood-fired branzino was incredible. We lost track of time and stayed 3 hours. The natural wine list is a conversation in itself.', date: '2 weeks ago', service: 'Wood-Fired Seafood' }
  ],
  faq: [
    { question: 'Do you take walk-ins?', answer: 'We hold 20% of tables for walk-ins at the bar and terrace. Reservations are strongly recommended for dinner, especially weekends.' },
    { question: 'Can you accommodate dietary restrictions?', answer: 'Yes. Mark dietary needs when booking. We have gluten-free pasta, vegetarian tasting menus, and can adapt most dishes for allergies.' },
    { question: 'Is there a kids menu?', answer: 'Yes, a simplified menu for under-12s at AED 65 (pasta, mains, dessert). High chairs available on request.' },
    { question: 'Do you serve alcohol?', answer: 'Yes, we are fully licensed. Our wine list features 180 natural and small-producer bottles. Ask Sofia for pairings.' },
    { question: 'Can I book the private dining room?', answer: 'Yes, the chef\'s table seats 8–12. Book at least 2 weeks in advance. Custom menu designed with you. AED 4,800 minimum.' }
  ],
  whatsappMessage: 'Buongiorno Olivetta! I would like to reserve a table for 4 this Saturday evening. Do you have availability?',
  admin: {
    metrics: [
      { label: "Today's Reservations", value: '47', delta: '+14%', positive: true, icon: 'calendar' },
      { label: 'Revenue (Today)', value: 'AED 18,420', delta: '+8%', positive: true, icon: 'trending-up' },
      { label: 'Avg. Cover', value: 'AED 392', delta: '+5%', positive: true, icon: 'receipt' },
      { label: 'Table Turnover', value: '2.8x', delta: '+0.2', positive: true, icon: 'trending-up' }
    ],
    revenueChart: [
      { label: 'Mon', value: 9200 }, { label: 'Tue', value: 10800 }, { label: 'Wed', value: 11400 },
      { label: 'Thu', value: 16200 }, { label: 'Fri', value: 22400 }, { label: 'Sat', value: 24800 }, { label: 'Sun', value: 18420 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 24 }, { label: 'Tue', value: 28 }, { label: 'Wed', value: 31 },
      { label: 'Thu', value: 42 }, { label: 'Fri', value: 58 }, { label: 'Sat', value: 63 }, { label: 'Sun', value: 47 }
    ],
    appointments: [
      { id: 'TBL-501', customerName: 'Daniel Foster', service: 'Table for 2 — Chef\'s Tasting', staff: 'Marco Bianchi', date: 'Today', time: '7:30 PM', duration: '150 min', status: 'confirmed', amount: 'AED 960', initials: 'DF' },
      { id: 'TBL-502', customerName: 'Carla Romano', service: 'Table for 4 — Sunday Lunch', staff: 'Giuseppe Romano', date: 'Today', time: '12:30 PM', duration: '180 min', status: 'completed', amount: 'AED 1,120', initials: 'CR' },
      { id: 'TBL-503', customerName: 'Ahmed Al Rashid', service: 'Table for 6 — Seafood', staff: 'Marco Bianchi', date: 'Today', time: '8:00 PM', duration: '120 min', status: 'confirmed', amount: 'AED 1,440', initials: 'AR' },
      { id: 'TBL-504', customerName: 'Sarah Klein', service: 'Table for 2 — Lunch', staff: 'Amira Khalil', date: 'Today', time: '1:00 PM', duration: '90 min', status: 'completed', amount: 'AED 390', initials: 'SK' },
      { id: 'TBL-505', customerName: 'Liam Walsh', service: 'Private Dining (10)', staff: 'Marco Bianchi', date: 'Today', time: '8:30 PM', duration: '180 min', status: 'pending', amount: 'AED 4,800', initials: 'LW' },
      { id: 'TBL-506', customerName: 'Priya Nair', service: 'Table for 3 — Tasting', staff: 'Sofia Conti', date: 'Today', time: '9:00 PM', duration: '150 min', status: 'pending', amount: 'AED 1,440', initials: 'PN' }
    ],
    customers: [
      { id: 'CUST-201', name: 'Daniel Foster', email: 'daniel@example.com', phone: '+971 50 345 1111', totalBookings: 18, totalSpent: 'AED 14,200', lastVisit: '3 days ago', status: 'vip', initials: 'DF' },
      { id: 'CUST-202', name: 'Carla Romano', email: 'carla@example.com', phone: '+971 50 345 2222', totalBookings: 32, totalSpent: 'AED 22,800', lastVisit: '1 week ago', status: 'vip', initials: 'CR' },
      { id: 'CUST-203', name: 'Ahmed Al Rashid', email: 'ahmed@example.com', phone: '+971 50 345 3333', totalBookings: 11, totalSpent: 'AED 9,800', lastVisit: '2 weeks ago', status: 'active', initials: 'AR' },
      { id: 'CUST-204', name: 'Sarah Klein', email: 'sarah@example.com', phone: '+971 50 345 4444', totalBookings: 4, totalSpent: 'AED 1,560', lastVisit: '1 week ago', status: 'new', initials: 'SK' },
      { id: 'CUST-205', name: 'Liam Walsh', email: 'liam@example.com', phone: '+971 50 345 5555', totalBookings: 7, totalSpent: 'AED 12,400', lastVisit: '1 month ago', status: 'active', initials: 'LW' }
    ],
    recentActivity: [
      { time: '3 min ago', text: 'New reservation: Daniel Foster, table for 2, 7:30 PM', type: 'success' },
      { time: '18 min ago', text: 'Payment received: AED 1,120 from Carla Romano', type: 'success' },
      { time: '42 min ago', text: 'Kitchen: branzino stock low (4 portions left)', type: 'warning' },
      { time: '1 hr ago', text: 'New 5-star Google review from Daniel Foster', type: 'success' },
      { time: '2 hr ago', text: 'Wine cellar: 2 bottles of Barolo 2018 left', type: 'warning' }
    ],
    staff: [
      { name: 'Marco Bianchi', role: 'Chef Patron', bio: 'Trained at Osteria Francescana.', specialty: 'Wood-Fired Seafood & Pasta', rating: 4.9, avatarInitials: 'MB' },
      { name: 'Sofia Conti', role: 'Head Sommelier', bio: 'WSET Level 4.', specialty: 'Natural Wines & Pairings', rating: 4.8, avatarInitials: 'SC' },
      { name: 'Giuseppe Romano', role: 'Pasta Chef', bio: 'From Modena.', specialty: 'Fresh Pasta & Risotto', rating: 4.9, avatarInitials: 'GR' },
      { name: 'Amira Khalil', role: 'Pastry Chef', bio: 'Le Cordon Bleu Paris.', specialty: 'Dolci & Gelato', rating: 5.0, avatarInitials: 'AK' }
    ],
    services: [
      { name: 'Lunch Experience', description: '3-course set lunch with house wine.', price: 'AED 195', duration: '90 min', icon: 'sun', popular: true },
      { name: 'Chef\'s Tasting Menu', description: '7 courses with optional wine pairing.', price: 'AED 480', duration: '150 min', icon: 'crown', popular: true },
      { name: 'Wood-Fired Seafood', description: 'Whole branzino, prawns, calamari for two.', price: 'AED 360', duration: '60 min', icon: 'fish' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Olivetta Trattoria',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'ciao@olivetta.ae',
    policies: {
      privacy: [
        'Olivetta Trattoria collects your name, contact details, dining preferences, allergy information, and reservation history to deliver personalized dining experiences.',
        'We use your information to confirm reservations, send booking reminders via WhatsApp and SMS, remember dietary preferences, and process payments.',
        'Allergy information is shared with the kitchen and chef directly to ensure your safety. This is a critical safety requirement, not optional.',
        'We do not sell your data. Information is shared only with our payment processor and the staff assigned to your table.',
        'Email ciao@olivetta.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'Reservations are held for 15 minutes past the booked time. After that, the table may be released to waitlist guests.',
        'A credit card is required to hold reservations for 6+ guests or the private dining room. No charge unless you no-show or cancel within 24 hours.',
        'Menus are subject to change based on seasonal availability. We will inform you of any major substitutions at the table.',
        'We reserve the right to refuse service to intoxicated guests. Last orders are taken 30 minutes before closing.',
        'BYO is not permitted. Our wine list features 180 curated bottles. Corkage is not available.'
      ],
      cookies: [
        'Our app uses essential cookies for session management, cart, and reservation state.',
        'We use analytics cookies (optional) to understand which dishes are most popular and improve our menu.',
        'No third-party advertising cookies.',
        'You can disable analytics in Settings → Privacy without losing app functionality.'
      ],
      refund: [
        'Deposits for large parties and private dining are non-refundable within 24 hours of the reservation.',
        'If you are dissatisfied with your meal, speak to the manager before paying. We will address it on the spot.',
        'Gift cards expire 12 months from purchase and are non-refundable but transferable.',
        'Pre-paid tasting menus are non-refundable within 48 hours of the reservation.'
      ],
      cancellation: [
        'Cancel via the app or call +971 4 555 0177 at least 24 hours before your reservation.',
        'Large party (6+): a AED 50 per person fee applies for cancellations within 24 hours.',
        'Private dining: full deposit forfeited if cancelled within 48 hours.',
        'Repeated no-shows (3+ in 90 days) may require credit card prepayment for future bookings.'
      ],
      accessibility: [
        'Olivetta Trattoria at Bluewaters is fully wheelchair accessible. We have accessible restrooms and seating at standard table height.',
        'Our menu is available in large print on request. Staff can read dishes aloud for visually impaired guests.',
        'Quiet dining is available in our rear room. Mention at booking if you prefer a low-stimulation environment.',
        'Allergy protocols are strictly enforced. Cross-contamination risks are clearly communicated. Contact ciao@olivetta.ae for serious allergy discussions before booking.'
      ]
    }
  },
  pwa: {
    appName: 'Olivetta',
    shortName: 'Olivetta',
    themeColor: '#B45309',
    backgroundColor: '#1C1410',
    description: 'Reserve your table instantly. Get waitlist notifications and seasonal menu updates.'
  },
  features: ['Table Reservations', 'Menu & Ordering', 'Waitlist', 'Dietary Tracking', 'Wine Pairing Suggestions', 'Loyalty Rewards', 'WhatsApp Confirmations', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const GARAGE_CONFIG: CategoryConfig = {
  id: 'car-repair-detailing',
  name: 'Car Repair & Detailing Garages',
  shortName: 'Garage',
  description: 'Service jobs, technicians, quotations, and before/after gallery.',
  theme: {
    primary: '#F97316',       // safety orange
    secondary: '#1E3A8A',      // steel blue
    accent: '#FACC15',        // caution yellow
    bgDark: '#0F0F0F',         // workshop black
    bgLight: '#FAFAF9',        // concrete grey
    textDark: '#1C1917',
    textLight: '#FAFAF9',
    fontHeading: "'Oswald', sans-serif",
    fontBody: "'Inter', sans-serif",
    tone: 'technical'
  },
  business: {
    name: 'Apex Motorworks',
    tagline: 'Precision Diagnostics. Flawless Detailing.',
    description: 'A premium automotive service center specializing in diagnostics, performance tuning, and ceramic detailing for luxury and everyday vehicles.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Al Quoz Industrial 3, Street 17, Dubai, UAE',
    phone: '+971 4 555 0166',
    whatsapp: '+971501234999',
    email: 'service@apexmotorworks.ae',
    website: 'apexmotorworks.ae',
    hours: [
      { day: 'Sat – Thu', time: '8:00 AM – 7:00 PM' },
      { day: 'Fri', time: '2:00 PM – 7:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'YouTube', url: 'https://youtube.com' },
      { label: 'Google Maps', url: 'https://maps.google.com' }
    ],
    establishedYear: 2017
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Your Car Deserves Master Hands',
    subheadline: 'Dealer-level diagnostics at independent prices. Ceramic coating that lasts 5 years. Book your service in 60 seconds.',
    primaryCta: 'Book Service',
    secondaryCta: 'Get a Quote',
    stats: [
      { label: 'Cars Serviced', value: '8,400+' },
      { label: 'Master Techs', value: '7' },
      { label: 'Years Operating', value: '9' },
      { label: 'Google Rating', value: '4.9' }
    ],
    gradient: 'linear-gradient(135deg, #0F0F0F 0%, #1E3A8A 50%, #F97316 100%)'
  },
  about: {
    title: 'Built by Enthusiasts, Trusted by 8,400 Owners',
    paragraphs: [
      'Apex Motorworks was founded in 2017 by Karim Mansour, a former BMW M technician who believed independent garages could match dealer quality at half the price. Today we service every brand from Toyota to Ferrari.',
      'Our diagnostic suite includes the same Autologic and ISTA tools used by official dealerships. We invest AED 250,000 annually in keeping our equipment current — no "best guess" diagnostics here.',
      'Our detailing bay features a Gtechniq-certified ceramic coating studio. A 5-year coating on your daily driver, paint correction on your weekend toy, or a full PPF wrap on your supercar — all under one roof.'
    ],
    values: [
      { title: 'Dealer Tools', description: 'Autologic, ISTA, ODIS, XENTRY — all current.', icon: 'wrench' },
      { title: 'No Surprise Bills', description: 'Written quote before any work starts. Always.', icon: 'file' },
      { title: '12-Month Warranty', description: 'On all parts and labor. No fine print.', icon: 'shield' }
    ]
  },
  services: [
    { name: 'Full Diagnostic Scan', description: 'Comprehensive OBD-II + dealer tool scan with written report.', price: 'AED 250', duration: '60 min', icon: 'activity', popular: true },
    { name: 'Major Service (BMW/Audi)', description: 'Oil, filters, belts, full inspection with OEM parts.', price: 'AED 1,800', duration: '4 hours', icon: 'wrench', popular: true },
    { name: 'Ceramic Coating (5-Year)', description: 'Gtechniq Crystal Serum Ultra with 5-year warranty.', price: 'AED 3,200', duration: '2 days', icon: 'shield' },
    { name: 'Paint Correction', description: 'Single-stage machine polish to remove swirls and scratches.', price: 'AED 1,400', duration: '1 day', icon: 'sparkles' },
    { name: 'PPF Full Body Wrap', description: 'Xpel Ultimate Plus self-healing film, 10-year warranty.', price: 'AED 14,000', duration: '4 days', icon: 'shield' },
    { name: 'Brake Pad Replacement', description: 'OEM pads, machining, and fluid flush.', price: 'AED 850', duration: '2 hours', icon: 'disc' }
  ],
  pricing: [
    { name: 'Diagnostic Only', price: 'AED 250', period: 'one-time', features: ['Full OBD + dealer scan', 'Written report with fault codes', '15-min consultation', 'Quote for any fixes'], cta: 'Book Diagnostic' },
    { name: 'Annual Care', price: 'AED 2,400', period: 'per year', features: ['2 major services', '4 diagnostic scans', '15% off all repairs', 'Priority booking', 'Free wash & vacuum', '12-month warranty'], highlighted: true, cta: 'Join Annual' },
    { name: 'Detailing Package', price: 'AED 4,600', period: 'one-time', features: ['Ceramic coating (5-year)', 'Single-stage paint correction', 'Interior deep clean', 'Engine bay detail', 'Free annual inspection'], cta: 'Book Detailing' }
  ],
  team: [
    { name: 'Karim Mansour', role: 'Founder & Master Tech', bio: 'Ex-BMW M Division. 18 years experience.', specialty: 'BMW & Audi Diagnostics', rating: 4.9, avatarInitials: 'KM' },
    { name: 'Viktor Petrov', role: 'Detailing Specialist', bio: 'Gtechniq-certified. 9 years in detailing.', specialty: 'Ceramic Coating & PPF', rating: 4.9, avatarInitials: 'VP' },
    { name: 'Ahmed Saleh', role: 'Senior Mechanic', bio: 'Toyota-certified. Specialist in Japanese cars.', specialty: 'Japanese & Korean Vehicles', rating: 4.8, avatarInitials: 'AS' },
    { name: 'Diego Martinez', role: 'Performance Tuner', bio: 'APR Stage 1/2/3 tuning. Dyno-certified.', specialty: 'Performance & ECU Tuning', rating: 5.0, avatarInitials: 'DM' }
  ],
  gallery: [
    { title: 'Ceramic Coating Before', caption: 'Swirl-marked paint', category: 'Before', gradient: 'linear-gradient(135deg, #1C1917, #525252)' },
    { title: 'Ceramic Coating After', caption: '5-year protection', category: 'After', gradient: 'linear-gradient(135deg, #1E3A8A, #0EA5E9)' },
    { title: 'Engine Bay Detail', caption: 'Showroom condition', category: 'Detailing', gradient: 'linear-gradient(135deg, #0F0F0F, #F97316)' },
    { title: 'Brake Job', caption: 'OEM pad replacement', category: 'Service', gradient: 'linear-gradient(135deg, #1C1917, #DC2626)' },
    { title: 'PPF Wrap', caption: 'Xpel installation', category: 'Protection', gradient: 'linear-gradient(135deg, #1E3A8A, #FACC15)' },
    { title: 'Diagnostic Bay', caption: 'Autologic + ISTA tools', category: 'Facility', gradient: 'linear-gradient(135deg, #0F0F0F, #1E3A8A)' }
  ],
  testimonials: [
    { name: 'Tom Bradley', location: 'Dubai Hills', rating: 5, text: 'Karim diagnosed a transmission issue in 20 minutes that the BMW dealer wanted to "investigate for 3 days" at AED 4,000. Apex fixed it for AED 850. Customer for life.', date: '1 week ago', service: 'Full Diagnostic Scan' },
    { name: 'Lena Hoffman', location: 'Palm Jumeirah', rating: 5, text: 'Had my Audi Q7 ceramic coated by Viktor. 8 months in and water still beads like day one. The booking app sent me progress photos during the 2-day job.', date: '3 weeks ago', service: 'Ceramic Coating (5-Year)' },
    { name: 'Omar Farouk', location: 'Arabian Ranches', rating: 5, text: 'Transparent pricing is what got me. Written quote before any work. Called me to authorize a brake pad upgrade. No surprise bill at pickup.', date: '1 month ago', service: 'Brake Pad Replacement' }
  ],
  faq: [
    { question: 'Do you service all car brands?', answer: 'Yes. We have OEM-level diagnostic tools for European (BMW, Audi, Mercedes, Porsche), Japanese (Toyota, Lexus, Nissan), and American vehicles. We do not service motorbikes.' },
    { question: 'Do you use original parts?', answer: 'Yes, for warranty-covered work we use OEM parts. We can use high-quality aftermarket parts (Bosch, Brembo, Mahle) at your request to reduce cost. You choose at the quote stage.' },
    { question: 'How long does ceramic coating last?', answer: 'Our Gtechniq Crystal Serum Ultra coating is rated for 5 years with proper maintenance. We provide a care kit and a maintenance schedule. Annual inspection is free for the first 3 years.' },
    { question: 'Can I wait while my car is serviced?', answer: 'Yes, our lounge has Wi-Fi, espresso, and a TV. For jobs over 2 hours, we offer a free shuttle within Dubai or a 20% discount on a rental car.' },
    { question: 'Do you offer pickup and delivery?', answer: 'Yes, free within Dubai for services over AED 800. Book through the app — you will get a tracking link when our driver is on the way.' }
  ],
  whatsappMessage: 'Hello Apex Motorworks! I would like to book a service for my car. Could you share the next available slot?',
  admin: {
    metrics: [
      { label: "Today's Jobs", value: '18', delta: '+3', positive: true, icon: 'wrench' },
      { label: 'Revenue (Today)', value: 'AED 24,800', delta: '+18%', positive: true, icon: 'trending-up' },
      { label: 'Cars in Bay', value: '7', delta: '2 waiting', positive: false, icon: 'car' },
      { label: 'Avg. Rating', value: '4.92', delta: '+0.02', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 18200 }, { label: 'Tue', value: 21800 }, { label: 'Wed', value: 19400 },
      { label: 'Thu', value: 24600 }, { label: 'Fri', value: 28800 }, { label: 'Sat', value: 32400 }, { label: 'Sun', value: 24800 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 12 }, { label: 'Tue', value: 16 }, { label: 'Wed', value: 14 },
      { label: 'Thu', value: 19 }, { label: 'Fri', value: 22 }, { label: 'Sat', value: 25 }, { label: 'Sun', value: 18 }
    ],
    appointments: [
      { id: 'JOB-7721', customerName: 'Tom Bradley', service: 'Full Diagnostic Scan — BMW M3', staff: 'Karim Mansour', date: 'Today', time: '10:00 AM', duration: '60 min', status: 'completed', amount: 'AED 250', initials: 'TB' },
      { id: 'JOB-7722', customerName: 'Lena Hoffman', service: 'Ceramic Coating — Audi Q7', staff: 'Viktor Petrov', date: 'Today', time: '8:00 AM', duration: '2 days', status: 'in-progress', amount: 'AED 3,200', initials: 'LH' },
      { id: 'JOB-7723', customerName: 'Omar Farouk', service: 'Brake Pad Replacement — Lexus RX', staff: 'Ahmed Saleh', date: 'Today', time: '11:30 AM', duration: '2 hours', status: 'confirmed', amount: 'AED 850', initials: 'OF' },
      { id: 'JOB-7724', customerName: 'Sara Nabil', service: 'Paint Correction — Mercedes C200', staff: 'Viktor Petrov', date: 'Today', time: '1:00 PM', duration: '1 day', status: 'pending', amount: 'AED 1,400', initials: 'SN' },
      { id: 'JOB-7725', customerName: 'Hassan Ali', service: 'APR Stage 1 Tune — VW Golf R', staff: 'Diego Martinez', date: 'Today', time: '3:00 PM', duration: '3 hours', status: 'confirmed', amount: 'AED 2,800', initials: 'HA' },
      { id: 'JOB-7726', customerName: 'Maya Cohen', service: 'Major Service — Toyota Land Cruiser', staff: 'Ahmed Saleh', date: 'Today', time: '9:00 AM', duration: '4 hours', status: 'in-progress', amount: 'AED 1,800', initials: 'MC' }
    ],
    customers: [
      { id: 'CUST-301', name: 'Tom Bradley', email: 'tom@example.com', phone: '+971 50 456 1111', totalBookings: 14, totalSpent: 'AED 11,200', lastVisit: '1 week ago', status: 'vip', initials: 'TB' },
      { id: 'CUST-302', name: 'Lena Hoffman', email: 'lena@example.com', phone: '+971 50 456 2222', totalBookings: 6, totalSpent: 'AED 8,400', lastVisit: '3 weeks ago', status: 'active', initials: 'LH' },
      { id: 'CUST-303', name: 'Omar Farouk', email: 'omar@example.com', phone: '+971 50 456 3333', totalBookings: 22, totalSpent: 'AED 18,600', lastVisit: '1 month ago', status: 'vip', initials: 'OF' },
      { id: 'CUST-304', name: 'Sara Nabil', email: 'sara@example.com', phone: '+971 50 456 4444', totalBookings: 3, totalSpent: 'AED 2,100', lastVisit: '2 weeks ago', status: 'new', initials: 'SN' },
      { id: 'CUST-305', name: 'Hassan Ali', email: 'hassan@example.com', phone: '+971 50 456 5555', totalBookings: 9, totalSpent: 'AED 14,400', lastVisit: '4 days ago', status: 'active', initials: 'HA' }
    ],
    recentActivity: [
      { time: '5 min ago', text: 'Job completed: Tom Bradley diagnostic — AED 250', type: 'success' },
      { time: '23 min ago', text: 'New booking: Sara Nabil paint correction', type: 'info' },
      { time: '1 hr ago', text: 'Parts ordered: Brembo pads x4 (AED 480)', type: 'info' },
      { time: '2 hr ago', text: 'Low stock: Gtechniq Crystal Serum (2L left)', type: 'warning' },
      { time: '3 hr ago', text: 'New 5-star Google review from Omar Farouk', type: 'success' }
    ],
    staff: [
      { name: 'Karim Mansour', role: 'Founder & Master Tech', bio: 'Ex-BMW M Division.', specialty: 'BMW & Audi Diagnostics', rating: 4.9, avatarInitials: 'KM' },
      { name: 'Viktor Petrov', role: 'Detailing Specialist', bio: 'Gtechniq-certified.', specialty: 'Ceramic Coating & PPF', rating: 4.9, avatarInitials: 'VP' },
      { name: 'Ahmed Saleh', role: 'Senior Mechanic', bio: 'Toyota-certified.', specialty: 'Japanese & Korean Vehicles', rating: 4.8, avatarInitials: 'AS' },
      { name: 'Diego Martinez', role: 'Performance Tuner', bio: 'APR Stage 1/2/3.', specialty: 'Performance & ECU Tuning', rating: 5.0, avatarInitials: 'DM' }
    ],
    services: [
      { name: 'Full Diagnostic Scan', description: 'Comprehensive OBD-II + dealer tool scan.', price: 'AED 250', duration: '60 min', icon: 'activity', popular: true },
      { name: 'Major Service (BMW/Audi)', description: 'Oil, filters, belts, full inspection.', price: 'AED 1,800', duration: '4 hours', icon: 'wrench', popular: true },
      { name: 'Ceramic Coating (5-Year)', description: 'Gtechniq Crystal Serum Ultra.', price: 'AED 3,200', duration: '2 days', icon: 'shield' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Apex Motorworks',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'service@apexmotorworks.ae',
    policies: {
      privacy: [
        'Apex Motorworks collects your name, contact details, vehicle information (make, model, VIN, registration), service history, and payment details to deliver automotive services.',
        'Vehicle information is shared with our parts suppliers to source correct components. We do not share vehicle data with third-party marketers or dealers.',
        'Photographs of your vehicle may be taken before, during, and after service for documentation and (with consent) marketing purposes.',
        'We use your data to confirm bookings, send service reminders, recall notifications, and offer relevant promotions.',
        'Email service@apexmotorworks.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'A written quote is provided before any work begins. Additional work requires your written (or app) authorization before proceeding.',
        'All parts and labor are covered by a 12-month warranty unless explicitly stated otherwise. Warranty is voided by aftermarket modifications or track use.',
        'Vehicles must be collected within 7 days of completion. Storage fees of AED 50/day apply after that.',
        'We are not liable for personal items left in vehicles. Please remove valuables before drop-off.',
        'Test drives by our technicians are part of diagnostic and quality-control procedures.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking cart, and vehicle profile storage.',
        'Analytics cookies (optional) help us understand which services are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Deposits for ceramic coating and PPF are non-refundable once materials are ordered (typically 24 hours after booking).',
        'If a part is found defective, we replace it free of charge under the manufacturer warranty. Labor is covered by our 12-month warranty.',
        'Service fees are refundable if the issue was not addressed and we cannot resolve it within 14 days.',
        'Detailing services are non-refundable once work has begun. We offer free re-application if results do not meet spec.'
      ],
      cancellation: [
        'Cancel at least 24 hours before your appointment via the app or by calling +971 4 555 0166.',
        'Late cancellations (within 24 hours) for diagnostic services: no fee. For major services and detailing: AED 100 fee.',
        'No-shows for booked slots longer than 2 hours: AED 200 fee.',
        'Repeated no-shows may require prepayment for future bookings.'
      ],
      accessibility: [
        'Our Al Quoz facility has step-free access from the parking area. Service advisors can come to your vehicle if you have mobility limitations.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android). Booking flows are screen-reader compatible.',
        'Large-print service reports are available on request.',
        'For specific needs (hearing impairment, visual impairment), mention at booking so we can prepare appropriately.'
      ]
    }
  },
  pwa: {
    appName: 'Apex Motorworks',
    shortName: 'Apex',
    themeColor: '#F97316',
    backgroundColor: '#0F0F0F',
    description: 'Book car service instantly. Track your car through diagnostics, get photos during work, pay in-app.'
  },
  features: ['Service Booking', 'Vehicle Profiles', 'Quotation System', 'Progress Photos', 'Service History', 'Recall Alerts', 'Pickup/Delivery Tracking', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const CLEANING_CONFIG: CategoryConfig = {
  id: 'cleaning-maid',
  name: 'Cleaning & Maid Services',
  shortName: 'Cleaning',
  description: 'Bookings, service zones, staff, and quotation calculator.',
  theme: {
    primary: '#0EA5E9',       // fresh sky blue
    secondary: '#A7F3D0',      // mint
    accent: '#059669',         // trust green
    bgDark: '#0C1F2A',         // deep ocean
    bgLight: '#F0FDFA',       // mint white
    textDark: '#134E4A',
    textLight: '#ECFEFF',
    fontHeading: "'Poppins', sans-serif",
    fontBody: "'Inter', sans-serif",
    tone: 'fresh'
  },
  business: {
    name: 'PureNest Cleaning Co.',
    tagline: 'Clean Spaces, Clear Minds',
    description: 'A premium home and office cleaning service using eco-friendly products, trained staff, and a transparent online quotation calculator.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Business Bay, Bay Square, Dubai, UAE',
    phone: '+971 4 555 0155',
    whatsapp: '+971501555000',
    email: 'hello@purenest.ae',
    website: 'purenest.ae',
    hours: [
      { day: 'Sat – Thu', time: '7:00 AM – 8:00 PM' },
      { day: 'Fri', time: 'Closed' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Facebook', url: 'https://facebook.com' },
      { label: 'Google Maps', url: 'https://maps.google.com' }
    ],
    establishedYear: 2020
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Spotless Home, Zero Effort',
    subheadline: 'Vetted cleaners, eco-friendly products, transparent pricing. Get an instant quote and book in 60 seconds.',
    primaryCta: 'Get Instant Quote',
    secondaryCta: 'View Services',
    stats: [
      { label: 'Homes Cleaned', value: '6,200+' },
      { label: 'Trained Staff', value: '34' },
      { label: 'Service Zones', value: '12' },
      { label: 'Rating', value: '4.9' }
    ],
    gradient: 'linear-gradient(135deg, #0C1F2A 0%, #0EA5E9 50%, #059669 100%)'
  },
  about: {
    title: 'Clean You Can Trust, Since 2020',
    paragraphs: [
      'PureNest was founded in 2020 by Aisha Mahmoud, a working mother who was tired of unreliable cleaning services that showed up late, used harsh chemicals, and quoted one price then charged another. We built the opposite.',
      'Every cleaner is background-checked, trained for 2 weeks at our facility, and certified in eco-friendly cleaning protocols. We use plant-based products that are safe for kids, pets, and people with allergies.',
      'Our instant quotation calculator gives you a fixed price based on bedrooms, bathrooms, and square footage. No "we will see when we get there" surprises. The price you see is the price you pay.'
    ],
    values: [
      { title: 'Eco-Friendly', description: 'Plant-based, biodegradable, kid-safe products.', icon: 'leaf' },
      { title: 'Vetted Staff', description: 'Background-checked, trained, insured, and bonded.', icon: 'shield' },
      { title: 'Fixed Pricing', description: 'Instant calculator. No surprise charges.', icon: 'calculator' }
    ]
  },
  services: [
    { name: 'Standard Home Clean', description: 'Bedrooms, bathrooms, kitchen, living areas. 2-person team.', price: 'AED 180', duration: '3 hours', icon: 'home', popular: true },
    { name: 'Deep Clean', description: 'Inside appliances, cabinets, baseboards, windows. 3-person team.', price: 'AED 420', duration: '6 hours', icon: 'sparkles', popular: true },
    { name: 'Move-In/Out Clean', description: 'Empty property deep clean for handover.', price: 'AED 650', duration: '8 hours', icon: 'key' },
    { name: 'Office Cleaning', description: 'Daily, weekly, or monthly contracts for offices.', price: 'AED 90', period: 'per hour', duration: 'Flexible', icon: 'building' },
    { name: 'Sofa & Carpet Shampoo', description: 'Hot extraction, stain treatment, deodorize.', price: 'AED 280', duration: '2 hours', icon: 'droplet' },
    { name: 'Window Cleaning', description: 'Interior + exterior, up to 3 floors.', price: 'AED 220', duration: '2 hours', icon: 'sun' }
  ],
  pricing: [
    { name: 'One-Time Clean', price: 'AED 180', period: 'per visit', features: ['Standard 3-hour clean', '2-person team', 'Eco-friendly products', 'Online quote calculator', 'Photo before/after'], cta: 'Book One-Time' },
    { name: 'Weekly Subscription', price: 'AED 540', period: 'per month', features: ['1 clean per week', '20% off vs one-time', 'Same cleaner each visit', 'Priority booking', 'Free reschedule', 'Loyalty rewards'], highlighted: true, cta: 'Start Weekly' },
    { name: 'Office Contract', price: 'AED 2,400', period: 'per month', features: ['Daily 4-hour clean', 'Dedicated team', 'Eco-certified products', 'Monthly reporting', 'Quarterly deep clean', 'Single invoice'], cta: 'Get Office Quote' }
  ],
  team: [
    { name: 'Aisha Mahmoud', role: 'Founder & Operations Director', bio: 'MBA, 6 years in hospitality ops.', specialty: 'Operations & Quality', rating: 4.9, avatarInitials: 'AM' },
    { name: 'Rosa Santos', role: 'Cleaning Lead', bio: '12 years experience. Trains all new staff.', specialty: 'Deep Cleans & Move-Outs', rating: 5.0, avatarInitials: 'RS' },
    { name: 'Mira Patel', role: 'Team Supervisor', bio: 'Background in hospitality. Speaks 3 languages.', specialty: 'Home Cleans & Quality Control', rating: 4.9, avatarInitials: 'MP' },
    { name: 'Lena Kowalski', role: 'Office Accounts Lead', bio: 'Manages all corporate contracts.', specialty: 'Office Cleaning & SLAs', rating: 4.8, avatarInitials: 'LK' }
  ],
  gallery: [
    { title: 'Living Room — Before', caption: 'Post-renovation dust', category: 'Before', gradient: 'linear-gradient(135deg, #1C1917, #525252)' },
    { title: 'Living Room — After', caption: 'Move-in ready', category: 'After', gradient: 'linear-gradient(135deg, #0EA5E9, #A7F3D0)' },
    { title: 'Kitchen Deep Clean', caption: 'Degreased and disinfected', category: 'Kitchen', gradient: 'linear-gradient(135deg, #059669, #A7F3D0)' },
    { title: 'Bathroom Detail', caption: 'Limescale removed', category: 'Bathroom', gradient: 'linear-gradient(135deg, #0EA5E9, #67E8F9)' },
    { title: 'Carpet Shampooing', caption: 'Hot extraction process', category: 'Carpet', gradient: 'linear-gradient(135deg, #0C1F2A, #0EA5E9)' },
    { title: 'Window Cleaning', caption: 'Streak-free finish', category: 'Windows', gradient: 'linear-gradient(135deg, #0EA5E9, #FEF3C7)' }
  ],
  testimonials: [
    { name: 'Jennifer Hayes', location: 'Jumeirah Park', rating: 5, text: 'I cancelled my old service after trying PureNest. Same cleaner every week, fixed price, eco products that do not give my kids headaches. The app reminder is gold.', date: '4 days ago', service: 'Weekly Subscription' },
    { name: 'Vikram Shah', location: 'Downtown Dubai', rating: 5, text: 'Used the instant quote calculator for move-out cleaning. AED 650 fixed. They finished in 6 hours. Got my full deposit back from the landlord. Perfect.', date: '2 weeks ago', service: 'Move-In/Out Clean' },
    { name: 'Sophie Laurent', location: 'Dubai Marina', rating: 5, text: 'Rosa and her team did a deep clean after my renovation. The dust situation was unreal. 8 hours later, the place sparkled. Photos in the app before and after.', date: '1 month ago', service: 'Deep Clean' }
  ],
  faq: [
    { question: 'How is the price calculated?', answer: 'Our instant quote calculator uses bedrooms, bathrooms, and square footage. For deep cleans and move-outs, we add a fixed multiplier. The price you see is fixed — no surprises.' },
    { question: 'Do you bring your own products and equipment?', answer: 'Yes. All our cleaners bring eco-friendly products, microfiber cloths, and a vacuum. We use your water and electricity. For carpet shampooing, we bring our own extractor.' },
    { question: 'Are your cleaners insured?', answer: 'Yes. Every cleaner is background-checked, trained, insured (AED 50,000 liability), and bonded. You can request the same cleaner for every visit.' },
    { question: 'What if I am not satisfied?', answer: 'We offer a 24-hour re-clean guarantee. If anything is not up to standard, message us within 24 hours and we send a team back free of charge.' },
    { question: 'Which areas do you serve?', answer: 'We serve 12 zones across Dubai: Jumeirah, Marina, Downtown, Business Bay, Palm, Hills, Arabian Ranches, Silicon Oasis, Springs, Meadows, Lakes, and Greens. New zones added monthly.' }
  ],
  whatsappMessage: 'Hi PureNest! I would like a quote for cleaning my apartment. It is a 2-bedroom in Marina. What are your next available slots?',
  admin: {
    metrics: [
      { label: "Today's Jobs", value: '28', delta: '+6', positive: true, icon: 'check-square' },
      { label: 'Revenue (Today)', value: 'AED 7,840', delta: '+11%', positive: true, icon: 'trending-up' },
      { label: 'Active Subscriptions', value: '482', delta: '+18', positive: true, icon: 'repeat' },
      { label: 'Avg. Rating', value: '4.93', delta: '+0.01', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 5200 }, { label: 'Tue', value: 6800 }, { label: 'Wed', value: 6200 },
      { label: 'Thu', value: 7400 }, { label: 'Fri', value: 0 }, { label: 'Sat', value: 9200 }, { label: 'Sun', value: 7840 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 18 }, { label: 'Tue', value: 24 }, { label: 'Wed', value: 22 },
      { label: 'Thu', value: 26 }, { label: 'Fri', value: 0 }, { label: 'Sat', value: 34 }, { label: 'Sun', value: 28 }
    ],
    appointments: [
      { id: 'CLN-3301', customerName: 'Jennifer Hayes', service: 'Weekly Clean — Jumeirah Park', staff: 'Rosa Santos', date: 'Today', time: '8:00 AM', duration: '3 hours', status: 'completed', amount: 'AED 135', initials: 'JH' },
      { id: 'CLN-3302', customerName: 'Vikram Shah', service: 'Move-Out Clean — Downtown 2BHK', staff: 'Mira Patel', date: 'Today', time: '9:00 AM', duration: '8 hours', status: 'in-progress', amount: 'AED 650', initials: 'VS' },
      { id: 'CLN-3303', customerName: 'Sophie Laurent', service: 'Deep Clean — Marina Penthouse', staff: 'Rosa Santos', date: 'Today', time: '10:00 AM', duration: '6 hours', status: 'in-progress', amount: 'AED 420', initials: 'SL' },
      { id: 'CLN-3304', customerName: 'Ahmed Hassan', service: 'Sofa Shampoo — Springs 4BHK', staff: 'Mira Patel', date: 'Today', time: '1:00 PM', duration: '2 hours', status: 'pending', amount: 'AED 280', initials: 'AH' },
      { id: 'CLN-3305', customerName: 'Lara Nabil', service: 'Standard Clean — Hills Villa', staff: 'Rosa Santos', date: 'Today', time: '2:30 PM', duration: '3 hours', status: 'confirmed', amount: 'AED 180', initials: 'LN' },
      { id: 'CLN-3306', customerName: 'Daniel Cross', service: 'Window Cleaning — Marina Apt', staff: 'Mira Patel', date: 'Today', time: '4:00 PM', duration: '2 hours', status: 'confirmed', amount: 'AED 220', initials: 'DC' }
    ],
    customers: [
      { id: 'CUST-401', name: 'Jennifer Hayes', email: 'jennifer@example.com', phone: '+971 50 567 1111', totalBookings: 52, totalSpent: 'AED 7,020', lastVisit: '4 days ago', status: 'vip', initials: 'JH' },
      { id: 'CUST-402', name: 'Vikram Shah', email: 'vikram@example.com', phone: '+971 50 567 2222', totalBookings: 3, totalSpent: 'AED 1,950', lastVisit: '2 weeks ago', status: 'new', initials: 'VS' },
      { id: 'CUST-403', name: 'Sophie Laurent', email: 'sophie@example.com', phone: '+971 50 567 3333', totalBookings: 18, totalSpent: 'AED 4,820', lastVisit: '1 month ago', status: 'active', initials: 'SL' },
      { id: 'CUST-404', name: 'Ahmed Hassan', email: 'ahmed@example.com', phone: '+971 50 567 4444', totalBookings: 24, totalSpent: 'AED 5,400', lastVisit: '1 week ago', status: 'vip', initials: 'AH' },
      { id: 'CUST-405', name: 'Lara Nabil', email: 'lara@example.com', phone: '+971 50 567 5555', totalBookings: 9, totalSpent: 'AED 1,620', lastVisit: '2 weeks ago', status: 'active', initials: 'LN' }
    ],
    recentActivity: [
      { time: '7 min ago', text: 'Job completed: Jennifer Hayes — AED 135', type: 'success' },
      { time: '32 min ago', text: 'New subscription: Weekly Clean for Ahmed Hassan', type: 'success' },
      { time: '1 hr ago', text: 'Photo proof uploaded: 4 before/after for Vikram Shah', type: 'info' },
      { time: '2 hr ago', text: 'Low stock: Eco multi-surface cleaner (8L left)', type: 'warning' },
      { time: '3 hr ago', text: 'New 5-star review from Sophie Laurent', type: 'success' }
    ],
    staff: [
      { name: 'Aisha Mahmoud', role: 'Founder & Operations Director', bio: 'MBA, 6 years in hospitality ops.', specialty: 'Operations & Quality', rating: 4.9, avatarInitials: 'AM' },
      { name: 'Rosa Santos', role: 'Cleaning Lead', bio: '12 years experience.', specialty: 'Deep Cleans & Move-Outs', rating: 5.0, avatarInitials: 'RS' },
      { name: 'Mira Patel', role: 'Team Supervisor', bio: 'Hospitality background.', specialty: 'Home Cleans & QC', rating: 4.9, avatarInitials: 'MP' },
      { name: 'Lena Kowalski', role: 'Office Accounts Lead', bio: 'Manages corporate contracts.', specialty: 'Office Cleaning & SLAs', rating: 4.8, avatarInitials: 'LK' }
    ],
    services: [
      { name: 'Standard Home Clean', description: 'Bedrooms, bathrooms, kitchen, living areas.', price: 'AED 180', duration: '3 hours', icon: 'home', popular: true },
      { name: 'Deep Clean', description: 'Inside appliances, cabinets, baseboards.', price: 'AED 420', duration: '6 hours', icon: 'sparkles', popular: true },
      { name: 'Move-In/Out Clean', description: 'Empty property deep clean for handover.', price: 'AED 650', duration: '8 hours', icon: 'key' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'PureNest Cleaning Co.',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'hello@purenest.ae',
    policies: {
      privacy: [
        'PureNest Cleaning Co. collects your name, contact details, property address, property details (bedrooms, bathrooms, square footage), and payment information to deliver cleaning services.',
        'Property access details (gate codes, key handling, alarm instructions) are shared only with the cleaning team assigned to your booking and are deleted after the job is completed.',
        'We do not photograph personal items. Before/after photos are limited to the cleaned areas and exclude personal belongings. Photos are uploaded to your account for your review.',
        'We use your data to confirm bookings, send reminders, process payments, and offer relevant promotions (only with consent).',
        'Email hello@purenest.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'A fixed quote is provided before booking. Additional services requested on-site require your authorization and may incur additional charges.',
        'Cleaning staff are insured up to AED 50,000 for accidental damage. Claims must be reported within 24 hours with photographic evidence.',
        'We are not liable for pre-existing damage, fragile items not declared at booking, or items of extraordinary value left in cleaning areas.',
        'Subscription plans are billed monthly and can be cancelled anytime with 7 days notice. No cancellation fees.',
        'Right of entry is granted by you for the booked time only. We do not retain keys or access codes after the booking.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking cart, and property profile storage.',
        'Analytics cookies (optional) help us understand which services are most requested in each zone.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'If a job does not meet standard, contact us within 24 hours for a free re-clean of affected areas.',
        'If we cannot resolve the issue within 7 days, a full or partial refund is issued based on severity.',
        'Deposits for move-out cleans are non-refundable within 48 hours of the booking.',
        'Subscription fees are non-refundable once a billing cycle has started. Future cycles can be cancelled.'
      ],
      cancellation: [
        'Cancel at least 24 hours before your booking via the app or by calling +971 4 555 0155.',
        'Late cancellations (within 24 hours): AED 50 fee. Same-day cancellations: 50% of booking value.',
        'No-shows: 100% of booking value charged.',
        'Subscriptions: cancel anytime with 7 days notice. No cancellation fees.',
        'Weather-related cancellations (rare in Dubai) incur no fee and we reschedule at your convenience.'
      ],
      accessibility: [
        'Our booking app is screen-reader compatible (VoiceOver iOS, TalkBack Android) and we are working toward WCAG 2.1 AA compliance.',
        'Cleaning staff can accommodate specific instructions for clients with mobility limitations, allergies, or chemical sensitivities. Mention at booking.',
        'We offer fragrance-free and hypoallergenic cleaning product options on request.',
        'For specific accessibility needs, contact accessibility@purenest.ae.'
      ]
    }
  },
  pwa: {
    appName: 'PureNest',
    shortName: 'PureNest',
    themeColor: '#0EA5E9',
    backgroundColor: '#0C1F2A',
    description: 'Book cleaning instantly. Get a fixed quote, track your cleaner, view before/after photos.'
  },
  features: ['Instant Quote Calculator', 'Booking System', 'Service Zones', 'Before/After Photos', 'Subscription Plans', 'Eco-Friendly Products', 'WhatsApp Reminders', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const CATEGORIES_1_TO_5: CategoryConfig[] = [
  SPA_CONFIG, SALON_CONFIG, RESTAURANT_CONFIG, GARAGE_CONFIG, CLEANING_CONFIG
];
