import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-text-secondary">Built by Ananya Khanduja</p>
          <div className="flex flex-col gap-1 text-xs text-text-secondary">
            <a
              href="mailto:ananyakhanduja02@gmail.com"
              className="transition hover:text-text-primary"
            >
              ananyakhanduja02@gmail.com
            </a>
            <a
              href="tel:+919897841235"
              className="transition hover:text-text-primary"
            >
              +91-9897841235
            </a>
          </div>
          <p className="text-xs text-text-secondary">Powered by Groq AI</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-3 py-2 text-xs text-text-secondary transition hover:text-text-primary hover:shadow-[var(--glow)]"
                data-cursor="hover"
              >
                <Icon className="text-sm" />
                {social.label}
              </a>
            );
          })}
        </div>

        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
