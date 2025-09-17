export default function ThankYou() {
  const support = "revupex@outlook.com";
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">You're in! 🎉</h1>
      <p className="mt-4">Thanks for choosing Revupex. We’ve received your payment.</p>
      <ol className="list-decimal ml-5 mt-4 space-y-2">
        <li>We’ll email you a secure link to upload your customer list.</li>
        <li>We’ll confirm your review template within 1 business day.</li>
        <li>Your first automated campaign goes live after approval.</li>
      </ol>
      <p className="mt-6">Need help? <a className="underline" href={`mailto:${support}`}>{support}</a></p>
    </main>
  );
}
