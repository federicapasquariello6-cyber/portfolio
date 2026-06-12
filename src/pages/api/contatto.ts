import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";

export const prerender = false;

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return new Response("Dati non validi", { status: 400 });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return new Response("RESEND_API_KEY mancante", { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "federica.pasquariello.6@gmail.com",
    subject: `Nuovo messaggio da ${parsed.data.name}`,
    replyTo: parsed.data.email,
    text: `
Nome: ${parsed.data.name}
Email: ${parsed.data.email}

Messaggio:
${parsed.data.message}
    `,
  });

  return Response.redirect(new URL("/contatti?success=true", request.url), 303);
};