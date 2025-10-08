
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors
        bg-brand-primary hover:bg-brand-primary/90
        focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900
        disabled:pointer-events-none disabled:opacity-50
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
