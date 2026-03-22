"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-20 pb-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)] ring-1 ring-[var(--color-border)]">
            x x x x
          </span>
          <h1 className="font-display text-5xl leading-tight text-[var(--color-ink)] sm:text-6xl">
            x x x x x x.
          </h1>
          <p className="max-w-xl text-lg text-[var(--color-muted)]">
            x x x x x x x x x x x x x.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]"
            >
              boton x
            </Link>
            <Link
              href="#productos"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-border)] transition hover:bg-[var(--color-soft)]"
            >
              opcion x
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_80px_rgba(251,146,60,0.25)] backdrop-blur"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-dark)]">
              x x x x
            </p>
            <h2 className="font-display text-3xl text-[var(--color-ink)]">
              titulo x
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              x x x x x x x x x x.
            </p>
            <p className="text-2xl font-bold text-[var(--color-primary-dark)]">
              $xxx
            </p>
          </div>
          <div className="mt-8 h-44 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,#f82064_0%,#ff6fa1_45%,#ffd1e2_90%)]" />
        </motion.div>
      </div>
    </section>
  );
}
