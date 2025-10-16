import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks | Revupex",
  robots: { index: false, follow: false },
};

type Query = { paid?: string | string[] };

export default async function ThankYou({
  searchParams,
}: { searchParams?: Promise<Query> }) {
  const sp = (await searchParams) ?? {};
  const paidVal = Array.isArray(sp.paid) ? sp.paid[0] : sp.paid;
  const paid = paidVal === "1";

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-xl text-center space-y-5">
        <h1 className="text-3xl font-bold">
          {paid ? "Payment received! 🎉" : "Trial started! 🎉"}
        </h1>

        <p className="text-gray-700">
          Check your email. It will arrive in the next 2 minutes. We will send:
        </p>

        <ul className="text-left list-disc space-y-1 mx-auto max-w-md pl-5 text-gray-700">
          <li>Your login link</li>
          <li>Two minute setup instructions</li>
          <li>Your first campaign template</li>
        </ul>

        <p className="text-gray-500">
          Questions? <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a>
        </p>

        <div className="flex justify-center gap-3">
          <Link href="/" className="rounded-md border px-5 py-3 font-medium">Back to home</Link>
          <Link href="/support" className="rounded-md bg-black text-white px-5 py-3 font-medium">
            Need help?
          </Link>
        </div>
      </section>
    </main>
  );
}
