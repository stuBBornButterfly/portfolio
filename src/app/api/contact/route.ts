import { Resend } from "resend"
import { profile } from "@/lib/data/profile"

export async function POST(request: Request) {
  let payload: { name?: string; email?: string; message?: string }

  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  const name = payload.name?.trim()
  const email = payload.email?.trim()
  const message = payload.message?.trim()

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || profile.email,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  })

  if (error) {
    return Response.json({ error: "Could not send message." }, { status: 502 })
  }

  return Response.json({ ok: true })
}
