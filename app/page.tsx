import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import AIChat from "@/components/AIChat";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen max-w-[1600px] mx-auto">
      {/* Left Column - Scrollable Content */}
      <div className="w-full lg:w-[65%] flex flex-col">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
      
      {/* Right Column - Sticky AI Chat Sidebar */}
      <div className="w-full lg:w-[35%] lg:sticky lg:top-0 lg:h-screen border-t lg:border-t-0 lg:border-l border-border bg-bg-secondary/30 backdrop-blur-md overflow-y-auto">
        <AIChat />
      </div>
    </div>
  );
}
