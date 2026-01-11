"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          IPTV<span className="text-cyan-400">PRO</span>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/33745416919?text=Bonjour%20je%20souhaite%20un%20test%2024h"
          className="px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-cyan-400 transition"
        >
          ⚡ ACHÈTE TON IPTV
        </a>
      </div>
    </header>
  );
}
