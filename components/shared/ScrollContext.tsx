'use client';
import Lenis from 'lenis';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Define proper types
interface SmoothScrollContextType {
  lenis: Lenis | null;
}

interface ScrollContextProps {
  children: ReactNode;
}

const SmoothScrollerContext = createContext<SmoothScrollContextType | null>(null);

export const useSmoothScroller = () => {
  const context = useContext(SmoothScrollerContext);
  if (!context) {
    throw new Error('useSmoothScroller must be used within a ScrollContext');
  }
  return context;
};

export default function ScrollContext({ children }: ScrollContextProps) {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf: number;

    function raf(time: number) {
      scroller.raf(time);
      rf = requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (rafState) {
        cancelAnimationFrame(rafState);
      }
      if (lenisRef) {
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={{ lenis: lenisRef }}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
