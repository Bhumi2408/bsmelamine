// Centralised category data for the "Tableware Journey" and navigation.
// Replace `image` paths with real photography whenever it's ready —
// nothing else in the app needs to change.
//
// `anchor` points at the homepage section (by element id) that showcases
// that category — this is a single-page site, so every internal link
// scrolls to a section instead of visiting a separate page.

export const categories = [
  {
    slug: "deep-plates",
    name: "Deep Plates",
    short: "Deep Plates",
    description: "Generous, gently curved plates for saucy, everyday meals.",
    image: "/images/categories/deep-plate.webp",
    anchor: "plates",
  },
  {
    slug: "k-plates",
    name: "K Plates",
    short: "K Plates",
    description: "Classic profiles finished with a soft, matte touch.",
    image: "/images/categories/k-plates.webp",
    anchor: "plates",
  },
  {
    slug: "flate-plates",
    name: "Flate Plates",
    short: "Flate Plates",
    description: "Clean, wide rims that let every dish take centre stage.",
    image: "/images/categories/flate-plates.webp",
    anchor: "plates",
  },
  {
    slug: "soup-plates",
    name: "Soup Plates",
    short: "Soup Plates",
    description: "Rounded wells built for broths, curries and comfort.",
    image: "/images/categories/soup-plates.webp",
    anchor: "bowls",
  },
  {
    slug: "bowls",
    name: "Bowls",
    short: "Bowls",
    description: "Rounded, huggable forms for everyday servings.",
    image: "/images/categories/bowls.webp",
    anchor: "bowls",
  },
  {
    slug: "black-items",
    name: "Black Items",
    short: "Black Items",
    description: "Matte black pieces that add quiet drama to the table.",
    image: "/images/categories/black-items.webp",
    anchor: "hotelware",
  },
  {
    slug: "small-items",
    name: "Small Items",
    short: "Small Items",
    description: "The little pieces that finish a beautifully set table.",
    image: "/images/categories/small-item.webp",
    anchor: "spoons",
  },
  {
    slug: "k-donga",
    name: "K Donga",
    short: "K Donga",
    description: "Traditional serveware, reimagined for daily use.",
    image: "/images/categories/k-donga.webp",
    anchor: "donga",
  },
  {
    slug: "donga-with-lid",
    name: "Donga With Lid",
    short: "Donga With Lid",
    description: "Keep meals warm and beautiful, from stove to table.",
    image: "/images/categories/donga-with-lid.webp",
    anchor: "donga",
  },
  {
    slug: "premium-trays",
    name: "Premium Trays",
    short: "Premium Trays",
    description: "Statement trays for serving with a little more flourish.",
    image: "/images/categories/premium-trays.webp",
    anchor: "trays",
  },
  {
    slug: "lite-trays",
    name: "Lite Trays",
    short: "Lite Trays",
    description: "Everyday trays, light in hand and easy to love.",
    image: "/images/categories/lite-trays.webp",
    anchor: "trays",
  },
  {
    slug: "hotelware",
    name: "Hotelware",
    short: "Hotelware",
    description: "Durable, elegant pieces built for busy, beautiful service.",
    image: "/images/categories/hotelware.webp",
    anchor: "hotelware",
  },
  {
    slug: "spoons",
    name: "Spoons",
    short: "Spoons",
    description: "Small details that make every serving feel considered.",
    image: "/images/categories/spoons.webp",
    anchor: "spoons",
  },
  {
    slug: "dinner-sets",
    name: "Dinner Sets",
    short: "Dinner Sets",
    description: "Complete, coordinated collections for the whole table.",
    image: "/images/categories/dinner-sets.webp",
    anchor: "dinner-sets",
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((category) => category.slug === slug);

export const getCategoryAnchor = (slug) =>
  getCategoryBySlug(slug)?.anchor ?? "collections";
