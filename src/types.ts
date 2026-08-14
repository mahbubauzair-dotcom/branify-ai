export interface Project {
  id: string;
  name: string;
  type: 'website' | 'web_app' | 'brand' | 'campaign';
  status: 'active' | 'draft' | 'completed' | 'generating' | 'deployed';
  industry: string;
  categoryId?: string;
  updatedAt: string;
  description: string;
  url?: string;
  thumbnail?: string;
  modules?: string[];
  metrics?: {
    visitors?: number;
    score?: number;
    conversion?: number;
  };
}

export interface Lead {
  id: string;
  businessName: string;
  category: string;
  categoryId?: string;
  location: string;
  country?: string;
  city?: string;
  rating: number;
  reviews: number;
  phone: string;
  websiteStatus: 'NO WEBSITE' | 'WEAK WEBSITE' | 'HAS WEBSITE';
  leadScore: number;
  opportunityLevel: 'High' | 'Medium' | 'Low';
  email?: string;
  address?: string;
  mapsUrl?: string;
  suggestedModules?: string[];
}

export interface BusinessAnalysis {
  id: string;
  name: string;
  category: string;
  categoryId?: string;
  location: string;
  website: string;
  opportunityScore: number;
  overview: string;
  onlinePresence: {
    seoScore: number;
    speedScore: number;
    mobileScore: number;
    socialScore: number;
  };
  branding: {
    hasLogo: boolean;
    colorCohesion: string;
    typography: string;
  };
  reviewsSummary: {
    positiveCount: number;
    negativeCount: number;
    sentiment: string;
  };
  opportunities: string[];
  aiRecommendations: string[];
  recommendedModules?: string[];
}

export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  attachments?: string[];
  model?: string;
}

export interface AIChatConversation {
  id: string;
  title: string;
  updatedAt: string;
  messages: AIChatMessage[];
  projectId?: string;
}

export interface Deployment {
  id: string;
  projectName: string;
  type: 'Production' | 'Preview';
  status: 'Live' | 'Building' | 'Failed' | 'Rolled Back';
  domain: string;
  version: string;
  deployedAt: string;
}

export interface GenerationTask {
  id: string;
  title: string;
  type: 'Website' | 'Web App' | 'Brand Kit' | 'Lead Analysis';
  stage: 'Queued' | 'Planning' | 'Generating' | 'Validating' | 'Repairing' | 'Building' | 'Preview' | 'Security' | 'Completed' | 'Failed';
  progress: number;
  logs: string[];
  createdAt: string;
}
