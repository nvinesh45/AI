
import React from 'react';
import type { PromptData } from '../types';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { TONE_OPTIONS, FORMAT_OPTIONS } from '../constants';
import { IconWand } from './ui/Icon';

interface PromptFormProps {
  formData: PromptData;
  setFormData: React.Dispatch<React.SetStateAction<PromptData>>;
  onGenerate: () => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ formData, setFormData, onGenerate, isLoading }) => {
  const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,>(e: React.ChangeEvent<T>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Core Task</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Define what you want the AI to accomplish.</p>
        </div>

        <Input
          label="Goal / Task"
          id="goal"
          name="goal"
          placeholder="e.g., Write a marketing email, generate a Python function"
          value={formData.goal}
          onChange={handleChange}
        />

        <Textarea
          label="Context"
          id="context"
          name="context"
          placeholder="Provide background information, data, or text for the AI to use."
          value={formData.context}
          onChange={handleChange}
          rows={5}
        />
        
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Refine Output</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Specify how the AI should behave and format its response.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="AI Persona"
            id="persona"
            name="persona"
            placeholder="e.g., A friendly financial advisor"
            value={formData.persona}
            onChange={handleChange}
          />
          <Input
            label="Target Audience"
            id="audience"
            name="audience"
            placeholder="e.g., Beginner developers"
            value={formData.audience}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <Select
              label="Tone"
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              options={TONE_OPTIONS}
            />
            <Select
              label="Format"
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              options={FORMAT_OPTIONS}
            />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Advanced Options</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Add specific rules or examples to guide the AI.</p>
        </div>

        <Textarea
          label="Constraints & Rules"
          id="constraints"
          name="constraints"
          placeholder="e.g., Max 200 words, avoid technical jargon, use simple language"
          value={formData.constraints}
          onChange={handleChange}
          rows={3}
        />
         <Textarea
          label="Example of Desired Output (Few-shot)"
          id="example"
          name="example"
          placeholder="Provide a short example of what you want the output to look like."
          value={formData.example}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
        <Button onClick={onGenerate} disabled={isLoading} className="w-full">
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                </>
            ) : (
                <>
                    <IconWand className="h-5 w-5 mr-2"/>
                    Generate Optimized Prompt
                </>
            )}
        </Button>
      </div>
    </Card>
  );
};
