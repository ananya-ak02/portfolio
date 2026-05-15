import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ananya Khanduja | AI Systems Engineer",
  description: "CS student at Thapar building production-grade AI systems — RAG pipelines, LangChain agents, multimodal vision models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bg-primary text-text-primary antialiased selection:bg-accent-cyan/30 selection:text-text-primary min-h-screen flex flex-col overflow-x-hidden`}>
        <CustomCursor />
        <ParticleCanvas />
        <main className="flex-grow relative z-10 w-full overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
