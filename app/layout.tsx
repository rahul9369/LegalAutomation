import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CLAW - Legal Automation App",
  description:
    "Your All-In-One Legal Automation App. Streamline your legal processes with our innovative platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}
