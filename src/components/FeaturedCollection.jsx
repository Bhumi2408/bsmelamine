"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredCollection } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { fadeUp, viewportOnce } from "@/lib/motion";

const offsets = [-40, 60, -25];

export default function FeaturedCollection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="tableware"
      ref={sectionRef}
      className="relative py-14 md:py-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 w-[300px] h-[300px] bg-blush/30 blob animate-spin-slow-reverse"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] max-w-xl">
            Made for <span className="text-gradient-gold italic">every kind</span> of meal.
          </h2>
          <p className="text-taupe max-w-xs leading-relaxed">
            Three pieces, three collections — every one designed to hold its
            own on the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-4 gap-y-20 md:gap-y-0">
          {featuredCollection.map((product, i) => (
            <FeaturedItem
              key={product.id}
              product={product}
              index={i}
              progress={scrollYProgress}
              offset={offsets[i % offsets.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedItem({ product, index, progress, offset }) {
  const x = useTransform(progress, [0, 1], [offset, -offset]);
  const category = getCategoryBySlug(product.category);

  return (
    <motion.div
      style={{ x }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${index === 1 ? "md:-mt-16" : "md:mt-6"} ${
        index !== 0 ? "md:-ml-6" : ""
      }`}
    >
      <Link href={`#${category?.anchor}`} className="group block">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 90vw, 30vw"
            className="object-contain drop-shadow-[0_30px_35px_rgba(64,57,54,0.16)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-nude/70 pt-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold">
              {category?.name}
            </span>
            <h3 className="font-display text-2xl text-ink mt-1">
              {product.name}
            </h3>
          </div>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:bg-rose group-hover:border-rose group-hover:text-cream-bright group-hover:-rotate-12">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
