export default function TrustBar() {
  return (
    <section className="relative z-10 container mx-auto px-6 py-8">
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-6">WORKS WITH</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-2xl font-bold text-gray-400">Google</div>
          <div className="text-2xl font-bold text-gray-400">Stripe</div>
          <div className="text-2xl font-bold text-gray-400">Gmail</div>
          <div className="text-2xl font-bold text-gray-400">Sheets</div>
        </div>
      </div>
    </section>
  );
}
