import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ label, id, options, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {label}
      </label>
      <select
        id={id}
        className="block w-full rounded-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 sm:text-sm transition-colors"
        {...props}
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};