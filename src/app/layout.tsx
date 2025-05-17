
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppInitializer from '@/components/AppInitializer'; // We will create this

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'קעמפ גן ישראל - אלעד', // Original title
  description: 'חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.', // Example description
  // Add other meta tags from original HTML if needed, e.g. keywords, author
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Fonts, CSS Links from original HTML */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* AOS CSS is imported in AppInitializer.tsx to bundle with JS logic */}
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppInitializer>
          {children}
        </AppInitializer>
        <Toaster />
        {/* Script Libraries - AOS is initialized in AppInitializer, Swiper in respective components */}
        {/* <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" /> */}
        {/* Swiper will be imported as a module in components that use it */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}

    