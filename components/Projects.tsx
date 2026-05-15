"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "InterviewIQ",
    description: "Real-time voice interview AI with context-aware question generation.",
    tech: "LangChain + Deepgram",
    stack: ["LangChain", "Deepgram", "Next.js"],
    featured: true,
    github: "https://github.com/ananya-ak02/InterviewIQ",
    live: "https://interviewiq-gilt.vercel.app/",
    image: "/interviewiq.png"
  },
  {
    title: "AI Code Review Agent",
    description: "5-tool multi-dimensional analysis engine for PRs.",
    tech: "RAG + pgvector",
    stack: ["Groq", "Redis", "Next.js"],
    featured: true,
    github: "https://github.com/ananya-ak02/ai-code-review-agent",
    live: "https://ai-code-review-agent-eta.vercel.app/",
    image: "/ai-code-review.png"
  },
  {
    title: "PlantOS",
    description: "Self-improving RAG flywheel for intelligent plant care.",
    tech: "Gemini Vision + RAG",
    stack: ["Gemini Vision", "Supabase", "React"],
    featured: false,
    github: "https://github.com/ananya-ak02/PlantOS",
    live: "https://plant-os-three.vercel.app/",
    image: "/plantos.png"
  },
  {
    title: "AI Learning Adaptor",
    description: "Dynamic knowledge graph generation for learning paths.",
    tech: "Knowledge Graph",
    stack: ["Node.js", "Next.js", "GraphDB"],
    featured: false,
    github: "https://github.com/ananya-ak02",
    live: "https://learning-adaptor.vercel.app/",
    image: "/learning-adaptor.png"
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
            className="group flex flex-col bg-bg-primary rounded-xl overflow-hidden border border-border hover:border-text-secondary/30 transition-colors"
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-bg-card relative border-b border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-xs z-0">
                Image Placeholder
              </div>
              <img 
                src={proj.image} 
                alt={proj.title}
                className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  // Fallback if image not found
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-text-primary tracking-tight">{proj.title}</h3>
                <div className="flex gap-3 text-text-secondary">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors cursor-pointer z-20"><FiGithub size={18} /></a>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors cursor-pointer z-20"><FiExternalLink size={18} /></a>
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
          </div>
        ))}
      </div>
    </section>
  );
}
