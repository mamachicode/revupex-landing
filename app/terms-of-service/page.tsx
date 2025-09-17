import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Revupex",
  description:
    "The terms and conditions for using Revupex. Billing via Stripe, cancellation policy, and limitations.",
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By using Revupex, you agree to these terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Service</h2>
      <p className="mb-4">
        Use the platform lawfully; do not disrupt, abuse, or attempt to circumvent security or limits.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Subscriptions & Billing</h2>
      <p className="mb-4">
        Payments are processed by Stripe. Plans renew automatically unless cancelled prior to renewal.
        Taxes may apply once registration is active.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cancellations & Refunds</h2>
      <p className="mb-4">
        You may cancel anytime from your account portal. Refunds follow the plan’s refund policy or any
        written guarantee on your plan page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        The service is provided “as is”. To the maximum extent permitted by law, Revupex is not liable for
        indirect, incidental, or consequential damages, or loss of profits or data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Questions? Email{" "}
        <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a>.
      </p>
    </main>
  );
}
