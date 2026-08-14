import React from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { StatCard } from '../../components/common/StatCard';
import { Badge } from '../../components/common/Badge';
import {
  FolderGit2,
  Users,
  Building2,
  Globe,
  Code2,
  Sparkles,
  Rocket,
  Plus,
  ArrowUpRight,
  Activity,
  CheckCircle2,
  Clock,
  Bot,
  Play,
  ArrowRight,
  ExternalLink,
  Sliders
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProjects, mockLeads, mockDeployments } from '../../services/vectorEngine';

interface DashboardProps {
  onOpenAIChat?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenAIChat }) => {
  const navigate = useNavigate();

  return (
    <div className="p-8 flex flex-col gap-8 max-w-7xl mx-auto animate-fadeIn">
      {/* TOP STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Projects */}
        <div className="p-5 rounded-xl flex flex-col gap-1 shadow-2xl relative overflow-hidden bg-[#151515] border border-[#292929] hover:border-[#10B981]/40 transition-all">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#737373]">Total Projects</span>
          <span className="text-3xl font-bold text-[#F5F5F5]">24</span>
          <span className="text-[11px] text-[#34D399] font-semibold">+12% from last month</span>
          <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-[#10B981] blur-3xl pointer-events-none" />
        </div>

        {/* Active Leads */}
        <div className="p-5 rounded-xl flex flex-col gap-1 shadow-2xl relative overflow-hidden bg-[#151515] border border-[#292929] hover:border-[#10B981]/40 transition-all">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#737373]">Active Leads</span>
          <span className="text-3xl font-bold text-[#F5F5F5]">1,284</span>
          <span className="text-[11px] text-[#10B981] font-semibold">32 New Opportunities</span>
          <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-[#10B981] blur-3xl pointer-events-none" />
        </div>

        {/* Site Performance */}
        <div className="p-5 rounded-xl flex flex-col gap-1 shadow-2xl relative overflow-hidden bg-[#151515] border border-[#292929] hover:border-[#D4AF37]/40 transition-all">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#737373]">Site Performance</span>
          <span className="text-3xl font-bold text-[#D4AF37]">98<small className="text-lg text-[#D4AF37]/80">/100</small></span>
          <span className="text-[11px] text-[#A3A3A3]">Awaiting Deployment</span>
          <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-[#D4AF37] blur-3xl pointer-events-none" />
        </div>

        {/* AI Generation */}
        <div className="p-5 rounded-xl flex flex-col gap-1 shadow-2xl relative overflow-hidden bg-[#151515] border border-[#292929] hover:border-[#10B981]/40 transition-all">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#737373]">AI Generation</span>
          <span className="text-3xl font-bold text-[#F5F5F5]">42.8k</span>
          <span className="text-[11px] text-[#A3A3A3]">Tokens used today</span>
          <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-[#10B981] blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* QUICK ACTIONS BAR */}
      <div className="flex items-center gap-4 flex-wrap">
        <button
          onClick={() => navigate('/website-builder')}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-[#10B981] text-[#080808] hover:bg-[#059669] transition-all shadow-lg shadow-[#10B981]/20 cursor-pointer active:scale-95"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>NEW PROJECT</span>
        </button>

        <button
          onClick={() => navigate('/lead-generator')}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border border-[#292929] text-[#F5F5F5] hover:bg-white/5 transition-all cursor-pointer"
        >
          <Users className="w-4 h-4 text-[#10B981]" />
          <span>FIND LEADS</span>
        </button>

        <button
          onClick={() => navigate('/business-intelligence')}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border border-[#292929] text-[#F5F5F5] hover:bg-white/5 transition-all cursor-pointer"
        >
          <Building2 className="w-4 h-4 text-[#10B981]" />
          <span>ANALYZE BUSINESS</span>
        </button>

        <button
          onClick={onOpenAIChat}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-[#D4AF37] text-[#080808] hover:bg-[#c29f30] transition-all shadow-lg shadow-[#D4AF37]/20 ml-auto cursor-pointer active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-[#080808]" />
          <span>ASK AI ASSISTANT</span>
        </button>
      </div>

      {/* CONTENT GRID (12 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* RECENT OPERATIONS (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#F5F5F5]">Recent Operations</h2>
            <span
              onClick={() => navigate('/projects')}
              className="text-xs underline cursor-pointer text-[#10B981] hover:text-[#34D399] transition-colors"
            >
              View all projects
            </span>
          </div>

          <div className="space-y-3">
            {/* Lumina MedSpa */}
            <div
              onClick={() => navigate('/projects/proj-1')}
              className="p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-[#10B981]/50 bg-[#151515] border border-[#292929] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#10B981]/10 flex items-center justify-center border border-[#292929] text-[#10B981] group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 stroke-[#10B981]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#F5F5F5] group-hover:text-[#10B981] transition-colors">
                    Lumina MedSpa - Landing Page
                  </span>
                  <span className="text-[11px] text-[#A3A3A3]">Modified 2h ago • Health & Beauty</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase text-[#737373]">Status</span>
                  <span className="text-xs font-bold text-[#34D399]">Ready to Deploy</span>
                </div>
                <button
                  aria-label="Open project"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-[#F5F5F5] transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Skyline Realtors */}
            <div
              onClick={() => navigate('/projects/proj-2')}
              className="p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-[#D4AF37]/50 bg-[#151515] border border-[#292929] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#D4AF37]/10 flex items-center justify-center border border-[#292929] text-[#D4AF37] group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6 stroke-[#D4AF37]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                    Skyline Realtors - CRM App
                  </span>
                  <span className="text-[11px] text-[#A3A3A3]">Modified 5h ago • Real Estate</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase text-[#737373]">Status</span>
                  <span className="text-xs font-bold text-[#F59E0B]">In Review</span>
                </div>
                <button
                  aria-label="Open project"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-[#F5F5F5] transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Brew & Beans */}
            <div
              onClick={() => navigate('/projects/proj-3')}
              className="p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-[#10B981]/50 bg-[#151515] border border-[#292929] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-[#10B981]/10 flex items-center justify-center border border-[#292929] text-[#10B981] group-hover:scale-105 transition-transform">
                  <Rocket className="w-6 h-6 stroke-[#10B981]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#F5F5F5] group-hover:text-[#10B981] transition-colors">
                    Brew & Beans - E-commerce
                  </span>
                  <span className="text-[11px] text-[#A3A3A3]">Modified 1d ago • Retail</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase text-[#737373]">Status</span>
                  <span className="text-xs font-bold text-[#10B981]">Deployed</span>
                </div>
                <button
                  aria-label="Open project"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-[#F5F5F5] transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DISCOVERY FEED (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#F5F5F5]">Lead Discovery</h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#10B981] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              Live Feed
            </span>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {/* Golden Fork Grill */}
            <div
              onClick={() => navigate('/lead-generator/leads/lead-1')}
              className="p-4 rounded-xl flex flex-col gap-3 relative overflow-hidden bg-[#1C1C1C] border border-[#292929] hover:border-[#10B981]/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-[#EF4444] text-[#F5F5F5]">
                  High Opportunity
                </span>
                <span className="text-[10px] text-[#737373]">Just now</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#F5F5F5] group-hover:text-[#10B981] transition-colors">
                  Golden Fork Grill
                </span>
                <span className="text-[11px] text-[#A3A3A3]">No Website Found • Miami, FL</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#292929]">
                <div className="flex-1 h-1.5 rounded-full bg-[#080808] overflow-hidden border border-[#292929]/50">
                  <div className="h-full bg-[#10B981] w-4/5 rounded-full" />
                </div>
                <span className="text-[10px] font-bold text-[#10B981]">88% Match</span>
              </div>
            </div>

            {/* Zenith Law Group */}
            <div
              onClick={() => navigate('/lead-generator/leads/lead-2')}
              className="p-4 rounded-xl flex flex-col gap-3 relative overflow-hidden bg-[#151515] border border-[#292929] hover:border-[#F59E0B]/50 transition-all cursor-pointer opacity-80 hover:opacity-100 group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-[#F59E0B] text-[#080808]">
                  Medium
                </span>
                <span className="text-[10px] text-[#737373]">12m ago</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#F5F5F5] group-hover:text-[#F59E0B] transition-colors">
                  Zenith Law Group
                </span>
                <span className="text-[11px] text-[#A3A3A3]">Outdated UI/UX • London, UK</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#292929]">
                <div className="flex-1 h-1.5 rounded-full bg-[#080808] overflow-hidden border border-[#292929]/50">
                  <div className="h-full bg-[#10B981] w-3/5 rounded-full" />
                </div>
                <span className="text-[10px] font-bold text-[#10B981]">62% Match</span>
              </div>
            </div>

            {/* Configure Automation Box */}
            <div
              onClick={() => navigate('/generation-center')}
              className="mt-auto p-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer bg-[#151515] border border-dashed border-[#292929] hover:border-[#10B981]/50 hover:bg-[#1C1C1C] transition-all group"
            >
              <Sliders className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#10B981] transition-colors" />
              <span className="text-xs font-bold text-[#737373] group-hover:text-[#10B981] transition-colors">
                CONFIGURE AUTOMATION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ADDITIONAL OPERATIONS & AI ACTIVITY FOOTER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#F5F5F5] uppercase tracking-wider">Active Edge Deployments</h3>
            <span
              onClick={() => navigate('/deployments')}
              className="text-xs underline text-[#10B981] cursor-pointer"
            >
              Manage all
            </span>
          </div>
          <div className="space-y-2.5">
            {mockDeployments.slice(0, 3).map((dep) => (
              <div key={dep.id} className="p-3 rounded-lg bg-[#080808] border border-[#292929] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${dep.status === 'Live' ? 'bg-[#10B981]' : dep.status === 'Building' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'}`} />
                  <div>
                    <p className="text-xs font-bold text-[#F5F5F5]">{dep.projectName}</p>
                    <p className="text-[10px] text-[#A3A3A3] font-mono">{dep.domain}</p>
                  </div>
                </div>
                <Badge variant={dep.status === 'Live' ? 'emerald' : dep.status === 'Building' ? 'orange' : 'red'} size="sm">
                  {dep.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#F5F5F5] uppercase tracking-wider">Autonomous AI Pipeline</h3>
            <span className="text-[11px] text-[#10B981] font-bold">VectorEngine v4.2</span>
          </div>
          <div className="space-y-2.5">
            {[
              { title: 'Optimized conversion funnel for Aura Spa', time: '12 mins ago', icon: <Sparkles className="w-3.5 h-3.5 text-[#10B981]" /> },
              { title: 'Generated SEO metadata for Zenith Dental', time: '2 hours ago', icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> },
              { title: 'Scanned 64 local businesses in Miami', time: '5 hours ago', icon: <Users className="w-3.5 h-3.5 text-[#10B981]" /> }
            ].map((act, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#080808] border border-[#292929] flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-[#151515] border border-[#292929] flex items-center justify-center shrink-0">
                  {act.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[#F5F5F5] truncate">{act.title}</p>
                  <p className="text-[10px] text-[#737373]">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
