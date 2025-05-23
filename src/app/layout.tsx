import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Bodoni_Moda, Bodoni_Moda_SC } from "next/font/google";

import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

const bodoniModaSC = Bodoni_Moda_SC({
  variable: "--font-bodoni-moda-sc",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Brigitte Lee",
  description: "Brigitte Lee's Creative Portfolio 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        ${bodoniModa.variable} ${bodoniModaSC.variable} ${arimo.variable}
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
