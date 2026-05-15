"use client";

import TypewriterText from "./TypewriterText";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden noise-bg">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between z-10 gap-16 lg:gap-8">
        
        {/* LEFT side (55%) */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
          <span className="font-mono text-accent-cyan/80 text-sm md:text-base tracking-wider mb-6">
            &lt; currently building AI that matters /&gt;
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-2" style={{ letterSpacing: "-0.02em" }}>
            Ananya Khanduja
          </h1>
          
          <TypewriterText />
          
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mt-4 mb-8">
            I'm a CS student at Thapar building production-grade AI systems — RAG pipelines, LangChain agents, multimodal vision models. I care about AI that solves real problems, not demos.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 text-text-secondary font-medium text-sm md:text-base mb-10">
            <span className="text-accent-cyan">4 AI Projects</span>
            <span className="text-border px-1">•</span>
            <span>Top 200 / 27K</span>
            <span className="text-border px-1">•</span>
            <span>SDE Intern @ Flipkart</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button 
              onClick={() => scrollTo('chat')}
              className="bg-accent-cyan text-bg-primary px-6 py-3 rounded-md font-semibold hover:bg-accent-cyan/90 transition-colors flex items-center gap-2 interactive"
            >
              Ask my AI <span className="text-lg">→</span>
            </button>
            <button 
              onClick={() => scrollTo('projects')}
              className="border border-border text-text-primary px-6 py-3 rounded-md font-medium hover:border-accent-cyan hover:text-accent-cyan transition-colors flex items-center gap-2 interactive"
            >
              See my work <span className="text-lg">↓</span>
            </button>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://github.com/ananya-ak02" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/ananyakhanduja" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://leetcode.com/u/ananyakhanduja/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
              <SiLeetcode size={22} />
            </a>
            <a href="https://www.naukri.com/code360/profile/ananyakhanduja" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
              <SiCodingninjas size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT side (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center justify-center relative mt-10 lg:mt-0">
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(var(--bg-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--bg-secondary) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              opacity: 0.3,
              maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
            }}
          />
          
          {/* Profile Photo Wrapper */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center z-10">
            {/* Rotating Ring Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/40 animate-rotate-ring" />
            <div className="absolute inset-2 rounded-full border border-accent-cyan/20 animate-rotate-ring" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
            
            {/* Cyan Border Glow */}
            <div className="absolute inset-4 rounded-full bg-accent-cyan/10 blur-xl" />
            
            {/* Profile Photo Placeholder */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-bg-card border-2 border-border z-20 flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/20 to-accent-cyan/20" />
               <span className="text-text-secondary font-mono text-sm">[ Photo Placeholder ]</span>
            </div>
          </div>
          
          {/* Floating Badges */}
          <div className="mt-8 flex flex-col items-center gap-3 z-10">
            <div className="bg-bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-sm text-text-primary flex items-center gap-2 shadow-lg interactive hover:border-accent-cyan/50 transition-colors">
              <span>🎯</span> Open to opportunities
            </div>
            <div className="bg-bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-sm text-text-primary flex items-center gap-2 shadow-lg interactive translate-x-4 hover:border-accent-cyan/50 transition-colors">
              <span>📍</span> Meerut, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
