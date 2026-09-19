"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { lifestyleImages } from "@/data/products";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stats = [
  { value: 14, suffix: "+", label: "Collections" },
  { value: 200, suffix: "+", label: "Designs" },
  { value: 0, suffix: "", label: "Everyday Elegance", isText: true },
];

export default function ArtOfTable() {
  return (
    <section className="relative overflow-hidden py-24 md:py-18">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-[10%] w-[340px] h-[340px] bg-gold/10 blob animate-spin-slow"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[320px] sm:h-[420px] lg:h-[540px] -ml-6 md:-ml-10 lg:-ml-16"
        >
          <div className="absolute inset-0 overflow-hidden rounded-r-[3rem]">
            <Image
              src={lifestyleImages.artOfTable}
              alt="A beautifully set table with layered tableware"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            The art of the table
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink max-w-lg"
          >
            The <span className="text-gradient-gold italic">little details</span> make the table.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-taupe leading-relaxed"
          >
            From the curve of a rim to the weight of a spoon in hand — it&rsquo;s
            the smallest choices that turn a simple meal into something
            memorable.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-6 md:gap-10 max-w-lg"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || stat.isText) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * stat.value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, stat]);

  return (
    <div className="border-t-2 border-gold/50 pt-4">
      <div ref={ref}>
        {stat.isText ? (
          <p className="font-display text-xl sm:text-2xl text-rose leading-tight">
            Everyday
            <br />
            Elegance
          </p>
        ) : (
          <p className="font-display text-4xl sm:text-5xl text-gradient-gold">
            {count}
            {stat.suffix}
          </p>
        )}
      </div>
      {!stat.isText && (
        <p className="mt-1 text-xs uppercase tracking-wide text-taupe">
          {stat.label}
        </p>
      )}
    </div>
  );
}
