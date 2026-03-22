import type { ContactApiResponse, ContactFormData } from "@/types/contact";

export async function sendContactForm(
  payload: ContactFormData,
): Promise<ContactApiResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as ContactApiResponse;

  if (!response.ok) {
    throw new Error(data.message || "No fue posible enviar tu mensaje.");
  }

  return data;
}
