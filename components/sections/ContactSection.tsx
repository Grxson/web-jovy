"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function ContactSection() {
  const {
    register,
    formState: { errors },
    status,
    feedback,
    onSubmit,
  } = useContactForm();

  return (
    <section id="contacto" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
            x x x
          </p>
          <h2 className="font-display text-4xl text-[var(--color-ink)]">
            titulo x x x
          </h2>
          <p className="text-[var(--color-muted)]">
            x x x x x x x x.
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            opcion x
          </Link>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          onSubmit={onSubmit}
          className="space-y-4 rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(251,146,60,0.15)] ring-1 ring-[var(--color-border)]"
        >
          <div>
            <Input
              placeholder="Tu nombre"
              aria-label="Nombre"
              {...register("name", {
                required: "x",
                minLength: {
                  value: 2,
                  message: "x",
                },
              })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Telefono"
              aria-label="Telefono"
              {...register("phone", {
                required: "x",
                pattern: {
                  value: /^[0-9+\s-]{8,}$/,
                  message: "x",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Correo electronico"
              aria-label="Correo electronico"
              {...register("email", {
                required: "x",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "x",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Textarea
              rows={5}
              placeholder="Cuantos productos necesitas y para cuando?"
              aria-label="Mensaje"
              {...register("message", {
                required: "x",
                minLength: {
                  value: 10,
                  message: "x",
                },
              })}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={status === "loading"} className="w-full">
            {status === "loading" ? "x" : "boton x"}
          </Button>

          {feedback && (
            <p
              className={status === "success" ? "text-sm text-emerald-700" : "text-sm text-red-600"}
              role="status"
            >
              {feedback}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
