import React from 'react';
import { Card } from './Card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  description?: string;
  accentColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  trend = 'up',
  icon,
  description,
  accentColor
}) => {
  return (
    <div className="p-5 rounded-xl flex flex-col gap-1 shadow-2xl relative overflow-hidden bg-[#151515] border border-[#292929] hover:border-[#10B981]/40 transition-all duration-200 group">
      {/* Top row: Label & Icon */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#737373]">{title}</span>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-[#080808] border border-[#292929] flex items-center justify-center text-[#10B981] group-hover:border-[#10B981]/30 transition-colors">
            {icon}
          </div>
        )}
      </div>

      {/* Main Metric Value */}
      <div className="text-3xl font-bold text-[#F5F5F5] tracking-tight mt-1">
        {value}
      </div>

      {/* Footer Info / Change */}
      <div className="flex items-center gap-2 mt-1">
        {change && (
          <span
            className={`text-[11px] font-semibold ${
              trend === 'up'
                ? 'text-[#34D399]'
                : trend === 'down'
                ? 'text-[#EF4444]'
                : 'text-[#A3A3A3]'
            }`}
          >
            {change}
          </span>
        )}
        {description && <span className="text-[11px] text-[#A3A3A3] truncate">{description}</span>}
      </div>

      {/* Top right subtle glow */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-[#10B981] blur-3xl pointer-events-none" />
    </div>
  );
};
