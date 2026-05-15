"use client";

export default function Experience() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-10 pb-20 z-10 relative">
      <div className="relative w-full rounded-[20px] bg-bg-card overflow-hidden shadow-2xl border border-border/50 group interactive">
        
        {/* Shimmer effect inside card */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 animate-shimmer pointer-events-none" />
        
        {/* Left Gradient Border (4px) */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-violet to-accent-cyan" />
        
        <div className="p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
          
          {/* Left Content */}
          <div className="flex items-start gap-6">
            {/* Flipkart CSS Logo Placeholder */}
            <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden">
                <div className="text-accent-orange font-bold text-4xl font-sans italic tracking-tighter mr-1 mt-1">f</div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Software Development Engineer Intern
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xl text-accent-cyan font-medium">Flipkart</span>
                <span className="text-text-secondary text-sm px-3 py-0.5 rounded-full bg-bg-secondary border border-border">
                  Upcoming · 2025
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Tags */}
          <div className="flex flex-wrap md:flex-col gap-2 md:items-end">
            <span className="px-3 py-1 text-xs font-mono text-accent-violet bg-accent-violet/10 rounded border border-accent-violet/20">
              Full-Stack
            </span>
            <span className="px-3 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded border border-accent-cyan/20">
              AI/ML
            </span>
            <span className="px-3 py-1 text-xs font-mono text-accent-orange bg-accent-orange/10 rounded border border-accent-orange/20">
              Production Systems
            </span>
          </div>
          
        </div>
        
        {/* Bottom Strip */}
        <div className="bg-bg-secondary/50 border-t border-border px-8 py-4 flex items-center justify-between relative z-10">
          <p className="text-sm text-text-secondary w-full md:text-center tracking-wide">
            <span className="text-text-primary font-medium">Part of Flipkart Girls Wanna Code 7.0</span> — Top 200 from 27,000 applicants
          </p>
        </div>
      </div>
    </section>
  );
}
