import React, { useState, useCallback } from 'react';
import { PromptForm } from './components/PromptForm';
import { GeneratedPrompt } from './components/GeneratedPrompt';
import { PromptingTips } from './components/PromptingTips';
import { TemplateSelector } from './components/TemplateSelector';
import { generateOptimizedPrompt } from './services/geminiService';
import type { PromptData } from './types';
import { templates, INITIAL_FORM_DATA } from './constants';
import { IconSparkles } from './components/ui/Icon';

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

  const handleTemplateSelect = useCallback((template: PromptData) => {
    setFormData(template);
    setGeneratedPrompt('');
    setError(null);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-white/80 dark:bg-slate-900/80 shadow-sm sticky top-0 z-10 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconSparkles className="h-8 w-8 text-brand-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI Prompt Optimizer
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <TemplateSelector templates={templates} onSelect={handleTemplateSelect} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8">
            <PromptForm formData={formData} setFormData={setFormData} onGenerate={handleGenerateClick} isLoading={isLoading} />
          </div>

          <div className="lg:sticky lg:top-24 flex flex-col gap-8">
            <GeneratedPrompt prompt={generatedPrompt} isLoading={isLoading} error={error} />
            <PromptingTips />
          </div>
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-slate-500 dark:text-slate-400">
        <p>Built with React, Tailwind CSS, and the Gemini API.</p>
      </footer>
    </div>
  );
};

export default App;