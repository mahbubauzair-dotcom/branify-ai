import React, { useState, useEffect } from 'react';
import { Search, X, LayoutDashboard, Bot, Users, Globe, Code2, Rocket, Settings, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Go to Dashboard', icon: <LayoutDashboard className="w-4 h-4 text-[#10B981]" />, path: '/dashboard' },
    { label: 'Open AI Assistant', icon: <Bot className="w-4 h-4 text-[#10B981]" />, path: '/ai-assistant' },
    { label: 'Lead Generator', icon: <Users className="w-4 h-4 text-[#10B981]" />, path: '/lead-generator' },
    { label: 'Website Builder', icon: <Globe className="w-4 h-4 text-[#10B981]" />, path: '/website-builder' },
    { label: 'Web App Builder', icon: <Code2 className="w-4 h-4 text-[#10B981]" />, path: '/web-app-builder' },
    { label: 'Deployments', icon: <Rocket className="w-4 h-4 text-[#10B981]" />, path: '/deployments' },
    { label: 'Platform Settings', icon: <Settings className="w-4 h-4 text-[#10B981]" />, path: '/settings' },
  ].filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#080808]/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-xl bg-[#151515] border border-[#292929] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-[#292929] gap-3">
          <Search className="w-5 h-5 text-[#10B981]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search pages..."
            className="w-full bg-transparent text-[#F5F5F5] placeholder-[#737373] focus:outline-none text-sm font-medium"
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-[#1C1C1C] text-[#A3A3A3]">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-2 max-h-80 overflow-y-auto">
          <div className="px-3 py-1.5 text-[10px] font-bold text-[#737373] uppercase tracking-wider">Quick Navigation</div>
          {actions.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-[#A3A3A3]">No results found for "{query}"</div>
          ) : (
            actions.map((act, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onClose();
                  navigate(act.path);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#1C1C1C] text-sm text-[#F5F5F5] transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {act.icon}
                  <span>{act.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-[#10B981] transition-colors" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
