export default function TrustBar() {
  const items = [
    { src: "/icons/google.svg", alt: "Google" },
    { src: "/icons/gmail.svg",  alt: "Gmail"  },
    { src: "/icons/stripe.svg", alt: "Stripe" },
  ];
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center">
        <p className="text-gray-500 text-sm uppercase tracking-wide mb-6">
          Works with
        </p>
        <div className="flex justify-center items-center gap-12 opacity-70">
          {items.map((it) => (
            <img
              key={it.alt}
              src={it.src}
              alt={it.alt}
              className="h-7 w-auto grayscale"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
