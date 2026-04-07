import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Doga — Juegos que no puedes soltar",
  description:
    "Doga es un estudio independiente de juegos móviles minimalistas y adictivos. Diseñados para tu pulgar, imposibles de soltar.",
  keywords: ["juegos móviles", "indie games", "Doga", "Shrink", "mobile games"],
  openGraph: {
    title: "Doga — Juegos que no puedes soltar",
    description:
      "Estudio independiente de juegos móviles minimalistas y adictivos.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doga — Juegos que no puedes soltar",
    description:
      "Estudio independiente de juegos móviles minimalistas y adictivos.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white antialiased" suppressHydrationWarning>
        <CustomCursor />
        <div aria-hidden className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
