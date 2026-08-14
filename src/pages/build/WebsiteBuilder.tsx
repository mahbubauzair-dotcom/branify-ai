import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Palette, 
  Sparkles, 
  Check, 
  Copy, 
  ExternalLink, 
  Layout, 
  MessageSquare, 
  ShoppingBag, 
  Star, 
  Phone, 
  MapPin, 
  Save, 
  Download,
  Share2,
  RefreshCw,
  Zap
} from 'lucide-react';
import { activityLogger } from '../../services/activityLogger';

export const WebsiteBuilder: React.FC = () => {
  const location = useLocation();
  const stateData = (location.state as any) || {};

  const [businessName, setBusinessName] = useState(stateData.businessName || 'Elite Spa & Wellness');
  const [category, setCategory] = useState(stateData.category || 'Spas & Massage Centers');
  const [locationStr, setLocationStr] = useState(stateData.location || 'Dubai, UAE');
  const [phone, setPhone] = useState(stateData.phone || '+971 4 555 0192');
  const [primaryColor, setPrimaryColor] = useState('#10B981');
  const [themeStyle, setThemeStyle] = useState<'modern' | 'luxury' | 'minimal' | 'bold'>('luxury');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [modules, setModules] = useState<string[]>(stateData.modules || ['Services', 'Booking', 'Pricing', 'Reviews', 'WhatsApp']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleRegenerateContent = async () => {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsGenerating(false);
    activityLogger.log({
      action: 'WEBSITE_GENERATED',
      target: 'Website Builder Prototype',
      severity: 'info',
      details: `Regenerated website prototype for ${businessName}`
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://branify.ai/preview/${encodeURIComponent(businessName.toLowerCase().replace(/\s+/g, '-'))}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSaveProject = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
    activityLogger.log({
      action: 'PROJECT_UPDATED',
      target: 'Website Builder Project',
      severity: 'info',
      details: `Saved website configuration for ${businessName}`
    });
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>AI Website Builder</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Interactive Website Generator</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Generating high-converting web prototype for <strong className="text-[#F5F5F5]">{businessName}</strong> ({category}).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopyLink}
            icon={copiedLink ? <Check className="w-4 h-4 text-[#10B981]" /> : <Share2 className="w-4 h-4" />}
          >
            {copiedLink ? 'Preview Link Copied!' : 'Share Demo Link'}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleSaveProject}
            icon={isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          >
            {isSaved ? 'Saved to Projects' : 'Save Project'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Controls Panel (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 space-y-6 bg-[#0D0D0D] border-[#292929]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#737373] uppercase tracking-wider">Configuration & Details</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleRegenerateContent}
                disabled={isGenerating}
                icon={<RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />}
              >
                {isGenerating ? 'AI Refining...' : 'AI Refine Copy'}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Location</label>
                  <input
                    type="text"
                    value={locationStr}
                    onChange={(e) => setLocationStr(e.target.value)}
                    className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Contact Phone / WhatsApp</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Design Theme</label>
                <div className="grid grid-cols-4 gap-2">
                  {(['luxury', 'modern', 'minimal', 'bold'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setThemeStyle(t)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer capitalize ${
                        themeStyle === t
                          ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                          : 'bg-[#151515] border-[#292929] text-[#A3A3A3] hover:border-[#525252]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Primary Accent Color</label>
                <div className="flex items-center gap-3">
                  {['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#D4AF37'].map((col) => (
                    <button
                      key={col}
                      type="button"
                      onClick={() => setPrimaryColor(col)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                        primaryColor === col ? 'scale-110 border-white' : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: col }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Enabled Modules</label>
                <div className="flex flex-wrap gap-2">
                  {['Services', 'Booking', 'Pricing', 'Reviews', 'WhatsApp', 'Gallery', 'Team', 'FAQ'].map((mod) => {
                    const active = modules.includes(mod);
                    return (
                      <button
                        key={mod}
                        type="button"
                        onClick={() => {
                          if (active) {
                            setModules(modules.filter((m) => m !== mod));
                          } else {
                            setModules([...modules, mod]);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#10B981]/15 border-[#10B981]/50 text-[#10B981]'
                            : 'bg-[#151515] border-[#292929] text-[#737373]'
                        }`}
                      >
                        {active ? '✓ ' : '+ '} {mod}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Live Preview Frame (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between bg-[#0D0D0D] p-3 rounded-xl border border-[#292929]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-bold text-[#F5F5F5]">Live Interactive Prototype</span>
            </div>

            <div className="flex items-center gap-1 bg-[#151515] p-1 rounded-lg border border-[#292929]">
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'desktop' ? 'bg-[#292929] text-[#F5F5F5]' : 'text-[#737373] hover:text-[#F5F5F5]'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'mobile' ? 'bg-[#292929] text-[#F5F5F5]' : 'text-[#737373] hover:text-[#F5F5F5]'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Website Canvas Container */}
          <div className="flex justify-center">
            <div
              className={`transition-all duration-300 bg-[#0A0A0A] border border-[#292929] rounded-2xl overflow-hidden shadow-2xl ${
                viewMode === 'mobile' ? 'w-[390px] h-[750px]' : 'w-full h-[750px]'
              } flex flex-col`}
            >
              {/* Browser bar */}
              <div className="bg-[#141414] px-4 py-3 border-b border-[#292929] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-[#080808] px-4 py-1 rounded-md text-[11px] text-[#A3A3A3] font-mono border border-[#292929] truncate max-w-xs">
                  https://{businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.branify.site
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#737373]" />
              </div>

              {/* Website Simulated Content */}
              <div className="flex-1 overflow-y-auto bg-[#0F0F0F] text-[#F5F5F5] font-sans">
                {/* Navbar */}
                <header className="sticky top-0 z-20 bg-[#0F0F0F]/90 backdrop-blur-md px-6 py-4 border-b border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-[#080808]" style={{ backgroundColor: primaryColor }}>
                      {businessName.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{businessName}</span>
                  </div>
                  <div className="hidden md:flex items-center gap-6 text-xs text-[#A3A3A3]">
                    {modules.map((m) => (
                      <span key={m} className="hover:text-[#F5F5F5] cursor-pointer">{m}</span>
                    ))}
                  </div>
                  <button
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#080808] transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Book Now
                  </button>
                </header>

                {/* Hero Section */}
                <section className="relative px-6 py-16 md:py-24 text-center space-y-6 overflow-hidden bg-gradient-to-b from-[#181818] to-[#0F0F0F]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10" style={{ color: primaryColor }}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Premier Services in {locationStr}</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
                    Experience Ultimate Relaxation & Expert Care at {businessName}
                  </h1>
                  <p className="text-sm md:text-base text-[#A3A3A3] max-w-xl mx-auto leading-relaxed">
                    Professionally curated treatments, certified experts, and immediate online booking designed for your lifestyle.
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      className="px-6 py-3 rounded-xl font-bold text-sm text-[#080808] shadow-lg transition-transform hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Schedule Appointment
                    </button>
                    <button className="px-6 py-3 rounded-xl font-bold text-sm bg-[#222] text-[#F5F5F5] border border-[#333] hover:bg-[#333] transition-colors cursor-pointer">
                      View Service Menu
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-6 pt-4 text-xs text-[#888]">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-bold text-[#F5F5F5]">4.9 / 5.0 Rating</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{locationStr}</span>
                    </div>
                  </div>
                </section>

                {/* Services Section */}
                {modules.includes('Services') && (
                  <section className="px-6 py-16 border-t border-[#222]">
                    <div className="text-center space-y-2 mb-10">
                      <h2 className="text-xl md:text-2xl font-bold">Featured Services</h2>
                      <p className="text-xs text-[#888]">Handcrafted treatments tailored to your absolute comfort</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Signature Therapeutic Session', 'Advanced Rejuvenation Care', 'Holistic Wellness Ritual', 'Express Refresh Package'].map((svc, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-[#161616] border border-[#262626] space-y-2 hover:border-[#444] transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-sm">{svc}</h3>
                            <span className="text-xs font-mono font-bold" style={{ color: primaryColor }}>${120 + i * 45}</span>
                          </div>
                          <p className="text-xs text-[#888] leading-relaxed">60-90 min session performed by certified specialist using premium products.</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Footer */}
                <footer className="px-6 py-10 border-t border-[#222] text-center space-y-3 bg-[#0A0A0A]">
                  <div className="flex items-center justify-center gap-2 font-bold text-sm">
                    <span>{businessName}</span>
                  </div>
                  <p className="text-xs text-[#888]">{locationStr} • Tel: {phone}</p>
                  <p className="text-[10px] text-[#555]">Powered by BRANIFY AI Private Enterprise Edition</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebsiteBuilder;
