
"use client";
import { useContext, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalContext } from '@/components/AppInitializer';
import type { GalleryImageItem } from '@/services/googleSheetsService';
import { useParams, notFound } from 'next/navigation'; // Import notFound

// generateStaticParams can still be useful if you pre-render some popular gallery pages
// For now, we'll rely on dynamic rendering based on context
// export async function generateStaticParams() {
//   // This would need access to galleryYears and galleryDays,
//   // which might be complex if they are fully dynamic from sheets at build time.
//   // For simplicity, we'll skip this for now.
//   return [];
// }

export default function DayGalleryPage() {
  const context = useContext(GlobalContext);
  const params = useParams<{ year: string; day: string }>();
  const { year: yearSlug, day: daySlug } = params;

  const currentYearData = useMemo(() => 
    context?.galleryYears?.find(y => y.yearSlug === yearSlug),
  [context?.galleryYears, yearSlug]);
  
  const currentDayData = useMemo(() =>
    context?.galleryDays?.find(d => d.yearSlug === yearSlug && d.daySlug === daySlug),
  [context?.galleryDays, yearSlug, daySlug]);

  const dayImages = useMemo(() =>
    context?.galleryImages?.filter(img => img.yearSlug === yearSlug && img.daySlug === daySlug)
      .sort((a, b) => (a.imageOrder || 0) - (b.imageOrder || 0)) || [],
  [context?.galleryImages, yearSlug, daySlug]);

  if (!context) {
    return <div className="gallery-container"><p>טוען תמונות...</p></div>;
  }
  
  // If context is loaded but data for current year/day is not found
  if (!currentYearData || !currentDayData) {
    console.log("Data not found for year/day:", yearSlug, daySlug, currentYearData, currentDayData);
    // Call notFound() to render the nearest not-found page
    // This should ideally be handled on the server if possible, or a more graceful client-side message
    // For now, a simple message:
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
            <Link href={`/gallery`}> {currentYearData.yearName}</Link> {/* Adjusted to link to main gallery if year pages don't exist */}
        </p>
      </div>
      
      <div className="gallery-container">
        {dayImages && dayImages.length > 0 ? (
          <div className="images-grid">
            {dayImages.map((image: GalleryImageItem, index: number) => (
              <div 
                className="image-item" 
                key={image.src || index}
                onClick={() => context.openLightbox(image.src, image.alt)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && context.openLightbox(image.src, image.alt)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={600} 
                  height={400} 
                  className="gallery-image"
                  data-ai-hint={image.hint || "camp activity"}
                  priority={index < 6} // Prioritize loading first few images
                />
              </div>
            ))}
          </div>
        ) : (
          <p>אין תמונות להצגה עבור יום זה.</p>
        )}
      </div>
    </>
  );
}
