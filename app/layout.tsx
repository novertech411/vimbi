"use client";
import type { Metadata } from "next";

import { Inter, Livvic } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "./style.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const livvic = Livvic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-livvic",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

// const century = localFont({
//   src: [
//     {
//       path: "../assets/fonts/CenturyGothicPaneuropeanRegular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/CenturyGothicPaneuropeanBold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],

//   variable: "--font-century-Gothic",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" h-screen bg-primary   ">
        <Navbar />
        <div className={`${inter.variable} ${livvic.variable}   `}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
