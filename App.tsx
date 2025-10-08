import React, { useState, useCallback } from 'react';
import { PromptForm } from './components/PromptForm';
import { GeneratedPrompt } from './components/GeneratedPrompt';
import { generateOptimizedPrompt } from './services/geminiService';
import type { PromptData, Template } from './types';
import { INITIAL_FORM_DATA, templates } from './constants';
import { IconSparkles } from './components/ui/Icon';
import { TemplateSelector } from './components/TemplateSelector';
import { PromptingTips } from './components/PromptingTips';

const App: React.FC = () => {
  const [formData, setFormData] = useState<PromptData>(INITIAL_FORM_DATA);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateClick = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedPrompt('');
    try {
      const result = await generateOptimizedPrompt(formData);
      setGeneratedPrompt(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [formData]);
  
  const handleSelectTemplate = (template: Template) => {
    const { id, name, description, ...templateData } = template;
    setFormData(templateData);
  };


  return (
    <div className="min-h-screen font-sans px-4">
      <header className="py-12 md:py-16 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3">
            <IconSparkles className="h-10 w-10 text-brand-primary" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Promptify AI
            </h1>
          </div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Transform your simple ideas into powerful, high-quality prompts for any AI tool.
          </p>
        </div>
      </header>

      <main className="container mx-auto pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <PromptForm formData={formData} setFormData={setFormData} onGenerate={handleGenerateClick} isLoading={isLoading} />
            <div className="lg:sticky lg:top-8">
              <GeneratedPrompt prompt={generatedPrompt} isLoading={isLoading} error={error} />
            </div>
        </div>
        <div className="mt-12">
          <TemplateSelector templates={templates} onSelect={handleSelectTemplate} />
        </div>
        <div className="mt-12">
            <PromptingTips />
        </div>
      </main>
    </div>
  );
};

export default App;