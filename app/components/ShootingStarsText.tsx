"use client";

import { useState, useEffect, useRef } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
}

export default function ShootingStarsText({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Create initial stars
    const createStar = (): Star => ({
      id: Math.random(),
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 40 + 20,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    });

    // Initialize stars
    for (let i = 0; i < 15; i++) {
      starsRef.current.push(createStar());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const speedMultiplier = isHovered ? 3 : 1;

      starsRef.current.forEach((star, index) => {
        // Move star diagonally (top-left to bottom-right)
        star.x += star.speed * speedMultiplier;
        star.y += star.speed * speedMultiplier * 0.5;

        // Reset star if it goes off screen
        if (star.x > canvas.width + star.length || star.y > canvas.height + star.length) {
          starsRef.current[index] = createStar();
          starsRef.current[index].x = -star.length;
          starsRef.current[index].y = Math.random() * canvas.height;
        }

        // Draw shooting star
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.length,
          star.y - star.length * 0.5
        );
        gradient.addColorStop(0, `rgba(0, 255, 159, ${star.opacity})`);
        gradient.addColorStop(1, "rgba(0, 255, 159, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length * 0.5);
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  return (
    <span
      className="relative inline-block px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />
      <span
        className={`relative z-10 inline-block transition-all ${
          isHovered ? "animate-jitter" : ""
        }`}
      >
        {children}
      </span>
    </span>
  );
}
