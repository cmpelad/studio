
"use client"; // Required because we use useContext for dynamic title
import type { Metadata } from 'next';
import React, { useContext } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './gallery.css';
import { GlobalContext } from '@/components/AppInitializer';

// Metadata cannot be dynamic in client components directly using context.
// For dynamic titles based on context, it's better to set them via useEffect in the page component or AppInitializer.
// However, for a static-like title defined in SiteConfig, we can fetch it in RootLayout and pass it down.
// For now, we'll keep a general title here.
// export const metadata: Metadata = {
//   title: 'גלריית תמונות - קעמפ גן ישראל אלעד', // This will be overridden if GlobalContext provides a title
//   description: 'גלריית התמונות של קעמפ גן ישראל אלעד. חוויות, פעילויות ורגעים בלתי נשכחים מהקעמפ.',
// };

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = useContext(GlobalContext);
  const pageTitle = context?.siteConfig?.galleryPageTitle || 'גלריית תמונות';

  // Dynamically set document title using useEffect in a client component if needed for full SPA feel,
  // or ensure metadata in RootLayout or server components sets it as needed.
  // For this layout, the H1 will use the context-driven title.

  return (
    <div className="gallery-layout-container">
      <Header />
      <div className="gallery-page-specific-header">
        <h1>{pageTitle}</h1>
      </div>
      <main className="gallery-main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
