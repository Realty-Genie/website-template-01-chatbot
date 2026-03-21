import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";
import { Whatsapp } from "@/components/Whatsapp";
import Script from "next/script";
import RouteTracker from "@/components/RouteTracker";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mai Real Estate | Exclusive Portfolio",
  description: "Top 1% Realtor in Greater Vancouver. Powerful Luxury Marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${playfair.variable} antialiased font-sans`}
      >
        <RouteTracker />
        {children}
        <Whatsapp />
        <Chatbot />
        
        <Script
          src="https://tracker-worker.green-feather-9c2c.workers.dev/tracker.js"
          data-key="901e13d9-a617-4130-8c7f-ad2aa8809837"
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
