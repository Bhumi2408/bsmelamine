"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { lifestyleImages } from "@/data/products";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-ink text-cream-bright">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] bg-rose/20 blob animate-spin-slow"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1fr_1fr] items-center">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="eyebrow !text-gold mb-6">
            Ready when you are
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream-bright"
          >
            Set the table.
            <br />
            Make the moment.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-cream-bright/70 leading-relaxed"
          >
            Explore pieces made to turn everyday meals into something worth
            remembering.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#collections"
              className="btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide bg-cream-bright text-ink hover:bg-rose hover:text-cream-bright transition-colors duration-300"
            >
              Explore Collections
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <Link
              href="#dinner-sets"
              className="btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide border border-cream-bright/30 text-cream-bright hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Discover Dinner Sets
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[280px] sm:h-[360px] lg:h-[460px] lg:-mr-16"
        >
          <div className="absolute inset-0 animate-float-y-slow">
            <Image
              src={lifestyleImages.finalCta}
              alt="A beautifully styled serving tray"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.35)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
