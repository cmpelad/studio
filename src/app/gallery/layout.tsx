
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer'; // הוספת ייבוא
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
      <div className="gallery-page-specific-header">
        <h1>גלריית תמונות</h1>
      </div>
      <main className="gallery-main-content">
        {children}
      </main>
      <Footer /> {/* הוספת Footer */}
    </div>
  );
}
