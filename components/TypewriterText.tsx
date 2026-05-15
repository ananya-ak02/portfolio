"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
};

type Phase = "typing" | "pausing" | "deleting";

export default function TypewriterText({ phrases, className }: Props) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (safePhrases.length === 0) {
      return;
    }

    const current = safePhrases[index % safePhrases.length];
    let timeout = 0;

    if (phase === "typing") {
      if (typed.length < current.length) {
        timeout = window.setTimeout(() => {
          setTyped(current.slice(0, typed.length + 1));
        }, 70);
      } else {
        timeout = window.setTimeout(() => setPhase("pausing"), 900);
      }
    }

    if (phase === "pausing") {
      timeout = window.setTimeout(() => setPhase("deleting"), 700);
    }

    if (phase === "deleting") {
      if (typed.length > 0) {
        timeout = window.setTimeout(() => {
          setTyped(current.slice(0, typed.length - 1));
        }, 40);
      } else {
        setPhase("typing");
        setIndex((prev) => (prev + 1) % safePhrases.length);
      }
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [index, phase, safePhrases, typed]);

  return (
    <span className={className}>
      <span className="text-accent-cyan">{typed}</span>
      <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent-cyan align-middle" />
    </span>
  );
}
