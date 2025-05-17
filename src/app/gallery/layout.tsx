
import type { Metadata } from 'next';
import Link from 'next/link';
import './gallery.css'; // Import gallery-specific styles
import Script from 'next/script'; // For Font Awesome if needed globally here
import Image from 'next/image';

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
    <html lang="he" dir="rtl">
      <head>
        {/* Standard head elements from main layout, if needed */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Font Awesome is in main layout, might not be needed here if not used by gallery pages directly */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
      </head>
      <body className="gallery-page"> {/* Add class for gallery specific body styles */}
        
        <div className="gallery-header">
          <Link href="/gallery" style={{ color: 'white', textDecoration: 'none' }}>
            <h1>גלריית תמונות</h1>
          </Link>
        </div>

        <main>
          {children}
        </main>

        <div className="back-link-container">
            <Link href="/" className="back-link">חזרה לאתר הראשי</Link>
        </div>
        
        {/* Any gallery-specific scripts can go here */}
      </body>
    </html>
  );
}
