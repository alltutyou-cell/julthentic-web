import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const arsenica = localFont({
  src: [
    { path: "./fonts/Arsenica-Antiqua-Regular-trial.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Arsenica-Antiqua-Italic-trial.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Arsenica-Antiqua-Medium-trial.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-arsenica",
  display: "swap",
});

const arsenicaBold = localFont({
  src: [
    { path: "./fonts/Arsenica-Antiqua-Demi-Bold-trial.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-arsenica-bold",
  display: "swap",
});

const machina = localFont({
  src: [
    { path: "./fonts/NeueMachina-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/NeueMachina-Ultrabold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-machina",
  display: "swap",
});

const craftwork = localFont({
  src: [
    { path: "./fonts/CraftworkGrotesk-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/CraftworkGrotesk-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-craftwork",
  display: "swap",
});

const fliege = localFont({
  src: [
    { path: "./fonts/FliegeMono-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/FliegeMono-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-fliege",
  display: "swap",
});

const gagen = localFont({
  src: [
    { path: "./fonts/GagenDemo-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/GagenDemo-Light.otf", weight: "300", style: "normal" },
  ],
  variable: "--font-gagen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julthentic — Launch copy + SMM for personal brands",
  description:
    "Anti-AI, anti-template copy for English-market personal brands. Launch copywriting, SMM management, ad creative, and sales pages — written by a human, not a prompt.",
  keywords: [
    "launch copywriter",
    "SMM management",
    "personal brand copy",
    "anti-AI copywriting",
    "ad creative",
    "sales page copywriter",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arsenica.variable} ${arsenicaBold.variable} ${machina.variable} ${craftwork.variable} ${fliege.variable} ${gagen.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
