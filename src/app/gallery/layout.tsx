
import type { Metadata } from 'next';
import Link from 'next/link';
import './gallery.css'; // Import gallery-specific styles
// Script and Image imports might not be needed directly here if not used by the immediate layout.

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
    <div className="gallery-layout-container"> {/* Added a wrapper for gallery-specific root styling */}
      <div className="gallery-header">
        <Link href="/gallery" style={{ color: 'white', textDecoration: 'none' }}>
          <h1>גלריית תמונות</h1>
        </Link>
      </div>

      <main className="gallery-main-content"> {/* Added a class for main content within gallery */}
        {children}
      </main>

      <div className="back-link-container">
          <Link href="/" className="back-link">חזרה לאתר הראשי</Link>
      </div>
    </div>
  );
}
