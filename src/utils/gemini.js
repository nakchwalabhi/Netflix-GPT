import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const getMovieRecommendations = async (prompt) => {
  const models = [
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
  ];

  for (const model of models) {
    try {
      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      // FIX: response.text is a getter property, NOT a function. 
      if (response && response.text) {
        return response.text; 
      }
      
    } catch (error) {
      console.warn(`Model ${model} failed, trying next fallback...`, error);
    }
  }

  throw new Error("All Gemini models failed to return a recommendation.");
};