"use client";

import { motion } from "framer-motion";
import { Sparkles, LayoutGrid, Gem, Users } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const features = [
  {
    icon: Sparkles,
    title: "Designed for Everyday",
    description:
      "Pieces made to earn their place on the table daily, not just on special occasions.",
  },
  {
    icon: LayoutGrid,
    title: "Thoughtful Variety",
    description:
      "Fourteen collections spanning plates, bowls, trays and more — each with its own character.",
  },
  {
    icon: Gem,
    title: "Beautifully Finished",
    description:
      "Every curve and edge is considered, so each piece feels as good as it looks.",
  },
  {
    icon: Users,
    title: "Made for Sharing",
    description:
      "From family dinners to festive gatherings, built for the moments around the table.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-cream-soft/50">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-[6%] w-[320px] h-[320px] bg-beige/50 blob animate-spin-slow"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="eyebrow mb-5 text-center"
        >
          Why BS Melamine
        </motion.p>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="divide-y divide-nude/60 border-t border-b border-nude/60 mt-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group py-9 md:py-12 grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-12"
            >
              <span className="font-display text-gold text-lg w-10">
                {`0${i + 1}`}
              </span>

              <div className="flex items-center gap-5 md:gap-8">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-nude/25 shrink-0 transition-all duration-500 group-hover:bg-gold/20 group-hover:-translate-y-1 group-hover:rotate-3">
                  <feature.icon size={26} strokeWidth={1.25} className="text-gold" />
                </span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink">
                    {feature.title}
                  </h3>
                  <p className="text-taupe mt-2 max-w-md leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>

              <span
                aria-hidden
                className="hidden md:block h-0.5 accent-gradient w-16 origin-left-line scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
