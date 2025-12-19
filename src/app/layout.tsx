// app/layout.tsx
import type { Metadata, Viewport } from "next"; // Import Viewport here
import React from "react";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// --- 1. Metadata Configuration (Includes metadataBase) ---
export const metadata: Metadata = {
  // FIX: Added metadataBase to resolve relative image URLs
  metadataBase: new URL('https://www.battleknightindia.com'),
  title: {
    template: "%s | Battle Knight India",
    default: "Battle Knight India - Competitive Gaming & Esports Community",
  },
  description: "Battle Knight India is a premier gaming community that focuses on competitive gaming and esports. Join us for tournaments, news, and more.",
  keywords: ["Esports", "Gaming Community", "Competitive Gaming", "India", "Tournaments"],
  openGraph: {
    title: "Battle Knight India",
    description: "A premier platform for competitive Indian gaming and esports.",
    url: "https://www.battleknightindia.com",
    siteName: "Battle Knight India",
    images: [
      {
        // This URL is now resolved correctly relative to metadataBase
        url: "/social-share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Battle Knight India Logo and Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/logo/logo.webp',
    apple: '/apple-touch-icon.png',
  },
};

// --- 2. Separate Viewport Export (FIX: Moved viewport here) ---
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};


interface RootLayoutProps {
  children: React.ReactNode;
}

const htmlClasses = "h-screen w-full no-scrollbar overflow-y-auto";
const bodyClasses = `bg-[#0F0F0F] text-white`;


import { createClient } from "@/lib/supabase/server";

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en" className={htmlClasses} suppressHydrationWarning>
      <body className={bodyClasses}>
        <NavBar user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}