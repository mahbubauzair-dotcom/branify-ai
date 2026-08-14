import React from 'react';
import { MapPin, Clock, MessageSquare, Settings2, Sparkles } from 'lucide-react';
import { TemplateConfig } from '../types';

interface TopInfoBarProps {
  config: TemplateConfig;
  onOpenCustomizer: () => void;
}

export const TopInfoBar: React.FC<TopInfoBarProps> = ({ config, onOpenCustomizer }) => {
  return (
    <div className="bg-stone-950 text-stone-300 text-xs py-2 px-4 border-b border-stone-800/80 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Location & Hours */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-stone-300 hover:text-zinc-400 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-xs">{config.address}</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-stone-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>Mon–Sat: {config.workingHoursMonSat} | Sun: {config.workingHoursSun}</span>
          </div>
        </div>

        {/* Right: WhatsApp CTA & Template Customizer Trigger */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href={`https://wa.me/${config.whatsappRaw}?text=Hello%20${encodeURIComponent(config.salonName)},%20I%20would%20like%20to%20ask%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Us:</span>
            <span>{config.whatsapp}</span>
          </a>

          <div className="h-3 w-px bg-stone-800 hidden sm:block" />

          {/* Master Template Customizer Button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 bg-zinc-500/10 hover:bg-zinc-500/20 text-zinc-400 border border-zinc-500/30 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all"
            title="Configure Salon Branding Template"
          >
            <Settings2 className="w-3 h-3 text-zinc-400" />
            <span className="hidden xs:inline">Template Settings</span>
            <Sparkles className="w-2.5 h-2.5 text-zinc-300 animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
};
