
// src/services/googleSheetsService.ts
'use server';

import { env } from 'process';

// --- CSV URLs ---
// החלף את הקישורים הבאים בקישורי ה-CSV הישירים שלך
const FAQ_CSV_URL = "הקישור_שלך_ל_FAQ_כ_CSV_כפי_שהוגדר_קודם";
const SWIPER_SLIDES_CSV_URL = "הקישור_שלך_ל_SwiperSlides_כ_CSV_כפי_שהוגדר_קודם";
const TESTIMONIALS_CSV_URL = "הקישור_החדש_שתספק_ל_Testimonials_כ_CSV"; // <--- כאן יוכנס הקישור החדש
// הוסף כאן קבועים עבור Videos, GalleryYears, GalleryDays, GalleryImages כאשר תספק את הקישורים שלהם

// --- Fallback Data (נתוני גיבוי) ---
// ... (fallbackSiteConfig, fallbackFaqs, fallbackSwiperSlides יישארו כפי שהם) ...

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (מקומי)", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (מקומי)", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (מקומי)", author: "משפחת אברמוביץ, בני ברק" },
];

const fallbackVideos: VideoItem[] = [
    { id: "song1_fallback", videoId: "6aRI-emxQlU", title: "שיר הנושא - קעמפ גן ישראל (מקומי)", category: "campSong" },
    { id: "song2_fallback", videoId: "jNQXAC9IVRw", title: "המנון הקעמפ (דוגמה מקומית)", category: "campSong" },
    { id: "summary1_fallback", videoId: "gqgfz0h0om4", title: "סרטון סיכום קעמפ תשפ\"ג (מקומי)", category: "summaryVideo" },
];

// ... (שאר הגדרות ה-fallback כפי שהיו) ...

// --- Data Type Interfaces ---
// ... (ממשקי הטיפוסים כפי שהיו: FaqItem, ContactDetails, Testimonial, SwiperSlideItem, VideoItem, וכו') ...
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

// ... (שאר הממשקים) ...

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
      .filter(row => row.length > 0 && row.some(cell => cell.trim() !== '')); // Remove empty rows

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
  const expectedHeaders = ['id', 'question', 'answer'];
  console.log(`getFaqData: Attempting to fetch from direct CSV URL: ${FAQ_CSV_URL}`);
  const rows = await fetchCsvDataFromUrl(FAQ_CSV_URL, 'FAQ', expectedHeaders);

  if (rows && rows.length > 0) {
    let dataRows = rows;
    const headerRow = rows[0].map(h => h.toLowerCase().trim().replace(/\s+/g, ''));
    let columnMap: Record<string, number> = {};

    const isHeaderPresent = expectedHeaders.every(expHeader => headerRow.includes(expHeader));

    if (isHeaderPresent) {
      console.log("getFaqData: CSV Header row (id,question,answer) detected.");
      dataRows = rows.slice(1);
      headerRow.forEach((header, index) => {
        columnMap[header] = index;
      });
      console.log("getFaqData: Column map based on headers:", columnMap);
    } else {
      console.log("getFaqData: No specific CSV Header (id,question,answer) detected. Assuming fixed order: [id (col1, optional)], [question (col1/2)], [answer (col2/3)].");
      if (rows[0].length === 2) { // question, answer
        columnMap = { question: 0, answer: 1 };
         console.log("getFaqData: Assumed 2 columns: question, answer");
      } else if (rows[0].length >= 3) { // id, question, answer
        columnMap = { id: 0, question: 1, answer: 2 };
        console.log("getFaqData: Assumed 3+ columns: id, question, answer");
      } else {
        console.warn("getFaqData: CSV does not have enough columns for question and answer. Using fallback.");
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
  
  // Fallback to Sheets API if CSV fails and API_KEY is available
  if (API_KEY && SPREADSHEET_ID_FROM_ENV) {
    const sheetName = 'FAQ'; // Assuming your sheet is named 'FAQ'
    console.log(`getFaqData: Attempting to fetch from Google Sheets API, Sheet: ${sheetName}`);
    try {
      const rowsFromApi = await fetchSheetData<[string, string, string]>({ sheetName, range: 'A:C' }); // Fetching id, question, answer
      if (rowsFromApi && rowsFromApi.length > 1) { // Check if there's more than just a header
        const faqs = rowsFromApi.slice(1).map((row, index) => ({ // Skip header row
          id: row[0]?.trim() || `faq_api_${index}`,
          question: row[1]?.trim() || '',
          answer: row[2]?.trim() || '',
          delay: String(index * 50),
        })).filter(faq => faq.question || faq.answer); // Filter out empty items
        console.log(`getFaqData: Processed ${faqs.length} FAQ items from Google Sheets API.`);
        if (faqs.length > 0) return faqs;
      } else {
         console.log(`getFaqData: No data rows (or only header) in ${sheetName} sheet via API. Using fallbackFaqs.`);
      }
    } catch (error) {
      console.error('getFaqData: Error processing FAQ data from Google Sheets API, using fallbackFaqs:', error);
    }
  }
  
  console.log('getFaqData: Using hardcoded fallbackFaqs data.');
  return fallbackFaqs;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const expectedHeaders = ['id', 'quote', 'author'];
  console.log(`getTestimonials: Attempting to fetch from direct CSV URL: ${TESTIMONIALS_CSV_URL}`);
  const rows = await fetchCsvDataFromUrl(TESTIMONIALS_CSV_URL, 'Testimonials', expectedHeaders);

  if (rows && rows.length > 0) {
    let dataRows = rows;
    const headerRow = rows[0].map(h => h.toLowerCase().trim().replace(/\s+/g, ''));
    let columnMap: Record<string, number> = {};
    const isHeaderPresent = expectedHeaders.every(expHeader => headerRow.includes(expHeader));

    if (isHeaderPresent) {
      console.log("getTestimonials: CSV Header row (id,quote,author) detected.");
      dataRows = rows.slice(1);
      headerRow.forEach((header, index) => { columnMap[header] = index; });
    } else {
      console.log("getTestimonials: No specific CSV Header, assuming fixed order: id, quote, author.");
      columnMap = { id: 0, quote: 1, author: 2 };
    }
    
    if (dataRows.length > 0) {
      const testimonials = dataRows.map((row, index) => {
        const id = row[columnMap.id]?.trim() || `testimonial_csv_${index}`;
        const quote = row[columnMap.quote]?.trim() || '';
        const author = row[columnMap.author]?.trim() || '';
        if (!quote && !author) return null;
        return { id, quote, author };
      }).filter(t => t !== null) as Testimonial[];
      console.log(`getTestimonials: Processed ${testimonials.length} items. First:`, testimonials[0]);
      if (testimonials.length > 0) return testimonials;
    }
  }
  console.log("getTestimonials: Using hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  const expectedHeaders = ['id', 'imagesrc', 'imagealt', 'imagehint', 'captiontitle', 'captiontext'];
  console.log(`getSwiperSlides: Attempting to fetch from direct CSV URL: ${SWIPER_SLIDES_CSV_URL}`);
  const rows = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, 'SwiperSlides', expectedHeaders);

  if (rows && rows.length > 0) {
    let dataRows = rows;
    const headerRow = rows[0].map(h => h.toLowerCase().trim().replace(/\s+/g, ''));
    let columnMap: Record<string, number> = {};
    const isHeaderPresent = expectedHeaders.every(expHeader => headerRow.includes(expHeader));

    if (isHeaderPresent) {
      console.log("getSwiperSlides: CSV Header row detected.");
      dataRows = rows.slice(1);
      headerRow.forEach((header, index) => { columnMap[header] = index; });
      console.log("getSwiperSlides: Column map based on headers:", columnMap);
    } else {
      console.log("getSwiperSlides: No specific CSV Header, assuming fixed order: id,imageSrc,imageAlt,imageHint,captionTitle,captionText.");
      columnMap = { id: 0, imagesrc: 1, imagealt: 2, imagehint: 3, captiontitle: 4, captiontext: 5 };
    }

    if (dataRows.length > 0) {
      const slides = dataRows.map((row, index) => {
        const id = row[columnMap.id]?.trim() || `swiper_csv_${index}`;
        const imageSrc = row[columnMap.imagesrc]?.trim() || '';
        const imageAlt = row[columnMap.imagealt]?.trim() || '';
        const imageHint = row[columnMap.imagehint]?.trim() || undefined;
        const captionTitle = row[columnMap.captiontitle]?.trim() || '';
        const captionText = row[columnMap.captiontext]?.trim() || '';
        if (!imageSrc && !captionTitle) return null;
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
  // TODO: Implement CSV fetching for Videos similar to SwiperSlides and FAQ
  // For now, returning fallback
  console.log("getVideos: Returning hardcoded fallbackVideos. CSV fetching not yet implemented for this type.");
  return fallbackVideos;
}

// ... (פונקציות הגלריה יישארו עם fallback לעת עתה) ...
export async function getGalleryYears(): Promise<GalleryYearData[]> {
    console.log("getGalleryYears: Using fallback data. CSV fetching not yet implemented for this type.");
    return fallbackGalleryYears;
}
export async function getGalleryDays(): Promise<GalleryDayData[]> {
    console.log("getGalleryDays: Using fallback data. CSV fetching not yet implemented for this type.");
    return fallbackGalleryDays;
}
export async function getGalleryImages(): Promise<GalleryImageItem[]> {
    console.log("getGalleryImages: Using fallback data. CSV fetching not yet implemented for this type.");
    return fallbackGalleryImages;
}

// --- Helper function to fetch sheet data using Google Sheets API ---
// ... (fetchSheetData as it was) ...
async function fetchSheetData<T extends string[]>(
  options: FetchSheetDataOptions
): Promise<T[] | null> {
  if (!API_KEY || !SPREADSHEET_ID_FROM_ENV) {
    console.warn(`Skipping API fetch for ${options.sheetName} due to missing API_KEY or SPREADSHEET_ID.`);
    return null;
  }
// ... (rest of the function)
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
interface FetchSheetDataOptions {
  sheetName: string;
  range?: string;
}
const API_KEY = env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID_FROM_ENV = env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Fallback data structures (copied from previous state for reference)
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
    galleryPageTitle: "גלריית תמונות (סטטי)",
    summaryVideosPageTitle: "כל סרטוני הסיכום (סטטי)",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ? (מקומי)", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ? (מקומי)", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1 (מקומי)", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים! (מקומי)", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2 (מקומי)", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת! (מקומי)", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
];

const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad", yearName: 'ה\'תשפ"ד (סטטי)', yearImage: "https://placehold.co/300x300.png?text=Static-2024", yearImageHint: "camp collage" },
];
const fallbackGalleryDays: GalleryDayData[] = [
  { yearSlug: "tashpad", daySlug: "day1", dayName: "היום הראשון (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D1", thumbnailHint: "camp activity" },
];
const fallbackGalleryImages: GalleryImageItem[] = [
  { yearSlug: "tashpad", daySlug: "day1", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1", alt: "תמונה 1 סטטית", hint: "children fun" },
];

// --- Data Type Interfaces ---
export interface FaqItem { id: string; question: string; answer: string; delay?: string; }
export interface ContactDetails { officeAddress?: string; phoneNumber?: string; email?: string; contactHours?: string;}
// Testimonial interface is already defined
export interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | string; }
export interface GalleryYearData { yearSlug: string; yearName: string; yearImage: string; yearImageHint?: string; }
export interface GalleryDayData { yearSlug: string; daySlug: string; dayName: string; thumbnail: string; thumbnailHint?: string; }
export interface GalleryImageItem { yearSlug: string; daySlug: string;  imageOrder?: number; src: string; alt: string; hint?: string; }

    