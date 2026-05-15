import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ananya Khanduja | AI Systems Engineer",
  description: "CS student at Thapar building production-grade AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bg-primary text-text-primary antialiased selection:bg-border selection:text-text-primary min-h-screen flex flex-col overflow-x-hidden`}>
        <main className="flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
