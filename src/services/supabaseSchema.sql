-- ==============================================================================
-- BRANIFY AI — Phase 3: Supabase Database Schema & Row Level Security (RLS)
-- Private Single-Owner Architecture
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    category_id TEXT NOT NULL,
    category_name TEXT NOT NULL,
    business_name TEXT NOT NULL,
    business_id UUID,
    type TEXT NOT NULL CHECK (type IN ('website', 'webapp', 'brand', 'full_bundle')),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'building', 'preview_ready', 'deployed', 'archived')),
    framework TEXT DEFAULT 'React 19 + Tailwind',
    pages JSONB DEFAULT '[]'::jsonb,
    deployment_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. BUSINESSES TABLE
CREATE TABLE IF NOT EXISTS public.businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    category_id TEXT NOT NULL,
    category_name TEXT NOT NULL,
    address TEXT,
    city TEXT NOT NULL,
    country TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    website TEXT,
    website_status TEXT NOT NULL DEFAULT 'NO WEBSITE' CHECK (website_status IN ('NO WEBSITE', 'WEAK WEBSITE', 'HAS WEBSITE')),
    rating NUMERIC(3, 2) DEFAULT 0.0,
    review_count INTEGER DEFAULT 0,
    opportunity_score INTEGER DEFAULT 0,
    analysis_report JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. LEADS TABLE
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    business_id UUID REFERENCES public.businesses(id) ON DELETE SET NULL,
    business_name TEXT NOT NULL,
    category_id TEXT NOT NULL,
    category_name TEXT NOT NULL,
    city TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'ANALYZED', 'PROPOSAL_READY', 'CONTACTED', 'CONVERTED', 'ARCHIVED')),
    opportunity_score INTEGER DEFAULT 0,
    phone TEXT,
    email TEXT,
    proposal_url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. GENERATIONS TABLE
CREATE TABLE IF NOT EXISTS public.generations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    type TEXT NOT NULL CHECK (type IN ('website', 'webapp', 'brand', 'component')),
    model_used TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued', 'processing', 'completed', 'failed')),
    prompt TEXT NOT NULL,
    output_ast JSONB DEFAULT '{}'::jsonb,
    input_tokens INTEGER DEFAULT 0,
    output_tokens INTEGER DEFAULT 0,
    duration_ms INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. DEPLOYMENTS TABLE
CREATE TABLE IF NOT EXISTS public.deployments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    project_name TEXT NOT NULL,
    environment TEXT NOT NULL DEFAULT 'production' CHECK (environment IN ('production', 'preview')),
    domain TEXT NOT NULL,
    ssl_status TEXT NOT NULL DEFAULT 'active' CHECK (ssl_status IN ('active', 'provisioning', 'pending')),
    status TEXT NOT NULL DEFAULT 'live' CHECK (status IN ('live', 'building', 'failed', 'rolled_back')),
    build_duration INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. ACTIVITY LOGS TABLE (Auditing & History)
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    target TEXT NOT NULL,
    severity TEXT NOT NULL DEFAULT 'info' CHECK (severity IN ('info', 'warning', 'critical')),
    ip_address TEXT,
    details TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. USER SETTINGS TABLE (Owner Global Config)
CREATE TABLE IF NOT EXISTS public.user_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    platform_name TEXT DEFAULT 'BRANIFY AI',
    default_ai_model TEXT DEFAULT 'gemini-2.5-pro',
    rate_limit_per_min INTEGER DEFAULT 60,
    auto_deploy_enabled BOOLEAN DEFAULT true,
    vector_engine_gateway_url TEXT,
    mfa_enabled BOOLEAN DEFAULT true,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. AI USAGE TABLE (Real-Time & Offline Inference Tracking)
CREATE TABLE IF NOT EXISTS public.ai_usage (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    provider TEXT NOT NULL,
    model TEXT NOT NULL,
    request_type TEXT NOT NULL,
    input_tokens INTEGER DEFAULT 0,
    output_tokens INTEGER DEFAULT 0,
    estimated_cost NUMERIC(10, 6) DEFAULT 0.000000,
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    is_connected BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==============================================================================
-- INDEXES FOR HIGH-PERFORMANCE QUERYING
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON public.projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category_id);
CREATE INDEX IF NOT EXISTS idx_businesses_user_id ON public.businesses(user_id);
CREATE INDEX IF NOT EXISTS idx_businesses_category ON public.businesses(category_id);
CREATE INDEX IF NOT EXISTS idx_businesses_city ON public.businesses(city);
CREATE INDEX IF NOT EXISTS idx_leads_user_id ON public.leads(user_id);
CREATE INDEX IF NOT EXISTS idx_leads_category ON public.leads(category_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_generations_user_id ON public.generations(user_id);
CREATE INDEX IF NOT EXISTS idx_deployments_user_id ON public.deployments(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_user_id ON public.activity_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_created_at ON public.activity_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_usage_user_id ON public.ai_usage(user_id);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES — STRICT OWNER ACCESS ONLY
-- ==============================================================================

-- Enable RLS across all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deployments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_usage ENABLE ROW LEVEL SECURITY;

-- 1. Projects Policies
CREATE POLICY "Owner has full access to own projects"
ON public.projects FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 2. Businesses Policies
CREATE POLICY "Owner has full access to own businesses"
ON public.businesses FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 3. Leads Policies
CREATE POLICY "Owner has full access to own leads"
ON public.leads FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 4. Generations Policies
CREATE POLICY "Owner has full access to own generations"
ON public.generations FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 5. Deployments Policies
CREATE POLICY "Owner has full access to own deployments"
ON public.deployments FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 6. Activity Logs Policies
CREATE POLICY "Owner has full access to own activity logs"
ON public.activity_logs FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 7. User Settings Policies
CREATE POLICY "Owner has full access to own user settings"
ON public.user_settings FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 8. AI Usage Policies
CREATE POLICY "Owner has full access to own ai usage logs"
ON public.ai_usage FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
