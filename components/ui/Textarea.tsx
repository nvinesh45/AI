import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {label}
      </label>
      <textarea
        id={id}
        className="block w-full rounded-md border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 sm:text-sm transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
        {...props}
      />
    </div>
  );
};