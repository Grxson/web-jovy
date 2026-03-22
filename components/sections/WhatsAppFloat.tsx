"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="fixed right-5 bottom-5 z-50"
    >
      <Link
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-[0_10px_30px_rgba(248,32,100,0.4)] transition hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        WA
      </Link>
    </motion.div>
  );
}
