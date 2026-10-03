"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredCollection } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { fadeUp, viewportOnce } from "@/lib/motion";

const panelTones = ["bg-cream-soft", "bg-stone", "bg-beige/60"];

export default function FeaturedCollection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rise = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section
      id="tableware"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] max-w-xl">
            Made for <span className="text-gradient-gold italic">every kind</span> of meal.
          </h2>
          <p className="text-taupe max-w-xs leading-relaxed">
            Three pieces, three collections — every one designed to hold its
            own on the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featuredCollection.map((product, i) => (
            <FeaturedItem
              key={product.id}
              product={product}
              index={i}
              tone={panelTones[i % panelTones.length]}
              rise={rise}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedItem({ product, index, tone, rise }) {
  const category = getCategoryBySlug(product.category);

  return (
    <motion.div
      style={{ y: index === 1 ? rise : undefined }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`#${category?.anchor}`} className="group block">
        <div className={`relative aspect-4/5 rounded-[1.75rem] overflow-hidden border border-nude/40 ${tone}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 90vw, 30vw"
            className="object-contain p-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.18em] text-gold font-semibold">
            {category?.name}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-nude/70 pt-4">
          <h3 className="font-display text-2xl text-ink">{product.name}</h3>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:bg-rose group-hover:border-rose group-hover:text-cream-bright group-hover:-rotate-12">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
