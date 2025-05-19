
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
// Removed Footer import
import './gallery.css';

export const metadata: Metadata = {
  title: 'גלריית תמונות - קעמפ גן ישראל אלעד',
  description: 'גלריית התמונות של קעמפ גן ישראל אלעד. חוויות, פעילויות ורגעים בלתי נשכחים מהקעמפ.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gallery-layout-container">
      <Header />
      {/* Re-add a specific header for the gallery page if needed, or manage title within the page content */}
      {/* Example of a dedicated title bar, can be styled in gallery.css */}
      <div className="gallery-page-specific-header">
        <h1>גלריית תמונות</h1>
      </div>
      <main className="gallery-main-content">
        {children}
      </main>
      {/* Removed general Footer, specific back link can be added to page.tsx if needed or kept in CSS for specific pages */}
    </div>
  );
}
