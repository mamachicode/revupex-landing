export const metadata = {
  title: "Terms of Service | Revupex",
  description: "The terms that govern your use of Revupex."
};

export default function TermsOfService() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {today}</p>
      <p className="mb-4">
        By using Revupex, you agree to these Terms. Replace this placeholder with your final legal terms.
      </p>
      <p>Contact: <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a></p>
    </main>
  );
}
