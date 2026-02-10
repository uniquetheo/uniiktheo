import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
      from: "UniikTheo <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // Replace with your email for production
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
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
