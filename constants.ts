
import type { PromptData, Template } from './types';

export const INITIAL_FORM_DATA: PromptData = {
  goal: '',
  context: '',
  persona: '',
  audience: '',
  tone: 'Professional',
  format: 'Clear paragraph format',
  constraints: '',
  example: '',
};

export const templates: Template[] = [
  {
    id: 'email',
    name: 'Write an Email',
    description: 'Draft a professional email for any occasion.',
    goal: 'Write a professional email.',
    context: 'The email should be sent to a potential client to introduce our new marketing services. Mention our recent award and offer a free 30-minute consultation.',
    persona: 'A friendly but professional marketing manager.',
    audience: 'A potential business client who is busy and receives many emails.',
    tone: 'Persuasive and concise',
    format: 'A standard email format with a clear subject line, a brief introduction, a body with 2-3 short paragraphs, and a clear call-to-action.',
    constraints: 'Keep the email under 200 words. Avoid overly technical jargon.',
    example: 'Subject: Congrats on the new launch!\n\nHi [Name],\nJust saw the news about your new product launch - congratulations to you and the team! ...'
  },
  {
    id: 'summary',
    name: 'Summarize an Article',
    description: 'Condense a long text into key points.',
    goal: 'Summarize the provided article into a concise overview.',
    context: 'The article is about the future of renewable energy and discusses solar, wind, and geothermal power sources.',
    persona: 'An expert researcher.',
    audience: 'A student who needs to quickly understand the main points of the article for a report.',
    tone: 'Informative and neutral',
    format: 'A short introductory paragraph followed by 3-5 bullet points highlighting the key takeaways.',
    constraints: 'The summary should be no more than 150 words.',
    example: ''
  },
  {
    id: 'code',
    name: 'Generate Code',
    description: 'Create a code snippet in any language.',
    goal: 'Write a Python function.',
    context: 'The function should accept a list of integers and return the sum of all even numbers in the list.',
    persona: 'A senior Python developer who writes clean, efficient, and well-documented code.',
    audience: 'A junior developer who needs a clear example.',
    tone: 'Technical and clear',
    format: 'A single Python function with a docstring explaining what it does, its parameters, and what it returns.',
    constraints: 'The code must be written in Python 3.8+. Include type hints.',
    example: 'def add_numbers(a: int, b: int) -> int:\n    """Adds two numbers together."""\n    return a + b'
  },
  {
    id: 'poem',
    name: 'Write a Poem',
    description: 'Craft a beautiful poem on any topic.',
    goal: 'Write a short poem.',
    context: 'The poem should be about the feeling of the first rain after a long, hot summer.',
    persona: 'A romantic poet, reminiscent of Keats or Shelley.',
    audience: 'A general audience who appreciates nature and evocative language.',
    tone: 'Lyrical and melancholic',
    format: 'Three stanzas, four lines each (quatrains), with an AABB rhyme scheme.',
    constraints: 'Use vivid imagery related to scent, sound, and touch.',
    example: ''
  },
];

export const TONE_OPTIONS = ['Professional', 'Casual', 'Humorous', 'Empathetic', 'Authoritative', 'Persuasive', 'Informative', 'Lyrical'];
export const FORMAT_OPTIONS = ['Paragraphs', 'Bullet Points', 'Numbered List', 'JSON', 'Markdown', 'HTML', 'Email Format', 'Table'];
