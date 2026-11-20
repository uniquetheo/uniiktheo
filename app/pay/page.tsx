import { paystack } from "@/lib/paystack";

export const metadata = {
  title: "Pay an invoice | UniikTheo",
  robots: { index: false },
};

const ink = "#0B0F14";
const muted = "#5F6B7A";
const brand = "#084168";
const inputStyle = { borderColor: "#E5E7EB", color: ink, backgroundColor: "#F7F8FA" };
const ghs = (pesewas: number) =>
  new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS" }).format(pesewas / 100);

type Search = Promise<Record<string, string | undefined>>;

export default async function PayPage({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams;
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8" style={{ backgroundColor: "#FFFFFF" }}>
        {sp.reference ? <Receipt reference={sp.reference} /> : <PayForm sp={sp} />}
      </div>
    </section>
  );
}

function PayForm({ sp }: { sp: Record<string, string | undefined> }) {
  // Prefill via link, e.g. /pay?invoice=INV-001&amount=1500&email=client@example.com
  const fields = [
    { name: "invoice", label: "Invoice number", type: "text", placeholder: "INV-001", required: false },
    { name: "name", label: "Your name", type: "text", placeholder: "Full name or company", required: false },
    { name: "email", label: "Email *", type: "email", placeholder: "you@example.com", required: true },
  ];
  return (
    <form action="/api/pay" method="post" className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: ink }}>Pay an invoice</h1>
        <p className="mt-1 text-sm" style={{ color: muted }}>
          You&apos;ll finish on Paystack&apos;s secure page with card, mobile money or bank transfer.
        </p>
      </div>
      {sp.error && (
        <p role="alert" className="rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: "#FEF2F2", color: "#B91C1C" }}>
          {sp.error}
        </p>
      )}
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="block text-sm font-medium mb-1.5" style={{ color: ink }}>{f.label}</span>
          <input
            name={f.name}
            type={f.type}
            required={f.required}
            defaultValue={sp[f.name]}
            placeholder={f.placeholder}
            maxLength={200}
            className="w-full px-4 py-3 rounded-xl border outline-none"
            style={inputStyle}
          />
        </label>
      ))}
      <label className="block">
        <span className="block text-sm font-medium mb-1.5" style={{ color: ink }}>Amount (GHS) *</span>
        <input
          name="amount"
          type="number"
          inputMode="decimal"
          min="1"
          step="0.01"
          required
          defaultValue={sp.amount}
          placeholder="0.00"
          className="w-full px-4 py-3 rounded-xl border outline-none"
          style={inputStyle}
        />
      </label>
      <button
        type="submit"
        className="w-full px-8 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
        style={{ backgroundColor: brand }}
      >
        Continue to payment
      </button>
    </form>
  );
}

async function Receipt({ reference }: { reference: string }) {
  // Paystack's redirect proves nothing on its own: ask Paystack for the real status.
  let tx: { status: string; amount: number; customer: { email: string }; metadata?: { invoice?: string } } | null = null;
  try {
    tx = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`);
  } catch (e) {
    console.error("Paystack verify failed:", e);
  }

  const paid = tx?.status === "success";
  const pending = tx && ["ongoing", "pending", "processing", "queued"].includes(tx.status);
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-bold" style={{ color: ink }}>
        {paid ? "Payment received. Thank you!" : pending ? "Payment pending" : "Payment not completed"}
      </h1>
      {tx && (
        <dl className="text-sm space-y-1" style={{ color: muted }}>
          {tx.metadata?.invoice && <div>Invoice: <strong style={{ color: ink }}>{tx.metadata.invoice}</strong></div>}
          <div>Amount: <strong style={{ color: ink }}>{ghs(tx.amount)}</strong></div>
          <div>Reference: <span className="font-mono">{reference}</span></div>
        </dl>
      )}
      <p className="text-sm" style={{ color: muted }}>
        {paid
          ? `Paid by ${tx!.customer.email}. Keep the reference above for your records.`
          : pending
            ? "Mobile money approvals can take a few minutes. Don't pay again. Refresh this page shortly."
            : "No money was taken. You can try again below."}
      </p>
      {!paid && (
        <a href="/pay" className="inline-block px-8 py-3 rounded-xl text-white font-medium" style={{ backgroundColor: brand }}>
          {pending ? "Back" : "Try again"}
        </a>
      )}
    </div>
  );
}
