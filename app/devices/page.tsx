import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Compatible Devices | Infinity TV",
  description:
    "Discover all devices compatible with Infinity TV IPTV service including Smart TV, Android, iOS, PC and tablets.",
};

export default function DevicesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-8">
      <h1 className="text-4xl font-bold">Compatible IPTV Devices</h1>

      <p className="text-gray-400">
        Infinity TV IPTV service is compatible with a wide range of devices,
        allowing you to watch live TV and VOD anywhere.
      </p>

      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Smart TVs (Samsung, LG, Android TV)</li>
        <li>Android smartphones and tablets</li>
        <li>iPhone & iPad (iOS)</li>
        <li>Windows & Mac computers</li>
        <li>TV Boxes and IPTV applications</li>
      </ul>
    </main>
  );
}
