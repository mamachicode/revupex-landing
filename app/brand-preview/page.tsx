'use client';
import Image from "next/image";
import { useState } from "react";

type AccentKey = "default" | "blue" | "green" | "orange";
const ACCENTS: Record<AccentKey, string> = {
  default: "",
  blue: "#2563EB",   // trust
  green: "#16A34A",  // growth
  orange: "#F97316", // energy
};

export default function BrandPreview() {
  const [accent, setAccent] = useState<AccentKey>("default");
  const [outline, setOutline] = useState(true);
  const [showHalo, setShowHalo] = useState(true);

  const halo = accent !== "default" && showHalo
    ? `radial-gradient(120px 80px at 50% 50%, ${ACCENTS[accent]}33 0%, transparent 70%)`
    : "none";

  const refineFilter = outline
    ? "drop-shadow(0 0 1px rgba(255,255,255,.85)) drop-shadow(0 0 1px rgba(0,0,0,.85))"
    : "none";

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold">Revupex Brand Preview</h1>
        <p className="mt-2 text-zinc-300">
          Compare current vs. refined, test colors, negative space, scalability, and dark/light contrast.
        </p>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <label className="text-sm text-zinc-300">Accent:</label>
          {(["default","blue","green","orange"] as AccentKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setAccent(k)}
              className={`rounded-lg px-3 py-1 text-sm border border-white/10 ${accent===k ? "bg-white text-black" : "bg-white/5"}`}
            >
              {k}
            </button>
          ))}
          <label className="ml-4 inline-flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" checked={showHalo} onChange={e=>setShowHalo(e.target.checked)} />
            Negative-space halo
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" checked={outline} onChange={e=>setOutline(e.target.checked)} />
            1px outline (legibility)
          </label>
        </div>

        {/* Current vs Refined */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-medium mb-4">Current (as-is)</h2>
            <div className="flex h-44 items-center justify-center rounded-xl bg-gradient-to-b from-zinc-900 to-black">
              <Image
                src="/revupexwhite.png"
                alt="Revupex"
                width={280}
                height={100}
                className="h-auto w-56 sm:w-64"
                priority
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-medium mb-4">Refined (outline + spacing + accent)</h2>
            <div
              className="flex h-44 items-center justify-center rounded-xl bg-gradient-to-b from-zinc-900 to-black"
              style={{ backgroundImage: halo }}
            >
              <Image
                src="/revupexwhite.png"
                alt="Revupex refined"
                width={280}
                height={100}
                className="h-auto w-56 sm:w-64"
                style={{ filter: refineFilter }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Scalability test */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-medium">Scalability</h2>
          <p className="mt-1 text-sm text-zinc-300">Check legibility at small sizes.</p>
          <div className="mt-4 grid grid-cols-5 gap-4">
            {[96,64,48,32,24].map((s)=>(
              <div key={s} className="rounded-xl border border-white/10 bg-zinc-900 p-3 text-center">
                <div className="text-xs text-zinc-400 mb-2">{s}px</div>
                <div className="mx-auto flex h-20 items-center justify-center">
                  <Image
                    src="/revupexwhite.png"
                    alt={`logo ${s}px`}
                    width={s*2}
                    height={s}
                    className="object-contain"
                    style={{ filter: refineFilter }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contrast test */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-black">
            <h2 className="text-lg font-medium">Light background</h2>
            <p className="mt-1 text-sm text-zinc-700">Auto-inverted to simulate a dark mark on white.</p>
            <div className="mt-4 flex h-40 items-center justify-center rounded-xl bg-white">
              <Image
                src="/revupexwhite.png"
                alt="on light"
                width={220}
                height={80}
                className="h-auto w-52"
                style={{ filter: `invert(1) ${outline ? "drop-shadow(0 0 0.5px rgba(0,0,0,.6))" : ""}` }}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6">
            <h2 className="text-lg font-medium">Dark background</h2>
            <p className="mt-1 text-sm text-zinc-300">White mark on black; outline aids thin areas.</p>
            <div className="mt-4 flex h-40 items-center justify-center rounded-xl bg-black">
              <Image
                src="/revupexwhite.png"
                alt="on dark"
                width={220}
                height={80}
                className="h-auto w-52"
                style={{ filter: refineFilter }}
              />
            </div>
          </div>
        </div>

        {/* Mark-only / favicon simulation */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-medium">Mark-only / Favicon mock</h2>
          <p className="mt-1 text-sm text-zinc-300">How it reads in tiny contexts (browser tab, app icon).</p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            {[32,24,16].map((s)=>(
              <div key={s} className="flex items-center gap-3">
                <div className="rounded-lg bg-black p-2" style={{ width: s+8, height: s+8 }}>
                  <Image
                    src="/revupexwhite.png"
                    alt="favicon"
                    width={s}
                    height={s}
                    className="object-contain"
                    style={{ filter: refineFilter }}
                  />
                </div>
                <div className="text-xs text-zinc-400 w-10">{s}px</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-zinc-400">
          Tip: Keep a detailed primary logo and a super-stripped mark for micro use.
        </div>
      </div>
    </main>
  );
}
