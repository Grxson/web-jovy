import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export const metadata = {
  title: "Productos | Jovy Candy",
  description: "Conoce todos nuestros productos de chamoy artesanal",
};

export default function ProductosPage() {
  return (
    <>
      <NavbarSection />
      <main className="min-h-screen bg-white">
        <section className="px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl space-y-12">
            <div className="space-y-4">
              <h1 className="font-display text-4xl lg:text-5xl text-[var(--color-ink)]">
                Todos Nuestros Productos
              </h1>
              <p className="text-lg text-[var(--color-muted)]">
                Explora nuestra completa gama de chamoy artesanal
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((product) => (
                <Link key={product.id} href={`/productos/${product.id}`}>
                  <article className="group relative rounded-[2rem] overflow-hidden bg-white shadow-lg ring-1 ring-white/20 hover:shadow-2xl transition-all cursor-pointer">
                    <div className="relative h-64 w-full overflow-hidden bg-[var(--color-soft)]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold">
                      {product.badge}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[var(--color-ink)]">{product.name}</h3>
                      <p className="text-sm text-[var(--color-muted)] mt-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-[var(--color-primary)]">{product.price}</span>
                        <span className="text-sm text-[var(--color-primary)]">Ver →</span>
                      </div>
                    </div>
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
