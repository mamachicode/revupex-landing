import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Revupex",
  description:
    "How Revupex collects, uses, and protects your information. Contact support@revupex.com for any privacy questions.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Revupex, we value your privacy and are committed to protecting your personal information.
        This policy explains how we collect, use, and safeguard data when you use our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly (e.g., name, email, payment details) and technical
        data such as IP address, device info, and usage logs.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and improve the service</li>
        <li>Process payments securely via Stripe</li>
        <li>Send important updates and support communications</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Sharing</h2>
      <p className="mb-4">
        We do not sell your data. We share limited information with processors (e.g., Stripe, Twilio,
        hosting providers) only to operate the platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Questions? Email{" "}
        <a className="underline" href="mailto:support@revupex.com">support@revupex.com</a>.
      </p>
    </main>
  );
}
