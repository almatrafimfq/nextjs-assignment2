import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipes Website",
  description: "Search all the recipes that you like.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <nav className="flex justify-between py-5 px-7 bg-zinc-300">
          <h1 className="text-xl font-bold">Recipes Website</h1>
          <div className="flex gap-3 underline">
            <Link href="/">Home</Link>
            <Link href="/recipes">Recipes</Link>
          </div>
        </nav>
        <main className="flex flex-col flex-1">{children}</main>

        <footer className="flex justify-center bg-zinc-200">
          <p className="text-zinc-400">All rights reserved 2026</p>
        </footer>
      </body>
    </html>
  );
}
