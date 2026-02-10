import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      problem,
      goals,
      productStatus,
      timeline,
      budget,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Sending to yourself
      replyTo: email,
      subject: `New Project Request from ${name}`,
      html: `
        <h1>New Project Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <hr />
        <h2>Problem Description</h2>
        <p>${problem}</p>
        <hr />
        <p><strong>Goals:</strong> ${goals?.join(", ") || "None"}</p>
        <p><strong>Product Status:</strong> ${productStatus}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ data: info });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
