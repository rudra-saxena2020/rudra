import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is available in the environment
const API_KEY = process.env.API_KEY;

// Only initialize the AI client if the API key exists.
// This prevents a crash on startup if the key is not available.
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

if (!ai) {
  console.warn("Gemini API key not found. AI features will be disabled.");
}

export async function generateProfessionalMessage(originalMessage: string): Promise<string> {
  // Check if the AI instance is available before making a call.
  if (!ai) {
    // Reject the promise to be caught by the calling component's error handler.
    throw new Error("AI functionality is currently unavailable. Please set your GEMINI_API_KEY.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Rewrite the following message to be more professional, polite, and concise for a contact form on a developer's portfolio. Keep the core intent of the message. Message: "${originalMessage}"`,
      config: {
        temperature: 0.7,
        topP: 1,
        topK: 1,
        maxOutputTokens: 256,
      },
    });

    const text = await response.text();
    return text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to generate message from AI: ${errorMessage}`);
  }
}
