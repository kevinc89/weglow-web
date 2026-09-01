import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

export const nohemi = localFont({
  src: [
    { path: "./Nohemi-Regular.otf", weight: "400", style: "normal" },
    { path: "./Nohemi-ExtraBold.otf", weight: "700", style: "normal" },
    { path: "./Nohemi-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const creato = localFont({
  src: [
    { path: "./CreatoDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "./CreatoDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "./CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-creato",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
