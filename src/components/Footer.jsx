import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/SocialIcons";
import { brand } from "@/data/brand";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "#home" },
      { label: "Collections", href: "#collections" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Collections",
    links: [
      { label: "Plates", href: "#plates" },
      { label: "Bowls", href: "#bowls" },
      { label: "Donga", href: "#donga" },
      { label: "Trays", href: "#trays" },
      { label: "Dinner Sets", href: "#dinner-sets" },
      { label: "Hotelware", href: "#hotelware" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream-soft">
      <div aria-hidden className="h-0.75 w-full accent-gradient" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-5%] w-[420px] h-[420px] bg-rose/15 blob animate-spin-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-8%] w-[380px] h-[380px] bg-sage/20 blob-2 animate-spin-slow-reverse"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-16 md:py-24 grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link
            href="#home"
            className="inline-flex items-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={brand.logoWidth}
              height={brand.logoHeight}
              className="h-24 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 text-sm text-taupe leading-relaxed max-w-xs">
            Thoughtfully designed tableware for everyday meals, special
            gatherings and everything in between.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <SocialIcon Icon={InstagramIcon} label="Instagram" />
            <SocialIcon Icon={FacebookIcon} label="Facebook" />
            <SocialIcon Icon={YoutubeIcon} label="YouTube" />
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs uppercase tracking-wide text-gold mb-5">
              {column.title}
            </p>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-taupe hover:text-ink transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs uppercase tracking-wide text-gold mb-5">
            Contact
          </p>
          <ul className="space-y-3.5 text-sm text-taupe">
            {brand.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2.5">
                <Phone size={15} strokeWidth={1.5} className="text-gold shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-ink transition-colors duration-300">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail size={15} strokeWidth={1.5} className="text-gold shrink-0" />
              <a href={`mailto:${brand.email}`} className="hover:text-ink transition-colors duration-300">
                {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} strokeWidth={1.5} className="text-gold shrink-0 mt-0.5" />
              <span>{brand.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-nude/60">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-taupe">
          <span>© 2026 BS Melamine. All rights reserved. | Powered By <Link href="https://www.cybertricksmedia.com/" target="_blank">Cybertricksmedia Pvt Ltd</Link></span>
          <span className="italic font-display text-sm text-taupe/80">
            Beautifully set, every day.
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, label }) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-nude/60 text-ink hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
    >
      <Icon />
    </Link>
  );
}
