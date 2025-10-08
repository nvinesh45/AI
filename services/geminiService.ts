
import { GoogleGenAI } from "@google/genai";
import type { PromptData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set. Please add it to your environment.");
}
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const buildMetaPrompt = (data: PromptData): string => {
  return `You are a world-class AI prompt engineering expert. Your task is to take a user's simple request and transform it into a high-quality, detailed, and effective prompt that can be used with advanced language models like Gemini, GPT-4, and Claude.

Based on the user's input below, generate a comprehensive and well-structured prompt. The final prompt should be ready to be copy-pasted.

Follow these instructions for creating the prompt:
1.  **Role & Goal:** Start by defining the AI's role and its primary objective.
2.  **Clarity & Specificity:** Make the instructions unambiguous. Break down complex tasks into smaller, manageable steps.
3.  **Context:** Use delimiters like \`\`\` or <context> to clearly separate provided context from the instructions.
4.  **Persona & Tone:** Clearly state the desired persona and tone for the response.
5.  **Structure & Format:** Explicitly define the desired output format (e.g., JSON, Markdown table, bullet points).
6.  **Constraints:** List any constraints, such as word count, topics to avoid, or specific language to use.
7.  **Examples (Few-shot):** If the user provides an example, incorporate it to guide the model's output style and structure.

---
**USER'S INPUT:**

**1. Primary Goal/Task:**
${data.goal || 'Not specified'}

**2. Key Context (Background info, data, text to analyze):**
${data.context || 'Not specified'}

**3. AI Persona (Act as a...):**
${data.persona || 'Helpful assistant'}

**4. Target Audience for the Output:**
${data.audience || 'General audience'}

**5. Desired Tone:**
${data.tone || 'Neutral'}

**6. Required Output Format:**
${data.format || 'Clear text'}

**7. Constraints & Rules to Follow:**
${data.constraints || 'None'}

**8. Example of Desired Output:**
${data.example || 'None'}

---
**GENERATED PROMPT:**
(Now, generate the complete, optimized, and ready-to-use prompt below based on the user's input and the instructions above. Do not add any commentary before or after the prompt itself.)
`;
};

export const generateOptimizedPrompt = async (data: PromptData): Promise<string> => {
  try {
    const metaPrompt = buildMetaPrompt(data);
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: metaPrompt,
        config: {
            temperature: 0.5,
            topP: 0.95,
        }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating prompt with Gemini API:", error);
    throw new Error("Failed to generate prompt. Please check your API key and network connection.");
  }
};
