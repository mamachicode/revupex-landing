import {
  CheckCircle, Zap, Users, ArrowRight, Play, ShieldCheck, Clock, Star,
} from "lucide-react";
import TrustBar from "./components/TrustBar";

export default function RevupexLanding() {
  const STRIPE = process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT || "https://buy.stripe.com/dRm9ASfYrcIDeLp96q0VO00";

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* soft background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* header */}
      <header className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 shadow-lg">
            <span className="text-2xl font-bold">REVUPEX</span>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative z-10 container mx-auto px-6 pt-4 pb-10 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Stop chasing{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                reviews
              </span>.
            </h1>
            <p className="mt-5 text-xl text-gray-700 leading-relaxed">
              Turn happy customers into <span className="font-semibold">consistent 5-star Google reviews</span> with polite, automated follow-ups—no staff chasing required.
            </p>

            <div className="mt-6 flex flex-wrap lg:justify-start justify-center gap-3 text-sm font-medium">
              <Pill icon={<CheckCircle className="w-4 h-4 text-green-600" />} color="green">Boost rankings</Pill>
              <Pill icon={<Zap className="w-4 h-4 text-blue-600" />} color="blue">Automated follow-ups</Pill>
              <Pill icon={<Users className="w-4 h-4 text-purple-600" />} color="purple">More repeat customers</Pill>
              <Pill icon={<Star className="w-4 h-4 text-amber-600" />} color="amber">127 new Google reviews (last 30 days)</Pill>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <a
                href={STRIPE} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Now — CA$75/mo <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center text-gray-700 hover:text-gray-900 font-medium bg-white/70 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-200/50 hover:bg-white/90 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" /> See 60-sec demo
              </a>
            </div>

            <div className="mt-3 flex flex-col sm:flex-row gap-2 lg:justify-start justify-center text-sm text-gray-600">
              <span className="inline-flex items-center bg-white/60 px-3 py-1 rounded-full border border-gray-200/30">
                <Clock className="w-4 h-4 text-green-600 mr-2" /> Onboarding starts in 24–48h
              </span>
              <span className="inline-flex items-center bg-white/60 px-3 py-1 rounded-full border border-gray-200/30">
                <ShieldCheck className="w-4 h-4 text-green-600 mr-2" /> 7-day money-back guarantee
              </span>
            </div>
          </div>

          {/* stats card */}
          <div className="order-first lg:order-none">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100/50 p-8 relative">
              <h3 className="text-center text-xl font-bold mb-6">Reviews Generated — last 30 days</h3>
              <div className="grid grid-cols-3 gap-6">
                <Stat number="127" label="New Reviews" accent="text-green-600" />
                <Stat number="18" label="Pending Reminders" accent="text-blue-600" />
                <Stat number="92%" label="Positive Rating" accent="text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* pricing */}
      <section className="relative z-10 container mx-auto px-6 pt-2 pb-16">
        <div className="max-w-lg mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-green-200/50 p-8 relative overflow-hidden">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Autopilot</h2>
              <p className="text-gray-600 mb-6">Done-for-you review generation. Set it & forget it.</p>

              <div className="mb-2">
                <span className="text-5xl font-extrabold">CA$75</span>
                <span className="text-gray-600">/mo</span>
              </div>
              <p className="text-gray-600 mb-6">+ CA$228 one-time setup</p>

              <ul className="text-left space-y-3 mb-7">
                <Feature text="Unlimited review requests" />
                <Feature text="Automated follow-up reminders" />
                <Feature text="Stripe integration" />
                <Feature text="EN/FR bilingual support" />
                <Feature text="Policy-compliant: no incentives, no gating" />
              </ul>

              <a
                href={STRIPE} target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-3"
              >
                Start Now — Autopilot <ArrowRight className="w-5 h-5 ml-2" />
              </a>

              <p className="text-sm text-gray-600">
                <ShieldCheck className="inline-block w-4 h-4 text-green-600 mr-1 align-[-2px]" />
                7-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section id="how-it-works" className="relative z-10 bg-white/50 backdrop-blur-sm border-y border-gray-100/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Done-for-you review generation</h3>
            <p className="text-lg text-gray-600">Set it and forget it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Step n="1" title="Start Autopilot" desc="Pay securely via Stripe (2–3 minutes)." />
            <Step n="2" title="Send your contacts" desc="Upload CSV or share a Google Sheet." />
            <Step n="3" title="We run follow-ups" desc="No gating; all customers politely invited." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <FAQ q="Is this compliant with Google's review policies?">
            Yes. We invite reviews from all customers and never offer incentives. No gating, no filtering.
          </FAQ>
          <FAQ q="How quickly will I see results?">
            Most restaurants see new reviews within 1–2 weeks after import + first reminders.
          </FAQ>
          <FAQ q="Do I need technical skills?">
            No. We handle setup for you during onboarding.
          </FAQ>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 bg-gray-900/95 backdrop-blur-sm text-white py-12 border-t border-gray-700/30">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">REVUPEX</h3>
          <p className="text-gray-400">
            We invite reviews from all customers and never offer incentives. No gating, no filtering.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Pill({ children, icon, color }) {
  const colors = {
    green: "bg-green-50/90 border-green-200/60 text-green-800",
    blue: "bg-blue-50/90 border-blue-200/60 text-blue-800",
    purple: "bg-purple-50/90 border-purple-200/60 text-purple-800",
    amber: "bg-amber-50/90 border-amber-200/60 text-amber-900",
  }[color];
  return (
    <div className={`flex items-center rounded-full px-4 py-2 border ${colors} backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200`}>
      <span className="mr-2">{icon}</span>
      {children}
    </div>
  );
}

function Stat({ number, label, accent }) {
  return (
    <div className="text-center">
      <div className={`text-3xl font-bold mb-1 ${accent}`}>{number}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}

function Step({ n, title, desc }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/30 hover:scale-105 transition-transform duration-300">
        <span className="text-2xl font-bold text-gray-800">{n}</span>
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Feature({ text }) {
  return (
    <li className="flex items-center">
      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function FAQ({ q, children }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/30 hover:bg-white/95 transition-all duration-300">
      <h5 className="text-lg font-semibold mb-2">{q}</h5>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
