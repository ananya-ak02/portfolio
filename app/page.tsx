import About from "@/components/About";
import Achievements from "@/components/Achievements";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Hero />
      <main>
        <AIChat />
        <Projects />
        <Skills />
        <Achievements />
        <About />
      </main>
      <Footer />
    </div>
  );
}
