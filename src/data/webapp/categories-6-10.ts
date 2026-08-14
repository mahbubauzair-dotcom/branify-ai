import { CategoryConfig } from './types';

// ============================================================================
// Categories 6-10: Tailor, Photography, Fitness, Pet, Tutoring
// ============================================================================

export const TAILOR_CONFIG: CategoryConfig = {
  id: 'tailors-boutiques',
  name: 'Tailors & Boutiques',
  shortName: 'Tailor',
  description: 'Collections, measurements, custom tailoring, and order tracking.',
  theme: {
    primary: '#7C2D12',       // rich burgundy
    secondary: '#FED7AA',     // cream
    accent: '#D4AF37',        // antique gold
    bgDark: '#1A0F0A',        // dark chocolate
    bgLight: '#FFFBF5',       // cream white
    textDark: '#451A03',
    textLight: '#FEF3C7',
    fontHeading: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    tone: 'editorial'
  },
  business: {
    name: 'Atelier Reyes',
    tagline: 'Bespoke Tailoring, Timeless Elegance',
    description: 'A boutique atelier specializing in made-to-measure suits, evening gowns, and traditional couture for discerning clients.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'DIFC Gate Village, Building 4, Dubai, UAE',
    phone: '+971 4 555 0144',
    whatsapp: '+971501440000',
    email: 'atelier@reyesbespoke.ae',
    website: 'reyesbespoke.ae',
    hours: [
      { day: 'Sat – Thu', time: '10:00 AM – 8:00 PM' },
      { day: 'Fri', time: '4:00 PM – 8:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Pinterest', url: 'https://pinterest.com' },
      { label: 'Vogue Arabia', url: 'https://example.com' }
    ],
    establishedYear: 2015
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Stitched for You, Alone',
    subheadline: 'Hand-finished bespoke suiting and couture gowns. Three fittings. Six weeks. Lifetime alterations.',
    primaryCta: 'Book Consultation',
    secondaryCta: 'View Collections',
    stats: [
      { label: 'Pieces Crafted', value: '2,400+' },
      { label: 'Master Tailors', value: '5' },
      { label: 'Years in Atelier', value: '11' },
      { label: 'Vogue Features', value: '3' }
    ],
    gradient: 'linear-gradient(135deg, #1A0F0A 0%, #7C2D12 50%, #D4AF37 100%)'
  },
  about: {
    title: 'Eleven Years of Patient Craft',
    paragraphs: [
      'Atelier Reyes was founded in 2015 by Elena Reyes, a third-generation tailor trained at Savile Row and Maison Lesage in Paris. Every piece is hand-cut, hand-finished, and tracked through three fittings over six weeks.',
      'We work with mills that have supplied royalty — Loro Piana for wools, Dormeuil for exotic blends, and Silk Mills of Como for our linings. Each fabric is hand-selected and reserved for a single client.',
      'Our lifetime alteration guarantee means the suit you commission in 2026 will be adjusted free of charge in 2046 when your measurements change. That is the meaning of investment.'
    ],
    values: [
      { title: 'Hand-Finished', description: 'Every buttonhole, lining, and seam by hand.', icon: 'thread' },
      { title: 'Single-Client Fabric', description: 'Reserved bolts, never reused for another client.', icon: 'shield' },
      { title: 'Lifetime Alterations', description: 'Free adjustments for the life of the garment.', icon: 'infinity' }
    ]
  },
  services: [
    { name: 'Bespoke Two-Piece Suit', description: 'Full canvas, hand-finished, 3 fittings over 6 weeks.', price: 'from AED 8,500', duration: '6 weeks', icon: 'suit', popular: true },
    { name: 'Evening Gown Couture', description: 'Hand-embroidered, custom pattern, fabric included.', price: 'from AED 14,000', duration: '8 weeks', icon: 'dress', popular: true },
    { name: 'Wedding Suit', description: 'Suit + shirt + tie + pocket square + alterations.', price: 'from AED 12,000', duration: '8 weeks', icon: 'crown' },
    { name: 'Traditional Kandora', description: 'Premium fabric, hand-stitched detailing.', price: 'from AED 1,800', duration: '2 weeks', icon: 'shirt' },
    { name: 'Shirt (3-Pack)', description: 'Egyptian cotton, monogram included.', price: 'from AED 1,200', duration: '3 weeks', icon: 'shirt' },
    { name: 'Alterations', description: 'Existing garments, free for life on our pieces.', price: 'AED 0 — AED 450', duration: '1–7 days', icon: 'scissors' }
  ],
  pricing: [
    { name: 'First Suit', price: 'AED 8,500', period: 'one piece', features: ['Loro Piana wool', 'Full canvas construction', '3 fittings over 6 weeks', 'Lifetime alterations', 'Monogram included'], cta: 'Book Consultation' },
    { name: 'Wedding Atelier', price: 'AED 18,000', period: 'groom package', features: ['Suit + shirt + tie + square', 'Premium wool or silk blend', 'Bridal party discounts (4+)', 'Priority fittings', 'Garment bag included', '5-year repair warranty'], highlighted: true, cta: 'Enquire Wedding' },
    { name: 'Couture Gown', price: 'from AED 14,000', period: 'one piece', features: ['Hand embroidery', 'Custom pattern drafted', 'Premium silk/crepe', '4 fittings over 8 weeks', 'Lifetime alterations', 'Photo shoot for archive'], cta: 'Enquire Couture' }
  ],
  team: [
    { name: 'Elena Reyes', role: 'Founder & Master Cutter', bio: 'Savile Row trained. 22 years experience.', specialty: 'Bespoke Suits & Pattern Drafting', rating: 5.0, avatarInitials: 'ER' },
    { name: 'Marco Bianchi', role: 'Couture Tailor', bio: 'Ex-Maison Lesage Paris. Embroidery master.', specialty: 'Evening Gowns & Embroidery', rating: 5.0, avatarInitials: 'MB' },
    { name: 'Yuki Tanaka', role: 'Traditional Cutter', bio: 'Tokyo-trained in Japanese precision tailoring.', specialty: 'Kandora & Eastern Wear', rating: 4.9, avatarInitials: 'YT' },
    { name: 'Sofia Conti', role: 'Fitting Specialist', bio: 'Manages all 3-stage fitting appointments.', specialty: 'Fittings & Alterations', rating: 4.9, avatarInitials: 'SC' }
  ],
  gallery: [
    { title: 'Midnight Blue Suit', caption: 'Loro Piana 130s wool', category: 'Suiting', gradient: 'linear-gradient(135deg, #1E3A8A, #0F172A)' },
    { title: 'Ivory Wedding Gown', caption: 'Hand-embroidered lace', category: 'Couture', gradient: 'linear-gradient(135deg, #FFFBEB, #D4AF37)' },
    { title: 'Charcoal Three-Piece', caption: 'Full canvas construction', category: 'Suiting', gradient: 'linear-gradient(135deg, #1F2937, #374151)' },
    { title: 'Embroidery Detail', caption: 'Hand-stitched buttonhole', category: 'Detail', gradient: 'linear-gradient(135deg, #7C2D12, #D4AF37)' },
    { title: 'White Kandora', caption: 'Premium Egyptian cotton', category: 'Traditional', gradient: 'linear-gradient(135deg, #FFFBF5, #FED7AA)' },
    { title: 'Atelier Workspace', caption: 'Where craft happens', category: 'Atelier', gradient: 'linear-gradient(135deg, #1A0F0A, #7C2D12)' }
  ],
  testimonials: [
    { name: 'Richard Wellington', location: 'DIFC', rating: 5, text: 'My Loro Piana suit from Elena fits like nothing I have ever owned. Six weeks, three fittings, and the canvas construction makes it drape like liquid. Worth every dirham.', date: '2 weeks ago', service: 'Bespoke Two-Piece Suit' },
    { name: 'Amira Al Sabah', location: 'Emirates Hills', rating: 5, text: 'Marco made my daughter\'s wedding gown. Hand-embroidered over 8 weeks. The bride cried when she tried it on. The app tracked every fitting — pure poetry.', date: '1 month ago', service: 'Evening Gown Couture' },
    { name: 'David Chen', location: 'Palm Jumeirah', rating: 5, text: 'Bought a suit here 4 years ago. Have had two free alterations since as my measurements changed. Lifetime guarantee is real, not marketing.', date: '3 weeks ago', service: 'Alterations' }
  ],
  faq: [
    { question: 'How long does a bespoke suit take?', answer: 'Six weeks minimum, with three fittings. Rush service (3 weeks) is available for an additional 30% fee, but we do not compromise on the three-fitting protocol.' },
    { question: 'Do you offer fabric swatches to take home?', answer: 'Yes. We provide a free swatch pack of up to 8 fabrics for your consideration. Reserved bolts are held for 14 days while you decide.' },
    { question: 'What is the lifetime alteration guarantee?', answer: 'Any garment we make can be altered free of charge for the life of the garment. This includes size changes up to 2 inches. Major reconstruction may incur a materials fee.' },
    { question: 'Can you replicate a suit I already own?', answer: 'We can use an existing suit as inspiration for cut and fit, but every piece is hand-drafted to your current measurements. We do not do mechanical cloning.' },
    { question: 'Do you do rush orders for weddings?', answer: 'Yes, with a 30% rush fee and minimum 4 weeks notice. For weddings, we strongly recommend booking 4 months in advance for full canvas suits.' }
  ],
  whatsappMessage: 'Good day Atelier Reyes. I would like to book a consultation for a bespoke suit. When is your next available fitting slot?',
  admin: {
    metrics: [
      { label: 'Active Orders', value: '24', delta: '+3', positive: true, icon: 'package' },
      { label: 'Revenue (Month)', value: 'AED 184,000', delta: '+22%', positive: true, icon: 'trending-up' },
      { label: 'Upcoming Fittings', value: '11', delta: 'this week', positive: true, icon: 'calendar' },
      { label: 'Avg. Rating', value: '4.97', delta: '+0.01', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 4200 }, { label: 'Tue', value: 6800 }, { label: 'Wed', value: 5400 },
      { label: 'Thu', value: 8200 }, { label: 'Fri', value: 3800 }, { label: 'Sat', value: 9400 }, { label: 'Sun', value: 7600 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 2 }, { label: 'Tue', value: 4 }, { label: 'Wed', value: 3 },
      { label: 'Thu', value: 5 }, { label: 'Fri', value: 2 }, { label: 'Sat', value: 6 }, { label: 'Sun', value: 4 }
    ],
    appointments: [
      { id: 'FIT-101', customerName: 'Richard Wellington', service: 'Suit Fitting 2 of 3', staff: 'Elena Reyes', date: 'Today', time: '11:00 AM', duration: '60 min', status: 'confirmed', amount: 'AED 8,500', initials: 'RW' },
      { id: 'FIT-102', customerName: 'Amira Al Sabah', service: 'Gown Final Fitting', staff: 'Marco Bianchi', date: 'Today', time: '1:00 PM', duration: '90 min', status: 'confirmed', amount: 'AED 14,000', initials: 'AS' },
      { id: 'FIT-103', customerName: 'David Chen', service: 'Alteration Pickup', staff: 'Sofia Conti', date: 'Today', time: '2:30 PM', duration: '15 min', status: 'pending', amount: 'AED 0', initials: 'DC' },
      { id: 'FIT-104', customerName: 'Yusuf Al Rashid', service: 'Consultation', staff: 'Elena Reyes', date: 'Today', time: '4:00 PM', duration: '45 min', status: 'confirmed', amount: 'AED 0', initials: 'YR' },
      { id: 'FIT-105', customerName: 'Layla Hassan', service: 'Gown Fitting 1 of 4', staff: 'Marco Bianchi', date: 'Today', time: '5:30 PM', duration: '60 min', status: 'pending', amount: 'AED 14,000', initials: 'LH' },
      { id: 'FIT-106', customerName: 'Tom Bradley', service: 'Suit Fitting 3 of 3', staff: 'Elena Reyes', date: 'Today', time: '6:30 PM', duration: '45 min', status: 'confirmed', amount: 'AED 8,500', initials: 'TB' }
    ],
    customers: [
      { id: 'CUST-501', name: 'Richard Wellington', email: 'richard@example.com', phone: '+971 50 678 1111', totalBookings: 7, totalSpent: 'AED 64,500', lastVisit: '2 weeks ago', status: 'vip', initials: 'RW' },
      { id: 'CUST-502', name: 'Amira Al Sabah', email: 'amira@example.com', phone: '+971 50 678 2222', totalBookings: 4, totalSpent: 'AED 56,000', lastVisit: '1 month ago', status: 'vip', initials: 'AS' },
      { id: 'CUST-503', name: 'David Chen', email: 'david@example.com', phone: '+971 50 678 3333', totalBookings: 12, totalSpent: 'AED 38,200', lastVisit: '3 weeks ago', status: 'vip', initials: 'DC' },
      { id: 'CUST-504', name: 'Yusuf Al Rashid', email: 'yusuf@example.com', phone: '+971 50 678 4444', totalBookings: 1, totalSpent: 'AED 0', lastVisit: 'today', status: 'new', initials: 'YR' },
      { id: 'CUST-505', name: 'Layla Hassan', email: 'layla@example.com', phone: '+971 50 678 5555', totalBookings: 2, totalSpent: 'AED 14,000', lastVisit: '4 days ago', status: 'active', initials: 'LH' }
    ],
    recentActivity: [
      { time: '12 min ago', text: 'New consultation booked: Yusuf Al Rashid', type: 'info' },
      { time: '1 hr ago', text: 'Payment received: AED 8,500 from Richard Wellington', type: 'success' },
      { time: '2 hr ago', text: 'Fabric reserved: Loro Piana 130s charcoal (held 14 days)', type: 'info' },
      { time: '4 hr ago', text: 'Gown completed: Amira Al Sabah — hand-embroidery done', type: 'success' },
      { time: '1 day ago', text: 'New 5-star review from David Chen', type: 'success' }
    ],
    staff: [
      { name: 'Elena Reyes', role: 'Founder & Master Cutter', bio: 'Savile Row trained. 22 years experience.', specialty: 'Bespoke Suits & Pattern Drafting', rating: 5.0, avatarInitials: 'ER' },
      { name: 'Marco Bianchi', role: 'Couture Tailor', bio: 'Ex-Maison Lesage Paris.', specialty: 'Evening Gowns & Embroidery', rating: 5.0, avatarInitials: 'MB' },
      { name: 'Yuki Tanaka', role: 'Traditional Cutter', bio: 'Tokyo-trained precision.', specialty: 'Kandora & Eastern Wear', rating: 4.9, avatarInitials: 'YT' },
      { name: 'Sofia Conti', role: 'Fitting Specialist', bio: 'Manages all fitting appointments.', specialty: 'Fittings & Alterations', rating: 4.9, avatarInitials: 'SC' }
    ],
    services: [
      { name: 'Bespoke Two-Piece Suit', description: 'Full canvas, hand-finished, 3 fittings.', price: 'from AED 8,500', duration: '6 weeks', icon: 'suit', popular: true },
      { name: 'Evening Gown Couture', description: 'Hand-embroidered, custom pattern.', price: 'from AED 14,000', duration: '8 weeks', icon: 'dress', popular: true },
      { name: 'Wedding Suit', description: 'Suit + shirt + tie + square.', price: 'from AED 12,000', duration: '8 weeks', icon: 'crown' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Atelier Reyes',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'atelier@reyesbespoke.ae',
    policies: {
      privacy: [
        'Atelier Reyes collects your name, contact details, body measurements, fabric preferences, and payment information to deliver bespoke tailoring services.',
        'Body measurements are retained for the lifetime of your relationship with us to enable our lifetime alteration guarantee. They are never shared with third parties.',
        'Photographs of fittings and finished pieces may be taken with your explicit consent for our portfolio and social media. You can withdraw consent at any time.',
        'We do not sell your data. Fabric reservations are tracked internally only.',
        'Email atelier@reyesbespoke.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'A 50% deposit is required to begin any bespoke order. This secures your fabric reservation and cutting time. The balance is due at final fitting.',
        'Bespoke pieces are hand-crafted to your measurements and cannot be refunded. However, our lifetime alteration guarantee covers size changes for the life of the garment.',
        'Three fittings are mandatory for bespoke suits. Skipping fittings may delay delivery and compromise fit quality.',
        'Fabric selections are final once cutting begins. Changes before cutting incur no fee; changes after cutting require new fabric purchase.',
        'Rush service (3 weeks instead of 6) is available for an additional 30% fee. We do not compromise on the three-fitting protocol even for rush orders.'
      ],
      cookies: [
        'Our app uses essential cookies for session, fitting calendar, and measurement storage.',
        'Analytics cookies (optional) help us understand which fabrics and styles are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Deposits for bespoke orders are non-refundable once fabric is cut (typically 48 hours after deposit).',
        'If a piece does not fit and we cannot resolve it through alterations within 30 days, a full refund or remake is offered.',
        'Lifetime alteration guarantee: free size adjustments for the life of the garment, up to 2 inches per measurement.',
        'Couture gowns are non-refundable once embroidery has begun.'
      ],
      cancellation: [
        'Cancel or reschedule fittings at least 24 hours in advance via the app.',
        'Late cancellations (within 24 hours) incur no fee for the first two; subsequent late cancels are AED 100.',
        'No-shows for fitting appointments: AED 200 fee, applied to your final invoice if you proceed with the order.',
        'Order cancellations: deposit forfeited after fabric cutting. Before cutting: full refund.'
      ],
      accessibility: [
        'Our DIFC atelier has step-free access from Gate Village parking and an accessible fitting room.',
        'Fitting appointments can be extended for clients who need more time. Mention at booking.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android).',
        'For clients with specific needs (limited mobility, sensory sensitivity, visual impairment), mention at booking so we can prepare appropriately.'
      ]
    }
  },
  pwa: {
    appName: 'Atelier Reyes',
    shortName: 'Reyes',
    themeColor: '#7C2D12',
    backgroundColor: '#1A0F0A',
    description: 'Track your bespoke order through fittings. Receive fabric arrival and fitting reminders.'
  },
  features: ['Consultation Booking', 'Measurement Profile', 'Fabric Reservation', '3-Stage Fittings', 'Order Tracking', 'Lifetime Alterations', 'Portfolio Gallery', 'WhatsApp Updates'],
  moduleCount: 15,
  pageEstimate: 18
};

export const PHOTOGRAPHY_CONFIG: CategoryConfig = {
  id: 'photographers-videographers',
  name: 'Freelance Photographers & Videographers',
  shortName: 'Photography',
  description: 'Portfolio, packages, booking, leads, and project status.',
  theme: {
    primary: '#0F172A',        // cinema black
    secondary: '#334155',       // slate
    accent: '#E11D48',          // red accent
    bgDark: '#0A0A0A',          // pitch black
    bgLight: '#FAFAFA',         // studio white
    textDark: '#0F172A',
    textLight: '#FAFAFA',
    fontHeading: "'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    tone: 'cinematic'
  },
  business: {
    name: 'Lumen Studio',
    tagline: 'Light, Frame, Forever',
    description: 'A premium photography and cinematography studio specializing in weddings, editorials, and brand films with cinematic color grading.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Alserkal Avenue, Unit 17, Al Quoz, Dubai, UAE',
    phone: '+971 4 555 0133',
    whatsapp: '+971501330000',
    email: 'shoot@lumenstudio.ae',
    website: 'lumenstudio.ae',
    hours: [
      { day: 'Mon – Fri', time: '10:00 AM – 7:00 PM' },
      { day: 'Sat', time: 'By appointment' },
      { day: 'Sun', time: 'Closed' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'Vimeo', url: 'https://vimeo.com' },
      { label: 'Behance', url: 'https://behance.net' }
    ],
    establishedYear: 2018
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Your Story, Cinematically Told',
    subheadline: 'Award-winning wedding and editorial cinematography. Color graded in-house. Delivered in 14 days.',
    primaryCta: 'Book a Shoot',
    secondaryCta: 'View Portfolio',
    stats: [
      { label: 'Weddings Shot', value: '180+' },
      { label: 'Editorial Features', value: '42' },
      { label: 'Awards', value: '7' },
      { label: 'Brand Films', value: '95' }
    ],
    gradient: 'linear-gradient(135deg, #0A0A0A 0%, #1E293B 50%, #E11D48 100%)'
  },
  about: {
    title: 'Eight Years Behind the Lens',
    paragraphs: [
      'Lumen Studio was founded in 2018 by Daniel Park, a former Magnum Photos contributor who brought documentary sensibility to commercial work. We do not just take photos — we craft visual narratives.',
      'Our Alserkal studio features a 200sqm cyclorama wall, Profoto B10 lighting, and a dedicated color-grading suite running DaVinci Resolve Studio. Every frame is graded by hand, never auto-applied.',
      'We shoot weddings on Leica Q3 and Sony A7R V for hybrid photo/video. Brand films on RED Komodo 6K. Every project gets a custom color LUT developed specifically for your brand.'
    ],
    values: [
      { title: 'Cinematic Color', description: 'Hand-graded in DaVinci Resolve Studio. Never auto.', icon: 'palette' },
      { title: 'Documentary Truth', description: 'Magnum-trained eye for real moments, not poses.', icon: 'camera' },
      { title: '14-Day Delivery', description: 'Fast turnaround without compromising craft.', icon: 'clock' }
    ]
  },
  services: [
    { name: 'Full Wedding Day', description: '12-hour coverage, 2 shooters, cinematic film + photos.', price: 'from AED 12,000', duration: '12 hours', icon: 'heart', popular: true },
    { name: 'Editorial Fashion Shoot', description: 'Half-day studio or location, 8 final retouched images.', price: 'from AED 4,500', duration: '4 hours', icon: 'camera', popular: true },
    { name: 'Brand Film (60 sec)', description: 'Concept, shoot, color grade, music license, delivery.', price: 'from AED 18,000', duration: '3 days', icon: 'film' },
    { name: 'Product Photography', description: 'E-commerce ready, 20 SKUs, white background.', price: 'from AED 2,800', duration: '1 day', icon: 'package' },
    { name: 'Pre-Wedding Film', description: 'Cinematic 3-min film at 2 Dubai locations.', price: 'from AED 6,500', duration: '6 hours', icon: 'film' },
    { name: 'Event Coverage', description: 'Conference, gala, or corporate event, 4 hours.', price: 'from AED 3,200', duration: '4 hours', icon: 'camera' }
  ],
  pricing: [
    { name: 'Half Day', price: 'AED 4,500', period: '4 hours', features: ['1 photographer', 'Studio or 1 location', '8 retouched images', 'Online gallery', 'Print release'], cta: 'Book Half Day' },
    { name: 'Full Wedding', price: 'AED 12,000', period: '12 hours', features: ['2 shooters (photo+video)', 'Cinematic 5-min film', '600+ edited photos', 'Highlight reel (60 sec)', 'Same-day teaser', 'Drone footage', 'Online gallery + USB'], highlighted: true, cta: 'Book Wedding' },
    { name: 'Brand Film', price: 'AED 18,000', period: '3 days', features: ['Concept development', 'RED Komodo 6K shoot', 'Full color grade', 'Licensed music', '60-sec + 30-sec + 15-sec cut', 'Social media versions', 'Raw footage delivery'], cta: 'Enquire Brand Film' }
  ],
  team: [
    { name: 'Daniel Park', role: 'Founder & Lead Photographer', bio: 'Ex-Magnum contributor. 15 years experience.', specialty: 'Weddings & Documentary', rating: 5.0, avatarInitials: 'DP' },
    { name: 'Sofia Lindqvist', role: 'Cinematographer', bio: 'Stockholm Film School. Brand film specialist.', specialty: 'Brand Films & Color', rating: 4.9, avatarInitials: 'SL' },
    { name: 'Aria Kapoor', role: 'Editorial Photographer', bio: 'Vogue Arabia contributor. Fashion specialist.', specialty: 'Fashion & Editorial', rating: 5.0, avatarInitials: 'AK' },
    { name: 'Marco Rossi', role: 'Colorist', bio: 'DaVinci Resolve certified. Hand-grades every project.', specialty: 'Color Grading', rating: 4.9, avatarInitials: 'MR' }
  ],
  gallery: [
    { title: 'Wedding — First Look', caption: 'Documentary moment', category: 'Wedding', gradient: 'linear-gradient(135deg, #0F172A, #E11D48)' },
    { title: 'Editorial — Vogue Arabia', caption: 'Spring 2025 feature', category: 'Editorial', gradient: 'linear-gradient(135deg, #1E293B, #64748B)' },
    { title: 'Brand Film — Nissan', caption: 'Still from 60-sec spot', category: 'Brand', gradient: 'linear-gradient(135deg, #0A0A0A, #DC2626)' },
    { title: 'Product — Perfume', caption: 'E-commerce hero shot', category: 'Product', gradient: 'linear-gradient(135deg, #1C1917, #FACC15)' },
    { title: 'Pre-Wedding — Desert', caption: 'Golden hour film still', category: 'Pre-Wedding', gradient: 'linear-gradient(135deg, #7C2D12, #F59E0B)' },
    { title: 'Event — Gala', caption: 'Black-tie coverage', category: 'Event', gradient: 'linear-gradient(135deg, #0F172A, #475569)' }
  ],
  testimonials: [
    { name: 'Olivia & James', location: 'Palm Jumeirah Wedding', rating: 5, text: 'Daniel captured moments we did not even know happened. The same-day teaser had our guests in tears at the reception. The final film is a family heirloom.', date: '1 month ago', service: 'Full Wedding Day' },
    { name: 'Vogue Arabia Editorial', location: 'Editorial Client', rating: 5, text: 'Aria understood our brief instantly. The shoot was efficient, the color grading was editorial-grade, and delivery was 2 days early. We will book again.', date: '3 weeks ago', service: 'Editorial Fashion Shoot' },
    { name: 'Nissan Middle East', location: 'Brand Film Client', rating: 5, text: 'Sofia and Marco delivered a 60-second spot that outperformed our agency\'s version. The color grade alone is what set it apart. ROI within 2 weeks.', date: '2 months ago', service: 'Brand Film (60 sec)' }
  ],
  faq: [
    { question: 'How soon do we get our photos?', answer: 'For weddings: same-day teaser (60 sec), 7-day online gallery, 14-day final delivery (USB + gallery). For editorials: 7–10 days. Brand films: 14–21 days depending on complexity.' },
    { question: 'Do you travel for shoots?', answer: 'Yes. UAE-wide is included. International travel is billed at cost (flights, accommodation, permits) plus a flat AED 2,000 travel fee. We have shot in 12 countries.' },
    { question: 'Can we get the raw unedited files?', answer: 'For brand films: yes, raw footage delivery is included. For weddings and editorials: we deliver only retouched images as part of our craft. Raw files are never shared for weddings.' },
    { question: 'What cameras do you use?', answer: 'Weddings: Leica Q3 + Sony A7R V. Editorials: Hasselblad X2D + Profoto B10. Brand films: RED Komodo 6K. Backup gear always on-site. All footage backed up to 3 locations.' },
    { question: 'Do you offer payment plans?', answer: 'For weddings: 30% booking, 40% pre-shoot, 30% on delivery. For brand films: 50% booking, 50% on delivery. We accept card, bank transfer, and crypto (USDC).' }
  ],
  whatsappMessage: 'Hi Lumen Studio! I am getting married in 3 months and would love to discuss your wedding packages. Do you have availability?',
  admin: {
    metrics: [
      { label: 'Active Projects', value: '14', delta: '+2', positive: true, icon: 'film' },
      { label: 'Revenue (Month)', value: 'AED 142,000', delta: '+18%', positive: true, icon: 'trending-up' },
      { label: 'New Leads', value: '8', delta: 'this week', positive: true, icon: 'mail' },
      { label: 'Avg. Rating', value: '4.96', delta: '+0.02', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 4200 }, { label: 'Tue', value: 6800 }, { label: 'Wed', value: 12400 },
      { label: 'Thu', value: 8200 }, { label: 'Fri', value: 14600 }, { label: 'Sat', value: 22800 }, { label: 'Sun', value: 0 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 1 }, { label: 'Tue', value: 2 }, { label: 'Wed', value: 4 },
      { label: 'Thu', value: 2 }, { label: 'Fri', value: 3 }, { label: 'Sat', value: 6 }, { label: 'Sun', value: 0 }
    ],
    appointments: [
      { id: 'SHOOT-201', customerName: 'Olivia & James', service: 'Full Wedding Day — Palm', staff: 'Daniel Park', date: 'Today', time: '2:00 PM', duration: '12 hours', status: 'in-progress', amount: 'AED 12,000', initials: 'OJ' },
      { id: 'SHOOT-202', customerName: 'Vogue Arabia', service: 'Editorial — Half Day Studio', staff: 'Aria Kapoor', date: 'Today', time: '10:00 AM', duration: '4 hours', status: 'completed', amount: 'AED 4,500', initials: 'VA' },
      { id: 'SHOOT-203', customerName: 'Nissan ME', service: 'Brand Film Color Review', staff: 'Marco Rossi', date: 'Today', time: '4:00 PM', duration: '90 min', status: 'confirmed', amount: 'AED 18,000', initials: 'NM' },
      { id: 'SHOOT-204', customerName: 'Tom & Sara', service: 'Pre-Wedding Consultation', staff: 'Daniel Park', date: 'Today', time: '6:00 PM', duration: '45 min', status: 'pending', amount: 'AED 0', initials: 'TS' },
      { id: 'SHOOT-205', customerName: 'Chanel Middle East', service: 'Product Shoot — 20 SKUs', staff: 'Aria Kapoor', date: 'Tomorrow', time: '9:00 AM', duration: '1 day', status: 'confirmed', amount: 'AED 2,800', initials: 'CM' },
      { id: 'SHOOT-206', customerName: 'Arabian Gulf Gala', service: 'Event Coverage — 4 hours', staff: 'Sofia Lindqvist', date: 'Tomorrow', time: '7:00 PM', duration: '4 hours', status: 'confirmed', amount: 'AED 3,200', initials: 'AG' }
    ],
    customers: [
      { id: 'CUST-601', name: 'Olivia Bennett', email: 'olivia@example.com', phone: '+971 50 789 1111', totalBookings: 3, totalSpent: 'AED 22,500', lastVisit: '1 month ago', status: 'vip', initials: 'OB' },
      { id: 'CUST-602', name: 'Vogue Arabia', email: 'editor@vogue.ae', phone: '+971 4 789 2222', totalBookings: 6, totalSpent: 'AED 27,000', lastVisit: '3 weeks ago', status: 'vip', initials: 'VA' },
      { id: 'CUST-603', name: 'Nissan Middle East', email: 'marketing@nissan.ae', phone: '+971 4 789 3333', totalBookings: 2, totalSpent: 'AED 36,000', lastVisit: '2 months ago', status: 'vip', initials: 'NM' },
      { id: 'CUST-604', name: 'Tom Bradley', email: 'tom@example.com', phone: '+971 50 789 4444', totalBookings: 1, totalSpent: 'AED 0', lastVisit: 'today', status: 'new', initials: 'TB' },
      { id: 'CUST-605', name: 'Chanel Middle East', email: 'marketing@chanel.ae', phone: '+971 4 789 5555', totalBookings: 4, totalSpent: 'AED 11,200', lastVisit: '6 months ago', status: 'active', initials: 'CM' }
    ],
    recentActivity: [
      { time: '8 min ago', text: 'New lead: Tom & Sara wedding enquiry for March', type: 'info' },
      { time: '1 hr ago', text: 'Shoot completed: Vogue Arabia editorial — 4 hours', type: 'success' },
      { time: '3 hr ago', text: 'Payment received: AED 4,500 from Vogue Arabia', type: 'success' },
      { time: '4 hr ago', text: 'Color grade delivered: Nissan brand film v3', type: 'success' },
      { time: '1 day ago', text: 'New 5-star review from Olivia & James', type: 'success' }
    ],
    staff: [
      { name: 'Daniel Park', role: 'Founder & Lead Photographer', bio: 'Ex-Magnum contributor.', specialty: 'Weddings & Documentary', rating: 5.0, avatarInitials: 'DP' },
      { name: 'Sofia Lindqvist', role: 'Cinematographer', bio: 'Stockholm Film School.', specialty: 'Brand Films & Color', rating: 4.9, avatarInitials: 'SL' },
      { name: 'Aria Kapoor', role: 'Editorial Photographer', bio: 'Vogue Arabia contributor.', specialty: 'Fashion & Editorial', rating: 5.0, avatarInitials: 'AK' },
      { name: 'Marco Rossi', role: 'Colorist', bio: 'DaVinci Resolve certified.', specialty: 'Color Grading', rating: 4.9, avatarInitials: 'MR' }
    ],
    services: [
      { name: 'Full Wedding Day', description: '12-hour coverage, 2 shooters, film + photos.', price: 'from AED 12,000', duration: '12 hours', icon: 'heart', popular: true },
      { name: 'Editorial Fashion Shoot', description: 'Half-day, 8 retouched images.', price: 'from AED 4,500', duration: '4 hours', icon: 'camera', popular: true },
      { name: 'Brand Film (60 sec)', description: 'Concept, shoot, grade, license, delivery.', price: 'from AED 18,000', duration: '3 days', icon: 'film' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Lumen Studio',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'shoot@lumenstudio.ae',
    policies: {
      privacy: [
        'Lumen Studio collects your name, contact details, shoot requirements, location details, and payment information to deliver photography and cinematography services.',
        'Photographs and footage featuring you may be used in our portfolio and marketing unless you explicitly opt out. Commercial clients retain full usage rights per contract.',
        'We do not sell your personal data. We share information only with our payment processor and any required second shooters or assistants assigned to your project.',
        'Raw footage backup is retained for 90 days post-delivery for client safety, then permanently deleted unless extended retention is requested.',
        'Email shoot@lumenstudio.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'A 30% booking deposit is required to secure any shoot date. Balance is due on the shoot day for weddings, on delivery for brand films.',
        'Delivery timelines: weddings 14 days, editorials 7–10 days, brand films 14–21 days. Rush delivery available for +30% fee.',
        'Copyright: clients receive personal usage rights for weddings. Commercial usage rights are negotiated per contract for brand films and editorials.',
        'Raw files are not shared for weddings. For brand films, raw footage delivery is included in the package.',
        'We reserve the right to use shoot outputs in our portfolio and marketing unless explicitly opted out in writing.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking calendar, and project tracking.',
        'Analytics cookies (optional) help us understand which packages are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Deposits are non-refundable within 14 days of the shoot date. Before that, 50% refundable.',
        'If we fail to deliver within agreed timeline, a 10% discount per week of delay is applied.',
        'If you are dissatisfied with final delivery, we offer one free reshoot for technical issues (not creative direction changes).',
        'Brand film deposits are non-refundable once pre-production has begun (typically 7 days after booking).'
      ],
      cancellation: [
        'Cancel at least 14 days before the shoot via the app or by calling +971 4 555 0133.',
        'Late cancellations (within 14 days): deposit forfeited. Within 48 hours: 50% of total shoot value charged.',
        'Weather-related cancellations for outdoor shoots: no fee, rescheduled at mutual convenience.',
        'Force majeure (illness, accident): full deposit refund or reschedule at no cost.'
      ],
      accessibility: [
        'Our Alserkal studio has step-free access from the parking level and an accessible restroom.',
        'Shoot locations can be selected for accessibility. Mention mobility needs at booking so we can scout appropriately.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android) for booking and gallery viewing.',
        'For clients with sensory sensitivities, we can schedule quieter shoot times and reduce lighting intensity.'
      ]
    }
  },
  pwa: {
    appName: 'Lumen Studio',
    shortName: 'Lumen',
    themeColor: '#0F172A',
    backgroundColor: '#0A0A0A',
    description: 'Track your shoot from booking to delivery. Get teaser previews, color grade updates, and gallery links.'
  },
  features: ['Project Booking', 'Lead Management', 'Portfolio Gallery', 'Color Grade Previews', 'Delivery Tracking', 'Online Proofing', 'WhatsApp Updates', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const FITNESS_CONFIG: CategoryConfig = {
  id: 'fitness-gyms',
  name: 'Fitness Trainers & Small Gyms',
  shortName: 'Fitness',
  description: 'Members, memberships, classes, attendance, and progress tracking.',
  theme: {
    primary: '#10B981',        // energetic green
    secondary: '#34D399',      // bright green
    accent: '#F97316',         // energy orange
    bgDark: '#0A1F1A',         // deep forest
    bgLight: '#F0FDF4',        // fresh white
    textDark: '#064E3B',
    textLight: '#ECFDF5',
    fontHeading: "'Oswald', sans-serif",
    fontBody: "'Inter', sans-serif",
    tone: 'energetic'
  },
  business: {
    name: 'Iron Forge Fitness',
    tagline: 'Forge Your Strongest Self',
    description: 'A premium boutique gym and personal training studio focused on strength, conditioning, and measurable transformation.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Sheikh Zayed Road, Trade Centre, Dubai, UAE',
    phone: '+971 4 555 0122',
    whatsapp: '+971501220000',
    email: 'train@ironforge.ae',
    website: 'ironforge.ae',
    hours: [
      { day: 'Sat – Thu', time: '5:30 AM – 11:00 PM' },
      { day: 'Fri', time: '8:00 AM – 9:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'YouTube', url: 'https://youtube.com' },
      { label: 'TikTok', url: 'https://tiktok.com' }
    ],
    establishedYear: 2019
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Stronger Every Single Session',
    subheadline: 'World-class coaches. Boutique equipment. Real transformations. Book your free trial today.',
    primaryCta: 'Book Free Trial',
    secondaryCta: 'View Programs',
    stats: [
      { label: 'Active Members', value: '420' },
      { label: 'Avg. Transformation', value: '8kg/12wk' },
      { label: 'Coaches', value: '6' },
      { label: 'Rating', value: '4.9' }
    ],
    gradient: 'linear-gradient(135deg, #0A1F1A 0%, #065F46 50%, #10B981 100%)'
  },
  about: {
    title: 'Where Sweat Meets Science',
    paragraphs: [
      'Iron Forge was founded in 2019 by Coach Marcus Lee, a former national powerlifter who believed gyms should measure progress, not just sell memberships. Every member gets a quarterly InBody scan and program adjustment.',
      'Our 600sqm facility features Eleiko plates, Rogue racks, and a dedicated functional training zone. We cap membership at 500 to ensure you never wait for equipment — even at 6 PM peak.',
      'Every coach holds a minimum NSCA-CSCS or Precision Nutrition L1 certification. We do not hire "fitness influencers". We hire people who can teach you to deadlift safely at 60.'
    ],
    values: [
      { title: 'Science-Based', description: 'Programs built on peer-reviewed protocols, not trends.', icon: 'flask' },
      { title: 'Capped Membership', description: 'Max 500 members. Never wait for equipment.', icon: 'users' },
      { title: 'Quarterly Scans', description: 'InBody composition tracking every 12 weeks.', icon: 'activity' }
    ]
  },
  services: [
    { name: 'Personal Training (1-on-1)', description: '60-min session with dedicated coach. Program design included.', price: 'AED 280', duration: '60 min', icon: 'dumbbell', popular: true },
    { name: 'Small Group Strength', description: 'Max 6 people. 4-week progressive program.', price: 'AED 140', duration: '60 min', icon: 'users', popular: true },
    { name: 'HIIT Conditioning', description: 'High-intensity interval training. All levels.', price: 'AED 95', duration: '45 min', icon: 'flame' },
    { name: 'Powerlifting Coaching', description: 'Squat/bench/deadlift technique. Competition prep.', price: 'AED 320', duration: '90 min', icon: 'trophy' },
    { name: 'Nutrition Consultation', description: '60-min session + 4-week meal plan.', price: 'AED 220', duration: '60 min', icon: 'apple' },
    { name: 'InBody Scan', description: 'Body composition analysis + consultation.', price: 'AED 75', duration: '30 min', icon: 'activity' }
  ],
  pricing: [
    { name: 'Day Pass', price: 'AED 95', period: 'one visit', features: ['Full gym access', '1 class included', 'Locker & towel', 'InBody scan (AED 75 extra)'], cta: 'Get Day Pass' },
    { name: 'Monthly Membership', price: 'AED 599', period: 'per month', features: ['Unlimited gym access', '4 classes/month', '1 PT session free', 'Free InBody scan quarterly', 'Nutrition guide', 'Guest pass monthly'], highlighted: true, cta: 'Join Now' },
    { name: 'Transformation Program', price: 'AED 3,600', period: '12 weeks', features: ['2 PT sessions/week', 'Custom nutrition plan', 'Bi-weekly InBody scans', 'WhatsApp coaching support', 'Before/after photo', 'Money-back guarantee'], cta: 'Start Transformation' }
  ],
  team: [
    { name: 'Marcus Lee', role: 'Founder & Head Coach', bio: 'Former national powerlifter. NSCA-CSCS.', specialty: 'Powerlifting & Strength', rating: 5.0, avatarInitials: 'ML' },
    { name: 'Sofia Almeida', role: 'Strength & Conditioning Coach', bio: 'CrossFit L3, Precision Nutrition L2.', specialty: 'HIIT & Conditioning', rating: 4.9, avatarInitials: 'SA' },
    { name: 'James Okonkwo', role: 'Personal Trainer', bio: 'Ex-pro rugby player. Hypertrophy specialist.', specialty: 'Hypertrophy & Bodybuilding', rating: 4.9, avatarInitials: 'JO' },
    { name: 'Priya Nair', role: 'Nutrition Coach', bio: 'Registered dietitian. Precision Nutrition L2.', specialty: 'Nutrition & Fat Loss', rating: 5.0, avatarInitials: 'PN' }
  ],
  gallery: [
    { title: 'Strength Zone', caption: 'Eleiko plates, Rogue racks', category: 'Facility', gradient: 'linear-gradient(135deg, #0A1F1A, #065F46)' },
    { title: 'Functional Training', caption: '200sqm dedicated zone', category: 'Facility', gradient: 'linear-gradient(135deg, #065F46, #10B981)' },
    { title: 'Member Transformation', caption: '12-week progress', category: 'Results', gradient: 'linear-gradient(135deg, #0A1F1A, #34D399)' },
    { title: 'Group Class', caption: 'Max 6 per session', category: 'Classes', gradient: 'linear-gradient(135deg, #047857, #6EE7B7)' },
    { title: 'InBody Scanner', caption: 'Quarterly composition', category: 'Equipment', gradient: 'linear-gradient(135deg, #064E3B, #10B981)' },
    { title: 'Coach Office', caption: 'Nutrition consults', category: 'Facility', gradient: 'linear-gradient(135deg, #0A1F1A, #059669)' }
  ],
  testimonials: [
    { name: 'Ahmed Khalifa', location: 'Business Bay', rating: 5, text: 'Lost 14kg in 12 weeks on the Transformation Program. Marcus and Priya worked as a team — training plus nutrition. The app tracked every workout and meal. Money-back guarantee but I never needed it.', date: '2 weeks ago', service: 'Transformation Program' },
    { name: 'Lara Schmidt', location: 'Downtown Dubai', rating: 5, text: 'Tried 4 gyms in Dubai. This is the only one where I never wait for a squat rack at 6 PM. Capped membership is real. Sofia\'s HIIT class kicked my ass (in a good way).', date: '1 month ago', service: 'Monthly Membership' },
    { name: 'David Cohen', location: 'DIFC', rating: 5, text: 'Coach James helped me hit a 180kg deadlift PR in 8 weeks. Form-first coaching, no ego. The InBody scan showed real muscle gain, not just scale weight. Worth every dirham.', date: '3 weeks ago', service: 'Personal Training (1-on-1)' }
  ],
  faq: [
    { question: 'What is your membership cap?', answer: '500 active members. We are currently at 420. Once we hit 500, a waitlist opens. This ensures you never wait for equipment, even at peak hours.' },
    { question: 'Do you offer a free trial?', answer: 'Yes, your first session is free. Choose a class, PT trial, or just gym access. Book through the app — no credit card required.' },
    { question: 'What should I bring?', answer: 'Workout clothes, indoor training shoes, water bottle. We provide towels, lockers, and shower amenities (including shampoo and body wash).' },
    { question: 'Do you have female-only hours?', answer: 'Yes, Sunday and Tuesday 10 AM – 12 PM is female-only with female coaches on the floor. Private PT sessions with female coaches available any time.' },
    { question: 'Can I freeze my membership?', answer: 'Yes, up to 4 weeks per year for travel or medical reasons, free of charge. Log it in the app. Longer freezes require medical certificate.' }
  ],
  whatsappMessage: 'Hi Iron Forge! I am interested in your Transformation Program. Can I book a free trial session this week?',
  admin: {
    metrics: [
      { label: 'Active Members', value: '420', delta: '+12', positive: true, icon: 'users' },
      { label: "Today's Sessions", value: '38', delta: '+5', positive: true, icon: 'calendar' },
      { label: 'Revenue (Month)', value: 'AED 248,000', delta: '+14%', positive: true, icon: 'trending-up' },
      { label: 'Avg. Rating', value: '4.91', delta: '+0.02', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 8200 }, { label: 'Tue', value: 9400 }, { label: 'Wed', value: 10800 },
      { label: 'Thu', value: 11200 }, { label: 'Fri', value: 6800 }, { label: 'Sat', value: 12400 }, { label: 'Sun', value: 9600 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 42 }, { label: 'Tue', value: 48 }, { label: 'Wed', value: 52 },
      { label: 'Thu', value: 54 }, { label: 'Fri', value: 28 }, { label: 'Sat', value: 58 }, { label: 'Sun', value: 38 }
    ],
    appointments: [
      { id: 'SES-401', customerName: 'Ahmed Khalifa', service: 'PT Session — Transformation', staff: 'Marcus Lee', date: 'Today', time: '6:00 AM', duration: '60 min', status: 'completed', amount: 'AED 280', initials: 'AK' },
      { id: 'SES-402', customerName: 'Lara Schmidt', service: 'HIIT Conditioning Class', staff: 'Sofia Almeida', date: 'Today', time: '7:30 AM', duration: '45 min', status: 'completed', amount: 'AED 95', initials: 'LS' },
      { id: 'SES-403', customerName: 'David Cohen', service: 'Powerlifting Coaching', staff: 'Marcus Lee', date: 'Today', time: '12:00 PM', duration: '90 min', status: 'in-progress', amount: 'AED 320', initials: 'DC' },
      { id: 'SES-404', customerName: 'Sarah Lee', service: 'Small Group Strength', staff: 'James Okonkwo', date: 'Today', time: '6:00 PM', duration: '60 min', status: 'confirmed', amount: 'AED 140', initials: 'SL' },
      { id: 'SES-405', customerName: 'Hassan Ali', service: 'Nutrition Consultation', staff: 'Priya Nair', date: 'Today', time: '7:00 PM', duration: '60 min', status: 'pending', amount: 'AED 220', initials: 'HA' },
      { id: 'SES-406', customerName: 'Mei Wong', service: 'InBody Scan + Consult', staff: 'Priya Nair', date: 'Today', time: '8:00 PM', duration: '30 min', status: 'confirmed', amount: 'AED 75', initials: 'MW' }
    ],
    customers: [
      { id: 'CUST-701', name: 'Ahmed Khalifa', email: 'ahmed@example.com', phone: '+971 50 890 1111', totalBookings: 28, totalSpent: 'AED 8,400', lastVisit: '2 weeks ago', status: 'vip', initials: 'AK' },
      { id: 'CUST-702', name: 'Lara Schmidt', email: 'lara@example.com', phone: '+971 50 890 2222', totalBookings: 52, totalSpent: 'AED 4,940', lastVisit: '1 month ago', status: 'vip', initials: 'LS' },
      { id: 'CUST-703', name: 'David Cohen', email: 'david@example.com', phone: '+971 50 890 3333', totalBookings: 18, totalSpent: 'AED 5,760', lastVisit: '3 weeks ago', status: 'active', initials: 'DC' },
      { id: 'CUST-704', name: 'Sarah Lee', email: 'sarah@example.com', phone: '+971 50 890 4444', totalBookings: 4, totalSpent: 'AED 560', lastVisit: '1 week ago', status: 'new', initials: 'SL' },
      { id: 'CUST-705', name: 'Hassan Ali', email: 'hassan@example.com', phone: '+971 50 890 5555', totalBookings: 11, totalSpent: 'AED 2,420', lastVisit: '2 weeks ago', status: 'active', initials: 'HA' }
    ],
    recentActivity: [
      { time: '5 min ago', text: 'Session completed: Ahmed Khalifa PT — AED 280', type: 'success' },
      { time: '32 min ago', text: 'New member: Sarah Lee (monthly)', type: 'success' },
      { time: '1 hr ago', text: 'InBody scan: David Cohen — +2kg muscle, -1.5kg fat', type: 'success' },
      { time: '2 hr ago', text: 'Class full: HIIT 6 PM (6/6)', type: 'info' },
      { time: '3 hr ago', text: 'Low stock: Protein bars (12 left)', type: 'warning' }
    ],
    staff: [
      { name: 'Marcus Lee', role: 'Founder & Head Coach', bio: 'Former national powerlifter.', specialty: 'Powerlifting & Strength', rating: 5.0, avatarInitials: 'ML' },
      { name: 'Sofia Almeida', role: 'S&C Coach', bio: 'CrossFit L3, PN L2.', specialty: 'HIIT & Conditioning', rating: 4.9, avatarInitials: 'SA' },
      { name: 'James Okonkwo', role: 'Personal Trainer', bio: 'Ex-pro rugby player.', specialty: 'Hypertrophy', rating: 4.9, avatarInitials: 'JO' },
      { name: 'Priya Nair', role: 'Nutrition Coach', bio: 'Registered dietitian.', specialty: 'Nutrition & Fat Loss', rating: 5.0, avatarInitials: 'PN' }
    ],
    services: [
      { name: 'Personal Training (1-on-1)', description: '60-min session with coach.', price: 'AED 280', duration: '60 min', icon: 'dumbbell', popular: true },
      { name: 'Small Group Strength', description: 'Max 6 people. 4-week program.', price: 'AED 140', duration: '60 min', icon: 'users', popular: true },
      { name: 'HIIT Conditioning', description: 'High-intensity interval training.', price: 'AED 95', duration: '45 min', icon: 'flame' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Iron Forge Fitness',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'train@ironforge.ae',
    policies: {
      privacy: [
        'Iron Forge Fitness collects your name, contact details, health information (injuries, conditions, medications), fitness goals, body composition data (InBody scans), and payment details to deliver personalized fitness services.',
        'Health information is collected to ensure safe training. Coaches assigned to your sessions have access to relevant medical information for safety purposes only.',
        'Body composition data and progress photos may be used (with explicit consent) in our marketing and transformation galleries. You can withdraw consent at any time.',
        'We do not sell your data. We share information only with our payment processor and the coaches assigned to your sessions.',
        'Email train@ironforge.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'All members must complete a PAR-Q (Physical Activity Readiness Questionnaire) before their first session. Members with medical conditions must provide physician clearance.',
        'Membership is non-transferable. Member cap (500) is enforced to maintain equipment availability.',
        'Personal training sessions expire 90 days from purchase. Class packs expire 60 days from purchase. Unused sessions are non-refundable.',
        'Members must wipe down equipment after use and return weights to racks. Repeated violations may result in membership suspension.',
        'We reserve the right to refuse service for abusive behavior toward staff or other members, intoxication, or failure to follow gym safety protocols.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking calendar, and workout tracking.',
        'Analytics cookies (optional) help us understand class popularity and equipment usage patterns.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'First-session free trial: no refund needed. If dissatisfied after first paid session, full refund within 7 days.',
        'Monthly memberships: refundable pro-rata for unused full weeks, with a AED 50 admin fee.',
        'Transformation program: money-back guarantee if you complete all sessions and nutrition plan but do not see measurable progress. We define progress as any positive change in InBody composition.',
        'Personal training packs: non-refundable once first session is used. Refundable in full before first use.'
      ],
      cancellation: [
        'Cancel PT sessions at least 4 hours before via the app. Late cancels forfeit the session.',
        'Class cancellations: free up to 2 hours before. Within 2 hours: 1 class credit deducted.',
        'Membership cancellation: 7 days notice before next billing date. No cancellation fees.',
        'Medical cancellations with physician certificate: full refund or freeze, no fees.'
      ],
      accessibility: [
        'Our gym is wheelchair accessible with accessible changing rooms and an accessible bathroom on the ground floor.',
        'We have coaches trained in adaptive fitness for clients with limited mobility, injuries, or disabilities.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android) for class booking and workout tracking.',
        'For specific needs, contact train@ironforge.ae before booking so we can match you with the right coach.'
      ]
    }
  },
  pwa: {
    appName: 'Iron Forge',
    shortName: 'IronForge',
    themeColor: '#10B981',
    backgroundColor: '#0A1F1A',
    description: 'Book classes and PT sessions. Track your InBody progress, view workout history, get nutrition tips.'
  },
  features: ['Class Booking', 'PT Scheduling', 'InBody Tracking', 'Workout History', 'Nutrition Plans', 'Membership Management', 'Progress Photos', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const PET_CONFIG: CategoryConfig = {
  id: 'pet-grooming-boarding',
  name: 'Pet Grooming & Pet Boarding',
  shortName: 'Pet',
  description: 'Pets, owners, grooming appointments, boarding reservations, and vaccination records.',
  theme: {
    primary: '#F59E0B',        // warm amber
    secondary: '#FCD34D',      // honey
    accent: '#059669',         // friendly green
    bgDark: '#1C1410',         // cozy brown-black
    bgLight: '#FFFBEB',        // cream
    textDark: '#451A03',
    textLight: '#FEF3C7',
    fontHeading: "'Quicksand', sans-serif",
    fontBody: "'Inter', sans-serif",
    tone: 'warm'
  },
  business: {
    name: 'Pawsome Palace',
    tagline: 'Where Tails Wag Happily',
    description: 'A premium pet grooming salon and boarding facility for dogs and cats, with vetted staff and live cameras you can check anytime.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Al Quoz Industrial 2, Street 16, Dubai, UAE',
    phone: '+971 4 555 0111',
    whatsapp: '+971501110000',
    email: 'hello@pawsomepalace.ae',
    website: 'pawsomepalace.ae',
    hours: [
      { day: 'Sat – Thu', time: '8:00 AM – 8:00 PM' },
      { day: 'Fri', time: '10:00 AM – 6:00 PM' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'TikTok', url: 'https://tiktok.com' },
      { label: 'YouTube', url: 'https://youtube.com' }
    ],
    establishedYear: 2020
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Pampered Pets, Happy Owners',
    subheadline: 'Premium grooming, cage-free boarding, and live webcam access. Because your fur baby deserves the best.',
    primaryCta: 'Book Grooming',
    secondaryCta: 'Boarding Rates',
    stats: [
      { label: 'Pets Pampered', value: '4,800+' },
      { label: 'Vetted Staff', value: '12' },
      { label: 'Years of Cuddles', value: '6' },
      { label: 'Rating', value: '4.9' }
    ],
    gradient: 'linear-gradient(135deg, #1C1410 0%, #B45309 50%, #F59E0B 100%)'
  },
  about: {
    title: 'Six Years of Happy Tails',
    paragraphs: [
      'Pawsome Palace was founded in 2020 by Dr. Mia Patel, a veterinarian who was horrified by the conditions at "luxury" pet spas. We built the opposite: cage-free boarding, vet-supervised grooming, and live cameras you can check from your phone.',
      'Our 400sqm facility has separate dog and cat zones, sound-proofed to prevent cross-stress. Every staff member is pet first-aid certified and trained in low-stress handling techniques.',
      'Our grooming salon uses hydrotherapy baths with adjustable pressure for senior dogs and cats. We never sedate. We never use hot cages. We never kennel your pet longer than necessary.'
    ],
    values: [
      { title: 'Cage-Free Boarding', description: 'Glass-walled suites, not cages. Live cam access.', icon: 'heart' },
      { title: 'Vet-Supervised', description: 'Dr. Mia oversees every grooming and boarding case.', icon: 'shield' },
      { title: 'Never Sedated', description: 'Low-stress handling only. No drugs, ever.', icon: 'paw' }
    ]
  },
  services: [
    { name: 'Full Groom (Small Dog)', description: 'Bath, haircut, nails, ears, teeth, anal glands.', price: 'AED 180', duration: '90 min', icon: 'scissors', popular: true },
    { name: 'Full Groom (Large Dog)', description: 'Same as above for dogs 25kg+.', price: 'AED 280', duration: '120 min', icon: 'scissors', popular: true },
    { name: 'Cat Grooming', description: 'Bath, brush, nails, ears. Lion cut optional.', price: 'AED 220', duration: '90 min', icon: 'cat' },
    { name: 'Day Boarding', description: '8 hours, cage-free, play time, 2 walks.', price: 'AED 120', duration: '8 hours', icon: 'sun' },
    { name: 'Overnight Boarding', description: 'Glass suite, 24/7 cam, 3 walks, evening cuddle.', price: 'AED 180', duration: '24 hours', icon: 'moon' },
    { name: 'Spa Package', description: 'Hydrotherapy bath, massage, paw balm, perfume.', price: 'AED 140', duration: '60 min', icon: 'sparkles' }
  ],
  pricing: [
    { name: 'Single Service', price: 'AED 180', period: 'per groom', features: ['Full grooming service', 'Photo updates during groom', 'Bandana or bow tie', 'Report card after'], cta: 'Book Groom' },
    { name: 'Monthly Membership', price: 'AED 499', period: 'per month', features: ['1 full groom/month', '2 day-boarding days', '15% off all services', 'Priority booking', 'Free nail trim anytime', 'Birthday spa treat'], highlighted: true, cta: 'Join Monthly' },
    { name: 'Vacation Package', price: 'AED 1,200', period: '7 days boarding', features: ['7 nights in glass suite', 'Daily photo/video updates', 'Live cam access 24/7', '2 walks per day', 'Evening cuddle time', 'Free welcome bath'], cta: 'Book Vacation' }
  ],
  team: [
    { name: 'Dr. Mia Patel', role: 'Founder & Veterinarian', bio: 'DVM from RVC London. 10 years in practice.', specialty: 'Senior Pets & Health Checks', rating: 5.0, avatarInitials: 'MP' },
    { name: 'Rosa Santos', role: 'Head Groomer', bio: '8 years experience. Cat specialist.', specialty: 'Cat Grooming & Lion Cuts', rating: 5.0, avatarInitials: 'RS' },
    { name: 'Ahmed Saleh', role: 'Senior Groomer', bio: 'Dog behavior specialist. Fear-free certified.', specialty: 'Large Dogs & Anxiety Cases', rating: 4.9, avatarInitials: 'AS' },
    { name: 'Lena Kowalski', role: 'Boarding Supervisor', bio: 'Manages overnight care and cam monitoring.', specialty: 'Boarding & Overnight Care', rating: 4.9, avatarInitials: 'LK' }
  ],
  gallery: [
    { title: 'Glass Boarding Suite', caption: 'Cage-free overnight', category: 'Facility', gradient: 'linear-gradient(135deg, #1C1410, #F59E0B)' },
    { title: 'Grooming Salon', caption: 'Hydrotherapy bath', category: 'Facility', gradient: 'linear-gradient(135deg, #B45309, #FCD34D)' },
    { title: 'Pom Before & After', caption: 'Transformation', category: 'Before/After', gradient: 'linear-gradient(135deg, #451A03, #F59E0B)' },
    { title: 'Cat Lion Cut', caption: 'Rosa\'s specialty', category: 'Cats', gradient: 'linear-gradient(135deg, #1C1410, #FCD34D)' },
    { title: 'Play Area', caption: 'Day boarding fun', category: 'Facility', gradient: 'linear-gradient(135deg, #059669, #34D399)' },
    { title: 'Spa Time', caption: 'Massage for seniors', category: 'Spa', gradient: 'linear-gradient(135deg, #B45309, #F59E0B)' }
  ],
  testimonials: [
    { name: 'Sarah Johnson', location: 'Jumeirah', rating: 5, text: 'My anxious rescue dog actually wags her tail when we arrive at Pawsome. Ahmed\'s fear-free approach changed everything. The live cam during boarding gave me peace of mind on vacation.', date: '1 week ago', service: 'Full Groom (Large Dog)' },
    { name: 'Tom Bradley', location: 'Marina', rating: 5, text: 'Boarded my cat for 10 days while traveling. Daily photo updates, live cam access, and Dr. Mia personally messaged me when she noticed a slight eye irritation. Above and beyond.', date: '3 weeks ago', service: 'Overnight Boarding' },
    { name: 'Layla Hassan', location: 'Hills', rating: 5, text: 'The membership pays for itself. Monthly groom plus 2 day-boarding days. The app reminder means I never forget. My golden looks like a show dog every month.', date: '1 month ago', service: 'Monthly Membership' }
  ],
  faq: [
    { question: 'Do you accept all breeds and sizes?', answer: 'Yes, all dog breeds and most cat breeds. For aggressive dogs, we require a behavior assessment (free) before booking. We do not sedate; if your pet needs sedation, see your vet.' },
    { question: 'Can I check on my pet during boarding?', answer: 'Yes. Our app gives you 24/7 live cam access to your pet\'s suite. We also send 2 photo updates daily during boarding. You will never wonder how your pet is doing.' },
    { question: 'What vaccinations are required?', answer: 'Dogs: DHPP, Rabies, Bordetella, and canine influenza. Cats: FVRCP and Rabies. All must be current. Upload records through the app — we verify before confirming booking.' },
    { question: 'Do you offer pickup and drop-off?', answer: 'Yes, free within 10km of Al Quoz for services over AED 200. Booked through the app with live driver tracking. Outside 10km: AED 50 surcharge.' },
    { question: 'What if my pet gets sick during boarding?', answer: 'Dr. Mia is on-call 24/7. For minor issues, we treat on-site and notify you immediately. For emergencies, we transport to your registered vet (or our partner clinic) at no charge.' }
  ],
  whatsappMessage: 'Hi Pawsome Palace! I would like to book grooming for my dog. Can you share the next available slot and pricing?',
  admin: {
    metrics: [
      { label: "Today's Appointments", value: '22', delta: '+4', positive: true, icon: 'calendar' },
      { label: 'Pets in Boarding', value: '14', delta: '3 checking out', positive: true, icon: 'paw' },
      { label: 'Revenue (Today)', value: 'AED 5,840', delta: '+9%', positive: true, icon: 'trending-up' },
      { label: 'Avg. Rating', value: '4.93', delta: '+0.01', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 3200 }, { label: 'Tue', value: 4800 }, { label: 'Wed', value: 4200 },
      { label: 'Thu', value: 5400 }, { label: 'Fri', value: 3800 }, { label: 'Sat', value: 7200 }, { label: 'Sun', value: 5840 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 14 }, { label: 'Tue', value: 22 }, { label: 'Wed', value: 18 },
      { label: 'Thu', value: 24 }, { label: 'Fri', value: 16 }, { label: 'Sat', value: 28 }, { label: 'Sun', value: 22 }
    ],
    appointments: [
      { id: 'PET-501', customerName: 'Sarah Johnson', service: 'Groom — Bella (Labrador)', staff: 'Ahmed Saleh', date: 'Today', time: '9:00 AM', duration: '120 min', status: 'in-progress', amount: 'AED 280', initials: 'SJ' },
      { id: 'PET-502', customerName: 'Tom Bradley', service: 'Boarding Pickup — Whiskers (Cat)', staff: 'Lena Kowalski', date: 'Today', time: '11:00 AM', duration: '15 min', status: 'pending', amount: 'AED 1,800', initials: 'TB' },
      { id: 'PET-503', customerName: 'Layla Hassan', service: 'Groom — Max (Golden)', staff: 'Rosa Santos', date: 'Today', time: '1:00 PM', duration: '90 min', status: 'confirmed', amount: 'AED 180', initials: 'LH' },
      { id: 'PET-504', customerName: 'Hassan Ali', service: 'Spa Package — Coco (Poodle)', staff: 'Rosa Santos', date: 'Today', time: '2:30 PM', duration: '60 min', status: 'confirmed', amount: 'AED 140', initials: 'HA' },
      { id: 'PET-505', customerName: 'Mei Wong', service: 'Day Boarding — Luna (Husky)', staff: 'Lena Kowalski', date: 'Today', time: '8:00 AM', duration: '8 hours', status: 'in-progress', amount: 'AED 120', initials: 'MW' },
      { id: 'PET-506', customerName: 'David Cohen', service: 'Cat Groom — Mittens', staff: 'Rosa Santos', date: 'Today', time: '4:00 PM', duration: '90 min', status: 'pending', amount: 'AED 220', initials: 'DC' }
    ],
    customers: [
      { id: 'CUST-801', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+971 50 901 1111', totalBookings: 18, totalSpent: 'AED 5,040', lastVisit: '1 week ago', status: 'vip', initials: 'SJ' },
      { id: 'CUST-802', name: 'Tom Bradley', email: 'tom@example.com', phone: '+971 50 901 2222', totalBookings: 6, totalSpent: 'AED 2,400', lastVisit: '3 weeks ago', status: 'active', initials: 'TB' },
      { id: 'CUST-803', name: 'Layla Hassan', email: 'layla@example.com', phone: '+971 50 901 3333', totalBookings: 24, totalSpent: 'AED 11,976', lastVisit: '1 month ago', status: 'vip', initials: 'LH' },
      { id: 'CUST-804', name: 'Hassan Ali', email: 'hassan@example.com', phone: '+971 50 901 4444', totalBookings: 8, totalSpent: 'AED 1,920', lastVisit: '2 weeks ago', status: 'active', initials: 'HA' },
      { id: 'CUST-805', name: 'Mei Wong', email: 'mei@example.com', phone: '+971 50 901 5555', totalBookings: 14, totalSpent: 'AED 3,360', lastVisit: '1 week ago', status: 'active', initials: 'MW' }
    ],
    recentActivity: [
      { time: '6 min ago', text: 'Groom started: Bella (Labrador) — Sarah Johnson', type: 'info' },
      { time: '45 min ago', text: 'Photo update sent: Luna (Husky) day boarding', type: 'success' },
      { time: '1 hr ago', text: 'Vaccination uploaded: Mittens (cat) — verified', type: 'success' },
      { time: '2 hr ago', text: 'New membership: Layla Hassan (monthly)', type: 'success' },
      { time: '3 hr ago', text: 'Low stock: Oatmeal shampoo (4L left)', type: 'warning' }
    ],
    staff: [
      { name: 'Dr. Mia Patel', role: 'Founder & Veterinarian', bio: 'DVM RVC London.', specialty: 'Senior Pets & Health Checks', rating: 5.0, avatarInitials: 'MP' },
      { name: 'Rosa Santos', role: 'Head Groomer', bio: '8 years experience. Cat specialist.', specialty: 'Cat Grooming & Lion Cuts', rating: 5.0, avatarInitials: 'RS' },
      { name: 'Ahmed Saleh', role: 'Senior Groomer', bio: 'Fear-free certified.', specialty: 'Large Dogs & Anxiety', rating: 4.9, avatarInitials: 'AS' },
      { name: 'Lena Kowalski', role: 'Boarding Supervisor', bio: 'Oversees overnight care.', specialty: 'Boarding & Cam Monitoring', rating: 4.9, avatarInitials: 'LK' }
    ],
    services: [
      { name: 'Full Groom (Small Dog)', description: 'Bath, haircut, nails, ears, teeth.', price: 'AED 180', duration: '90 min', icon: 'scissors', popular: true },
      { name: 'Full Groom (Large Dog)', description: 'Same for dogs 25kg+.', price: 'AED 280', duration: '120 min', icon: 'scissors', popular: true },
      { name: 'Cat Grooming', description: 'Bath, brush, nails, ears. Lion cut optional.', price: 'AED 220', duration: '90 min', icon: 'cat' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Pawsome Palace',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'hello@pawsomepalace.ae',
    policies: {
      privacy: [
        'Pawsome Palace collects your name, contact details, pet information (name, breed, age, medical history, vaccinations), and payment information to deliver pet grooming and boarding services.',
        'Pet medical history and vaccination records are required for safety and are shared only with Dr. Mia (veterinarian on staff) and the specific groomer/caretaker assigned to your pet.',
        'Photographs and videos of your pet may be sent to you during services and (with explicit consent) used in our marketing. We never photograph you without permission.',
        'Live cam access is provided only to the registered pet owner. Cam feeds are not recorded unless there is an incident; recordings are deleted within 30 days.',
        'Email hello@pawsomepalace.ae to request access, correction, or deletion of your data.'
      ],
      terms: [
        'Current vaccinations (DHPP, Rabies, Bordetella for dogs; FVRCP, Rabies for cats) are mandatory for all services. Proof must be uploaded before booking confirmation.',
        'Pets with contagious conditions (kennel cough, ringworm, fleas) cannot be accepted until cleared by a veterinarian. Refunds are issued for cancelled due-to-health bookings.',
        'We do not sedate pets. If your pet requires sedation for grooming, please consult your veterinarian. We use low-stress handling techniques only.',
        'Boarding pets must be picked up on the agreed date. Late pickup (over 2 hours) incurs a AED 50/hour fee. Abandoned pets are handled per UAE animal welfare laws.',
        'We reserve the right to refuse service for aggressive pets (after behavior assessment) or pets whose health conditions make grooming/boarding unsafe.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking, and pet profile storage.',
        'Analytics cookies (optional) help us understand which services are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Grooming services: if dissatisfied, contact within 24 hours for a free fix-groom or partial refund.',
        'Boarding: refundable pro-rata for unused nights if cancelled before check-in. Within 24 hours of check-in: 50% refund.',
        'Memberships: non-refundable once a billing cycle has started. Future cycles can be cancelled.',
        'Spa packages: non-refundable once service has begun. Free re-application if results do not meet spec.'
      ],
      cancellation: [
        'Cancel grooming at least 4 hours before via the app. Late cancels: 1 free, then AED 50 fee.',
        'Boarding cancellation: 48 hours notice for full refund. Within 48 hours: 50% refund. Same-day: no refund.',
        'No-show for grooming: 1 free, then AED 80 fee applied to next booking.',
        'Medical cancellations with vet certificate: full refund, no fees.'
      ],
      accessibility: [
        'Our Al Quoz facility has step-free access from the parking area.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android) for booking and pet profile management.',
        'For clients with disabilities, we offer curbside pet drop-off and pickup. Mention at booking.',
        'Dr. Mia is trained to work with senior pet owners and clients with accessibility needs.'
      ]
    }
  },
  pwa: {
    appName: 'Pawsome Palace',
    shortName: 'Pawsome',
    themeColor: '#F59E0B',
    backgroundColor: '#1C1410',
    description: 'Book grooming and boarding. Get live cam access during your pet\'s stay. Receive photo updates.'
  },
  features: ['Grooming Booking', 'Boarding Reservations', 'Live Cam Access', 'Vaccination Tracking', 'Pet Profiles', 'Photo Updates', 'Membership Plans', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const TUTORING_CONFIG: CategoryConfig = {
  id: 'tutoring-training',
  name: 'Home Tutoring & Training Centers',
  shortName: 'Tutoring',
  description: 'Students, parents, instructors, courses, attendance, assignments, and progress.',
  theme: {
    primary: '#1E40AF',       // academic blue
    secondary: '#93C5FD',    // soft blue
    accent: '#D97706',       // amber
    bgDark: '#0F172A',        // deep navy
    bgLight: '#EFF6FF',       // academic white
    textDark: '#1E3A8A',
    textLight: '#DBEAFE',
    fontHeading: "'Lora', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    tone: 'academic'
  },
  business: {
    name: 'Scholar Path Academy',
    tagline: 'Knowledge That Opens Doors',
    description: 'A premium tutoring center offering personalized academic coaching for IB, A-Level, AP, and SAT students with vetted subject specialists.',
    country: 'United Arab Emirates',
    city: 'Dubai',
    address: 'Knowledge Village, Block 2, Dubai, UAE',
    phone: '+971 4 555 0100',
    whatsapp: '+971501000000',
    email: 'learn@scholarpath.ae',
    website: 'scholarpath.ae',
    hours: [
      { day: 'Sat – Wed', time: '10:00 AM – 9:00 PM' },
      { day: 'Thu', time: '10:00 AM – 6:00 PM' },
      { day: 'Fri', time: 'Closed' }
    ],
    social: [
      { label: 'Instagram', url: 'https://instagram.com' },
      { label: 'YouTube', url: 'https://youtube.com' },
      { label: 'LinkedIn', url: 'https://linkedin.com' }
    ],
    establishedYear: 2016
  },
  sections: ['hero', 'about', 'services', 'pricing', 'team', 'gallery', 'booking', 'testimonials', 'location', 'faq', 'whatsapp-cta', 'pwa-install'],
  hero: {
    headline: 'Your Path to Top Universities',
    subheadline: 'IB 7s, A-Level A*s, SAT 1550+. Vetted specialists. Personalized coaching. Real results.',
    primaryCta: 'Book Free Assessment',
    secondaryCta: 'View Programs',
    stats: [
      { label: 'Students Coached', value: '1,400+' },
      { label: 'Avg. Score Increase', value: '+3 grades' },
      { label: 'Specialist Tutors', value: '18' },
      { label: 'Years of Excellence', value: '10' }
    ],
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 50%, #3B82F6 100%)'
  },
  about: {
    title: 'A Decade of Academic Excellence',
    paragraphs: [
      'Scholar Path Academy was founded in 2016 by Dr. Anna Williams, a former IB examiner and Oxford graduate who believed tutoring should be measurable, not just "extra lessons." Every student gets a baseline assessment, a personalized learning plan, and weekly progress reports.',
      'Our 18 specialist tutors hold degrees from Oxford, Cambridge, MIT, and IIT. We do not hire generalists — every tutor teaches only their specialist subject, and most are former examiners for IB, Cambridge, or College Board.',
      'Our results speak: 94% of IB students achieve a 6 or 7 in their tutored subject. 89% of A-Level students achieve A or A*. Average SAT improvement is 280 points. We publish our results annually, audited by an independent educational consultant.'
    ],
    values: [
      { title: 'Specialist Tutors', description: 'Oxford/Cambridge/MIT graduates. Examiners, not generalists.', icon: 'graduation' },
      { title: 'Measurable Progress', description: 'Baseline, weekly reports, exit assessment. Tracked.', icon: 'chart' },
      { title: 'Examiner Insight', description: 'Most tutors are current/former IB/Cambridge examiners.', icon: 'shield' }
    ]
  },
  services: [
    { name: 'IB Subject Tutoring', description: 'HL/SL, all subjects. 1-on-1, 1.5hr sessions.', price: 'AED 280', duration: '90 min', icon: 'book', popular: true },
    { name: 'A-Level Coaching', description: 'AS and A2, all exam boards. 1-on-1.', price: 'AED 260', duration: '90 min', icon: 'book', popular: true },
    { name: 'SAT/ACT Prep', description: '20-hour structured course + 4 mock tests.', price: 'AED 4,800', duration: '20 hours', icon: 'pencil' },
    { name: 'University Admissions', description: 'Personal statement, interview prep, Oxbridge.', price: 'AED 3,200', duration: '8 hours', icon: 'graduation' },
    { name: 'Group Revision Class', description: 'Max 6 students. Exam-crash courses.', price: 'AED 140', duration: '120 min', icon: 'users' },
    { name: 'Online Tutoring', description: 'Same tutor, video sessions. Flexible schedule.', price: 'AED 240', duration: '90 min', icon: 'monitor' }
  ],
  pricing: [
    { name: 'Single Session', price: 'AED 280', period: 'per session', features: ['1.5-hour 1-on-1', 'Specialist tutor', 'Progress notes shared', 'Homework assigned', 'Online or in-center'], cta: 'Book Single' },
    { name: 'Term Package', price: 'AED 4,800', period: '20 sessions', features: ['20 × 1.5hr sessions', 'Baseline assessment', 'Personalized learning plan', 'Weekly progress reports', 'Parent portal access', 'Mock exam included', '15% savings'], highlighted: true, cta: 'Enroll Term' },
    { name: 'University Pack', price: 'AED 8,800', period: 'comprehensive', features: ['Subject tutoring (20 hrs)', 'SAT/ACT prep (20 hrs)', 'Personal statement (8 hrs)', 'Mock interviews (4 hrs)', 'University strategy session', 'Application review', '2-year support'], cta: 'Enroll Uni Pack' }
  ],
  team: [
    { name: 'Dr. Anna Williams', role: 'Founder & IB Examiner', bio: 'Oxford DPhil. 15 years IB examining.', specialty: 'IB Maths HL & Oxbridge Prep', rating: 5.0, avatarInitials: 'AW' },
    { name: 'Dr. Raj Patel', role: 'Physics Specialist', bio: 'MIT PhD. Cambridge A-Level examiner.', specialty: 'IB/A-Level Physics & Maths', rating: 5.0, avatarInitials: 'RP' },
    { name: 'Sarah Goldberg', role: 'English & TOK', bio: 'Cambridge MA. 10 years IB teaching.', specialty: 'IB English A & TOK', rating: 4.9, avatarInitials: 'SG' },
    { name: 'James Liu', role: 'SAT/ACT Specialist', bio: 'Harvard graduate. Perfect SAT scorer.', specialty: 'SAT/ACT & US Admissions', rating: 5.0, avatarInitials: 'JL' }
  ],
  gallery: [
    { title: 'Classroom', caption: 'Small group setting', category: 'Facility', gradient: 'linear-gradient(135deg, #0F172A, #1E40AF)' },
    { title: '1-on-1 Room', caption: 'Private tutoring', category: 'Facility', gradient: 'linear-gradient(135deg, #1E3A8A, #3B82F6)' },
    { title: 'Exam Hall Mock', caption: 'Real conditions practice', category: 'Mock Exams', gradient: 'linear-gradient(135deg, #1E40AF, #60A5FA)' },
    { title: 'Library Corner', caption: 'Self-study space', category: 'Facility', gradient: 'linear-gradient(135deg, #0F172A, #1E3A8A)' },
    { title: 'Online Portal', caption: 'Parent dashboard', category: 'Digital', gradient: 'linear-gradient(135deg, #1E40AF, #93C5FD)' },
    { title: 'Results Board', caption: 'Class of 2025 outcomes', category: 'Results', gradient: 'linear-gradient(135deg, #0F172A, #D97706)' }
  ],
  testimonials: [
    { name: 'Parent of IB Student', location: 'Dubai Marina', rating: 5, text: 'My daughter went from a 5 to a 7 in IB Maths HL with Dr. Anna. The weekly progress reports kept us informed without helicopter parenting. She is now at Imperial College London.', date: '3 weeks ago', service: 'IB Subject Tutoring' },
    { name: 'A-Level Student', location: 'Jumeirah', rating: 5, text: 'Dr. Raj made Physics make sense for the first time. Got an A* in A-Level Physics and am now at UCL studying Engineering. The mock exams prepared me for the real pressure.', date: '2 months ago', service: 'A-Level Coaching' },
    { name: 'SAT Student', location: 'Business Bay', rating: 5, text: 'Went from 1320 to 1560 on the SAT with James. The structured course and 4 mock tests built my stamina. Got into my top choice US university. Worth every dirham.', date: '1 month ago', service: 'SAT/ACT Prep' }
  ],
  faq: [
    { question: 'How do you match tutors to students?', answer: 'Every student starts with a free 60-minute assessment. We match based on subject, learning style, personality, and schedule. If the match does not feel right in the first 2 sessions, we reassign at no cost.' },
    { question: 'Do you offer online tutoring?', answer: 'Yes. Same specialist tutors, same quality, on our interactive whiteboard platform. Online students get the same progress reports and parent portal access. Many students do hybrid (online + in-center).' },
    { question: 'What exam boards do you cover?', answer: 'IB (all subjects HL/SL), Cambridge IGCSE and A-Level, Edexcel, AQA, OCR, AP, SAT, ACT, and university admissions (UCAS, Common App). We do not tutor university-level courses.' },
    { question: 'How is progress measured?', answer: 'Baseline assessment at start. Weekly progress notes from tutor. Monthly progress tests. Term-end mock exams. Parent portal with all data. We track quantitative scores and qualitative engagement.' },
    { question: 'Do you guarantee results?', answer: 'We guarantee teaching quality and measurable progress. We do not guarantee specific grades (no ethical tutor can). However, our 94% IB 6-7 rate and 89% A-Level A-A* rate are publicly audited annually.' }
  ],
  whatsappMessage: 'Hi Scholar Path! I would like to book a free assessment for my child. What subjects do you cover and what are your rates?',
  admin: {
    metrics: [
      { label: 'Active Students', value: '184', delta: '+12', positive: true, icon: 'graduation' },
      { label: "Today's Sessions", value: '32', delta: '+5', positive: true, icon: 'calendar' },
      { label: 'Revenue (Month)', value: 'AED 168,000', delta: '+9%', positive: true, icon: 'trending-up' },
      { label: 'Avg. Rating', value: '4.94', delta: '+0.01', positive: true, icon: 'star' }
    ],
    revenueChart: [
      { label: 'Mon', value: 8200 }, { label: 'Tue', value: 9400 }, { label: 'Wed', value: 10800 },
      { label: 'Thu', value: 7200 }, { label: 'Fri', value: 0 }, { label: 'Sat', value: 14200 }, { label: 'Sun', value: 12600 }
    ],
    bookingsChart: [
      { label: 'Mon', value: 22 }, { label: 'Tue', value: 26 }, { label: 'Wed', value: 32 },
      { label: 'Thu', value: 18 }, { label: 'Fri', value: 0 }, { label: 'Sat', value: 42 }, { label: 'Sun', value: 32 }
    ],
    appointments: [
      { id: 'SES-601', customerName: 'Emma Chen', service: 'IB Maths HL — 1-on-1', staff: 'Dr. Anna Williams', date: 'Today', time: '4:00 PM', duration: '90 min', status: 'confirmed', amount: 'AED 280', initials: 'EC' },
      { id: 'SES-602', customerName: 'Ahmed Al Rashid', service: 'A-Level Physics', staff: 'Dr. Raj Patel', date: 'Today', time: '5:30 PM', duration: '90 min', status: 'confirmed', amount: 'AED 260', initials: 'AR' },
      { id: 'SES-603', customerName: 'Sara Nabil', service: 'IB English A', staff: 'Sarah Goldberg', date: 'Today', time: '6:00 PM', duration: '90 min', status: 'pending', amount: 'AED 280', initials: 'SN' },
      { id: 'SES-604', customerName: 'Tom Bradley', service: 'SAT Prep — Mock Test', staff: 'James Liu', date: 'Today', time: '10:00 AM', duration: '180 min', status: 'completed', amount: 'AED 480', initials: 'TB' },
      { id: 'SES-605', customerName: 'Layla Hassan', service: 'Group Revision — Chemistry', staff: 'Dr. Raj Patel', date: 'Today', time: '7:30 PM', duration: '120 min', status: 'confirmed', amount: 'AED 140', initials: 'LH' },
      { id: 'SES-606', customerName: 'Maya Patel', service: 'Online — IB Bio HL', staff: 'Dr. Anna Williams', date: 'Today', time: '8:00 PM', duration: '90 min', status: 'pending', amount: 'AED 240', initials: 'MP' }
    ],
    customers: [
      { id: 'CUST-901', name: 'Emma Chen', email: 'emma@example.com', phone: '+971 50 112 1111', totalBookings: 28, totalSpent: 'AED 7,840', lastVisit: '1 week ago', status: 'vip', initials: 'EC' },
      { id: 'CUST-902', name: 'Ahmed Al Rashid', email: 'ahmed@example.com', phone: '+971 50 112 2222', totalBookings: 22, totalSpent: 'AED 5,720', lastVisit: '2 weeks ago', status: 'active', initials: 'AR' },
      { id: 'CUST-903', name: 'Sara Nabil', email: 'sara@example.com', phone: '+971 50 112 3333', totalBookings: 14, totalSpent: 'AED 3,920', lastVisit: '3 days ago', status: 'active', initials: 'SN' },
      { id: 'CUST-904', name: 'Tom Bradley', email: 'tom@example.com', phone: '+971 50 112 4444', totalBookings: 6, totalSpent: 'AED 4,800', lastVisit: '1 month ago', status: 'active', initials: 'TB' },
      { id: 'CUST-905', name: 'Layla Hassan', email: 'layla@example.com', phone: '+971 50 112 5555', totalBookings: 8, totalSpent: 'AED 1,120', lastVisit: '1 week ago', status: 'new', initials: 'LH' }
    ],
    recentActivity: [
      { time: '8 min ago', text: 'Session completed: Tom Bradley SAT Mock — 1560', type: 'success' },
      { time: '32 min ago', text: 'New enrolment: Emma Chen — Term Package', type: 'success' },
      { time: '1 hr ago', text: 'Progress report uploaded: Ahmed Al Rashid (Physics)', type: 'info' },
      { time: '2 hr ago', text: 'Parent portal login: Sara Nabil\'s parent', type: 'info' },
      { time: '3 hr ago', text: 'New 5-star Google review from Emma Chen', type: 'success' }
    ],
    staff: [
      { name: 'Dr. Anna Williams', role: 'Founder & IB Examiner', bio: 'Oxford DPhil.', specialty: 'IB Maths HL & Oxbridge', rating: 5.0, avatarInitials: 'AW' },
      { name: 'Dr. Raj Patel', role: 'Physics Specialist', bio: 'MIT PhD. Cambridge examiner.', specialty: 'IB/A-Level Physics & Maths', rating: 5.0, avatarInitials: 'RP' },
      { name: 'Sarah Goldberg', role: 'English & TOK', bio: 'Cambridge MA.', specialty: 'IB English A & TOK', rating: 4.9, avatarInitials: 'SG' },
      { name: 'James Liu', role: 'SAT/ACT Specialist', bio: 'Harvard graduate. Perfect SAT.', specialty: 'SAT/ACT & US Admissions', rating: 5.0, avatarInitials: 'JL' }
    ],
    services: [
      { name: 'IB Subject Tutoring', description: 'HL/SL, all subjects. 1-on-1, 1.5hr.', price: 'AED 280', duration: '90 min', icon: 'book', popular: true },
      { name: 'A-Level Coaching', description: 'AS and A2, all exam boards.', price: 'AED 260', duration: '90 min', icon: 'book', popular: true },
      { name: 'SAT/ACT Prep', description: '20-hour structured course + 4 mocks.', price: 'AED 4,800', duration: '20 hours', icon: 'pencil' }
    ]
  },
  adminModules: ['overview', 'analytics', 'appointments', 'customers', 'services', 'staff', 'reviews', 'messages', 'gallery', 'offers', 'settings', 'profile', 'hours', 'whatsapp', 'pwa-settings'],
  legal: {
    businessName: 'Scholar Path Academy',
    jurisdiction: 'Dubai, United Arab Emirates',
    lastUpdated: 'January 2026',
    contactEmail: 'learn@scholarpath.ae',
    policies: {
      privacy: [
        'Scholar Path Academy collects student and parent name, contact details, academic records, assessment results, attendance, and payment information to deliver personalized tutoring services.',
        'Academic data is shared with the assigned tutor and (for minors) parents/guardians via the parent portal. We do not share academic data with schools or third parties without written consent.',
        'For students under 18, all data access is granted to the registered parent/guardian. Students 18+ manage their own data access.',
        'We retain academic records for 2 years after the last session for transcript/reference purposes, then permanently delete.',
        'Email learn@scholarpath.ae to request access, correction, or deletion of data.'
      ],
      terms: [
        'Sessions are 90 minutes unless otherwise stated. Late arrivals do not get extended time — sessions end at the scheduled time.',
        '24-hour notice is required for session cancellation. Late cancels forfeit the session fee. Medical cancellations with documentation are free.',
        'Term packages are non-refundable once started but sessions can be rescheduled within the term (3 months).',
        'Tutor assignments may change due to availability. We guarantee a specialist replacement of equal or higher qualification.',
        'We reserve the right to terminate services for academic dishonesty, abusive behavior toward tutors, or failure to follow academy policies.'
      ],
      cookies: [
        'Our app uses essential cookies for session, booking, and student profile storage.',
        'Analytics cookies (optional) help us understand which subjects and time slots are most requested.',
        'No third-party advertising cookies.',
        'Disable analytics in Settings → Privacy.'
      ],
      refund: [
        'Single sessions: refundable if cancelled 24 hours before. Within 24 hours: no refund.',
        'Term packages: refundable pro-rata for unused sessions if cancelled within 14 days of purchase. After 14 days: non-refundable.',
        'University packages: refundable pro-rata for unused hours. Mock tests and assessments are non-refundable once taken.',
        'If we cancel a session (tutor unavailable), full refund or reschedule at your choice.'
      ],
      cancellation: [
        'Cancel via the app or by calling +971 4 555 0100 at least 24 hours before the session.',
        'Late cancels (within 24 hours): session forfeited. Medical cancellations with documentation: free.',
        'Repeated late cancels (3+ in 30 days): may require prepayment for future bookings.',
        'Term package sessions must be rescheduled within 7 days of the original date.'
      ],
      accessibility: [
        'Our Knowledge Village center has step-free access, an accessible bathroom, and accessible tutoring rooms.',
        'Our tutors are trained to work with students with learning differences (dyslexia, ADHD, etc.). Mention at enrollment so we can match appropriately.',
        'Our app supports VoiceOver (iOS) and TalkBack (Android) for booking and parent portal access.',
        'For specific needs, contact learn@scholarpath.ae before enrollment.'
      ]
    }
  },
  pwa: {
    appName: 'Scholar Path',
    shortName: 'ScholarPath',
    themeColor: '#1E40AF',
    backgroundColor: '#0F172A',
    description: 'Track sessions, view progress reports, access homework, message tutors. Parent portal for guardians.'
  },
  features: ['Session Booking', 'Progress Tracking', 'Mock Exams', 'Parent Portal', 'Online Tutoring', 'Homework Assignments', 'Progress Reports', 'Push Notifications'],
  moduleCount: 15,
  pageEstimate: 18
};

export const CATEGORIES_6_TO_10: CategoryConfig[] = [
  TAILOR_CONFIG, PHOTOGRAPHY_CONFIG, FITNESS_CONFIG, PET_CONFIG, TUTORING_CONFIG
];
