import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { cn } from "@/utils";

const SITE_META_DATA = {
  me: "Nathan Hui",
  title: "Nathan Hui",
  description: "Nathan Hui's Portfolio",
  siteUrl: process.env.SITE_URL,
  socialBanner: "/banner.webp",
  bannerWidth: 1920,
  bannerHeight: 1080,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META_DATA.siteUrl),
  title: SITE_META_DATA.title,
  description: SITE_META_DATA.description,
  applicationName: SITE_META_DATA.title,
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Typescript",
    "Tailwind CSS",
    "Vercel",
    "Nathan Hui",
    "Portfolio",
  ],
  authors: [{ name: SITE_META_DATA.me }],
  creator: SITE_META_DATA.me,
  publisher: SITE_META_DATA.me,
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_META_DATA.title,
    description: SITE_META_DATA.description,
    url: SITE_META_DATA.siteUrl,
    siteName: SITE_META_DATA.title,
    images: [
      {
        url: SITE_META_DATA.socialBanner,
        alt: SITE_META_DATA.description,
        width: SITE_META_DATA.bannerWidth,
        height: SITE_META_DATA.bannerHeight,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META_DATA.title,
    description: SITE_META_DATA.description,
    images: [
      {
        url: SITE_META_DATA.socialBanner,
        alt: SITE_META_DATA.description,
        width: SITE_META_DATA.bannerWidth,
        height: SITE_META_DATA.bannerHeight,
      },
    ],
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
        className={cn(GeistSans.className, "bg-black leading-7 text-gray-400")}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
