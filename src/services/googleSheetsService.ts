
// src/services/googleSheetsService.ts
'use server';
import { env } from 'process';

// --- CSV URLs ---
// החלף את הקישורים הבאים בקישורי ה-CSV הישירים שלך
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";
// הוסף כאן קבועים עבור Videos, GalleryYears, GalleryDays, GalleryImages כאשר תספק את הקישורים שלהם

// --- Fallback Data (נתוני גיבוי) ---
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
    mainSummaryVideoId: "gqgfz0h0om4", // Fallback if not found in Videos sheet
    galleryPageTitle: "גלריית תמונות (סטטי)",
    summaryVideosPageTitle: "כל סרטוני הסיכום (סטטי)",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ? (מקומי)", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ? (מקומי)", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל? (מקומי)", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.", delay: "100" },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ? (מקומי)", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.", delay: "150" },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים? (מקומי)", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.", delay: "200" },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (מקומי)", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (מקומי)", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (מקומי)", author: "משפחת אברמוביץ, בני ברק" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1 (מקומי)", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים! (מקומי)", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2 (מקומי)", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת! (מקומי)", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
];

const fallbackVideos: VideoItem[] = [
    { id: "song1_fallback", videoId: "6aRI-emxQlU", title: "שיר הנושא - קעמפ גן ישראל (מקומי)", category: "campSong" },
    { id: "song2_fallback", videoId: "jNQXAC9IVRw", title: "המנון הקעמפ (דוגמה מקומית)", category: "campSong" },
    { id: "summary1_fallback", videoId: "gqgfz0h0om4", title: "סרטון סיכום קעמפ תשפ\"ג (מקומי)", category: "summaryVideo" },
];

const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad-fallback", yearName: 'ה\'תשפ"ד (סטטי)', yearImage: "https://placehold.co/300x300.png?text=Static-2024", yearImageHint: "camp collage" },
];
const fallbackGalleryDays: GalleryDayData[] = [
  { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", dayName: "היום הראשון (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D1", thumbnailHint: "camp activity" },
];
const fallbackGalleryImages: GalleryImageItem[] = [
  { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1", alt: "תמונה 1 סטטית", hint: "children fun" },
];


// --- Data Type Interfaces ---
export interface FaqItem { id: string; question: string; answer: string; delay?: string; }
export interface ContactDetails { officeAddress?: string; phoneNumber?: string; email?: string; contactHours?: string;}
export interface Testimonial { id: string; quote: string; author: string;}
export interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | string; }
export interface GalleryYearData { yearSlug: string; yearName: string; yearImage: string; yearImageHint?: string; }
export interface GalleryDayData { yearSlug: string; daySlug: string; dayName: string; thumbnail: string; thumbnailHint?: string; }
export interface GalleryImageItem { yearSlug: string; daySlug: string;  imageOrder?: number; src: string; alt: string; hint?: string; }

// --- Helper function to fetch and parse CSV data from a URL ---
async function fetchCsvDataFromUrl(csvUrl: string, sheetTypeForLogging: string, expectedHeaders: string[]): Promise<string[][] | null> {
  if (!csvUrl || csvUrl.includes("PLACEHOLDER_GID") || csvUrl.includes("הקישור_שלך") || csvUrl.includes("הקישור_החדש_שתספק")) {
    console.warn(`fetchCsvDataFromUrl: Invalid or placeholder CSV URL for ${sheetTypeForLogging}. URL: ${csvUrl}. Skipping fetch.`);
    return null;
  }
  
  console.log(`Attempting to fetch CSV from URL for ${sheetTypeForLogging}: ${csvUrl}`);
  try {
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      console.error(`Error fetching CSV data from URL ${csvUrl} for ${sheetTypeForLogging}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    console.log(`Successfully fetched CSV data from URL for ${sheetTypeForLogging}. Raw CSV Text length: ${text.length}`);

    const rows = text
      .split(/\r?\n/)
      .map(line => {
        const row: string[] = [];
        let currentField = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            if (inQuotes && i + 1 < line.length && line[i+1] === '"') {
              currentField += '"'; // Handle escaped quote
              i++;
            } else {
              inQuotes = !inQuotes;
            }
          } else if (char === ',' && !inQuotes) {
            row.push(currentField.trim());
            currentField = '';
          } else {
            currentField += char;
          }
        }
        row.push(currentField.trim());
        return row;
      })
      .filter(row => row.length > 0 && row.some(cell => cell.trim() !== ''));

    console.log(`Parsed CSV Data for ${sheetTypeForLogging} (first 5 rows):`, rows.slice(0,5));
    return rows;
  } catch (error) {
    console.error(`Exception fetching or parsing CSV data from URL ${csvUrl} for ${sheetTypeForLogging}:`, error);
    return null;
  }
}

// --- Data Fetching Functions ---

export async function getSiteConfig(): Promise<Record<string, string>> {
  console.log("getSiteConfig: Using hardcoded fallbackSiteConfig data only.");
  return fallbackSiteConfig;
}

export async function getFaqData(): Promise<FaqItem[]> {
  const sheetType = 'FAQ';
  const expectedHeaders = ['id', 'question', 'answer'];
  const specificHeadersLower = expectedHeaders.map(h => h.toLowerCase());
  console.log(`getFaqData: Attempting to fetch from direct CSV URL: ${FAQ_CSV_URL}`);
  
  const rows = await fetchCsvDataFromUrl(FAQ_CSV_URL, sheetType, expectedHeaders);

  if (rows && rows.length > 0) {
    let dataRows = rows;
    const headerRow = rows[0].map(h => h.toLowerCase().trim().replace(/\s+/g, ''));
    let columnMap: Record<string, number> = {};

    const isHeaderPresent = specificHeadersLower.every(expHeader => headerRow.includes(expHeader));

    if (isHeaderPresent) {
      console.log(`getFaqData: CSV Header row (${specificHeadersLower.join(',')}) detected.`);
      dataRows = rows.slice(1);
      headerRow.forEach((header, index) => {
        if (specificHeadersLower.includes(header)) {
          columnMap[header] = index;
        }
      });
      console.log(`getFaqData: Column map based on headers:`, columnMap);
    } else {
      console.log(`getFaqData: No specific CSV Header (${specificHeadersLower.join(',')}) detected. Assuming fixed order for 2 or 3 columns.`);
      if (rows[0].length === 2) { // question, answer
        columnMap = { question: 0, answer: 1 };
         console.log(`getFaqData: Assumed 2 columns: question, answer`);
      } else if (rows[0].length >= 3) { // id, question, answer
        columnMap = { id: 0, question: 1, answer: 2 };
        console.log(`getFaqData: Assumed 3+ columns: id, question, answer`);
      } else {
        console.warn(`getFaqData: CSV does not have enough columns for question and answer. Using fallback.`);
        return fallbackFaqs;
      }
    }
    
    if (dataRows.length > 0) {
      const faqs = dataRows.map((row, index) => {
        const question = columnMap.question !== undefined ? (row[columnMap.question]?.trim() || '') : '';
        const answer = columnMap.answer !== undefined ? (row[columnMap.answer]?.trim() || '') : '';
        const id = columnMap.id !== undefined ? (row[columnMap.id]?.trim() || `faq_csv_${index}`) : `faq_csv_${index}`;
        
        if (!question && !answer) return null;

        return {
          id: id,
          question: question,
          answer: answer,
          delay: String(index * 50),
        };
      }).filter(faq => faq !== null) as FaqItem[];
      console.log(`getFaqData: Processed ${faqs.length} FAQ items from CSV URL. First item:`, faqs[0]);
      if (faqs.length > 0) return faqs;
    } else {
      console.log('getFaqData: No data rows found in CSV from URL after potential header skip.');
    }
  } else {
    console.log('getFaqData: No data returned from CSV URL fetch for FAQ.');
  }
  
  console.log('getFaqData: Using hardcoded fallbackFaqs data.');
  return fallbackFaqs;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  const sheetType = 'SwiperSlides';
  const expectedHeaders = ['id', 'imagesrc', 'imagealt', 'imagehint', 'captiontitle', 'captiontext'];
  const specificHeadersLower = expectedHeaders.map(h => h.toLowerCase());

  console.log(`getSwiperSlides: Attempting to fetch from direct CSV URL: ${SWIPER_SLIDES_CSV_URL}`);
  const rows = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, sheetType, expectedHeaders);

  if (rows && rows.length > 0) {
    let dataRows = rows;
    const headerRow = rows[0].map(h => h.toLowerCase().trim().replace(/\s+/g, ''));
    let columnMap: Record<string, number> = {};

    const isHeaderPresent = specificHeadersLower.every(expHeader => headerRow.includes(expHeader));
    
    if (isHeaderPresent) {
      console.log(`getSwiperSlides: CSV Header row (${specificHeadersLower.join(',')}) detected.`);
      dataRows = rows.slice(1);
      headerRow.forEach((header, index) => {
        if (specificHeadersLower.includes(header)) {
          columnMap[header] = index;
        }
      });
      console.log(`getSwiperSlides: Column map based on headers:`, columnMap);
    } else {
      console.log(`getSwiperSlides: No specific CSV Header (${specificHeadersLower.join(',')}) detected. Assuming fixed order: id,imageSrc,imageAlt,imageHint,captionTitle,captionText.`);
      columnMap = { id: 0, imagesrc: 1, imagealt: 2, imagehint: 3, captiontitle: 4, captiontext: 5 };
    }

    if (dataRows.length > 0) {
      const slides = dataRows.map((row, index) => {
        const id = columnMap.id !== undefined ? (row[columnMap.id]?.trim() || `swiper_csv_${index}`) : `swiper_csv_${index}`;
        const imageSrc = columnMap.imagesrc !== undefined ? (row[columnMap.imagesrc]?.trim() || '') : '';
        const imageAlt = columnMap.imagealt !== undefined ? (row[columnMap.imagealt]?.trim() || '') : '';
        const imageHint = columnMap.imagehint !== undefined ? (row[columnMap.imagehint]?.trim() || undefined) : undefined;
        const captionTitle = columnMap.captiontitle !== undefined ? (row[columnMap.captiontitle]?.trim() || '') : '';
        const captionText = columnMap.captiontext !== undefined ? (row[columnMap.captiontext]?.trim() || '') : '';
        if (!imageSrc && !captionTitle) return null; // Skip if essential data is missing
        return { id, imageSrc, imageAlt, imageHint, captionTitle, captionText };
      }).filter(slide => slide !== null) as SwiperSlideItem[];
      console.log(`getSwiperSlides: Processed ${slides.length} SwiperSlide items from CSV URL. First item:`, slides[0]);
      if (slides.length > 0) return slides;
    } else {
      console.log('getSwiperSlides: No data rows found in CSV from URL after potential header skip.');
    }
  } else {
    console.log('getSwiperSlides: No data returned from CSV URL fetch for SwiperSlides.');
  }
  
  console.log("getSwiperSlides: Using hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export async function getVideos(): Promise<VideoItem[]> {
  console.log("getVideos: Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

export async function getGalleryYears(): Promise<GalleryYearData[]> {
    console.log("getGalleryYears: Using hardcoded fallbackGalleryYears.");
    return fallbackGalleryYears;
}
export async function getGalleryDays(): Promise<GalleryDayData[]> {
    console.log("getGalleryDays: Using hardcoded fallbackGalleryDays.");
    return fallbackGalleryDays;
}
export async function getGalleryImages(): Promise<GalleryImageItem[]> {
    console.log("getGalleryImages: Using hardcoded fallbackGalleryImages.");
    return fallbackGalleryImages;
}

// --- Helper function to fetch sheet data using Google Sheets API (kept for potential future use) ---
interface FetchSheetDataOptions {
  sheetName: string;
  range?: string;
}
const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID_FROM_ENV = env.GOOGLE_SHEETS_SPREADSHEET_ID;

async function fetchSheetData<T extends string[]>(
  options: FetchSheetDataOptions
): Promise<T[] | null> {
  if (!API_KEY || !SPREADSHEET_ID_FROM_ENV) {
    console.warn(`Skipping API fetch for ${options.sheetName} due to missing API_KEY or SPREADSHEET_ID.`);
    return null;
  }
  const { sheetName, range } = options;
  const sheetRange = range ? `${sheetName}!${range}` : sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID_FROM_ENV}/values/${encodeURIComponent(sheetRange)}?key=${API_KEY}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=ROWS`;

  console.log(`Attempting to fetch data from Google Sheet API: ${sheetName}, Range: ${sheetRange}`);
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Error fetching sheet data for ${sheetName} via API: ${response.status} ${response.statusText}. Body: ${errorBody}`
      );
      return null;
    }
    const data = await response.json();
    console.log(`Successfully fetched data for ${sheetName} via API. Num rows: ${data.values ? data.values.length : 0}`);
    return (data.values || []) as T[];
  } catch (error) {
    console.error(`Exception fetching sheet data for ${sheetName} via API:`, error);
    return null;
  }
}
