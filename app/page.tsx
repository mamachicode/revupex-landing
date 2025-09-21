export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Revupex</h1>
        <p className="text-gray-500">Landing is live.</p>
        <a
          href="https://buy.stripe.com/REPLACE_ME"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-black text-white px-5 py-3 font-medium"
        >
          Buy now
        </a>
      </div>
    </main>
  );
}
