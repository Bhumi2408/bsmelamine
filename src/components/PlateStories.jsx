"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { plateStories } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function PlateStories() {
  return (
    <section id="plates" className="py-16 md:py-20 bg-cream-soft/60">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mb-16 md:mb-20"
        >
          <p className="eyebrow mb-5">Plate stories</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Every plate tells a small story.
          </h2>
        </motion.div>

        {/* Even, gallery-style grid — every plate gets the same width and
            height, with a gentle alternating offset for editorial rhythm
            instead of uneven spans that are easy to break. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {plateStories.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (i % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={i % 2 === 1 ? "lg:mt-10" : ""}
            >
              <div className="group relative aspect-3/3 overflow-hidden rounded-[1.75rem] bg-cream-bright border border-nude/50">
                <Image
                  src={product.image}
                  alt={`Plate design ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
