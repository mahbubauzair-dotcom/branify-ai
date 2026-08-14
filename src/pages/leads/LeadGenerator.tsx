import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Building2,
  Search,
  MapPin,
  Phone,
  Globe,
  ExternalLink,
  Wand2,
  KeyRound,
  ShieldCheck,
  Compass,
  AlertTriangle,
  Link2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRIMARY_BUSINESS_CATEGORIES, getCategoryById } from '../../data/businessCategories';
import { VectorEngineGatewayClient } from '../../services/vectorEngineGatewayClient';

export const LeadGenerator: React.FC = () => {
  // Search state
  const [country, setCountry] = useState('United Arab Emirates');
  const [city, setCity] = useState('Dubai');
  const [category, setCategory] = useState('spas-massage');
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [discoveredBusinesses, setDiscoveredBusinesses] = useState<any[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>(
    'Live business discovery requires Google Places API configuration (GOOGLE_PLACES_API_KEY). No fake or demo data is generated.'
  );
  const [isLiveApiActive, setIsLiveApiActive] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    setStatusMessage('');

    try {
      const res = await VectorEngineGatewayClient.searchPlaces({
        category,
        country: country !== 'ALL' ? country : undefined,
        city: city.trim() ? city.trim() : undefined,
        keyword: keyword.trim() ? keyword.trim() : undefined
      });

      if (res && res.success && Array.isArray(res.results) && res.results.length > 0) {
        setIsLiveApiActive(true);
        setStatusMessage(`Live scan completed: ${res.results.length} businesses discovered via Google Places.`);
        setDiscoveredBusinesses(res.results);
      } else {
        setIsLiveApiActive(false);
        setDiscoveredBusinesses([]);
        setStatusMessage(
          res?.statusMessage ||
            'Live Google Places scanning is currently unavailable because GOOGLE_PLACES_API_KEY is not configured. Real business data is never faked or simulated.'
        );
      }
    } catch (err: any) {
      setIsLiveApiActive(false);
      setDiscoveredBusinesses([]);
      setStatusMessage('Unable to connect to Google Places API. Please configure GOOGLE_PLACES_API_KEY in server environment secrets.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleGenerateWebsite = (business: any) => {
    const catMeta = getCategoryById(category);
    navigate('/website-builder', {
      state: {
        businessName: business.businessName,
        category: catMeta ? catMeta.name : business.category,
        categoryId: category,
        location: business.location || `${city}, ${country}`,
        phone: business.phone || '',
        websiteStatus: business.websiteStatus || 'NO WEBSITE',
        description: catMeta
          ? `${catMeta.recommendedWebsiteType} for ${business.businessName} in ${business.location || city}.`
          : `Professional website for ${business.businessName}.`,
        modules: catMeta?.recommendedModules || ['Services', 'Booking', 'Pricing', 'WhatsApp']
      }
    });
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Private Business Finder</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Business Finder</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">
            Search real businesses across the 10 official categories for prospecting and website generation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={isLiveApiActive ? 'emerald' : 'gold'}>
            {isLiveApiActive ? 'Google Places Live' : 'API Key Required for Live Scan'}
          </Badge>
        </div>
      </div>

      {/* Search Filter Card */}
      <Card className="p-6 md:p-8 space-y-6 bg-[#0D0D0D] border-[#292929]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#737373] uppercase tracking-wider">Search Parameters</span>
          <span className="text-xs text-[#10B981]">10 Official Categories</span>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
              Country *
            </label>
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. United Arab Emirates"
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
              City / Area *
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Dubai"
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider mb-2">
              Business Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#080808] border border-[#292929] rounded-xl px-4 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#10B981]"
            >
              {PRIMARY_BUSINESS_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <Button
              type="submit"
              variant="primary"
              className="w-full h-11"
              isLoading={isSearching}
              icon={<Search className="w-4 h-4" />}
            >
              Search Businesses
            </Button>
          </div>
        </form>

        {/* Status / Notice Box */}
        <div className="p-4 rounded-xl bg-[#141414] border border-[#292929] flex items-start gap-3 text-xs text-[#A3A3A3]">
          <AlertTriangle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="space-y-1 flex-1">
            <span className="font-semibold text-[#F5F5F5]">Data Integrity Notice:</span>
            <p className="leading-relaxed">{statusMessage}</p>
          </div>
        </div>
      </Card>

      {/* Results Section */}
      {discoveredBusinesses.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#F5F5F5]">Discovered Businesses ({discoveredBusinesses.length})</h2>
            <span className="text-xs text-[#737373]">Live Google Places Data</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discoveredBusinesses.map((biz, idx) => (
              <Card key={idx} className="p-6 space-y-4 flex flex-col justify-between bg-[#0D0D0D] border-[#292929]">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge variant={biz.websiteStatus === 'NO WEBSITE' ? 'red' : 'emerald'}>
                      {biz.websiteStatus || 'No Website'}
                    </Badge>
                    <span className="text-xs text-[#737373] font-mono">ID: {biz.id || idx}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#F5F5F5]">{biz.businessName}</h3>
                    <p className="text-xs text-[#10B981] font-semibold mt-0.5">{biz.category}</p>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#A3A3A3]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#737373] shrink-0" />
                      <span>{biz.location}</span>
                    </div>
                    {biz.phone ? (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#737373] shrink-0" />
                        <span>{biz.phone}</span>
                      </div>
                    ) : (
                      <div className="text-[11px] text-[#525252] italic">Phone not listed in public directory</div>
                    )}
                    {biz.websiteUrl ? (
                      <div className="flex items-center gap-2 truncate">
                        <Globe className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <a href={biz.websiteUrl} target="_blank" rel="noreferrer" className="text-[#10B981] hover:underline truncate">
                          {biz.websiteUrl}
                        </a>
                      </div>
                    ) : (
                      <div className="text-[11px] text-[#D4AF37]">Website URL: None detected</div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#292929] flex flex-col gap-2">
                  {biz.mapsUrl && (
                    <a
                      href={biz.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#151515] border border-[#292929]"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    onClick={() => handleGenerateWebsite(biz)}
                    icon={<Wand2 className="w-3.5 h-3.5" />}
                  >
                    Generate Website
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card className="p-12 text-center space-y-4 bg-[#0D0D0D] border-[#292929]">
          <Compass className="w-12 h-12 text-[#525252] mx-auto" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#F5F5F5]">No Businesses Loaded</h3>
            <p className="text-xs text-[#A3A3A3] max-w-md mx-auto">
              Select your target Country, City, and Business Category above and click <strong>Search Businesses</strong>.
            </p>
          </div>
          <div className="pt-2">
            <span className="text-[11px] text-[#737373] bg-[#151515] px-3 py-1.5 rounded-lg border border-[#292929]">
              Configured via server-side GOOGLE_PLACES_API_KEY secret
            </span>
          </div>
        </Card>
      )}
    </div>
  );
};
