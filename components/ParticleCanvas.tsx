"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const createParticles = (count: number) => {
      const { width, height } = sizeRef.current;
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.2 + Math.random() * 1.8,
      }));
    };

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const ratio = window.devicePixelRatio || 1;
      sizeRef.current = { width, height };
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles(Math.max(40, Math.floor(width / 24)));
    };

    const draw = () => {
      const { width, height } = sizeRef.current;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(0, 255, 209, 0.8)";
      context.strokeStyle = "rgba(0, 255, 209, 0.15)";
      context.lineWidth = 1;

      const particles = particlesRef.current;
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            context.globalAlpha = 1 - distance / 120;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      }

      animationRef.current = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
