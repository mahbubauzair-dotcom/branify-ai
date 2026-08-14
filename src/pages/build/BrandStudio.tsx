import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Palette, Sparkles, Wand2, Copy, Check, Download } from 'lucide-react';
import { activityLogger } from '../../services/activityLogger';

export const BrandStudio: React.FC = () => {
  const [brandName, setBrandName] = useState('Aura Luxury Wellness');
  const [industry, setIndustry] = useState('High-End Spa & Wellness');
  const [palette, setPalette] = useState({ primary: '#10B981', secondary: '#D4AF37', neutral: '#0D0D0D' });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateBrand = async () => {
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsGenerating(false);
    activityLogger.log({
      action: 'BRAND_IDENTITY_GENERATED',
      target: 'Brand Studio',
      severity: 'info',
      details: `Generated brand identity kit for ${brandName}`
    });
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Brand Studio</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">AI Brand Identity Studio</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Create professional brand identities, logo concepts, typography pairings, and color palettes.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={handleGenerateBrand}
          isLoading={isGenerating}
          icon={<Wand2 className="w-4 h-4" />}
        >
          {isGenerating ? 'Generating Brand Kit...' : 'Generate Brand Identity'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 space-y-6 bg-[#0D0D0D] border-[#292929]">
            <span className="text-xs font-bold text-[#737373] uppercase tracking-wider">Brand Parameters</span>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Brand Name</label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-1.5">Industry & Niche</label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#151515] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 space-y-6 bg-[#0D0D0D] border-[#292929]">
            <span className="text-xs font-bold text-[#737373] uppercase tracking-wider">Generated Brand Kit</span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#151515] border border-[#292929] space-y-2">
                <span className="text-xs text-[#737373]">Primary Accent</span>
                <div className="w-full h-10 rounded-lg" style={{ backgroundColor: palette.primary }} />
                <span className="text-xs font-mono text-[#F5F5F5]">{palette.primary}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#151515] border border-[#292929] space-y-2">
                <span className="text-xs text-[#737373]">Secondary Gold</span>
                <div className="w-full h-10 rounded-lg" style={{ backgroundColor: palette.secondary }} />
                <span className="text-xs font-mono text-[#F5F5F5]">{palette.secondary}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#151515] border border-[#292929] space-y-2">
                <span className="text-xs text-[#737373]">Dark Neutral</span>
                <div className="w-full h-10 rounded-lg" style={{ backgroundColor: palette.neutral }} />
                <span className="text-xs font-mono text-[#F5F5F5]">{palette.neutral}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#151515] border border-[#292929] space-y-3">
              <h3 className="text-base font-bold text-[#F5F5F5]">{brandName}</h3>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                Sophisticated modern branding designed for {industry}. High-contrast typography pairing with emerald and gold accents.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default BrandStudio;
