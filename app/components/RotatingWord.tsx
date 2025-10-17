"use client";

import { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    // Start with all letters visible for the first word
    setVisibleLetters(adjectives[0].length);

    const interval = setInterval(() => {
      // Start scatter out animation
      setIsAnimating(true);
      setVisibleLetters(0);

      // After scatter completes, wait a bit, then switch to next word
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % adjectives.length);

        // Wait before starting to show new word
        setTimeout(() => {
          setIsAnimating(false);
        }, 300); // Pause after word disappears before new one appears
      }, 500); // Scatter out duration
    }, 3500); // Display each word for 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate letters in one by one when new word appears
    if (!isAnimating && visibleLetters < adjectives[currentIndex].length) {
      const timeout = setTimeout(() => {
        setVisibleLetters((prev) => prev + 1);
      }, 50); // 50ms delay between each letter

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, visibleLetters, isAnimating]);

  const currentWord = adjectives[currentIndex];

  return (
    <span className="inline-block relative">
      <span className="inline-block">
        {currentWord.split("").map((letter, index) => {
          // Random scatter directions for each letter
          const scatterX = (Math.random() - 0.5) * 40; // -20 to 20
          const scatterY = -20 - Math.random() * 20; // -20 to -40
          const scatterRotate = (Math.random() - 0.5) * 30; // -15 to 15 degrees

          return (
            <span
              key={`${currentIndex}-${index}`}
              className={`inline-block ${
                isAnimating
                  ? "animate-letter-scatter"
                  : index < visibleLetters
                  ? "animate-letter-drop"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: isAnimating ? `${index * 30}ms` : `${index * 50}ms`,
                // @ts-ignore - CSS custom properties
                "--scatter-x": `${scatterX}px`,
                "--scatter-y": `${scatterY}px`,
                "--scatter-rotate": `${scatterRotate}deg`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </span>
    </span>
  );
}
