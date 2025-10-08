
export interface PromptData {
  goal: string;
  context: string;
  persona: string;
  audience: string;
  tone: string;
  format: string;
  constraints: string;
  example: string;
}

export interface Template extends PromptData {
  id: string;
  name: string;
  description: string;
}
