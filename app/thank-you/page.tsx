import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks | Revupex",
  robots: { index: false, follow: false },
};

type Query = {
  paid?: string | string[];
  trial?: string | string[];
};

const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function ThankYou({
  searchParams,
}: {
  searchParams?: Promise<Query>;
}) {
  const sp = (await searchParams) ?? {};
  const isPaid = first(sp.paid) === "1";
  const isTrial = first(sp.trial) === "1";

  let title = "Thanks for your interest! 🎉";
  let blurb =
    "Check your email — we're setting up your account and will send next steps shortly.";

  if (isPaid) {
    title = "Payment received! 🎉";
    blurb =
      "Awesome — check your email. We’ll send your login link and setup steps within 2 minutes.";
  } else if (isTrial) {
    title = "Trial started! 🎉";
    blurb =
      "Great — check your email. Your login link and quick setup guide are on the way.";
  }

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-xl text-center space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-700">{blurb}</p>

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
