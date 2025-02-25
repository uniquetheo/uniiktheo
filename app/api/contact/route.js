import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}

export async function POST(req, res) {
  const body = await req.json();
  const { name, email, message } = body;
  const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook)
    auth: {
      user: EMAIL_USER, // Your email address
      pass: EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: EMAIL_USER, // Sender address
    to: EMAIL_USER, // Receiver address (your email)
    subject: `UNIIKTHEO.TECH Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message: "Email sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
