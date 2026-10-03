"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useAutoCycle } from "@/lib/useAutoCycle";

export default function CategoryJourney() {
  const [activeIndex, setActiveIndex, autoCycleRef] = useAutoCycle(
    categories.length,
    3200
  );
  const active = categories[activeIndex];

  return (
    <section
      id="collections"
      ref={autoCycleRef}
      className="relative overflow-hidden py-20 md:py-28 bg-ink text-cream-bright"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-8%] w-[420px] h-[420px] bg-rose/10 blob animate-spin-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-[-8%] w-[380px] h-[380px] bg-sage/10 blob-2 animate-spin-slow-reverse"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mb-14 md:mb-20"
        >
          <p className="eyebrow !text-gold mb-5">A tableware journey</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Fourteen collections.
            <br />
            One considered table.
          </h2>
          <p className="mt-6 text-cream-bright/60 leading-relaxed max-w-lg">
            Browse the full range, or just watch — every few seconds a new
            collection steps forward on its own.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
          {/* index list */}
          <ul className="divide-y divide-cream-bright/10 border-t border-b border-cream-bright/10">
            {categories.map((category, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={category.slug}>
                  <Link
                    href={`#${category.anchor}`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    className="group relative flex items-center gap-4 md:gap-6 py-3.5 md:py-4"
                  >
                    <span
                      className={`font-display text-sm tabular-nums transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-cream-bright/35"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-xl sm:text-2xl md:text-3xl transition-all duration-300 ${
                        isActive
                          ? "text-cream-bright translate-x-1"
                          : "text-cream-bright/45 group-hover:text-cream-bright/80"
                      }`}
                    >
                      {category.short}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="category-indicator"
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="ml-auto hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ink shrink-0"
                      >
                        <ArrowUpRight size={15} />
                      </motion.span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* large crossfading image */}
          <div className="relative aspect-4/5 sm:aspect-16/11 lg:aspect-4/5 rounded-[2rem] overflow-hidden border border-cream-bright/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-contain"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-7 md:p-9">
                  <p className="font-display text-2xl md:text-3xl text-cream-bright">
                    {active.name}
                  </p>
                  <p className="mt-2 text-sm text-cream-bright/75 leading-relaxed max-w-sm">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
