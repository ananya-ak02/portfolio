"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import ChatBubble from "./ChatBubble";

const suggestedQuestions = [
  "What's your strongest project?",
  "Are you good at system design?",
  "Tell me about InterviewIQ",
  "What's your tech stack?",
  "Why should we hire you?",
];

const MAX_MESSAGES = 10;
const STORAGE_KEY = "ak-chat-count";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "intro",
      role: "assistant",
      content:
        "Hi, I'm Ananya's AI portfolio assistant. Ask me about her projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [count, setCount] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? Number.parseInt(stored, 10) : 0;
    setCount(Number.isNaN(parsed) ? 0 : parsed);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const remaining = useMemo(
    () => Math.max(0, MAX_MESSAGES - count),
    [count]
  );
  const isLocked = count >= MAX_MESSAGES;

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) {
      return;
    }

    if (count >= MAX_MESSAGES) {
      setMessages((prev) => [
        ...prev,
        {
          id: `limit-${Date.now()}`,
          role: "assistant",
          content:
            "Session limit reached. Refresh to start a new conversation, or reach out via email for more.",
        },
      ]);
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text.trim(),
    };

    const outbound = [...messages, userMessage];
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: outbound.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !data.reply) {
        throw new Error(data.error || "Groq request failed");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.reply ?? "",
        },
      ]);
      setCount((prev) => prev + 1);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Groq is unavailable right now.";
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: message,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section
      id="ai-chat"
      className="scroll-mt-24 border-b border-border bg-bg-secondary py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <h2 className="section-title">Ask me anything</h2>
          <p className="section-subtitle">
            Powered by AI — ask about my projects, skills, or experience
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="card flex flex-col gap-4 p-6">
            <div
              ref={listRef}
              className="flex max-h-[420px] flex-1 flex-col gap-3 overflow-y-auto pr-2"
            >
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  role={message.role}
                  content={message.content}
                />
              ))}
              {isTyping ? (
                <ChatBubble role="assistant" content="" isLoading />
              ) : null}
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-4">
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleSend(question)}
                    className="rounded-md border border-border bg-bg-primary px-3 py-2 text-xs text-text-secondary transition hover:text-text-primary hover:shadow-[var(--glow)]"
                    data-cursor="hover"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSend(input);
                    }
                  }}
                  disabled={isLocked}
                  placeholder="Ask about AI systems, projects, or results..."
                  className="flex-1 rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition focus:border-accent-cyan"
                />
                <button
                  type="button"
                  onClick={() => handleSend(input)}
                  disabled={isLocked}
                  className="rounded-lg bg-accent-cyan px-6 py-3 text-sm font-semibold text-bg-primary transition hover:shadow-[var(--glow)] disabled:cursor-not-allowed disabled:opacity-60"
                  data-cursor="hover"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-text-secondary">
                {remaining} messages left in this session
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card space-y-4 p-6"
          >
            <h3 className="text-lg font-semibold text-text-primary">
              What this AI knows
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>Real project details: Groq, LangChain, Supabase, Redis.</li>
              <li>System design mindset and AI product thinking.</li>
              <li>Achievements, internships, and collaboration strength.</li>
            </ul>
            <div className="rounded-lg border border-border bg-bg-primary p-4 text-xs text-text-secondary">
              Rate limit: {MAX_MESSAGES} messages per session.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
