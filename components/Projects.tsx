"use client";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "InterviewIQ",
    description: "Real-time voice interview AI with context-aware question generation.",
    aiTag: "RAG + LangChain Agent",
    aiExpanded: "LangChain + Deepgram + Tavily for intelligent, low-latency conversations",
    stack: ["LangChain", "Deepgram", "Next.js"],
    featured: true,
    colSpan: "lg:col-span-6",
  },
  {
    title: "AI Code Review Agent",
    description: "5-tool multi-dimensional analysis engine for PRs.",
    aiTag: "RAG + pgvector",
    aiExpanded: "LangChain agent using Supabase pgvector and CodeBERT",
    stack: ["Groq", "Redis", "Next.js"],
    featured: true,
    colSpan: "lg:col-span-4",
  },
  {
    title: "PlantOS",
    description: "Self-improving RAG flywheel for intelligent plant care.",
    aiTag: "Gemini Vision + RAG",
    aiExpanded: "Gemini Vision for multimodal analysis and adaptive context",
    stack: ["Gemini Vision", "Supabase", "React"],
    featured: false,
    colSpan: "lg:col-span-4",
  },
  {
    title: "AI Learning Adaptor",
    description: "Dynamic knowledge graph generation for learning paths.",
    aiTag: "Knowledge Graph",
    aiExpanded: "AI-driven real-time learning path adaptation",
    stack: ["Node.js", "Next.js", "GraphDB"],
    featured: false,
    colSpan: "lg:col-span-6",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 pt-10 pb-16 z-10 relative">
      <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.2em] mb-10 text-left">
        what i've built
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className={`group relative bg-bg-card rounded-2xl p-8 border border-border transition-all duration-300 hover:border-accent-cyan hover:shadow-[0_0_30px_rgba(0,255,209,0.05)] flex flex-col justify-between ${proj.colSpan} interactive overflow-hidden`}
          >
            {/* Featured Badge */}
            {proj.featured && (
              <div className="absolute top-0 right-8 bg-accent-violet text-white text-xs font-bold px-3 py-1 rounded-b-lg flex items-center gap-1 shadow-lg">
                <span>★</span> Featured
              </div>
            )}
            
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-3 mt-2">{proj.title}</h3>
              <p className="text-text-secondary mb-6">{proj.description}</p>
              
              {/* AI Tag - Expanding on hover */}
              <div className="inline-flex max-w-full overflow-hidden mb-6 group-hover:bg-accent-cyan/5 transition-colors rounded border border-accent-cyan/20">
                <div className="px-3 py-1.5 text-xs font-mono text-accent-cyan whitespace-nowrap border-r border-accent-cyan/20 shrink-0">
                  <span className="opacity-70 mr-2">/ai</span> 
                  {proj.aiTag}
                </div>
                <div className="px-3 py-1.5 text-xs text-text-secondary whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs md:group-hover:max-w-md transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  {proj.aiExpanded}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {proj.stack.map(tech => (
                  <span key={tech} className="text-xs text-text-secondary bg-bg-secondary px-2.5 py-1 rounded-full border border-border">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 shrink-0">
                <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-accent-cyan transition-colors interactive">
                  Live <FiExternalLink />
                </a>
                <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-accent-cyan transition-colors interactive">
                  GitHub <FiGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
