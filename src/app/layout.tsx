import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Difsy.com - Easy Lead Generation Forms | Qualify & Convert Leads Fast",
  description: "Create beautiful, high-converting lead generation forms in minutes. Difsy makes it easy to capture, qualify, and convert leads with smart forms designed for results.",
  keywords: ["lead generation", "lead forms", "lead capture", "form builder", "qualified leads", "conversion optimization", "marketing forms", "lead qualification", "form tool"],
  authors: [{ name: "Difsy.com" }],
  creator: "Difsy.com",
  publisher: "Difsy.com",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cdn.difsy.com",
    siteName: "Difsy API",
    title: "Difsy.com - Easy Lead Generation Forms",
    description: "Create beautiful, high-converting lead generation forms in minutes. Capture, qualify, and convert leads with smart forms designed for results.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Difsy.com - Lead Generation Forms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Difsy.com - Easy Lead Generation Forms",
    description: "Create beautiful, high-converting lead generation forms in minutes. Capture, qualify, and convert leads with smart forms.",
    images: ["/og-image.jpg"],
    creator: "@difsy",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
