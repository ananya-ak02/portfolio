import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ananya Khanduja | AI Systems Engineer",
  description:
    "AI-powered portfolio for Ananya Khanduja, showcasing full-stack AI systems, projects, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
