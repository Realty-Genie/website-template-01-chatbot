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
  description:
    "Top 1% Realtor in Greater Vancouver. Powerful Luxury Marketing.",
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
          id="crm-tracker-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.crmTracker = window.crmTracker || {
                track: function(event, data) {
                  console.log("[CRM Tracker] Track (queued):", event, data);
                  (window._crmQ = window._crmQ || []).push(['track', event, data]);
                },
                identify: async function(email, name, phone, city) {
                  console.log("[CRM Tracker] Identify (queued):", email, name, phone, city);
                  (window._crmQ = window._crmQ || []).push(['identify', email, name, phone, city]);
                }
              };
            `,
          }}
        />
        <Script
          src="https://tracker-worker.green-feather-9c2c.workers.dev/tracker.js"
          data-key="4d759969-79a9-4c34-8362-a72df3540bbc"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
