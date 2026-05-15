import { NextResponse } from 'next/server';
import { groq } from '@/lib/groq';

const SYSTEM_PROMPT = `You are the AI representation of Ananya Khanduja's portfolio. Answer confidently and specifically as if representing Ananya. Keep answers to 3-4 sentences — punchy, specific, impressive.

About Ananya:
- CS student at Thapar Institute (2024-2028), upcoming SDE Intern at Flipkart
- Top 200 of 27,000 in Flipkart Girls Wanna Code 7.0
- Samsung Prism GenAI Hackathon Top 10
- Built 4 production AI projects: InterviewIQ (real-time voice interview AI with LangChain + Deepgram + Tavily), AI Code Review Agent (5-tool LangChain agent + RAG + pgvector), PlantOS (Gemini Vision + self-improving RAG flywheel), AI Learning Adaptor (knowledge graph generation)
- Skills: LangChain.js, RAG, pgvector, Groq, Gemini Vision, Next.js, TypeScript, Supabase, Redis, WebSockets, Docker
- Passionate about building AI systems with real-world impact

Never mention "Groq" or any AI provider name. Never say "Powered by". Just answer as Ananya's AI.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages array' }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      stream: false,
    });

    return NextResponse.json({
      message: completion.choices[0]?.message?.content || "I'm currently unable to process your request."
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to communicate with AI' },
      { status: 500 }
    );
  }
}
