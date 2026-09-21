import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://www.bsmelamine.example"),
  title: {
    default: "BS Melamine — Beautifully Set Tableware & Dinner Sets",
  },
  description:
    "Thoughtfully designed tableware for everyday meals, special gatherings and everything in between. Explore plates, bowls, trays, donga and dinner sets crafted for beautifully set tables.",
  keywords: [
    "tableware",
    "dinner sets",
    "melamine tableware",
    "plates",
    "bowls",
    "trays",
    "donga",
    "hotelware",
    "premium tableware India",
  ],
  icons:{
    icon:"/logo.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <div aria-hidden className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
