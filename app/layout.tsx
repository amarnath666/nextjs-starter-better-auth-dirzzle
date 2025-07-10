import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Starter Pack",
  description:
    "Next.js Starter Pack with Drizzle ORM, Better Auth, and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
          <ViewTransitions>
            <ReactLenis root>
              {children}
              <Toaster />
            </ReactLenis>
          </ViewTransitions>
      
      </body>
        </ThemeProvider>
    </html>
  );
}
