"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tv, Zap, Monitor, ShieldCheck } from "lucide-react";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const plans = [
    { id: "3", label: "3 Months", price: "10€" },
    { id: "6", label: "6 Months", price: "15€" },
    { id: "12", label: "12 Months", price: "30€" },
  ];

  return (
    <main>

      {/* 🔒 SEO SECTION (Invisible for users, visible for Google) */}
      <section className="sr-only">
        <h1>Premium IPTV Streaming Service</h1>
        <p>
          Infinity TV is a premium IPTV streaming service offering live TV
          channels, movies, series and sports with high quality HD and 4K
          streaming.
        </p>
        <p>
          Watch live television on Smart TV, Android, iOS, PC and tablets with a
          fast, stable and secure IPTV service including a 24 hour free trial.
        </p>
      </section>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-24 px-6 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Premium IPTV Experience
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Ultra stable IPTV service. Compatible with all devices.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/33745416919?text=Bonjour%20je%20souhaite%20un%20test%2024h"
            className="px-6 py-3 bg-cyan-500 rounded-full font-semibold text-black hover:bg-cyan-400 transition"
          >
            Test 24h
          </a>

          <a
            href="https://wa.me/33745416919"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            Subscribe
          </a>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { icon: Tv, title: "15 000+ Channels", text: "HD & 4K available" },
          { icon: Zap, title: "Ultra Fast", text: "Anti-buffering servers" },
          { icon: Monitor, title: "Multi-Device", text: "TV, Mobile, PC" },
          { icon: ShieldCheck, title: "Secure", text: "24/7 Support" },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-[#0b1020] rounded-2xl p-6 text-center hover:border hover:border-cyan-500 transition"
          >
            <item.icon className="mx-auto mb-4 text-cyan-400" size={40} />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* PRICING */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-24"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Pricing
        </h2>

        <div className="bg-[#0b1020] rounded-2xl p-6 space-y-4">
          {plans.map((plan) => {
            const isActive = selectedPlan === plan.id;

            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`
                  w-full flex justify-between items-center px-6 py-4 rounded-xl
                  transition duration-300
                  ${
                    isActive
                      ? "bg-[#1F2937] border border-cyan-400 text-white"
                      : "bg-black/40 border border-white/10 text-gray-300 hover:border-cyan-500"
                  }
                `}
              >
                <span className="font-semibold">{plan.label}</span>
                <span className="font-bold">{plan.price}</span>
              </button>
            );
          })}

          <a
            href="https://wa.me/33745416919"
            className="block text-center mt-6 bg-white text-black py-3 rounded-xl font-semibold hover:bg-cyan-400 transition"
          >
            Subscribe Now
          </a>
        </div>
      </motion.section>

    </main>
  );
}
