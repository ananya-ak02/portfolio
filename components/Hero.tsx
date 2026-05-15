"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import ParticleCanvas from "./ParticleCanvas";
import TypewriterText from "./TypewriterText";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ananya-ak02",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ananya-khanduja-72817b317",
    icon: FaLinkedinIn,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/ananya-ak02/",
    icon: SiLeetcode,
  },
  {
    label: "Code360",
    href: "https://www.naukri.com/code360/profile/ddcc43bf-65b1-471b-ad6f-6188b651d4ef",
    icon: FaCode,
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-border bg-bg-primary">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(123,47,255,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(0,255,209,0.12),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24">
        <div className="absolute right-6 top-6 rounded-lg border border-border bg-bg-card px-4 py-2 text-xs uppercase tracking-[0.2em] text-text-secondary">
          🟢 Open to opportunities
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
            Meerut, UP · AI Systems Builder
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-text-primary md:text-7xl">
            Ananya Khanduja
          </h1>
          <TypewriterText
            phrases={[
              "AI Systems Engineer",
              "Full-Stack Developer",
              "SDE Intern @ Flipkart",
            ]}
            className="text-2xl font-medium md:text-3xl"
          />
          <p className="max-w-2xl text-lg text-text-secondary md:text-xl">
            Building AI that solves real problems
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#ai-chat"
            className="rounded-lg bg-accent-cyan px-6 py-3 text-center text-sm font-semibold text-bg-primary transition hover:shadow-[var(--glow)]"
            data-cursor="hover"
          >
            Chat with my AI
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-border px-6 py-3 text-center text-sm font-semibold text-text-primary transition hover:shadow-[var(--glow)]"
            data-cursor="hover"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center gap-4"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-4 py-2 text-sm text-text-secondary transition hover:text-text-primary hover:shadow-[var(--glow)]"
                data-cursor="hover"
              >
                <Icon className="text-base" />
                {social.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
