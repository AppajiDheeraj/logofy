import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "sonner";

export const metadata = {
  title: "Logofy.ai – AI Logo Generator",
  description:
    "Logofy.ai is your smart AI-powered logo design tool. Instantly generate professional, unique logos for your brand, startup, or personal project – no design skills needed.",
  keywords: [
    "AI logo maker",
    "AI logo generator",
    "create logo online",
    "Logofy",
    "logo design AI",
    "automatic logo maker",
    "brand identity generator",
    "startup logo tool",
    "logo builder",
  ],
  authors: [
    { name: "Dheeraj Appaji", url: "https://github.com/AppajiDheeraj" },
  ],
  creator: "Logofy Team",
  publisher: "Logofy.ai",
  metadataBase: new URL("https://logofy.ai"), // update to actual deployed URL
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Logofy.ai – AI Logo Generator",
    description:
      "Design stunning logos with the power of AI. Logofy.ai helps you build unique brand identities in seconds – fast, easy, and customizable.",
    url: "https://logofy.ai",
    siteName: "Logofy.ai",
    images: [
      {
        url: "/logo.svg", // update to match your public image
        width: 600,
        height: 600,
        alt: "Logofy.ai – AI Logo Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  category: "design",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
