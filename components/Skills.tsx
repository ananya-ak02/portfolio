"use client";

import { motion } from "framer-motion";

const skills = [
  // AI/ML (Cyan)
  { name: "LangChain.js", type: "ai", size: "text-2xl md:text-3xl", rotate: "-rotate-2" },
  { name: "RAG", type: "ai", size: "text-3xl md:text-4xl", rotate: "rotate-1" },
  { name: "pgvector", type: "ai", size: "text-xl md:text-2xl", rotate: "rotate-2" },
  { name: "Groq", type: "ai", size: "text-2xl md:text-3xl", rotate: "-rotate-1" },
  { name: "Gemini Vision", type: "ai", size: "text-xl md:text-2xl", rotate: "rotate-1" },
  
  // Languages (Violet)
  { name: "TypeScript", type: "lang", size: "text-3xl md:text-4xl", rotate: "-rotate-1" },
  { name: "JavaScript", type: "lang", size: "text-xl md:text-2xl", rotate: "rotate-2" },
  { name: "Python", type: "lang", size: "text-2xl md:text-3xl", rotate: "-rotate-2" },
  { name: "C++", type: "lang", size: "text-xl md:text-2xl", rotate: "rotate-1" },
  
  // Tools & Infra (Muted)
  { name: "Next.js 14", type: "tool", size: "text-2xl md:text-3xl", rotate: "rotate-1" },
  { name: "Supabase", type: "tool", size: "text-xl md:text-2xl", rotate: "-rotate-2" },
  { name: "Redis", type: "tool", size: "text-xl md:text-2xl", rotate: "rotate-2" },
  { name: "WebSockets", type: "tool", size: "text-lg md:text-xl", rotate: "-rotate-1" },
  { name: "Docker", type: "tool", size: "text-xl md:text-2xl", rotate: "rotate-1" },
  { name: "TailwindCSS", type: "tool", size: "text-xl md:text-2xl", rotate: "-rotate-1" },
];

export default function Skills() {
  const getColorClass = (type: string) => {
    switch(type) {
      case 'ai': return 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5 hover:bg-accent-cyan/10 hover:border-accent-cyan text-shadow-cyan';
      case 'lang': return 'text-accent-violet border-accent-violet/30 bg-accent-violet/5 hover:bg-accent-violet/10 hover:border-accent-violet text-shadow-violet';
      default: return 'text-text-secondary border-border bg-bg-secondary hover:text-text-primary hover:border-text-secondary/50';
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 z-10 relative mb-10">
      <h2 className="text-sm font-mono text-text-secondary uppercase tracking-[0.2em] mb-12 text-left">
        my arsenal
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-8 px-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`
              interactive cursor-none font-bold rounded-2xl px-5 py-3 border backdrop-blur-sm shadow-sm transition-colors duration-300
              ${skill.size} ${skill.rotate} ${getColorClass(skill.type)}
            `}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
