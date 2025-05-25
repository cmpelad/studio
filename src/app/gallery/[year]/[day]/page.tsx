// src/app/gallery/[year]/[day]/page.tsx
// This is a Server Component

// No "use client" here

// Import the specific fetching functions and fallback data from the service
import { getGalleryYears, getGalleryDays, getGalleryImages } from '@/services/googleSheetsService';
// Import types
import type { GalleryYearData, GalleryDayData, GalleryImageItem } from '@/services/googleSheetsService';

// Import the new client component
import DayGalleryClient from './DayGalleryClient';

// This function runs at build time on the server
export async function generateStaticParams() {
  // Use the fetching function to get data for static params generation
  // We should ideally fetch the actual data source here to get all possible year/day combinations
  // For now, using fallback data as a temporary fix for build error

  // Assuming getGalleryDays fetches the data (which includes the fallback logic)
  const galleryDays = await getGalleryDays(); 

  const params = galleryDays.map(day => ({
    year: day.yearSlug,
    day: day.daySlug,
  }));

  return params;
}

// This is the Server Component Page
export default async function DayGalleryPage({ params }: { params: { year: string; day: string } }) {
  const { year: yearSlug, day: daySlug } = params;

  // Fetch data on the server side using the specific functions
  // This data fetching will happen during the build process for static pages
  // For dynamic rendering, it would happen on each request
  let galleryYears: GalleryYearData[] = [];
  let galleryDays: GalleryDayData[] = [];
  let galleryImages: GalleryImageItem[] = [];

  try {
    // Fetching data from Google Sheets service
    galleryYears = await getGalleryYears();
    galleryDays = await getGalleryDays();
    galleryImages = await getGalleryImages();
  } catch (error) {
    console.error("Failed to fetch gallery data:", error);
    // If fetching fails (e.g., no internet during build), 
    // the service should ideally return fallback data. 
    // If not, galleryYears, galleryDays, galleryImages will be empty arrays,
    // which will be handled by the client component showing the "not found" message.
  }


  // Pass the fetched (or empty) data to the client component
  return (
    <DayGalleryClient
      yearSlug={yearSlug}
      daySlug={daySlug}
      galleryYears={galleryYears}
      galleryDays={galleryDays}
      galleryImages={galleryImages}
    />
  );
}
