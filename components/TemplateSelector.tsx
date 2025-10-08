import React from 'react';
import type { Template } from '../types';
import { Card } from './ui/Card';
import { IconWand } from './ui/Icon';

interface TemplateSelectorProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, onSelect }) => {
  return (
    <div>
       <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Not sure where to start?</h3>
       <p className="text-center text-slate-600 mb-6">Select a template to instantly fill the form with a great starting point.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map(template => (
          <button
            key={template.id}
            onClick={() => onSelect(template)}
            className="text-left p-4 bg-white border border-slate-200/75 rounded-xl shadow-lg hover:border-brand-primary hover:shadow-xl transition-all duration-200"
          >
            <div className="flex items-center mb-2">
                <IconWand className="h-5 w-5 mr-3 text-brand-primary" />
                <h4 className="font-semibold text-slate-800">{template.name}</h4>
            </div>
            <p className="text-sm text-slate-500">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};