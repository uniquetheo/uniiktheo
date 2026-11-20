// Server-only: uses the secret key. Never import from a client component.
export async function paystack<T = any>(path: string, body?: object): Promise<T> {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not set");
  const res = await fetch(`https://api.paystack.co${path}`, {
    method: body ? "POST" : "GET",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const json = await res.json();
  if (!res.ok || !json.status) throw new Error(json.message || `Paystack error ${res.status}`);
  return json.data;
}
