"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { easeLux } from "@/lib/motion";
import { brand } from "@/data/brand";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Tableware", href: "#tableware" },
  { label: "Dinner Sets", href: "#dinner-sets" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeLux }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(0,0,0,0.5)]"
            : "bg-ink/80 backdrop-blur-sm"
        }`}
      >
        <div aria-hidden className="h-0.75 w-full accent-gradient" />

        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className="relative group shrink-0 inline-flex items-center bg-cream-bright rounded-xl px-1 py-1 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.logoWidth}
              height={brand.logoHeight}
              className="h-10 md:h-18 w-auto object-contain"
              priority
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-[13px] tracking-wide uppercase text-cream-bright/70 hover:text-cream-bright hover:bg-cream-bright/10 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex p-2.5 rounded-full text-cream-bright hover:text-ink hover:bg-cream-bright transition-all duration-300"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cream-bright"
          >
            <div className="mx-auto max-w-[1440px] h-full flex flex-col px-6 md:px-10 lg:px-16">
              <div className="flex items-center justify-between h-20 md:h-24">
                <span className="font-display text-2xl tracking-wide text-ink">
                  BS Melamine
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-ink hover:text-rose transition-colors duration-300"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="flex-1 flex flex-col justify-center gap-2 md:gap-4"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 * i, ease: easeLux }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-4xl sm:text-5xl text-ink hover:text-rose transition-colors duration-300 py-2 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="pb-10 flex flex-wrap items-center gap-x-6 gap-y-1 text-taupe text-sm">
                <span>{brand.email}</span>
                <span className="hidden sm:inline">{brand.phones[0]}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
