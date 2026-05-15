"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "AI Systems Engineer",
  "Full-Stack Developer",
  "SDE Intern @ Flipkart"
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 text-xl md:text-2xl font-mono text-text-secondary overflow-hidden relative mt-2 mb-4">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
