import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { IconCopy, IconCheck, IconAlertTriangle } from './ui/Icon';

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
        <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center text-slate-500">
            <svg className="animate-spin h-8 w-8 mb-4 text-brand-primary" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="font-semibold">Generating your prompt...</p>
        </div>
      );
    }
    if (error) {
      return (
         <div className="flex flex-col items-center justify-center h-full min-h-[200px] p-4 text-center text-red-600 bg-red-50 rounded-lg">
            <IconAlertTriangle className="h-8 w-8 mb-3"/>
            <p className="font-semibold">Error Generating Prompt</p>
            <p className="text-sm">{error}</p>
        </div>
      );
    }
    if (prompt) {
      return (
        <pre className="whitespace-pre-wrap break-words text-sm text-slate-700 p-4 font-mono bg-slate-100 rounded-md">
          <code>{prompt}</code>
        </pre>
      );
    }
    return (
        <div className="text-sm p-4 text-center min-h-[200px] flex items-center justify-center text-slate-500 bg-slate-100 rounded-lg">
            <p>Your generated prompt will be displayed here. Fill in the form and click 'Generate Prompt' to start.</p>
        </div>
    );
  };

  return (
    <Card>
       <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Generated Prompt</h3>
              <p className="text-sm text-slate-500 mt-1">Your optimized prompt will appear here.</p>
            </div>
          {prompt && !error && (
            <button
              onClick={handleCopy}
              className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors disabled:opacity-50"
              disabled={isCopied}
            >
              {isCopied ? (
                <>
                  <IconCheck className="h-4 w-4 mr-1.5 text-green-500" />
                  Copied
                </>
              ) : (
                <>
                  <IconCopy className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </Card>
  );
};