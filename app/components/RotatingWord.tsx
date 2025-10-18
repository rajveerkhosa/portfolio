"use client";

import { useState, useEffect, CSSProperties, useMemo } from "react";

const adjectives = [
  "Clever",
  "Driven",
  "Disciplined",
  "Adaptable",
  "Reliable",
  "Innovative",
  "Analytical",
  "Resourceful",
  "Collaborative",
  "Motivated",
  "Diligent",
  "Strategic",
  "Dependable",
  "Detail-oriented",
  "Proactive",
  "Resilient",
];

export default function RotatingWord() {
  const [wordKey, setWordKey] = useState(0);
  const [isScattering, setIsScattering] = useState(false);

  const currentWord = useMemo(() => adjectives[wordKey % adjectives.length], [wordKey]);

  // Generate random scatter values once per word
  const scatterValues = useMemo(() => {
    return currentWord.split("").map(() => ({
      x: (Math.random() - 0.5) * 40,
      y: -20 - Math.random() * 20,
      rotate: (Math.random() - 0.5) * 30,
    }));
  }, [currentWord]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsScattering(true);

      const timer2 = setTimeout(() => {
        setIsScattering(false);
        setWordKey(prev => prev + 1);
      }, 800);

      return () => clearTimeout(timer2);
    }, 3500);

    return () => clearTimeout(timer1);
  }, [wordKey]);

  return (
    <span className="inline-block relative" style={{ minWidth: "14ch" }}>
      {currentWord.split("").map((letter, index) => (
        <span
          key={`${wordKey}-${index}`}
          className={`inline-block ${isScattering ? "animate-letter-scatter" : "animate-letter-drop"}`}
          style={
            {
              animationDelay: isScattering ? `${index * 30}ms` : `${index * 50}ms`,
              "--scatter-x": `${scatterValues[index].x}px`,
              "--scatter-y": `${scatterValues[index].y}px`,
              "--scatter-rotate": `${scatterValues[index].rotate}deg`,
            } as CSSProperties
          }
        >
          {letter === " " ? "\u00A0" : letter === "-" ? "-" : letter}
        </span>
      ))}
    </span>
  );
}
