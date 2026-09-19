"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useAutoCycle } from "@/lib/useAutoCycle";

const tints = ["bg-blush/25", "bg-sage/25", "bg-beige/50", "bg-nude/30", "bg-rose/15"];

export default function CategoryJourney() {
  const [activeIndex, setActiveIndex] = useAutoCycle(categories.length, 2600);
  const active = categories[activeIndex];
  const radius = 44; // percentage of container

  return (
    <section
      id="collections"
      className="relative overflow-hidden py-14 md:py-16 transition-colors duration-700"
    >
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 transition-colors duration-700 ${tints[activeIndex % tints.length]}`}
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center mb-8 md:mb-10"
        >
          <p className="eyebrow mb-5">A tableware journey</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Fourteen collections.
            <br />
            One considered table.
          </h2>
          <p className="mt-6 text-taupe leading-relaxed">
            Watch each collection come to life on its own, or hover any name
            to jump straight to it — every piece is part of a larger story.
          </p>
        </motion.div>

        {/* ---------- Desktop orbital journey ---------- */}
        <div className="hidden lg:block relative">
          {/* left gutter accent */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <span className="w-px h-20 accent-gradient animate-pulse-soft" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] tracking-[0.3em] uppercase text-taupe whitespace-nowrap">
              The Tableware Journey
            </span>
            <span className="w-px h-20 accent-gradient animate-pulse-soft" />
          </div>

          {/* right gutter accent */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <span className="w-px h-20 accent-gradient animate-pulse-soft" />
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="[writing-mode:vertical-rl] text-[11px] tracking-[0.3em] uppercase text-gold font-semibold whitespace-nowrap"
            >
              {String(activeIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </motion.span>
            <span className="w-px h-20 accent-gradient animate-pulse-soft" />
          </div>

        <div className="orbit-wheel relative mx-auto aspect-square max-w-[720px]">
          <div className="absolute inset-[8%] rounded-full border border-ink/10" />
          <div className="absolute inset-[20%] rounded-full border border-gold/25" />
          <div className="absolute inset-[23%] rounded-full border-2 border-gold/40 animate-pulse-ring" />
          <div
            className="absolute inset-[23%] rounded-full border-2 border-gold/40 animate-pulse-ring"
            style={{ animationDelay: "1.5s" }}
          />

          {/* center visual */}
          <div className="absolute inset-[26%] rounded-full overflow-hidden bg-cream-bright shadow-[0_30px_60px_-25px_rgba(64,57,54,0.35)] border border-nude/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="320px"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-14  text-cream-bright">
                  <p className="font-display text-2xl">{active.name}</p>
                  <p className="text-xs text-cream-bright/85 mt-1 leading-relaxed">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* the whole ring of labels slowly orbits; each label counter-
              rotates so its text always stays upright and readable */}
          <div className="absolute inset-0 animate-orbit">
            {categories.map((category, i) => {
              const angle = (360 / categories.length) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              const isActive = i === activeIndex;

              return (
                <Link
                  key={category.slug}
                  href={`#${category.anchor}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                >
                  <div className="animate-orbit-counter">
                    <motion.span
                      animate={{
                        scale: isActive ? 1.18 : 1,
                        opacity: isActive ? 1 : 0.55,
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={`inline-block whitespace-nowrap text-[11px] md:text-xs tracking-[0.18em] uppercase font-semibold px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                        isActive
                          ? "bg-ink text-cream-bright border-ink"
                          : "bg-cream-bright/70 text-ink border-nude/60 group-hover:border-gold"
                      }`}
                    >
                      {category.short}
                    </motion.span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        </div>

        {/* ---------- Mobile / tablet vertical journey ---------- */}
        <div className="lg:hidden flex flex-col divide-y divide-nude/60 border-t border-b border-nude/60">
          {categories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 grid grid-cols-[auto_1fr] gap-5 items-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 bg-cream-soft">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="eyebrow !text-taupe">{`0${i + 1}`.slice(-2)}</span>
                <h3 className="font-display text-2xl text-ink mt-1">
                  {category.name}
                </h3>
                <p className="text-sm text-taupe mt-1 leading-relaxed max-w-sm">
                  {category.description}
                </p>
                <Link
                  href={`#${category.anchor}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-gold"
                >
                  Explore <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
