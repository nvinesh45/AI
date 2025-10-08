export interface PromptData {
  goal: string;
  context: string;
  tone: string;
  format: string;
  constraints: string;
}

export interface Template extends PromptData {
  id: string;
  name: string;
  description: string;
}