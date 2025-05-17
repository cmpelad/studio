
// @ts-nocheck
// To be fixed in a later iteration:
// - Make sure all images have a data-ai-hint attribute
// - Add more images to the gallery
// - Fix any potential type errors
// remove ts-nocheck and fix type errors
export interface DayGalleryImage {
  src: string;
  alt: string;
  hint: string;
}

export interface DayData {
  name: string;
  slug: string;
  thumbnail: string;
  thumbnailHint: string;
  images: DayGalleryImage[];
}

export interface YearData {
  yearName: string;
  yearSlug: string;
  yearImage: string;
  yearImageHint: string;
  days: DayData[];
}

const generateDayImages = (yearSlug: string, daySlug: string, count: number): DayGalleryImage[] => {
  return Array.from({ length: count }, (_, i) => ({
    src: `https://picsum.photos/seed/${yearSlug}_${daySlug}_img${i + 1}/600/400?random=${yearSlug}_${daySlug}_${i + 1}`,
    alt: `תמונה ${i + 1} - ${daySlug} ${yearSlug}`,
    hint: "children fun",
  }));
};

export const galleryData: YearData[] = [
  {
    yearName: 'ה\'תשפ"ד',
    yearSlug: "tashpad",
    yearImage: "https://picsum.photos/seed/tashpad/300/300?random=tashpad_main",
    yearImageHint: "camp collage",
    days: Array.from({ length: 10 }, (_, i) => {
      const dayNum = i + 1;
      const daySlug = `day${dayNum}`;
      return {
        name: `היום ה${dayNum === 1 ? 'ראשון' : dayNum === 2 ? 'שני' : dayNum === 3 ? 'שלישי' : dayNum === 4 ? 'רביעי' : dayNum === 5 ? 'חמישי' : dayNum === 6 ? 'שישי' : dayNum === 7 ? 'שביעי' : dayNum === 8 ? 'שמיני' : dayNum === 9 ? 'תשיעי' : 'עשירי'}`,
        slug: daySlug,
        thumbnail: `https://picsum.photos/seed/tashpad_${daySlug}/400/300?random=tashpad_${daySlug}_thumb`,
        thumbnailHint: "camp activity",
        images: generateDayImages("tashpad", daySlug, 12), // 12 images per day
      };
    }),
  },
  {
    yearName: 'ה\'תשפ"ה',
    yearSlug: "tashpah",
    yearImage: "https://picsum.photos/seed/tashpah/300/300?random=tashpah_main",
    yearImageHint: "camp collage",
    days: Array.from({ length: 10 }, (_, i) => {
      const dayNum = i + 1;
      const daySlug = `day${dayNum}`;
      return {
        name: `היום ה${dayNum === 1 ? 'ראשון' : dayNum === 2 ? 'שני' : dayNum === 3 ? 'שלישי' : dayNum === 4 ? 'רביעי' : dayNum === 5 ? 'חמישי' : dayNum === 6 ? 'שישי' : dayNum === 7 ? 'שביעי' : dayNum === 8 ? 'שמיני' : dayNum === 9 ? 'תשיעי' : 'עשירי'}`,
        slug: daySlug,
        thumbnail: `https://picsum.photos/seed/tashpah_${daySlug}/400/300?random=tashpah_${daySlug}_thumb`,
        thumbnailHint: "camp activity",
        images: generateDayImages("tashpah", daySlug, 9), // 9 images per day
      };
    }),
  },
];
