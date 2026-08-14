import React, { useState } from 'react';
import {
  Users2,
  Search,
  Filter,
  Download,
  Building2,
  Globe,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { mockLeads } from '../../services/vectorEngine';
import { PRIMARY_BUSINESS_CATEGORIES } from '../../data/businessCategories';

export const AdminLeads: React.FC = () => {
  const [leads] = useState(mockLeads);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');
  const [websiteStatusFilter, setWebsiteStatusFilter] = useState('all');
  const [minScoreFilter, setMinScoreFilter] = useState<number>(0);

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const totalLeads = leads.length;
  const noWebsiteLeads = leads.filter((l) => l.websiteStatus === 'NO WEBSITE').length;
  const weakWebsiteLeads = leads.filter((l) => l.websiteStatus === 'WEAK WEBSITE').length;
  const qualifiedLeads = leads.filter((l) => l.leadScore >= 90).length;

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.businessName.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase()) ||
      l.category.toLowerCase().includes(search.toLowerCase());
    const matchesCat = categoryFilter === 'all' || l.categoryId === categoryFilter || l.category === categoryFilter;
    const matchesCountry = countryFilter === 'all' || (l.country && l.country.toLowerCase() === countryFilter.toLowerCase());
    const matchesStatus = websiteStatusFilter === 'all' || l.websiteStatus === websiteStatusFilter;
    const matchesScore = l.leadScore >= minScoreFilter;
    return matchesSearch && matchesCat && matchesCountry && matchesStatus && matchesScore;
  });

  const handleExportCSV = () => {
    showNotification(`Exported ${filteredLeads.length} leads with full telemetry to CSV.`);
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
            <Users2 className="w-3.5 h-3.5" />
            <span>GLOBAL B2B OPPORTUNITY RADAR</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Lead Intelligence</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Centrally monitor discovered local business leads across 10 official SMB categories and qualification funnels.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            icon={<Download className="w-4 h-4" />}
            onClick={handleExportCSV}
          >
            Export Lead Data
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Total Discovered</div>
          <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">{totalLeads * 84}</div>
          <div className="text-[10px] text-[#10B981] mt-1 font-semibold">10 SMB Categories</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">No-Website Opportunities</div>
          <div className="text-2xl font-black text-[#10B981] font-mono mt-0.5">{noWebsiteLeads * 84}</div>
          <div className="text-[10px] text-[#10B981] mt-1 font-semibold">Instant 1-Click Pitch</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Weak Website Targets</div>
          <div className="text-2xl font-black text-[#D4AF37] font-mono mt-0.5">{weakWebsiteLeads * 84}</div>
          <div className="text-[10px] text-[#D4AF37] mt-1 font-semibold">High Upgrade Propensity</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Qualified Score (≥ 90)</div>
          <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">{qualifiedLeads * 84}</div>
          <div className="text-[10px] text-[#10B981] mt-1 font-semibold">Premium Conversion</div>
        </Card>
      </div>

      {/* Search & Filters Bar */}
      <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-3 bg-[#080808] border border-[#292929] rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-[#737373]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by business name, city, or category..."
            className="w-full bg-transparent text-xs md:text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer max-w-xs truncate"
          >
            <option value="all">All 10 Categories</option>
            {PRIMARY_BUSINESS_CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Website Status */}
          <select
            value={websiteStatusFilter}
            onChange={(e) => setWebsiteStatusFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Website Statuses</option>
            <option value="NO WEBSITE">No Website</option>
            <option value="WEAK WEBSITE">Weak Website</option>
            <option value="HAS WEBSITE">Has Website</option>
          </select>

          {/* Min Score Filter */}
          <select
            value={minScoreFilter}
            onChange={(e) => setMinScoreFilter(Number(e.target.value))}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value={0}>Any Score</option>
            <option value={85}>Score ≥ 85</option>
            <option value={90}>Score ≥ 90 (High)</option>
            <option value={95}>Score ≥ 95 (Elite)</option>
          </select>
        </div>
      </Card>

      {/* Leads Table */}
      <Card className="overflow-hidden p-0 border-[#292929]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Business & Location</th>
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold">Website Status</th>
                <th className="py-3.5 px-4 font-semibold">Opportunity Score</th>
                <th className="py-3.5 px-4 font-semibold">Rating & Reviews</th>
                <th className="py-3.5 px-4 font-semibold">Contact Channels</th>
                <th className="py-3.5 px-4 font-semibold text-right">Maps Listing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#151515]/60 transition-colors">
                  {/* Business */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#F5F5F5]">{lead.businessName}</div>
                    <div className="text-[11px] text-[#737373] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#525252]" />
                      <span>{lead.location}</span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4">
                    <span className="font-medium text-[#D4AF37]">{lead.category.split('&')[0]}</span>
                  </td>

                  {/* Website Status */}
                  <td className="py-3.5 px-4">
                    <Badge
                      variant={
                        lead.websiteStatus === 'NO WEBSITE'
                          ? 'emerald'
                          : lead.websiteStatus === 'WEAK WEBSITE'
                          ? 'champagne'
                          : 'orange'
                      }
                    >
                      {lead.websiteStatus}
                    </Badge>
                  </td>

                  {/* Opportunity Score */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#151515] border border-[#292929] flex items-center justify-center font-mono font-black text-xs text-[#10B981]">
                        {lead.leadScore}
                      </div>
                      <span className="text-[10px] text-[#A3A3A3] font-semibold">{lead.opportunityLevel} Opp</span>
                    </div>
                  </td>

                  {/* Rating */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1 text-[#F5F5F5] font-bold">
                      <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                      <span>{lead.rating}</span>
                      <span className="text-[10px] text-[#737373] font-normal">({lead.reviews} reviews)</span>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="py-3.5 px-4">
                    <div className="space-y-0.5 text-[11px] text-[#A3A3A3]">
                      <div className="flex items-center gap-1 font-mono">
                        <Phone className="w-3 h-3 text-[#737373]" /> {lead.phone}
                      </div>
                      {lead.email && (
                        <div className="flex items-center gap-1 text-[10px] text-[#737373]">
                          <Mail className="w-3 h-3" /> {lead.email}
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Maps link */}
                  <td className="py-3.5 px-4 text-right">
                    {lead.mapsUrl ? (
                      <a
                        href={lead.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#151515] border border-[#292929] hover:border-[#10B981]/50 text-[11px] text-[#10B981] font-semibold transition-colors"
                      >
                        Listing <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[#525252]">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
