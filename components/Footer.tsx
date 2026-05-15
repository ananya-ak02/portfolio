"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg-primary z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm font-medium">
          © 2025 Ananya Khanduja
        </p>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com/ananya-ak02" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/ananyakhanduja" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://leetcode.com/u/ananyakhanduja/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
            <SiLeetcode size={18} />
          </a>
          <a href="https://www.naukri.com/code360/profile/ananyakhanduja" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors interactive">
            <SiCodingninjas size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
