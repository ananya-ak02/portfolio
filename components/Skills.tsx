"use client";

import { motion } from "framer-motion";
import {
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const skillGroups = [
  {
    label: "Languages",
    items: ["C++", "Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "AI/ML",
    items: [
      "LangChain.js ✦",
      "RAG ✦",
      "pgvector ✦",
      "Prompt Engineering ✦",
      "Groq ✦",
      "Gemini ✦",
      "Agents ✦",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "React Flow"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST APIs", "WebSockets", "Redis", "API Design"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    label: "Tools",
    items: ["Git", "AWS", "Docker", "Vercel"],
  },
];

const radarData = [
  { area: "AI/ML", score: 95 },
  { area: "Frontend", score: 88 },
  { area: "Backend", score: 84 },
  { area: "Systems", score: 82 },
  { area: "Data", score: 86 },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <h2 className="section-title">My arsenal</h2>
          <p className="section-subtitle">
            A hex-grid of the tools I use to build AI systems end-to-end
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col gap-6 p-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
              Skill signal
            </p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="70%">
                  <PolarAngleAxis
                    dataKey="area"
                    tick={{ fill: "#7A9E9A", fontSize: 12 }}
                  />
                  <Radar
                    dataKey="score"
                    stroke="#00FFD1"
                    fill="#00FFD1"
                    fillOpacity={0.12}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-text-secondary">
              A quick glance at the balance between AI systems, product engineering,
              and data stack depth.
            </p>
          </motion.div>
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
                {group.label}
              </p>
              <div className="hex-grid mt-6">
                {group.items.map((skill) => (
                  <div key={skill} className="hex-item" data-cursor="hover">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
