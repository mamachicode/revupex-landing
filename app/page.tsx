export const metadata = {
  title: "Revupex — AI Reviews Booster",
  description: "Turn happy customers into 5-star reviews in seconds.",
};

export default function Home() {
  const pay = "https://buy.stripe.com/REPLACE_ME"; // <-- put your Payment Link here
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Revupex</h1>
        <p className="text-gray-600">
          Turn happy customers into 5-star reviews — fast. Simple workflow, no setup headaches.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href={pay}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black text-white px-5 py-3 font-medium"
          >
            Buy now
          </a>
          <a
            href="/thank-you"
            className="rounded-md border px-5 py-3 font-medium"
          >
            See success page
          </a>
        </div>
        <p className="text-xs text-gray-400">
          By purchasing you agree to our{" "}
          <a className="underline" href="/terms-of-service">Terms</a> and{" "}
          <a className="underline" href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>
    </main>
  );
}
