"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Cycles through `length` items on a timer so the interaction is discoverable
// even if nobody hovers/clicks. Any manual selection (hover, click, drag)
// pauses the timer briefly, then autoplay resumes. The timer itself is
// suspended whenever the returned `ref` is scrolled out of view, so idle
// sections don't keep re-rendering in the background.
export function useAutoCycle(length, interval = 3200) {
  const [index, setIndexState] = useState(0);
  const intervalRef = useRef(null);
  const resumeRef = useRef(null);
  const visibleRef = useRef(true);
  const containerRef = useRef(null);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startInterval = useCallback(() => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      if (visibleRef.current) setIndexState((i) => (i + 1) % length);
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

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const select = useCallback(
    (i) => {
      setIndexState(i);
      stopInterval();
      if (resumeRef.current) clearTimeout(resumeRef.current);
      resumeRef.current = setTimeout(startInterval, interval * 1.6);
    },
    [stopInterval, startInterval, interval]
  );

  return [index, select, containerRef];
}
