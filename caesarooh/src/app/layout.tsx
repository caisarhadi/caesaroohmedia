import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../contexts/ThemeProvider";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DrawerNavigation from '../components/layout/DrawerNavigation';
import { defaultMetadata } from '../lib/metadata';
import JsonLd from '../components/seo/JsonLd';
import { createOrganizationSchema, createWebsiteSchema } from '../components/seo/JsonLd';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = defaultMetadata;

const organizationData = {
  name: 'CAESAR OOH MEDIA',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com',
  logo: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com'}/images/logo.png`,
  sameAs: [
    'https://twitter.com/caesarooh',
    'https://facebook.com/caesarooh',
    'https://linkedin.com/company/caesarooh',
    'https://instagram.com/caesarooh',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    createOrganizationSchema(organizationData),
    createWebsiteSchema({
      name: 'CAESAR OOH MEDIA',
      url: process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com',
    }),
  ];

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
            <DrawerNavigation />
          </div>
        </ThemeProvider>
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
