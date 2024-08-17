"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { Inter, Livvic } from "next/font/google";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "./style.css";
import Bot from "@/components/icon/Bot";

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
  useEffect(() => {
    // here you can add your aos options
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className=" h-screen bg-primary   relative ">
        <Navbar />
        <div className={`${inter.variable} ${livvic.variable}   `}>
          <Bot classes="fixed bottom-7 right-9 z-20 " />

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
