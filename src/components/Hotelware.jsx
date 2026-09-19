"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hotelwareCollection, blackItems } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";

const hotelwareFeatured = hotelwareCollection.slice(0, 6);
const blackFeatured = blackItems.slice(0, 6);

export default function Hotelware() {
  return (
    <section id="hotelware" className="relative overflow-hidden py-16 md:py-20 bg-cream-bright">
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center mb-16 md:mb-20"
        >
          <p className="eyebrow mb-5">Hotelware &amp; black items</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Quiet <span className="text-rose italic">drama</span>, ready for service.
          </h2>
        </motion.div>

        <Row title="Hotelware" products={hotelwareFeatured} tone="mixed" />
        <Row title="Black Items" products={blackFeatured} tone="black-product" className="mt-16 md:mt-20" />
      </div>
    </section>
  );
}

function Row({ title, products, tone = "mixed", className = "" }) {
  // Card backdrop is picked to contrast with the product's own colour.
  // Black-only pieces sit on a light card so they don't vanish; a row
  // with both black and white pieces gets a neutral mid-tone instead,
  // since neither a light nor a dark card would work for both.
  const cardBg = tone === "black-product" ? "bg-cream-soft" : "bg-stone";

  return (
    <div className={className}>
      <h3 className="font-display text-2xl sm:text-3xl text-ink mb-7">{title}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="group block">
              <div
                className={`relative aspect-square rounded-2xl overflow-hidden border border-nude/50 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-gold/60 group-hover:shadow-[0_18px_35px_-18px_rgba(64,57,54,0.3)] ${cardBg}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="200px"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm text-ink font-medium text-center">
                {product.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
