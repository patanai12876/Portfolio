// app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-[var(--font-manrope)] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}