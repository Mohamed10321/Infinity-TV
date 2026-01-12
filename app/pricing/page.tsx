import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Pricing | Infinity TV",
  description:
    "Affordable IPTV pricing plans with Infinity TV. Choose from flexible subscriptions with premium quality streaming.",
};

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-10">
      <h1 className="text-4xl font-bold">IPTV Pricing Plans</h1>

      <p className="text-gray-400">
        Choose a flexible IPTV subscription plan that fits your needs. All
        plans include access to live TV channels, movies and series.
      </p>

      <ul className="text-gray-400 space-y-3">
        <li>✔ 3 Months – 10€</li>
        <li>✔ 6 Months – 15€</li>
        <li>✔ 12 Months – 30€</li>
      </ul>

      <a
        href="https://wa.me/33745416919"
        className="inline-block bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
      >
        Subscribe Now
      </a>
    </main>
  );
}
