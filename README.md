# Ananya Khanduja — AI Portfolio

A production-ready, AI-powered portfolio built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and Groq.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom bioluminescent palette
- Framer Motion animations
- Groq API (llama-3.3-70b-versatile)
- Recharts for skill visualization (ready to extend)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variables:

```bash
cp .env.local.example .env.local
```

Add your Groq API key in `.env.local`:

```
GROQ_API_KEY=your_key_here
```

3. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the portfolio.

## AI Chat

The chat interface lives at `/api/chat` and is powered by the Groq API. Responses are constrained to 3–4 sentences and are tailored to Ananya's projects, skills, and achievements.

## Deployment

Deploy on Vercel with the default Next.js settings. Add `GROQ_API_KEY` as an environment variable in the Vercel dashboard.
