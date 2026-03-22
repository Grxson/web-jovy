"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ProductsSection() {
  return (
    <section id="productos" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
            x x x
          </p>
          <h2 className="font-display text-4xl text-[var(--color-ink)]">
            titulo x x x
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
