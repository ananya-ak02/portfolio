"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import clsx from "clsx";

const projects = [
  {
    name: "InterviewIQ",
    description:
      "AI interview practice platform with live confidence analysis and streaming evaluation.",
    url: "https://interviewiq-esl692t8i-ananya-khandujas-projects.vercel.app/",
    github: "https://github.com/ananya-ak02",
    tech: [
      "Next.js",
      "Groq",
      "LangChain",
      "Deepgram",
      "Tavily",
      "Supabase",
      "Redis",
    ],
    aiInside: "Voice analytics + real-time LLM feedback",
    complexity: "advanced",
    featured: true,
  },
  {
    name: "AI Code Review Agent",
    description:
      "LangChain multi-tool agent for parallel bug, security, and performance analysis.",
    url: "https://ai-code-review-agent-eta.vercel.app/",
    github: "https://github.com/ananya-ak02",
    tech: [
      "Next.js",
      "LangChain",
      "Groq",
      "Supabase pgvector",
      "Redis",
      "HuggingFace",
    ],
    aiInside: "RAG over CodeBERT embeddings + SSE streaming",
    complexity: "advanced",
    featured: true,
  },
  {
    name: "PlantOS",
    description:
      "Multimodal plant health AI with Gemini Vision and a self-improving RAG flywheel.",
    url: "https://plant-os-three.vercel.app/",
    github: "https://github.com/ananya-ak02",
    tech: [
      "Next.js",
      "Gemini Vision",
      "Groq",
      "LangChain",
      "Supabase pgvector",
      "Open-Meteo",
    ],
    aiInside: "Vision diagnosis + community-fed vector loop",
    complexity: "complex",
    featured: false,
  },
  {
    name: "AI Learning Adaptor",
    description:
      "Transforms topics into knowledge graphs with adaptive quiz reinforcement.",
    url: "https://learning-adaptor.vercel.app/",
    github: "https://github.com/ananya-ak02",
    tech: ["Next.js", "React Flow", "Framer Motion", "Generative AI"],
    aiInside: "Knowledge graph generation + adaptive learning",
    complexity: "good",
    featured: false,
  },
];

const complexityMap: Record<string, string> = {
  good: "bg-emerald-400",
  complex: "bg-amber-400",
  advanced: "bg-red-400",
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <h2 className="section-title">What I&apos;ve built</h2>
          <p className="section-subtitle">
            Full-stack AI products with measurable impact and real-time intelligence
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className={clsx(
                "card group relative flex flex-col gap-5 p-6 transition hover:-translate-y-1",
                project.featured && "border-accent-violet"
              )}
            >
              {project.featured ? (
                <span className="ai-badge">Featured</span>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {project.description}
                  </p>
                </div>
                <span
                  className={clsx(
                    "h-3 w-3 rounded-full",
                    complexityMap[project.complexity]
                  )}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-bg-primary px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="rounded-lg border border-border bg-bg-primary px-4 py-3 text-xs text-text-secondary transition-all group-hover:scale-[1.02] group-hover:border-accent-cyan group-hover:shadow-[var(--glow)]">
                <span className="text-accent-cyan">The AI inside:</span> {project.aiInside}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-accent-cyan px-4 py-2 text-xs font-semibold text-bg-primary transition hover:shadow-[var(--glow)]"
                  data-cursor="hover"
                >
                  Live demo <FaArrowUpRightFromSquare />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-text-primary transition hover:shadow-[var(--glow)]"
                  data-cursor="hover"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
