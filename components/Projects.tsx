"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "InterviewIQ",
    description: "Real-time voice interview AI with context-aware question generation.",
    tech: "LangChain + Deepgram",
    stack: ["LangChain", "Deepgram", "Next.js"],
    featured: true,
  },
  {
    title: "AI Code Review Agent",
    description: "5-tool multi-dimensional analysis engine for PRs.",
    tech: "RAG + pgvector",
    stack: ["Groq", "Redis", "Next.js"],
    featured: true,
  },
  {
    title: "PlantOS",
    description: "Self-improving RAG flywheel for intelligent plant care.",
    tech: "Gemini Vision + RAG",
    stack: ["Gemini Vision", "Supabase", "React"],
    featured: false,
  },
  {
    title: "AI Learning Adaptor",
    description: "Dynamic knowledge graph generation for learning paths.",
    tech: "Knowledge Graph",
    stack: ["Node.js", "Next.js", "GraphDB"],
    featured: false,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-8 md:px-16 py-12">
      <h2 className="text-xs font-sans text-text-secondary uppercase tracking-widest mb-8 text-left">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col bg-bg-primary rounded-xl p-6 border border-border hover:border-text-secondary/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-text-primary tracking-tight">{proj.title}</h3>
              <div className="flex gap-2 text-text-secondary">
                <a href="#" className="hover:text-text-primary transition-colors"><FiGithub size={18} /></a>
                <a href="#" className="hover:text-text-primary transition-colors"><FiExternalLink size={18} /></a>
              </div>
            </div>
            
            <p className="text-sm text-text-secondary mb-6 flex-grow">{proj.description}</p>
            
            <div className="mt-auto flex flex-col gap-3">
              <div className="text-xs text-text-primary font-mono bg-bg-secondary px-2 py-1 rounded w-fit border border-border">
                {proj.tech}
              </div>
              <div className="flex flex-wrap gap-2">
                {proj.stack.map(tech => (
                  <span key={tech} className="text-xs text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
