import React from 'react';
import type { PromptData } from '../types';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { TONE_OPTIONS, FORMAT_OPTIONS } from '../constants';
import { IconSparkles } from './ui/Icon';

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
          <h3 className="text-lg font-semibold text-slate-800">Describe Your Prompt</h3>
          <p className="text-sm text-slate-500 mt-1">Fill out the fields below to generate an optimized AI prompt.</p>
        </div>

        <Input
          label="Main Goal"
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        />

        <Textarea
          label="Context"
          id="context"
          name="context"
          value={formData.context}
          onChange={handleChange}
          rows={5}
        />
        
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
              label="Preferred Format"
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              options={FORMAT_OPTIONS}
            />
        </div>

        <Textarea
          label="Constraints"
          id="constraints"
          name="constraints"
          value={formData.constraints}
          onChange={handleChange}
          rows={3}
        />
        
        <div className="pt-2">
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
                        <IconSparkles className="h-5 w-5 mr-2"/>
                        Generate Prompt
                    </>
                )}
            </Button>
        </div>
      </div>
    </Card>
  );
};