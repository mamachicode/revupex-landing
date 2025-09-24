import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks | Revupex",
  robots: { index: false, follow: false },
};

type Query = { paid?: string | string[] };

export default async function ThankYou({
  searchParams,
}: {
  searchParams?: Promise<Query>;
}) {
  const sp = (await searchParams) ?? {};
  const paidVal = Array.isArray(sp.paid) ? sp.paid[0] : sp.paid;
  const paid = paidVal === "1";

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-xl text-center space-y-5">
        <h1 className="text-3xl font-bold">
          {paid ? "Payment received — you’re in! 🎉" : "Thanks for your interest!"}
        </h1>
        <p className="text-gray-600">
          {paid
            ? "We’re setting up your account now. You’ll get an email update within 24 hours."
            : "We’ll be in touch shortly."}
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="mailto:support@revupex.com"
            className="rounded-md border px-5 py-3 font-medium"
          >
            Email support
          </a>
          <Link
            href="/support"
            className="rounded-md bg-black text-white px-5 py-3 font-medium"
          >
            Help & next steps
          </Link>
          <Link
            href="/"
            className="rounded-md border px-5 py-3 font-medium"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
