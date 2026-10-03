"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { plateStories } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function PlateStories() {
  return (
    <section id="plates" className="py-20 md:py-28 bg-cream-soft/60 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Plate stories</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
              Every plate tells a small story.
            </h2>
          </div>
          <p className="text-taupe text-sm max-w-xs">
            Scroll or swipe through the collection — each one snaps into
            view.
          </p>
        </motion.div>
      </div>

      {/* large snap-scroll filmstrip — bigger cards, no fragile grid spans */}
      <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
        <div className="flex gap-6 md:gap-8 px-6 md:px-10 lg:px-16 w-max">
          {plateStories.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center shrink-0 w-[78vw] sm:w-[360px] md:w-[400px]"
            >
              <div className="group relative aspect-4/5 overflow-hidden rounded-[2rem] bg-cream-bright border border-nude/50 shadow-[0_25px_50px_-30px_rgba(64,57,54,0.35)]">
                <Image
                  src={product.image}
                  alt={`Plate design ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 78vw, 400px"
                  className="object-contain p-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-taupe">
                {String(i + 1).padStart(2, "0")} / {String(plateStories.length).padStart(2, "0")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
