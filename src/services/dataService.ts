import { supabase, isSupabaseConfigured } from './supabaseClient';
import { activityLogger } from './activityLogger';
import { OwnerProfile, OwnerSession } from './authService';

export const dataService = {
  // ============================================================================
  // 1. PROJECTS CRUD
  // ============================================================================
  async getProjects() {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('updated_at', { ascending: false });
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase getProjects fallback:', err);
      }
    }
    const raw = localStorage.getItem('branify_projects');
    return raw ? JSON.parse(raw) : [];
  },

  async saveProject(project: any) {
    // 1. Cache locally
    try {
      const existing = await this.getProjects();
      const idx = existing.findIndex((p: any) => p.id === project.id);
      let updated;
      if (idx >= 0) {
        updated = [...existing];
        updated[idx] = { ...existing[idx], ...project, updated_at: new Date().toISOString() };
      } else {
        updated = [{ ...project, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }, ...existing];
      }
      localStorage.setItem('branify_projects', JSON.stringify(updated));
    } catch {
      // Local fallback
    }

    // 2. Sync to Supabase
    if (isSupabaseConfigured()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData?.user?.id;
        if (userId) {
          await supabase.from('projects').upsert({
            id: project.id,
            user_id: userId,
            name: project.name,
            category_id: project.categoryId || project.category_id,
            category_name: project.categoryName || project.category_name,
            business_name: project.businessName || project.business_name,
            type: project.type,
            status: project.status,
            framework: project.framework,
            pages: project.pages,
            deployment_url: project.deploymentUrl || project.deployment_url,
            updated_at: new Date().toISOString()
          });
        }
      } catch (err) {
        console.warn('Supabase upsert project error:', err);
      }
    }

    activityLogger.log({
      action: 'PROJECT_CREATED',
      target: `Project: ${project.name}`,
      severity: 'info',
      details: `Project in category ${project.categoryName || project.category_id} synchronized.`
    });
  },

  // ============================================================================
  // 2. BUSINESSES CRUD
  // ============================================================================
  async getBusinesses() {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('businesses')
          .select('*')
          .order('opportunity_score', { ascending: false });
        if (!error && data && data.length > 0) return data;
      } catch (err) {
        console.warn('Supabase getBusinesses fallback:', err);
      }
    }
    const raw = localStorage.getItem('branify_businesses');
    return raw ? JSON.parse(raw) : [];
  },

  async saveBusiness(biz: any) {
    try {
      const existing = await this.getBusinesses();
      const idx = existing.findIndex((b: any) => b.id === biz.id);
      let updated;
      if (idx >= 0) {
        updated = [...existing];
        updated[idx] = { ...existing[idx], ...biz, updated_at: new Date().toISOString() };
      } else {
        updated = [{ ...biz, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }, ...existing];
      }
      localStorage.setItem('branify_businesses', JSON.stringify(updated));
    } catch {
      // Local fallback
    }

    if (isSupabaseConfigured()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData?.user?.id;
        if (userId) {
          await supabase.from('businesses').upsert({
            id: biz.id,
            user_id: userId,
            name: biz.name,
            category_id: biz.categoryId || biz.category_id,
            category_name: biz.categoryName || biz.category_name,
            address: biz.address,
            city: biz.city,
            country: biz.country,
            phone: biz.phone,
            email: biz.email,
            website: biz.website,
            website_status: biz.websiteStatus || biz.website_status,
            rating: biz.rating,
            review_count: biz.reviewCount || biz.review_count,
            opportunity_score: biz.opportunityScore || biz.opportunity_score,
            analysis_report: biz.analysisReport || biz.analysis_report,
            updated_at: new Date().toISOString()
          });
        }
      } catch (err) {
        console.warn('Supabase upsert business error:', err);
      }
    }

    activityLogger.log({
      action: 'BUSINESS_ANALYZED',
      target: `Business: ${biz.name}`,
      severity: 'info',
      details: `Analyzed ${biz.name} in ${biz.city} (${biz.websiteStatus || 'NO WEBSITE'})`
    });
  },

  // ============================================================================
  // 3. LEADS CRUD
  // ============================================================================
  async getLeads() {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('leads')
          .select('*')
          .order('opportunity_score', { ascending: false });
        if (!error && data && data.length > 0) return data;
      } catch (err) {
        console.warn('Supabase getLeads fallback:', err);
      }
    }
    const raw = localStorage.getItem('branify_leads');
    return raw ? JSON.parse(raw) : [];
  },

  async saveLead(lead: any) {
    try {
      const existing = await this.getLeads();
      const idx = existing.findIndex((l: any) => l.id === lead.id);
      let updated;
      if (idx >= 0) {
        updated = [...existing];
        updated[idx] = { ...existing[idx], ...lead, updated_at: new Date().toISOString() };
      } else {
        updated = [{ ...lead, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }, ...existing];
      }
      localStorage.setItem('branify_leads', JSON.stringify(updated));
    } catch {
      // Local fallback
    }

    if (isSupabaseConfigured()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData?.user?.id;
        if (userId) {
          await supabase.from('leads').upsert({
            id: lead.id,
            user_id: userId,
            business_name: lead.businessName || lead.business_name,
            category_id: lead.categoryId || lead.category_id,
            category_name: lead.categoryName || lead.category_name,
            city: lead.city,
            status: lead.status,
            opportunity_score: lead.opportunityScore || lead.opportunity_score,
            phone: lead.phone,
            email: lead.email,
            proposal_url: lead.proposalUrl || lead.proposal_url,
            notes: lead.notes,
            updated_at: new Date().toISOString()
          });
        }
      } catch (err) {
        console.warn('Supabase upsert lead error:', err);
      }
    }

    activityLogger.log({
      action: 'LEAD_CREATED',
      target: `Lead: ${lead.businessName || lead.name}`,
      severity: 'info',
      details: `Saved lead opportunity with score ${lead.opportunityScore || 85}%`
    });
  },

  // ============================================================================
  // 4. DEPLOYMENTS CRUD
  // ============================================================================
  async getDeployments() {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('deployments')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data && data.length > 0) return data;
      } catch (err) {
        console.warn('Supabase getDeployments fallback:', err);
      }
    }
    const raw = localStorage.getItem('branify_deployments');
    return raw ? JSON.parse(raw) : [];
  },

  async logDeployment(deployment: any) {
    try {
      const existing = await this.getDeployments();
      const updated = [{ ...deployment, created_at: new Date().toISOString() }, ...existing];
      localStorage.setItem('branify_deployments', JSON.stringify(updated));
    } catch {
      // Fallback
    }

    if (isSupabaseConfigured()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData?.user?.id;
        if (userId) {
          await supabase.from('deployments').insert({
            id: deployment.id,
            user_id: userId,
            project_id: deployment.projectId || deployment.project_id,
            project_name: deployment.projectName || deployment.project_name,
            environment: deployment.environment || 'production',
            domain: deployment.domain,
            ssl_status: deployment.sslStatus || 'active',
            status: deployment.status || 'live',
            build_duration: deployment.buildDuration || 14
          });
        }
      } catch (err) {
        console.warn('Supabase log deployment error:', err);
      }
    }

    activityLogger.log({
      action: 'DEPLOYMENT_TRIGGERED',
      target: `Domain: ${deployment.domain}`,
      severity: 'info',
      details: `Deployed ${deployment.projectName} to edge SSL.`
    });
  },

  // ============================================================================
  // 5. USER SETTINGS
  // ============================================================================
  async getSettings() {
    if (isSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('user_settings')
          .select('*')
          .single();
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase getSettings error:', err);
      }
    }
    const raw = localStorage.getItem('branify_user_settings');
    return raw ? JSON.parse(raw) : {
      platform_name: 'BRANIFY AI',
      default_ai_model: 'gemini-2.5-pro',
      rate_limit_per_min: 60,
      auto_deploy_enabled: true,
      vector_engine_gateway_url: 'https://api.gateway.branify.internal/v4/router',
      mfa_enabled: true
    };
  },

  async saveSettings(settings: any) {
    try {
      localStorage.setItem('branify_user_settings', JSON.stringify(settings));
    } catch {
      // Ignore
    }

    if (isSupabaseConfigured()) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const userId = userData?.user?.id;
        if (userId) {
          await supabase.from('user_settings').upsert({
            user_id: userId,
            platform_name: settings.platform_name || settings.platformName,
            default_ai_model: settings.default_ai_model || settings.defaultAiModel,
            rate_limit_per_min: settings.rate_limit_per_min || settings.rateLimitPerMin,
            auto_deploy_enabled: settings.auto_deploy_enabled ?? settings.autoDeployEnabled,
            vector_engine_gateway_url: settings.vector_engine_gateway_url || settings.vectorEngineGatewayUrl,
            mfa_enabled: settings.mfa_enabled ?? settings.mfaEnabled,
            updated_at: new Date().toISOString()
          });
        }
      } catch (err) {
        console.warn('Supabase save settings error:', err);
      }
    }

    activityLogger.log({
      action: 'SETTINGS_UPDATED',
      target: 'Platform Settings',
      severity: 'warning',
      details: 'Updated global configuration for private control center.'
    });
  }
};
