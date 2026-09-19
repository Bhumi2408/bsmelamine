"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dongaCollection } from "@/data/products";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useAutoCycle } from "@/lib/useAutoCycle";

const annotations = [
  { label: "Open Donga", angle: -55 },
  { label: "Covered Donga", angle: 30 },
  { label: "Serving", angle: 150 },
  { label: "Family Dining", angle: 230 },
];

export default function DongaStory() {
  const [activeIndex, setActiveIndex] = useAutoCycle(dongaCollection.length, 3200);
  const active = dongaCollection[activeIndex];

  return (
    <section id="donga" className="py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-xl mx-auto text-center mb-14 md:mb-20"
        >
          <p className="eyebrow mb-5">Donga with lid</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
            Serve it warm.
            <br />
            Serve it beautifully.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* rotating visual with annotations */}
          <div className="relative mx-auto w-full max-w-[420px] aspect-square">
            <div className="absolute inset-[6%] rounded-full border border-dashed border-gold/40 animate-spin-slow" />
            <div className="absolute inset-[16%] rounded-full bg-cream-soft shadow-[0_30px_60px_-25px_rgba(64,57,54,0.35)] overflow-hidden border border-nude/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, rotate: -8, scale: 0.94 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 8, scale: 0.94 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="420px"
                    className="object-contain p-3"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {annotations.map((note, i) => {
              const rad = (note.angle * Math.PI) / 180;
              const x = 50 + 46 * Math.cos(rad);
              const y = 50 + 46 * Math.sin(rad);
              return (
                <button
                  key={note.label}
                  onClick={() => setActiveIndex(i % dongaCollection.length)}
                  onMouseEnter={() => setActiveIndex(i % dongaCollection.length)}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs uppercase tracking-wide px-3 py-1.5 rounded-full bg-cream-bright/90 border border-nude/60 text-taupe hover:text-ink hover:border-gold transition-colors duration-300 whitespace-nowrap"
                >
                  {note.label}
                </button>
              );
            })}
          </div>

          {/* selector list */}
          <div>
            <p className="text-sm text-taupe leading-relaxed max-w-md mb-8">
              From a quick weekday dinner to a full family gathering, a good
              donga keeps food warm and the table looking effortless.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {dongaCollection.map((product, i) => (
                <button
                  key={product.id}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm border transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-ink text-cream-bright border-ink"
                      : "border-nude/70 text-taupe hover:border-gold hover:text-ink"
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>

            <p className="mt-9 text-sm text-taupe">
              Now showing —{" "}
              <span className="text-ink font-medium">{active.name}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
