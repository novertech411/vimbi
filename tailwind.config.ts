import { Inter } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-section": "url('/images/hero.png')",
        "hero-section1": "url('/images/bggreen.png')",
        "hero-section2": "url('/images/product.png')",
        "hero-section3": "url('/images/work.png')",
        footerbg: "url('/images/footerbg.png')",
        blogwave: "url('/images/wave.png')",
        aboutbg: "url('/images/aboutbg.png')",
        productbg: "url('/images/productbg.png')",
        blogbg: "url('/images/blogbg.png')",
        gallarybg: "url('/images/gallarybg.png')",
        contactbg: "url('/images/contactbg.png')",
        mobilebg: "url('/images/mobile.png')",
      },

      fontFamily: {
        inter: ["var-(--font-inter)"],
        lavvic: ["var-(--font-lavvic)"],
        century: ["var-(--font-century-Gothic)"],
        still: ["var-(--font-johns)"],
        johnstown: ["Johnstown", "sans-serif"],
      },

      colors: {
        primary: "#334B35",
        secondary: "#F7C35F",
      },
    },
  },
  plugins: [],
};
export default config;
