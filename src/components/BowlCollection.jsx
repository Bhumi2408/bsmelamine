"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bowlCollection } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function BowlCollection() {
  const count = bowlCollection.length;

  return (
    <section id="bowls" className="relative py-16 md:py-20 bg-sage/20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-[70%] rounded-full bg-sage/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center mb-16 md:mb-24"
        >
          <p className="eyebrow mb-5">Bowls &amp; soupware</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Comfort, served beautifully.
          </h2>
        </motion.div>

        {/* curved arc arrangement */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:justify-between gap-x-4 gap-y-14 lg:gap-2">
          {bowlCollection.map((product, i) => {
            const mid = (count - 1) / 2;
            const arc = -Math.pow((i - mid) / mid, 2) * 46 + 46; // 0 at edges, ~46px lift at center
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ transform: `translateY(-${arc}px)` }}
              >
                <div className="group flex flex-col items-center text-center">
                  <span
                    className="relative block w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-cream-bright border border-nude/40 shadow-[0_20px_35px_-18px_rgba(64,57,54,0.35)] animate-float-y"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="128px"
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <span className="mt-4 text-xs sm:text-sm text-ink font-medium max-w-[8rem]">
                    {product.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
