import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  Bell,
  ShieldCheck,
  Search,
  Activity,
  Terminal,
  LogOut,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { AdminService } from '../../services/adminService';
import { Badge } from '../common/Badge';

interface AdminTopbarProps {
  onToggleSidebar?: () => void;
}

export const AdminTopbar: React.FC<AdminTopbarProps> = ({ onToggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentAdmin = AdminService.getCurrentAdmin();

  // Generate breadcrumb from path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const pageTitle = pathParts[1] ? pathParts[1].replace('-', ' ').toUpperCase() : 'OVERVIEW';

  return (
    <header className="h-14 bg-[#0D0D0D] border-b border-[#292929] px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 select-none">
      {/* Left: Mobile trigger & Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#151515] cursor-pointer"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#737373] font-mono">ADMIN</span>
          <ChevronRight className="w-3 h-3 text-[#525252]" />
          <span className="text-[#F5F5F5] font-bold font-mono tracking-wide">{pageTitle}</span>
        </div>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            CORE SYSTEMS 100% OPERATIONAL
          </span>
        </div>
      </div>

      {/* Right: Actions, Switch App, Security status, Profile */}
      <div className="flex items-center gap-3">
        {/* Quick Search placeholder */}
        <button
          onClick={() => navigate('/admin/audit-logs')}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151515] border border-[#292929] text-xs text-[#737373] hover:text-[#A3A3A3] hover:border-[#383838] transition-colors cursor-pointer"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Audit Query...</span>
          <kbd className="px-1.5 py-0.5 text-[9px] bg-[#080808] border border-[#292929] rounded text-[#737373] font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Security indicator */}
        <button
          onClick={() => navigate('/admin/security')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#151515] border border-[#292929] hover:border-[#D4AF37]/50 text-xs text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors cursor-pointer"
          title="Security Center"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
          <span className="hidden md:inline text-[11px] font-semibold text-[#D4AF37]">Zero-Leak</span>
        </button>

        {/* Notifications / System Health */}
        <button
          onClick={() => navigate('/admin/system-health')}
          className="p-2 rounded-lg bg-[#151515] border border-[#292929] text-[#A3A3A3] hover:text-[#F5F5F5] hover:border-[#10B981]/40 transition-colors cursor-pointer relative"
          title="System Health"
        >
          <Activity className="w-3.5 h-3.5 text-[#10B981]" />
        </button>

        {/* Admin Badge */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#292929]">
          <div className="w-7 h-7 rounded bg-[#D4AF37] text-[#080808] font-black text-xs flex items-center justify-center shadow-sm">
            {currentAdmin?.avatarInitials || 'SA'}
          </div>
          <div className="hidden xl:flex flex-col text-left">
            <span className="text-xs font-bold text-[#F5F5F5] leading-none">{currentAdmin?.name || 'Superadmin'}</span>
            <span className="text-[9px] text-[#737373]">{currentAdmin?.role || 'Superadmin'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
