import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { cn } from "@/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, "bg-black text-gray-400")}>
        {children}
      </body>
    </html>
  );
}