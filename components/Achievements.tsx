"use client";

const achievements = [
  {
    title: "Flipkart Girls Wanna Code 7.0",
    description: "Selected for exclusive mentorship and pre-placement opportunities.",
    statLabel: "Top 200 from 27,000",
  },
  {
    title: "Samsung Prism GenAI Hackathon",
    description: "Developed AI solutions and placed among the top teams nationally.",
    statLabel: "Top 10 Finalist",
  },
  {
    title: "LeetCode & Problem Solving",
    description: "Consistent problem solving and algorithmic thinking.",
    statLabel: "400+ Problems Solved",
  }
];

export default function Achievements() {
  return (
    <section className="w-full px-8 md:px-16 py-12">
      <h2 className="text-xs font-sans text-text-secondary uppercase tracking-widest mb-8 text-left">
        Milestones
      </h2>
      
      <div className="flex flex-col gap-6 max-w-3xl">
        {achievements.map((ach, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4 border-b border-border/50 group">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-text-primary group-hover:text-white transition-colors">{ach.title}</h3>
              <p className="text-sm text-text-secondary">{ach.description}</p>
            </div>
            <div className="text-xs font-mono text-text-secondary bg-bg-secondary border border-border px-3 py-1 rounded w-fit shrink-0">
              {ach.statLabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
