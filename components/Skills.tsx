"use client";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: ["LangChain.js", "RAG", "pgvector", "Groq", "Gemini Vision"]
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++"]
  },
  {
    category: "Infrastructure & Tools",
    skills: ["Next.js 14", "Supabase", "Redis", "WebSockets", "Docker", "TailwindCSS"]
  }
];

export default function Skills() {
  return (
    <section className="w-full px-8 md:px-16 py-12 mb-10">
      <h2 className="text-xs font-sans text-text-secondary uppercase tracking-widest mb-8 text-left">
        Skills
      </h2>
      
      <div className="flex flex-col gap-8 max-w-3xl">
        {skillCategories.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-medium text-text-primary mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1.5 text-sm bg-bg-secondary text-text-secondary rounded-md border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
