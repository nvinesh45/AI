
import React from 'react';
import { Card } from './ui/Card';
import { IconBulb } from './ui/Icon';

const tips = [
  { title: "Be Specific & Clear", content: "The more precise your instructions, the better the result. Avoid ambiguity." },
  { title: "Provide Context", content: "Give the AI relevant background information to work with, like the text of an article or user profile data." },
  { title: "Define the Persona", content: "Tell the AI who to be (e.g., 'Act as a professional copywriter'). This shapes the tone and style." },
  { title: "Use Examples", content: "Providing a 'few-shot' example of your desired output is one of the best ways to get what you want." },
  { title: "Specify the Format", content: "Clearly ask for the output format you need, such as JSON, a markdown table, or a numbered list." },
];

export const PromptingTips: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <IconBulb className="h-6 w-6 mr-3 text-yellow-400" />
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Prompting Tips</h3>
        </div>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="text-sm">
              <strong className="text-slate-700 dark:text-slate-300 block">{tip.title}</strong>
              <p className="text-slate-500 dark:text-slate-400">{tip.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
