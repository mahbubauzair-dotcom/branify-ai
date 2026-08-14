import React, { useState } from 'react';
import { Search, Bell, Sparkles, User, ChevronDown, LogOut, Settings, HelpCircle, Command, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

interface TopbarProps {
  onOpenSearch?: () => void;
  onOpenAIChat?: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onOpenSearch, onOpenAIChat }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const owner = authService.getOwner();

  const handleSignOut = () => {
    setShowProfileMenu(false);
    authService.logout();
    navigate('/login', { replace: true });
  };

  const mockNotifs = [
    { title: 'Website Deployed', desc: 'Aura Luxury Spa is now live at auraspa.branify.app', time: '10m ago' },
    { title: 'Lead Scan Completed', desc: 'Discovered 42 high-opportunity dental leads in Austin', time: '1h ago' },
    { title: 'AI Model Upgraded', desc: 'VectorEngine AI v4.2 models are now active', time: '3h ago' }
  ];

  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-[#292929] bg-[#0D0D0D] sticky top-0 z-30 flex-shrink-0">
      {/* Search Bar */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            onClick={onOpenSearch}
            placeholder="Search platforms, leads, or tasks..."
            readOnly
            className="w-80 h-9 rounded-full px-10 text-xs focus:outline-none bg-[#151515] border border-[#292929] text-[#F5F5F5] placeholder-[#737373] cursor-pointer hover:border-[#10B981]/50 transition-colors"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none">
            <Search className="w-3.5 h-3.5" />
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex items-center gap-0.5 text-[10px] font-semibold text-[#737373] bg-[#080808] px-1.5 py-0.5 rounded border border-[#292929]">
            <span>⌘K</span>
          </div>
        </div>
      </div>

      {/* Right Status & Controls */}
      <div className="flex items-center gap-4">
        {/* AI Engine Active Status Pill */}
        <button
          onClick={onOpenAIChat}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151515] border border-[#10B981] hover:bg-[#10B981]/10 transition-all cursor-pointer shadow-sm shadow-[#10B981]/10"
        >
          <div className="w-2 h-2 rounded-full animate-pulse bg-[#10B981]" />
          <span className="text-[11px] font-bold text-[#10B981] tracking-wider">AI ENGINE ACTIVE</span>
        </button>

        {/* Notifications & Settings Buttons */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="p-2 rounded-lg bg-[#151515] hover:bg-[#1C1C1C] border border-[#292929] text-[#A3A3A3] hover:text-[#F5F5F5] transition-all relative cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#10B981]" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-[#151515] border border-[#292929] rounded-2xl shadow-2xl py-2 z-50 animate-fadeIn">
                <div className="px-4 py-2 border-b border-[#292929] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F5F5F5] uppercase tracking-wider">Notifications</span>
                  <span className="text-[10px] text-[#10B981] font-semibold">3 Unread</span>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {mockNotifs.map((n, idx) => (
                    <div key={idx} className="px-4 py-3 hover:bg-[#1C1C1C] border-b border-[#292929]/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-[#F5F5F5]">{n.title}</span>
                        <span className="text-[10px] text-[#737373]">{n.time}</span>
                      </div>
                      <p className="text-xs text-[#A3A3A3]">{n.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 text-center border-t border-[#292929]">
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      navigate('/notifications');
                    }}
                    className="text-xs font-medium text-[#10B981] hover:underline"
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('/settings')}
            className="p-2 rounded-lg bg-[#151515] hover:bg-[#1C1C1C] border border-[#292929] text-[#A3A3A3] hover:text-[#F5F5F5] transition-all cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* User Avatar Menu */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-[#151515] hover:bg-[#1C1C1C] border border-[#292929] transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] font-bold text-xs">
              MU
            </div>
            <span className="hidden sm:inline text-xs font-semibold text-[#F5F5F5]">Mahbub</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#737373]" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-[#151515] border border-[#292929] rounded-2xl shadow-2xl py-2 z-50 animate-fadeIn">
              <div className="px-4 py-3 border-b border-[#292929]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold text-[#F5F5F5]">{owner.name}</p>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#10B981]/20 text-[#10B981]">OWNER</span>
                </div>
                <p className="text-[10px] text-[#A3A3A3]">{owner.email}</p>
              </div>
              <div className="py-1">
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/settings');
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] flex items-center gap-2 cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Control Settings</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/security');
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Security Status</span>
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/help');
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#1C1C1C] flex items-center gap-2 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Help & Documentation</span>
                </button>
              </div>
              <div className="border-t border-[#292929] pt-1">
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-xs text-[#EF4444] hover:bg-[#1C1C1C] flex items-center gap-2 font-medium cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock Control Center (Sign Out)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
