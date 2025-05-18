import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeProvider";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CAESAR OOH MEDIA | Out-of-Home Advertising Media Provider",
  description: "CAESAR OOH MEDIA is Indonesia's leading out-of-home advertising media provider offering innovative OOH inventory solutions.",
  keywords: "out-of-home advertising, OOH media, billboard advertising, outdoor advertising, Indonesia",
  authors: [{ name: "CAESAR OOH MEDIA" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
