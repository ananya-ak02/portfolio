"use client";

export default function Experience() {
  return (
    <section className="w-full px-8 md:px-16 py-12">
      <h2 className="text-xs font-sans text-text-secondary uppercase tracking-widest mb-8 text-left">
        Experience
      </h2>
      
      <div className="w-full max-w-3xl bg-bg-card border border-border rounded-xl p-8 hover:border-border/80 transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-border">
                <div className="text-[#FF6B35] font-bold text-2xl font-sans italic tracking-tighter mt-1">f</div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                Software Development Engineer Intern
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-text-secondary font-medium">Flipkart</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <span className="text-text-secondary text-xs font-medium px-3 py-1 rounded bg-bg-secondary border border-border">
              Upcoming · 2025
            </span>
          </div>
        </div>
        
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          Part of Flipkart Girls Wanna Code 7.0 — Top 200 from 27,000 applicants. Selected for exclusive mentorship and pre-placement opportunities focusing on high-scale systems and production engineering.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary rounded border border-border">
            Full-Stack
          </span>
          <span className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary rounded border border-border">
            AI/ML
          </span>
          <span className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary rounded border border-border">
            Production Systems
          </span>
        </div>
      </div>
    </section>
  );
}
