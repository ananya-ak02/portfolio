"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "ai";
  content: string;
};

const SUGGESTIONS = [
  "What's your strongest project?",
  "Are you good at system design?",
  "Tell me about InterviewIQ",
  "Why should we hire you?",
  "What makes you different?",
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hi! I'm Ananya's AI clone. Ask me about her projects, skills, or experience." }
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

    // Rate limiting check
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
        setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I'm having trouble connecting right now." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", content: "Sorry, an error occurred." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="w-full max-w-7xl mx-auto px-6 py-20 z-10 relative">
      <div className="w-full md:w-[80%] lg:w-[70%] mr-auto">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-[0.2em] mb-2 text-left">
          ask me anything
        </h2>
        <p className="text-text-primary text-lg mb-10">
          I trained an AI on everything about me. Ask it anything.
        </p>

        <div className="bg-bg-card border border-border rounded-[24px] overflow-hidden flex flex-col h-[500px] shadow-2xl relative">
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-accent-cyan">
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                      msg.role === "user"
                        ? "bg-accent-cyan text-bg-primary rounded-br-sm font-medium"
                        : "bg-bg-secondary text-text-primary border border-border rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="bg-bg-secondary border border-border text-text-primary rounded-2xl rounded-bl-sm px-5 py-4 flex gap-1.5 items-center">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 rounded-full bg-accent-cyan/60" />
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 rounded-full bg-accent-cyan/60" />
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 rounded-full bg-accent-cyan/60" />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {!rateLimitExceeded && (
            <div className="px-6 py-3 flex gap-2 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-t border-border/50">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(s)}
                  className="text-xs bg-bg-secondary border border-border hover:border-accent-cyan text-text-secondary hover:text-accent-cyan px-4 py-2 rounded-full transition-colors interactive shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-bg-card/50 backdrop-blur-sm">
            {rateLimitExceeded ? (
              <div className="text-center text-accent-orange text-sm py-2">
                Rate limit reached for this session. Thank you for chatting!
              </div>
            ) : (
              <form 
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me a question..."
                  className="flex-1 bg-bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-cyan transition-colors interactive"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-text-primary text-bg-primary hover:bg-accent-cyan disabled:opacity-50 disabled:hover:bg-text-primary px-5 py-3 rounded-xl font-medium transition-colors interactive"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
