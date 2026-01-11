import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Premium IPTV",
  description: "Ultra fast & stable IPTV service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Spacer for sticky header */}
        <div className="h-16"></div>
        {children}
      </body>
    </html>
  );
}
