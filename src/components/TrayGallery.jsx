"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { trayGallery } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

const heights = [0, 44, -28, 18, -40, 8, 30, -18, 0, 40, -30, 14, -10, 26];

export default function TrayGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxRow = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Auto-scrolls the gallery back and forth so the drag/scroll interaction
  // is obvious even before anyone touches it.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let direction = 1;
    let rafId;

    const step = () => {
      if (!pausedRef.current) {
        const max = track.scrollWidth - track.clientWidth;
        let next = track.scrollLeft + 0.6 * direction;
        if (next >= max) {
          next = max;
          direction = -1;
        } else if (next <= 0) {
          next = 0;
          direction = 1;
        }
        track.scrollLeft = next;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const onPointerDown = (e) => {
    draggingRef.current = true;
    pausedRef.current = true;
    dragStartRef.current = { x: e.clientX, scrollLeft: trackRef.current.scrollLeft };
    trackRef.current.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    trackRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx;
  };
  const endDrag = () => {
    draggingRef.current = false;
    pausedRef.current = false;
  };

  return (
    <section id="trays" ref={sectionRef} className="py-16 md:py-20 bg-cream-soft/60">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 mb-14 md:mb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="eyebrow mb-5">Premium &amp; lite trays</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] max-w-xl">
              A <span className="text-gradient-gold italic">gallery</span> of trays, made for serving.
            </h2>
          </div>
          <p className="text-taupe text-sm max-w-xs">
            It plays on its own — or drag, scroll or hover to take the
            wheel and explore at your own pace.
          </p>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={() => {
          endDrag();
          resume();
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="relative no-scrollbar overflow-x-auto pb-6 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-end gap-6 md:gap-8 px-6 md:px-10 lg:px-16 w-max">
          {trayGallery.map((product, i) => (
            <motion.div
              key={product.id}
              style={{ y: i % 2 === 0 ? parallaxRow : undefined }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 w-45 sm:w-55 md:w-60"
            >
              <div
                className="group block select-none"
                style={{ transform: `translateY(${heights[i % heights.length]}px)` }}
              >
                <div className="relative aspect-4/5 rounded-t-full overflow-hidden bg-cream-bright border border-nude/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="250px"
                    draggable={false}
                    className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                </div>
                <p className="mt-4 text-sm text-ink font-medium">{product.name}</p>
                <p className="text-[11px] uppercase tracking-wide text-taupe mt-0.5">
                  {product.category === "premium-trays" ? "Premium Tray" : "Lite Tray"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
