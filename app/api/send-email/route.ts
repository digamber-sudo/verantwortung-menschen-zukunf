import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailConfig, EmailData } from "@/lib/email-config";
import { getEmailTemplate } from "@/lib/email-template";

export async function POST(req: NextRequest) {
  try {
    const data: EmailData = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig.smtp);

    const typeLabels: Record<string, string> = {
      kontakt: "Kontaktanfrage",
      spenden: "Spendenanfrage",
      volunteer: "Mitmachen",
      event: "Event-Anmeldung",
    };

    const subject = `${typeLabels[data.type] || "Neue Nachricht"}: ${data.firstName} ${data.lastName || ""}`;

    // Send email
    await transporter.sendMail({
      from: emailConfig.from,
      to: emailConfig.recipients.to,
      cc: emailConfig.recipients.cc,
      subject: subject,
      html: getEmailTemplate(data),
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
