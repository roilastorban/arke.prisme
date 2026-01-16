import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { MagneticCursor } from "@/components/shared/MagneticCursor";
import { Toaster } from "@/components/ui/sonner";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "ARKÉ | L'Artisan de l'Ombre",
  description: "Démocratiser l'excellence marketing pour que le talent africain ne soit plus trahi par son image.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased`}
      >
        <MagneticCursor />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
