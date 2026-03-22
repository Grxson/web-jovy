"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
  },
};

export function ProductsSection() {
  const categories = PRODUCTS.slice(0, 3).map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.image,
  }));

  // Crear slug a partir del nombre (ej: "Fiesta Frutal Box" -> "fiesta-frutal-box")
  const getCategorySlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  return (
    <section id="productos" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-12">
        <div className="space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl lg:text-6xl text-[var(--color-primary)] font-black tracking-tight"
          >
            PRODUCTS
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-3 place-items-center"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link href={`/productos?category=${getCategorySlug(category.name)}`}>
                {/* Círculo con imagen */}
                <motion.div
                  whileHover={{ scale: 1.1, translateY: -12 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--color-primary)]/20 group-hover:ring-[var(--color-primary)]/50 transition-all duration-300">
                    {/* Efecto de brillo sutil */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 rounded-full pointer-events-none z-10" />
                    
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Ver todos los productos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center pt-12"
        >
          <Link href="/productos">
            <motion.button 
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-bold rounded-full text-lg shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/50 transition-all"
            >
              Ver Todos Los Productos →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
