"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import PageTransition from "./PageTransition";

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
}

export default function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const targetPathRef = useRef<string | null>(null);

  const navigateWithTransition = useCallback((href: string) => {
    // Don't transition to the same page
    if (href === pathname) return;

    targetPathRef.current = href;
    setIsTransitioning(true);
  }, [pathname]);

  const handleTransitionComplete = useCallback(() => {
    // This is called when the screen is fully green
    if (targetPathRef.current) {
      router.push(targetPathRef.current);
      targetPathRef.current = null;
    }
  }, [router]);

  const handleAnimationEnd = useCallback(() => {
    // This is called when the entire animation (cover + reveal) completes
    setIsTransitioning(false);
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      <PageTransition
        isTransitioning={isTransitioning}
        onTransitionComplete={handleTransitionComplete}
        onAnimationEnd={handleAnimationEnd}
      />
      <div className={isTransitioning ? "invisible" : ""}>
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
