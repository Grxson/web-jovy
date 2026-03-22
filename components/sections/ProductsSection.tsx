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
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export function ProductsSection() {
  const mainProducts = PRODUCTS.slice(0, 3);

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
          className="grid gap-6 md:grid-cols-3"
        >
          {mainProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/productos/${product.id}`}>
                <article className="relative h-[520px] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/20 hover:shadow-3xl transition-all cursor-pointer">
                  {/* Imagen de fondo */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Contenido */}
                  <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
                    {/* Badge en la parte superior */}
                    <div className="px-4 py-2 rounded-full bg-white/90 text-[var(--color-ink)] text-xs font-black uppercase tracking-wider">
                      {product.badge}
                    </div>

                    {/* Nombre y descripción centrados */}
                    <div className="text-center space-y-4">
                      <h3 className="font-display text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-wider">
                        {product.name}
                      </h3>
                      <p className="text-white/80 text-base font-semibold max-h-12 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="pt-4">
                        <button className="px-8 py-3 bg-[var(--color-primary)] text-white font-bold rounded-full text-lg hover:brightness-110 transition-all transform group-hover:scale-110">
                          Explorar →
                        </button>
                      </div>
                    </div>

                    {/* Precio en la parte inferior */}
                    <div className="text-white text-center">
                      <p className="text-sm text-white/70">Desde</p>
                      <p className="text-4xl font-black">{product.price}</p>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Ver todos los productos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center pt-8"
        >
          <Link href="/productos">
            <button className="px-10 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full text-lg hover:brightness-110 transition-all shadow-lg">
              Ver Todos Los Productos →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
