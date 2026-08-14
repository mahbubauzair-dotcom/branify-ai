import React, { useState } from 'react';
import {
  FolderGit2,
  Globe,
  Code2,
  Palette,
  Search,
  Filter,
  Eye,
  FileCode,
  Terminal,
  Rocket,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Layers,
  ChevronRight,
  ExternalLink,
  Ban,
  Play
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { AdminService, AdminProject } from '../../services/adminService';
import { PRIMARY_BUSINESS_CATEGORIES } from '../../data/businessCategories';

export const AdminProjects: React.FC = () => {
  const [projects, setProjects] = useState<AdminProject[]>(AdminService.getProjects());
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const [inspectProject, setInspectProject] = useState<AdminProject | null>(null);
  const [viewFilesProject, setViewFilesProject] = useState<AdminProject | null>(null);
  const [viewLogsProject, setViewLogsProject] = useState<AdminProject | null>(null);

  const [confirmSuspend, setConfirmSuspend] = useState<AdminProject | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.ownerName.toLowerCase().includes(search.toLowerCase()) ||
      p.ownerEmail.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'all' || p.type.toLowerCase() === typeFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || p.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesCategory = categoryFilter === 'all' || p.categoryId === categoryFilter || p.category === categoryFilter;
    return matchesSearch && matchesType && matchesStatus && matchesCategory;
  });

  const handleToggleSuspend = (proj: AdminProject) => {
    const newStatus = proj.status === 'suspended' ? 'deployed' : 'suspended';
    const updated = AdminService.updateProjectStatus(proj.id, newStatus);
    setProjects(updated);
    setConfirmSuspend(null);
    showNotification(`Project "${proj.name}" is now ${newStatus.toUpperCase()}`);
  };

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-fadeIn">
      {/* Notification Toast */}
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PLATFORM REPOSITORIES & BUILDS</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">Project Governance</h1>
          <p className="text-xs md:text-sm text-[#A3A3A3] mt-1">
            Inspect generated websites, web applications, AST schemas, edge deployment logs, and active modules.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-2 rounded-xl bg-[#151515] border border-[#292929] text-xs">
            <span className="text-[#737373]">Total Repositories: </span>
            <span className="font-bold text-[#F5F5F5]">{projects.length}</span>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="space-y-3">
        <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3 bg-[#080808] border border-[#292929] rounded-xl px-3 py-2">
            <Search className="w-4 h-4 text-[#737373]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects by name, owner email, or category..."
              className="w-full bg-transparent text-xs md:text-sm text-[#F5F5F5] placeholder-[#525252] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Type */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="website">Websites</option>
              <option value="web_app">Web Apps</option>
              <option value="brand">Brand Studios</option>
            </select>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#080808] border border-[#292929] rounded-xl px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="deployed">Deployed</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>

            {/* Category */}
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
          </div>
        </Card>
      </div>

      {/* Projects Table */}
      <Card className="overflow-hidden p-0 border-[#292929]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0D0D0D] border-b border-[#292929] text-[#737373] uppercase tracking-wider font-mono">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Project Name & Category</th>
                <th className="py-3.5 px-4 font-semibold">Owner</th>
                <th className="py-3.5 px-4 font-semibold">Type</th>
                <th className="py-3.5 px-4 font-semibold">Gen Status</th>
                <th className="py-3.5 px-4 font-semibold">Deploy Status</th>
                <th className="py-3.5 px-4 font-semibold">Created / Updated</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#292929] bg-[#080808]">
              {filteredProjects.map((p) => (
                <tr key={p.id} className="hover:bg-[#151515]/60 transition-colors">
                  {/* Project */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#151515] border border-[#292929] flex items-center justify-center text-[#10B981] font-bold text-xs shrink-0">
                        {p.type === 'website' ? (
                          <Globe className="w-4 h-4" />
                        ) : p.type === 'web_app' ? (
                          <Code2 className="w-4 h-4 text-[#D4AF37]" />
                        ) : (
                          <Palette className="w-4 h-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[#F5F5F5]">{p.name}</div>
                        <div className="text-[11px] text-[#A3A3A3] truncate">{p.category}</div>
                      </div>
                    </div>
                  </td>

                  {/* Owner */}
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-[#F5F5F5]">{p.ownerName}</div>
                    <div className="text-[10px] text-[#737373]">{p.ownerEmail}</div>
                  </td>

                  {/* Type */}
                  <td className="py-3.5 px-4">
                    <Badge variant={p.type === 'web_app' ? 'champagne' : 'emerald'}>
                      {p.type.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </td>

                  {/* Generation Status */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          p.generationStatus === 'Success'
                            ? 'bg-[#10B981]'
                            : p.generationStatus === 'In Progress'
                            ? 'bg-[#D4AF37] animate-pulse'
                            : 'bg-[#EF4444]'
                        }`}
                      />
                      <span className="font-mono text-[#F5F5F5]">{p.generationStatus}</span>
                    </div>
                  </td>

                  {/* Deployment Status */}
                  <td className="py-3.5 px-4">
                    <Badge
                      variant={
                        p.status === 'suspended'
                          ? 'orange'
                          : p.deploymentStatus === 'Live'
                          ? 'emerald'
                          : 'champagne'
                      }
                    >
                      {p.status === 'suspended' ? 'SUSPENDED' : p.deploymentStatus}
                    </Badge>
                  </td>

                  {/* Dates */}
                  <td className="py-3.5 px-4 text-[#737373] font-mono text-[11px]">
                    <div>{p.createdAt}</div>
                    <div className="text-[10px] text-[#A3A3A3]">{p.updatedAt}</div>
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setInspectProject(p)}
                        className="px-2.5 py-1 rounded bg-[#151515] border border-[#292929] hover:border-[#383838] text-[#F5F5F5] text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        Inspect
                      </button>

                      <button
                        onClick={() => setViewFilesProject(p)}
                        className="p-1 rounded bg-[#151515] border border-[#292929] text-[#737373] hover:text-[#10B981] transition-colors cursor-pointer"
                        title="View Files"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setViewLogsProject(p)}
                        className="p-1 rounded bg-[#151515] border border-[#292929] text-[#737373] hover:text-[#D4AF37] transition-colors cursor-pointer"
                        title="Generation Logs"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setConfirmSuspend(p)}
                        className={`p-1 rounded bg-[#151515] border border-[#292929] transition-colors cursor-pointer ${
                          p.status === 'suspended'
                            ? 'text-[#10B981] hover:border-[#10B981]/50'
                            : 'text-[#737373] hover:text-[#EF4444] hover:border-[#EF4444]/40'
                        }`}
                        title={p.status === 'suspended' ? 'Reactivate Project' : 'Suspend Project'}
                      >
                        {p.status === 'suspended' ? <Play className="w-3.5 h-3.5" /> : <Ban className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Inspect Project Modal */}
      {inspectProject && (
        <Modal
          isOpen={!!inspectProject}
          onClose={() => setInspectProject(null)}
          title={`Project Inspector: ${inspectProject.name}`}
          size="lg"
        >
          <div className="space-y-5 text-xs">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#F5F5F5]">{inspectProject.name}</h3>
                <p className="text-[#A3A3A3] mt-0.5">{inspectProject.category}</p>
                {inspectProject.domain && (
                  <a
                    href={`https://${inspectProject.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#10B981] font-mono text-[11px] flex items-center gap-1 hover:underline mt-1"
                  >
                    https://{inspectProject.domain} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <Badge variant={inspectProject.status === 'deployed' ? 'emerald' : 'champagne'}>
                {inspectProject.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Owner</span>
                <span className="font-bold text-[#F5F5F5] text-xs mt-0.5 block truncate">{inspectProject.ownerName}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Build Latency</span>
                <span className="font-bold text-[#D4AF37] text-xs mt-0.5 block font-mono">{inspectProject.generationDuration}</span>
              </div>
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Virtual Files</span>
                <span className="font-bold text-[#F5F5F5] text-xs mt-0.5 block font-mono">{inspectProject.fileCount} source files</span>
              </div>
              <div className="p-3 rounded-lg bg-[#151515] border border-[#292929]">
                <span className="text-[#737373] block text-[10px]">Deployment</span>
                <span className="font-bold text-[#10B981] text-xs mt-0.5 block font-mono">{inspectProject.deploymentStatus}</span>
              </div>
            </div>

            {/* Modules */}
            <div>
              <span className="block font-bold text-[#A3A3A3] mb-2 uppercase tracking-wider text-[10px]">
                Active Category Modules
              </span>
              <div className="flex flex-wrap gap-1.5">
                {inspectProject.modules.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#080808] border border-[#292929] text-[11px] text-[#F5F5F5]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button variant="secondary" onClick={() => setInspectProject(null)}>
                Close Inspector
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* View Files Modal */}
      {viewFilesProject && (
        <Modal
          isOpen={!!viewFilesProject}
          onClose={() => setViewFilesProject(null)}
          title={`Virtual Code Repository: ${viewFilesProject.name}`}
          size="lg"
        >
          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-2">
              <div className="text-[#737373] text-[10px]">Repository Architecture Tree ({viewFilesProject.fileCount} files):</div>
              <div className="space-y-1 text-[#10B981]">
                <div>📁 src/</div>
                <div className="pl-4">📁 components/</div>
                <div className="pl-8 text-[#A3A3A3]">├── HeroSection.tsx</div>
                <div className="pl-8 text-[#A3A3A3]">├── ServiceCatalog.tsx</div>
                <div className="pl-8 text-[#A3A3A3]">├── BookingEngine.tsx</div>
                <div className="pl-8 text-[#A3A3A3]">└── WhatsAppLeadHook.tsx</div>
                <div className="pl-4">📁 services/</div>
                <div className="pl-8 text-[#A3A3A3]">├── categorySchema.ts</div>
                <div className="pl-8 text-[#A3A3A3]">└── edgeRouter.ts</div>
                <div className="pl-4 text-[#A3A3A3]">├── App.tsx</div>
                <div className="pl-4 text-[#A3A3A3]">└── index.css (Tailwind CSS)</div>
                <div className="text-[#D4AF37]">📄 package.json</div>
                <div className="text-[#D4AF37]">📄 vite.config.ts</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button variant="secondary" onClick={() => setViewFilesProject(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* View Logs Modal */}
      {viewLogsProject && (
        <Modal
          isOpen={!!viewLogsProject}
          onClose={() => setViewLogsProject(null)}
          title={`VectorEngine Compiler Logs: ${viewLogsProject.name}`}
          size="md"
        >
          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#080808] border border-[#292929] space-y-1.5 max-h-64 overflow-y-auto">
              {viewLogsProject.logs.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#10B981]">
                  <span className="text-[#737373]">[{idx + 1}]</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end pt-2">
              <Button variant="secondary" onClick={() => setViewLogsProject(null)}>
                Close Logs
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Confirmation Dialog */}
      {confirmSuspend && (
        <Modal
          isOpen={!!confirmSuspend}
          onClose={() => setConfirmSuspend(null)}
          title={confirmSuspend.status === 'suspended' ? 'Reactivate Project' : 'Suspend Project'}
          size="sm"
        >
          <div className="space-y-4 text-xs">
            <div className="p-3.5 rounded-xl bg-[#151515] border border-[#292929] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#F5F5F5] font-semibold">
                  Confirm status change for <span className="text-[#D4AF37]">{confirmSuspend.name}</span>?
                </p>
                <p className="text-[#737373] mt-1 text-[11px]">
                  {confirmSuspend.status === 'suspended'
                    ? 'This will restore public DNS routing and CDN edge caching.'
                    : 'This will temporarily return 423 Locked on the edge domain.'}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button variant="secondary" onClick={() => setConfirmSuspend(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                className={confirmSuspend.status === 'suspended' ? 'bg-[#10B981] text-[#080808]' : 'bg-[#EF4444] text-[#F5F5F5]'}
                onClick={() => handleToggleSuspend(confirmSuspend)}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
