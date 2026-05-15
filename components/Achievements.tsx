"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(end: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, inView]);

  return count;
}

const achievements = [
  {
    id: 1,
    title: "Flipkart Girls Wanna Code 7.0",
    description: "Selected for exclusive mentorship and pre-placement interview opportunities.",
    statNumber: 200,
    statLabel: "Top 200 from 27,000",
    org: "Flipkart",
    orgColor: "text-accent-orange",
    colSpan: "md:col-span-2",
    height: "min-h-[280px]",
    watermark: "200"
  },
  {
    id: 2,
    title: "Samsung Prism GenAI Hackathon",
    description: "Developed AI solutions and placed among the top teams nationally.",
    statNumber: 10,
    statLabel: "Top 10 Finalist",
    org: "Samsung",
    orgColor: "text-[#4285F4]",
    colSpan: "md:col-span-1",
    height: "min-h-[320px]",
    watermark: "10"
  },
  {
    id: 3,
    title: "LeetCode & Problem Solving",
    description: "Consistent problem solving and algorithmic thinking.",
    statNumber: 400,
    statLabel: "400+ Problems Solved",
    org: "LeetCode",
    orgColor: "text-[#FFA116]",
    colSpan: "md:col-span-1",
    height: "min-h-[260px]",
    watermark: "400"
  }
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="w-full bg-bg-secondary py-24 z-10 relative border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-[0.2em] mb-12 text-left">
          milestones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {achievements.map((ach, idx) => {
            const count = useCounter(ach.statNumber, 2.5, isInView);
            
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className={`relative bg-bg-card border border-border rounded-[24px] p-8 overflow-hidden group interactive flex flex-col justify-between ${ach.colSpan} ${ach.height} hover:border-accent-cyan/30 transition-colors`}
              >
                {/* Watermark */}
                <div className="absolute -bottom-4 -right-4 text-[160px] md:text-[200px] leading-none font-black text-text-primary/[0.03] select-none pointer-events-none group-hover:text-text-primary/[0.05] transition-colors duration-500">
                  {ach.watermark}
                </div>
                
                <div className="relative z-10">
                  <div className={`font-bold text-lg mb-4 ${ach.orgColor}`}>
                    {ach.org}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    {ach.title}
                  </h3>
                  <p className="text-text-secondary max-w-md">
                    {ach.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-end gap-3 z-10 relative">
                  <span className="text-4xl md:text-5xl font-black text-text-primary">
                    {count}{ach.id === 3 ? '+' : ''}
                  </span>
                  <span className="text-sm text-text-secondary mb-1.5 font-medium tracking-wide uppercase">
                    {ach.statLabel.replace(ach.statNumber.toString(), '').trim()}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
