
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// Script import from next/script is not strictly needed if scripts are in head or AppInitializer
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppInitializer, { type InitialSiteData } from '@/components/AppInitializer';
import { getFaqData, getSiteConfig } from '@/services/googleSheetsService'; // Import data fetching functions

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Metadata can also be dynamic based on fetched data if needed later
export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteConfig();
  return {
    title: siteConfig.siteTitle || 'קעמפ גן ישראל - אלעד',
    description: siteConfig.siteDescription || 'חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch initial data on the server
  const faqItems = await getFaqData();
  const siteConfig = await getSiteConfig();
  const contactDetails = {
    officeAddress: siteConfig.contactOfficeAddress,
    phoneNumber: siteConfig.contactPhoneNumber,
    email: siteConfig.contactEmail,
    contactHours: siteConfig.contactHours,
  };

  const initialData: InitialSiteData = {
    faqItems,
    contactDetails,
    siteConfig,
  };

  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppInitializer initialData={initialData}>
          {children}
        </AppInitializer>
        <Toaster />
      </body>
    </html>
  );
}
