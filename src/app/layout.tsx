
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppInitializer, { type InitialSiteData } from '@/components/AppInitializer';
import { 
  getFaqData, 
  getSiteConfig, 
  getTestimonials, 
  getSwiperSlides, 
  getVideos,
  getGalleryYears,
  getGalleryDays,
  getGalleryImages
} from '@/services/googleSheetsService';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
  const siteConfig = await getSiteConfig();
  const faqItems = await getFaqData();
  const testimonials = await getTestimonials();
  const swiperSlides = await getSwiperSlides();
  const videos = await getVideos();
  const galleryYears = await getGalleryYears();
  const galleryDays = await getGalleryDays();
  const galleryImages = await getGalleryImages();
  
  const contactDetails = {
    officeAddress: siteConfig.contactOfficeAddress,
    phoneNumber: siteConfig.contactPhoneNumber,
    email: siteConfig.contactEmail,
    contactHours: siteConfig.contactHours,
  };

  const initialData: InitialSiteData = {
    siteConfig,
    faqItems,
    contactDetails,
    testimonials,
    swiperSlides,
    videos,
    galleryYears,
    galleryDays,
    galleryImages,
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
