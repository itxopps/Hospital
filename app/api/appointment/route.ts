import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, department, preferredDate } = body;

    // Validate required fields
    if (!fullName || !phone || !email || !department || !preferredDate) {
      return NextResponse.json(
        { error: "All required fields must be provided." },
        { status: 400 }
      );
    }

    // Send email to Reception
    const data = await resend.emails.send({
      from: "Faris Hospital Booking <onboarding@resend.dev>", // Replace with your verified domain in production
      to: ["oppstech1117@gmail.com"], // Reception Email Address
      subject: `New Appointment Request: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; color: #0f172a;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            🏥 New Online Appointment Request
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Patient Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Department:</td>
              <td style="padding: 8px 0;">${department}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 8px 0; color: #dc2626; font-weight: bold;">${preferredDate}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #64748b;">
            This email was sent automatically from the Faris Al-Jazeera Medical Complex website booking portal. Please contact the patient to confirm their time slot.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending appointment email:", error);
    return NextResponse.json(
      { error: "Failed to process appointment email." },
      { status: 500 }
    );
  }
}
