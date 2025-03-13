import type { Metadata } from "next";
import "@/style/globals.css";
import ClientProvider from "@/components/client-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ارز هشت - خرید و فروش ارز دیجیتال",
  description: "Generated by create next app",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head></head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
