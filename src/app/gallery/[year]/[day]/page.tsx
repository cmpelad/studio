
"use client";
import { useContext, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalContext } from '@/components/AppInitializer';
import type { GalleryImageItem, GalleryDayData, GalleryYearData } from '@/services/googleSheetsService';
// Removed getGalleryDays and getGalleryYears as generateStaticParams is removed

export default function DayGalleryPage({ params }: { params: { year: string; day: string } }) {
  const context = useContext(GlobalContext);
  const { year: yearSlug, day: daySlug } = params; 

  const currentYearData = useMemo(() => {
    if (!context?.galleryYears) return null;
    return context.galleryYears.find(y => y.yearSlug === yearSlug);
  },[context?.galleryYears, yearSlug]);
  
  const currentDayData = useMemo(() => {
    if (!context?.galleryDays) return null;
    return context.galleryDays.find(d => d.yearSlug === yearSlug && d.daySlug === daySlug);
  },[context?.galleryDays, yearSlug, daySlug]);

  const dayImages = useMemo(() => {
    if (!context?.galleryImages) return [];
    return context.galleryImages.filter(img => img.yearSlug === yearSlug && img.daySlug === daySlug)
      .sort((a, b) => (a.imageOrder || 0) - (b.imageOrder || 0));
  },[context?.galleryImages, yearSlug, daySlug]);

  if (!context) {
    return (
      <div className="gallery-container">
        <p>טוען גלריה...</p>
      </div>
    );
  }
  
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
            <Link href={`/gallery`}> {currentYearData.yearName}</Link>
        </p>
      </div>
      
      <div className="gallery-container">
        {dayImages && dayImages.length > 0 ? (
          <div className="images-grid">
            {dayImages.map((image: GalleryImageItem, index: number) => (
              <div 
                className="image-item" 
                key={image.src || `gallery-img-${index}`}
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
