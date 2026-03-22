import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;

    if (!body.name || !body.phone || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, message: "Completa todos los campos requeridos." },
        { status: 400 },
      );
    }

    // Placeholder for email provider integration (e.g. Resend)
    if (process.env.RESEND_API_KEY) {
      console.info("Ready to send contact email via Resend.");
    }

    return NextResponse.json({
      ok: true,
      message: "Gracias. Recibimos tu mensaje y te contactaremos muy pronto.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "No fue posible procesar tu solicitud." },
      { status: 500 },
    );
  }
}
