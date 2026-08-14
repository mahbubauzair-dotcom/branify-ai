import { PRIMARY_BUSINESS_CATEGORIES } from '../data/businessCategories';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Superadmin' | 'Admin' | 'Operator' | 'User';
  status: 'Active' | 'Suspended' | 'Pending';
  plan: 'Enterprise' | 'Agency Pro' | 'Growth' | 'Free Starter';
  signupDate: string;
  lastActive: string;
  projectsCount: number;
  aiCreditsUsed: number;
  aiCreditsLimit: number;
  country: string;
  avatarInitials: string;
}

export interface AdminProject {
  id: string;
  name: string;
  ownerName: string;
  ownerEmail: string;
  type: 'website' | 'web_app' | 'brand' | 'campaign';
  category: string;
  categoryId: string;
  status: 'deployed' | 'active' | 'generating' | 'draft' | 'suspended';
  generationStatus: 'Success' | 'In Progress' | 'Failed' | 'Queued';
  deploymentStatus: 'Live' | 'Building' | 'Failed' | 'Rolled Back' | 'None';
  domain?: string;
  createdAt: string;
  updatedAt: string;
  modules: string[];
  fileCount: number;
  generationDuration: string;
  logs: string[];
}

export interface AdminAIModel {
  id: string;
  provider: 'Google DeepMind' | 'OpenAI' | 'Anthropic' | 'DeepSeek' | 'xAI' | 'Qwen' | 'VectorEngine Gateway';
  modelName: string;
  version: string;
  status: 'Operational' | 'Degraded' | 'Maintenance' | 'Disabled';
  capability: 'Code Gen & Layout' | 'High-Reasoning & Chat' | 'Fast Lead Extraction' | 'Vision & Brand' | 'Omni Multi-modal';
  costIndicator: '$' | '$$' | '$$$' | '$$$$';
  costPer1kTokens: number;
  averageLatencyMs: number;
  monthlyUsageTokens: string;
  successRate: number;
  isDefault: boolean;
  contextWindow: string;
}

export interface AdminDeployment {
  id: string;
  projectName: string;
  ownerEmail: string;
  type: 'Production' | 'Preview';
  status: 'Live' | 'Building' | 'Failed' | 'Rolled Back';
  domain: string;
  version: string;
  deployedAt: string;
  durationSec: number;
  edgeRegion: string;
  sslStatus: 'Active & Encrypted' | 'Pending' | 'Error';
  commitHash: string;
  rollbackAvailable: boolean;
  errorMessage?: string;
}

export interface AdminHealthService {
  id: string;
  name: string;
  category: 'Core Platform' | 'AI Gateway' | 'Database' | 'Authentication' | 'Infrastructure';
  status: 'Operational' | 'Degraded' | 'Offline';
  uptime90d: number;
  responseTimeMs: number;
  lastChecked: string;
  incidentSummary?: string;
}

export interface AdminBlockedIP {
  id: string;
  ip: string;
  country: string;
  reason: string;
  attempts: number;
  blockedAt: string;
}

export const INITIAL_BLOCKED_IPS: AdminBlockedIP[] = [
  { id: 'ip-1', ip: '194.26.29.112', country: 'Germany', reason: 'Repeated brute force authentication failures', attempts: 18, blockedAt: '1 hour ago' },
  { id: 'ip-2', ip: '45.154.255.89', country: 'Netherlands', reason: 'Automated scraping bot / high request anomaly', attempts: 94, blockedAt: '6 hours ago' },
  { id: 'ip-3', ip: '185.220.101.5', country: 'Russia', reason: 'Known malicious exit node attempting API injection', attempts: 42, blockedAt: 'Yesterday' }
];

export interface AdminSystemSettings {
  platformName: string;
  tagline: string;
  registrationOpen: boolean;
  defaultUserRole: string;
  defaultUserPlan: string;
  defaultAiCredits: number;
  maintenanceMode: boolean;
  autoDeployEnabled: boolean;
  vectorEngineGatewayUrl: string;
  rateLimitPerMin: number;
}

export const INITIAL_SYSTEM_SETTINGS: AdminSystemSettings = {
  platformName: 'BRANIFY AI',
  tagline: 'Build. Brand. Grow.',
  registrationOpen: true,
  defaultUserRole: 'User',
  defaultUserPlan: 'Free Starter',
  defaultAiCredits: 10000,
  maintenanceMode: false,
  autoDeployEnabled: true,
  vectorEngineGatewayUrl: 'https://api.gateway.branify.internal/v4/router',
  rateLimitPerMin: 60
};

export interface AdminSecurityEvent {
  id: string;
  type: string;
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  ip: string;
  location: string;
  timestamp: string;
  details: string;
}

export const INITIAL_SECURITY_EVENTS: AdminSecurityEvent[] = [
  {
    id: 'sec-1',
    type: 'Secret Scan Pass',
    severity: 'info',
    ip: '127.0.0.1 (Internal)',
    location: 'System Kernel',
    timestamp: '15 mins ago',
    details: '0 plaintext secrets or unmasked tokens detected across client builds.'
  },
  {
    id: 'sec-2',
    type: 'Failed Login Attempt',
    severity: 'medium',
    ip: '194.26.29.112',
    location: 'Frankfurt, Germany',
    timestamp: '1 hour ago',
    details: 'Failed admin credentials attempt. Rate limited after 3 attempts.'
  },
  {
    id: 'sec-3',
    type: 'Rate Limit Throttling',
    severity: 'low',
    ip: '72.14.201.88',
    location: 'Toronto, Canada',
    timestamp: '3 hours ago',
    details: 'Lead generation radar queried 60 req/min. Throttled safely to tier capacity.'
  },
  {
    id: 'sec-4',
    type: 'Administrator Privilege Escalation',
    severity: 'high',
    ip: '198.51.100.42',
    location: 'San Francisco, USA',
    timestamp: 'Yesterday',
    details: 'User Sarah Jenkins promoted to Admin role with multi-factor audit log.'
  }
];

export interface AdminAuditLog {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  target: string;
  severity: 'info' | 'warning' | 'critical';
  ip: string;
  details: string;
}

export const INITIAL_AUDIT_LOGS: AdminAuditLog[] = [
  {
    id: 'log-1',
    timestamp: '2026-08-14 07:18:22',
    actor: 'Mahbub Uzair',
    action: 'DEPLOY_PROJECT_PRODUCTION',
    target: 'Project: Aura Luxury Spa & Wellness (proj-1)',
    ip: '198.51.100.42',
    severity: 'info',
    details: 'Deployed production release v1.4.2 to global edge CDN.'
  },
  {
    id: 'log-2',
    timestamp: '2026-08-14 06:45:10',
    actor: 'Sarah Jenkins',
    action: 'GENERATE_AI_WEBSITE',
    target: 'Category: Salons & Beauty Parlours',
    ip: '82.165.197.1',
    severity: 'info',
    details: 'Generated complete multi-page responsive salon website.'
  },
  {
    id: 'log-3',
    timestamp: '2026-08-14 05:30:04',
    actor: 'System Sentinel',
    action: 'SECURITY_INTEGRITY_SCAN',
    target: 'Environment Variables & Token Sanitizer',
    ip: '127.0.0.1',
    severity: 'info',
    details: 'Zero plaintext credentials detected across repository files.'
  },
  {
    id: 'log-4',
    timestamp: '2026-08-14 03:12:49',
    actor: 'Superadmin',
    action: 'SUSPEND_USER_ACCOUNT',
    target: 'User: David Chen (usr-5)',
    ip: '72.14.201.88',
    severity: 'warning',
    details: 'User suspended due to policy investigation.'
  },
  {
    id: 'log-5',
    timestamp: '2026-08-13 22:15:30',
    actor: 'Elena Rostova',
    action: 'LEAD_BATCH_EXPORT',
    target: '150 Leads (Spas & Massage Centers - Miami, FL)',
    ip: '144.76.136.24',
    severity: 'info',
    details: 'Downloaded qualified leads CSV data.'
  },
  {
    id: 'log-6',
    timestamp: '2026-08-13 19:40:12',
    actor: 'Mahbub Uzair',
    action: 'UPDATE_AI_MODEL_SETTINGS',
    target: 'Gateway Default Model -> Gemini 2.5 Pro',
    ip: '198.51.100.42',
    severity: 'critical',
    details: 'Promoted Gemini 2.5 Pro to primary default gateway router.'
  }
];

// Initial Mock Data
export const INITIAL_ADMIN_USERS: AdminUser[] = [
  {
    id: 'usr-1',
    name: 'Mahbub Uzair',
    email: 'mahbubauzair@gmail.com',
    role: 'Superadmin',
    status: 'Active',
    plan: 'Enterprise',
    signupDate: '2026-01-15',
    lastActive: 'Just now',
    projectsCount: 14,
    aiCreditsUsed: 42800,
    aiCreditsLimit: 100000,
    country: 'United States',
    avatarInitials: 'MU'
  },
  {
    id: 'usr-2',
    name: 'Sarah Jenkins',
    email: 'sarah.j@auradesign.io',
    role: 'Admin',
    status: 'Active',
    plan: 'Agency Pro',
    signupDate: '2026-02-01',
    lastActive: '12 mins ago',
    projectsCount: 8,
    aiCreditsUsed: 21400,
    aiCreditsLimit: 50000,
    country: 'United Kingdom',
    avatarInitials: 'SJ'
  },
  {
    id: 'usr-3',
    name: 'Marcus Vance',
    email: 'marcus@vancemarketing.com',
    role: 'User',
    status: 'Active',
    plan: 'Growth',
    signupDate: '2026-02-18',
    lastActive: '2 hours ago',
    projectsCount: 5,
    aiCreditsUsed: 14200,
    aiCreditsLimit: 25000,
    country: 'Canada',
    avatarInitials: 'MV'
  },
  {
    id: 'usr-4',
    name: 'Elena Rostova',
    email: 'elena@rostovatech.mock',
    role: 'Operator',
    status: 'Active',
    plan: 'Agency Pro',
    signupDate: '2026-03-04',
    lastActive: 'Yesterday',
    projectsCount: 11,
    aiCreditsUsed: 38900,
    aiCreditsLimit: 50000,
    country: 'Australia',
    avatarInitials: 'ER'
  },
  {
    id: 'usr-5',
    name: 'David Chen',
    email: 'david.chen@autodetailpro.net',
    role: 'User',
    status: 'Suspended',
    plan: 'Growth',
    signupDate: '2026-03-12',
    lastActive: '5 days ago',
    projectsCount: 2,
    aiCreditsUsed: 24900,
    aiCreditsLimit: 25000,
    country: 'United States',
    avatarInitials: 'DC'
  },
  {
    id: 'usr-6',
    name: 'Chloe Dubois',
    email: 'chloe@duboisboutique.fr',
    role: 'User',
    status: 'Active',
    plan: 'Free Starter',
    signupDate: '2026-04-01',
    lastActive: '3 hours ago',
    projectsCount: 1,
    aiCreditsUsed: 1200,
    aiCreditsLimit: 5000,
    country: 'France',
    avatarInitials: 'CD'
  }
];

export const INITIAL_ADMIN_PROJECTS: AdminProject[] = [
  {
    id: 'proj-1',
    name: 'Aura Luxury Spa & Wellness',
    ownerName: 'Mahbub Uzair',
    ownerEmail: 'mahbubauzair@gmail.com',
    type: 'website',
    category: 'Spas & Massage Centers',
    categoryId: 'spas-massage',
    status: 'deployed',
    generationStatus: 'Success',
    deploymentStatus: 'Live',
    domain: 'auraspa.branify.app',
    createdAt: '2026-04-10 09:20',
    updatedAt: '10 mins ago',
    modules: ['Services', 'Treatments', 'Therapists', 'Appointment Booking', 'Packages', 'WhatsApp'],
    fileCount: 28,
    generationDuration: '4.2s',
    logs: ['Schema compiled', 'Tailwind AST generated', 'WhatsApp webhook initialized', 'Edge deployed']
  },
  {
    id: 'proj-2',
    name: 'Precision Auto Works & Detailing',
    ownerName: 'Marcus Vance',
    ownerEmail: 'marcus@vancemarketing.com',
    type: 'web_app',
    category: 'Car Repair & Detailing Garages',
    categoryId: 'car-repair-detailing',
    status: 'active',
    generationStatus: 'Success',
    deploymentStatus: 'Live',
    domain: 'precisionautoworks.branify.app',
    createdAt: '2026-04-12 14:15',
    updatedAt: '2 hours ago',
    modules: ['Services', 'Service Packages', 'Booking', 'Vehicle Information', 'Pricing', 'WhatsApp'],
    fileCount: 42,
    generationDuration: '6.8s',
    logs: ['Database models mapped', 'Prisma client initialized', 'Edge API routes connected']
  },
  {
    id: 'proj-3',
    name: 'Metro Artisan Cafe & Roastery',
    ownerName: 'Sarah Jenkins',
    ownerEmail: 'sarah.j@auradesign.io',
    type: 'brand',
    category: 'Restaurants & Cafes',
    categoryId: 'restaurants-cafes',
    status: 'deployed',
    generationStatus: 'Success',
    deploymentStatus: 'Live',
    domain: 'metrocafe.branify.app',
    createdAt: '2026-04-13 11:00',
    updatedAt: 'Yesterday',
    modules: ['Menu', 'Categories', 'Online Ordering', 'Reservations', 'Location', 'WhatsApp'],
    fileCount: 19,
    generationDuration: '3.1s',
    logs: ['Brand palette approved', 'Visual QR menu generated', 'Deployed to edge CDN']
  },
  {
    id: 'proj-4',
    name: 'Apex Fitness & CrossFit Studio',
    ownerName: 'David Chen',
    ownerEmail: 'david.chen@autodetailpro.net',
    type: 'website',
    category: 'Fitness Trainers & Small Gyms',
    categoryId: 'fitness-gyms',
    status: 'suspended',
    generationStatus: 'Failed',
    deploymentStatus: 'Failed',
    domain: 'apexfit.branify.app',
    createdAt: '2026-04-11 16:40',
    updatedAt: '2 days ago',
    modules: ['Programs', 'Trainers', 'Memberships', 'Classes', 'Schedule', 'WhatsApp'],
    fileCount: 16,
    generationDuration: '12.4s',
    logs: ['Asset rendering timeout', 'Retry limit exceeded', 'Suspended by admin moderation']
  },
  {
    id: 'proj-5',
    name: 'Velvet Scissors Salon & Spa',
    ownerName: 'Elena Rostova',
    ownerEmail: 'elena@rostovatech.mock',
    type: 'website',
    category: 'Salons & Beauty Parlours',
    categoryId: 'salons-beauty',
    status: 'deployed',
    generationStatus: 'Success',
    deploymentStatus: 'Live',
    domain: 'velvetscissors.branify.app',
    createdAt: '2026-04-14 08:30',
    updatedAt: '4 hours ago',
    modules: ['Services', 'Stylists', 'Booking', 'Pricing', 'Gallery', 'WhatsApp'],
    fileCount: 31,
    generationDuration: '3.9s',
    logs: ['Dynamic gallery compressed', 'Appointment webhook validated', 'Deployed']
  }
];

export const INITIAL_ADMIN_MODELS: AdminAIModel[] = [
  {
    id: 'mod-1',
    provider: 'Google DeepMind',
    modelName: 'Gemini 2.5 Pro (Enterprise)',
    version: 'gemini-2.5-pro',
    status: 'Operational',
    capability: 'High-Reasoning & Chat',
    costIndicator: '$$',
    costPer1kTokens: 0.00125,
    averageLatencyMs: 340,
    monthlyUsageTokens: '184.2M',
    successRate: 99.8,
    isDefault: true,
    contextWindow: '1M tokens'
  },
  {
    id: 'mod-2',
    provider: 'VectorEngine Gateway',
    modelName: 'VectorEngine CodeSynth v4.2',
    version: 've-synth-4.2',
    status: 'Operational',
    capability: 'Code Gen & Layout',
    costIndicator: '$',
    costPer1kTokens: 0.0006,
    averageLatencyMs: 210,
    monthlyUsageTokens: '312.4M',
    successRate: 99.9,
    isDefault: true,
    contextWindow: '128k tokens'
  },
  {
    id: 'mod-3',
    provider: 'Anthropic',
    modelName: 'Claude 3.7 Sonnet',
    version: 'claude-3-7-sonnet-20250219',
    status: 'Operational',
    capability: 'High-Reasoning & Chat',
    costIndicator: '$$$',
    costPer1kTokens: 0.003,
    averageLatencyMs: 480,
    monthlyUsageTokens: '89.1M',
    successRate: 99.4,
    isDefault: false,
    contextWindow: '200k tokens'
  },
  {
    id: 'mod-4',
    provider: 'OpenAI',
    modelName: 'GPT-4o (Omni Realtime)',
    version: 'gpt-4o-2024-11-20',
    status: 'Operational',
    capability: 'Omni Multi-modal',
    costIndicator: '$$$',
    costPer1kTokens: 0.0025,
    averageLatencyMs: 410,
    monthlyUsageTokens: '142.8M',
    successRate: 99.6,
    isDefault: false,
    contextWindow: '128k tokens'
  },
  {
    id: 'mod-5',
    provider: 'DeepSeek',
    modelName: 'DeepSeek-V3 Reasoning',
    version: 'deepseek-chat-v3',
    status: 'Operational',
    capability: 'Fast Lead Extraction',
    costIndicator: '$',
    costPer1kTokens: 0.00028,
    averageLatencyMs: 290,
    monthlyUsageTokens: '205.6M',
    successRate: 98.9,
    isDefault: false,
    contextWindow: '64k tokens'
  },
  {
    id: 'mod-6',
    provider: 'xAI',
    modelName: 'Grok 2.0 Enterprise',
    version: 'grok-2-1212',
    status: 'Operational',
    capability: 'High-Reasoning & Chat',
    costIndicator: '$$',
    costPer1kTokens: 0.002,
    averageLatencyMs: 380,
    monthlyUsageTokens: '45.2M',
    successRate: 99.1,
    isDefault: false,
    contextWindow: '128k tokens'
  },
  {
    id: 'mod-7',
    provider: 'Qwen',
    modelName: 'Qwen 2.5 Coder 32B',
    version: 'qwen2.5-coder-32b',
    status: 'Operational',
    capability: 'Code Gen & Layout',
    costIndicator: '$',
    costPer1kTokens: 0.00035,
    averageLatencyMs: 260,
    monthlyUsageTokens: '78.5M',
    successRate: 99.3,
    isDefault: false,
    contextWindow: '128k tokens'
  }
];

export const INITIAL_ADMIN_DEPLOYMENTS: AdminDeployment[] = [
  {
    id: 'dep-101',
    projectName: 'Aura Luxury Spa & Wellness',
    ownerEmail: 'mahbubauzair@gmail.com',
    type: 'Production',
    status: 'Live',
    domain: 'auraspa.branify.app',
    version: 'v1.4.2',
    deployedAt: '12 minutes ago',
    durationSec: 14,
    edgeRegion: 'us-east (iad1)',
    sslStatus: 'Active & Encrypted',
    commitHash: '8b7f29a',
    rollbackAvailable: true
  },
  {
    id: 'dep-102',
    projectName: 'Precision Auto Works & Detailing',
    ownerEmail: 'marcus@vancemarketing.com',
    type: 'Production',
    status: 'Live',
    domain: 'precisionautoworks.branify.app',
    version: 'v2.1.0',
    deployedAt: '2 hours ago',
    durationSec: 22,
    edgeRegion: 'us-central (ord1)',
    sslStatus: 'Active & Encrypted',
    commitHash: '3e1c94d',
    rollbackAvailable: true
  },
  {
    id: 'dep-103',
    projectName: 'Metro Artisan Cafe & Roastery',
    ownerEmail: 'sarah.j@auradesign.io',
    type: 'Preview',
    status: 'Building',
    domain: 'metrocafe-preview.branify.app',
    version: 'v0.9.1',
    deployedAt: 'Just now',
    durationSec: 8,
    edgeRegion: 'eu-west (lhr1)',
    sslStatus: 'Active & Encrypted',
    commitHash: 'f49a882',
    rollbackAvailable: false
  },
  {
    id: 'dep-104',
    projectName: 'Apex Fitness & CrossFit',
    ownerEmail: 'david.chen@autodetailpro.net',
    type: 'Production',
    status: 'Failed',
    domain: 'apexfit.branify.app',
    version: 'v1.0.0',
    deployedAt: '2 days ago',
    durationSec: 45,
    edgeRegion: 'us-west (sfo1)',
    sslStatus: 'Error',
    commitHash: '1c09ab8',
    rollbackAvailable: true,
    errorMessage: 'Asset bundle size exceeded 25MB CDN limit. Optimization required.'
  },
  {
    id: 'dep-105',
    projectName: 'Velvet Scissors Salon & Spa',
    ownerEmail: 'elena@rostovatech.mock',
    type: 'Production',
    status: 'Live',
    domain: 'velvetscissors.branify.app',
    version: 'v1.0.8',
    deployedAt: '4 hours ago',
    durationSec: 16,
    edgeRegion: 'ap-southeast (sin1)',
    sslStatus: 'Active & Encrypted',
    commitHash: 'a71e549',
    rollbackAvailable: true
  }
];

export const INITIAL_HEALTH_SERVICES: AdminHealthService[] = [
  {
    id: 'srv-1',
    name: 'BRANIFY Web Application & Edge Frontend',
    category: 'Core Platform',
    status: 'Operational',
    uptime90d: 99.98,
    responseTimeMs: 42,
    lastChecked: '30s ago'
  },
  {
    id: 'srv-2',
    name: 'VectorEngine AI Gateway & Router',
    category: 'AI Gateway',
    status: 'Operational',
    uptime90d: 99.94,
    responseTimeMs: 185,
    lastChecked: '15s ago'
  },
  {
    id: 'srv-3',
    name: 'Supabase Database & Realtime Cluster',
    category: 'Database',
    status: 'Operational',
    uptime90d: 99.99,
    responseTimeMs: 28,
    lastChecked: '45s ago'
  },
  {
    id: 'srv-4',
    name: 'Authentication & JWT Token Service',
    category: 'Authentication',
    status: 'Operational',
    uptime90d: 100.0,
    responseTimeMs: 34,
    lastChecked: '1 min ago'
  },
  {
    id: 'srv-5',
    name: 'AI Model Inference Providers (Gemini / Claude / GPT / DeepSeek)',
    category: 'AI Gateway',
    status: 'Operational',
    uptime90d: 99.85,
    responseTimeMs: 320,
    lastChecked: '20s ago'
  },
  {
    id: 'srv-6',
    name: 'Global Edge Deployment & CDN Network',
    category: 'Infrastructure',
    status: 'Operational',
    uptime90d: 99.97,
    responseTimeMs: 18,
    lastChecked: '1 min ago'
  },
  {
    id: 'srv-7',
    name: 'Lead Discovery & Business Intelligence Radar',
    category: 'Core Platform',
    status: 'Operational',
    uptime90d: 99.89,
    responseTimeMs: 240,
    lastChecked: '2 mins ago'
  }
];

// Admin Service Abstraction
const ADMIN_AUTH_KEY = 'branify_admin_session';
const ADMIN_USERS_KEY = 'branify_admin_users';
const ADMIN_PROJECTS_KEY = 'branify_admin_projects';
const ADMIN_SETTINGS_KEY = 'branify_admin_settings';
const ADMIN_LOGS_KEY = 'branify_admin_logs';

export const AdminService = {
  // Authentication & Session
  isAuthenticated(): boolean {
    const session = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!session) return false;
    try {
      const parsed = JSON.parse(session);
      if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
        localStorage.removeItem(ADMIN_AUTH_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  },

  getCurrentAdmin(): { name: string; email: string; role: string; avatarInitials: string } | null {
    const session = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!session) return null;
    try {
      const parsed = JSON.parse(session);
      return parsed.admin || { name: 'Mahbub Uzair', email: 'mahbubauzair@gmail.com', role: 'Superadmin', avatarInitials: 'MU' };
    } catch {
      return null;
    }
  },

  async login(credentials: { emailOrUsername: string; password: string; remember: boolean }): Promise<{ success: boolean; message?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Flexible authentication abstraction allowing Superadmin or any configured admin email
    const trimmedUser = credentials.emailOrUsername.trim().toLowerCase();
    const isStandardAdmin =
      trimmedUser === 'admin' ||
      trimmedUser === 'admin@branify.ai' ||
      trimmedUser === 'mahbubauzair@gmail.com' ||
      trimmedUser.includes('admin');

    if (!isStandardAdmin && credentials.password.length < 4) {
      return { success: false, message: 'Invalid admin credentials or insufficient security role.' };
    }

    const sessionDuration = credentials.remember ? 30 * 24 * 60 * 60 * 1000 : 2 * 60 * 60 * 1000;
    const sessionData = {
      token: `adm_tok_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`,
      expiresAt: Date.now() + sessionDuration,
      admin: {
        name: trimmedUser.includes('mahbub') ? 'Mahbub Uzair' : 'Superadmin',
        email: trimmedUser.includes('@') ? trimmedUser : 'admin@branify.ai',
        role: 'Superadmin',
        avatarInitials: trimmedUser.includes('mahbub') ? 'MU' : 'SA'
      }
    };

    localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(sessionData));
    this.addAuditLog({
      action: 'ADMIN_AUTHENTICATION_SUCCESS',
      resource: 'Admin Console Portal',
      severity: 'Low',
      status: 'Success'
    });

    return { success: true };
  },

  logout(): void {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    this.addAuditLog({
      action: 'ADMIN_LOGOUT',
      resource: 'Admin Console Portal',
      severity: 'Low',
      status: 'Success'
    });
  },

  // Users Management
  getUsers(): AdminUser[] {
    const raw = localStorage.getItem(ADMIN_USERS_KEY);
    if (!raw) return INITIAL_ADMIN_USERS;
    try {
      return JSON.parse(raw);
    } catch {
      return INITIAL_ADMIN_USERS;
    }
  },

  updateUserStatus(userId: string, status: 'Active' | 'Suspended' | 'Pending'): AdminUser[] {
    const users = this.getUsers().map((u) => (u.id === userId ? { ...u, status } : u));
    localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(users));
    this.addAuditLog({
      action: `USER_STATUS_CHANGE_TO_${status.toUpperCase()}`,
      resource: `User ID: ${userId}`,
      severity: status === 'Suspended' ? 'High' : 'Medium',
      status: 'Success'
    });
    return users;
  },

  resetUserAccess(userId: string): { success: boolean; tempPasswordResetLink: string } {
    const link = `https://branify.app/auth/reset?token=rst_${Date.now()}`;
    this.addAuditLog({
      action: 'RESET_USER_CREDENTIALS',
      resource: `User ID: ${userId}`,
      severity: 'Medium',
      status: 'Success'
    });
    return { success: true, tempPasswordResetLink: link };
  },

  // Projects Management
  getProjects(): AdminProject[] {
    const raw = localStorage.getItem(ADMIN_PROJECTS_KEY);
    if (!raw) return INITIAL_ADMIN_PROJECTS;
    try {
      return JSON.parse(raw);
    } catch {
      return INITIAL_ADMIN_PROJECTS;
    }
  },

  updateProjectStatus(projectId: string, status: 'deployed' | 'active' | 'generating' | 'draft' | 'suspended'): AdminProject[] {
    const projects = this.getProjects().map((p) => (p.id === projectId ? { ...p, status } : p));
    localStorage.setItem(ADMIN_PROJECTS_KEY, JSON.stringify(projects));
    this.addAuditLog({
      action: `PROJECT_STATUS_UPDATE_${status.toUpperCase()}`,
      resource: `Project ID: ${projectId}`,
      severity: status === 'suspended' ? 'High' : 'Low',
      status: 'Success'
    });
    return projects;
  },

  // AI Models
  getAIModels(): AdminAIModel[] {
    return INITIAL_ADMIN_MODELS;
  },

  toggleModelStatus(modelId: string): AdminAIModel[] {
    return INITIAL_ADMIN_MODELS.map((m) =>
      m.id === modelId ? { ...m, status: m.status === 'Operational' ? 'Disabled' : 'Operational' } : m
    );
  },

  // Deployments
  getDeployments(): AdminDeployment[] {
    return INITIAL_ADMIN_DEPLOYMENTS;
  },

  async rollbackDeployment(deploymentId: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    this.addAuditLog({
      action: 'DEPLOYMENT_ROLLBACK_INITIATED',
      resource: `Deployment ID: ${deploymentId}`,
      severity: 'High',
      status: 'Success'
    });
    return true;
  },

  // System Health
  getHealthServices(): AdminHealthService[] {
    return INITIAL_HEALTH_SERVICES;
  },

  // Security
  getSecurityEvents(): AdminSecurityEvent[] {
    return INITIAL_SECURITY_EVENTS;
  },

  getBlockedIPs(): AdminBlockedIP[] {
    return INITIAL_BLOCKED_IPS;
  },

  unblockIP(ipId: string): AdminBlockedIP[] {
    const updated = INITIAL_BLOCKED_IPS.filter((ip) => ip.id !== ipId);
    this.addAuditLog({
      action: 'SECURITY_UNBLOCK_IP',
      target: `IP ID: ${ipId}`,
      severity: 'warning',
      actor: 'Superadmin',
      ip: '198.51.100.42',
      details: `IP ${ipId} was removed from firewall quarantine.`
    });
    return updated;
  },

  async runSecurityIntegrityScan(): Promise<{ clean: boolean; checksPassed: number; timestamp: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.addAuditLog({
      action: 'MANUAL_SECURITY_INTEGRITY_SCAN',
      target: 'Zero-Exposure Secret Sentinel',
      severity: 'info',
      actor: 'Superadmin',
      ip: '198.51.100.42',
      details: 'Automated CI zero-exposure credentials integrity scan passed.'
    });
    return {
      clean: true,
      checksPassed: 18,
      timestamp: 'Just now'
    };
  },

  // Audit Logs
  getAuditLogs(): AdminAuditLog[] {
    const raw = localStorage.getItem(ADMIN_LOGS_KEY);
    if (!raw) return INITIAL_AUDIT_LOGS;
    try {
      return JSON.parse(raw);
    } catch {
      return INITIAL_AUDIT_LOGS;
    }
  },

  addAuditLog(log: Omit<AdminAuditLog, 'id' | 'timestamp'>): void {
    const logs = this.getAuditLogs();
    const currentAdmin = this.getCurrentAdmin();
    const newLog: AdminAuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actor: log.actor || currentAdmin?.name || 'Superadmin',
      ip: log.ip || '198.51.100.42',
      ...log
    };
    const updated = [newLog, ...logs.slice(0, 99)];
    localStorage.setItem(ADMIN_LOGS_KEY, JSON.stringify(updated));
  },

  // Platform Settings
  getSettings(): AdminSystemSettings {
    const raw = localStorage.getItem(ADMIN_SETTINGS_KEY);
    if (!raw) return INITIAL_SYSTEM_SETTINGS;
    try {
      return JSON.parse(raw);
    } catch {
      return INITIAL_SYSTEM_SETTINGS;
    }
  },

  updateSettings(settings: AdminSystemSettings): void {
    localStorage.setItem(ADMIN_SETTINGS_KEY, JSON.stringify(settings));
    this.addAuditLog({
      action: 'PLATFORM_CONFIGURATION_UPDATED',
      target: 'Admin Global Settings',
      severity: 'critical',
      actor: 'Superadmin',
      ip: '198.51.100.42',
      details: `Updated platform settings for ${settings.platformName}`
    });
  },

  saveSettings(settings: AdminSystemSettings): void {
    this.updateSettings(settings);
  }
};
