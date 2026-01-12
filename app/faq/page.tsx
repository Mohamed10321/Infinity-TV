import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV FAQ | Infinity TV",
  description:
    "Frequently asked questions about IPTV. Learn how IPTV works, supported devices, quality, and subscriptions with Infinity TV.",
};

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-10">
      <h1 className="text-4xl font-bold">IPTV FAQ – Frequently Asked Questions</h1>

      <div className="space-y-6 text-gray-400">
        <div>
          <h2 className="text-xl font-semibold text-white">What is IPTV?</h2>
          <p>
            IPTV stands for Internet Protocol Television. It allows you to watch
            live TV channels, movies and series through an internet connection
            instead of traditional cable or satellite.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            What devices are supported?
          </h2>
          <p>
            Infinity TV works on Smart TVs, Android devices, iOS, PC, tablets,
            TV boxes and IPTV applications.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Do you offer a free trial?
          </h2>
          <p>
            Yes, we provide a 24-hour free IPTV trial so you can test the service
            before subscribing.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            What internet speed is required?
          </h2>
          <p>
            A minimum of 10 Mbps is recommended for HD streaming and 25 Mbps for
            4K quality.
          </p>
        </div>
      </div>
    </main>
  );
}
