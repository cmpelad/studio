
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Fallback data remains, but is now clearly marked as fallback
const fallbackSiteConfig: Record<string, string> = {
    siteTitle: "קעמפ גן ישראל - אלעד (ברירת מחדל)",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת. (ברירת מחדל)",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0", // Default logo
    heroVideoId: "b2SaA1dYwl0", // Default hero video
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "קדימון קעמפ גן ישראל אלעד (ברירת מחדל)",
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: "המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (ברירת מחדל)",
    contactPhoneNumber: "050-1234567 (ברירת מחדל)",
    contactEmail: "office@camp-elad.org.il (ברירת מחדל)",
    contactHours: "ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (ברירת מחדל)",
    principalName: "הרב מנחם מענדל גרינפלד (ברירת מחדל)",
    principalMessageParagraph1: "הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות. (ברירת מחדל)",
    principalMessageParagraph2: "הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד! (ברירת מחדל)",
    principalImageSrc: "https://placehold.co/400x500.png",
    principalImageAlt: "מנהל הקעמפ הרב מנחם מענדל גרינפלד (ברירת מחדל)",
    principalImageHint: "rabbi portrait",
    aboutTitle: "קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה! (ברירת מחדל)",
    aboutParagraph1: "קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל. (ברירת מחדל)",
    aboutParagraph2: "הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח. (ברירת מחדל)",
    aboutImageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    aboutImageAlt: "קבוצת ילדים בפעילות קעמפ (ברירת מחדל)",
    aboutImageHint: "camp activity",
    mainSummaryVideoId: "gqgfz0h0om4",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ? (ברירת מחדל)", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ? (ברירת מחדל)", answer: "שעות הפעילות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! (ברירת מחדל)", author: "משפחת כהן, אלעד" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://placehold.co/1770x1000.png?text=Fallback+Slide+1", imageAlt: "תמונת אווירה 1 (ברירת מחדל)", imageHint: "placeholder", captionTitle: "חוויה של פעם בחיים! (ברירת מחדל)", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
];

const fallbackVideos: VideoItem[] = [
    { id: "song1_fallback", videoId: "6aRI-emxQlU", title: "שיר הנושא - קעמפ גן ישראל (ברירת מחדל)", category: "campSong" },
    { id: "summary1_fallback", videoId: "gqgfz0h0om4", title: "סרטון סיכום קעמפ תשפ\"ג (ברירת מחדל)", category: "summaryVideo" },
];


if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'GOOGLE_SHEETS_API_KEY or GOOGLE_SHEETS_SPREADSHEET_ID is missing. Site will use hardcoded fallback data. Please check your .env.local file.'
    );
  } else {
    console.error(
      'CRITICAL: GOOGLE_SHEETS_API_KEY or GOOGLE_SHEETS_SPREADSHEET_ID is missing in production. This will affect parts of the site relying on the Google Sheets API.'
    );
  }
}

interface FetchSheetDataOptions {
  sheetName: string;
  range?: string; // e.g., "A1:C10"
}

async function fetchSheetData<T extends string[]>(
  options: FetchSheetDataOptions
): Promise<T[] | null> {
  if (!API_KEY || !SPREADSHEET_ID) {
    // console.warn(`Skipping API fetch for ${options.sheetName} due to missing API_KEY or SPREADSHEET_ID.`);
    return null;
  }

  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  console.log(`Attempting to fetch data from Google Sheet: ${sheetName}, Range: ${sheetRange}`);
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Error fetching sheet data for ${sheetName} via API: ${response.status} ${response.statusText}. Body: ${errorBody}`
      );
      return null;
    }
    const data = await response.json();
    console.log(`Successfully fetched data for ${sheetName}. Num rows: ${data.values ? data.values.length : 0}`);
    return (data.values || []) as T[];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName} via API:`, error);
    return null;
  }
}


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  delay?: string; // This was part of the original static data, can be generated client-side too
}

export async function getFaqData(): Promise<FaqItem[]> {
  const sheetName = 'FAQ';
  try {
    const rows = await fetchSheetData<[string, string, string]>({ sheetName }); // id, question, answer
    if (rows && rows.length > 1) { // More than just header row
      const faqs = rows.slice(1).map((row, index) => ({ // Skip header row
        id: row[0] || `faq_item_${index}`,
        question: row[1] || '',
        answer: row[2] || '',
        // delay can be added here if needed or handled in component
      }));
      console.log(`Processed ${faqs.length} FAQ items from Google Sheets.`);
      return faqs;
    } else if (rows && rows.length <= 1) {
      console.log(`No data rows found in ${sheetName} sheet (or only header). Using fallback.`);
      return fallbackFaqs;
    }
  } catch (error) {
    console.error('Error processing FAQ data from Google Sheets:', error);
  }
  console.log('getFaqData: Using hardcoded fallback data due to fetch error or no data.');
  return fallbackFaqs;
}

export interface ContactDetails {
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  contactHours?: string;
}

// Fetches all data from SiteConfig sheet and transforms it into a Record<string, string>
export async function getSiteConfig(): Promise<Record<string, string>> {
  const sheetName = 'SiteConfig';
  const config: Record<string, string> = { ...fallbackSiteConfig }; // Start with fallbacks

  try {
    const rows = await fetchSheetData<[string, string]>({ sheetName }); // key, value
    if (rows && rows.length > 1) { // More than just header row
      rows.slice(1).forEach(row => { // Skip header row
        if (row && row.length >= 2 && row[0]) {
          config[row[0]] = row[1] || ''; // Ensure value is string, even if empty
        }
      });
      console.log('SiteConfig: Successfully merged data from Google Sheets with fallbacks.');
      return config;
    } else if (rows && rows.length <= 1) {
      console.log(`No data rows found in ${sheetName} sheet (or only header). Using only fallback config.`);
    }
  } catch (error) {
    console.error('Error processing SiteConfig data from Google Sheets:', error);
  }
  console.log('getSiteConfig: Using hardcoded fallback data due to fetch error or no data.');
  return fallbackSiteConfig; // Return only fallbacks if fetch failed or no data
}


export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export async function getTestimonials(): Promise<Testimonial[]> {
    // console.log("getTestimonials: Returning hardcoded data.");
    return fallbackTestimonials;
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
  // console.log("getSwiperSlides: Returning hardcoded data.");
  return fallbackSlides;
}

export interface VideoItem {
  id: string;
  videoId: string; 
  title: string;
  category: 'campSong' | 'summaryVideo' | string; 
}

export async function getVideos(): Promise<VideoItem[]> {
  // console.log("getVideos: Returning hardcoded data.");
  return fallbackVideos;
}

    