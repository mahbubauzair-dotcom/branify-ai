import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Palette, Sparkles, Wand2, Check, Copy, Type, Layers, RefreshCw } from 'lucide-react';
import { PRIMARY_BUSINESS_CATEGORIES, getCategoryById } from '../../data/businessCategories';

const CATEGORY_PALETTES: Record<string, { colors: string[]; fontHeading: string; fontBody: string; vibe: string }> = {
  'spas-massage': {
    colors: ['#10B981', '#D4AF37', '#080808', '#1A2421', '#F5F5F5'],
    fontHeading: 'Playfair Display',
    fontBody: 'Plus Jakarta Sans',
    vibe: 'Tranquil, Organic, Luxury Serenity'
  },
  'salons-beauty': {
    colors: ['#EC4899', '#D4AF37', '#0D0D0D', '#2A1724', '#FAF5FF'],
    fontHeading: 'Cinzel',
    fontBody: 'Inter',
    vibe: 'Chic, Glamorous, High-End Fashion'
  },
  'restaurants-cafes': {
    colors: ['#F97316', '#D4AF37', '#0A0A0A', '#2E1A11', '#FFFBEB'],
    fontHeading: 'Cabinet Grotesk',
    fontBody: 'Plus Jakarta Sans',
    vibe: 'Artisanal, Savory, Warm Hospitality'
  },
  'car-repair-garages': {
    colors: ['#EF4444', '#94A3B8', '#080808', '#1E293B', '#F8FAFC'],
    fontHeading: 'Syne',
    fontBody: 'Space Grotesk',
    vibe: 'High Performance, Trustworthy, Precision Mechanical'
  },
  'cleaning-maid-services': {
    colors: ['#06B6D4', '#10B981', '#090D14', '#132A38', '#F0FDFA'],
    fontHeading: 'Plus Jakarta Sans',
    fontBody: 'Inter',
    vibe: 'Spotless, Eco-Friendly, Fresh & Pure'
  },
  'tailors-boutiques': {
    colors: ['#A855F7', '#D4AF37', '#080808', '#231238', '#FAF5FF'],
    fontHeading: 'Bodoni Moda',
    fontBody: 'Plus Jakarta Sans',
    vibe: 'Bespoke Sartorial, Elegant Craftsmanship, Haute Couture'
  },
  'photographers-videographers': {
    colors: ['#6366F1', '#E2E8F0', '#050505', '#171A38', '#FFFFFF'],
    fontHeading: 'Clash Display',
    fontBody: 'Inter',
    vibe: 'Cinematic, Sharp, Minimalist Editorial'
  },
  'fitness-gyms': {
    colors: ['#22C55E', '#EAB308', '#09090B', '#142E1B', '#F4F4F5'],
    fontHeading: 'Clash Display',
    fontBody: 'Plus Jakarta Sans',
    vibe: 'Dynamic Energy, Relentless Discipline, Athletic Power'
  },
  'pet-grooming-boarding': {
    colors: ['#3B82F6', '#F59E0B', '#090D16', '#122544', '#EFF6FF'],
    fontHeading: 'Plus Jakarta Sans',
    fontBody: 'Inter',
    vibe: 'Playful, Loving Care, Compassionate & Safe'
  },
  'tutoring-training': {
    colors: ['#10B981', '#6366F1', '#08090D', '#11222E', '#F8FAFC'],
    fontHeading: 'Cabinet Grotesk',
    fontBody: 'Inter',
    vibe: 'Academic Excellence, Inspiring Growth, Rigorous Mastery'
  }
};

export const BrandStudio: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState('spas-massage');
  const currentCat = getCategoryById(selectedCatId) || PRIMARY_BUSINESS_CATEGORIES[0];
  const currentTheme = CATEGORY_PALETTES[selectedCatId] || CATEGORY_PALETTES['spas-massage'];

  const [brandName, setBrandName] = useState('Serenity Wellness Sanctuary');
  const [personality, setPersonality] = useState(currentTheme.vibe);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCategoryChange = (catId: string) => {
    setSelectedCatId(catId);
    const cat = getCategoryById(catId);
    const theme = CATEGORY_PALETTES[catId] || CATEGORY_PALETTES['spas-massage'];
    if (cat) {
      setBrandName(`${cat.name.split('&')[0].trim()} Brand Studio`);
      setPersonality(theme.vibe);
    }
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Palette className="w-4 h-4" />
            <span>AI Brand Identity Studio</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Brand Studio</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Generate cohesive brand kits, calibrated color palettes, typography pairings, and logos for 10 primary business categories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="space-y-6">
          <h3 className="text-base font-bold text-[#F5F5F5]">Brand Parameters</h3>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Business Category</label>
            <select
              value={selectedCatId}
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
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Brand / Business Name</label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">Brand Personality & Vibe</label>
            <input
              type="text"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <Button
            variant="primary"
            className="w-full"
            icon={<Wand2 className="w-4 h-4" />}
            onClick={handleGenerate}
            isLoading={isGenerating}
          >
            Regenerate {currentCat.name.split('&')[0].trim()} Kit
          </Button>
        </Card>

        {/* Brand Preview (2 cols) */}
        <Card className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Generated Brand Identity Kit</h3>
            <Badge variant="champagne">{currentCat.name}</Badge>
          </div>

          {/* Logo & Identity Showcase */}
          <div className="p-8 rounded-xl bg-[#080808] border border-[#292929] flex flex-col items-center justify-center text-center space-y-4">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-3xl font-black shadow-xl"
              style={{
                backgroundColor: currentTheme.colors[0],
                color: '#080808',
                boxShadow: `0 20px 40px ${currentTheme.colors[0]}33`
              }}
            >
              {brandName.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#F5F5F5] tracking-tight">{brandName}</h2>
              <p className="text-xs text-[#A3A3A3] mt-1">{personality}</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-[#292929] text-[11px] text-[#A3A3A3]">
              <span>Category Target:</span>
              <span className="text-[#10B981] font-semibold">{currentCat.targetAudience}</span>
            </div>
          </div>

          {/* Typography Pairing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#737373] uppercase tracking-wider">
                <Type className="w-3.5 h-3.5 text-[#10B981]" /> Heading Font
              </div>
              <div className="text-base font-bold text-[#F5F5F5]">{currentTheme.fontHeading}</div>
              <p className="text-[11px] text-[#737373]">Optimized for editorial impact and hero banners.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#737373] uppercase tracking-wider">
                <Type className="w-3.5 h-3.5 text-[#D4AF37]" /> Body & UI Font
              </div>
              <div className="text-base font-bold text-[#F5F5F5]">{currentTheme.fontBody}</div>
              <p className="text-[11px] text-[#737373]">Optimized for mobile catalog readability.</p>
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-[#737373] uppercase tracking-wider">
                Approved Category Color Palette (Click to Copy)
              </h4>
              {copiedColor && <span className="text-xs text-[#10B981] font-semibold">Copied {copiedColor}!</span>}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {currentTheme.colors.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => copyToClipboard(c)}
                  className="p-3 rounded-xl bg-[#080808] border border-[#292929] text-center space-y-2 hover:border-[#10B981]/50 cursor-pointer transition-colors group"
                >
                  <div className="w-full h-12 rounded-lg border border-[#292929]" style={{ backgroundColor: c }} />
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[10px] font-mono text-[#A3A3A3] group-hover:text-[#F5F5F5]">{c}</span>
                    <Copy className="w-2.5 h-2.5 text-[#737373] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

