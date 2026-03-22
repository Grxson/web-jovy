import type { Product } from "@/types/product";

export const BUSINESS_NAME = "Jovy Candy";
export const WHATSAPP_NUMBER = "5215512345678";
export const BUSINESS_EMAIL = "info@jovycandy.com";
export const BUSINESS_ADDRESS = "Mexico City, Mexico";

export const PRODUCTS: Product[] = [
  {
    id: "fruit-roll",
    name: "Fruit Roll",
    description: "Deliciosos rolls de frutas con sabor intenso y auténtico chamoy.",
    image: "/images/products/fruit-roll.svg",
    price: "$129",
    badge: "Popular",
  },
  {
    id: "we-are-spicy",
    name: "We Are Spicy",
    description: "Picante y sabroso, para los que aman el toque fuerte y ardiente.",
    image: "/images/products/we-are-spicy.svg",
    price: "$189",
    badge: "Premium",
  },
  {
    id: "we-are-sweet",
    name: "We Are Sweet",
    description: "Dulce y suave, la opción perfecta para los paladares más delicados.",
    image: "/images/products/we-are-sweet.svg",
    price: "$89",
    badge: "Favorito",
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
