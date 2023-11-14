import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { cn } from "@/utils";

const SITE_META_DATA = {
  title: "Nathan Hui",
  description: "Nathan Hui's Portfolio",
  siteUrl: process.env.SITE_URL,
  socialBanner: "/banner.webp",
};

export const metadata: Metadata = {
  title: SITE_META_DATA.title,
  description: SITE_META_DATA.description,
  openGraph: {
    title: SITE_META_DATA.title,
    description: SITE_META_DATA.description,
    url: SITE_META_DATA.siteUrl,
    siteName: SITE_META_DATA.title,
    images: [SITE_META_DATA.socialBanner],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META_DATA.title,
    description: SITE_META_DATA.description,
    images: [SITE_META_DATA.socialBanner],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(GeistSans.className, "bg-black text-base text-gray-400")}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
