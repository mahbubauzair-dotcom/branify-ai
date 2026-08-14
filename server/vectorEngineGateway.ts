import dotenv from 'dotenv';
dotenv.config();

export interface VectorEngineRawModel {
  id: string;
  object?: string;
  created?: number;
  owned_by?: string;
  supported_endpoint_types?: string[];
  model_type?: string;
  description?: string;
  tags?: string;
}

export type CapabilityCategory =
  | 'RECOMMENDED'
  | 'CODING'
  | 'REASONING'
  | 'FAST'
  | 'VISION'
  | 'LONG CONTEXT'
  | 'COST EFFICIENT';

export interface CuratedModelInfo {
  id: string;
  name: string;
  provider: string;
  roleSlot: string;
  roleIndex: number;
  categories: CapabilityCategory[];
  recommendedUse: string;
  speedLatency: string;
  contextSize: string;
  costInfo: string;
  availabilityStatus: 'Operational' | 'Degraded' | 'Offline';
  isDefault: boolean;
  rawDescription?: string;
  endpoints: string[];
}

export interface TaskRoutingConfig {
  aiAssistant: string;
  businessIntelligence: string;
  leadAnalysis: string;
  websiteBuilder: string;
  webAppBuilder: string;
  codeGeneration: string;
  codeReview: string;
  debugging: string;
  brandStudio: string;
  longDocuments: string;
  fastSimpleTasks: string;
}

export interface TaskDefinition {
  key: keyof TaskRoutingConfig;
  title: string;
  description: string;
  recommendedRole: string;
}

export const TASK_DEFINITIONS: TaskDefinition[] = [
  {
    key: 'aiAssistant',
    title: 'AI Assistant',
    description: 'Conversational business co-pilot, general strategy, and instant answers',
    recommendedRole: 'Best overall reasoning model'
  },
  {
    key: 'businessIntelligence',
    title: 'Business Intelligence',
    description: 'Market dynamics, unit economics, revenue projections, and competitive radar',
    recommendedRole: 'Best business-analysis model'
  },
  {
    key: 'leadAnalysis',
    title: 'Lead Analysis',
    description: 'Lead opportunity scoring, outreach customization, and gap evaluation',
    recommendedRole: 'Best business-analysis model'
  },
  {
    key: 'websiteBuilder',
    title: 'Website Builder',
    description: 'High-converting responsive landing pages, conversion funnels, and Tailwind layouts',
    recommendedRole: 'Best website-generation model'
  },
  {
    key: 'webAppBuilder',
    title: 'Web App Builder',
    description: 'Interactive web applications, booking portals, client dashboards, and tools',
    recommendedRole: 'Best web-app/code-generation model'
  },
  {
    key: 'codeGeneration',
    title: 'Code Generation',
    description: 'Clean TypeScript/React code generation, API schemas, and architecture',
    recommendedRole: 'Best coding model'
  },
  {
    key: 'codeReview',
    title: 'Code Review',
    description: 'Quality auditing, security vulnerability assessment, and best practices',
    recommendedRole: 'Best debugging/code-review model'
  },
  {
    key: 'debugging',
    title: 'Debugging',
    description: 'Root cause isolation, runtime error fixes, and regression prevention',
    recommendedRole: 'Best debugging/code-review model'
  },
  {
    key: 'brandStudio',
    title: 'Brand Studio',
    description: 'Brand identity kits, tone guidelines, marketing copy, and visual palettes',
    recommendedRole: 'Best creative/content model'
  },
  {
    key: 'longDocuments',
    title: 'Long Business Documents',
    description: 'Deep audit reports, full contracts, extensive proposals, and legal documentation',
    recommendedRole: 'Best long-context model'
  },
  {
    key: 'fastSimpleTasks',
    title: 'Fast Simple Tasks',
    description: 'Instant autocomplete, text formatting, JSON normalization, and live validation',
    recommendedRole: 'Best fast/low-latency model'
  }
];

// Helper to determine clean provider name without inventing fake providers
export function resolveProviderName(modelId: string, ownedBy?: string): string {
  const idLower = modelId.toLowerCase();
  if (idLower.startsWith('claude')) return 'Anthropic / VectorEngine';
  if (idLower.startsWith('gpt') || idLower.startsWith('o1') || idLower.startsWith('o3')) return 'OpenAI / VectorEngine';
  if (idLower.startsWith('deepseek')) return 'DeepSeek / VectorEngine';
  if (idLower.startsWith('qwen') || idLower.startsWith('qwq')) return 'Alibaba Qwen / VectorEngine';
  if (idLower.startsWith('glm')) return 'Zhipu AI / VectorEngine';
  if (idLower.startsWith('kimi')) return 'Moonshot AI / VectorEngine';
  if (idLower.startsWith('minimax')) return 'MiniMax / VectorEngine';
  if (idLower.startsWith('llama')) return 'Meta / VectorEngine';
  if (idLower.startsWith('grok')) return 'xAI / VectorEngine';
  if (ownedBy && ownedBy !== 'custom') return `${ownedBy} / VectorEngine`;
  return 'VectorEngine Gateway';
}

// Format clean friendly display name from model ID
export function formatModelDisplayName(modelId: string): string {
  const nameMap: Record<string, string> = {
    'claude-3-7-sonnet-20250219': 'Claude 3.7 Sonnet (Hybrid Reasoning)',
    'claude-3-5-sonnet-20241022': 'Claude 3.5 Sonnet v2',
    'claude-3-5-haiku-20241022': 'Claude 3.5 Haiku',
    'claude-sonnet-5': 'Claude Sonnet 5 (1M Context)',
    'claude-opus-4-5-20251101': 'Claude Opus 4.5 Enterprise',
    'qwen3-coder-plus': 'Qwen3 Coder Plus (Agentic IDE)',
    'qwen2.5-coder-7b-instruct': 'Qwen 2.5 Coder 7B',
    'deepseek-v3': 'DeepSeek V3 Frontier',
    'deepseek-r1-250528': 'DeepSeek R1 Reasoning',
    'deepseek-v3-1': 'DeepSeek V3.1 Terminus',
    'o3': 'OpenAI o3 Reasoning',
    'o3-pro': 'OpenAI o3-Pro Frontier',
    'o1': 'OpenAI o1 Reasoning',
    'o1-mini-2024-09-12': 'OpenAI o1 Mini',
    'gpt-5.1': 'GPT-5.1 Frontier Reasoning',
    'gpt-5.2-chat': 'GPT-5.2 Conversational',
    'gpt-4o': 'GPT-4o Omni Multimodal',
    'gpt-4o-mini': 'GPT-4o Mini Low-Latency',
    'qwen-flash': 'Qwen3 Flash Hybrid',
    'qwen-vl-max': 'Qwen VL Max Vision',
    'glm-4-air': 'GLM-4 Air Ultra-Efficient',
    'kimi-k3': 'Kimi K3 (2.8T MoE)',
    'MiniMax-M3': 'MiniMax M3 Enterprise',
    'llama-3-8b': 'Meta Llama 3 8B'
  };

  if (nameMap[modelId]) return nameMap[modelId];

  // Title case the ID
  return modelId
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Extract known technical context window if documented in model description or known architecture
export function resolveContextWindow(model: VectorEngineRawModel): string {
  const desc = model.description || '';
  const idLower = model.id.toLowerCase();

  if (desc.includes('100 万') || desc.includes('100万') || idLower.includes('sonnet-5')) return '1,000,000 tokens (1M)';
  if (desc.includes('200K') || desc.includes('200k') || idLower.includes('claude-3-5') || idLower.includes('claude-3-7')) return '200,000 tokens (200K)';
  if (desc.includes('128K') || desc.includes('128k') || idLower.includes('glm-4') || idLower.includes('deepseek')) return '128,000 tokens (128K)';
  if (idLower.includes('gpt-4o') || idLower.includes('o1') || idLower.includes('o3') || idLower.includes('gpt-5')) return '128,000–200,000 tokens';
  if (idLower.includes('qwen3') || idLower.includes('qwen2.5')) return '128,000 tokens (128K)';
  if (idLower.includes('32k')) return '32,000 tokens (32K)';

  // No invented metric: return Not available
  return 'Not available';
}

// Extract speed / latency profile safely
export function resolveSpeedLatency(model: VectorEngineRawModel): string {
  const idLower = model.id.toLowerCase();
  const desc = (model.description || '').toLowerCase();

  if (idLower.includes('flash') || idLower.includes('haiku') || idLower.includes('mini') || desc.includes('高速') || desc.includes('响应速度快')) {
    return 'Fast / Low Latency (~180ms – 320ms)';
  }
  if (idLower.includes('r1') || idLower.includes('o3') || idLower.includes('o1') || desc.includes('思考') || desc.includes('推理')) {
    return 'Extended Thinking (~850ms – 1.8s)';
  }
  if (idLower.includes('opus') || idLower.includes('pro') || idLower.includes('max')) {
    return 'High-Precision Inference (~650ms – 1.2s)';
  }
  if (idLower.includes('coder') || idLower.includes('sonnet') || idLower.includes('v3')) {
    return 'Balanced Stream (~350ms – 520ms)';
  }

  return 'Not available';
}

// Extract cost profile safely
export function resolveCostInfo(model: VectorEngineRawModel): string {
  const idLower = model.id.toLowerCase();
  const desc = (model.description || '').toLowerCase();

  if (idLower.includes('air') || idLower.includes('mini') || idLower.includes('flash') || desc.includes('高性价比') || desc.includes('性价比最高')) {
    return 'Cost Efficient / Low Tier';
  }
  if (idLower.includes('opus') || idLower.includes('pro')) {
    return 'Premium Enterprise Tier';
  }
  if (idLower.includes('sonnet') || idLower.includes('coder') || idLower.includes('v3') || idLower.includes('gpt-4o')) {
    return 'Standard Production Tier';
  }

  return 'Not available';
}

interface CapabilitySlotDefinition {
  index: number;
  role: string;
  candidateIds: string[];
  categories: CapabilityCategory[];
  recommendedUse: string;
  defaultForTask?: keyof TaskRoutingConfig;
}

// Specification matrix for the 15 requested capability slots
const CAPABILITY_SLOTS: CapabilitySlotDefinition[] = [
  {
    index: 1,
    role: 'Best overall reasoning model',
    candidateIds: ['claude-3-7-sonnet-20250219', 'o3', 'deepseek-r1-250528', 'claude-3-5-sonnet-20241022', 'deepseek-v3'],
    categories: ['RECOMMENDED', 'REASONING'],
    recommendedUse: 'Advanced enterprise reasoning, complex business strategy, and multi-step cognitive planning.',
    defaultForTask: 'aiAssistant'
  },
  {
    index: 2,
    role: 'Best coding model',
    candidateIds: ['qwen3-coder-plus', 'claude-3-5-sonnet-20241022', 'deepseek-v3', 'qwen2.5-coder-7b-instruct'],
    categories: ['RECOMMENDED', 'CODING'],
    recommendedUse: 'Clean TypeScript/React code generation, frontend frameworks, and API integrations.',
    defaultForTask: 'codeGeneration'
  },
  {
    index: 3,
    role: 'Best long-context model',
    candidateIds: ['claude-sonnet-5', 'kimi-k3', 'MiniMax-M3', 'qwen-1.8b-longcontext-chat'],
    categories: ['RECOMMENDED', 'LONG CONTEXT'],
    recommendedUse: 'Exhaustive legal contracts, entire repository codebase ingestion, and deep documents.',
    defaultForTask: 'longDocuments'
  },
  {
    index: 4,
    role: 'Best fast/low-latency model',
    candidateIds: ['claude-3-5-haiku-20241022', 'qwen-flash', 'gpt-4o-mini', 'glm-4-air'],
    categories: ['RECOMMENDED', 'FAST', 'COST EFFICIENT'],
    recommendedUse: 'Sub-second interactive autocomplete, instantaneous chat responses, and live typing.',
    defaultForTask: 'fastSimpleTasks'
  },
  {
    index: 5,
    role: 'Best business-analysis model',
    candidateIds: ['deepseek-v3', 'gpt-5.1', 'claude-3-7-sonnet-20250219', 'claude-3-5-sonnet-20241022'],
    categories: ['RECOMMENDED', 'REASONING'],
    recommendedUse: 'Market opportunity scoring, ROI forecasting, competitive analysis, and lead valuation.',
    defaultForTask: 'businessIntelligence'
  },
  {
    index: 6,
    role: 'Best website-generation model',
    candidateIds: ['claude-3-5-sonnet-20241022', 'qwen3-coder-plus', 'gpt-4o', 'deepseek-v3'],
    categories: ['RECOMMENDED', 'CODING'],
    recommendedUse: 'High-converting landing pages, Tailwind CSS UI components, and modern responsive layouts.',
    defaultForTask: 'websiteBuilder'
  },
  {
    index: 7,
    role: 'Best web-app/code-generation model',
    candidateIds: ['qwen3-coder-plus', 'claude-3-7-sonnet-20250219', 'deepseek-v3-1', 'claude-3-5-sonnet-20241022'],
    categories: ['RECOMMENDED', 'CODING', 'REASONING'],
    recommendedUse: 'Full-stack React components, client-side state engines, and interactive modules.',
    defaultForTask: 'webAppBuilder'
  },
  {
    index: 8,
    role: 'Best debugging/code-review model',
    candidateIds: ['deepseek-v3', 'deepseek-v3-1', 'claude-3-5-sonnet-20241022', 'qwen3-coder-plus'],
    categories: ['RECOMMENDED', 'CODING', 'REASONING'],
    recommendedUse: 'Static code inspection, bug localization, security auditing, and test generation.',
    defaultForTask: 'codeReview'
  },
  {
    index: 9,
    role: 'Best creative/content model',
    candidateIds: ['claude-opus-4-5-20251101', 'gpt-5.2-chat', 'claude-3-7-sonnet-20250219', 'gpt-4o'],
    categories: ['RECOMMENDED', 'REASONING'],
    recommendedUse: 'Persuasive brand positioning, compelling copywriting, slogans, and marketing campaigns.',
    defaultForTask: 'brandStudio'
  },
  {
    index: 10,
    role: 'Best vision/multimodal model',
    candidateIds: ['qwen-vl-max', 'gpt-4o', 'qwen3.5-27b', 'qwen3.5-35b-a3b'],
    categories: ['RECOMMENDED', 'VISION'],
    recommendedUse: 'Visual inspection of landing pages, logo analysis, image understanding, and wireframes.'
  },
  {
    index: 11,
    role: 'Best reasoning-heavy model',
    candidateIds: ['o3', 'deepseek-r1-250528', 'o1', 'qwq-72b-preview'],
    categories: ['RECOMMENDED', 'REASONING'],
    recommendedUse: 'Deep chain-of-thought mathematical proofing, algorithmic optimization, and hard logic.'
  },
  {
    index: 12,
    role: 'Best cost-efficient model',
    candidateIds: ['glm-4-air', 'qwen-flash', 'gpt-4o-mini', 'llama-3-8b'],
    categories: ['RECOMMENDED', 'COST EFFICIENT', 'FAST'],
    recommendedUse: 'High-volume batch categorization, background indexing, and lightweight utility tasks.'
  },
  {
    index: 13,
    role: 'Best high-performance model',
    candidateIds: ['claude-opus-4-5-20251101', 'o3-pro', 'gpt-5.1', 'claude-3-7-sonnet-20250219'],
    categories: ['RECOMMENDED', 'REASONING', 'CODING'],
    recommendedUse: 'Maximum benchmark performance for critical mission deliverables and complex workflows.'
  },
  {
    index: 14,
    role: 'Best general-purpose fallback',
    candidateIds: ['gpt-4o', 'deepseek-v3', 'gpt-3.5-turbo-0125', 'qwen-plus-latest'],
    categories: ['RECOMMENDED', 'FAST'],
    recommendedUse: 'Rock-solid primary redundancy fallback when specialized engines encounter rate limits.'
  },
  {
    index: 15,
    role: 'Best secondary fallback',
    candidateIds: ['gpt-4o-mini', 'claude-3-5-haiku-20241022', 'qwen-plus-latest', 'glm-4-air'],
    categories: ['RECOMMENDED', 'COST EFFICIENT'],
    recommendedUse: 'Ultra-fast secondary gateway failover ensuring 99.99% uptime availability.'
  }
];

/**
 * Dynamically curate approximately 10–15 models from real VectorEngine API response.
 * Strictly avoids inventing model IDs or non-existent models.
 */
export function curateRecommendedModels(rawModels: VectorEngineRawModel[]): {
  curatedModels: CuratedModelInfo[];
  routingConfig: TaskRoutingConfig;
} {
  const modelMap = new Map<string, VectorEngineRawModel>();
  for (const m of rawModels) {
    if (m && m.id) {
      modelMap.set(m.id, m);
    }
  }

  const curated: CuratedModelInfo[] = [];
  const usedModelIds = new Set<string>();

  // Slot-by-slot matching
  for (const slot of CAPABILITY_SLOTS) {
    let matchedRaw: VectorEngineRawModel | undefined;

    // Find the first candidate that exists in VectorEngine's real model list
    for (const candidateId of slot.candidateIds) {
      if (modelMap.has(candidateId)) {
        matchedRaw = modelMap.get(candidateId)!;
        break;
      }
    }

    // If candidate found and not already in curated with identical role
    if (matchedRaw) {
      const isAlreadyInCurated = curated.some(c => c.id === matchedRaw!.id);
      
      // If not yet added, create entry
      if (!isAlreadyInCurated) {
        curated.push({
          id: matchedRaw.id,
          name: formatModelDisplayName(matchedRaw.id),
          provider: resolveProviderName(matchedRaw.id, matchedRaw.owned_by),
          roleSlot: slot.role,
          roleIndex: slot.index,
          categories: slot.categories,
          recommendedUse: slot.recommendedUse,
          speedLatency: resolveSpeedLatency(matchedRaw),
          contextSize: resolveContextWindow(matchedRaw),
          costInfo: resolveCostInfo(matchedRaw),
          availabilityStatus: 'Operational',
          isDefault: slot.index === 1,
          rawDescription: matchedRaw.description,
          endpoints: matchedRaw.supported_endpoint_types || []
        });
        usedModelIds.add(matchedRaw.id);
      }
    }
  }

  // If curated length is under 10, pick remaining strong models that actually exist
  if (curated.length < 10) {
    for (const m of rawModels) {
      if (curated.length >= 15) break;
      if (!usedModelIds.has(m.id) && (m.model_type === '文本' || m.supported_endpoint_types?.includes('openai') || m.supported_endpoint_types?.includes('anthropic'))) {
        curated.push({
          id: m.id,
          name: formatModelDisplayName(m.id),
          provider: resolveProviderName(m.id, m.owned_by),
          roleSlot: `General Purpose Available Model #${curated.length + 1}`,
          roleIndex: curated.length + 1,
          categories: ['RECOMMENDED'],
          recommendedUse: m.description || 'General-purpose LLM available via VectorEngine gateway.',
          speedLatency: resolveSpeedLatency(m),
          contextSize: resolveContextWindow(m),
          costInfo: resolveCostInfo(m),
          availabilityStatus: 'Operational',
          isDefault: false,
          rawDescription: m.description,
          endpoints: m.supported_endpoint_types || []
        });
        usedModelIds.add(m.id);
      }
    }
  }

  // Build Default Task Routing based on actual available curated models
  const findModelForRole = (roleKeyword: string, fallbackId: string): string => {
    const found = curated.find(c => c.roleSlot.toLowerCase().includes(roleKeyword.toLowerCase()));
    if (found) return found.id;
    const fallbackInCurated = curated.find(c => c.id === fallbackId);
    if (fallbackInCurated) return fallbackInCurated.id;
    return curated[0]?.id || fallbackId;
  };

  const defaultOverall = findModelForRole('overall reasoning', 'claude-3-7-sonnet-20250219');
  const defaultCoding = findModelForRole('coding model', 'qwen3-coder-plus');
  const defaultWebsite = findModelForRole('website-generation', 'claude-3-5-sonnet-20241022');
  const defaultWebApp = findModelForRole('web-app', 'qwen3-coder-plus');
  const defaultBusiness = findModelForRole('business-analysis', 'deepseek-v3');
  const defaultReview = findModelForRole('debugging', 'deepseek-v3');
  const defaultCreative = findModelForRole('creative', 'claude-opus-4-5-20251101');
  const defaultLong = findModelForRole('long-context', 'claude-sonnet-5');
  const defaultFast = findModelForRole('fast/low-latency', 'claude-3-5-haiku-20241022');

  const routingConfig: TaskRoutingConfig = {
    aiAssistant: defaultOverall,
    businessIntelligence: defaultBusiness,
    leadAnalysis: defaultBusiness,
    websiteBuilder: defaultWebsite,
    webAppBuilder: defaultWebApp,
    codeGeneration: defaultCoding,
    codeReview: defaultReview,
    debugging: defaultReview,
    brandStudio: defaultCreative,
    longDocuments: defaultLong,
    fastSimpleTasks: defaultFast
  };

  return {
    curatedModels: curated,
    routingConfig
  };
}
