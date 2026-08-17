import localFont from "next/font/local";

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
