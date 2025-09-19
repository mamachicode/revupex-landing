export const metadata = {
  title: "Privacy Policy | Revupex",
  description: "How Revupex collects, uses, and protects your data."
};

export default function PrivacyPolicy() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {today}</p>
      <p className="mb-4">
        Revupex ("we", "our", "us") respects your privacy. This placeholder will be replaced with a full policy.
      </p>
      <p>Contact: <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a></p>
    </main>
  );
}
