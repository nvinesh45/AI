import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors
        bg-brand-secondary hover:bg-brand-secondary/90
        focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};