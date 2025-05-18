
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'Google Sheets API Key or Spreadsheet ID is missing. Site will use fallback data or fail to load dynamic content from Sheets. Please check your .env.local file.'
    );
  } else {
    console.error(
      'CRITICAL: Google Sheets API Key or Spreadsheet ID is missing in production.'
    );
  }
}

interface FetchSheetDataOptions {
  sheetName: string;
  range?: string; // e.g., "A1:B10"
}

async function fetchSheetData<T>(
  options: FetchSheetDataOptions
): Promise<T | null> {
  if (!API_KEY || !SPREADSHEET_ID) {
    return null;
  }

  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(
        `Error fetching sheet data for ${sheetName}: ${response.statusText}`
      );
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      return null;
    }
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName}:`, error);
    return null;
  }
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  delay?: string;
}

export async function getFaqData(): Promise<FaqItem[]> {
  const rawData = await fetchSheetData<Array<[string | number, string, string]>>({
    sheetName: 'FAQ',
    range: 'A2:C', 
  });

  if (!rawData) {
    return [
      { id: "fallback1", question: "Could not load FAQ.", answer: "Please check configuration." }
    ];
  }

  return rawData.map((row, index) => ({
    id: String(row[0] || `faq-${index}`),
    question: row[1] || 'No question',
    answer: row[2] || 'No answer',
    delay: String(index * 50),
  }));
}

export interface ContactDetails {
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  contactHours?: string;
}

export async function getSiteConfig(): Promise<Record<string, string>> {
  const rawData = await fetchSheetData<Array<[string, string]>>({
    sheetName: 'SiteConfig',
    range: 'A1:B',
  });

  const defaultConfig: Record<string, string> = {
    siteTitle: "קעמפ גן ישראל - אלעד (ברירת מחדל)",
    siteDescription: "תיאור אתר ברירת מחדל.",
    heroVideoId: "b2SaA1dYwl0", // Default Hero Video
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: "כתובת משרד (ברירת מחדל)",
    contactPhoneNumber: "050-0000000 (ברירת מחדל)",
    contactEmail: "email@example.com (ברירת מחדל)",
    contactHours: "שעות פעילות (ברירת מחדל)",
    principalName: "שם המנהל (ברירת מחדל)",
    principalMessageParagraph1: "הודעת מנהל פסקה 1 (ברירת מחדל).",
    principalMessageParagraph2: "הודעת מנהל פסקה 2 (ברירת מחדל).",
    principalImageSrc: "https://placehold.co/400x500.png",
    principalImageAlt: "מנהל הקעמפ",
    principalImageHint: "manager portrait",
    aboutTitle: "אודותינו (ברירת מחדל)",
    aboutParagraph1: "פסקה ראשונה אודותינו (ברירת מחדל).",
    aboutParagraph2: "פסקה שניה אודותינו (ברירת מחדל).",
    aboutImageSrc: "https://placehold.co/450x562.png",
    aboutImageAlt: "אודות קעמפ גן ישראל אלעד",
    aboutImageHint: "camp team",
    mainSummaryVideoId: "gqgfz0h0om4", // Default Main Summary Video
  };

  if (!rawData) {
    return defaultConfig;
  }

  const config: Record<string, string> = { ...defaultConfig };
  rawData.forEach(row => {
    if (row[0] && row[1] !== undefined && row[1] !== null) {
      config[row[0]] = String(row[1]);
    }
  });
  return config;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const rawData = await fetchSheetData<Array<[string | number, string, string]>>({
    sheetName: 'Testimonials',
    range: 'A2:C',
  });

  if (!rawData) {
    return [
      { id: "fallbackTestimonial1", quote: "טעינת המלצה נכשלה.", author: "בודק האתר" }
    ];
  }
  return rawData.map((row, index) => ({
    id: String(row[0] || `testimonial-${index}`),
    quote: row[1] || 'תוכן המלצה חסר',
    author: row[2] || 'מחבר לא ידוע',
  }));
}

export interface SwiperSlideItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageHint?: string;
  captionTitle: string;
  captionText: string;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  const rawData = await fetchSheetData<Array<[string | number, string, string, string, string, string]>>({
    sheetName: 'SwiperSlides', // For secondary hero swiper
    range: 'A2:F',
  });
  if (!rawData) {
    return [
      { id: "fallbackSlide1", imageSrc: "https://placehold.co/1200x800.png", imageAlt: "תמונה חלופית 1", imageHint: "placeholder", captionTitle: "כותרת חלופית 1", captionText: "טקסט חלופי 1" },
      { id: "fallbackSlide2", imageSrc: "https://placehold.co/1200x800.png", imageAlt: "תמונה חלופית 2", imageHint: "placeholder", captionTitle: "כותרת חלופית 2", captionText: "טקסט חלופי 2" },
    ];
  }
  return rawData.map((row, index) => ({
    id: String(row[0] || `slide-${index}`),
    imageSrc: row[1] || 'https://placehold.co/1200x800.png',
    imageAlt: row[2] || 'תמונה חלופית',
    imageHint: row[3] || 'placeholder',
    captionTitle: row[4] || 'כותרת חלופית',
    captionText: row[5] || 'טקסט חלופי',
  }));
}

export interface VideoItem {
  id: string;
  videoId: string; // YouTube video ID
  title: string;
  category: 'campSong' | 'summaryVideo' | string; // Allow other categories
}

export async function getVideos(): Promise<VideoItem[]> {
  const rawData = await fetchSheetData<Array<[string | number, string, string, string]>>({
    sheetName: 'Videos',
    range: 'A2:D',
  });

  if (!rawData) {
    return [
      { id: "fallbackVideo1", videoId: "dQw4w9WgXcQ", title: "סרטון ברירת מחדל", category: "campSong" }
    ];
  }
  return rawData.map((row, index) => ({
    id: String(row[0] || `video-${index}`),
    videoId: row[1] || 'dQw4w9WgXcQ', // Default to a known placeholder if missing
    title: row[2] || 'סרטון ללא כותרת',
    category: row[3] || 'general',
  }));
}
