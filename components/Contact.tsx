"use client";

import { FiMail } from "react-icons/fi";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 z-10 relative">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-sm font-mono text-text-secondary uppercase tracking-[0.2em] mb-8">
          get in touch
        </h2>
        
        <div className="w-full max-w-3xl bg-bg-card border border-border rounded-[32px] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden interactive group hover:border-accent-cyan/30 transition-colors">
          
          {/* Subtle glow bg */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-cyan/5 blur-[100px] pointer-events-none group-hover:bg-accent-cyan/10 transition-colors duration-700" />
          
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 relative z-10">
            Let's build something interesting.
          </h3>
          <p className="text-lg text-text-secondary max-w-lg mb-10 relative z-10">
            I'm always open to internships, collaborations, and interesting problems.
          </p>
          
          <a 
            href="mailto:ananyakhanduja02@gmail.com"
            className="flex items-center gap-3 bg-text-primary text-bg-primary hover:bg-accent-cyan px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 interactive relative z-10 shadow-lg"
          >
            <FiMail className="text-xl" />
            ananyakhanduja02@gmail.com
          </a>
          
          <div className="mt-12 w-full pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-text-secondary text-sm flex items-center gap-2">
              <span>📍</span> Meerut, UP <span className="mx-1">•</span> Available remotely
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="https://github.com/ananya-ak02" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors interactive text-sm font-medium">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/ananyakhanduja" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors interactive text-sm font-medium">
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href="https://leetcode.com/u/ananyakhanduja/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors interactive text-sm font-medium">
                <SiLeetcode /> LeetCode
              </a>
              <a href="https://www.naukri.com/code360/profile/ananyakhanduja" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors interactive text-sm font-medium">
                <SiCodingninjas /> Code360
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
