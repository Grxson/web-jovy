"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/services/contactService";
import type { ContactFormData } from "@/types/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("loading");
    setFeedback("");

    try {
      const response = await sendContactForm(values);
      setStatus("success");
      setFeedback(response.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrio un error inesperado. Intenta nuevamente.",
      );
    }
  });

  return {
    ...form,
    status,
    feedback,
    onSubmit,
  };
}
