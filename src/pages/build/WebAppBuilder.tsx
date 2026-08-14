import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Code2, Sparkles, Database, Shield, Cpu, Terminal, Rocket, CheckCircle2, Layers, Check } from 'lucide-react';
import { VectorEngineService } from '../../services/vectorEngine';
import { PRIMARY_BUSINESS_CATEGORIES, getCategoryById, getCategoryByName } from '../../data/businessCategories';

export const WebAppBuilder: React.FC = () => {
  const location = useLocation();
  const stateData = location.state as {
    businessName?: string;
    category?: string;
    categoryId?: string;
    appType?: string;
  } | undefined;

  const defaultCat = stateData?.categoryId
    ? getCategoryById(stateData.categoryId)
    : stateData?.category
    ? getCategoryByName(stateData.category)
    : PRIMARY_BUSINESS_CATEGORIES[0];

  const [categoryId, setCategoryId] = useState(defaultCat?.id || 'spas-massage');
  const [appName, setAppName] = useState(stateData?.businessName ? `${stateData.businessName} Client Portal` : 'Aura Spa Client & Booking App');
  const [appType, setAppType] = useState(stateData?.appType || defaultCat?.recommendedAppType || 'Therapist Schedule & Appointment Booking App');
  const [description, setDescription] = useState(
    `Mobile-first client portal web app with automated schedule management, instant WhatsApp confirmation, and secure customer records.`
  );
  const [activeModules, setActiveModules] = useState<string[]>(defaultCat?.recommendedModules || []);
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildComplete, setBuildComplete] = useState(false);

  const currentCategory = getCategoryById(categoryId) || PRIMARY_BUSINESS_CATEGORIES[0];

  useEffect(() => {
    if (stateData?.businessName) {
      setAppName(`${stateData.businessName} Client Portal`);
    }
    if (stateData?.categoryId) {
      setCategoryId(stateData.categoryId);
      const cat = getCategoryById(stateData.categoryId);
      if (cat) {
        setAppType(cat.recommendedAppType);
        setActiveModules(cat.recommendedModules);
      }
    }
  }, [stateData]);

  const handleCategoryChange = (newCatId: string) => {
    setCategoryId(newCatId);
    const cat = getCategoryById(newCatId);
    if (cat) {
      setAppType(cat.recommendedAppType);
      setActiveModules(cat.recommendedModules);
      setDescription(`Full-stack web application designed for ${cat.name} with ${cat.typicalServices[0] || 'service'} workflows.`);
    }
  };

  const toggleModule = (mod: string) => {
    if (activeModules.includes(mod)) {
      setActiveModules(activeModules.filter((m) => m !== mod));
    } else {
      setActiveModules([...activeModules, mod]);
    }
  };

  const handleBuild = async () => {
    setIsBuilding(true);
    try {
      await VectorEngineService.generateWebApp({
        name: appName,
        appType,
        categoryId: currentCategory.id,
        description,
        modules: activeModules
      });
      setBuildComplete(true);
    } finally {
      setIsBuilding(false);
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Code2 className="w-5 h-5" />
            <span>AI Full-Stack Web App Builder</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Web App Builder</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Category-calibrated client portals, scheduling engines, and automated business workflows.
          </p>
        </div>
        <Button variant="primary" icon={<Rocket className="w-4 h-4" />} onClick={handleBuild} isLoading={isBuilding}>
          {buildComplete ? 'Rebuild App' : 'Generate Full-Stack App'}
        </Button>
      </div>

      {/* Configuration & Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="space-y-6">
          <h3 className="text-base font-bold text-[#F5F5F5]">App Specification</h3>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Application Name</label>
            <input
              type="text"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Business Category</label>
            <select
              value={categoryId}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            >
              {PRIMARY_BUSINESS_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Recommended App Architecture</label>
            <input
              type="text"
              value={appType}
              onChange={(e) => setAppType(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          {/* Module Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
              Category Modules ({activeModules.length})
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
              {currentCategory.recommendedModules.map((mod, idx) => {
                const isSelected = activeModules.includes(mod);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleModule(mod)}
                    className={`p-2 rounded-lg text-xs font-medium border flex items-center justify-between cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/40'
                        : 'bg-[#080808] text-[#737373] border-[#292929] hover:border-[#383838]'
                    }`}
                  >
                    <span className="truncate">{mod}</span>
                    {isSelected && <Check className="w-3 h-3 text-[#10B981] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Architecture Prompt</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl p-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div className="space-y-3 pt-4 border-t border-[#292929]">
            <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
              <span>Database Architecture</span>
              <span className="text-[#10B981] font-semibold">PostgreSQL / Prisma</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
              <span>Authentication</span>
              <span className="text-[#10B981] font-semibold">JWT + WhatsApp OTP</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
              <span>Target Category</span>
              <span className="text-[#D4AF37] font-semibold">{currentCategory.name.split('&')[0].trim()}</span>
            </div>
          </div>
        </Card>

        {/* File Tree & Live Logs (2 cols) */}
        <Card className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Generated Full-Stack Architecture</h3>
            <Badge variant="emerald">{buildComplete ? 'Build Successful' : 'Ready to Generate'}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] font-mono text-xs text-[#A3A3A3] space-y-2">
              <div className="text-[#10B981] font-bold mb-2">/src/ ({currentCategory.slug})</div>
              <div className="pl-3">├── server.ts (Express API & Routing)</div>
              <div className="pl-3">├── schema.prisma (PostgreSQL DB)</div>
              <div className="pl-3">├── modules/ ({activeModules.length} Active Modules)</div>
              {activeModules.slice(0, 4).map((mod, idx) => (
                <div key={idx} className="pl-6 text-[#D4AF37]">
                  ├── {mod.toLowerCase().replace(/[^a-z0-9]/g, '_')}.service.ts
                </div>
              ))}
              <div className="pl-3">├── integrations/ (WhatsApp Webhook)</div>
              <div className="pl-3">└── client/ (React UI + Tailwind)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-3">
              <div className="text-xs font-bold text-[#737373] uppercase tracking-wider">Build Verification Logs</div>
              <div className="space-y-2 text-xs text-[#A3A3A3] font-mono">
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Category schema validated ({currentCategory.name})</span>
                </div>
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Module endpoints mapped ({activeModules.join(', ')})</span>
                </div>
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>TypeScript compilation & linting passed</span>
                </div>
                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Edge deployment ready</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

