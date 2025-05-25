// src/app/gallery/[year]/[day]/DayGalleryClient.tsx
"use client"; // This directive tells Next.js this is a client component

import { useContext, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalContext } from '@/components/AppInitializer'; // Assuming GlobalContext is still needed for modals
import type { GalleryImageItem, GalleryDayData, GalleryYearData } from '@/services/googleSheetsService';

// Define the props that this client component expects
interface DayGalleryClientProps {
  yearSlug: string;
  daySlug: string;
  galleryYears: GalleryYearData[];
  galleryDays: GalleryDayData[];
  galleryImages: GalleryImageItem[];
}

// This is the Client Component
export default function DayGalleryClient({
  yearSlug,
  daySlug,
  galleryYears,
  galleryDays,
  galleryImages,
}: DayGalleryClientProps) {
  // We still use useContext if GlobalContext provides necessary client-side functionality like modals
  const context = useContext(GlobalContext);

  // Use useMemo to find the current year and day data from the passed props
  const currentYearData = useMemo(() => {
    if (!galleryYears) return null; // Check props instead of context
    return galleryYears.find(y => y.yearSlug === yearSlug);
  }, [galleryYears, yearSlug]);

  const currentDayData = useMemo(() => {
    if (!galleryDays) return null; // Check props instead of context
    return galleryDays.find(d => d.yearSlug === yearSlug && d.daySlug === daySlug);
  }, [galleryDays, yearSlug, daySlug]);

  // Filter and sort images based on props
  const dayImages = useMemo(() => {
    if (!galleryImages) return []; // Check props instead of context
    return galleryImages.filter(img => img.yearSlug === yearSlug && img.daySlug === daySlug)
      .sort((a, b) => (a.imageOrder || 0) - (b.imageOrder || 0));
  }, [galleryImages, yearSlug, daySlug]);

  if (!context) {
    return (
      <div className="gallery-container">
        <p>טוען גלריה...</p>
      </div>
    );
  }

  // Use currentYearData and currentDayData from useMemo results
  if (!currentYearData || !currentDayData) {
    return (
      <>
        <div className="day-gallery-header">
          <h1>הגלריה לא נמצאה</h1>
          <p className="breadcrumb">
            <Link href="/gallery">בחזרה לגלריה הראשית</Link>
          </p>
        </div>
        <div className="gallery-container">
          <p>מצטערים, לא מצאנו את הגלריה שחיפשת.</p>
          <div className="back-link-container" style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '20px' }}>
            <Link href="/" className="back-link">חזרה לאתר הראשי</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="day-gallery-header">
        <h1>{`${currentDayData.dayName} - ${currentYearData.yearName}`}</h1>
        <p className="breadcrumb">
            <Link href="/gallery">גלריה</Link> &gt; 
            <Link href={`/gallery`}> {currentYearData.yearName}</Link> {/* This link might need adjustment if year link is dynamic */}
        </p>
      </div>
      
      <div className="gallery-container">
        {dayImages && dayImages.length > 0 ? (
          <div className="images-grid">
            {dayImages.map((image: GalleryImageItem, index: number) => (
              <div 
                className="image-item" 
                key={image.src || `gallery-img-${index}`}
                onClick={() => context.openLightbox(image.src, image.alt)} // Assuming openLightbox comes from context
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && context.openLightbox(image.src, image.alt)} // Assuming openLightbox comes from context
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={600} 
                  height={400} 
                  className="gallery-image"
                  data-ai-hint={image.hint || "camp activity"}
                  priority={index < 6} 
                />
              </div>
            ))}
          </div>
        ) : (
          <p>אין תמונות להצגה עבור יום זה.</p>
        )}
      </div>
      <div className="back-link-container" style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '20px' }}>
         <Link href="/" className="back-link">חזרה לאתר הראשי</Link>
      </div>
    </>
  );
}
