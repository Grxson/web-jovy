import type { Product } from "@/types/product";

export const BUSINESS_NAME = "Jovy Candy";
export const WHATSAPP_NUMBER = "5215512345678";
export const BUSINESS_EMAIL = "info@jovycandy.com";
export const BUSINESS_ADDRESS = "Mexico City, Mexico";

export const PRODUCTS: Product[] = [
  {
    id: "box-fiesta",
    name: "Fiesta Frutal Box",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/products/box-fiesta-frutal.svg",
    price: "$129",
    badge: "Popular",
  },
  {
    id: "mix-luxury",
    name: "Mix Tropical Luxury",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/products/mix-luxury-tropical.svg",
    price: "$189",
    badge: "Premium",
  },
  {
    id: "mini-party",
    name: "Mini Party Pack",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: "/images/products/mini-party-pack.svg",
    price: "$89",
    badge: "Oferta",
  },
  {
    id: "choco-crunch",
    name: "Choco Crunch Collection",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
    image: "/images/products/choco-crunch-collection.svg",
    price: "$149",
    badge: "Nuevo",
  },
];

export const ABOUT_FEATURES = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Consectetur",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Certificado Lorem",
    issuer: "Lorem Ipsum Corp",
    year: 2023,
    icon: "🏆",
  },
  {
    id: 2,
    name: "Dolor Sit Amet",
    issuer: "Consectetur Adipiscing",
    year: 2023,
    icon: "✅",
  },
  {
    id: 3,
    name: "Sed Do Eiusmod",
    issuer: "Tempor Incididunt Co",
    year: 2024,
    icon: "📋",
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/jovycandy" },
  { label: "Facebook", href: "https://facebook.com/jovycandy" },
  { label: "TikTok", href: "https://tiktok.com/@jovycandy" },
];
