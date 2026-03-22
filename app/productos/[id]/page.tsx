"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== id).slice(0, 3);

  if (!product) {
    return (
      <>
        <NavbarSection />
        <main className="min-h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold text-[var(--color-ink)] mb-4">Producto no encontrado</h1>
          <Link href="/productos" className="text-[var(--color-primary)] hover:underline">
            ← Volver a productos
          </Link>
        </main>
        <FooterSection />
        <WhatsAppFloat />
      </>
    );
  }

  return (
    <>
      <NavbarSection />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="px-6 py-4 sm:px-10 lg:px-16 border-b border-gray-200">
          <div className="mx-auto w-full max-w-6xl flex items-center space-x-2 text-sm text-[var(--color-muted)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">home</Link>
            <span>›</span>
            <Link href="/productos" className="hover:text-[var(--color-primary)]">productos</Link>
            <span>›</span>
            <span className="text-[var(--color-ink)] font-semibold">{product.name}</span>
          </div>
        </div>

        {/* Producto Principal */}
        <section className="px-6 py-16 sm:px-10 lg:px-16 bg-[#7CB342]">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[600px] flex items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={600}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Contenido */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8 flex flex-col justify-center"
              >
                {/* Badge */}
                <div className="inline-flex w-fit">
                  <span className="px-4 py-2 rounded-full bg-white text-[#7CB342] text-xs font-bold uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>

                {/* Nombre */}
                <div>
                  <h1 className="font-display text-5xl lg:text-6xl text-white font-black uppercase tracking-tight leading-tight">
                    {product.name}
                  </h1>
                </div>

                {/* Descripción */}
                <div className="space-y-4">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>✓ With concentrated natural fruit</li>
                    <li>✓ A gluten free food</li>
                    <li>✓ Naturally fat free</li>
                    <li>✓ Enriched with Vitamin C</li>
                  </ul>
                </div>

                {/* Especificaciones */}
                <div className="border-t border-white/20 pt-8">
                  <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                    SPECS
                  </h3>
                  <div className="space-y-3 text-white/90 text-sm">
                    <p><span className="font-semibold">Weight per piece / Net Wt.:</span> 0.75 oz (21.2 g)</p>
                    <p><span className="font-semibold">Pieces per display:</span> 48</p>
                    <p><span className="font-semibold">Display per Box:</span> 1</p>
                    <p><span className="font-semibold">Box Weight / Net Wt.:</span> 2 lb 3 oz (1.02 kg)</p>
                  </div>
                </div>

                {/* Botones */}
                <div className="space-y-3 pt-4">
                  <button className="text-white font-bold text-lg uppercase tracking-wider hover:underline">
                    DOWNLOAD ↓
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Productos Relacionados */}
        <section className="px-6 py-16 sm:px-10 lg:px-16 bg-[var(--color-soft)]/30">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-display text-3xl text-[var(--color-ink)] mb-8">
              Otros Productos
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/productos/${p.id}`}>
                    <article className="group rounded-[2rem] overflow-hidden bg-white shadow-lg ring-1 ring-white/20 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
                      <div className="relative h-48 w-full overflow-hidden bg-[var(--color-soft)]">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-[var(--color-ink)]">{p.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-semibold mt-2">
                          {p.price}
                        </p>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
}
