import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'champagne' | 'orange' | 'red' | 'gray' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'sm',
  className = ''
}) => {
  const variantStyles = {
    emerald: 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30',
    champagne: 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30',
    orange: 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30',
    red: 'bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/30',
    gray: 'bg-[#1C1C1C] text-[#A3A3A3] border border-[#292929]',
    outline: 'bg-transparent text-[#F5F5F5] border border-[#292929]'
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 rounded-full font-medium',
    md: 'text-sm px-2.5 py-1 rounded-full font-medium'
  };

  return (
    <span className={`inline-flex items-center ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};
