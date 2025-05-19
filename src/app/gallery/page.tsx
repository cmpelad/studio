
"use client";
import { useContext, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalContext } from '@/components/AppInitializer';
import type { GalleryYearData, GalleryDayData } from '@/services/googleSheetsService';

export default function GalleryPage() {
  const context = useContext(GlobalContext);

  const years = context?.galleryYears || [];
  const days = context?.galleryDays || [];

  const galleryStructure = useMemo(() => {
    return years.map(year => ({
      ...year,
      days: days.filter(day => day.yearSlug === year.yearSlug)
    }));
  }, [years, days]);

  if (!context) {
    return <div className="gallery-container"><p>טוען נתוני גלריה...</p></div>;
  }

  if (galleryStructure.length === 0) {
    return <div className="gallery-container"><p>לא נמצאו אלבומים להצגה.</p></div>;
  }

  return (
    <>
      <div className="gallery-container">
        {galleryStructure.map((year: GalleryYearData & { days: GalleryDayData[] }) => (
          <section className="year-section" key={year.yearSlug}>
            <div className="year-header">
              <Image 
                src={year.yearImage} 
                alt={`קעמפ גן ישראל אלעד ${year.yearName}`} 
                width={150} 
                height={150} 
                className="year-main-image"
                data-ai-hint={year.yearImageHint || "camp collage"}
              />
              <h2>{`קעמפ גן ישראל ${year.yearName}`}</h2>
            </div>
            {year.days && year.days.length > 0 ? (
              <div className="folders-grid">
                {year.days.map((day: GalleryDayData) => (
                  <Link href={`/gallery/${year.yearSlug}/${day.daySlug}`} className="folder-item" key={day.daySlug}>
                    <Image 
                      src={day.thumbnail} 
                      alt={day.dayName} 
                      width={400} 
                      height={300} 
                      className="folder-thumbnail"
                      data-ai-hint={day.thumbnailHint || "camp activity"}
                    />
                    <p>{day.dayName}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p>לא נמצאו ימים להצגה עבור שנה זו.</p>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
