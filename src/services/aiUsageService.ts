import { supabase, isSupabaseConfigured } from './supabaseClient';

export interface AIUsageRecord {
  id: string;
  provider: 'Google Gemini' | 'VectorEngine Gateway' | 'Anthropic' | 'OpenAI' | 'DeepSeek' | 'xAI Grok' | 'Qwen';
  model: string;
  requestType: 'Website Generation' | 'Web App Synthesizer' | 'Brand Identity' | 'Business Radar' | 'Chat Assistance';
  inputTokens: number;
  outputTokens: number;
  estimatedCost: number; // in USD
  projectId?: string;
  isConnected: boolean;
  statusText?: string;
  createdAt: string;
}

export interface AIModelStatus {
  id: string;
  provider: string;
  model: string;
  category: 'LLM Reasoning' | 'Code Synthesis' | 'Multimodal' | 'Fast Routing';
  isConnected: boolean;
  statusText: 'Connected (Live)' | 'API Key Not Configured' | 'Gateway Pending' | 'Offline';
  latencyMs?: number;
  contextWindow: string;
}

const LOCAL_AI_USAGE_KEY = 'branify_ai_usage_history';

export const AI_MODELS_REGISTRY: AIModelStatus[] = [
  {
    id: 'mod-gemini-25-pro',
    provider: 'Google DeepMind',
    model: 'Gemini 2.5 Pro',
    category: 'LLM Reasoning',
    isConnected: true, // Connected via Google AI Studio environment
    statusText: 'Connected (Live)',
    latencyMs: 380,
    contextWindow: '1,000,000 tokens'
  },
  {
    id: 'mod-gemini-25-flash',
    provider: 'Google DeepMind',
    model: 'Gemini 2.5 Flash',
    category: 'Fast Routing',
    isConnected: true,
    statusText: 'Connected (Live)',
    latencyMs: 195,
    contextWindow: '1,000,000 tokens'
  },
  {
    id: 'mod-vectorengine-v4',
    provider: 'VectorEngine Gateway',
    model: 'CodeSynth v4.2 Internal',
    category: 'Code Synthesis',
    isConnected: false, // Phase 4 preparation
    statusText: 'Gateway Pending',
    contextWindow: '256,000 tokens'
  },
  {
    id: 'mod-claude-37',
    provider: 'Anthropic',
    model: 'Claude 3.7 Sonnet',
    category: 'Code Synthesis',
    isConnected: false,
    statusText: 'API Key Not Configured',
    contextWindow: '200,000 tokens'
  },
  {
    id: 'mod-gpt4o',
    provider: 'OpenAI',
    model: 'GPT-4o',
    category: 'Multimodal',
    isConnected: false,
    statusText: 'API Key Not Configured',
    contextWindow: '128,000 tokens'
  },
  {
    id: 'mod-deepseek-v3',
    provider: 'DeepSeek',
    model: 'DeepSeek-V3',
    category: 'Fast Routing',
    isConnected: false,
    statusText: 'API Key Not Configured',
    contextWindow: '64,000 tokens'
  }
];

export const aiUsageService = {
  /**
   * Log an AI token generation record
   */
  async trackUsage(record: Omit<AIUsageRecord, 'id' | 'createdAt'>): Promise<void> {
    const fullRecord: AIUsageRecord = {
      id: `ai-use-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      createdAt: new Date().toISOString(),
      ...record
    };

    // Cache locally
    try {
      const raw = localStorage.getItem(LOCAL_AI_USAGE_KEY);
      const list: AIUsageRecord[] = raw ? JSON.parse(raw) : [];
      const updated = [fullRecord, ...list].slice(0, 300);
      localStorage.setItem(LOCAL_AI_USAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage error
    }

    // Persist to Supabase if connected
    if (isSupabaseConfigured()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData?.user?.id;
        if (userId) {
          await supabase.from('ai_usage').insert({
            user_id: userId,
            provider: fullRecord.provider,
            model: fullRecord.model,
            request_type: fullRecord.requestType,
            input_tokens: fullRecord.inputTokens,
            output_tokens: fullRecord.outputTokens,
            estimated_cost: fullRecord.estimatedCost,
            project_id: fullRecord.projectId || null,
            is_connected: fullRecord.isConnected
          });
        }
      } catch (err) {
        console.warn('Supabase AI usage sync error:', err);
      }
    }
  },

  /**
   * Get all registered models and their connection states
   */
  getModels(): AIModelStatus[] {
    return AI_MODELS_REGISTRY;
  },

  /**
   * Get recorded usage logs
   */
  async getUsageLogs(): Promise<AIUsageRecord[]> {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('ai_usage')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);

        if (!error && data && data.length > 0) {
          return data.map((d) => ({
            id: d.id,
            provider: d.provider,
            model: d.model,
            requestType: d.request_type,
            inputTokens: d.input_tokens,
            outputTokens: d.output_tokens,
            estimatedCost: Number(d.estimated_cost),
            projectId: d.project_id,
            isConnected: d.is_connected,
            createdAt: d.created_at
          }));
        }
      } catch {
        // Fallback to local
      }
    }

    try {
      const raw = localStorage.getItem(LOCAL_AI_USAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // Fallback
    }

    return [
      {
        id: 'use-1',
        provider: 'Google Gemini',
        model: 'Gemini 2.5 Pro',
        requestType: 'Website Generation',
        inputTokens: 1420,
        outputTokens: 4850,
        estimatedCost: 0.0052,
        isConnected: true,
        createdAt: '2026-08-14 06:45:10'
      },
      {
        id: 'use-2',
        provider: 'Google Gemini',
        model: 'Gemini 2.5 Flash',
        requestType: 'Business Radar',
        inputTokens: 890,
        outputTokens: 1240,
        estimatedCost: 0.0008,
        isConnected: true,
        createdAt: '2026-08-14 05:20:15'
      }
    ];
  }
};
