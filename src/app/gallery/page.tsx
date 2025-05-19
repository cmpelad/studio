
import Link from 'next/link';
import Image from 'next/image';
import { galleryData, type YearData, type DayData } from '@/lib/gallery-data';

export default function GalleryPage() {
  return (
    <>
      <div className="gallery-container">
        {galleryData.map((year: YearData) => (
          <section className="year-section" key={year.yearSlug}>
            <div className="year-header">
              <Image 
                src={year.yearImage} 
                alt={`קעמפ גן ישראל אלעד ${year.yearName}`} 
                width={150} 
                height={150} 
                className="year-main-image"
                data-ai-hint={year.yearImageHint}
              />
              <h2>{`קעמפ גן ישראל ${year.yearName}`}</h2>
            </div>
            <div className="folders-grid">
              {year.days.map((day: DayData) => (
                <Link href={`/gallery/${year.yearSlug}/${day.slug}`} className="folder-item" key={day.slug}>
                  <Image 
                    src={day.thumbnail} 
                    alt={day.name} 
                    width={400} 
                    height={300} 
                    className="folder-thumbnail"
                    data-ai-hint={day.thumbnailHint}
                  />
                  <p>{day.name}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* Removed back-link-container from here as Footer is now global */}
    </>
  );
}
