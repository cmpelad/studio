
import Link from 'next/link';
import Image from 'next/image';
import { galleryData, type YearData, type DayData, type DayGalleryImage } from '@/lib/gallery-data';
import { notFound } from 'next/navigation';

interface DayPageParams {
  params: {
    year: string;
    day: string;
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const year of galleryData) {
    for (const day of year.days) {
      paths.push({ year: year.yearSlug, day: day.slug });
    }
  }
  return paths;
}

export default function DayGalleryPage({ params }: DayPageParams) {
  const { year: yearSlug, day: daySlug } = params;

  const currentYearData = galleryData.find((y: YearData) => y.yearSlug === yearSlug);
  if (!currentYearData) {
    notFound();
  }

  const currentDayData = currentYearData.days.find((d: DayData) => d.slug === daySlug);
  if (!currentDayData) {
    notFound();
  }

  return (
    <div className="gallery-container">
      <div className="day-gallery-header">
        <h1>{`${currentDayData.name} - ${currentYearData.yearName}`}</h1>
        <p className="breadcrumb">
            <Link href="/gallery">כל השנים</Link> &gt; {currentYearData.yearName}
        </p>
      </div>
      
      {currentDayData.images && currentDayData.images.length > 0 ? (
        <div className="images-grid">
          {currentDayData.images.map((image: DayGalleryImage, index: number) => (
            <div className="image-item" key={index}>
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={600} 
                height={400} 
                className="gallery-image"
                data-ai-hint={image.hint}
                priority={index < 6} // Prioritize loading first few images
              />
            </div>
          ))}
        </div>
      ) : (
        <p>אין תמונות להצגה עבור יום זה.</p>
      )}
    </div>
  );
}
