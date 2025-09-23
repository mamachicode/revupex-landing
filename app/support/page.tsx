export const metadata = { title: "Support | Revupex" };

export default function Support() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Support</h1>
      <p className="mb-2">
        Need help? Email{" "}
        <a className="underline" href="mailto:support@revupex.com">
          support@revupex.com
        </a>
        .
      </p>
      <p className="text-sm text-gray-500">
        We typically reply within one business day.
      </p>
    </main>
  );
}
