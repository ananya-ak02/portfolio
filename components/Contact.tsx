"use client";

import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="w-full px-8 md:px-16 py-16 mb-8">
      <h2 className="text-xs font-sans text-text-secondary uppercase tracking-widest mb-8 text-left">
        Contact
      </h2>
      
      <div className="max-w-3xl bg-bg-card border border-border p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-text-primary mb-3">Let's connect.</h3>
        <p className="text-text-secondary text-sm mb-6 max-w-lg">
          I'm currently looking for internship opportunities and open to collaborating on AI infrastructure or full-stack projects.
        </p>
        
        <a 
          href="mailto:ananyakhanduja02@gmail.com"
          className="inline-flex items-center gap-2 bg-text-primary text-bg-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-text-primary/90 transition-colors"
        >
          <FiMail /> Say Hello
        </a>
      </div>
    </section>
  );
}
