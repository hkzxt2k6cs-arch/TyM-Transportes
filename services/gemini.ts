
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteEstimate } from "../types";

// Always initialize the client using a named parameter for the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartQuote = async (description: string): Promise<QuoteEstimate> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Estima los requerimientos de mudanza para esta lista: ${description}`,
    config: {
      systemInstruction: "Eres un experto en logística de mudanzas para 'TyM Transportes y Mudanzas' operando específicamente en España. Analiza el texto para identificar muebles y bultos. Calcula el volumen en metros cúbicos. Sugiere un tipo de vehículo adecuado. Proporciona un rango de precios estimado en EUROS (€) basado en los costos del mercado español (mano de obra, combustible y peajes en España). Considera mudanzas locales en ciudades como Madrid, Barcelona, Valencia o trayectos nacionales dentro de la península e islas.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          items: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                quantity: { type: Type.NUMBER },
                estimatedVolume: { type: Type.NUMBER }
              },
              required: ["name", "quantity", "estimatedVolume"]
            }
          },
          totalVolume: { type: Type.NUMBER },
          recommendedTruck: { type: Type.STRING },
          estimatedPriceRange: {
            type: Type.OBJECT,
            properties: {
              min: { type: Type.NUMBER },
              max: { type: Type.NUMBER }
            },
            required: ["min", "max"]
          },
          advice: { type: Type.STRING }
        },
        required: ["items", "totalVolume", "recommendedTruck", "estimatedPriceRange", "advice"]
      }
    }
  });

  // Directly access the text property from the response.
  return JSON.parse(response.text || '{}') as QuoteEstimate;
};

export const chatWithSupport = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "Eres el asistente de IA de TyM Transportes y Mudanzas. Eres servicial, profesional y amable. Proporcionas información sobre servicios de mudanzas, consejos de embalaje y ayudas a los usuarios con su cotización. Tu negocio opera principalmente en España (Península, Baleares y Canarias) y ofrece servicios internacionales con México. Responde siempre pensando en el contexto de precios y servicios de España.",
    },
  });
  
  // Use sendMessage to interact with the chat session.
  const result = await chat.sendMessage({ message });
  // Directly access the text property from the result.
  return result.text;
};
