import Groq from "groq-sdk";

let cachedClient: Groq | null = null;

export function getGroqClient(): Groq {
  if (cachedClient) {
    return cachedClient;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing. Add it to .env.local.");
  }

  cachedClient = new Groq({ apiKey });
  return cachedClient;
}
