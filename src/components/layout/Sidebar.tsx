import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Bot,
  FolderGit2,
  Users,
  Building2,
  BarChart3,
  Globe,
  Code2,
  Palette,
  Cpu,
  Rocket,
  Gauge,
  Layers,
  HeartPulse,
  ShieldCheck,
  ScrollText,
  Settings
} from 'lucide-react';
import { authService } from '../../services/authService';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const owner = authService.getOwner();

  const navSections = [
    {
      title: 'WORKSPACE',
      items: [
        { label: 'Control Center', icon: <LayoutDashboard className="w-4 h-4" />, path: '/dashboard' },
        { label: 'AI Assistant', icon: <Bot className="w-4 h-4" />, path: '/ai-assistant' },
        { label: 'Projects', icon: <FolderGit2 className="w-4 h-4" />, path: '/projects' },
      ]
    },
    {
      title: 'DISCOVERY & LEADS',
      items: [
        { label: 'Business Finder', icon: <Users className="w-4 h-4 text-[#10B981]" />, path: '/lead-generator' },
        { label: 'Businesses Registry', icon: <Building2 className="w-4 h-4" />, path: '/businesses' },
        { label: 'Market Intelligence', icon: <BarChart3 className="w-4 h-4" />, path: '/business-intelligence' },
      ]
    },
    {
      title: 'BUILD & GENERATION',
      items: [
        { label: 'Website Builder', icon: <Globe className="w-4 h-4 text-[#D4AF37]" />, path: '/website-builder' },
        { label: 'Web App Builder', icon: <Code2 className="w-4 h-4" />, path: '/web-app-builder' },
        { label: 'Brand Studio', icon: <Palette className="w-4 h-4" />, path: '/brand-studio' },
        { label: 'Generation Pipeline', icon: <Cpu className="w-4 h-4" />, path: '/generation-center' },
      ]
    },
    {
      title: 'OPERATIONS & CLOUD',
      items: [
        { label: 'Edge Deployments', icon: <Rocket className="w-4 h-4" />, path: '/deployments' },
        { label: 'AI Usage & Costs', icon: <Gauge className="w-4 h-4" />, path: '/ai-usage' },
        { label: 'AI Models & Gateway', icon: <Layers className="w-4 h-4" />, path: '/ai-models' },
        { label: 'System Health', icon: <HeartPulse className="w-4 h-4 text-[#10B981]" />, path: '/system-health' },
      ]
    },
    {
      title: 'GOVERNANCE & SECURITY',
      items: [
        { label: 'Security Center', icon: <ShieldCheck className="w-4 h-4 text-[#10B981]" />, path: '/security' },
        { label: 'Audit & Activity Logs', icon: <ScrollText className="w-4 h-4" />, path: '/audit-logs' },
        { label: 'Settings', icon: <Settings className="w-4 h-4" />, path: '/settings' },
      ]
    }
  ];

  return (
    <aside className="w-64 flex flex-col flex-shrink-0 bg-[#0D0D0D] border-r border-[#292929] h-screen sticky top-0 select-none overflow-hidden">
      {/* Brand Header */}
      <div className="p-5 flex flex-col gap-1 border-b border-[#292929]/70">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#10B981] flex items-center justify-center shadow-md shadow-[#10B981]/25 border border-[#10B981]/40">
              <span className="text-[#080808] font-black text-xs">BA</span>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-[#D4AF37]">BRANIFY AI</h1>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#10B981]">Owner Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 px-3 py-3 space-y-5 overflow-y-auto custom-scrollbar">
        {navSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#737373]">
              {section.title}
            </h3>
            <div className="space-y-0.5">
              {section.items.map((item, itemIdx) => (
                <NavLink
                  key={itemIdx}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-between px-3 py-2 rounded-xl bg-[#1C1C1C] border border-[#292929] text-xs font-semibold text-[#F5F5F5] transition-all shadow-sm'
                      : 'flex items-center gap-2.5 px-3 py-2 rounded-xl opacity-75 hover:opacity-100 hover:bg-[#151515] text-[#A3A3A3] hover:text-[#F5F5F5] transition-all cursor-pointer text-xs font-medium'
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isActive ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                        ) : (
                          <span className="flex-shrink-0 opacity-80">{item.icon}</span>
                        )}
                        <span className="truncate">{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="text-[#10B981] opacity-90 flex-shrink-0">{item.icon}</span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Owner Profile Footer */}
      <div className="p-3 border-t border-[#292929] mt-auto bg-[#0A0A0A]">
        <div className="flex items-center justify-between p-2 rounded-xl bg-[#151515] border border-[#292929]">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#10B981]/25 to-[#D4AF37]/25 border border-[#292929] flex items-center justify-center text-[#10B981] font-bold text-[11px] flex-shrink-0">
              {owner.avatarInitials}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-[#F5F5F5] truncate">{owner.name}</span>
              <span className="text-[9px] text-[#10B981] font-medium truncate">Platform Owner</span>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-sm shadow-[#10B981]/50" title="Active Private Session" />
        </div>
      </div>
    </aside>
  );
};
