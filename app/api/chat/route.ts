import { NextResponse } from "next/server";
import { getGroqClient } from "@/lib/groq";

const SYSTEM_PROMPT = `You are Ananya Khanduja's AI portfolio assistant. Answer as if you are representing Ananya in a professional context. Be confident, specific, and impressive. Always mention specific technical details from her projects. Keep answers to 3-4 sentences max — punchy and memorable.

About Ananya:
- Pre-final year CS student at Thapar Institute of Engineering and Technology
- Upcoming SDE Intern at Flipkart
- Top 200 of 27,000 in Flipkart Girls Wanna Code 7.0
- Built 4 AI-powered full-stack projects: InterviewIQ (voice AI interview platform), AI Code Review Agent (LangChain multi-tool agent), PlantOS (multimodal vision + RAG flywheel), AI Learning Adaptor (knowledge graph generation)
- Skills: LangChain, RAG, pgvector, Groq, Gemini Vision, Next.js, TypeScript, Supabase, Redis, WebSockets
- Passionate about building AI systems that solve real problems
- Strong in DSA, system design concepts, full-stack development

Keep responses confident, specific, and under 4 sentences. Mention project names and tech stack details when relevant.`;

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const incoming = body.messages ?? [];

    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...incoming.filter((message) => message.role !== "system"),
    ];

    const groq = getGroqClient();
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_tokens: 240,
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json(
        { error: "No response from Groq." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
