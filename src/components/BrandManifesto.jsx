"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lifestyleImages } from "@/data/products";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function BrandManifesto() {
  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[8%] -translate-y-1/2 w-[380px] h-[380px] bg-sage/25 blob-2 animate-spin-slow-reverse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-2 h-24 accent-gradient rounded-full opacity-60"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            Our philosophy
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] text-ink"
          >
            Not just tableware.
            <br />
            <span className="text-rose italic">A part of the moment.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-lg text-taupe text-base md:text-lg leading-relaxed"
          >
            Beautiful dining doesn&rsquo;t need to be reserved for special
            occasions. We design tableware that feels just as at home on a
            quiet Tuesday evening as it does on a table full of guests —
            considered shapes, gentle finishes, and a quiet sense of
            occasion in every piece.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[320px] sm:h-[420px] lg:h-[520px] -mr-6 md:-mr-10 lg:-mr-16"
        >
          <div className="absolute inset-0 overflow-hidden rounded-l-[3rem]">
            <Image
              src={lifestyleImages.manifesto}
              alt="An oversized plate styled with soft, natural light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
