"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bowlCollection } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function BowlCollection() {
  const [hero, ...rest] = bowlCollection;

  return (
    <section id="bowls" className="relative py-20 md:py-28 bg-sage/30 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-[70%] rounded-full bg-sage/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className="eyebrow mb-5">Bowls &amp; soupware</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Comfort, served beautifully.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* hero bowl */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col items-center text-center mx-auto"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-cream-bright border-2 border-nude/50 shadow-[0_30px_60px_-25px_rgba(64,57,54,0.4)] animate-float-y-slow">
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-5 font-display text-2xl text-ink">{hero.name}</p>
            <span className="mt-1 eyebrow !text-taupe">Featured bowl</span>
          </motion.div>

          {/* supporting bowls */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-10">
            {rest.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-center text-center w-28 sm:w-36"
              >
                <div
                  className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-cream-bright border border-nude/40 shadow-[0_18px_30px_-16px_rgba(64,57,54,0.3)] animate-float-y"
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="128px"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="mt-3 text-xs sm:text-sm text-ink font-medium">
                  {product.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
