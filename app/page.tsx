export const metadata = {
  title: "Revupex — get more 5-star reviews",
  description: "Turn happy customers into 5-star Google reviews automatically.",
};

export default function Home() {
  const trialLink = "https://buy.stripe.com/7sY5kC9A3cIDcDhgyS0V005"; // 7-day trial (subscription)
  const setupLink = "https://buy.stripe.com/9B67sKeUn8sncDh2I20VO07";  // One-time setup CA$199

  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Get more 5-star Google reviews — on autopilot
        </h1>

        <p className="text-gray-600">
          Revupex sends review requests after each appointment and guides only satisfied customers to Google.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href={trialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black text-white px-5 py-3 font-medium"
          >
            Start 7-day free trial
          </a>

          <a
            href={setupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-5 py-3 font-medium"
          >
            Done-for-you setup — CA$199
          </a>
        </div>

        <p className="text-sm text-gray-500">
          We’ll email next steps and set you up within 24 hours.
        </p>

        {/* How it works */}
        <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium">How it works</p>
          <ol className="mt-2 space-y-1 text-gray-500">
            <li>① Connect your Google Business (30 seconds)</li>
            <li>② We create your custom review link</li>
            <li>③ Send automatically after appointments — or copy/paste manually</li>
          </ol>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-sm text-gray-500">
          Trusted by salons, med spas, and home-service businesses in Canada.
        </p>

        {/* Testimonial placeholder (replace with real ASAP) */}
        <figure className="mt-4 border rounded-lg p-4 text-left bg-gray-50">
          <blockquote className="text-gray-700">
            “We went from 12 reviews to 54 in 6 weeks.”
          </blockquote>
          <figcaption className="mt-2 text-xs text-gray-500">— Bliss Spa</figcaption>
        </figure>

        <p className="text-xs text-gray-400">
          By purchasing you agree to our{" "}
          <a className="underline" href="/terms-of-service">Terms</a> and{" "}
          <a className="underline" href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>
    </main>
  );
}
