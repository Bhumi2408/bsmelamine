"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dinnerSets } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useAutoCycle } from "@/lib/useAutoCycle";

export default function DinnerSets() {
  const [activeIndex, setActiveIndex] = useAutoCycle(dinnerSets.length, 3600);
  const active = dinnerSets[activeIndex];

  return (
    <section
      id="dinner-sets"
      className="relative py-16 md:py-20 overflow-hidden transition-colors duration-700 bg-beige/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-[6%] w-[300px] h-[300px] bg-rose/15 blob-2 animate-spin-slow"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className="eyebrow mb-5">The complete table</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Dinner sets, set to <span className="text-gradient-gold italic">impress</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {dinnerSets.map((set, i) => (
                <button
                  key={set.id}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  aria-label={`Show ${set.name}`}
                  className={`relative h-11 w-11 rounded-full text-xs tracking-wide flex items-center justify-center border transition-all duration-400 ${
                    i === activeIndex
                      ? "border-ink bg-ink text-cream-bright scale-110"
                      : "border-nude/70 text-taupe hover:border-gold hover:text-ink"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow !text-gold">Dinner Set</span>
                <h3 className="font-display text-3xl sm:text-4xl text-ink mt-2">
                  {active.name}
                </h3>
                <p className="mt-4 text-taupe leading-relaxed max-w-md">
                  {active.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {active.composition.map((piece) => (
                    <li
                      key={piece}
                      className="text-xs uppercase tracking-wide px-3.5 py-2 rounded-full bg-cream-bright border border-nude/60 text-ink"
                    >
                      {piece}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden bg-cream-bright border border-nude/50 shadow-[0_40px_70px_-30px_rgba(64,57,54,0.35)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain px-5"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
