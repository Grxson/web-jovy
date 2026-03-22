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

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            onSubmit={onSubmit}
            className="space-y-4 rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-white/20"
          >
            <div>
              <Input
                placeholder="Tu nombre"
                aria-label="Nombre"
                {...register("name", {
                  required: "El nombre es requerido",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres",
                  },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Teléfono"
                aria-label="Teléfono"
                {...register("phone", {
                  required: "El teléfono es requerido",
                  pattern: {
                    value: /^[0-9+\s-]{8,}$/,
                    message: "Teléfono inválido",
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
                placeholder="Correo electrónico"
                aria-label="Correo electrónico"
                {...register("email", {
                  required: "El correo es requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo inválido",
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
                placeholder="Lorem ipsum dolor sit amet..."
                aria-label="Mensaje"
                {...register("message", {
                  required: "El mensaje es requerido",
                  minLength: {
                    value: 10,
                    message: "Mínimo 10 caracteres",
                  },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" disabled={status === "loading"} className="w-full">
              {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
            </Button>

            {feedback && (
              <p
                className={status === "success" ? "text-sm text-emerald-700" : "text-sm text-red-600"}
                role="status"
              >
                {feedback}
              </p>
            )}

            <div className="pt-4 mt-6 border-t border-gray-200">
              <p className="text-sm text-[var(--color-muted)] mb-3">
                O contacta por WhatsApp:
              </p>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                💬 Chat por WhatsApp
              </Link>
            </div>
          </motion.form>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-[2rem] overflow-hidden shadow-lg ring-1 ring-white/20 h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4577633461543!2d-99.13281192346933!3d19.426394481943643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c5d5d5d5d5%3A0x5d5d5d5d5d5d5d5d!2sMexico%20City!5e0!3m2!1sen!2smx!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Jovy Candy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
