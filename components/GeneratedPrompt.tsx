import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { IconCopy, IconCheck, IconAlertTriangle, IconSparkles } from './ui/Icon';

interface GeneratedPromptProps {
  prompt: string;
  isLoading: boolean;
  error: string | null;
}

export const GeneratedPrompt: React.FC<GeneratedPromptProps> = ({ prompt, isLoading, error }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (prompt) {
      setIsCopied(false);
    }
  }, [prompt]);

  const handleCopy = () => {
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-slate-500 dark:text-slate-400">
            <svg className="animate-spin h-10 w-10 mb-4 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="font-semibold">Generating your optimized prompt...</p>
            <p className="text-sm">The AI is thinking. This may take a moment.</p>
        </div>
      );
    }
    if (error) {
      return (
         <div className="flex flex-col items-center justify-center h-full p-8 text-center text-red-600 dark:text-red-400">
            <IconAlertTriangle className="h-10 w-10 mb-4"/>
            <p className="font-semibold">Error Generating Prompt</p>
            <p className="text-sm">{error}</p>
        </div>
      );
    }
    if (prompt) {
      return (
        <pre className="whitespace-pre-wrap break-words text-sm text-slate-700 dark:text-slate-300 p-4 font-mono bg-slate-50 dark:bg-slate-800/50 rounded-md">
          <code>{prompt}</code>
        </pre>
      );
    }
    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-slate-500 dark:text-slate-400">
            <IconSparkles className="h-10 w-10 mb-4 text-slate-400"/>
            <p className="font-semibold">Your optimized prompt will appear here.</p>
            <p className="text-sm">Fill out the form and click "Generate" to start.</p>
        </div>
    );
  };

  return (
    <Card className="min-h-[300px]">
       <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Generated Prompt</h3>
          {prompt && !error && (
            <button
              onClick={handleCopy}
              className="flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 dark:text-brand-secondary dark:hover:text-brand-secondary/80 transition-colors disabled:opacity-50"
              disabled={isCopied}
            >
              {isCopied ? (
                <>
                  <IconCheck className="h-4 w-4 mr-1.5" />
                  Copied!
                </>
              ) : (
                <>
                  <IconCopy className="h-4 w-4 mr-1.5" />
                  Copy
                </>
              )}
            </button>
          )}
        </div>
        <div className="flex-grow">{renderContent()}</div>
      </div>
    </Card>
  );
};