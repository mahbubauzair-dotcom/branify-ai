import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FolderGit2,
  Users2,
  Building2,
  Cpu,
  BarChart3,
  Rocket,
  Activity,
  ShieldCheck,
  FileText,
  Settings,
  ArrowUpRight,
  LogOut,
  ShieldAlert,
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import { AdminService } from '../../services/adminService';

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const currentAdmin = AdminService.getCurrentAdmin();

  const handleLogout = () => {
    AdminService.logout();
    navigate('/admin/login');
  };

  const navSections = [
    {
      title: 'ADMIN CONSOLE',
      items: [
        { label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" />, path: '/admin/dashboard' },
        { label: 'Users', icon: <Users className="w-4 h-4" />, path: '/admin/users' },
        { label: 'Projects', icon: <FolderGit2 className="w-4 h-4" />, path: '/admin/projects' },
        { label: 'Leads', icon: <Users2 className="w-4 h-4" />, path: '/admin/leads' },
        { label: 'Businesses', icon: <Building2 className="w-4 h-4" />, path: '/admin/businesses' },
      ]
    },
    {
      title: 'AI OPERATIONS',
      items: [
        { label: 'AI Models', icon: <Cpu className="w-4 h-4" />, path: '/admin/ai-models' },
        { label: 'AI Usage', icon: <BarChart3 className="w-4 h-4" />, path: '/admin/ai-usage' },
        { label: 'Generation Center', icon: <Sparkles className="w-4 h-4" />, path: '/generation-center' },
      ]
    },
    {
      title: 'INFRASTRUCTURE',
      items: [
        { label: 'Deployments', icon: <Rocket className="w-4 h-4" />, path: '/admin/deployments' },
        { label: 'System Health', icon: <Activity className="w-4 h-4" />, path: '/admin/system-health' },
      ]
    },
    {
      title: 'SECURITY',
      items: [
        { label: 'Security Center', icon: <ShieldCheck className="w-4 h-4" />, path: '/admin/security' },
        { label: 'Audit Logs', icon: <FileText className="w-4 h-4" />, path: '/admin/audit-logs' },
      ]
    },
    {
      title: 'CONFIGURATION',
      items: [
        { label: 'Settings', icon: <Settings className="w-4 h-4" />, path: '/admin/settings' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`w-64 flex flex-col flex-shrink-0 bg-[#0D0D0D] border-r border-[#292929] h-screen fixed lg:sticky top-0 z-50 transition-transform duration-200 select-none overflow-hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 flex items-center justify-between border-b border-[#292929]/70 bg-[#0A0A0A]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center shadow-md shadow-[#D4AF37]/20">
              <ShieldAlert className="w-4 h-4 text-[#080808]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm font-extrabold tracking-tight text-[#F5F5F5]">BRANIFY</h1>
                <span className="px-1.5 py-0.2 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] font-black uppercase">
                  Admin
                </span>
              </div>
              <span className="text-[10px] text-[#737373]">Operations Console</span>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-[#737373] hover:text-[#F5F5F5] hover:bg-[#151515] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Switch to User App Bar */}
        <div className="px-4 py-2 bg-[#151515]/60 border-b border-[#292929]">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#080808] border border-[#292929] hover:border-[#10B981]/50 text-xs text-[#A3A3A3] hover:text-[#10B981] transition-all cursor-pointer group"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <Layers className="w-3.5 h-3.5 text-[#10B981]" />
              User Dashboard
            </span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 px-3 py-3 space-y-5 overflow-y-auto">
          {navSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="px-2 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#737373]">
                {section.title}
              </h3>
              <div className="space-y-0.5">
                {section.items.map((item, itemIdx) => (
                  <NavLink
                    key={itemIdx}
                    to={item.path}
                    onClick={() => onClose && onClose()}
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center justify-between px-3 py-2 rounded-lg bg-[#1C1C1C] border border-[#D4AF37]/30 text-xs font-semibold text-[#F5F5F5] transition-all shadow-sm'
                        : 'flex items-center gap-2.5 px-3 py-2 rounded-lg text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#151515] transition-all cursor-pointer text-xs font-medium'
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-2.5">
                          <span className={isActive ? 'text-[#D4AF37]' : 'text-[#737373]'}>{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Admin Footer & Logout */}
        <div className="p-3 border-t border-[#292929] bg-[#0A0A0A] space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#151515] border border-[#292929]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold text-xs shrink-0">
                {currentAdmin?.avatarInitials || 'SA'}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#F5F5F5] truncate">{currentAdmin?.name || 'Superadmin'}</span>
                <span className="text-[9px] text-[#10B981] font-mono font-medium">● Sentinel Active</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-md hover:bg-[#292929] text-[#737373] hover:text-[#EF4444] transition-colors cursor-pointer"
              title="Logout Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
