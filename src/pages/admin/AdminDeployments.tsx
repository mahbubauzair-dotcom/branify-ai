import React, { useState } from 'react';
import {
  Rocket,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ExternalLink,
  RotateCcw,
  ShieldCheck,
  Server,
  Globe,
  Layers,
  Terminal
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { AdminService, AdminDeployment } from '../../services/adminService';

export const AdminDeployments: React.FC = () => {
  const [deployments, setDeployments] = useState<AdminDeployment[]>(AdminService.getDeployments());
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [selectedDep, setSelectedDep] = useState<AdminDeployment | null>(null);
  const [confirmRollback, setConfirmRollback] = useState<AdminDeployment | null>(null);
  const [isRollingBack, setIsRollingBack] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const filteredDeployments = deployments.filter((d) => {
    const matchesSearch =
      d.projectName.toLowerCase().includes(search.toLowerCase()) ||
      d.domain.toLowerCase().includes(search.toLowerCase()) ||
      d.ownerEmail.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'all' || d.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || d.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleExecuteRollback = async () => {
    if (!confirmRollback) return;
    setIsRollingBack(true);
    await AdminService.rollbackDeployment(confirmRollback.id);
    setIsRollingBack(false);
    setConfirmRollback(null);
    showNotification(`Rollback successfully completed for ${confirmRollback.projectName}`);
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
            <Rocket className="w-3.5 h-3.5" />
            <span>GLOBAL EDGE PIPELINE & CDN MONITOR</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Deployment Governance</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Monitor production builds, automated SSL certificates, edge routing latency, and deployment rollbacks.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-xl bg-[#151515] border border-[#292929] text-xs flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[#A3A3A3]">Edge CDN: </span>
            <span className="font-bold text-[#10B981]">14ms Global RTT</span>
          </div>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Active Edge Domains</div>
          <div className="text-2xl font-black text-[#10B981] font-mono mt-0.5">248</div>
          <div className="text-[10px] text-[#10B981] mt-1">100% Valid SSL (Let's Encrypt)</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Avg Build Duration</div>
          <div className="text-2xl font-black text-[#F5F5F5] font-mono mt-0.5">14.8s</div>
          <div className="text-[10px] text-[#D4AF37] mt-1">esbuild + Vite Engine</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Deployment Success Rate</div>
          <div className="text-2xl font-black text-[#10B981] font-mono mt-0.5">99.6%</div>
          <div className="text-[10px] text-[#10B981] mt-1">Zero Downtime Swaps</div>
        </Card>
        <Card className="p-4 border-[#292929]">
          <div className="text-[11px] text-[#A3A3A3]">Rollbacks Performed</div>
          <div className="text-2xl font-black text-[#D4AF37] font-mono mt-0.5">2</div>
          <div className="text-[10px] text-[#A3A3A3] mt-1">Instant Instant Snapshots</div>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-3 bg-[#080808] border border-[#292929] rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-[#737373]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search deployments by project name, domain, or owner..."
            className="w-full bg-transparent text-xs md:text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Deployment Types</option>
            <option value="production">Production</option>
            <option value="preview">Preview</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="live">Live</option>
            <option value="building">Building</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </Card>

      {/* Deployments Cards / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeployments.map((dep) => (
          <Card
            key={dep.id}
            className={`p-6 flex flex-col justify-between border-[#292929] transition-all hover:border-[#383838]`}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-[#D4AF37] uppercase">{dep.type} Deployment</div>
                  <h3 className="text-base font-bold text-[#F5F5F5] mt-0.5 truncate">{dep.projectName}</h3>
                </div>
                <Badge
                  variant={
                    dep.status === 'Live'
                      ? 'emerald'
                      : dep.status === 'Building'
                      ? 'champagne'
                      : 'orange'
                  }
                >
                  {dep.status}
                </Badge>
              </div>

              {/* Domain & Link */}
              <div className="p-3 rounded-xl bg-[#080808] border border-[#292929] space-y-1">
                <div className="text-[10px] text-[#737373]">Live Target URL</div>
                <a
                  href={`https://${dep.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-[#10B981] flex items-center gap-1 hover:underline truncate"
                >
                  https://{dep.domain} <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-[#151515] border border-[#292929]">
                  <span className="text-[10px] text-[#737373] block">Duration</span>
                  <span className="text-[#F5F5F5] font-bold mt-0.5 block">{dep.durationSec}s</span>
                </div>
                <div className="p-2 rounded-lg bg-[#151515] border border-[#292929]">
                  <span className="text-[10px] text-[#737373] block">Region</span>
                  <span className="text-[#A3A3A3] mt-0.5 block truncate">{dep.edgeRegion}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#151515] border border-[#292929]">
                  <span className="text-[10px] text-[#737373] block">SSL Status</span>
                  <span className="text-[#10B981] mt-0.5 block truncate text-[11px]">{dep.sslStatus}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#151515] border border-[#292929]">
                  <span className="text-[10px] text-[#737373] block">Commit</span>
                  <span className="text-[#D4AF37] mt-0.5 block">{dep.commitHash}</span>
                </div>
              </div>

              {/* Error note if failed */}
              {dep.errorMessage && (
                <div className="p-3 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#EF4444] space-y-1">
                  <span className="font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Build Failure Detected:
                  </span>
                  <p className="text-[11px] leading-relaxed">{dep.errorMessage}</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 mt-4 border-t border-[#292929] flex items-center justify-between text-xs">
              <span className="text-[#737373] text-[11px]">{dep.deployedAt}</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedDep(dep)}
                  className="px-2.5 py-1 rounded bg-[#151515] border border-[#292929] hover:border-[#383838] text-[#F5F5F5] font-medium transition-colors cursor-pointer"
                >
                  Logs
                </button>

                {dep.rollbackAvailable && (
                  <button
                    onClick={() => setConfirmRollback(dep)}
                    className="p-1.5 rounded bg-[#151515] border border-[#292929] text-[#737373] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors cursor-pointer"
                    title="Rollback Deployment"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Deployment Logs Modal */}
      {selectedDep && (
        <Modal
          isOpen={!!selectedDep}
          onClose={() => setSelectedDep(null)}
          title={`Build & CDN Trace: ${selectedDep.projectName}`}
          size="lg"
        >
          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2">
              <div className="text-[#737373] text-[10px]">Pipeline Execution Trace:</div>
              <div className="text-[#10B981] space-y-1">
                <div>[00:01] Initialized container environment Node 22 on Cloud Run</div>
                <div>[00:03] Cloned AST Virtual Source Tree (Commit #{selectedDep.commitHash})</div>
                <div>[00:07] Running `vite build` — bundle size 3.8 MB gzip</div>
                <div>[00:11] Provisioned TLS 1.3 certificate for {selectedDep.domain}</div>
                <div>[00:14] Distributed static assets to Edge POPs in {selectedDep.edgeRegion}</div>
                <div className="text-[#D4AF37]">[00:14] Edge ingress routed successfully. Status: {selectedDep.status}</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button variant="secondary" onClick={() => setSelectedDep(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Rollback Confirmation Modal */}
      {confirmRollback && (
        <Modal
          isOpen={!!confirmRollback}
          onClose={() => setConfirmRollback(null)}
          title="Confirm Deployment Rollback"
          size="sm"
        >
          <div className="space-y-4 text-xs">
            <div className="p-3.5 rounded-xl bg-[#151515] border border-[#292929] flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F5F5F5] font-semibold">
                  Roll back <span className="text-[#D4AF37]">{confirmRollback.projectName}</span> to previous release snapshot?
                </p>
                <p className="text-[#737373] mt-1 text-[11px]">
                  Edge CDN traffic will be immediately redirected to the previous stable build within 2 seconds.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button variant="secondary" onClick={() => setConfirmRollback(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                className="bg-[#D4AF37] text-[#080808] font-bold"
                isLoading={isRollingBack}
                onClick={handleExecuteRollback}
              >
                Execute Rollback
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
