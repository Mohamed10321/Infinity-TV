import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free IPTV Trial 24h | Infinity TV",
  description:
    "Get a free 24-hour IPTV trial with Infinity TV. Test live TV channels, movies and series in HD and 4K on all devices.",
};

export default function TrialPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* SEO CONTENT */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">
          Free IPTV Trial – 24 Hours Test
        </h1>

        <p className="text-gray-400">
          Infinity TV offers a free 24-hour IPTV trial allowing you to test our
          premium streaming service before subscribing. Access thousands of
          live TV channels, movies, series and sports in HD and 4K quality.
        </p>

        <p className="text-gray-400">
          Our IPTV service works on Smart TV, Android, iOS, PC, tablets and TV
          boxes. Enjoy fast activation, stable servers and no buffering.
        </p>

        <h2 className="text-2xl font-semibold pt-6">
          What is included in the IPTV trial?
        </h2>

        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>15,000+ live TV channels</li>
          <li>Movies and TV series library</li>
          <li>HD & 4K quality</li>
          <li>Compatible with all devices</li>
          <li>Instant activation</li>
        </ul>

        <div className="pt-10">
          <a
            href="https://wa.me/33745416919?text=Hello%20I%20would%20like%20a%2024h%20IPTV%20trial"
            className="inline-block bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
          >
            Request Free 24h Trial
          </a>
        </div>
      </section>

    </main>
  );
}
