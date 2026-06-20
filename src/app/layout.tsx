import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://whiz677.github.io/Onset-Initiative/"
      : "https://onsetinitiative.org"
  ),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "A youth-led public health education project on early-onset cancer awareness, warning signs, family history, prevention, and unresolved science.",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.subtitle,
    type: "website",
    images: ["/images/student-public-health-workshop.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
