import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    default: "Infinity TV – Premium Streaming Service",
    template: "%s | Infinity TV",
  },
  description:
    "Infinity TV offers a premium streaming experience with live channels, movies and series. Fast activation and 24h trial available.",
  keywords: [
    "premium streaming",
    "live tv streaming",
    "online tv service",
    "movies and series streaming",
    "best streaming platform",
  ],
  metadataBase: new URL("https://infinity-tv-murex.vercel.app"),
  openGraph: {
    title: "Infinity TV – Premium Streaming",
    description:
      "Access live channels, movies and series with Infinity TV. Premium quality streaming.",
    url: "https://infinity-tv-murex.vercel.app",
    siteName: "Infinity TV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity TV Streaming Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <Header />
        {/* offset for sticky header */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
