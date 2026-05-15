"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            A focused snapshot of how I build and what I care about
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card space-y-6 p-6"
        >
          <p className="text-lg text-text-secondary">
            I&apos;m Ananya, a pre-final year Computer Engineering student at Thapar
            Institute. I build AI systems that feel practical, fast, and grounded
            in product impact — from real-time voice analysis in InterviewIQ to
            multi-tool review agents with RAG, Groq, and Supabase pgvector. I care
            about clear system design, measurable outcomes, and shipping work that
            recruiters can actually demo.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "4 AI Projects", value: "Full-stack" },
              { label: "200+ hours training", value: "DSA + GenAI" },
              { label: "27K → Top 200", value: "Flipkart GWC" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-bg-primary p-4"
              >
                <p className="text-sm text-text-secondary">{item.label}</p>
                <p className="text-base font-semibold text-text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-bg-primary p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                Currently reading
              </p>
              <p className="mt-2 text-sm text-text-primary">
                Designing Data-Intensive Applications + AI system design case
                studies
              </p>
            </div>
            <div className="rounded-lg border border-border bg-bg-primary p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
                Currently building
              </p>
              <p className="mt-2 text-sm text-text-primary">
                A multi-modal recruiter assistant for portfolio evaluation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
