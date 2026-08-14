import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  FolderGit2,
  Globe,
  Code2,
  Building2,
  Users2,
  Cpu,
  Coins,
  Rocket,
  AlertTriangle,
  Activity,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  Search,
  Filter,
  RefreshCw
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { StatCard } from '../../components/common/StatCard';
import {
  AdminService,
  INITIAL_ADMIN_USERS,
  INITIAL_ADMIN_PROJECTS,
  INITIAL_ADMIN_MODELS,
  INITIAL_ADMIN_DEPLOYMENTS,
  INITIAL_SECURITY_EVENTS
} from '../../services/adminService';
import { mockLeads } from '../../services/vectorEngine';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('7d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const users = AdminService.getUsers();
  const projects = AdminService.getProjects();
  const deployments = AdminService.getDeployments();
  const securityEvents = AdminService.getSecurityEvents();

  const activeUsers = users.filter((u) => u.status === 'Active').length;
  const websitesCount = projects.filter((p) => p.type === 'website').length;
  const webAppsCount = projects.filter((p) => p.type === 'web_app').length;
  const totalLeads = mockLeads.length;
  const successfulDeployments = deployments.filter((d) => d.status === 'Live').length;
  const failedDeployments = deployments.filter((d) => d.status === 'Failed').length;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  // Activity days data for 7-day SVG chart
  const activityData = [
    { day: 'Mon', requests: 4200, leads: 120, deploy: 14 },
    { day: 'Tue', requests: 5800, leads: 190, deploy: 22 },
    { day: 'Wed', requests: 7400, leads: 240, deploy: 31 },
    { day: 'Thu', requests: 6900, leads: 210, deploy: 28 },
    { day: 'Fri', requests: 8800, leads: 310, deploy: 39 },
    { day: 'Sat', requests: 9600, leads: 380, deploy: 44 },
    { day: 'Sun', requests: 11200, leads: 420, deploy: 52 },
  ];

  const maxRequests = Math.max(...activityData.map((d) => d.requests));

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Top Banner / Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>OPERATIONAL TELEMETRY & LIVE GOVERNANCE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">
            Admin Overview
          </h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Real-time platform metrics, generation pipelines, edge deployments, and active sentinel security.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Time Range Selector */}
          <div className="flex items-center p-1 rounded-lg bg-[#151515] border border-[#292929] text-xs">
            {(['24h', '7d', '30d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                  timeRange === range
                    ? 'bg-[#D4AF37] text-[#080808] shadow-sm'
                    : 'text-[#737373] hover:text-[#F5F5F5]'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>

          <Button
            variant="secondary"
            icon={<RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>

          <Button
            variant="primary"
            className="bg-[#D4AF37] hover:bg-[#b89528] text-[#080808] font-bold"
            icon={<ShieldCheck className="w-4 h-4" />}
            onClick={() => navigate('/admin/security')}
          >
            Security Center
          </Button>
        </div>
      </div>

      {/* 12 Core Operations Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
        {/* Total Users */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Total Users</span>
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">{users.length * 142}</div>
          <div className="text-[10px] text-[#10B981] font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18.4% this mo
          </div>
        </Card>

        {/* Active Users */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Active Users</span>
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">{activeUsers * 128}</div>
          <div className="text-[10px] text-[#A3A3A3] mt-1 font-mono">92% retention rate</div>
        </Card>

        {/* Total Projects */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Total Projects</span>
            <FolderGit2 className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">{projects.length * 48}</div>
          <div className="text-[10px] text-[#10B981] font-semibold mt-1">+34 new this week</div>
        </Card>

        {/* Websites Generated */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Websites Gen</span>
            <Globe className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">{websitesCount * 64}</div>
          <div className="text-[10px] text-[#A3A3A3] mt-1 font-mono">98.4% success</div>
        </Card>

        {/* Web Apps Generated */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Web Apps Gen</span>
            <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">{webAppsCount * 28}</div>
          <div className="text-[10px] text-[#D4AF37] mt-1 font-mono">Full-stack React</div>
        </Card>

        {/* Businesses Discovered */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Businesses Discovered</span>
            <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">1,480+</div>
          <div className="text-[10px] text-[#10B981] mt-1">10 categories</div>
        </Card>

        {/* Leads Generated */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Leads Generated</span>
            <Users2 className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">{totalLeads * 82}</div>
          <div className="text-[10px] text-[#10B981] mt-1">Score ≥ 85 avg</div>
        </Card>

        {/* AI Requests Today */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>AI Requests</span>
            <Cpu className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">184.2K</div>
          <div className="text-[10px] text-[#10B981] mt-1 font-mono">240ms avg latency</div>
        </Card>

        {/* AI Credits Used */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>AI Credits Used</span>
            <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F5F5F5]">1.42M</div>
          <div className="text-[10px] text-[#A3A3A3] mt-1 font-mono">Est. $842.10</div>
        </Card>

        {/* Successful Deployments */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Live Deployments</span>
            <Rocket className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#10B981]">{successfulDeployments * 42}</div>
          <div className="text-[10px] text-[#10B981] mt-1">100% Edge SSL</div>
        </Card>

        {/* Failed Deployments */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>Failed Builds</span>
            <AlertTriangle className="w-3.5 h-3.5 text-[#F59E0B]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#F59E0B]">{failedDeployments}</div>
          <div className="text-[10px] text-[#A3A3A3] mt-1">0.4% fail rate</div>
        </Card>

        {/* System Health Status */}
        <Card className="p-3.5 md:p-4 flex flex-col justify-between border-[#292929] hover:border-[#383838] transition-colors">
          <div className="flex items-center justify-between text-[#A3A3A3] text-xs mb-1">
            <span>System Health</span>
            <Activity className="w-3.5 h-3.5 text-[#10B981]" />
          </div>
          <div className="text-xl md:text-2xl font-black text-[#10B981]">99.98%</div>
          <div className="text-[10px] text-[#10B981] font-semibold mt-1">7 / 7 Services UP</div>
        </Card>
      </div>

      {/* Main Graphs & Telemetry Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Activity & Generation Volume Graph */}
        <Card className="lg:col-span-2 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#F5F5F5]">Platform Activity & AI Requests</h3>
                <Badge variant="emerald">Live Telemetry</Badge>
              </div>
              <p className="text-xs text-[#A3A3A3] mt-0.5">
                Token requests, lead audits, and edge deployments over time
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <span className="w-2.5 h-2.5 rounded bg-[#10B981]" /> AI Requests
              </span>
              <span className="flex items-center gap-1.5 text-[#D4AF37]">
                <span className="w-2.5 h-2.5 rounded bg-[#D4AF37]" /> Leads
              </span>
              <span className="flex items-center gap-1.5 text-[#F5F5F5]">
                <span className="w-2.5 h-2.5 rounded bg-[#292929]" /> Deployments
              </span>
            </div>
          </div>

          {/* High-density Custom SVG / Bar Visualizer */}
          <div className="space-y-2 pt-2">
            <div className="h-56 flex items-end justify-between gap-3 md:gap-6 pt-6 pb-2 border-b border-[#292929]">
              {activityData.map((d, idx) => {
                const reqHeight = (d.requests / maxRequests) * 100;
                const leadHeight = (d.leads / 450) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="w-full flex items-end justify-center gap-1.5 h-full">
                      {/* AI Requests Bar */}
                      <div
                        style={{ height: `${reqHeight}%` }}
                        className="w-full max-w-[20px] bg-gradient-to-t from-[#10B981]/40 to-[#10B981] rounded-t-sm transition-all group-hover:brightness-125 relative"
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-[#080808] border border-[#292929] text-[10px] text-[#10B981] px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap z-20 font-mono">
                          {d.requests.toLocaleString()} reqs
                        </div>
                      </div>

                      {/* Leads Bar */}
                      <div
                        style={{ height: `${leadHeight}%` }}
                        className="w-full max-w-[12px] bg-gradient-to-t from-[#D4AF37]/40 to-[#D4AF37] rounded-t-sm transition-all group-hover:brightness-125 relative"
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-[#080808] border border-[#292929] text-[10px] text-[#D4AF37] px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap z-20 font-mono">
                          {d.leads} leads
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-[#737373] group-hover:text-[#F5F5F5] transition-colors">
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-[#737373] font-mono pt-1">
              <span>Peak: 11,200 reqs/day</span>
              <span>Avg Latency: 242ms</span>
              <span>Success Rate: 99.82%</span>
            </div>
          </div>

          {/* Quick Metrics Breakdown */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#292929]">
            <div className="p-3 rounded-xl bg-[#080808] border border-[#292929]">
              <div className="text-[11px] text-[#737373]">Avg Generation Time</div>
              <div className="text-lg font-bold text-[#F5F5F5] font-mono mt-0.5">4.2s</div>
              <div className="text-[10px] text-[#10B981]">Edge compiled</div>
            </div>
            <div className="p-3 rounded-xl bg-[#080808] border border-[#292929]">
              <div className="text-[11px] text-[#737373]">WhatsApp Webhook Triggers</div>
              <div className="text-lg font-bold text-[#D4AF37] font-mono mt-0.5">4,890</div>
              <div className="text-[10px] text-[#D4AF37]">100% delivered</div>
            </div>
            <div className="p-3 rounded-xl bg-[#080808] border border-[#292929]">
              <div className="text-[11px] text-[#737373]">CDN Bandwidth</div>
              <div className="text-lg font-bold text-[#F5F5F5] font-mono mt-0.5">148.4 GB</div>
              <div className="text-[10px] text-[#10B981]">Global Edge Cache</div>
            </div>
          </div>
        </Card>

        {/* Right Col: AI Models Operational Status & Gateway */}
        <Card className="p-6 space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-[#F5F5F5]">AI Model Gateway</h3>
              <button
                onClick={() => navigate('/admin/ai-models')}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
              >
                Manage <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-[#A3A3A3]">
              Active inference models orchestrated through VectorEngine
            </p>

            <div className="space-y-3 mt-4">
              {INITIAL_ADMIN_MODELS.slice(0, 5).map((model) => (
                <div
                  key={model.id}
                  className="p-3 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#F5F5F5] truncate">{model.modelName}</span>
                      {model.isDefault && <Badge variant="champagne">Default</Badge>}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#737373] mt-0.5">
                      <span>{model.provider}</span>
                      <span>•</span>
                      <span className="font-mono">{model.averageLatencyMs}ms</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-[#10B981]">
                      {model.successRate}%
                    </span>
                    <div className="text-[10px] text-[#737373]">{model.monthlyUsageTokens}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#151515] border border-[#292929] flex items-center justify-between text-xs">
            <span className="text-[#A3A3A3]">Token Consumption /hr:</span>
            <span className="font-mono font-bold text-[#F5F5F5]">~2.4M tokens/hr</span>
          </div>
        </Card>
      </div>

      {/* Tables Row: Recent Users, Projects, Security Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Recent Users</h3>
            <button
              onClick={() => navigate('/admin/users')}
              className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {users.slice(0, 4).map((u) => (
              <div
                key={u.id}
                className="p-3 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between hover:border-[#383838] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#151515] border border-[#292929] flex items-center justify-center text-[#D4AF37] font-bold text-xs shrink-0">
                    {u.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#F5F5F5] truncate">{u.name}</div>
                    <div className="text-[10px] text-[#737373] truncate">{u.email}</div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <Badge variant={u.status === 'Active' ? 'emerald' : 'orange'}>{u.status}</Badge>
                  <div className="text-[10px] text-[#737373] mt-0.5">{u.plan}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Projects */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Recent Projects</h3>
            <button
              onClick={() => navigate('/admin/projects')}
              className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {projects.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between hover:border-[#383838] transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#F5F5F5] truncate">{p.name}</div>
                  <div className="text-[10px] text-[#A3A3A3] truncate">{p.category.split('&')[0]}</div>
                </div>

                <div className="text-right shrink-0 flex flex-col items-end gap-1">
                  <Badge variant={p.status === 'deployed' ? 'emerald' : p.status === 'active' ? 'champagne' : 'orange'}>
                    {p.status}
                  </Badge>
                  <span className="text-[9px] font-mono text-[#737373]">{p.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Security & Audit Events */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[#F5F5F5]">Security Events</h3>
              <Badge variant="champagne">Sentinel</Badge>
            </div>
            <button
              onClick={() => navigate('/admin/security')}
              className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              Audit <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {securityEvents.slice(0, 4).map((ev) => (
              <div
                key={ev.id}
                className="p-3 rounded-xl bg-[#080808] border border-[#292929] flex items-start justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F5F5F5]">{ev.type}</span>
                    <Badge variant={ev.severity === 'critical' || ev.severity === 'high' ? 'orange' : ev.severity === 'medium' ? 'champagne' : 'emerald'}>
                      {ev.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="text-[10px] text-[#A3A3A3] mt-1 line-clamp-1">{ev.details}</div>
                </div>

                <span className="text-[10px] font-mono text-[#737373] shrink-0">{ev.timestamp}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
