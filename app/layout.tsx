import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { THEME_INIT_SCRIPT } from "@/lib/theme";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DemoWeb",
    template: "%s · DemoWeb",
  },
  description:
    "Site vitrine de démonstration et backoffice d'administration — projet de démonstration technique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
