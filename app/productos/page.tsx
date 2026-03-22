"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function ProductosPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  // Función para crear slug del nombre
  const getCategorySlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  // Filtrar productos por categoría si existe el parámetro
  const filteredProducts = categoryParam
    ? PRODUCTS.filter((product) => getCategorySlug(product.name) === categoryParam)
    : PRODUCTS;

  // Si se filtra por categoría, mostrar solo los de esa categoría
  const productsToShow = categoryParam ? filteredProducts : PRODUCTS;
  return (
    <>
      <NavbarSection />
      <main className="min-h-screen bg-white">
        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl space-y-12">
            <div className="space-y-4">
              <h1 className="font-display text-4xl lg:text-5xl text-[var(--color-ink)]">
                {categoryParam 
                  ? filteredProducts.length > 0 
                    ? filteredProducts[0].name 
                    : "Categoría no encontrada"
                  : "Todos Nuestros Productos"}
              </h1>
              <p className="text-lg text-[var(--color-muted)]">
                {categoryParam && filteredProducts.length > 0
                  ? `Explora nuestros productos de ${filteredProducts[0].name.toLowerCase()}`
                  : "Explora nuestra completa gama de chamoy artesanal"}
              </p>
              {categoryParam && (
                <Link href="/productos">
                  <button className="text-[var(--color-primary)] hover:underline font-semibold">
                    ← Volver a todos los productos
                  </button>
                </Link>
              )}
            </div>

            <div className={`grid ${categoryParam ? "gap-6 md:grid-cols-3 lg:grid-cols-5" : "gap-8 md:grid-cols-2 lg:grid-cols-4"}`}>
              {productsToShow.map((product) => (
                <Link key={product.id} href={`/productos/${product.id}`}>
                  <article className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <div className="relative h-80 w-full overflow-hidden bg-[var(--color-soft)] flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {!categoryParam && (
                      <>
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold">
                          {product.badge}
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-[var(--color-ink)] text-sm">{product.name}</h3>
                          <p className="text-xs text-[var(--color-muted)] mt-2 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-[var(--color-primary)] text-sm">{product.price}</span>
                            <span className="text-xs text-[var(--color-primary)]">Ver →</span>
                          </div>
                        </div>
                      </>
                    )}
                    {categoryParam && (
                      <div className="p-3 text-center">
                        <h3 className="font-semibold text-[var(--color-ink)] text-xs uppercase tracking-wider">
                          {product.name}
                        </h3>
                      </div>
                    )}
                  </article>
                </Link>
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
