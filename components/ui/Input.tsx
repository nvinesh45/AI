import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        className="block w-full rounded-lg border-slate-200 bg-slate-100 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 sm:text-sm transition-colors placeholder:text-slate-400"
        {...props}
      />
    </div>
  );
};