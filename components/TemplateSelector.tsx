import React from 'react';
import type { Template, PromptData } from '../types';

interface TemplateSelectorProps {
  templates: Template[];
  onSelect: (template: PromptData) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, onSelect }) => {
  return (
    <div>
        <h2 className="text-lg font-semibold mb-1 text-slate-800 dark:text-white">Start with a Template</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Select a common use-case to pre-fill the form with a helpful example.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {templates.map((template) => {
                const {id, name, description, ...promptData} = template;
                return (
                    <button
                        key={id}
                        onClick={() => onSelect(promptData)}
                        className="text-left p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                        <h4 className="font-semibold text-slate-800 dark:text-white">{name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{description}</p>
                    </button>
                );
            })}
        </div>
    </div>
  );
};