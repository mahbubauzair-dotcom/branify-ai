import React, { useState } from 'react';
import {
  Settings2,
  Save,
  Shield,
  Zap,
  Globe,
  Sliders,
  Server,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Cpu,
  Layers
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { AdminService, AdminSystemSettings } from '../../services/adminService';

export const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState<AdminSystemSettings>(AdminService.getSettings());
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 450));
    AdminService.updateSettings(settings);
    setIsSaving(false);
    showNotification('Admin configuration successfully saved and applied.');
  };

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#10B981] text-[#080808] font-bold text-xs shadow-2xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <Settings2 className="w-3.5 h-3.5" />
            <span>GLOBAL PLATFORM CONFIGURATION</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Admin Settings</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Configure system parameters, gateway routing endpoints, default quotas, and security posture.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            icon={<Save className="w-4 h-4" />}
            onClick={handleSave}
            isLoading={isSaving}
          >
            Save Global Changes
          </Button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Platform Identity */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#F5F5F5]">
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            <h3>Platform Branding & Identity</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">Platform Brand Name</label>
              <input
                type="text"
                value={settings.platformName}
                onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">Official Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>
        </Card>

        {/* User Onboarding & Quotas */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#F5F5F5]">
            <Shield className="w-4 h-4 text-[#10B981]" />
            <h3>User Onboarding & Defaults</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">Registration Mode</label>
              <select
                value={settings.registrationOpen ? 'open' : 'invite'}
                onChange={(e) => setSettings({ ...settings, registrationOpen: e.target.value === 'open' })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="open">Public Open Signups</option>
                <option value="invite">Invite-Only Access</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">Default Tier Plan</label>
              <select
                value={settings.defaultUserPlan}
                onChange={(e) => setSettings({ ...settings, defaultUserPlan: e.target.value })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Free Starter">Free Starter (10k credits)</option>
                <option value="Growth">Growth (50k credits)</option>
                <option value="Agency Pro">Agency Pro (150k credits)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">Starter AI Credits</label>
              <input
                type="number"
                value={settings.defaultAiCredits}
                onChange={(e) => setSettings({ ...settings, defaultAiCredits: Number(e.target.value) })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] font-mono"
              />
            </div>
          </div>
        </Card>

        {/* VectorEngine Gateway & Rate Limiting */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#F5F5F5]">
            <Cpu className="w-4 h-4 text-[#D4AF37]" />
            <h3>VectorEngine AI Gateway & Infrastructure</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">Gateway Service Routing Endpoint</label>
              <input
                type="text"
                value={settings.vectorEngineGatewayUrl}
                onChange={(e) => setSettings({ ...settings, vectorEngineGatewayUrl: e.target.value })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] font-mono text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[#A3A3A3] font-semibold">API Rate Limit (Requests / Min / User)</label>
              <input
                type="number"
                value={settings.rateLimitPerMin}
                onChange={(e) => setSettings({ ...settings, rateLimitPerMin: Number(e.target.value) })}
                className="w-full bg-[#080808] border border-[#292929] rounded-xl px-3.5 py-2.5 text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37] font-mono"
              />
            </div>
          </div>
        </Card>

        {/* System Flags & Maintenance */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#F5F5F5]">
            <Sliders className="w-4 h-4 text-[#10B981]" />
            <h3>System Controls & Automation Flags</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Auto Deploy */}
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#F5F5F5] block">Automatic Edge Deployments</span>
                <span className="text-[11px] text-[#737373]">Immediately provision CDN domain upon AST build</span>
              </div>
              <input
                type="checkbox"
                checked={settings.autoDeployEnabled}
                onChange={(e) => setSettings({ ...settings, autoDeployEnabled: e.target.checked })}
                className="w-4 h-4 accent-[#10B981] cursor-pointer"
              />
            </div>

            {/* Maintenance Mode */}
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#EF4444] block">Maintenance Mode</span>
                <span className="text-[11px] text-[#737373]">Show 503 Maintenance page to non-admin users</span>
              </div>
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                className="w-4 h-4 accent-[#EF4444] cursor-pointer"
              />
            </div>
          </div>
        </Card>

        {/* Action button */}
        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            variant="primary"
            icon={<Save className="w-4 h-4" />}
            isLoading={isSaving}
          >
            Save All Settings
          </Button>
        </div>
      </form>
    </div>
  );
};
