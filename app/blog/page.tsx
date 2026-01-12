import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Blog – Guides, Tips & IPTV News",
  description:
    "Discover IPTV guides, tips, device compatibility, pricing advice and everything you need to know about premium IPTV services.",
};

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* SEO HIDDEN TEXT */}
      <section className="sr-only">
        <h1>IPTV Blog – Guides & IPTV Information</h1>
        <p>
          Learn everything about IPTV services, devices compatibility,
          subscriptions, streaming quality, and how to choose the best IPTV
          provider.
        </p>
      </section>

      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        IPTV Blog
      </h1>

      <p className="text-gray-400 text-lg mb-12">
        Guides, tips and explanations about IPTV, streaming devices,
        subscriptions and premium IPTV services.
      </p>

      {/* BLOG POSTS */}
      <div className="grid gap-8">
        {/* ARTICLE 1 */}
        <article className="bg-[#0b1020] rounded-2xl p-6 hover:border hover:border-cyan-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            What is IPTV? Complete Beginner Guide
          </h2>

          <p className="text-gray-400 mb-4">
            IPTV stands for Internet Protocol Television. It allows you to watch
            live TV channels, movies, series and sports through an internet
            connection instead of traditional satellite or cable TV.
          </p>

          <Link
            href="/trial"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Try IPTV Free for 24h →
          </Link>
        </article>

        {/* ARTICLE 2 */}
        <article className="bg-[#0b1020] rounded-2xl p-6 hover:border hover:border-cyan-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Best Devices for IPTV in 2024
          </h2>

          <p className="text-gray-400 mb-4">
            IPTV is compatible with Smart TVs, Android devices, iOS, Fire Stick,
            MAG boxes and computers. Discover which device offers the best
            streaming experience.
          </p>

          <Link
            href="/devices"
            className="text-cyan-400 font-semibold hover:underline"
          >
            See Compatible Devices →
          </Link>
        </article>

        {/* ARTICLE 3 */}
        <article className="bg-[#0b1020] rounded-2xl p-6 hover:border hover:border-cyan-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            IPTV Pricing – How Much Should You Pay?
          </h2>

          <p className="text-gray-400 mb-4">
            IPTV pricing depends on the subscription duration, streaming
            quality and server stability. Learn how to choose the best IPTV plan
            for your needs.
          </p>

          <Link
            href="/pricing"
            className="text-cyan-400 font-semibold hover:underline"
          >
            View IPTV Pricing →
          </Link>
        </article>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to Experience Premium IPTV?
        </h3>

        <a
          href="https://wa.me/33745416919?text=Hello%20I%20would%20like%20to%20try%20IPTV%20for%2024h"
          className="inline-block mt-4 px-8 py-4 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition"
        >
          Get Free IPTV Trial
        </a>
      </div>
    </main>
  );
}
