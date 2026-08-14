import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Globe,
  Sparkles,
  Monitor,
  Smartphone,
  RefreshCw,
  Save,
  Rocket,
  Palette,
  Layout,
  Layers,
  Check,
  CheckCircle2,
  Phone,
  Calendar,
  MessageSquare,
  Star,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { VectorEngineService } from '../../services/vectorEngine';
import { PRIMARY_BUSINESS_CATEGORIES, getCategoryById, getCategoryByName } from '../../data/businessCategories';

export const WebsiteBuilder: React.FC = () => {
  const location = useLocation();
  const stateData = location.state as {
    businessName?: string;
    category?: string;
    categoryId?: string;
    description?: string;
    modules?: string[];
  } | undefined;

  const defaultCategory = stateData?.categoryId
    ? getCategoryById(stateData.categoryId)
    : stateData?.category
    ? getCategoryByName(stateData.category)
    : PRIMARY_BUSINESS_CATEGORIES[0];

  const [categoryId, setCategoryId] = useState(defaultCategory?.id || 'spas-massage');
  const [projectName, setProjectName] = useState(stateData?.businessName || 'Aura Luxury Spa & Wellness');
  const [description, setDescription] = useState(
    stateData?.description || defaultCategory?.recommendedWebsiteType || 'Luxury booking website with automated WhatsApp lead capture.'
  );
  const [template, setTemplate] = useState('Modern Minimalist');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [activeModules, setActiveModules] = useState<string[]>(
    stateData?.modules || (defaultCategory ? defaultCategory.recommendedModules : [])
  );

  const currentCategory = getCategoryById(categoryId) || PRIMARY_BUSINESS_CATEGORIES[0];

  useEffect(() => {
    if (stateData?.businessName) {
      setProjectName(stateData.businessName);
    }
    if (stateData?.categoryId) {
      setCategoryId(stateData.categoryId);
      const cat = getCategoryById(stateData.categoryId);
      if (cat) {
        setActiveModules(cat.recommendedModules);
        if (!stateData.description) setDescription(`${cat.recommendedWebsiteType} for ${stateData.businessName || 'local clients'}.`);
      }
    }
  }, [stateData]);

  const handleCategoryChange = (newCatId: string) => {
    setCategoryId(newCatId);
    const cat = getCategoryById(newCatId);
    if (cat) {
      setActiveModules(cat.recommendedModules);
      setDescription(`${cat.recommendedWebsiteType} with instant WhatsApp booking.`);
    }
  };

  const toggleModule = (modName: string) => {
    if (activeModules.includes(modName)) {
      setActiveModules(activeModules.filter((m) => m !== modName));
    } else {
      setActiveModules([...activeModules, modName]);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      await VectorEngineService.generateWebsite({
        name: projectName,
        industry: currentCategory.name,
        categoryId: currentCategory.id,
        description,
        modules: activeModules
      });
      setIsDeployed(true);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden bg-[#080808]">
      {/* Builder Top Navbar */}
      <div className="h-16 bg-[#0D0D0D] border-b border-[#292929] px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-[#F5F5F5]">{projectName}</h1>
            <p className="text-[10px] text-[#A3A3A3]">
              AI Website Builder • <span className="text-[#10B981] font-semibold">{currentCategory.name}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#151515] border border-[#292929] rounded-xl p-1">
            <button
              onClick={() => setPreviewMode('desktop')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                previewMode === 'desktop' ? 'bg-[#10B981] text-[#080808]' : 'text-[#A3A3A3]'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPreviewMode('mobile')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                previewMode === 'mobile' ? 'bg-[#10B981] text-[#080808]' : 'text-[#A3A3A3]'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <Button variant="outline" icon={<Save className="w-4 h-4" />}>
            Save Draft
          </Button>
          <Button variant="primary" icon={<Rocket className="w-4 h-4" />} onClick={handleGenerate} isLoading={isGenerating}>
            {isDeployed ? 'Redeploy Live' : 'Deploy Live Website'}
          </Button>
        </div>
      </div>

      {/* Builder Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Control Panel */}
        <div className="w-96 bg-[#0D0D0D] border-r border-[#292929] p-6 overflow-y-auto space-y-6 shrink-0">
          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Business Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Business Category (10 Primary)</label>
            <select
              value={categoryId}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            >
              {PRIMARY_BUSINESS_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Template Style</label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            >
              <option>Modern Minimalist (High Speed)</option>
              <option>Luxury Dark Gold (Premium Brands)</option>
              <option>High-Conversion Lead Funnel</option>
              <option>Chic Aesthetic Showcase</option>
            </select>
          </div>

          {/* Recommended Category Modules Multi-Select */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                Category Modules ({activeModules.length})
              </label>
              <button
                type="button"
                onClick={() => setActiveModules(currentCategory.recommendedModules)}
                className="text-[11px] text-[#10B981] hover:underline cursor-pointer"
              >
                Reset Default
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {currentCategory.recommendedModules.map((mod, idx) => {
                const isChecked = activeModules.includes(mod);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleModule(mod)}
                    className={`p-2 rounded-lg text-xs font-medium border flex items-center justify-between cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/40'
                        : 'bg-[#151515] text-[#737373] border-[#292929] hover:border-[#383838]'
                    }`}
                  >
                    <span>{mod}</span>
                    {isChecked && <Check className="w-3 h-3 text-[#10B981]" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">AI Value Proposition Prompt</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#151515] border border-[#292929] rounded-xl p-3 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <Button
            variant="primary"
            className="w-full"
            icon={<Sparkles className="w-4 h-4" />}
            onClick={handleGenerate}
            isLoading={isGenerating}
          >
            Regenerate for {currentCategory.name.split('&')[0].trim()}
          </Button>
        </div>

        {/* Right Live Preview Area */}
        <div className="flex-1 bg-[#080808] p-8 flex items-center justify-center overflow-auto">
          <div
            className={`bg-[#151515] border border-[#292929] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
              previewMode === 'mobile' ? 'w-[385px] h-[720px]' : 'w-full h-full max-w-5xl'
            }`}
          >
            {/* Simulated Browser Top Bar */}
            <div className="h-12 bg-[#0D0D0D] border-b border-[#292929] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>
              <div className="text-xs text-[#A3A3A3] font-mono">
                https://{projectName.toLowerCase().replace(/[^a-z0-9]/g, '')}.branify.app
              </div>
              <Badge variant="emerald">{isDeployed ? 'Live Edge' : 'Live Preview'}</Badge>
            </div>

            {/* Simulated Live Website Render */}
            <div className="overflow-y-auto h-[calc(100%-3rem)] bg-[#080808] text-[#F5F5F5] space-y-8 p-6 md:p-10">
              {/* Site Header / Nav */}
              <div className="flex items-center justify-between pb-4 border-b border-[#292929]">
                <div className="font-extrabold text-base tracking-tight text-[#F5F5F5]">{projectName}</div>
                <div className="flex items-center gap-3">
                  {activeModules.includes('WhatsApp') && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[11px] font-bold">
                      <Phone className="w-3 h-3" /> WhatsApp
                    </div>
                  )}
                  {activeModules.includes('Appointment Booking') || activeModules.includes('Booking') || activeModules.includes('Reservations') ? (
                    <button className="px-3 py-1 rounded-lg bg-[#10B981] text-[#080808] text-xs font-bold hover:bg-[#059669] transition-colors cursor-pointer">
                      Book Now
                    </button>
                  ) : null}
                </div>
              </div>

              {/* Hero Banner */}
              <div className="text-center py-8 space-y-4 max-w-2xl mx-auto">
                <Badge variant="champagne">✨ Certified {currentCategory.name}</Badge>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight">
                  {projectName}
                </h2>
                <p className="text-xs md:text-sm text-[#A3A3A3] leading-relaxed">{description}</p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <button className="px-5 py-2.5 rounded-xl bg-[#10B981] text-[#080808] font-bold text-xs shadow-lg shadow-[#10B981]/20 hover:scale-[1.02] transition-transform cursor-pointer">
                    Schedule Free Consultation
                  </button>
                  <button className="px-5 py-2.5 rounded-xl bg-[#151515] border border-[#292929] text-[#F5F5F5] font-semibold text-xs hover:border-[#10B981]/40 transition-colors cursor-pointer">
                    View Catalog & Rates
                  </button>
                </div>
              </div>

              {/* Dynamic Catalog of Services */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#737373]">
                    Featured {currentCategory.name.split('&')[0].trim()} Services
                  </h3>
                  <span className="text-xs text-[#10B981] font-semibold">Instant Confirmation</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentCategory.typicalServices.slice(0, 3).map((serv, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#151515] border border-[#292929] space-y-2">
                      <div className="text-[10px] font-mono text-[#10B981] font-bold">0{idx + 1} // POPULAR</div>
                      <h4 className="text-sm font-bold text-[#F5F5F5]">{serv}</h4>
                      <p className="text-[11px] text-[#A3A3A3]">
                        Tailored professional experience guaranteed with top-tier results and upfront transparent pricing.
                      </p>
                      <div className="pt-2 flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                        <span>{currentCategory.averageTicketSize}</span>
                        <span className="text-[#10B981] text-[11px] flex items-center gap-0.5">
                          Select <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Modules Banner in Footer */}
              <div className="p-4 rounded-xl bg-[#151515] border border-[#292929] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[#A3A3A3]">Active Modules:</span>
                  <div className="flex flex-wrap gap-1">
                    {activeModules.map((m, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#080808] border border-[#292929] text-[10px] text-[#F5F5F5]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[#10B981] font-semibold">100% Mobile Ready • 99.8 Google Lighthouse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

