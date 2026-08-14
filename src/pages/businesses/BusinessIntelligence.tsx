import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Building2,
  BarChart3,
  Globe,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Star,
  Layers,
  Wand2,
  Code2,
  Target,
  DollarSign,
  PhoneCall
} from 'lucide-react';
import { mockBusinessAnalysis, VectorEngineService } from '../../services/vectorEngine';
import { PRIMARY_BUSINESS_CATEGORIES, getCategoryById, getCategoryByName } from '../../data/businessCategories';

export const BusinessIntelligence: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stateData = location.state as { businessName?: string; category?: string; categoryId?: string; location?: string } | undefined;

  const [targetName, setTargetName] = useState(stateData?.businessName || 'Serenity Day Spa & Massage');
  const [selectedCategory, setSelectedCategory] = useState(stateData?.categoryId || 'spas-massage');
  const [analysis, setAnalysis] = useState(mockBusinessAnalysis);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const currentCat = getCategoryById(selectedCategory) || getCategoryByName(analysis.category) || PRIMARY_BUSINESS_CATEGORIES[0];

  useEffect(() => {
    if (stateData?.businessName) {
      setTargetName(stateData.businessName);
      if (stateData.categoryId) setSelectedCategory(stateData.categoryId);
      VectorEngineService.analyzeBusiness(stateData.businessName, stateData.categoryId || stateData.category).then(setAnalysis);
    }
  }, [stateData]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    try {
      const res = await VectorEngineService.analyzeBusiness(targetName, selectedCategory);
      setAnalysis(res);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCategoryChange = async (catId: string) => {
    setSelectedCategory(catId);
    setIsAnalyzing(true);
    try {
      const res = await VectorEngineService.analyzeBusiness(targetName, catId);
      setAnalysis(res);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>AI Business Audit & Opportunity Intelligence</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Business Intelligence</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Category-calibrated market diagnostics, website opportunity scores, and tailored client pitch strategy.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            icon={<Wand2 className="w-4 h-4" />}
            onClick={() =>
              navigate('/website-builder', {
                state: {
                  businessName: analysis.name,
                  category: currentCat.name,
                  categoryId: currentCat.id,
                  description: `${currentCat.recommendedWebsiteType} for ${analysis.name} with instant WhatsApp booking.`
                }
              })
            }
          >
            Generate Custom Site
          </Button>
        </div>
      </div>

      {/* Target Input & Category Dropdown */}
      <Card className="p-6">
        <form onSubmit={handleAnalyze} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Business Name or Domain</label>
            <input
              type="text"
              value={targetName}
              onChange={(e) => setTargetName(e.target.value)}
              placeholder="Enter business name to audit..."
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Primary Category</label>
            <select
              value={selectedCategory}
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

          <div className="md:col-span-3 flex justify-end">
            <Button type="submit" variant="primary" isLoading={isAnalyzing} icon={<Sparkles className="w-4 h-4" />}>
              Run AI Category Audit
            </Button>
          </div>
        </form>
      </Card>

      {/* Overview & Score Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-bold text-[#F5F5F5]">{analysis.name}</h2>
                <Badge variant="emerald">{currentCat.name}</Badge>
              </div>
              <p className="text-xs text-[#A3A3A3]">
                {analysis.location} • {analysis.website}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-[#10B981]">{analysis.opportunityScore}/100</div>
              <div className="text-[10px] text-[#A3A3A3] uppercase tracking-wider font-bold">Opportunity Score</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080808] border border-[#292929]">
            <h3 className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-2">Executive Diagnostic Overview</h3>
            <p className="text-sm text-[#F5F5F5] leading-relaxed">{analysis.overview}</p>
          </div>

          {/* Category-Specific Intelligence Profile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#737373] uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-[#10B981]" /> Target Market
              </div>
              <p className="text-xs text-[#A3A3A3]">{currentCat.targetAudience}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#737373] uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" /> Avg. Ticket Size
              </div>
              <p className="text-xs text-[#D4AF37] font-semibold">{currentCat.averageTicketSize}</p>
            </div>
          </div>

          {/* Recommended Modules */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-[#737373] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#10B981]" /> Recommended Modules for {currentCat.name}
              </h3>
              <span className="text-xs text-[#10B981] font-semibold">{currentCat.recommendedModules.length} Modules</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {currentCat.recommendedModules.map((mod, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#080808] border border-[#292929] flex items-center gap-2 text-xs text-[#F5F5F5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Services */}
          <div>
            <h3 className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-3">Typical Catalog Services</h3>
            <div className="flex flex-wrap gap-2">
              {currentCat.typicalServices.map((srv, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-[#080808] border border-[#292929] text-xs text-[#A3A3A3]">
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-xs font-bold text-[#737373] uppercase tracking-wider mb-3">Pitch Strategy & Revenue Levers</h3>
            <div className="space-y-2">
              {analysis.opportunities.map((opp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#080808] border border-[#292929] flex items-center gap-3 text-sm text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Online Presence & Action */}
        <Card className="space-y-6">
          <h3 className="text-base font-bold text-[#F5F5F5]">Online Presence Audit</h3>

          <div className="space-y-4">
            {[
              { label: 'SEO Score', val: analysis.onlinePresence.seoScore },
              { label: 'Website Speed', val: analysis.onlinePresence.speedScore },
              { label: 'Mobile Responsiveness', val: analysis.onlinePresence.mobileScore },
              { label: 'Social Media Presence', val: analysis.onlinePresence.socialScore }
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A3A3A3] font-medium">{item.label}</span>
                  <span className={`font-bold ${item.val < 50 ? 'text-[#EF4444]' : 'text-[#10B981]'}`}>{item.val}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#080808] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.val < 50 ? 'bg-[#EF4444]' : 'bg-[#10B981]'}`}
                    style={{ width: `${item.val}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Vulnerabilities without site */}
          <div className="pt-4 border-t border-[#292929] space-y-3">
            <h4 className="text-xs font-bold text-[#737373] uppercase tracking-wider">Identified Friction Points</h4>
            <div className="space-y-2">
              {currentCat.commonWeaknessesWithoutSite.map((weak, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#EF4444]/5 border border-[#EF4444]/20 flex items-start gap-2 text-xs text-[#EF4444]">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{weak}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#292929] space-y-3">
            <h4 className="text-xs font-bold text-[#737373] uppercase tracking-wider">Recommended Next Step</h4>
            <Button
              variant="primary"
              className="w-full"
              icon={<Wand2 className="w-4 h-4" />}
              onClick={() =>
                navigate('/website-builder', {
                  state: {
                    businessName: analysis.name,
                    category: currentCat.name,
                    categoryId: currentCat.id,
                    location: analysis.location,
                    modules: currentCat.recommendedModules
                  }
                })
              }
            >
              Generate {currentCat.name.split('&')[0].trim()} Site
            </Button>
            <Button
              variant="secondary"
              className="w-full"
              icon={<Code2 className="w-4 h-4" />}
              onClick={() =>
                navigate('/web-app-builder', {
                  state: {
                    businessName: analysis.name,
                    category: currentCat.name,
                    categoryId: currentCat.id,
                    appType: currentCat.recommendedAppType
                  }
                })
              }
            >
              Build Web App ({currentCat.recommendedAppType.split(' ')[0]})
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

