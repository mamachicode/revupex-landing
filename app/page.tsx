export const metadata = {
  title: "Revupex — AI Reviews Booster",
  description: "Turn happy customers into 5-star reviews in seconds.",
};

export default function Home() {
  const trialLink = "https://buy.stripe.com/7sY5kC9A3cIDcDhgyS0V005"; // 7-day free trial
  const setupLink = "https://buy.stripe.com/9B67sKeUn8sncDh2I20VO07"; // One-time CA$199 setup
  
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Revupex</h1>
        <p className="text-gray-600">
          Turn happy customers into 5-star reviews — fast. Simple workflow, no setup headaches.
        </p>
        <div className="flex items-center justify-center gap-3">
          
            href={trialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black text-white px-5 py-3 font-medium"
          >
            Start 7-day free trial
          </a>
          
            href={setupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-5 py-3 font-medium"
          >
            One-time setup — CA$199
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          We'll email next steps and set you up within 24 hours.
        </p>
        <p className="text-xs text-gray-400">
          By purchasing you agree to our{" "}
          <a className="underline" href="/terms-of-service">Terms</a> and{" "}
          <a className="underline" href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>
    </main>
  );
}
