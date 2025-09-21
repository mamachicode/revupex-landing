export const metadata = {
  title: "Privacy Policy | Revupex",
  description: "How Revupex collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {today}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Overview</h2>
      <p className="mb-4">
        Revupex (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This page explains the kinds of
        information we may collect and how we use it. Replace this placeholder with your full policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data We May Collect</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Account details (name, email) you provide to sign up.</li>
        <li>Usage data to improve reliability and performance.</li>
        <li>Payment information processed by our payment provider.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Data</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>To provide and maintain the service.</li>
        <li>To communicate updates and support.</li>
        <li>To detect, prevent, and address issues.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Questions? Email <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a>.
      </p>
    </main>
  );
}
