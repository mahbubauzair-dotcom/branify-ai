import React, { useState } from 'react';
import {
  Building2,
  Search,
  Filter,
  BarChart3,
  Globe,
  MapPin,
  Star,
  CheckCircle2,
  TrendingUp,
  PieChart,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { mockLeads } from '../../services/vectorEngine';
import { PRIMARY_BUSINESS_CATEGORIES } from '../../data/businessCategories';

export const AdminBusinesses: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [activeTab, setActiveTab] = useState<'registry' | 'analytics'>('registry');

  const businesses = mockLeads.map((lead, idx) => ({
    id: `biz-reg-${idx + 1}`,
    name: lead.businessName,
    category: lead.category,
    categoryId: lead.categoryId || 'spas-massage',
    country: lead.country || 'United States',
    city: lead.city || 'Miami, FL',
    rating: lead.rating,
    reviews: lead.reviews,
    websiteStatus: lead.websiteStatus,
    leadScore: lead.leadScore,
    source: 'Google Places / Maps Radar v4',
    analysisStatus: idx % 2 === 0 ? 'Diagnostic Complete' : 'Queued for Deep Audit',
    discoveredAt: `${(idx + 1) * 3} hours ago`
  }));

  const filteredBusinesses = businesses.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'all' || b.categoryId === selectedCategory || b.category === selectedCategory;
    const matchesCity = selectedCity === 'all' || b.city === selectedCity;
    return matchesSearch && matchesCat && matchesCity;
  });

  // Cities extracted
  const allCities = Array.from(new Set(businesses.map((b) => b.city)));

  // Analytics metrics
  const categoryBreakdown = PRIMARY_BUSINESS_CATEGORIES.map((cat) => {
    const count = businesses.filter((b) => b.categoryId === cat.id || b.category === cat.name).length;
    return { name: cat.name.split('&')[0].trim(), count: count * 34 };
  });

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>GLOBAL BUSINESS REGISTRY & COVERAGE RADAR</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Business Governance</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Analyze geo-distribution, category coverage, web health diagnostics, and market opportunity scores.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center p-1 rounded-xl bg-[#151515] border border-[#292929] text-xs">
          <button
            onClick={() => setActiveTab('registry')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeTab === 'registry'
                ? 'bg-[#D4AF37] text-[#080808]'
                : 'text-[#737373] hover:text-[#F5F5F5]'
            }`}
          >
            Registry List
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-[#D4AF37] text-[#080808]'
                : 'text-[#737373] hover:text-[#F5F5F5]'
            }`}
          >
            Regional Analytics
          </button>
        </div>
      </div>

      {activeTab === 'analytics' ? (
        /* Analytics Breakdown View */
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 border-[#292929]">
              <div className="text-[11px] text-[#737373]">Total Registry Records</div>
              <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">1,480+</div>
              <div className="text-[10px] text-[#10B981] mt-1">10 Official Categories</div>
            </Card>
            <Card className="p-4 border-[#292929]">
              <div className="text-[11px] text-[#737373]">Avg Category Opportunity Score</div>
              <div className="text-2xl font-black text-[#D4AF37] font-mono mt-0.5">93.4 / 100</div>
              <div className="text-[10px] text-[#D4AF37] mt-1">High Conversion Index</div>
            </Card>
            <Card className="p-4 border-[#292929]">
              <div className="text-[11px] text-[#737373]">Web Presence Deficit</div>
              <div className="text-2xl font-black text-[#10B981] font-mono mt-0.5">78.2%</div>
              <div className="text-[10px] text-[#10B981] mt-1">No/Weak Website Target</div>
            </Card>
            <Card className="p-4 border-[#292929]">
              <div className="text-[11px] text-[#737373]">Top City Coverage</div>
              <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">Miami, Austin, LA</div>
              <div className="text-[10px] text-[#737373] mt-1">USA, UK, Canada, Australia</div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Category Breakdown */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#F5F5F5]">Discovered Businesses by Category</h3>
                <Badge variant="champagne">10 Primary Categories</Badge>
              </div>

              <div className="space-y-3">
                {PRIMARY_BUSINESS_CATEGORIES.map((cat) => {
                  const count = Math.floor(Math.random() * 120) + 80;
                  const percent = Math.min(100, Math.round((count / 200) * 100));
                  return (
                    <div key={cat.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#F5F5F5]">{cat.name}</span>
                        <span className="font-mono text-[#D4AF37]">{count} businesses</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#1C1C1C] overflow-hidden">
                        <div
                          style={{ width: `${percent}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#D4AF37]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Geo & Website Status Distribution */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#F5F5F5]">Website Health Distribution</h3>
                <p className="text-xs text-[#A3A3A3] mt-0.5">Direct pipeline targets across all queried markets</p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-[#080808] border border-[#292929]">
                  <div className="text-2xl font-black text-[#10B981] font-mono">64%</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-1">NO WEBSITE</div>
                  <div className="text-[10px] text-[#737373] mt-0.5">Highest Priority</div>
                </div>
                <div className="p-4 rounded-xl bg-[#080808] border border-[#292929]">
                  <div className="text-2xl font-black text-[#D4AF37] font-mono">26%</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-1">WEAK WEBSITE</div>
                  <div className="text-[10px] text-[#737373] mt-0.5">Upgrade Ready</div>
                </div>
                <div className="p-4 rounded-xl bg-[#080808] border border-[#292929]">
                  <div className="text-2xl font-black text-[#737373] font-mono">10%</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mt-1">HAS WEBSITE</div>
                  <div className="text-[10px] text-[#737373] mt-0.5">Web App Target</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2">
                <span className="text-xs font-bold text-[#F5F5F5]">Active Geographic Clusters:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Miami, FL (USA)', 'Austin, TX (USA)', 'London (UK)', 'Toronto (CA)', 'Sydney (AU)', 'Manchester (UK)', 'Denver, CO (USA)'].map(
                    (loc, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#151515] border border-[#292929] text-[#A3A3A3]"
                      >
                        {loc}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        /* Registry Table View */
        <div className="space-y-4 animate-fadeIn">
          <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 flex items-center gap-3 bg-[#080808] border border-[#292929] rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-[#737373]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search registered businesses by name or city..."
                className="w-full bg-transparent text-xs md:text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer max-w-xs truncate"
              >
                <option value="all">All 10 Categories</option>
                {PRIMARY_BUSINESS_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
              >
                <option value="all">All Cities</option>
                {allCities.map((city, idx) => (
                  <option key={idx} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </Card>

          <Card className="overflow-hidden p-0 border-[#292929]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Business Name & Category</th>
                    <th className="py-3.5 px-4 font-semibold">Location</th>
                    <th className="py-3.5 px-4 font-semibold">Website Status</th>
                    <th className="py-3.5 px-4 font-semibold">Opportunity Score</th>
                    <th className="py-3.5 px-4 font-semibold">Source</th>
                    <th className="py-3.5 px-4 font-semibold">Analysis Status</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Discovered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#292929] bg-[#080808]">
                  {filteredBusinesses.map((b) => (
                    <tr key={b.id} className="hover:bg-[#151515]/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-[#F5F5F5]">{b.name}</div>
                        <div className="text-[11px] text-[#D4AF37]">{b.category}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="text-[#F5F5F5]">{b.city}</div>
                        <div className="text-[10px] text-[#737373]">{b.country}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <Badge
                          variant={
                            b.websiteStatus === 'NO WEBSITE'
                              ? 'emerald'
                              : b.websiteStatus === 'WEAK WEBSITE'
                              ? 'champagne'
                              : 'orange'
                          }
                        >
                          {b.websiteStatus}
                        </Badge>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="font-mono font-bold text-[#10B981]">{b.leadScore} / 100</span>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-[11px] text-[#A3A3A3]">
                        {b.source}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                          <span className="text-[#F5F5F5]">{b.analysisStatus}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-right font-mono text-[#737373] text-[11px]">
                        {b.discoveredAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
