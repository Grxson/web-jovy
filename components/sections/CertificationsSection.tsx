"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function CertificationsSection() {
  return (
    <section id="certificaciones" className="px-6 py-16 sm:px-10 lg:px-16 bg-gradient-to-br from-[#0fb8b4]/5 to-[var(--color-primary)]/5">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]"
          >
            Lorem Ipsum
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-[var(--color-ink)]"
          >
            Dolor Sit Amet Consectetur
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.article
              key={cert.id}
              variants={item}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-white/20 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-3">
                {cert.issuer}
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold">
                Año {cert.year}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
