"use client";

import TypewriterText from "./TypewriterText";
import { SiLeetcode, SiCodingninjas } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center">
      <div>
        <div className="text-text-secondary text-sm md:text-base tracking-[0.2em] uppercase mb-4">
          Software Engineer
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-2">
          Ananya Khanduja
        </h1>

        <TypewriterText />

        <p className="text-text-secondary text-base md:text-lg leading-relaxed mt-6 mb-8 max-w-2xl">
          Computer Engineering student at Thapar building production-grade
          software and AI systems. Experienced with large-scale data
          infrastructure at Flipkart and full-stack AI applications using RAG,
          LangChain, and multimodal models.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-text-secondary font-medium text-sm mb-10">
          <span className="text-text-primary font-semibold">
            Ex-SDE Intern @ Flipkart | Core Platform
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="bg-text-primary text-bg-primary px-6 py-2.5 rounded-md font-semibold hover:bg-text-primary/90 transition-colors flex items-center gap-2"
          >
            See my work
          </button>

          <div className="flex items-center gap-5 ml-4">
            <a
              href="https://github.com/ananya-ak02"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/ananya-khanduja-72817b317"
              target="_blank"
              rel="noreferrer"
              className="text-[#0A66C2] hover:opacity-80 transition-opacity"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="https://leetcode.com/u/ananya-ak02/"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFA116] hover:opacity-80 transition-opacity"
            >
              <SiLeetcode size={22} />
            </a>

            <a
              href="https://www.naukri.com/code360/profile/ddcc43bf-65b1-471b-ad6f-6188b651d4ef"
              target="_blank"
              rel="noreferrer"
              className="text-[#F36F21] hover:opacity-80 transition-opacity"
            >
              <SiCodingninjas size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}