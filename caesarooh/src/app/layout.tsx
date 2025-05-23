import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import '../styles/index.css'
import ThemeProvider from "../contexts/ThemeProvider";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DrawerNavigation from '../components/layout/DrawerNavigation';
import { defaultMetadata } from '../lib/metadata';
import StructuredData from '../components/seo/StructuredData';

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

const websiteData = {
  name: 'CAESAR OOH MEDIA',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://caesarooh.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200`}>
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
        <StructuredData 
          organizationData={organizationData}
          websiteData={websiteData}
        />
      </body>
    </html>
  );
}
