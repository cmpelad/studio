
// src/services/googleSheetsService.ts

// --- Fallback Data ---
// Make sure these are EXPORTED if AppInitializer or other modules import them directly
export const fallbackSiteConfig: SiteConfig = {
    siteTitle: "קעמפ גן ישראל - אלעד",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0", 
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "קדימון קעמפ גן ישראל אלעד",
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbWwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: "המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד",
    contactPhoneNumber: "050-1234567",
    contactEmail: "office@camp-elad.org.il",
    contactHours: "ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00",
    principalName: "הרב מנחם מענדל גרינפלד",
    principalMessageParagraph1: "הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות.",
    principalMessageParagraph2: "הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד!",
    principalImageSrc: "https://placehold.co/400x500.png?text=Principal",
    principalImageAlt: "מנהל הקעמפ הרב מנחם מענדל גרינפלד",
    principalImageHint: "rabbi portrait",
    aboutTitle: "קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה!",
    aboutParagraph1: "קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל.",
    aboutParagraph2: "הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח.",
    aboutImageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    aboutImageAlt: "קבוצת ילדים בפעילות קעמפ",
    aboutImageHint: "camp activity",
    galleryPageTitle: "גלריית תמונות",
    summaryVideosPageTitle: "כל סרטוני הסיכום",
    galleryTashpadYearImage: "https://placehold.co/300x300.png?text=תשפד-שנה",
};

export const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: fallbackSiteConfig.heroImageSrc || "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.heroImageAlt || "קדימון קעמפ גן ישראל אלעד",
  imageHint: fallbackSiteConfig.heroImageHint || "children summer camp",
  videoId: fallbackSiteConfig.heroVideoId || "b2SaA1dYwl0",
  ctaButtonText: "להרשמה לקעמפ - לחצו כאן!"
};

export const fallbackPrincipalMessageData: PrincipalMessageData = {
  pageTitle: "דבר מנהל הקעמפ",
  principalName: fallbackSiteConfig.principalName || "הרב מנחם מענדל גרינפלד",
  messageParagraph1: fallbackSiteConfig.principalMessageParagraph1 || "הורים וחניכים יקרים...",
  messageParagraph2: fallbackSiteConfig.principalMessageParagraph2 || "הצוות המסור שלנו...",
  imageSrc: fallbackSiteConfig.principalImageSrc || "https://placehold.co/400x500.png?text=Principal",
  imageAlt: fallbackSiteConfig.principalImageAlt || "מנהל הקעמפ",
  imageHint: fallbackSiteConfig.principalImageHint || "rabbi portrait",
};

export const fallbackAboutSectionContentData: AboutSectionContentData = {
  sectionTitle: fallbackSiteConfig.aboutTitle || "אודות הקעמפ",
  cardTitle: fallbackSiteConfig.aboutTitle || "אודות הקעמפ",
  paragraph1: fallbackSiteConfig.aboutParagraph1 || "קעמפ גן ישראל אלעד מציע...",
  paragraph2: fallbackSiteConfig.aboutParagraph2 || "הצוות המסור שלנו...",
  imageSrc: fallbackSiteConfig.aboutImageSrc || "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.aboutImageAlt || "קבוצת ילדים בפעילות",
  imageHint: fallbackSiteConfig.aboutImageHint || "camp activity",
};

export const fallbackContactInfoData: ContactInfoData = {
  pageTitle: "צור קשר",
  detailsTitle: "פרטי התקשרות",
  officeAddress: "המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד",
  phoneNumber: "050-1234567",
  email: "office@camp-elad.org.il",
  hoursTitle: "שעות מענה טלפוני:",
  hoursDetails: "ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00",
  additionalInfo: "ניתן להשאיר הודעה ונחזור אליכם בהקדם.",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ?", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו." },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ?", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש." },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל?", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש." },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ?", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות." },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים?", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים." },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום!", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח!", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה!", author: "משפחת אברמוביץ, בני ברק" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים!", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת!", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 3", imageHint: "camp games", captionTitle: "פעילויות מגוונות ומרתקות!", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
];

const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: "שיר הנושא - קעמפ גן ישראל", category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: "המנון הקעמפ", category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום קעמפ תשפ\"ג", category: 'summaryVideo' },
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום ראשי", category: 'mainSummaryVideo' },
];

const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad", yearName: "ה'תשפ\"ד", yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד-שנה", yearImageHint: "camp collage" },
];

const fallbackGalleryDays: GalleryDayData[] = Array.from({ length: 10 }, (_, i) => ({
  yearSlug: "tashpad",
  daySlug: `day${i + 1}`,
  dayName: `היום ה-${i + 1}`,
  thumbnail: `https://placehold.co/400x300.png?text=תשפד-יום${i + 1}`,
  thumbnailHint: "camp activity"
}));

const fallbackGalleryImages: GalleryImageItem[] = Array.from({ length: 10 }).flatMap((_, dayIndex) => 
  Array.from({ length: 5 }, (__, imgIndex) => ({
    yearSlug: "tashpad",
    daySlug: `day${dayIndex + 1}`,
    imageOrder: imgIndex + 1,
    src: `https://placehold.co/600x400.png?text=תשפד-יום${dayIndex+1}-תמונה${imgIndex+1}`,
    alt: `תשפ"ד - יום ${dayIndex+1} - תמונה ${imgIndex+1}`,
    hint: "placeholder image"
  }))
);


// --- Types ---
export interface SiteConfig {
  [key: string]: string | undefined;
  siteTitle?: string;
  siteDescription?: string;
  logoImageSrc?: string;
  heroVideoId?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImageHint?: string;
  registrationFormUrl?: string;
  paymentRedirectUrl?: string;
  contactOfficeAddress?: string;
  contactPhoneNumber?: string;
  contactEmail?: string;
  contactHours?: string;
  principalName?: string;
  principalMessageParagraph1?: string;
  principalMessageParagraph2?: string;
  principalImageSrc?: string;
  principalImageAlt?: string;
  principalImageHint?: string;
  aboutTitle?: string;
  aboutParagraph1?: string;
  aboutParagraph2?: string;
  aboutImageSrc?: string;
  aboutImageAlt?: string;
  aboutImageHint?: string;
  galleryPageTitle?: string;
  summaryVideosPageTitle?: string;
  galleryTashpadYearImage?: string;
}

export interface HeroConfigData {
  [key: string]: string | undefined;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
  videoId?: string;
  ctaButtonText?: string;
}

export interface PrincipalMessageData {
  [key: string]: string | undefined;
  pageTitle?: string;
  principalName?: string;
  messageParagraph1?: string;
  messageParagraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
}

export interface AboutSectionContentData {
  [key: string]: string | undefined;
  sectionTitle?: string;
  cardTitle?: string;
  paragraph1?: string;
  paragraph2?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
}

export interface ContactInfoData {
  [key: string]: string | undefined;
  pageTitle?: string;
  detailsTitle?: string;
  officeAddress?: string;
  phoneNumber?: string;
  email?: string;
  hoursTitle?: string;
  hoursDetails?: string;
  additionalInfo?: string;
}

export interface FaqItem { id: string; question: string; answer?: string; delay?: string; }
export interface Testimonial { id: string; quote: string; author: string;}
export interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | 'mainSummaryVideo' | string; }

export interface GalleryYearData {
  yearSlug: "tashpad";
  yearName: string;
  yearImage: string;
  yearImageHint?: string;
}

export interface GalleryDayData {
  yearSlug: "tashpad";
  daySlug: string;
  dayName: string;
  thumbnail: string;
  thumbnailHint?: string;
}

export interface GalleryImageItem {
  yearSlug: "tashpad";
  daySlug: string;
  imageOrder?: number;
  src: string;
  alt: string;
  hint?: string;
}

// --- CSV URLs & GIDs ---
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

// Direct CSV URLs for specific sheets
const FAQ_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=837718949&single=true&output=csv` : null;
const SWIPER_SLIDES_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=421516172&single=true&output=csv` : null;

// Placeholders for other sheets - replace with actual GIDs if you create these sheets
const HERO_CONFIG_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=HERO_CONFIG_GID_PLACEHOLDER&single=true&output=csv` : null;
const PRINCIPAL_MESSAGE_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=PRINCIPAL_MESSAGE_GID_PLACEHOLDER&single=true&output=csv` : null;
const ABOUT_SECTION_CONTENT_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=ABOUT_SECTION_CONTENT_GID_PLACEHOLDER&single=true&output=csv` : null;
const CONTACT_INFO_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=CONTACT_INFO_GID_PLACEHOLDER&single=true&output=csv` : null;
const TESTIMONIALS_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=TESTIMONIALS_GID_PLACEHOLDER&single=true&output=csv` : null;
const VIDEOS_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=VIDEOS_GID_PLACEHOLDER&single=true&output=csv` : null;
const GALLERY_IMAGES_TASHPAD_CSV_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=GALLERY_IMAGES_TASHPAD_GID_PLACEHOLDER&single=true&output=csv` : null;

// --- Helper: Fetch and Parse CSV Data ---
async function fetchCsvDataFromUrl(
  csvUrl: string | null,
  sheetNameForLog: string
): Promise<string[][] | null> {
  if (!csvUrl || csvUrl.includes("_PLACEHOLDER")) {
    console.log(`${sheetNameForLog}: CSV URL is a placeholder or invalid. Skipping fetch for ${sheetNameForLog}.`);
    return null;
  }
  try {
    console.log(`${sheetNameForLog}: Attempting to fetch CSV from URL: ${csvUrl}`);
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      console.error(`${sheetNameForLog}: Error fetching CSV from ${csvUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    console.log(`${sheetNameForLog}: Successfully fetched CSV data. Raw CSV Text length: ${text.length}`);
    
    const rows = text.split(/\r?\n/).map(row => {
      const parsedRow: string[] = [];
      let currentCell = "";
      let inQuotes = false;
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
            if (inQuotes && i + 1 < row.length && row[i+1] === '"') {
                currentCell += '"';
                i++; 
                continue;
            }
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            parsedRow.push(currentCell.trim());
            currentCell = "";
        } else {
            currentCell += char;
        }
      }
      parsedRow.push(currentCell.trim());
      return parsedRow;
    }).filter(row => row.some(cell => cell !== "" || cell === "0")); 

    if (rows.length === 0) {
        console.log(`${sheetNameForLog}: CSV is empty or contains only empty rows.`);
        return null;
    }

    console.log(`${sheetNameForLog}: Parsed CSV Data (first 5 rows):`, rows.slice(0, 5));
    return rows;
  } catch (error) {
    console.error(`${sheetNameForLog}: Exception fetching or parsing CSV data from ${csvUrl}:`, error);
    return null;
  }
}

function csvToKeyValueObject<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T,
  sheetNameForLog: string
): T {
  const result = { ...fallbackData };
  if (!parsedData || parsedData.length < 2) { // Need at least header and one data row
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Not enough data (parsedData is null, or < 2 rows). Using fallback.`);
    return result;
  }

  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  const keyHeaderIndex = headerRow.indexOf('key');
  const valueHeaderIndex = headerRow.indexOf('value');

  if (keyHeaderIndex === -1 || valueHeaderIndex === -1) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Headers 'key' and/or 'value' not found. CSV Header: ${headerRow.join(',')}. Using fallback.`);
    return result;
  }
  console.log(`${sheetNameForLog} (csvToKeyValueObject): Headers found. Key column: ${keyHeaderIndex}, Value column: ${valueHeaderIndex}`);

  for (let i = 1; i < parsedData.length; i++) {
    const row = parsedData[i];
    if (row.length > Math.max(keyHeaderIndex, valueHeaderIndex)) {
      const key = row[keyHeaderIndex];
      const value = row[valueHeaderIndex];
      if (key) {
        (result as Record<string, any>)[key] = value !== undefined ? value : '';
      }
    } else {
       console.warn(`${sheetNameForLog} (csvToKeyValueObject): Row ${i} does not have enough columns for key/value. Skipping.`);
    }
  }
  console.log(`${sheetNameForLog} (csvToKeyValueObject): Final Key-Value object:`, result);
  return result;
}


function csvToObjectsArray<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T[],
  sheetNameForLog: string,
  expectedHeaders: (keyof T)[]
): T[] {
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No parsed CSV data, returning fallback.`);
    return fallbackData;
  }

  let dataStartIndex = 0;
  const columnMap: Record<string, number> = {};
  const headerRowOriginal = parsedData[0];
  const headerRowLowerCase = headerRowOriginal.map(h => h.toLowerCase().trim());
  
  const expectedHeadersLowerCase = expectedHeaders.map(h => String(h).toLowerCase());
  
  // Check if the first row is a header row by seeing if it matches expected headers
  let isHeaderRowPresent = expectedHeadersLowerCase.every(expectedHeader => 
    headerRowLowerCase.includes(expectedHeader)
  );

  if (sheetNameForLog === "FAQ" && headerRowLowerCase.includes('question') && headerRowLowerCase.includes('answer') && !headerRowLowerCase.includes('id')) {
    isHeaderRowPresent = true; // Special case for FAQ - consider it a header if question and answer exist
    columnMap['id'] = -1; // Mark ID for auto-generation
    columnMap['question'] = headerRowLowerCase.indexOf('question');
    columnMap['answer'] = headerRowLowerCase.indexOf('answer');
    console.log(`${sheetNameForLog} (csvToObjectsArray): Detected FAQ-specific headers (question, answer). ID will be auto-generated.`);
  } else if (isHeaderRowPresent) {
    expectedHeadersLowerCase.forEach(expectedHeader => {
      columnMap[expectedHeader] = headerRowLowerCase.indexOf(expectedHeader);
    });
    console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row detected and matches expected. Column map:`, columnMap);
  } else {
    console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row does not fully match expected or is different. Expected one of: "${expectedHeadersLowerCase.join(', ')}", Got: "${headerRowLowerCase.join(', ')}". Assuming direct column order or specific parsing needed.`);
    // Fallback to positional mapping if headers are not fully matched
    expectedHeadersLowerCase.forEach((header, index) => {
      if (!(header in columnMap) && headerRowLowerCase.length > index) {
        columnMap[header] = index; // Map by position
      }
    });
    console.log(`${sheetNameForLog} (csvToObjectsArray): Using assumed positional mapping:`, columnMap);
    isHeaderRowPresent = false; // Treat the first row as data
  }
  
  dataStartIndex = isHeaderRowPresent ? 1 : 0;
  const objects: T[] = [];
  const dataRowsToParse = parsedData.slice(dataStartIndex);

  if (dataRowsToParse.length === 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No data rows to process. Returning fallback.`);
    return fallbackData;
  }

  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    if (row.every(cell => cell === "")) continue; 

    const obj: Partial<T> = {};
    let hasData = false;
    for (const headerKey of expectedHeaders) {
      const headerString = String(headerKey).toLowerCase();
      let colIndex = columnMap[headerString];

      if (headerString === 'id' && colIndex === -1) { // For auto-generated ID in FAQ
        obj[headerKey] = `${sheetNameForLog.toLowerCase()}_csv_${i}` as any;
        hasData = true; // Mark as having data even if only ID is auto-generated
        continue;
      }
      
      if (colIndex !== undefined && colIndex < row.length) {
        obj[headerKey] = row[colIndex] as any;
        if (row[colIndex] !== "" && row[colIndex] !== undefined) hasData = true;
      } else {
         console.warn(`${sheetNameForLog} (csvToObjectsArray): Missing data for header '${headerString}' in row ${i + dataStartIndex}. Row content: ${row.join(',')}.`);
        obj[headerKey] = undefined; // or a default value like '' or null if appropriate
      }
    }
    if (hasData) {
        objects.push(obj as T);
    }
  }

  if (objects.length > 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): Processed ${objects.length} items from CSV. First item:`, objects[0]);
    return objects;
  } else {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No valid objects created from CSV data. Returning fallback.`);
    return fallbackData;
  }
}


// --- Data Fetching Functions ---

export async function getSiteConfig(): Promise<SiteConfig> {
  console.log("getSiteConfig: Returning hardcoded fallbackSiteConfig data only.");
  return fallbackSiteConfig;
}

export async function getHeroConfigData(): Promise<HeroConfigData> {
  const parsedData = await fetchCsvDataFromUrl(HERO_CONFIG_CSV_URL, "HeroConfig");
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackHeroConfigData, "HeroConfig");
  }
  console.log("getHeroConfigData: Using hardcoded fallbackHeroConfigData due to CSV fetch/parse failure.");
  return fallbackHeroConfigData;
}

export async function getPrincipalMessageData(): Promise<PrincipalMessageData> {
  const parsedData = await fetchCsvDataFromUrl(PRINCIPAL_MESSAGE_CSV_URL, "PrincipalMessage");
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackPrincipalMessageData, "PrincipalMessage");
  }
  console.log("getPrincipalMessageData: Using hardcoded fallbackPrincipalMessageData due to CSV fetch/parse failure.");
  return fallbackPrincipalMessageData;
}

export async function getAboutSectionContentData(): Promise<AboutSectionContentData> {
  const parsedData = await fetchCsvDataFromUrl(ABOUT_SECTION_CONTENT_CSV_URL, "AboutSectionContent");
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackAboutSectionContentData, "AboutSectionContent");
  }
  console.log("getAboutSectionContentData: Using hardcoded fallbackAboutSectionContentData due to CSV fetch/parse failure.");
  return fallbackAboutSectionContentData;
}

export async function getContactInfoData(): Promise<ContactInfoData> {
  const parsedData = await fetchCsvDataFromUrl(CONTACT_INFO_CSV_URL, "ContactInfo");
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackContactInfoData, "ContactInfo");
  }
  console.log("getContactInfoData: Using hardcoded fallbackContactInfoData due to CSV fetch/parse failure.");
  return fallbackContactInfoData;
}


export async function getFaqData(): Promise<FaqItem[]> {
  const directCsvUrl = FAQ_CSV_URL; // Using the constant defined at the top
  console.log(`FAQ: Attempting to fetch from direct CSV URL: ${directCsvUrl}`);
  const parsedData = await fetchCsvDataFromUrl(directCsvUrl, "FAQ");

  if (parsedData && parsedData.length > 0) {
    const expectedHeaders: (keyof FaqItem)[] = ['id', 'question', 'answer'];
    const faqs = csvToObjectsArray(parsedData, fallbackFaqs, "FAQ", expectedHeaders);
    
    if (faqs.length > 0) {
        console.log(`FAQ: Processed ${faqs.length} FAQ items from CSV URL. First item:`, faqs[0]);
        return faqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
    }
  }
  
  console.log("FAQ: Using hardcoded fallbackFaqs due to CSV fetch/parse failure or empty CSV.");
  return fallbackFaqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
}


export async function getTestimonials(): Promise<Testimonial[]> {
  const parsedData = await fetchCsvDataFromUrl(TESTIMONIALS_CSV_URL, "Testimonials");
  if (parsedData && parsedData.length > 0) {
    const testimonials = csvToObjectsArray(parsedData, fallbackTestimonials, "Testimonials", ['id', 'quote', 'author']);
    if (testimonials.length > 0) {
      console.log(`Testimonials: Processed ${testimonials.length} items. First item:`, testimonials[0]);
      return testimonials;
    }
  }
  console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  const directCsvUrl = SWIPER_SLIDES_CSV_URL; // Using the constant
  console.log(`SwiperSlides: Attempting to fetch CSV from URL: ${directCsvUrl}`);
  const parsedData = await fetchCsvDataFromUrl(directCsvUrl, "SwiperSlides");
  if (parsedData && parsedData.length > 0) {
    const slides = csvToObjectsArray(parsedData, fallbackSwiperSlides, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
     if (slides.length > 0) {
      console.log(`SwiperSlides: Processed ${slides.length} items. First item:`, slides[0]);
      return slides;
    }
  }
  console.log("getSwiperSlides: Returning hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export async function getVideos(): Promise<VideoItem[]> {
 const parsedData = await fetchCsvDataFromUrl(VIDEOS_CSV_URL, "Videos");
  if (parsedData && parsedData.length > 0) {
    const videos = csvToObjectsArray(parsedData, fallbackVideos, "Videos", ['id', 'videoId', 'title', 'category']);
     if (videos.length > 0) {
      console.log(`Videos: Processed ${videos.length} items. First item:`, videos[0]);
      return videos;
    }
  }
  console.log("getVideos: Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

// --- Gallery Data Functions ---
export async function getGalleryYears(): Promise<GalleryYearData[]> {
  // This will now be static as per your request
  const yearData: GalleryYearData = {
    yearSlug: "tashpad",
    yearName: fallbackSiteConfig.galleryTashpadYearImage ? fallbackSiteConfig.galleryTashpadYearImage.split('text=')[1] || `ה'תשפ"ד` : `ה'תשפ"ד`,
    yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד",
    yearImageHint: "camp collage"
  };
  console.log("getGalleryYears: Returning static data for Tashpad:", yearData);
  return [yearData];
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
  console.log(`GalleryDays: Attempting to fetch from ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedImageData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImagesTashpad_ForDays");

  if (parsedImageData) {
    const dayMap = new Map<string, { name: string; thumbnail: string; thumbnailHint?: string }>();
    const headerRow = parsedImageData[0].map(h => h.toLowerCase().trim());
    const daySlugIndex = headerRow.indexOf('dayslug');
    const dayNameOverrideIndex = headerRow.indexOf('daynameoverride');
    const srcIndex = headerRow.indexOf('src');
    const hintIndex = headerRow.indexOf('hint');
    const imageOrderIndex = headerRow.indexOf('imageorder');

    if (daySlugIndex === -1 || srcIndex === -1) {
        console.error("GalleryDays: CSV is missing 'daySlug' or 'src' header. Using fallback days.");
        return fallbackGalleryDays.filter(d => d.yearSlug === "tashpad");
    }

    for (let i = 1; i < parsedImageData.length; i++) {
      const row = parsedImageData[i];
      const daySlug = row[daySlugIndex];
      const dayNameOverride = dayNameOverrideIndex !== -1 && row[dayNameOverrideIndex] ? row[dayNameOverrideIndex] : `היום ה-${daySlug.replace('day', '')}`;
      const imageSrc = row[srcIndex];
      const imageHint = hintIndex !== -1 ? row[hintIndex] : 'camp activity';
      const imageOrder = imageOrderIndex !== -1 && row[imageOrderIndex] ? parseInt(row[imageOrderIndex], 10) : Infinity;

      if (daySlug && imageSrc) {
        if (!dayMap.has(daySlug) || (imageOrder === 1 && dayMap.has(daySlug))) {
          dayMap.set(daySlug, {
            name: dayNameOverride,
            thumbnail: imageSrc,
            thumbnailHint: imageHint,
          });
        }
      }
    }
    
    const daysFromSheet: GalleryDayData[] = [];
    // Create entries for day1 to day10, using data from sheet if available, or placeholders
    for (let i = 1; i <= 10; i++) {
        const slug = `day${i}`;
        const dayDataFromMap = dayMap.get(slug);
        if (dayDataFromMap) {
            daysFromSheet.push({
                yearSlug: "tashpad",
                daySlug: slug,
                dayName: dayDataFromMap.name,
                thumbnail: dayDataFromMap.thumbnail,
                thumbnailHint: dayDataFromMap.thumbnailHint
            });
        } else {
            daysFromSheet.push({
                yearSlug: "tashpad",
                daySlug: slug,
                dayName: `היום ה-${i}`, // Fallback name
                thumbnail: `https://placehold.co/400x300.png?text=יום+${i}`,
                thumbnailHint: "placeholder"
            });
        }
    }
    if (daysFromSheet.length > 0) {
      console.log(`GalleryDays: Processed ${daysFromSheet.length} days for Tashpad from CSV / fallbacks.`);
      return daysFromSheet;
    }
  }
  
  console.log(`GalleryDays: No data from CSV for GalleryImagesTashpad_ForDays or CSV URL is null. Returning hardcoded fallback days for Tashpad.`);
  return fallbackGalleryDays.filter(d => d.yearSlug === "tashpad");
}

export async function getGalleryImages(yearSlug: string, daySlug: string): Promise<GalleryImageItem[]> {
  if (yearSlug !== "tashpad") {
    console.log(`getGalleryImages: Requested year ${yearSlug} is not Tashpad. Returning empty array.`);
    return [];
  }
  console.log(`GalleryImages: Attempting to fetch images for ${yearSlug}/${daySlug} from ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImagesTashpad");
  
  if (parsedData) {
    const images = csvToObjectsArray(parsedData, [], "GalleryImagesTashpad", ['daySlug', 'imageOrder', 'src', 'alt', 'hint'])
      .filter(img => img.daySlug === daySlug)
      .map(img => ({ ...img, yearSlug: "tashpad" as "tashpad", imageOrder: Number(img.imageOrder) || 0 }))
      .sort((a, b) => (a.imageOrder || 0) - (b.imageOrder || 0));
    
    if (images.length > 0) {
      console.log(`GalleryImages: Processed ${images.length} images for ${yearSlug}/${daySlug} from CSV.`);
      return images;
    }
  }
  
  console.log(`GalleryImages: No data from CSV for ${yearSlug}/${daySlug} or CSV URL is null. Returning empty array as fallback.`);
  return []; // Return empty array if no images found in CSV for that day.
}

// Explicitly export fallback data if they are directly imported by AppInitializer
// (as per the error message, AppInitializer imports some of these)
export {
  fallbackFaqs,
  fallbackTestimonials,
  fallbackSwiperSlides,
  fallbackVideos,
  fallbackGalleryYears,
  fallbackGalleryDays,
  fallbackGalleryImages
};
