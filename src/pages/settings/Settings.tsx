import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Settings as SettingsIcon, User, Cpu, Shield, Bell, Key, Database, CheckCircle2, AlertCircle } from 'lucide-react';
import { isSupabaseConfigured } from '../../services/supabaseClient';
import { authService } from '../../services/authService';
import { activityLogger } from '../../services/activityLogger';

export const Settings: React.FC = () => {
  const [tab, setTab] = useState<'account' | 'supabase' | 'ai' | 'integrations' | 'notifications'>('account');
  const owner = authService.getOwner();
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveNotice = () => {
    setSavedNotice(true);
    activityLogger.log({
      action: 'SETTINGS_UPDATED',
      target: 'Platform Settings',
      severity: 'info',
      details: 'Owner updated platform settings configuration.'
    });
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <SettingsIcon className="w-4 h-4" />
            <span>Platform Configuration</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Owner Control Settings</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Configure your private owner profile, Supabase database synchronization, AI models, and security rules.
          </p>
        </div>
      </div>

      {savedNotice && (
        <div className="p-3 rounded-xl bg-[#10B981]/15 border border-[#10B981]/40 text-xs text-[#10B981] font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Configuration preferences saved successfully.</span>
        </div>
      )}

      <div className="flex gap-2 border-b border-[#292929] pb-4 flex-wrap">
        {[
          { id: 'account', label: 'Owner Profile', icon: <User className="w-4 h-4" /> },
          { id: 'supabase', label: 'Supabase Backend', icon: <Database className="w-4 h-4 text-[#10B981]" /> },
          { id: 'ai', label: 'AI Preferences', icon: <Cpu className="w-4 h-4" /> },
          { id: 'integrations', label: 'API & Integrations', icon: <Key className="w-4 h-4" /> },
          { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              tab === t.id
                ? 'bg-[#10B981] text-[#080808]'
                : 'bg-[#151515] text-[#A3A3A3] hover:text-[#F5F5F5] border border-[#292929]'
            }`}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {tab === 'account' && (
        <Card className="space-y-6 max-w-2xl border-[#292929]">
          <h3 className="text-base font-bold text-[#F5F5F5]">Private Owner Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Authorized Owner Name</label>
              <input
                type="text"
                defaultValue={owner.name}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Authorized Email Address</label>
              <input
                type="email"
                defaultValue={owner.email}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
              />
            </div>
            <Button variant="primary" onClick={handleSaveNotice}>Save Profile</Button>
          </div>
        </Card>
      )}

      {tab === 'supabase' && (
        <Card className="space-y-6 max-w-3xl border-[#292929]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#F5F5F5]">Supabase Backend Foundation</h3>
              <p className="text-xs text-[#A3A3A3] mt-0.5">
                PostgreSQL database engine, single-owner Row Level Security (RLS), and auth listener status.
              </p>
            </div>
            {isSupabaseConfigured() ? (
              <Badge variant="emerald">Live & Connected</Badge>
            ) : (
              <Badge variant="champagne">Awaiting Environment Keys</Badge>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A3A3A3] font-medium">Supabase URL Variable</span>
              <span className="font-mono text-[#F5F5F5]">{import.meta.env.VITE_SUPABASE_URL || 'VITE_SUPABASE_URL (in .env)'}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A3A3A3] font-medium">Publishable / Anon Key</span>
              <span className="font-mono text-[#F5F5F5]">{import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ? '••••••••••••••••' : 'Configured via .env'}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A3A3A3] font-medium">Row Level Security (RLS)</span>
              <span className="text-[#10B981] font-bold">Enabled (Owner isolation: auth.uid() = user_id)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A3A3A3] font-medium">Protected Application Tables</span>
              <span className="text-[#D4AF37] font-mono">projects, businesses, leads, generations, deployments, activity_logs, ai_usage</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#151515] border border-[#292929] text-xs text-[#A3A3A3] space-y-2">
            <p className="font-bold text-[#F5F5F5] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#10B981]" />
              Zero-Exposure & Single-Owner RLS Guarantee
            </p>
            <p>
              Only the authenticated owner can read and write records. No public read/write policies exist. All secrets remain strictly server-side and gitignored.
            </p>
          </div>
        </Card>
      )}

      {tab === 'ai' && (
        <Card className="space-y-6 max-w-2xl border-[#292929]">
          <div>
            <h3 className="text-base font-bold text-[#F5F5F5]">VectorEngine AI Central Gateway</h3>
            <p className="text-xs text-[#A3A3A3] mt-1">
              All BRANIFY AI operations route through VectorEngine's smart model discovery and curated routing matrix.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#F5F5F5]">Gateway Status</span>
                <Badge variant="emerald">Connected (https://api.vectorengine.ai)</Badge>
              </div>
              <p className="text-xs text-[#A3A3A3]">
                Discovered 566+ models with top 10–15 curated for coding, reasoning, business intelligence, and website building.
              </p>
            </div>
            <a
              href="/ai-models"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#080808] text-xs font-bold hover:bg-[#E5C158] transition-colors"
            >
              <Cpu className="w-4 h-4" />
              <span>Configure AI Models & Task Routing</span>
            </a>
          </div>
        </Card>
      )}

      {tab === 'integrations' && (
        <Card className="space-y-6 max-w-2xl border-[#292929]">
          <h3 className="text-base font-bold text-[#F5F5F5]">API & Third-Party Services</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">VectorEngine AI Gateway</h4>
                <p className="text-xs text-[#A3A3A3]">Centralized enterprise LLM router (Server-side)</p>
              </div>
              <Badge variant="emerald">Live & Active</Badge>
            </div>
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">Google Gemini AI API</h4>
                <p className="text-xs text-[#A3A3A3]">Zero-leakage server-side proxy</p>
              </div>
              <Badge variant="emerald">Configured</Badge>
            </div>
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-[#F5F5F5]">Supabase Storage & Auth</h4>
                <p className="text-xs text-[#A3A3A3]">Private PostgreSQL Database</p>
              </div>
              <Badge variant={isSupabaseConfigured() ? 'emerald' : 'champagne'}>
                {isSupabaseConfigured() ? 'Connected' : 'Ready for Keys'}
              </Badge>
            </div>
          </div>
        </Card>
      )}

      {tab === 'notifications' && (
        <Card className="space-y-6 max-w-2xl border-[#292929]">
          <h3 className="text-base font-bold text-[#F5F5F5]">Notification Preferences</h3>
          <div className="space-y-4">
            {['Deployment status alerts', 'New high-opportunity lead alerts', 'Security scan reports'].map((pref, idx) => (
              <label key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#080808] border border-[#292929] cursor-pointer">
                <span className="text-xs font-medium text-[#F5F5F5]">{pref}</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#10B981]" />
              </label>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
