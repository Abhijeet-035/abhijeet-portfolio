import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhijeet Kumar | DevOps Engineer & Analyst",
  description: "Portfolio of Abhijeet Kumar — Analyst at BNP Paribas and aspiring DevOps Engineer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}