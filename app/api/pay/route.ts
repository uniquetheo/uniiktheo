import { NextResponse } from "next/server";
import { paystack } from "@/lib/paystack";

// Form POST from /pay -> start a Paystack transaction -> 303 to Paystack's hosted checkout.
export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  const form = await request.formData();
  const field = (k: string) => String(form.get(k) ?? "").trim().slice(0, 200);
  const name = field("name");
  const email = field("email");
  const invoice = field("invoice");
  const amount = Number(field("amount"));

  const back = (error: string) => {
    const q = new URLSearchParams({ error, invoice, amount: field("amount") });
    return NextResponse.redirect(`${origin}/pay?${q}`, 303);
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return back("Please enter a valid email address.");
  if (!Number.isFinite(amount) || amount < 1 || amount > 1_000_000) return back("Please enter an amount between GHS 1 and GHS 1,000,000.");

  try {
    const data = await paystack<{ authorization_url: string }>("/transaction/initialize", {
      email,
      amount: Math.round(amount * 100), // pesewas
      currency: "GHS",
      callback_url: `${origin}/pay`,
      metadata: {
        invoice,
        name,
        custom_fields: [
          { display_name: "Invoice", variable_name: "invoice", value: invoice || "-" },
          { display_name: "Name", variable_name: "name", value: name || "-" },
        ],
      },
    });
    return NextResponse.redirect(data.authorization_url, 303);
  } catch (e) {
    console.error("Paystack initialize failed:", e);
    return back("We couldn't start the payment. Please try again in a moment.");
  }
}
