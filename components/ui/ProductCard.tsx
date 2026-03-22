"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-lg shadow-orange-100"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-3 p-6">
        <span className="inline-flex rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)]">
          {product.badge}
        </span>
        <h3 className="font-display text-2xl text-[var(--color-ink)]">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-muted)]">{product.description}</p>
      </div>
    </motion.article>
  );
}
