import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  elevated = false,
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={`rounded-xl border border-[#292929] ${
        elevated ? 'bg-[#1C1C1C]' : 'bg-[#151515]'
      } ${
        hoverEffect ? 'transition-all duration-200 hover:border-[#10B981]/50 hover:shadow-lg hover:shadow-[#10B981]/5' : ''
      } p-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
