"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
};

export default function ChatBubble({ role, content, isLoading }: Props) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        "max-w-[85%] rounded-lg border border-border px-4 py-3 text-sm leading-relaxed",
        isUser
          ? "ml-auto bg-accent-violet/20 text-text-primary"
          : "bg-bg-secondary text-text-primary"
      )}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
        </div>
      ) : (
        <p>{content}</p>
      )}
    </motion.div>
  );
}
