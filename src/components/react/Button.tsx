import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'premium' | 'premium-black';
  size?: 'default' | 'large' | 'xl' | 'sm';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  size = 'default',
  disabled = false
}) => {
  const sizeStyles = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-sm",
    large: "px-8 py-3.5 md:py-4 text-base md:text-lg",
    xl: "px-12 py-4 text-lg"
  };

  if (variant === 'premium') {
    const heightClass = size === 'default' ? 'h-14' : size === 'sm' ? 'h-10' : 'h-14';
    const pxClass = size === 'default' ? 'px-10' : size === 'sm' ? 'px-6' : 'px-10';
    const fontSize = size === 'default' ? 'text-base' : size === 'sm' ? 'text-sm' : 'text-base';

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`group relative ${heightClass} w-fit overflow-hidden rounded-full bg-gradient-to-b from-[#034B80] to-[#0469B2] ${pxClass} ${fontSize} font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-all hover:ring-white/20 ${disabled ? 'pointer-events-none' : ''} ${className}`}
      >
        <div className="relative flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <span className={`flex ${heightClass} items-center justify-center gap-2`}>
            {children}
            <span className="text-[10px] opacity-80">&#10022;</span>
          </span>
          <span className={`flex ${heightClass} items-center justify-center gap-2`}>
            {children}
            <span className="text-[10px] opacity-80">&#10022;</span>
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </button>
    );
  }

  if (variant === 'premium-black') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`group relative h-14 w-fit overflow-hidden rounded-full bg-gradient-to-b from-[#242424] to-[#121212] px-10 text-base font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-all hover:ring-white/20 ${disabled ? 'pointer-events-none' : ''} ${className}`}
      >
        <div className="relative flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <span className="flex h-14 items-center justify-center gap-2">
            {children}
            <span className="text-[10px] opacity-80">&#10022;</span>
          </span>
          <span className="flex h-14 items-center justify-center gap-2">
            {children}
            <span className="text-[10px] opacity-80">&#10022;</span>
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </button>
    );
  }

  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`group relative inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg bg-[#1F2937] text-white hover:bg-[#374151] ${sizeStyles[size]} ${disabled ? 'pointer-events-none' : ''} ${className}`}
      >
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    );
  }

  // Secondary Variant
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 bg-white text-[#1F2937] border border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow-md ${sizeStyles[size]} ${disabled ? 'pointer-events-none' : ''} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

export default Button;
