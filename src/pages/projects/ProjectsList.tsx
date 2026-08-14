import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { FolderGit2, Globe, Code2, Plus, Search, ArrowUpRight, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../../services/vectorEngine';
import { PRIMARY_BUSINESS_CATEGORIES } from '../../data/businessCategories';

export const ProjectsList: React.FC = () => {
  const [projects] = useState(mockProjects);
  const [search, setSearch] = useState('');
  const [selectedCatFilter, setSelectedCatFilter] = useState('all');
  const navigate = useNavigate();

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.industry.toLowerCase().includes(search.toLowerCase()) ||
      (p.modules && p.modules.some((m) => m.toLowerCase().includes(search.toLowerCase())));
    const matchesCategory = selectedCatFilter === 'all' || p.categoryId === selectedCatFilter || p.industry === selectedCatFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#151515] to-[#1C1C1C] border border-[#292929]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>Project Management</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">All Projects</h1>
          <p className="text-sm text-[#A3A3A3] mt-1">Manage all your generated websites, web apps, and business solutions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" icon={<Plus className="w-4 h-4" />} onClick={() => navigate('/website-builder')}>
            New Website
          </Button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="space-y-3">
        <Card className="p-4 flex items-center gap-4">
          <Search className="w-4 h-4 text-[#737373] ml-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name, category, or modules..."
            className="w-full bg-transparent text-sm text-[#F5F5F5] placeholder-[#737373] focus:outline-none"
          />
        </Card>

        {/* Category Horizontal Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCatFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedCatFilter === 'all'
                ? 'bg-[#10B981] text-[#080808]'
                : 'bg-[#151515] text-[#A3A3A3] border border-[#292929] hover:border-[#383838]'
            }`}
          >
            All Categories ({projects.length})
          </button>
          {PRIMARY_BUSINESS_CATEGORIES.map((cat) => {
            const count = projects.filter((p) => p.categoryId === cat.id || p.industry === cat.name).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCatFilter === cat.id
                    ? 'bg-[#10B981] text-[#080808]'
                    : 'bg-[#151515] text-[#A3A3A3] border border-[#292929] hover:border-[#383838]'
                }`}
              >
                {cat.name.split('&')[0].trim()} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj) => (
          <Card
            key={proj.id}
            hoverEffect
            className="flex flex-col justify-between"
            onClick={() =>
              navigate(proj.type === 'website' ? '/website-builder' : '/web-app-builder', {
                state: {
                  businessName: proj.name,
                  category: proj.industry,
                  categoryId: proj.categoryId,
                  modules: proj.modules
                }
              })
            }
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-center text-[#10B981]">
                  {proj.type === 'website' ? <Globe className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="champagne">{proj.industry.split('&')[0].trim()}</Badge>
                  <Badge variant={proj.status === 'deployed' ? 'emerald' : proj.status === 'active' ? 'champagne' : 'orange'}>
                    {proj.status}
                  </Badge>
                </div>
              </div>
              <h3 className="text-base font-bold text-[#F5F5F5] mb-1">{proj.name}</h3>
              <p className="text-xs text-[#A3A3A3] mb-3">{proj.description}</p>

              {/* Module badges */}
              {proj.modules && proj.modules.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {proj.modules.slice(0, 3).map((m, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[#080808] border border-[#292929] text-[10px] text-[#A3A3A3]">
                      {m}
                    </span>
                  ))}
                  {proj.modules.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-[#080808] border border-[#292929] text-[10px] text-[#10B981]">
                      +{proj.modules.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#292929] flex items-center justify-between text-xs text-[#737373]">
              <span>{proj.updatedAt}</span>
              <span className="text-[#10B981] font-semibold flex items-center gap-1">
                Open Builder <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

