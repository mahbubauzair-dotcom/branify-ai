import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Retrieve Supabase environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseUrl.trim() !== '' &&
    !supabaseUrl.includes('placeholder') &&
    supabaseAnonKey &&
    supabaseAnonKey.trim() !== ''
  );
};

// Safe storage handler that falls back to memory storage if localStorage is blocked/unavailable
const getSafeStorage = () => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Test read/write
      const testKey = '__sb_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    }
  } catch (e) {
    // localStorage restricted or unavailable
  }

  const memoryStore: Record<string, string> = {};
  return {
    getItem: (key: string) => memoryStore[key] ?? null,
    setItem: (key: string, value: string) => { memoryStore[key] = value; },
    removeItem: (key: string) => { delete memoryStore[key]; }
  };
};

// Create the Supabase client instance
// If credentials are not provided yet in .env, we initialize safely with fallback values to prevent runtime crashes
export const supabase: SupabaseClient = createClient(
  isSupabaseConfigured() ? supabaseUrl : 'https://placeholder.supabase.co',
  isSupabaseConfigured() ? supabaseAnonKey : 'placeholder-anon-key',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      storage: getSafeStorage()
    },
    global: {
      fetch: (input, init) => window.fetch(input, init)
    }
  }
);
