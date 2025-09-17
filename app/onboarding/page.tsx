'use client';
import Link from "next/link";

const STRIPE_AUTOPILOT = process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT || "#";
const STRIPE_SETUP = process.env.NEXT_PUBLIC_STRIPE_LINK_SETUP_ONLY || "#";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const waLink = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Paid and ready—sending contacts now.")}` : "#";

export default function Onboarding() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold">Onboarding — No Calls Needed</h1>
        <p className="mt-2 text-zinc-300">Pay → send contacts → we switch on EN/FR review requests + reminders.</p>

        <ol className="mt-6 space-y-4 text-sm text-zinc-300">
          <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="font-medium text-white">1) Choose a plan</div>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href={STRIPE_AUTOPILOT} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white text-black px-3 py-2">Autopilot (CA$228 today → CA$79/mo)</Link>
              <Link href={STRIPE_SETUP} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15">Setup Only (CA$149)</Link>
            </div>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="font-medium text-white">2) Send your contacts</div>
            <p className="mt-2">Email your CSV (columns below) to <a className="underline" href="mailto:revupex@outlook.com?subject=Revupex%20Contacts%20CSV">revupex@outlook.com</a> or drop them via WhatsApp.</p>
            <div className="mt-3">
              <Link href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm hover:bg-emerald-500/20">
                Send via WhatsApp
              </Link>
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-black p-3 text-xs text-zinc-300">
{`Required CSV columns:
Name, Email, Language(EN/FR), Restaurant, GoogleReviewLink, PrivateFeedbackLink, AddedAt(YYYY-MM-DD)
Optional: Notes`}
            </div>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="font-medium text-white">3) We activate reminders</div>
            <p className="mt-2">We clean the list (EN/FR tagging), import, and turn on Day-0/3/7 requests. Most businesses see new reviews in 1–2 weeks.</p>
          </li>
        </ol>

        <div className="mt-8 text-xs text-zinc-400">
          We invite reviews from all customers and never offer incentives. You can cancel anytime via Stripe.
        </div>
      </div>
    </main>
  );
}
