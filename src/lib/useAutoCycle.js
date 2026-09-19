"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Cycles through `length` items on a timer so the interaction is discoverable
// even if nobody hovers/clicks. Any manual selection (hover, click, drag)
// pauses the timer briefly, then autoplay resumes.
export function useAutoCycle(length, interval = 3200) {
  const [index, setIndexState] = useState(0);
  const intervalRef = useRef(null);
  const resumeRef = useRef(null);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startInterval = useCallback(() => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setIndexState((i) => (i + 1) % length);
    }, interval);
  }, [stopInterval, interval, length]);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) startInterval();
    return () => {
      stopInterval();
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  const select = useCallback(
    (i) => {
      setIndexState(i);
      stopInterval();
      if (resumeRef.current) clearTimeout(resumeRef.current);
      resumeRef.current = setTimeout(startInterval, interval * 1.6);
    },
    [stopInterval, startInterval, interval]
  );

  return [index, select];
}
