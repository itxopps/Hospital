import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, phone, email, department, preferredDate } = body;

  try {
    await resend.emails.send({
      from: "Faris Hospital <appointments@farisaljazeera.com.sa>",
      to: ["oppstech1117@gmail.com"], // Reception Email
      subject: `New Appointment Booking: ${fullName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
