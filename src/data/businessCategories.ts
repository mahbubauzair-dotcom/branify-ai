export interface BusinessCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  recommendedWebsiteType: string;
  recommendedAppType: string;
  typicalServices: string[];
  recommendedModules: string[];
  leadGenerationKeywords: string[];
  targetAudience: string;
  averageTicketSize: string;
  commonWeaknessesWithoutSite: string[];
}

export const PRIMARY_BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: 'spas-massage',
    name: 'Spas & Massage Centers',
    slug: 'spas-massage-centers',
    description: 'Day spas, wellness centers, massage therapy clinics, and holistic relaxation studios.',
    iconName: 'Sparkles',
    recommendedWebsiteType: 'Luxury Booking & Relaxation Experience Site',
    recommendedAppType: 'Therapist Schedule & Appointment Booking App',
    typicalServices: [
      'Deep Tissue Massage',
      'Swedish Aromatherapy Massage',
      'Hot Stone Therapy',
      'Hydrating Body Wraps',
      'Couples Spa Packages',
      'Reflexology'
    ],
    recommendedModules: [
      'Services',
      'Treatments',
      'Therapists',
      'Appointment Booking',
      'Packages',
      'Offers',
      'Gallery',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'spa near me',
      'massage center',
      'day spa wellness',
      'thai massage',
      'couples massage'
    ],
    targetAudience: 'Locals seeking stress relief, wellness enthusiasts, gift buyers',
    averageTicketSize: '$80 - $250',
    commonWeaknessesWithoutSite: [
      'Phone-only booking leads to missed calls during sessions',
      'No visual treatment menu or package pricing',
      'No instant WhatsApp booking button on Google Maps'
    ]
  },
  {
    id: 'salons-beauty',
    name: 'Salons & Beauty Parlours',
    slug: 'salons-beauty-parlours',
    description: 'Hair salons, nail bars, eyebrow & lash studios, skin aesthetic clinics, and makeup artists.',
    iconName: 'Scissors',
    recommendedWebsiteType: 'Chic Style Portfolio & Instant Booking Portal',
    recommendedAppType: 'Stylist Seat Booking & VIP Loyalty App',
    typicalServices: [
      'Precision Haircuts & Styling',
      'Balayage & Highlights',
      'Gel Nail Extensions & Nail Art',
      'Keratin Hair Treatments',
      'Lash Extensions & Brow Lamination',
      'Bridal Makeup'
    ],
    recommendedModules: [
      'Services',
      'Stylists',
      'Booking',
      'Pricing',
      'Gallery',
      'Offers',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'hair salon',
      'nail salon beauty parlour',
      'lash studio near me',
      'hair stylist balayage',
      'barbershop luxury'
    ],
    targetAudience: 'Women and men seeking personal grooming, recurring touch-ups, and special event styling',
    averageTicketSize: '$45 - $180',
    commonWeaknessesWithoutSite: [
      'Instagram-only portfolios without pricing or real-time slots',
      'Manual DM booking creates scheduling clashes',
      'Lack of clear stylist profiles and transparent service rates'
    ]
  },
  {
    id: 'restaurants-cafes',
    name: 'Restaurants & Cafes',
    slug: 'restaurants-cafes',
    description: 'Casual eateries, specialty coffee shops, bistros, bakeries, food trucks, and fine dining venues.',
    iconName: 'Utensils',
    recommendedWebsiteType: 'Digital Visual Menu & Table Reservation Site',
    recommendedAppType: 'Direct Online Ordering & Table Booking App',
    typicalServices: [
      'Dine-in Table Reservations',
      'Artisan Coffee & Bakery',
      'Takeaway & Online Ordering',
      'Chef Tasting Menus',
      'Private Events & Catering',
      'Weekend Brunch'
    ],
    recommendedModules: [
      'Menu',
      'Categories',
      'Online Ordering',
      'Reservations',
      'Offers',
      'Gallery',
      'Reviews',
      'Location',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'cafe near me',
      'restaurant reservation',
      'artisan coffee bakery',
      'best brunch spot',
      'takeaway food order'
    ],
    targetAudience: 'Foodies, local diners, remote workers, families, and tourists',
    averageTicketSize: '$15 - $80',
    commonWeaknessesWithoutSite: [
      'Outdated PDF menus or low-res photos on Google Maps',
      'High commission fees paid to 3rd-party delivery aggregators',
      'No direct WhatsApp table reservation or instant directions'
    ]
  },
  {
    id: 'car-repair-detailing',
    name: 'Car Repair & Detailing Garages',
    slug: 'car-repair-detailing-garages',
    description: 'Auto repair shops, ceramic coating specialists, paint correction garages, and tire & lube centers.',
    iconName: 'Wrench',
    recommendedWebsiteType: 'High-Trust Automotive Services & Quote Calculator',
    recommendedAppType: 'Service Package Booking & Vehicle Tracker App',
    typicalServices: [
      'Ceramic Coating & Paint Correction',
      'Full Vehicle Diagnostic & Tune-up',
      'Brake Repair & Pad Replacement',
      'Synthetic Oil & Filter Service',
      'Interior Deep Steam Detail',
      'Tire Mounting & Alignment'
    ],
    recommendedModules: [
      'Services',
      'Service Packages',
      'Booking',
      'Vehicle Information',
      'Pricing',
      'Gallery',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'auto repair garage',
      'car detailing ceramic coating',
      'brake repair mechanic',
      'oil change near me',
      'auto body shop'
    ],
    targetAudience: 'Car owners, vehicle enthusiasts, fleet operators, daily commuters',
    averageTicketSize: '$120 - $850',
    commonWeaknessesWithoutSite: [
      'Customer distrust due to opaque pricing and lack of written quotes',
      'No online vehicle intake form (Make/Model/Year/Issue)',
      'Missing before/after gallery of detailing work'
    ]
  },
  {
    id: 'cleaning-maid',
    name: 'Cleaning & Maid Services',
    slug: 'cleaning-maid-services',
    description: 'Residential house cleaners, commercial office janitorial, move-in/move-out deep cleaning, and carpet care.',
    iconName: 'Sparkle',
    recommendedWebsiteType: 'Instant Service Area Checker & Quote Estimator Site',
    recommendedAppType: 'Recurring Cleaning Subscription & Dispatch App',
    typicalServices: [
      'Standard House Cleaning',
      'Move-in / Move-out Deep Clean',
      'Post-Construction Cleanup',
      'Commercial Office Janitorial',
      'Upholstery & Carpet Steam Clean',
      'Airbnb Turnover Cleaning'
    ],
    recommendedModules: [
      'Services',
      'Packages',
      'Service Areas',
      'Booking',
      'Pricing',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'house cleaning maid service',
      'deep cleaning service near me',
      'office cleaning commercial',
      'move out cleaning',
      'airbnb turnover cleaner'
    ],
    targetAudience: 'Busy homeowners, Airbnb hosts, property managers, small office managers',
    averageTicketSize: '$110 - $350',
    commonWeaknessesWithoutSite: [
      'No instant square footage / bedroom count pricing calculator',
      'No clear service zip code / service area boundaries displayed',
      'No proof of insurance, bonded staff badges, or customer testimonials'
    ]
  },
  {
    id: 'tailors-boutiques',
    name: 'Tailors & Boutiques',
    slug: 'tailors-boutiques',
    description: 'Custom bespoke tailors, bridal alteration ateliers, fashion boutiques, and traditional garment artisans.',
    iconName: 'Shirt',
    recommendedWebsiteType: 'Custom Lookbook & Fitting Appointment Studio Site',
    recommendedAppType: 'Measurement Tracking & Custom Order Management App',
    typicalServices: [
      'Bespoke Suit & Shirt Tailoring',
      'Bridal & Formal Dress Alterations',
      'Garment Hemming & Resizing',
      'Leather & Denim Customization',
      'Curated Ready-to-Wear Collections',
      'Fabric & Style Consultation'
    ],
    recommendedModules: [
      'Products / Collections',
      'Services',
      'Gallery',
      'Custom Orders',
      'Booking',
      'Pricing',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'custom tailor bespoke suits',
      'dress alterations near me',
      'clothing boutique artisan',
      'wedding dress alteration',
      'suit fitting tailor'
    ],
    targetAudience: 'Professionals, wedding parties, luxury fashion buyers, everyday garment repair seekers',
    averageTicketSize: '$60 - $600',
    commonWeaknessesWithoutSite: [
      'Word-of-mouth only with zero online garment lookbook',
      'Lack of an easy fitting appointment booking system',
      'No direct WhatsApp measurement submission or status updates'
    ]
  },
  {
    id: 'photographers-videographers',
    name: 'Freelance Photographers & Videographers',
    slug: 'photographers-videographers',
    description: 'Wedding photographers, commercial portrait shooters, drone videographers, and real estate media creators.',
    iconName: 'Camera',
    recommendedWebsiteType: 'High-Impact Visual Portfolio & Date Availability Site',
    recommendedAppType: 'Client Gallery Delivery & Project Invoicing Portal',
    typicalServices: [
      'Wedding & Engagement Photography',
      'Corporate Headshots & Branding',
      'Real Estate HDR Photo & 4K Video',
      'Product & E-Commerce Shoots',
      'Family & Newborn Portraits',
      'Drone Aerial Cinematography'
    ],
    recommendedModules: [
      'Portfolio',
      'Packages',
      'Services',
      'Booking',
      'Gallery',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'wedding photographer near me',
      'commercial portrait photography',
      'real estate videographer',
      'freelance photographer',
      'corporate headshot studio'
    ],
    targetAudience: 'Engaged couples, real estate agents, corporate marketing teams, local brands',
    averageTicketSize: '$250 - $2,500',
    commonWeaknessesWithoutSite: [
      'Instagram compression ruins portfolio clarity',
      'No structured package tier comparison (Hours, Edited Photos, Drone)',
      'No calendar date checker or automated inquiry form'
    ]
  },
  {
    id: 'fitness-gyms',
    name: 'Fitness Trainers & Small Gyms',
    slug: 'fitness-trainers-small-gyms',
    description: 'Personal training studios, boutique CrossFit boxes, yoga & pilates studios, and martial arts dojos.',
    iconName: 'Dumbbell',
    recommendedWebsiteType: 'High-Energy Class Schedule & Free Trial Pass Funnel',
    recommendedAppType: 'Member Class Booking & Workout Tracker App',
    typicalServices: [
      '1-on-1 Personal Training',
      'Small Group High-Intensity Classes',
      'Mat Pilates & Vinyasa Yoga',
      'Custom Nutrition Coaching',
      'Strength & Conditioning Camps',
      'Monthly Gym Memberships'
    ],
    recommendedModules: [
      'Programs',
      'Trainers',
      'Memberships',
      'Classes',
      'Schedule',
      'Booking',
      'Pricing',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'personal trainer near me',
      'boutique gym fitness studio',
      'crossfit box classes',
      'pilates yoga studio',
      'small gym membership'
    ],
    targetAudience: 'Fitness seekers, weight loss candidates, athletes, busy professionals wanting health coaching',
    averageTicketSize: '$80 - $350 / mo',
    commonWeaknessesWithoutSite: [
      'No live timetable or class schedule visible online',
      'No friction-free "Claim 1 Free Day Pass" lead generation hook',
      'No trainer credentials or member transformation testimonials'
    ]
  },
  {
    id: 'pet-grooming-boarding',
    name: 'Pet Grooming & Pet Boarding',
    slug: 'pet-grooming-pet-boarding',
    description: 'Dog grooming salons, mobile pet wash vans, cat boarding catteries, and doggy daycare resorts.',
    iconName: 'Dog',
    recommendedWebsiteType: 'Cuteness-First Pet Pampering & Boarding Booking Site',
    recommendedAppType: 'Pet Profile & Vaccination Check-in App',
    typicalServices: [
      'Full Bath, Cut & Blowdry Grooming',
      'De-shedding & Nail Trimming',
      'Overnight Luxury Pet Boarding',
      'Daycare Playgroups & Agility',
      'Puppy Socialization Packages',
      'Teeth Brushing & Flea Bath'
    ],
    recommendedModules: [
      'Services',
      'Packages',
      'Pet Profiles',
      'Booking',
      'Pricing',
      'Gallery',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'dog grooming near me',
      'pet boarding cattery hotel',
      'mobile dog wash',
      'doggy daycare puppy care',
      'pet salon nail trim'
    ],
    targetAudience: 'Devoted dog and cat owners, travelers needing pet care, working pet parents',
    averageTicketSize: '$55 - $220',
    commonWeaknessesWithoutSite: [
      'No pet breed size / weight pricing transparency',
      'No easy online vaccination record upload or pet profile intake',
      'No live facility photo tour to build pet owner trust'
    ]
  },
  {
    id: 'tutoring-training',
    name: 'Home Tutoring & Training Centers',
    slug: 'home-tutoring-training-centers',
    description: 'K-12 home tutors, language academies, coding bootcamps, music instructors, and exam prep centers.',
    iconName: 'GraduationCap',
    recommendedWebsiteType: 'Academic Courses & Free Trial Assessment Site',
    recommendedAppType: 'Tutor Scheduling & Student Progress Portal',
    typicalServices: [
      '1-on-1 Math & Science Tutoring',
      'SAT / ACT / IELTS Exam Preparation',
      'Foreign Language Conversational Classes',
      'Piano, Guitar & Vocal Lessons',
      'Kids STEM & Python Coding Academy',
      'Homework Help & Study Skills Coaching'
    ],
    recommendedModules: [
      'Courses',
      'Subjects',
      'Tutors',
      'Classes',
      'Schedule',
      'Booking',
      'Pricing',
      'Reviews',
      'WhatsApp',
      'Message Centre'
    ],
    leadGenerationKeywords: [
      'math tutor near me',
      'home tutoring training center',
      'exam prep sat ielts',
      'language classes academy',
      'music lessons piano guitar'
    ],
    targetAudience: 'Parents of K-12 students, adult learners, test takers, skill upgraders',
    averageTicketSize: '$40 - $120 / hr',
    commonWeaknessesWithoutSite: [
      'No tutor bios, credentials, or university background showcase',
      'No structured syllabus or grade-level subject breakdown',
      'No automated "Book Free 20-Min Assessment" trial scheduler'
    ]
  }
];

export const FUTURE_BUSINESS_CATEGORIES = [
  { id: 'hotels-resorts', name: 'Hotels & Boutique Resorts', slug: 'hotels-resorts', iconName: 'Hotel' },
  { id: 'dental-clinics', name: 'Dental & Orthodontic Clinics', slug: 'dental-clinics', iconName: 'Smile' },
  { id: 'medical-clinics', name: 'Medical Clinics & Specialists', slug: 'medical-clinics', iconName: 'Stethoscope' },
  { id: 'real-estate', name: 'Real Estate Agencies & Realtors', slug: 'real-estate', iconName: 'Home' },
  { id: 'law-firms', name: 'Law Firms & Legal Consultants', slug: 'law-firms', iconName: 'Scale' },
  { id: 'travel-agencies', name: 'Travel Agencies & Tour Operators', slug: 'travel-agencies', iconName: 'Compass' },
  { id: 'retail-stores', name: 'Independent Retail & Specialty Stores', slug: 'retail-stores', iconName: 'ShoppingBag' },
  { id: 'automotive-dealers', name: 'Car Dealerships & Rentals', slug: 'automotive-dealers', iconName: 'Car' },
  { id: 'professional-services', name: 'Accounting & Consulting Firms', slug: 'professional-services', iconName: 'Briefcase' }
];

export function getAllCategories(): BusinessCategory[] {
  return PRIMARY_BUSINESS_CATEGORIES;
}

export function getCategoryById(id: string): BusinessCategory | undefined {
  return PRIMARY_BUSINESS_CATEGORIES.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): BusinessCategory | undefined {
  return PRIMARY_BUSINESS_CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): BusinessCategory | undefined {
  if (!name) return undefined;
  const lower = name.toLowerCase();
  return PRIMARY_BUSINESS_CATEGORIES.find(
    (c) =>
      c.name.toLowerCase() === lower ||
      c.name.toLowerCase().includes(lower) ||
      lower.includes(c.name.toLowerCase()) ||
      c.id === lower
  );
}

export function getRecommendedModules(categoryId: string): string[] {
  const cat = getCategoryById(categoryId) || getCategoryByName(categoryId);
  return cat ? cat.recommendedModules : [
    'Services',
    'Booking',
    'Pricing',
    'Gallery',
    'Reviews',
    'WhatsApp',
    'Message Centre'
  ];
}

export function searchCategories(query: string): BusinessCategory[] {
  if (!query) return PRIMARY_BUSINESS_CATEGORIES;
  const q = query.toLowerCase();
  return PRIMARY_BUSINESS_CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.typicalServices.some((s) => s.toLowerCase().includes(q)) ||
      c.leadGenerationKeywords.some((k) => k.toLowerCase().includes(q))
  );
}
