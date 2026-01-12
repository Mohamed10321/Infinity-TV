import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Infinity TV | IPTV Support",
  description:
    "Contact Infinity TV for IPTV support, subscription inquiries or free trial requests.",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-4xl font-bold">Contact Infinity TV</h1>

      <p className="text-gray-400">
        Need help or want to start your IPTV subscription? Contact us directly
        via WhatsApp for fast support and instant activation.
      </p>

      <a
        href="https://wa.me/33745416919"
        className="inline-block bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
      >
        Contact via WhatsApp
      </a>
    </main>
  );
}
