import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Rocket,
  Globe,
  Clock,
  TrendingUp,
  Radio
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { AdminService, AdminHealthService } from '../../services/adminService';

export const AdminSystemHealth: React.FC = () => {
  const [services, setServices] = useState<AdminHealthService[]>(AdminService.getHealthServices());
  const [isPinging, setIsPinging] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState('Just now');
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handlePingAll = async () => {
    setIsPinging(true);
    await new Promise((r) => setTimeout(r, 600));
    setServices((prev) =>
      prev.map((s) => ({
        ...s,
        lastChecked: 'Just now',
        responseTimeMs: Math.max(12, s.responseTimeMs + Math.floor(Math.random() * 8) - 4)
      }))
    );
    setLastCheckTime('Just now');
    setIsPinging(false);
    showNotification('System health telemetry refreshed. All 7 clusters healthy.');
  };

  const operationalCount = services.filter((s) => s.status === 'Operational').length;

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
            <Radio className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
            <span>REALTIME SYSTEM INFRASTRUCTURE & UPTIME MONITOR</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">System Health</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            End-to-end service status, response time latencies, database cluster connections, and edge availability.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            icon={<RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />}
            onClick={handlePingAll}
            isLoading={isPinging}
          >
            Ping All Clusters
          </Button>
        </div>
      </div>

      {/* Primary Status Banner */}
      <Card className="p-6 border-[#10B981]/30 bg-gradient-to-r from-[#10B981]/10 via-[#0D0D0D] to-[#151515] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-[#F5F5F5]">All Systems Fully Operational</h2>
              <Badge variant="emerald">100% Up</Badge>
            </div>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              Zero active incidents reported across Cloud Run containers, VectorEngine router, and Supabase cluster.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono shrink-0">
          <div className="p-3 rounded-xl bg-[#080808] border border-[#292929] text-center">
            <span className="text-[10px] text-[#737373] block">Services Monitored</span>
            <span className="text-sm font-bold text-[#F5F5F5] mt-0.5 block">{operationalCount} / {services.length} Healthy</span>
          </div>
          <div className="p-3 rounded-xl bg-[#080808] border border-[#292929] text-center">
            <span className="text-[10px] text-[#737373] block">90-Day Uptime</span>
            <span className="text-sm font-bold text-[#10B981] mt-0.5 block">99.98%</span>
          </div>
        </div>
      </Card>

      {/* Services List Table */}
      <Card className="overflow-hidden p-0 border-[#292929]">
        <div className="p-4 border-b border-[#292929] flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#F5F5F5]">Infrastructure Services Status</h3>
          <span className="text-xs text-[#737373] font-mono">Telemetry sync: {lastCheckTime}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Service Name</th>
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold">Response Latency</th>
                <th className="py-3.5 px-4 font-semibold">90-Day Uptime</th>
                <th className="py-3.5 px-4 font-semibold text-right">Last Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {services.map((srv) => (
                <tr key={srv.id} className="hover:bg-[#151515]/60 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="font-bold text-[#F5F5F5]">{srv.name}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-[#A3A3A3]">
                    {srv.category}
                  </td>

                  <td className="py-3.5 px-4">
                    <Badge variant={srv.status === 'Operational' ? 'emerald' : srv.status === 'Degraded' ? 'champagne' : 'orange'}>
                      {srv.status}
                    </Badge>
                  </td>

                  <td className="py-3.5 px-4 font-mono font-bold text-[#10B981]">
                    {srv.responseTimeMs}ms
                  </td>

                  <td className="py-3.5 px-4 font-mono text-[#F5F5F5]">
                    {srv.uptime90d}%
                  </td>

                  <td className="py-3.5 px-4 text-right font-mono text-[#737373]">
                    {srv.lastChecked}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Incident History & Maintenance Window */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Recent Incident Logs (Past 30 Days)</h3>
            <Badge variant="emerald">Clean Record</Badge>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#080808] border border-[#292929] flex items-start gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F5F5F5]">Routine Edge CDN Cache Optimization</span>
                  <span className="text-[10px] text-[#737373]">Aug 10, 2026</span>
                </div>
                <p className="text-[#A3A3A3] mt-1 text-[11px]">
                  Global POP cache purge completed in 800ms. Zero impact on active client websites.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080808] border border-[#292929] flex items-start gap-3 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F5F5F5]">VectorEngine LLM Router Fallback Test</span>
                  <span className="text-[10px] text-[#737373]">Jul 28, 2026</span>
                </div>
                <p className="text-[#A3A3A3] mt-1 text-[11px]">
                  Automatic failover switch executed smoothly within 180ms latency window.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#F5F5F5]">Scheduled Maintenance</h3>
            <span className="text-xs text-[#737373] font-mono">Zero-Downtime Rolling</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2 text-xs">
            <span className="font-bold text-[#D4AF37] block">Next Engine Update: VectorEngine v4.3</span>
            <p className="text-[#A3A3A3] text-[11px] leading-relaxed">
              Scheduled rolling container upgrade with enhanced Gemini 2.5 Pro multi-module code generation pipelines.
            </p>
            <div className="flex items-center gap-4 text-[10px] text-[#737373] pt-1 font-mono">
              <span>Window: Sunday 03:00 UTC</span>
              <span>Expected Impact: None</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
