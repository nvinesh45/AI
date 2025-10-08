import React from 'react';
import { Card } from './ui/Card';
import { IconBulb } from './ui/Icon';

const tips = [
  { title: "Be Specific", description: "Provide clear, detailed instructions. The more specific you are, the better the result." },
  { title: "Define the Persona", description: "Tell the AI who it should be (e.g., 'Act as a senior copywriter')." },
  { title: "Provide Context", description: "Give background information to help the AI understand the task." },
  { title: "Use Examples", description: "Show the AI exactly what you want with a few-shot example." },
  { title: "Set Constraints", description: "Specify word count, tone, and format to guide the output." },
];

export const PromptingTips: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center mb-4">
            <IconBulb className="h-6 w-6 mr-3 text-yellow-500" />
            <h3 className="text-lg font-semibold text-slate-800">Quick Prompting Tips</h3>
        </div>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="text-sm">
              <span className="font-semibold text-slate-700">{tip.title}:</span>
              <span className="text-slate-600 ml-1.5">{tip.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};