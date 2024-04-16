import { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { email, name, message, subject } = body;
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Hello world",
      react: EmailTemplate({ firstName: name }),
    });
    if (data.status === "success") {
      return NextResponse.json({ message: "Email successfully sent!" });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
  }
}
