// app/api/send/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // ← Add this safety check
    if (!process.env.RESEND_API_KEY && !process.env.SENDGRID_API_KEY && !process.env.EMAIL_SERVICE) {
      console.error("Missing email API key in environment variables");
      return NextResponse.json(
        { error: "Server configuration error - missing API key" },
        { status: 500 }
      );
    }

    const body = await request.json();
    // ... your existing logic to send email (Resend, Nodemailer, etc.)

    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // const data = await resend.emails.send({ ... });

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error: any) {
    console.error("Error in /api/send:", error.message || error);
    
    return NextResponse.json(
      { 
        error: "Failed to send message",
        details: process.env.NODE_ENV === "development" ? error.message : undefined 
      },
      { status: 500 }
    );
  }
}

// Optional: Allow GET for testing
export async function GET() {
  return NextResponse.json({ message: "API /send is working" });
}