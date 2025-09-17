'use client';
const RAW = process.env.NEXT_PUBLIC_LOOM_URL || "";
function getEmbed(url: string) {
  if (!url) return "";
  try {
    const u = new URL(url, "https://dummy.base");
    const s = u.href;
    return s.includes("/share/") ? s.replace("/share/", "/embed/") : s;
  } catch { return url; }
}
export default function Demo() {
  const embed = getEmbed(RAW);
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold">How It Works (60-sec)</h1>
        <p className="mt-2 text-zinc-300">Quick walkthrough: contacts → automated EN/FR reminders → steady reviews.</p>
        {embed ? (
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            <iframe src={embed} allow="autoplay; encrypted-media" allowFullScreen className="h-full w-full" title="Revupex Demo" />
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">
            Set <code className="text-white">NEXT_PUBLIC_LOOM_URL</code> in <code className="text-white">.env.local</code> to show your demo video.
          </div>
        )}
        <div className="mt-6">
          <a href={process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOPILOT || "#"} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90">
            Start Now — Autopilot
          </a>
        </div>
      </div>
    </main>
  );
}
