import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (app/fonts) so builds never depend on reaching
// Google Fonts. Both are variable fonts under the SIL Open Font License.
const display = localFont({
  src: "./fonts/big-shoulders-display.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

const body = localFont({
  src: "./fonts/hanken-grotesk.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

const description =
  "Gavin Lam builds backends, full-stack apps and ML pipelines. B.S. Computer Science, Stevens Institute of Technology. Based in Jersey City, NJ.";

export const metadata: Metadata = {
  title: "Gavin Lam — Software Engineer",
  description,
  openGraph: {
    title: "Gavin Lam — Software Engineer",
    description,
    url: "https://gavinlam.dev",
    siteName: "Gavin Lam Portfolio",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEF1F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1320" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
