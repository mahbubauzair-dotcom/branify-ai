import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Cpu, Smartphone, Monitor, Settings2, Check, ChevronRight,
  Sparkles, Eye, LayoutDashboard, ShoppingBag, Palette,
  FileText, CheckCircle2, Wand2, Building2, ArrowRight, ArrowLeft
} from 'lucide-react';
import { ALL_CATEGORIES } from '../../data/webapp';
import { CategoryConfig, CategoryId } from '../../data/webapp/types';
import { DemoFrontend } from '../../components/webapp/DemoFrontend';
import { DemoAdmin } from '../../components/webapp/DemoAdmin';
import { PWAPreview } from '../../components/webapp/PWAPreview';
import { activityLogger } from '../../services/activityLogger';

type PreviewTab = 'frontend' | 'admin' | 'mobile' | 'pwa';
type WorkflowStep = 'select' | 'customize' | 'modules' | 'preview' | 'generate';

export const WebAppBuilder: React.FC = () => {
  const location = useLocation();

  // State
  const [selectedCategory, setSelectedCategory] = useState<CategoryConfig | null>(null);
  const [previewTab, setPreviewTab] = useState<PreviewTab>('frontend');
  const [workflowStep, setWorkflowStep] = useState<WorkflowStep>('select');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);
  const [legalPage, setLegalPage] = useState<string | null>(null);

  // Customization state
  const [customization, setCustomization] = useState({
    businessName: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
    primaryColor: '',
    accentColor: '',
    selectedModules: [] as string[]
  });

  // Handle Business Finder handoff — pre-populate from router state
  useEffect(() => {
    const state = location.state as any;
    if (state && state.categoryId) {
      const cat = ALL_CATEGORIES.find((c) => c.id === state.categoryId);
      if (cat) {
        setSelectedCategory(cat);
        setCustomization({
          businessName: state.businessName || cat.business.name,
          country: state.country || cat.business.country,
          city: state.city || cat.business.city,
          address: state.address || cat.business.address,
          phone: state.phone || cat.business.phone,
          whatsapp: state.whatsapp || cat.business.whatsapp,
          email: cat.business.email,
          primaryColor: cat.theme.primary,
          accentColor: cat.theme.accent,
          selectedModules: cat.features.slice(0, 5)
        });
        setWorkflowStep('customize');
      }
    }
  }, [location.state]);

  // Listen for legal page navigation events from the DemoFrontend footer
  useEffect(() => {
    const handler = (e: any) => {
      setLegalPage(e.detail);
      setPreviewTab('frontend');
    };
    window.addEventListener('showLegalPage', handler);
    return () => window.removeEventListener('showLegalPage', handler);
  }, []);

  const handleSelectCategory = (cat: CategoryConfig) => {
    setSelectedCategory(cat);
    setCustomization({
      businessName: cat.business.name,
      country: cat.business.country,
      city: cat.business.city,
      address: cat.business.address,
      phone: cat.business.phone,
      whatsapp: cat.business.whatsapp,
      email: cat.business.email,
      primaryColor: cat.theme.primary,
      accentColor: cat.theme.accent,
      selectedModules: cat.features.slice(0, 5)
    });
    setWorkflowStep('customize');
    setLegalPage(null);
    activityLogger.log({
      action: 'WEBAPP_GENERATED',
      target: `Web App Builder — ${cat.name} template selected`,
      severity: 'info',
      details: `Selected ${cat.shortName} demo template for preview.`
    });
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationComplete(false);
    await new Promise((r) => setTimeout(r, 2500));
    setIsGenerating(false);
    setGenerationComplete(true);
    activityLogger.log({
      action: 'WEBAPP_GENERATED',
      target: `Web App Builder — ${selectedCategory?.shortName}`,
      severity: 'info',
      details: `Generated ${selectedCategory?.shortName} web application with ${customization.selectedModules.length} modules for ${customization.businessName}.`
    });
  };

  const resetBuilder = () => {
    setSelectedCategory(null);
    setWorkflowStep('select');
    setGenerationComplete(false);
    setLegalPage(null);
    setPreviewTab('frontend');
  };

  // ===========================================================================
  // STEP 1: CATEGORY SELECTOR
  // ===========================================================================
  if (workflowStep === 'select' || !selectedCategory) {
    return (
      <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Web App Builder</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Professional Demo Generator</h1>
            <p className="text-sm text-[#A3A3A3] mt-1">
              Each of the 10 BRANIFY categories ships with a polished, production-grade demo. Choose one to preview, customize, and generate.
            </p>
          </div>
          <Badge variant="emerald">{ALL_CATEGORIES.length} Categories Ready</Badge>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_CATEGORIES.map((cat) => (
            <Card
              key={cat.id}
              className="p-0 bg-[#0D0D0D] border-[#292929] hover:border-[#10B981]/50 transition-all overflow-hidden cursor-pointer group"
            >
              {/* Theme preview banner */}
              <div
                className="h-32 relative"
                style={{ background: cat.hero.gradient }}
                onClick={() => handleSelectCategory(cat)}
              >
                <div className="absolute inset-0 flex items-center justify-between p-5">
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: cat.theme.accent }}
                    >
                      {cat.theme.tone}
                    </div>
                    <div
                      className="text-lg font-extrabold"
                      style={{ color: cat.theme.textLight, fontFamily: cat.theme.fontHeading }}
                    >
                      {cat.business.name}
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                    style={{
                      background: cat.theme.primary,
                      color: cat.theme.bgLight
                    }}
                  >
                    {cat.shortName.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 space-y-4" onClick={() => handleSelectCategory(cat)}>
                <div>
                  <h3 className="text-base font-bold text-[#F5F5F5]">{cat.name}</h3>
                  <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">{cat.description}</p>
                </div>

                {/* Theme swatches */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#737373] uppercase tracking-wider">Palette:</span>
                  <div className="flex gap-1">
                    {[cat.theme.primary, cat.theme.accent, cat.theme.bgDark, cat.theme.bgLight].map((c, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded border border-[#292929]"
                        style={{ background: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#292929]">
                  <div>
                    <div className="text-[10px] text-[#737373] uppercase">{cat.moduleCount} Modules</div>
                    <div className="text-xs font-bold text-[#10B981]">Admin + Frontend</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#737373] uppercase">{cat.pageEstimate} Pages</div>
                    <div className="text-xs font-bold text-[#F5F5F5]">+ 6 Legal</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#737373] uppercase">PWA</div>
                    <div className="text-xs font-bold text-[#10B981]">✓ Ready</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-[#292929]">
                  <span className="text-[11px] text-[#737373]">{cat.features.length} features</span>
                  <div className="flex items-center gap-1 text-[#10B981] text-xs font-semibold group-hover:gap-2 transition-all">
                    Preview Demo
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // ===========================================================================
  // GENERATION COMPLETE — SUCCESS SCREEN
  // ===========================================================================
  if (generationComplete) {
    return (
      <div className="p-6 md:p-8 max-w-4xl mx-auto animate-fadeIn pb-24">
        <Card className="p-10 bg-[#0D0D0D] border-[#10B981]/40 text-center">
          <div className="w-20 h-20 rounded-full bg-[#10B981]/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
          </div>
          <h1 className="text-2xl font-extrabold text-[#F5F5F5] mb-3">Application Generated Successfully</h1>
          <p className="text-sm text-[#A3A3A3] mb-8 max-w-md mx-auto">
            Your <strong className="text-[#F5F5F5]">{customization.businessName}</strong> {selectedCategory.shortName} app
            has been generated with {customization.selectedModules.length} modules, PWA support, and 6 legal pages.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Pages', value: selectedCategory.pageEstimate },
              { label: 'Modules', value: customization.selectedModules.length },
              { label: 'Legal Pages', value: 6 },
              { label: 'PWA', value: 'Ready' }
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-[#151515] border border-[#292929]">
                <div className="text-xl font-extrabold text-[#10B981]">{s.value}</div>
                <div className="text-[10px] text-[#737373] uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="primary" onClick={() => {
              setWorkflowStep('preview');
              setGenerationComplete(false);
              setPreviewTab('frontend');
            }} icon={<Eye className="w-4 h-4" />}>
              View Generated App
            </Button>
            <Button variant="ghost" onClick={resetBuilder} icon={<ArrowLeft className="w-4 h-4" />}>
              Build Another
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // ===========================================================================
  // CUSTOMIZE + MODULES + PREVIEW + GENERATE (shared shell with workflow nav)
  // ===========================================================================
  const workflowSteps: { id: WorkflowStep; label: string; icon: React.ReactNode }[] = [
    { id: 'customize', label: 'Business Info', icon: <Building2 className="w-4 h-4" /> },
    { id: 'modules', label: 'Modules', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'preview', label: 'Preview', icon: <Eye className="w-4 h-4" /> },
    { id: 'generate', label: 'Generate', icon: <Wand2 className="w-4 h-4" /> }
  ];

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto animate-fadeIn pb-24 space-y-6">
      {/* Header with selected category */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
            style={{ background: selectedCategory.theme.primary, color: selectedCategory.theme.bgLight }}
          >
            {selectedCategory.shortName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] font-bold uppercase">
                {selectedCategory.shortName} Template
              </span>
              <button
                onClick={resetBuilder}
                className="text-[10px] text-[#737373] hover:text-[#A3A3A3] underline"
              >
                Change category
              </button>
            </div>
            <h1 className="text-lg md:text-xl font-extrabold text-[#F5F5F5]">{customization.businessName || selectedCategory.business.name}</h1>
            <p className="text-xs text-[#A3A3A3]">{selectedCategory.name} • {customization.city || selectedCategory.business.city}</p>
          </div>
        </div>
        {workflowStep === 'preview' && (
          <Button
            variant="primary"
            onClick={() => setWorkflowStep('generate')}
            icon={<Wand2 className="w-4 h-4" />}
          >
            Generate App
          </Button>
        )}
      </div>

      {/* Workflow stepper */}
      <div className="flex items-center gap-1 p-1.5 bg-[#0D0D0D] rounded-xl border border-[#292929] overflow-x-auto">
        {workflowSteps.map((step, i) => (
          <React.Fragment key={step.id}>
            <button
              onClick={() => setWorkflowStep(step.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                workflowStep === step.id
                  ? 'bg-[#10B981] text-[#080808]'
                  : 'text-[#A3A3A3] hover:bg-[#151515]'
              }`}
            >
              {step.icon}
              <span className="hidden sm:inline">{step.label}</span>
            </button>
            {i < workflowSteps.length - 1 && (
              <ChevronRight className="w-3.5 h-3.5 text-[#292929] flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* STEP: CUSTOMIZE */}
      {workflowStep === 'customize' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 space-y-5 bg-[#0D0D0D] border-[#292929]">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#10B981]" />
              <h3 className="text-sm font-bold text-[#F5F5F5]">Business Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Business Name" value={customization.businessName} onChange={(v) => setCustomization({ ...customization, businessName: v })} />
              <FormField label="Country" value={customization.country} onChange={(v) => setCustomization({ ...customization, country: v })} />
              <FormField label="City" value={customization.city} onChange={(v) => setCustomization({ ...customization, city: v })} />
              <FormField label="Address" value={customization.address} onChange={(v) => setCustomization({ ...customization, address: v })} />
              <FormField label="Phone" value={customization.phone} onChange={(v) => setCustomization({ ...customization, phone: v })} />
              <FormField label="WhatsApp" value={customization.whatsapp} onChange={(v) => setCustomization({ ...customization, whatsapp: v })} />
              <FormField label="Email" value={customization.email} onChange={(v) => setCustomization({ ...customization, email: v })} full />
            </div>
          </Card>

          <Card className="p-6 space-y-5 bg-[#0D0D0D] border-[#292929]">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#10B981]" />
              <h3 className="text-sm font-bold text-[#F5F5F5]">Brand Colors</h3>
            </div>
            <div className="space-y-4">
              <ColorField
                label="Primary Color"
                value={customization.primaryColor}
                onChange={(v) => setCustomization({ ...customization, primaryColor: v })}
              />
              <ColorField
                label="Accent Color"
                value={customization.accentColor}
                onChange={(v) => setCustomization({ ...customization, accentColor: v })}
              />
            </div>

            <div className="pt-4 border-t border-[#292929]">
              <div className="text-xs text-[#737373] uppercase tracking-wider mb-3">Live Preview</div>
              <div
                className="rounded-xl p-4"
                style={{ background: selectedCategory.hero.gradient }}
              >
                <div className="text-xs font-bold mb-1" style={{ color: selectedCategory.theme.accent }}>
                  {selectedCategory.theme.tone}
                </div>
                <div className="text-lg font-extrabold" style={{ color: selectedCategory.theme.textLight, fontFamily: selectedCategory.theme.fontHeading }}>
                  {customization.businessName || selectedCategory.business.name}
                </div>
                <div className="text-xs mt-1" style={{ color: selectedCategory.theme.textLight, opacity: 0.7 }}>
                  {customization.city || selectedCategory.business.city} • {selectedCategory.shortName}
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              onClick={() => setWorkflowStep('modules')}
              className="w-full"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Modules
            </Button>
          </Card>
        </div>
      )}

      {/* STEP: MODULES */}
      {workflowStep === 'modules' && (
        <Card className="p-6 space-y-5 bg-[#0D0D0D] border-[#292929]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-[#10B981]" />
              <h3 className="text-sm font-bold text-[#F5F5F5]">Select Modules for {selectedCategory.shortName}</h3>
            </div>
            <span className="text-xs text-[#737373]">
              {customization.selectedModules.length} / {selectedCategory.features.length} selected
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedCategory.features.map((feature) => {
              const isSelected = customization.selectedModules.includes(feature);
              return (
                <label
                  key={feature}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#10B981]/10 border-[#10B981]/40'
                      : 'bg-[#151515] border-[#292929] hover:border-[#3A3A3A]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCustomization({ ...customization, selectedModules: [...customization.selectedModules, feature] });
                      } else {
                        setCustomization({ ...customization, selectedModules: customization.selectedModules.filter((f) => f !== feature) });
                      }
                    }}
                    className="w-4 h-4 rounded accent-[#10B981]"
                  />
                  <span className={`text-xs font-medium ${isSelected ? 'text-[#F5F5F5]' : 'text-[#A3A3A3]'}`}>
                    {feature}
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#10B981] ml-auto" />}
                </label>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#292929]">
            <Button variant="ghost" onClick={() => setWorkflowStep('customize')} icon={<ArrowLeft className="w-4 h-4" />}>
              Back
            </Button>
            <Button variant="primary" onClick={() => setWorkflowStep('preview')} icon={<Eye className="w-4 h-4" />}>
              Preview App
            </Button>
          </div>
        </Card>
      )}

      {/* STEP: PREVIEW */}
      {workflowStep === 'preview' && (
        <div className="space-y-4">
          {/* Preview tabs */}
          <div className="flex items-center gap-1 p-1.5 bg-[#0D0D0D] rounded-xl border border-[#292929]">
            {[
              { id: 'frontend' as PreviewTab, label: 'Frontend Demo', icon: <Monitor className="w-4 h-4" /> },
              { id: 'admin' as PreviewTab, label: 'Demo Admin', icon: <LayoutDashboard className="w-4 h-4" /> },
              { id: 'mobile' as PreviewTab, label: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
              { id: 'pwa' as PreviewTab, label: 'PWA', icon: <Sparkles className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setPreviewTab(tab.id); setLegalPage(null); }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all flex-1 justify-center ${
                  previewTab === tab.id
                    ? 'bg-[#10B981] text-[#080808]'
                    : 'text-[#A3A3A3] hover:bg-[#151515]'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Legal page quick-nav (shown when frontend tab is active) */}
          {previewTab === 'frontend' && (
            <div className="flex items-center gap-2 flex-wrap p-3 bg-[#0D0D0D] rounded-xl border border-[#292929]">
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <FileText className="w-3 h-3" /> Legal Pages:
              </span>
              {[
                { id: 'privacy', label: 'Privacy' },
                { id: 'terms', label: 'Terms' },
                { id: 'cookies', label: 'Cookies' },
                { id: 'refund', label: 'Refund' },
                { id: 'cancellation', label: 'Cancellation' },
                { id: 'accessibility', label: 'Accessibility' }
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLegalPage(l.id)}
                  className={`text-[11px] px-2 py-1 rounded ${
                    legalPage === l.id
                      ? 'bg-[#10B981] text-[#080808] font-bold'
                      : 'bg-[#151515] text-[#A3A3A3] hover:text-[#F5F5F5]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              {legalPage && (
                <button
                  onClick={() => setLegalPage(null)}
                  className="text-[11px] px-2 py-1 rounded text-[#737373] hover:text-[#F5F5F5]"
                >
                  ← Back to Demo
                </button>
              )}
            </div>
          )}

          {/* Preview container */}
          <div className="rounded-xl overflow-hidden border border-[#292929] bg-[#0A0A0A]">
            <div style={{ height: previewTab === 'mobile' ? '700px' : '750px', overflow: 'auto' }}>
              {previewTab === 'frontend' && (
                <DemoFrontend config={selectedCategory} customization={customization} legalPage={legalPage} />
              )}
              {previewTab === 'admin' && (
                <DemoAdmin config={selectedCategory} customization={customization} />
              )}
              {previewTab === 'mobile' && (
                <div className="flex justify-center p-6 bg-[#0A0A0A]">
                  <div className="w-full max-w-[400px]">
                    <div className="text-center mb-4">
                      <Badge variant="gold">Mobile Preview (375px)</Badge>
                    </div>
                    <div
                      className="rounded-3xl overflow-hidden border-4 border-[#292929] shadow-2xl"
                      style={{ maxHeight: '650px', overflowY: 'auto' }}
                    >
                      <DemoFrontend config={selectedCategory} customization={customization} legalPage={legalPage} />
                    </div>
                  </div>
                </div>
              )}
              {previewTab === 'pwa' && (
                <PWAPreview config={selectedCategory} customization={customization} />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setWorkflowStep('modules')} icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Modules
            </Button>
            <Button variant="primary" onClick={() => setWorkflowStep('generate')} icon={<Wand2 className="w-4 h-4" />}>
              Continue to Generate
            </Button>
          </div>
        </div>
      )}

      {/* STEP: GENERATE */}
      {workflowStep === 'generate' && (
        <Card className="p-8 space-y-6 bg-[#0D0D0D] border-[#292929]">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 flex items-center justify-center mx-auto mb-4">
              <Wand2 className={`w-8 h-8 text-[#10B981] ${isGenerating ? 'animate-spin' : ''}`} />
            </div>
            <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">Generate {customization.businessName}</h3>
            <p className="text-sm text-[#A3A3A3] max-w-md mx-auto">
              We will compile your {selectedCategory.shortName} application with {customization.selectedModules.length} modules, {selectedCategory.pageEstimate} pages, PWA support, and 6 legal pages.
            </p>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Category', value: selectedCategory.shortName },
              { label: 'Business', value: customization.businessName },
              { label: 'Modules', value: customization.selectedModules.length },
              { label: 'PWA', value: 'Enabled' }
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-lg bg-[#151515] border border-[#292929] text-center">
                <div className="text-[10px] text-[#737373] uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-sm font-bold text-[#F5F5F5] truncate">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Build console */}
          <div className="bg-[#080808] rounded-xl p-4 border border-[#292929] font-mono text-xs space-y-2 h-48 overflow-y-auto">
            <p className="text-[#10B981]">$ branify-webapp-builder --init "{customization.businessName}"</p>
            <p>✔ Template: {selectedCategory.shortName}</p>
            <p>✔ Theme: {selectedCategory.theme.tone}</p>
            <p>✔ Pages: {selectedCategory.pageEstimate} + 6 legal</p>
            <p>✔ Modules: {customization.selectedModules.length} selected</p>
            <p>✔ PWA: manifest.json + service worker</p>
            <p>✔ Database: Supabase schema attached</p>
            <p>✔ VectorEngine: AI integration ready</p>
            {isGenerating && (
              <p className="text-yellow-400 animate-pulse">⚡ Compiling TypeScript React components, generating routes, building PWA manifest...</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setWorkflowStep('preview')} icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Preview
            </Button>
            <Button
              variant="primary"
              onClick={handleGenerate}
              isLoading={isGenerating}
              icon={<Sparkles className="w-4 h-4" />}
            >
              {isGenerating ? 'Compiling...' : 'Generate Application'}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const FormField: React.FC<{ label: string; value: string; onChange: (v: string) => void; full?: boolean }> = ({ label, value, onChange, full }) => (
  <div className={full ? 'col-span-2' : ''}>
    <label className="block text-[10px] font-bold text-[#737373] uppercase tracking-wider mb-1.5">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#151515] border border-[#292929] rounded-lg px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
    />
  </div>
);

const ColorField: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div>
    <label className="block text-[10px] font-bold text-[#737373] uppercase tracking-wider mb-1.5">{label}</label>
    <div className="flex items-center gap-2">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-10 rounded-lg border border-[#292929] bg-transparent cursor-pointer"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-[#151515] border border-[#292929] rounded-lg px-3 py-2 text-xs text-[#F5F5F5] font-mono focus:outline-none focus:border-[#10B981]"
      />
    </div>
  </div>
);

export default WebAppBuilder;
