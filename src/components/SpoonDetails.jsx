"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { spoonDetails } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SpoonDetails() {
  return (
    <section id="spoons" className="py-16 md:py-20 bg-stone">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center mb-16 md:mb-24"
        >
          <p className="eyebrow !text-beige mb-5">Spoons &amp; small items</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream-bright leading-[1.05]">
            Small details.
            <br />
            <span className="text-gradient-light italic">Big difference.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-16 md:gap-y-24">
          {spoonDetails.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="group flex flex-col items-center">
                <div
                  className="relative w-16 sm:w-20 h-56 sm:h-64 animate-float-y"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="120px"
                    className="object-contain drop-shadow-[0_15px_18px_rgba(64,57,54,0.25)] transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>

                <span
                  aria-hidden
                  className="block w-0.5 h-8 accent-gradient rounded-full mt-1 transition-all duration-500 group-hover:h-12"
                />
                <span className="text-xs sm:text-sm text-cream-bright font-medium text-center mt-1">
                  {product.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
