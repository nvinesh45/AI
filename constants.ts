import type { PromptData, Template } from './types';

export const INITIAL_FORM_DATA: PromptData = {
  goal: 'Write a marketing email',
  context: 'Provide background info, product details, target audience, etc.',
  tone: 'Professional',
  format: 'Email',
  constraints: 'e.g., Max 200 words, avoid technical jargon, use emojis',
};

// Note: Templates are no longer rendered in the UI but could be used later.
export const templates: Template[] = [
  {
    id: 'email',
    name: 'Write an Email',
    description: 'Draft a professional email for any occasion.',
    goal: 'Write a professional email about our new marketing services.',
    context: 'The email is for a potential client. Mention our recent award and offer a free 30-minute consultation.',
    tone: 'Persuasive and concise',
    format: 'Email',
    constraints: 'Keep the email under 200 words. Avoid overly technical jargon.',
  },
  {
    id: 'summary',
    name: 'Summarize an Article',
    description: 'Condense a long text into key points.',
    goal: 'Summarize the provided article into a concise overview.',
    context: 'The article is about the future of renewable energy.',
    tone: 'Informative and neutral',
    format: 'Bullet Points',
    constraints: 'The summary should be no more than 150 words.',
  },
];

export const TONE_OPTIONS = ['Professional', 'Casual', 'Friendly', 'Humorous', 'Empathetic', 'Authoritative', 'Persuasive', 'Informative'];
export const FORMAT_OPTIONS = ['Paragraph', 'Bullet Points', 'Numbered List', 'Email', 'JSON', 'Markdown', 'HTML', 'Table'];