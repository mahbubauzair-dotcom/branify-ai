import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'champagne';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  isLoading,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-4 py-2 rounded-lg gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary: 'bg-[#10B981] hover:bg-[#059669] text-[#080808] font-bold shadow-lg shadow-[#10B981]/20 active:scale-[0.98]',
    secondary: 'bg-[#151515] hover:bg-[#1C1C1C] text-[#F5F5F5] font-semibold border border-[#292929]',
    outline: 'bg-transparent hover:bg-white/5 text-[#F5F5F5] font-semibold border border-[#292929]',
    ghost: 'bg-transparent hover:bg-[#1C1C1C] text-[#A3A3A3] hover:text-[#F5F5F5]',
    danger: 'bg-[#EF4444] hover:bg-opacity-90 text-[#F5F5F5] font-bold shadow-lg shadow-[#EF4444]/20',
    champagne: 'bg-[#D4AF37] hover:bg-[#c29f30] text-[#080808] font-bold shadow-lg shadow-[#D4AF37]/20 active:scale-[0.98]'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};
