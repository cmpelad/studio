
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

// This warning remains relevant as other functions still use API_KEY and SPREADSHEET_ID
if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'Google Sheets API Key or Spreadsheet ID is missing. Parts of the site using the API (e.g., FAQ, Testimonials) will use fallback data or fail to load. Please check your .env.local file.'
    );
  } else {
    console.error(
      'CRITICAL: Google Sheets API Key or Spreadsheet ID is missing in production. This will affect parts of the site relying on the Google Sheets API.'
    );
  }
}

interface FetchSheetDataOptions {
  sheetName: string;
  range?: string; // e.g., "A1:B10"
}

// Helper function to parse simple CSV text into a 2D array
async function parseCsv(csvText: string): Promise<string[][]> {
  const rows = csvText.trim().split('\n');
  return rows.map(row => {
    // This is a very basic CSV parser. It won't handle commas within quoted fields correctly.
    // For more complex CSVs, a library would be better.
    return row.split(',').map(cell => cell.trim());
  });
}

// Helper function to fetch data from a public CSV URL
async function fetchCsvData(url: string): Promise<string[][] | null> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(`Error fetching CSV data from ${url}: ${response.statusText}`);
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      return null;
    }
    const csvText = await response.text();
    if (!csvText) {
      console.error(`Empty CSV data from ${url}`);
      return null;
    }
    return parseCsv(csvText);
  } catch (error) {
    console.error(`Exception fetching or parsing CSV data from ${url}:`, error);
    return null;
  }
}


async function fetchSheetData<T>(
  options: FetchSheetDataOptions
): Promise<T | null> {
  if (!API_KEY || !SPREADSHEET_ID) { // Check for API key for functions that use this method
    console.warn(`Skipping fetch for ${options.sheetName} via API due to missing API_KEY or SPREADSHEET_ID.`);
    return null;
  }

  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(
        `Error fetching sheet data for ${sheetName} via API: ${response.statusText}`
      );
      const errorBody = await response.text();
      console.error('Error body:', errorBody);
      return null;
    }
    const data = await response.json();
    return data.values || [];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName} via API:`, error);
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
      { id: "fallback1", question: "Could not load FAQ.", answer: "Please check configuration or Google Sheets availability." }
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
  const siteConfigCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?output=csv";
  
  const defaultConfig: Record<string, string> = {
    siteTitle: "קעמפ גן ישראל - אלעד (טעינה)",
    siteDescription: "תיאור אתר (טעינה).",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0", // Default logo
    heroVideoId: "b2SaA1dYwl0",
    heroImageSrc: "https://picsum.photos/1200/675?random=hero_camp_elad_main",
    heroImageAlt: "קדימון קעמפ גן ישראל אלעד",
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: "כתובת משרד (טעינה)",
    contactPhoneNumber: "050-0000000 (טעינה)",
    contactEmail: "email@example.com (טעינה)",
    contactHours: "שעות פעילות (טעינה)",
    principalName: "שם המנהל (טעינה)",
    principalMessageParagraph1: "הודעת מנהל פסקה 1 (טעינה).",
    principalMessageParagraph2: "הודעת מנהל פסקה 2 (טעינה).",
    principalImageSrc: "https://placehold.co/400x500.png",
    principalImageAlt: "מנהל הקעמפ",
    principalImageHint: "manager portrait",
    aboutTitle: "אודותינו (טעינה)",
    aboutParagraph1: "פסקה ראשונה אודותינו (טעינה).",
    aboutParagraph2: "פסקה שניה אודותינו (טעינה).",
    aboutImageSrc: "https://placehold.co/450x562.png",
    aboutImageAlt: "אודות קעמפ גן ישראל אלעד",
    aboutImageHint: "camp team",
    mainSummaryVideoId: "gqgfz0h0om4",
  };

  const rawCsvData = await fetchCsvData(siteConfigCsvUrl);
  const config: Record<string, string> = { ...defaultConfig };

  if (rawCsvData && rawCsvData.length > 1) { // rawCsvData[0] is headers
    // Start from the second row (index 1) to skip headers
    rawCsvData.slice(1).forEach(row => {
      // Assuming the first column is 'key' and the second is 'value'
      if (row && row.length >= 2 && row[0] && row[1] !== undefined && row[1] !== null) {
        config[String(row[0]).trim()] = String(row[1]).trim();
      }
    });
  } else {
    console.warn("Could not fetch or parse SiteConfig CSV, or CSV is empty/missing headers. Using default values.");
  }
  
  // Ensure essential fallbacks if CSV is missing certain keys
  Object.keys(defaultConfig).forEach(key => {
    if (config[key] === undefined || config[key] === null || config[key] === "") {
        // If CSV value is missing, empty, or explicitly "null"/"undefined" string, use default
        if (config[key] === "" || config[key]?.toLowerCase() === "null" || config[key]?.toLowerCase() === "undefined") {
             config[key] = defaultConfig[key];
        } else if (!config.hasOwnProperty(key)) {
            config[key] = defaultConfig[key];
        }
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
    sheetName: 'SwiperSlides', 
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
  category: 'campSong' | 'summaryVideo' | string; 
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
    videoId: row[1] || 'dQw4w9WgXcQ', 
    title: row[2] || 'סרטון ללא כותרת',
    category: row[3] || 'general',
  }));
}

    