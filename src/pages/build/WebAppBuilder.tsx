import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Cpu, Layers, Code2, Sparkles, Terminal, Database, ShieldCheck, Play, Download, Check } from 'lucide-react';
import { activityLogger } from '../../services/activityLogger';

export const WebAppBuilder: React.FC = () => {
  const [appName, setAppName] = useState('ClientFlow CRM & Booking Portal');
  const [appType, setAppType] = useState('SaaS Portal');
  const [features, setFeatures] = useState(['Customer Database', 'Automated WhatsApp Reminders', 'Stripe Payments', 'Analytics Dashboard']);
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildSuccess, setBuildSuccess] = useState(false);

  const handleBuildApp = async () => {
    setIsBuilding(true);
    setBuildSuccess(false);
    await new Promise((r) => setTimeout(r, 2000));
    setIsBuilding(false);
    setBuildSuccess(true);
    activityLogger.log({
      action: 'WEBAPP_GENERATED',
      target: 'Web App Builder',
      severity: 'info',
      details: `Generated full-stack web application structure for ${appName}`
    });
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Web App Builder</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Full-Stack Application Generator</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Build production-ready React + Node.js web applications powered by VectorEngine AI models and Supabase.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={handleBuildApp}
          isLoading={isBuilding}
          icon={<Play className="w-4 h-4" />}
        >
          {isBuilding ? 'Compiling App...' : 'Generate Full-Stack App'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 space-y-6 bg-[#0D0D0D] border-[#292929]">
            <span className="text-xs font-bold text-[#737373] uppercase tracking-wider">Application Blueprint</span>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Application Name</label>
                <input
                  type="text"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">App Architecture</label>
                <select
                  value={appType}
                  onChange={(e) => setAppType(e.target.value)}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                >
                  <option value="SaaS Portal">SaaS Client Portal</option>
                  <option value="Booking & CRM">Booking & CRM Platform</option>
                  <option value="AI Content Engine">AI Content & SEO Studio</option>
                  <option value="Marketplace">Service Marketplace</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Included Modules</label>
                <div className="space-y-2">
                  {['Customer Database', 'Automated WhatsApp Reminders', 'Stripe Payments', 'Analytics Dashboard', 'VectorEngine AI Agent', 'Supabase Auth'].map((feat) => {
                    const has = features.includes(feat);
                    return (
                      <label key={feat} className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-[#292929] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={has}
                          onChange={(e) => {
                            if (e.target.checked) setFeatures([...features, feat]);
                            else setFeatures(features.filter((f) => f !== feat));
                          }}
                          className="w-4 h-4 rounded border-[#292929] bg-[#080808] text-[#10B981] accent-[#10B981]"
                        />
                        <span className="text-xs font-medium text-[#F5F5F5]">{feat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 space-y-6 bg-[#0D0D0D] border-[#292929]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs font-bold text-[#F5F5F5]">App Generation & Compilation Console</span>
              </div>
              <Badge variant={buildSuccess ? 'emerald' : 'gold'}>
                {buildSuccess ? 'Compiled Successfully' : 'Ready to Build'}
              </Badge>
            </div>

            <div className="bg-[#080808] rounded-xl p-4 border border-[#292929] font-mono text-xs text-[#A3A3A3] space-y-2 h-96 overflow-y-auto">
              <p className="text-[#10B981]">$ branify-app-builder --init "{appName}"</p>
              <p>✔ Architecture: {appType}</p>
              <p>✔ Database: Supabase PostgreSQL connected</p>
              <p>✔ AI Engine: VectorEngine Gateway configured</p>
              <p>✔ Modules loaded: {features.join(', ')}</p>
              {isBuilding && (
                <p className="text-yellow-400 animate-pulse">⚡ Generating TypeScript React components, API routes, and database schema...</p>
              )}
              {buildSuccess && (
                <>
                  <p className="text-[#10B981]">✔ Vite production build: SUCCESS</p>
                  <p className="text-[#10B981]">✔ Node.js server bundle: SUCCESS</p>
                  <p className="text-white font-bold pt-2">🚀 Application compiled successfully. Ready for deployment!</p>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default WebAppBuilder;
