import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'py-3 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 cursor-pointer';

  const widthClass = fullWidth ? 'w-full' : '';
  
  const customClassName = `${baseClasses} 'text-text bg-purple-600/20 hover:bg-purple-500/30 hover:shadow-lg' ${widthClass} ${className}`.trim();

  return (
    <button className={customClassName} {...props}>
      {children}
    </button>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
}
  