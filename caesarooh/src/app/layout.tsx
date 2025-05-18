import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Script to handle dark mode preference */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              function getThemePreference() {
                if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                  return localStorage.getItem('theme');
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              
              const theme = getThemePreference();
              
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
