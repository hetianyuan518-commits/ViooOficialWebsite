import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vioo — Start Your Mobile Video Business",
  description:
    "Turn video into a bridge linking business and consumers. Increase conversion rates with QR code scanning and smart video commerce.",
  keywords: "video commerce, QR code, mobile business, Clover plugin, printing",
  openGraph: {
    title: "Vioo — Start Your Mobile Video Business",
    description: "Turn video into a bridge linking business and consumers.",
    url: "https://vioo.vip",
    siteName: "Vioo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
