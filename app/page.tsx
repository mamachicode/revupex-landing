export const metadata = {
  title: "Revupex — more 5-star Google reviews",
  description: "Send review requests automatically and grow your Google reviews.",
};

export default function Home() {
  // Update these anytime without touching markup
  const trialLink = "https://buy.stripe.com/7sY5kC9A3cIDcDhgyS0V005";   // 7-day free trial
  const setupLink = "https://buy.stripe.com/9B67sKeUn8sncDh2I20VO07";   // Done-for-you setup (CA$199)

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Get more 5-star Google reviews on autopilot
        </h1>

        <p className="text-gray-600">
          Revupex sends review requests after each appointment and makes it easy for happy customers to leave a review.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={trialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Start 7-day free trial
          </a>

          <a
            href={setupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50"
          >
            Done-for-you setup — CA$199
          </a>
        </div>

        <p className="text-xs text-gray-500">
          We’ll email next steps and set you up within 24 hours. Questions? support@revupex.com
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
