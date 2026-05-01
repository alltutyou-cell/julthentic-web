import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const schrifted = localFont({
  src: [
    { path: "./fonts/SFT Schrifted Serif TRIAL Display Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SFT Schrifted Serif TRIAL Display Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/SFT Schrifted Serif TRIAL Display Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/SFT Schrifted Serif TRIAL Display Medium Italic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/SFT Schrifted Serif TRIAL Display Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/SFT Schrifted Serif TRIAL Display Light Italic.ttf", weight: "300", style: "italic" },
  ],
  variable: "--font-schrifted",
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
  title: "Julthentic — Launch strategist & copywriter for personal brands",
  description:
    "Anti-AI, anti-template launches for personal brands. Strategy, copywriting, SMM, ad creative, and sales pages — built around your real voice, not a prompt.",
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
        className={`${schrifted.variable} ${machina.variable} ${craftwork.variable} ${fliege.variable} ${gagen.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
