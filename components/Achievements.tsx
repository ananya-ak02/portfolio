"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaTrophy,
  FaBolt,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa6";

const achievements = [
  {
    title: "Flipkart Girls Wanna Code 7.0 Scholar",
    detail: "Top 200 of 27,000 applicants",
    icon: FaTrophy,
    highlight: true,
  },
  {
    title: "Samsung Prism GenAI Hackathon",
    detail: "Top 10 nationwide",
    icon: FaBolt,
  },
  {
    title: "Google Big Code",
    detail: "Top 15,000",
    icon: FaGraduationCap,
  },
  {
    title: "Microsoft Learn Student Chapter",
    detail: "Executive Member · 5+ events with 100+ participants",
    icon: FaUsers,
  },
];

function useCountUp(target: number, isActive: boolean) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const start = performance.now();
    const duration = 1200;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isActive, target]);

  return value;
}

export default function Achievements() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useCountUp(200, inView);

  return (
    <section id="achievements" className="scroll-mt-24 bg-bg-secondary py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div>
          <h2 className="section-title">Milestones</h2>
          <p className="section-subtitle">
            A timeline of the wins that shaped my momentum
          </p>
        </div>

        <div ref={ref} className="card relative p-6">
          <div className="absolute left-5 top-8 h-[calc(100%-4rem)] w-px bg-border md:left-6 md:top-8 md:h-px md:w-[calc(100%-3rem)]" />

          <div className="flex flex-col gap-8 md:flex-row md:gap-6">
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex gap-4 md:w-full md:flex-col md:gap-3"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-primary text-accent-cyan ${
                      item.highlight ? "shadow-[var(--glow)]" : ""
                    }`}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </p>
                    <p className="text-sm text-text-secondary">{item.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-lg border border-border bg-bg-primary p-4 text-sm text-text-secondary"
          >
            <span className="text-accent-cyan">27,000</span> → Top {count}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
