import { Project, Lead, BusinessAnalysis, AIChatConversation, Deployment, GenerationTask } from '../types';
import { PRIMARY_BUSINESS_CATEGORIES, getCategoryById, getCategoryByName } from '../data/businessCategories';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    name: 'Aura Luxury Spa & Wellness',
    type: 'website',
    status: 'deployed',
    industry: 'Spas & Massage Centers',
    categoryId: 'spas-massage',
    updatedAt: '10 mins ago',
    description: 'High-converting luxury booking website with automated WhatsApp lead capture and treatment menus.',
    url: 'https://auraspa.branify.app',
    modules: ['Services', 'Treatments', 'Therapists', 'Appointment Booking', 'Packages', 'WhatsApp', 'Message Centre'],
    metrics: { visitors: 1420, score: 98, conversion: 6.4 }
  },
  {
    id: 'proj-2',
    name: 'Precision Auto Works & Detailing',
    type: 'web_app',
    status: 'active',
    industry: 'Car Repair & Detailing Garages',
    categoryId: 'car-repair-detailing',
    updatedAt: '2 hours ago',
    description: 'Vehicle intake tracking portal with ceramic coating service packages and estimate booking.',
    url: 'https://precisionautoworks.branify.app',
    modules: ['Services', 'Service Packages', 'Booking', 'Vehicle Information', 'Pricing', 'Reviews', 'WhatsApp'],
    metrics: { visitors: 2890, score: 94, conversion: 7.8 }
  },
  {
    id: 'proj-3',
    name: 'Metro Artisan Cafe & Roastery',
    type: 'brand',
    status: 'completed',
    industry: 'Restaurants & Cafes',
    categoryId: 'restaurants-cafes',
    updatedAt: 'Yesterday',
    description: 'Complete brand identity kit, digital visual menu, table reservations, and local SEO site.',
    url: 'https://metrocafe.branify.app',
    modules: ['Menu', 'Categories', 'Online Ordering', 'Reservations', 'Offers', 'Location', 'WhatsApp'],
    metrics: { visitors: 850, score: 91, conversion: 4.1 }
  },
  {
    id: 'proj-4',
    name: 'Apex Fitness & CrossFit Studio',
    type: 'website',
    status: 'generating',
    industry: 'Fitness Trainers & Small Gyms',
    categoryId: 'fitness-gyms',
    updatedAt: '3 days ago',
    description: 'Dynamic class schedule timetable and free 1-day trial pass funnel.',
    modules: ['Programs', 'Trainers', 'Memberships', 'Classes', 'Schedule', 'Booking', 'WhatsApp'],
    metrics: { visitors: 0, score: 88, conversion: 0 }
  },
  {
    id: 'proj-5',
    name: 'Velvet Scissors Salon & Spa',
    type: 'website',
    status: 'deployed',
    industry: 'Salons & Beauty Parlours',
    categoryId: 'salons-beauty',
    updatedAt: '4 days ago',
    description: 'Chic stylist portfolio with instant hair appointment booking and WhatsApp direct styling chat.',
    url: 'https://velvetscissors.branify.app',
    modules: ['Services', 'Stylists', 'Booking', 'Pricing', 'Gallery', 'Reviews', 'WhatsApp'],
    metrics: { visitors: 1120, score: 96, conversion: 8.5 }
  }
];

export const mockLeads: Lead[] = [
  {
    id: 'lead-1',
    businessName: 'Serenity Day Spa & Massage',
    category: 'Spas & Massage Centers',
    categoryId: 'spas-massage',
    location: 'Miami, FL, USA',
    country: 'United States',
    city: 'Miami, FL',
    rating: 4.3,
    reviews: 42,
    phone: '+1 (305) 555-0192',
    websiteStatus: 'NO WEBSITE',
    leadScore: 96,
    opportunityLevel: 'High',
    email: 'contact@serenitydayspa.mock',
    address: '742 Ocean Drive, Miami, FL',
    mapsUrl: 'https://maps.google.com/?q=Serenity+Day+Spa+Miami',
    suggestedModules: ['Services', 'Treatments', 'Therapists', 'Appointment Booking', 'WhatsApp', 'Message Centre']
  },
  {
    id: 'lead-2',
    businessName: 'Luxe Hair & Nail Studio',
    category: 'Salons & Beauty Parlours',
    categoryId: 'salons-beauty',
    location: 'Austin, TX, USA',
    country: 'United States',
    city: 'Austin, TX',
    rating: 4.6,
    reviews: 78,
    phone: '+1 (512) 555-3921',
    websiteStatus: 'NO WEBSITE',
    leadScore: 94,
    opportunityLevel: 'High',
    email: 'booking@luxehairnail.mock',
    address: '1204 S Congress Ave, Austin, TX',
    mapsUrl: 'https://maps.google.com/?q=Luxe+Hair+Nail+Austin',
    suggestedModules: ['Services', 'Stylists', 'Booking', 'Pricing', 'Gallery', 'WhatsApp']
  },
  {
    id: 'lead-3',
    businessName: 'Golden Fork Bistro & Cafe',
    category: 'Restaurants & Cafes',
    categoryId: 'restaurants-cafes',
    location: 'London, UK',
    country: 'United Kingdom',
    city: 'London',
    rating: 4.5,
    reviews: 185,
    phone: '+44 20 7946 0192',
    websiteStatus: 'WEAK WEBSITE',
    leadScore: 89,
    opportunityLevel: 'High',
    email: 'hello@goldenforkbistro.mock',
    address: '42 Baker Street, London, UK',
    mapsUrl: 'https://maps.google.com/?q=Golden+Fork+Bistro+London',
    suggestedModules: ['Menu', 'Categories', 'Online Ordering', 'Reservations', 'Location', 'WhatsApp']
  },
  {
    id: 'lead-4',
    businessName: 'Apex Auto Repair & Detailing',
    category: 'Car Repair & Detailing Garages',
    categoryId: 'car-repair-detailing',
    location: 'Chicago, IL, USA',
    country: 'United States',
    city: 'Chicago, IL',
    rating: 4.1,
    reviews: 64,
    phone: '+1 (312) 555-7840',
    websiteStatus: 'NO WEBSITE',
    leadScore: 95,
    opportunityLevel: 'High',
    email: 'service@apexautodetail.mock',
    address: '2410 W Fulton St, Chicago, IL',
    mapsUrl: 'https://maps.google.com/?q=Apex+Auto+Repair+Chicago',
    suggestedModules: ['Services', 'Service Packages', 'Booking', 'Vehicle Information', 'Pricing', 'WhatsApp']
  },
  {
    id: 'lead-5',
    businessName: 'Sparkle Maid & Deep Cleaners',
    category: 'Cleaning & Maid Services',
    categoryId: 'cleaning-maid',
    location: 'Toronto, ON, Canada',
    country: 'Canada',
    city: 'Toronto, ON',
    rating: 4.7,
    reviews: 53,
    phone: '+1 (416) 555-8910',
    websiteStatus: 'NO WEBSITE',
    leadScore: 93,
    opportunityLevel: 'High',
    email: 'estimates@sparklemaidto.mock',
    address: '88 King St W, Toronto, ON',
    mapsUrl: 'https://maps.google.com/?q=Sparkle+Maid+Toronto',
    suggestedModules: ['Services', 'Packages', 'Service Areas', 'Booking', 'Pricing', 'WhatsApp']
  },
  {
    id: 'lead-6',
    businessName: 'Stitch & Seam Bespoke Tailors',
    category: 'Tailors & Boutiques',
    categoryId: 'tailors-boutiques',
    location: 'New York, NY, USA',
    country: 'United States',
    city: 'New York, NY',
    rating: 4.8,
    reviews: 36,
    phone: '+1 (212) 555-6672',
    websiteStatus: 'WEAK WEBSITE',
    leadScore: 88,
    opportunityLevel: 'High',
    email: 'fittings@stitchseamtailors.mock',
    address: '350 5th Ave, New York, NY',
    mapsUrl: 'https://maps.google.com/?q=Stitch+Seam+Bespoke+New+York',
    suggestedModules: ['Products / Collections', 'Services', 'Gallery', 'Custom Orders', 'Booking', 'WhatsApp']
  },
  {
    id: 'lead-7',
    businessName: 'Vivid Moments Photo & Film',
    category: 'Freelance Photographers & Videographers',
    categoryId: 'photographers-videographers',
    location: 'Los Angeles, CA, USA',
    country: 'United States',
    city: 'Los Angeles, CA',
    rating: 4.9,
    reviews: 49,
    phone: '+1 (323) 555-9014',
    websiteStatus: 'NO WEBSITE',
    leadScore: 97,
    opportunityLevel: 'High',
    email: 'bookings@vividmomentsla.mock',
    address: '6801 Hollywood Blvd, Los Angeles, CA',
    mapsUrl: 'https://maps.google.com/?q=Vivid+Moments+Photo+Film+LA',
    suggestedModules: ['Portfolio', 'Packages', 'Services', 'Booking', 'Gallery', 'Reviews', 'WhatsApp']
  },
  {
    id: 'lead-8',
    businessName: 'Iron Core Personal Training',
    category: 'Fitness Trainers & Small Gyms',
    categoryId: 'fitness-gyms',
    location: 'Sydney, NSW, Australia',
    country: 'Australia',
    city: 'Sydney',
    rating: 4.6,
    reviews: 62,
    phone: '+61 2 9385 1192',
    websiteStatus: 'WEAK WEBSITE',
    leadScore: 87,
    opportunityLevel: 'High',
    email: 'coach@ironcorefitness.mock',
    address: '150 George St, Sydney, NSW',
    mapsUrl: 'https://maps.google.com/?q=Iron+Core+Training+Sydney',
    suggestedModules: ['Programs', 'Trainers', 'Memberships', 'Classes', 'Schedule', 'Booking', 'WhatsApp']
  },
  {
    id: 'lead-9',
    businessName: 'Paws & Whiskers Pet Spa & Resort',
    category: 'Pet Grooming & Pet Boarding',
    categoryId: 'pet-grooming-boarding',
    location: 'Denver, CO, USA',
    country: 'United States',
    city: 'Denver, CO',
    rating: 4.8,
    reviews: 94,
    phone: '+1 (303) 555-4389',
    websiteStatus: 'NO WEBSITE',
    leadScore: 98,
    opportunityLevel: 'High',
    email: 'care@pawsandwhiskersco.mock',
    address: '1701 Wynkoop St, Denver, CO',
    mapsUrl: 'https://maps.google.com/?q=Paws+Whiskers+Denver',
    suggestedModules: ['Services', 'Packages', 'Pet Profiles', 'Booking', 'Pricing', 'Gallery', 'WhatsApp']
  },
  {
    id: 'lead-10',
    businessName: 'Excel Math & Science Home Academy',
    category: 'Home Tutoring & Training Centers',
    categoryId: 'tutoring-training',
    location: 'Manchester, UK',
    country: 'United Kingdom',
    city: 'Manchester',
    rating: 4.9,
    reviews: 31,
    phone: '+44 161 555 7721',
    websiteStatus: 'NO WEBSITE',
    leadScore: 95,
    opportunityLevel: 'High',
    email: 'director@exceltutoringmcr.mock',
    address: '10 Deansgate, Manchester, UK',
    mapsUrl: 'https://maps.google.com/?q=Excel+Math+Science+Manchester',
    suggestedModules: ['Courses', 'Subjects', 'Tutors', 'Classes', 'Schedule', 'Booking', 'WhatsApp']
  },
  {
    id: 'lead-11',
    businessName: 'Harbor View Seafood Grill',
    category: 'Restaurants & Cafes',
    categoryId: 'restaurants-cafes',
    location: 'Seattle, WA, USA',
    country: 'United States',
    city: 'Seattle, WA',
    rating: 4.5,
    reviews: 210,
    phone: '+1 (206) 555-3829',
    websiteStatus: 'HAS WEBSITE',
    leadScore: 62,
    opportunityLevel: 'Medium',
    email: 'reservations@harborviewseafood.mock',
    address: '500 Alaskan Way, Seattle, WA',
    mapsUrl: 'https://maps.google.com/?q=Harbor+View+Seafood+Seattle',
    suggestedModules: ['Menu', 'Categories', 'Online Ordering', 'Reservations', 'Offers', 'Location', 'WhatsApp']
  }
];

export const mockBusinessAnalysis: BusinessAnalysis = {
  id: 'biz-1',
  name: 'Serenity Day Spa & Massage',
  category: 'Spas & Massage Centers',
  categoryId: 'spas-massage',
  location: 'Miami, FL, USA',
  website: 'None detected (Google Maps Listing Only)',
  opportunityScore: 96,
  overview: 'High-rated local spa with 42 Google reviews averaging 4.3 stars, but completely lacks an official website or online booking channel. An estimated 60+ appointment requests per month are lost to nearby competitors with instant mobile booking and WhatsApp CTAs.',
  onlinePresence: {
    seoScore: 14,
    speedScore: 0,
    mobileScore: 20,
    socialScore: 42
  },
  branding: {
    hasLogo: false,
    colorCohesion: 'Inconsistent (Low-res Google Maps photo upload only)',
    typography: 'Default system fonts'
  },
  reviewsSummary: {
    positiveCount: 38,
    negativeCount: 4,
    sentiment: 'High customer satisfaction for therapists and massage quality. Negative feedback primarily cites difficulty booking appointments over busy phone lines.'
  },
  opportunities: [
    'Deploy a lightweight, mobile-first booking website with instant treatment selection',
    'Integrate one-click WhatsApp appointment confirmation button directly on Google Maps',
    'Display structured service pricing packages (Aromatherapy, Deep Tissue, Couples Packages)',
    'Implement automated SMS/WhatsApp appointment reminders to reduce client no-shows'
  ],
  aiRecommendations: [
    'High Priority Outreach: Pitch a simple, affordable 1-page booking site ready in 24 hours.',
    'Highlight instant WhatsApp lead capture — converts 4x more smartphone visitors than phone calls.',
    'Provide ready-to-use treatment catalog tailored for Spas & Massage Centers.'
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
  ]
};

export const mockDeployments: Deployment[] = [
  {
    id: 'dep-1',
    projectName: 'Aura Luxury Spa & Wellness',
    type: 'Production',
    status: 'Live',
    domain: 'auraspa.branify.app',
    version: 'v1.4.2',
    deployedAt: '12 minutes ago'
  },
  {
    id: 'dep-2',
    projectName: 'Zenith Dental Implant Center',
    type: 'Production',
    status: 'Live',
    domain: 'zenithdental.branify.app',
    version: 'v2.1.0',
    deployedAt: '4 hours ago'
  },
  {
    id: 'dep-3',
    projectName: 'Metro Artisan Cafe & Roastery',
    type: 'Preview',
    status: 'Building',
    domain: 'metrocafe-preview.branify.app',
    version: 'v0.9.1',
    deployedAt: 'Just now'
  },
  {
    id: 'dep-4',
    projectName: 'Apex Fitness & CrossFit',
    type: 'Production',
    status: 'Failed',
    domain: 'apexfit.branify.app',
    version: 'v1.0.0',
    deployedAt: '2 days ago'
  }
];

export const mockGenerationTasks: GenerationTask[] = [
  {
    id: 'task-1',
    title: 'Aura Luxury Spa Website Generation',
    type: 'Website',
    stage: 'Completed',
    progress: 100,
    logs: [
      'Initialized VectorEngine AI core model v4.2',
      'Generated layout architecture & responsive sections',
      'Applied luxury gold & emerald brand styling',
      'Validated accessibility and SEO compliance',
      'Deployed to global edge servers successfully'
    ],
    createdAt: '15 mins ago'
  },
  {
    id: 'task-2',
    title: 'Zenith Dental Patient Portal',
    type: 'Web App',
    stage: 'Completed',
    progress: 100,
    logs: [
      'Configured secure database schemas & auth modules',
      'Built appointment scheduling reactive interface',
      'Integrated AI symptom triage assistant',
      'Passed security penetration testing'
    ],
    createdAt: '2 hours ago'
  },
  {
    id: 'task-3',
    title: 'Apex Fitness Sales Funnel',
    type: 'Website',
    stage: 'Generating',
    progress: 68,
    logs: [
      'Synthesizing fitness industry conversion benchmarks',
      'Generating high-impact hero sections and pricing tables',
      'Optimizing media assets for instant mobile loading...'
    ],
    createdAt: '3 mins ago'
  }
];

export const mockConversations: AIChatConversation[] = [
  {
    id: 'conv-1',
    title: 'Optimize conversion rate for Spa website',
    updatedAt: '10 mins ago',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'How can I improve the booking conversion rate on Aura Luxury Spa website?',
        timestamp: '10:30 AM'
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'Based on VectorEngine analytics for luxury wellness sites, adding a sticky "Book Now" floating CTA and a 3-step instant appointment widget increases conversion by 34%. Would you like me to apply this update to your project now?',
        timestamp: '10:31 AM'
      }
    ]
  },
  {
    id: 'conv-2',
    title: 'Lead generation strategy for Austin dental clinics',
    updatedAt: 'Yesterday',
    messages: [
      {
        id: 'msg-1',
        role: 'user',
        content: 'Find dental clinics in Austin TX with weak websites.',
        timestamp: 'Yesterday 3:15 PM'
      },
      {
        id: 'msg-2',
        role: 'assistant',
        content: 'I have scanned 42 dental practices in Austin, TX. 12 have outdated non-responsive sites or missing online booking. I have saved them to your Lead Generator workspace with estimated opportunity scores.',
        timestamp: 'Yesterday 3:16 PM'
      }
    ]
  }
];

export const VectorEngineService = {
  async sendMessage(prompt: string, conversationId?: string): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return `VectorEngine AI processed your request: "${prompt}". Operating with 10 primary business categories (Spas, Salons, Restaurants, Garages, Maid Services, Tailors, Photographers, Gyms, Pet Care, Tutoring). Would you like to deploy a lightweight website or explore leads?`;
  },

  async generateWebsite(params: { name: string; industry: string; categoryId?: string; description: string; modules?: string[] }): Promise<Project> {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const matchedCategory = params.categoryId ? getCategoryById(params.categoryId) : getCategoryByName(params.industry);
    const resolvedModules = params.modules || (matchedCategory ? matchedCategory.recommendedModules : [
      'Services', 'Booking', 'Pricing', 'Gallery', 'Reviews', 'WhatsApp', 'Message Centre'
    ]);

    return {
      id: `proj-${Date.now()}`,
      name: params.name,
      type: 'website',
      status: 'deployed',
      industry: matchedCategory ? matchedCategory.name : params.industry,
      categoryId: matchedCategory ? matchedCategory.id : params.categoryId,
      updatedAt: 'Just now',
      description: params.description,
      modules: resolvedModules,
      url: `https://${params.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.branify.app`,
      metrics: { visitors: 1, score: 98, conversion: 5.5 }
    };
  },

  async generateWebApp(params: { name: string; appType: string; categoryId?: string; description: string; modules?: string[] }): Promise<Project> {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    const matchedCategory = params.categoryId ? getCategoryById(params.categoryId) : getCategoryByName(params.appType);
    const resolvedModules = params.modules || (matchedCategory ? matchedCategory.recommendedModules : [
      'Services', 'Booking', 'Pricing', 'Reviews', 'WhatsApp', 'Message Centre'
    ]);

    return {
      id: `proj-${Date.now()}`,
      name: params.name,
      type: 'web_app',
      status: 'deployed',
      industry: matchedCategory ? matchedCategory.name : params.appType,
      categoryId: matchedCategory ? matchedCategory.id : params.categoryId,
      updatedAt: 'Just now',
      description: params.description,
      modules: resolvedModules,
      url: `https://${params.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.branify.app`,
      metrics: { visitors: 1, score: 96, conversion: 7.1 }
    };
  },

  async searchLeads(query: { category?: string; country?: string; city?: string; websiteStatus?: string; minRating?: number; minReviews?: number; minScore?: number }): Promise<Lead[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockLeads.filter((lead) => {
      if (query.category && query.category !== 'ALL') {
        const cat = getCategoryById(query.category) || getCategoryByName(query.category);
        if (cat) {
          if (lead.categoryId !== cat.id && lead.category !== cat.name) return false;
        } else {
          if (lead.category !== query.category && lead.categoryId !== query.category) return false;
        }
      }
      if (query.websiteStatus && query.websiteStatus !== 'ALL') {
        if (lead.websiteStatus !== query.websiteStatus) return false;
      }
      if (query.country && query.country !== 'ALL') {
        if (lead.country && !lead.country.toLowerCase().includes(query.country.toLowerCase())) return false;
      }
      if (query.city && query.city.trim() !== '') {
        const cLower = query.city.toLowerCase();
        if (!lead.location.toLowerCase().includes(cLower) && !(lead.city && lead.city.toLowerCase().includes(cLower))) {
          return false;
        }
      }
      if (query.minRating && lead.rating < query.minRating) return false;
      if (query.minReviews && lead.reviews < query.minReviews) return false;
      if (query.minScore && lead.leadScore < query.minScore) return false;
      return true;
    });
  },

  async analyzeBusiness(businessName: string, categoryIdOrName?: string): Promise<BusinessAnalysis> {
    await new Promise((resolve) => setTimeout(resolve, 900));
    const matchedCategory = categoryIdOrName ? (getCategoryById(categoryIdOrName) || getCategoryByName(categoryIdOrName)) : undefined;

    const base = { ...mockBusinessAnalysis };
    if (matchedCategory) {
      base.category = matchedCategory.name;
      base.categoryId = matchedCategory.id;
      base.recommendedModules = matchedCategory.recommendedModules;
      base.overview = `High-rated local business in ${matchedCategory.name} with strong community reputation, but lacks a dedicated modern web presence or direct WhatsApp booking portal.`;
      base.opportunities = [
        `Deploy a fast, mobile-first ${matchedCategory.recommendedWebsiteType}`,
        `Integrate WhatsApp direct channel for ${matchedCategory.typicalServices[0] || 'service inquiries'}`,
        `Display clear pricing and structured packages for ${matchedCategory.typicalServices.slice(0, 3).join(', ')}`,
        'Enable online quote calculator and client reviews showcase'
      ];
      base.aiRecommendations = [
        `Deliver a high-converting ${matchedCategory.recommendedWebsiteType} with ready-made booking slots.`,
        `Equip with ${matchedCategory.recommendedModules.slice(0, 4).join(', ')} for maximum client retention.`,
        'Position affordable monthly maintenance with zero technical overhead for the owner.'
      ];
    }
    return {
      ...base,
      name: businessName || base.name
    };
  }
};
