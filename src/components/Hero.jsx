"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroImages } from "@/data/products";
import { easeLux, staggerContainer, fadeUp } from "@/lib/motion";

const headingLine1 = "Bring a little";
const headingLine2 = "beauty to";
const headingLine3 = "every table.";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const plateY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const bowlY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const trayY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const spoonY = useTransform(scrollYProgress, [0, 1], [0, 130]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-[100vh] lg:flex lg:items-center"
    >
      {/* decorative organic backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-40 w-[520px] h-[520px] bg-blush/40 blob animate-spin-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-10%] w-[380px] h-[380px] bg-sage/30 blob-2 animate-spin-slow-reverse"
      />

      <div className="relative mx-auto max-w-[1440px] w-full px-6 md:px-10 lg:px-16 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* left copy */}
        <motion.div
          variants={staggerContainer(0.16, 0.15)}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            Everyday tableware, beautifully made
          </motion.p>

          <h1 className="font-display text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.2rem] text-ink -ml-0.5">
            {[headingLine1, headingLine2, headingLine3].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: easeLux,
                    delay: 0.15 + i * 0.12,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-taupe text-base md:text-lg leading-relaxed max-w-md"
          >
            Thoughtfully designed tableware for everyday meals, special
            gatherings and everything in between.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#collections" variant="solid">
              Explore Collection
              <ArrowRight size={16} strokeWidth={1.75} />
            </MagneticButton>
            <MagneticButton href="#dinner-sets" variant="outline">
              View Dinner Sets
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* right composition */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[620px]">
          <div
            aria-hidden
            className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-nude/30 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute top-[6%] right-[4%] w-56 h-56 rounded-full border border-gold/30"
          />

          <motion.div
            style={{ y: plateY }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easeLux, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-[420px] animate-float-y-slow"
          >
            <Image
              src={heroImages.plate}
              alt="Signature hero dinner plate"
              width={640}
              height={640}
              priority
              className="w-full h-auto drop-shadow-[0_35px_45px_rgba(64,57,54,0.18)]"
            />
          </motion.div>

          <motion.div
            style={{ y: bowlY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeLux, delay: 0.55 }}
            className="absolute left-[2%] bottom-[8%] w-[38%] max-w-[190px] animate-float-y"
          >
            <Image
              src={heroImages.bowl}
              alt="Companion serving bowl"
              width={320}
              height={320}
              className="w-full h-auto drop-shadow-[0_20px_25px_rgba(64,57,54,0.16)]"
            />
          </motion.div>

          <motion.div
            style={{ y: trayY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeLux, delay: 0.7 }}
            className="absolute right-[0%] top-[10%] w-[34%] max-w-[250px] animate-float-y-slow"
          >
            <Image
              src={heroImages.tray}
              alt="Small accent tray"
              width={300}
              height={300}
              className="w-full h-auto drop-shadow-[0_20px_25px_rgba(64,57,54,0.16)] rotate-[40deg]"
            />
          </motion.div>

          <motion.div
            style={{ y: spoonY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeLux, delay: 0.85 }}
            className="absolute right-[10%] bottom-[2%] w-[30%] max-w-[400px] rotate-[90deg] animate-float-y"
          >
            <Image
              src={heroImages.spoon}
              alt="Serving spoon"
              width={160}
              height={160}
              className="w-full h-auto drop-shadow-[0_15px_20px_rgba(64,57,54,0.14)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MagneticButton({ href, children, variant = "solid" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const base =
    "btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-cream-bright hover:bg-rose"
      : "border border-ink/25 text-ink hover:border-gold hover:text-gold";

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles}`}
    >
      {children}
    </Link>
  );
}
