import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// TEMPLATE DEMO MODE:
// When running as an integrated template inside BRANIFY, we intentionally
// disable Supabase so the Afroza app uses its local demo data instead of
// trying to authenticate against BRANIFY's Supabase (which does not have
// the Afroza-specific admin_users, appointments, or salon_settings tables).
//
// This means:
// - Any non-empty password logs into the admin dashboard (demo mode)
// - Appointments use the initialAppointments.ts demo data
// - Reviews, gallery, and config changes persist to localStorage only
//
// To enable real Supabase sync for a production deployment, set
// VITE_AFROZA_SUPABASE_URL and VITE_AFROZA_SUPABASE_KEY env vars
// pointing to the Afroza project's own Supabase instance.
const AFROZA_SUPABASE_URL = import.meta.env.VITE_AFROZA_SUPABASE_URL;
const AFROZA_SUPABASE_KEY = import.meta.env.VITE_AFROZA_SUPABASE_KEY;

export const isSupabaseConfigured = Boolean(
  AFROZA_SUPABASE_URL &&
  AFROZA_SUPABASE_KEY &&
  AFROZA_SUPABASE_URL !== 'https://your-project.supabase.co' &&
  !AFROZA_SUPABASE_URL.includes('your-supabase-url')
);

export const supabase = isSupabaseConfigured
  ? createClient(AFROZA_SUPABASE_URL!, AFROZA_SUPABASE_KEY!)
  : null;
