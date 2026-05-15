"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  content: string;
};

const SUGGESTIONS = [
  "Strongest project?",
  "System design?",
  "Why hire you?",
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hi. I'm an AI trained on Ananya's resume and projects. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || rateLimitExceeded) return;

    const messageCount = parseInt(localStorage.getItem('ai_chat_count') || '0');
    if (messageCount >= 10) {
      setRateLimitExceeded(true);
      return;
    }
    localStorage.setItem('ai_chat_count', (messageCount + 1).toString());

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messages.map(m => ({
            role: m.role === "ai" ? "assistant" : "user",
            content: m.content
          })).concat([{ role: "user", content: text }])
        })
      });

      const data = await response.json();
      if (data.message) {
        setMessages((prev) => [...prev, { role: "ai", content: data.message }]);
      } else {
        setMessages((prev) => [...prev, { role: "ai", content: "Connection error." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", content: "System error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-bg-secondary lg:bg-transparent">
      <div className="p-6 border-b border-border">
        <h2 className="text-sm font-semibold text-text-primary">Ask my AI</h2>
        <p className="text-xs text-text-secondary mt-1">Context-aware agent trained on my background.</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[90%] text-sm leading-relaxed ${
                msg.role === "user" 
                ? "bg-text-primary text-bg-primary px-4 py-2.5 rounded-xl rounded-tr-sm font-medium" 
                : "text-text-primary px-4 py-2.5 rounded-xl rounded-tl-sm bg-bg-card border border-border"
              }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-bg-card border border-border text-text-secondary rounded-xl rounded-tl-sm px-4 py-3 text-xs flex gap-1">
              <span className="animate-pulse">●</span>
              <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>●</span>
              <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>●</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border bg-bg-primary lg:bg-bg-secondary/50">
        {!rateLimitExceeded && (
          <div className="flex gap-2 overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(s)}
                className="whitespace-nowrap text-xs bg-bg-card border border-border hover:border-text-secondary text-text-secondary px-3 py-1.5 rounded-md transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {rateLimitExceeded ? (
          <div className="text-center text-text-secondary text-xs py-3 border border-border rounded-lg bg-bg-card">
            Session limit reached.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="w-full bg-bg-card border border-border rounded-lg pl-4 pr-10 py-3 text-sm text-text-primary focus:outline-none focus:border-text-secondary transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary disabled:opacity-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
