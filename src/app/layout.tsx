import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pop-eggs | Snack de huevo liofilizado",
  description:
    "Pop-eggs es un snack de huevo liofilizado crocante, natural y alto en proteina. Innovacion alimenticia argentina.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
  },
  keywords: [
    "snack saludable",
    "huevo liofilizado",
    "alto en proteina",
    "snack keto",
    "hecho en argentina",
  ],
  openGraph: {
    title: "Pop-eggs",
    description: "Snack de huevo liofilizado crocante, natural y alto en proteina.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 144,
        height: 42,
        alt: "Pop-eggs Logo",
      },
      {
        url: "/images/packaging-unified.png",
        width: 1800,
        height: 1200,
        alt: "Pop-eggs Packaging",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
