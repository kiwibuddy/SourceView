import type { Metadata } from "next";
import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SourceView — Experience the Drama of God's Story",
  description:
    "A revolutionary suite of Bible tools built on 40,000 hours of original research. Four-color dramatic text reveals who speaks in Scripture.",
  openGraph: {
    title: "SourceView — Experience the Drama of God's Story",
    description:
      "A revolutionary suite of Bible tools built on 40,000 hours of original research.",
    type: "website",
    locale: "en_US",
    siteName: "SourceView",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} ${jetbrains.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
