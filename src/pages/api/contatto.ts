import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const Schema = z.object({
  nome: z.string().min(2).max(100),
  email: z.string().email(),
  messaggio: z.string().min(10).max(2000),
});

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const result = Schema.safeParse(body);

  if (!result.success) {
    return new Response(JSON.stringify({ error: "Dati non validi" }), {
      status: 400,
    });
  }

  const { nome, email, messaggio } = result.data;

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["federica.pasquariello.6@gmail.com"],
    subject: "Nuovo messaggio da " + nome,
    html: `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${messaggio}</p>
    `,
    replyTo: email,
  });

  if (error) {
    return new Response(JSON.stringify({ error: "Errore invio email" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
  });
};