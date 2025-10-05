import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Background from "@/components/background";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "François ZINSOU - Développeur Web SaaS | Portfolio",
  description:
    "Développeur web spécialisé dans la création de SaaS modernes et performants. Expertise en React, Next.js, TypeScript et architecture scalable.",
  keywords: [
    "François ZINSOU",
    "Développeur Web",
    "SaaS",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack",
  ],
  authors: [{ name: "François ZINSOU" }],
  creator: "François ZINSOU",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "François ZINSOU - Développeur Web SaaS",
    description:
      "Développeur web spécialisé dans la création de SaaS modernes et performants",
    siteName: "François ZINSOU Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f1f2e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} ${sora.variable} ${poppins.className} antialiased`}
        style={{
          fontFamily: "var(--font-poppins)",
        }}
      >
        <Background />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
