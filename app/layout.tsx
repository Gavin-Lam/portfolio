import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Gavin Lam — Software Engineer",
  description:
    "Full-Stack, Backend & ML Engineer. CS Senior at Stevens Institute of Technology.",
  openGraph: {
    title: "Gavin Lam — Software Engineer",
    description:
      "Full-Stack, Backend & ML Engineer. CS Senior at Stevens Institute of Technology.",
    url: "https://gavinlam.dev",
    siteName: "Gavin Lam Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
