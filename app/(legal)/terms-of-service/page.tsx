export const metadata = {
  title: "Terms of Service | Revupex",
  description: "The terms that govern your use of Revupex.",
};

export default function TermsOfService() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {today}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Service</h2>
      <p className="mb-4">
        By using Revupex you agree to follow these terms and applicable laws. If you do not agree, do not use the service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Payments and Refunds</h2>
      <p className="mb-4">
        Payments are handled by our payment provider. Refunds are at our discretion unless required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Revupex is provided as is without warranties. To the maximum extent permitted, we are not liable for indirect or
        consequential damages.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Email <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a>.
      </p>
    </main>
  );
}
