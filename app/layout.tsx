import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Master’s Degree Completed · A Journey to Graduation",
  description: "A Master’s graduation announcement: the journey, the milestones and the thanks.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable}`}>
      {/* "locked" stops scrolling until the envelope is opened; Envelope removes it. */}
      <body className="locked">{children}</body>
    </html>
  );
}
