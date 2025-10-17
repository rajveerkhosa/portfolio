"use client";

import { useEffect, useState, useRef } from "react";

interface PageTransitionProps {
  isTransitioning: boolean;
  onTransitionComplete?: () => void;
  onAnimationEnd?: () => void;
}

export default function PageTransition({ isTransitioning, onTransitionComplete, onAnimationEnd }: PageTransitionProps) {
  const [showTransition, setShowTransition] = useState(false);
  const onTransitionCompleteRef = useRef(onTransitionComplete);
  const onAnimationEndRef = useRef(onAnimationEnd);

  // Keep refs up to date
  useEffect(() => {
    onTransitionCompleteRef.current = onTransitionComplete;
  }, [onTransitionComplete]);

  useEffect(() => {
    onAnimationEndRef.current = onAnimationEnd;
  }, [onAnimationEnd]);

  useEffect(() => {
    if (isTransitioning) {
      setShowTransition(true);

      const DURATION_PER_COLUMN = 0.2;
      const NUM_COLUMNS = 6;
      const COVER_TIME = NUM_COLUMNS * DURATION_PER_COLUMN * 1000;

      // Switch content when screen is fully green
      const switchTimer = setTimeout(() => {
        if (onTransitionCompleteRef.current) {
          onTransitionCompleteRef.current();
        }
      }, COVER_TIME);

      // Clean up after full animation (cover + reveal + small buffer)
      const cleanupTimer = setTimeout(() => {
        setShowTransition(false);
        if (onAnimationEndRef.current) {
          onAnimationEndRef.current();
        }
      }, COVER_TIME * 2 + 200);

      return () => {
        clearTimeout(switchTimer);
        clearTimeout(cleanupTimer);
      };
    } else if (!isTransitioning && showTransition) {
      // If isTransitioning becomes false but we're still showing, hide it
      setShowTransition(false);
    }
  }, [isTransitioning, showTransition]);

  if (!showTransition) return null;

  const NUM_COLUMNS = 6;
  const DURATION_PER_COLUMN = 0.2; // Speed up (was 0.3, then 0.15 which was too fast)
  const COVER_TIME = NUM_COLUMNS * DURATION_PER_COLUMN;
  const columns = [];

  for (let col = 0; col < NUM_COLUMNS; col++) {
    const coverDelay = (NUM_COLUMNS - 1 - col) * DURATION_PER_COLUMN;
    const revealDelay = COVER_TIME + coverDelay;

    columns.push(
      <div key={col} className="h-full w-full relative">
        {/* Single div that does both animations */}
        <div
          className="absolute inset-0 bg-[#00ff9f]"
          style={{
            clipPath: "inset(100% 0 0 0)",
            animation: `fillUp ${DURATION_PER_COLUMN}s linear ${coverDelay}s forwards, clearDown ${DURATION_PER_COLUMN}s linear ${revealDelay}s forwards`,
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="grid grid-cols-6 w-full h-full">
        {columns}
      </div>
    </div>
  );
}
