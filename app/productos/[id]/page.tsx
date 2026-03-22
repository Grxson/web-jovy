"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== params.id).slice(0, 3);

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
          <div className="mx-auto w-full max-w-6xl">
            <Link href="/productos" className="text-sm text-[var(--color-primary)] hover:underline">
              ← Volver a productos
            </Link>
          </div>
        </div>

        {/* Producto Principal */}
        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Imagen */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] rounded-[2rem] overflow-hidden bg-[var(--color-soft)] shadow-lg"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[var(--color-primary)] text-white font-bold">
                  {product.badge}
                </div>
              </motion.div>

              {/* Contenido */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                    Producto
                  </p>
                  <h1 className="font-display text-4xl lg:text-5xl text-[var(--color-ink)]">
                    {product.name}
                  </h1>
                </div>

                <div className="space-y-2">
                  <p className="text-lg text-[var(--color-muted)]">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4 border-y border-gray-200 py-6">
                  <div>
                    <p className="text-sm text-[var(--color-muted)] mb-2">Precio</p>
                    <p className="text-4xl font-bold text-[var(--color-primary)]">
                      {product.price}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full" size="lg">
                    Agregar al Carrito
                  </Button>
                  <Link
                    href={`https://wa.me/5215512345678?text=Hola, estoy interesado en ${product.name}`}
                    target="_blank"
                    className="block w-full px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-center font-semibold hover:bg-[var(--color-primary)]/5 transition"
                  >
                    💬 Contactar por WhatsApp
                  </Link>
                </div>

                <div className="bg-[var(--color-soft)] rounded-lg p-4 text-sm text-[var(--color-muted)]">
                  <p>✓ Envíos a toda la república</p>
                  <p>✓ Producto 100% auténtico</p>
                  <p>✓ Garantía de calidad</p>
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
