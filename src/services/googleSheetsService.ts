
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Fallback data - These are used if fetching from Google Sheets fails or is not configured.
const fallbackSiteConfig: Record<string, string> = {
    siteTitle: "קעמפ גן ישראל - אלעד (ברירת מחדל)",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת. (ברירת מחדל)",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0",
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
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ? (ברירת מחדל)", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ? (ברירת מחדל)", answer: "שעות הפעילות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל? (ברירת מחדל)", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.", delay: "100" },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ? (ברירת מחדל)", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.", delay: "150" },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים? (ברירת מחדל)", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.", delay: "200" },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (ברירת מחדל)", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (ברירת מחדל)", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (ברירת מחדל)", author: "משפחת אברמוביץ, בני ברק" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1 (ברירת מחדל)", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים! (ברירת מחדל)", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2 (ברירת מחדל)", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת! (ברירת מחדל)", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 3 (ברירת מחדל)", imageHint: "camp games", captionTitle: "פעילויות מגוונות ומרתקות! (ברירת מחדל)", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
];

const fallbackVideos: VideoItem[] = [
    { id: "song1_fallback", videoId: "6aRI-emxQlU", title: "שיר הנושא - קעמפ גן ישראל (ברירת מחדל)", category: "campSong" },
    { id: "song2_fallback", videoId: "jNQXAC9IVRw", title: "המנון הקעמפ (דוגמה)", category: "campSong" },
    { id: "summary1_fallback", videoId: "gqgfz0h0om4", title: "סרטון סיכום קעמפ תשפ\"ג (ברירת מחדל)", category: "summaryVideo" },
    { id: "summary2_fallback", videoId: "dQw4w9WgXcQ", title: "סרטון סיכום נוסף (דוגמה)", category: "summaryVideo" },
];


if (!API_KEY || !SPREADSHEET_ID) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'GOOGLE_SHEETS_API_KEY or GOOGLE_SHEETS_SPREADSHEET_ID is missing. Site will use hardcoded fallback data. Please check your .env.local file if you intend to use Google Sheets API.'
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
    console.warn(`Skipping API fetch for ${options.sheetName} due to missing API_KEY or SPREADSHEET_ID.`);
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

async function fetchCsvDataFromUrl(csvUrl: string): Promise<string[][] | null> {
  console.log(`Attempting to fetch CSV from URL: ${csvUrl}`);
  try {
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(`Error fetching CSV data from URL ${csvUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    console.log(`Successfully fetched CSV data from URL. Length: ${text.length}`);
    // Basic CSV parsing: split by lines, then by commas
    // This is a very basic parser and might need improvement for complex CSVs (e.g., with quoted commas)
    const rows = text.split(/\r?\n/).map(line => {
        // Naive split by comma. For robust CSV, a library might be better.
        // This simple split won't handle commas within quoted fields correctly.
        return line.split(',');
    });
    return rows.filter(row => row.length > 0 && row.some(cell => cell.trim() !== '')); // Filter out empty lines
  } catch (error) {
    console.error(`Exception fetching or parsing CSV data from URL ${csvUrl}:`, error);
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
  const sheetName = 'FAQ'; // Target sheet name for API or CSV structure
  // const directCsvUrl = 'YOUR_FAQ_CSV_EXPORT_LINK_HERE'; // Replace with actual CSV link if using direct CSV

  /* // Option 1: Fetch directly from a CSV URL (if you have one specifically for FAQs)
  if (directCsvUrl && directCsvUrl !== 'YOUR_FAQ_CSV_EXPORT_LINK_HERE') {
    console.log(`getFaqData: Attempting to fetch from CSV URL: ${directCsvUrl}`);
    const rows = await fetchCsvDataFromUrl(directCsvUrl);
    if (rows && rows.length > 1) { // Assuming first row is header
      try {
        const faqs = rows.slice(1).map((row, index) => ({
          id: row[0] || `faq_csv_${index}`,
          question: row[1] || '',
          answer: row[2] || '',
          delay: String(index * 50),
        }));
        if (faqs.length > 0) {
          console.log(`getFaqData: Processed ${faqs.length} FAQ items from CSV URL.`);
          return faqs;
        }
      } catch (e) {
        console.error('getFaqData: Error processing CSV data, falling back.', e);
      }
    } else {
      console.log('getFaqData: No data or only header in CSV from URL, or URL not set. Trying API or fallback.');
    }
  }
  */

  // Option 2: Fetch using Google Sheets API (current primary method)
  if (API_KEY && SPREADSHEET_ID) {
    console.log(`getFaqData: Attempting to fetch from Google Sheets API, Sheet: ${sheetName}`);
    try {
      const rows = await fetchSheetData<[string, string, string]>({ sheetName }); // id, question, answer
      if (rows && rows.length > 1) { // More than just header row
        const faqs = rows.slice(1).map((row, index) => ({ // Skip header row
          id: row[0] || `faq_api_${index}`,
          question: row[1] || '',
          answer: row[2] || '',
          delay: String(index * 50), // Auto-generate delay
        }));
        console.log(`getFaqData: Processed ${faqs.length} FAQ items from Google Sheets API.`);
        return faqs;
      } else if (rows && rows.length <= 1) {
        console.log(`getFaqData: No data rows found in ${sheetName} sheet (or only header) via API. Using fallbackFaqs.`);
      }
    } catch (error) {
      console.error('getFaqData: Error processing FAQ data from Google Sheets API, using fallbackFaqs:', error);
    }
  } else {
    console.log('getFaqData: API_KEY or SPREADSHEET_ID missing. Skipping API call for FAQ.');
  }

  console.log('getFaqData: Using hardcoded fallbackFaqs data.');
  return fallbackFaqs;
}


export interface ContactDetails {
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  contactHours?: string;
}

export async function getSiteConfig(): Promise<Record<string, string>> {
  const config: Record<string, string> = { ...fallbackSiteConfig }; // Start with fallbacks
  const sheetName = 'SiteConfig'; // Sheet name in your Google Sheet

  // Try fetching from Google Sheets API first if configured
  if (API_KEY && SPREADSHEET_ID) {
    console.log(`getSiteConfig: Attempting to fetch from Google Sheets API, Sheet: ${sheetName}`);
    try {
      const rows = await fetchSheetData<[string, string]>({ sheetName }); // key, value
      if (rows && rows.length > 1) { // header + data
        rows.slice(1).forEach(row => { // Skip header
          if (row[0] && typeof row[0] === 'string' && row[0].trim() !== '') {
            config[row[0].trim()] = row[1] || '';
          }
        });
        console.log(`getSiteConfig: Successfully loaded and merged ${rows.length -1} config items from API.`);
        return config; // Return merged config
      } else {
        console.log(`getSiteConfig: No data or only header in ${sheetName} sheet via API. Using fallbackSiteConfig.`);
      }
    } catch (error) {
      console.error('getSiteConfig: Error processing SiteConfig from API, using fallbackSiteConfig:', error);
    }
  } else {
     console.log('getSiteConfig: API_KEY or SPREADSHEET_ID missing. Skipping API call for SiteConfig.');
  }
  
  console.log('getSiteConfig: Using hardcoded fallbackSiteConfig data only.');
  return fallbackSiteConfig; 
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
  return fallbackSwiperSlides;
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
    