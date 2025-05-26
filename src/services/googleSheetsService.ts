
// src/services/googleSheetsService.ts

// --- Fallback Data (Hardcoded) ---
export const fallbackSiteConfig: SiteConfig = {
    siteTitle: "קעמפ גן ישראל - אלעד",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    // heroVideoId is now managed by HeroConfig
    // heroImageSrc, heroImageAlt, heroImageHint are now managed by HeroConfig
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    // contactOfficeAddress, contactPhoneNumber, contactEmail, contactHours are now managed by ContactInfo
    // principalName, principalMessageParagraph1, etc. are now managed by PrincipalMessage
    // aboutTitle, aboutParagraph1, etc. are now managed by AboutSectionContent
    galleryPageTitle: "גלריית תמונות", // Fallback title
    summaryVideosPageTitle: "כל סרטוני הסיכום", // Fallback title
    galleryTashpadYearImage: "https://placehold.co/300x300.png?text=תשפד-שנה-סטטי", // Fallback image for the year in gallery
};

export const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: "קדימון קעמפ גן ישראל אלעד (סטטי)",
  imageHint: "children summer camp",
  videoId: "b2SaA1dYwl0",
};

export const fallbackPrincipalMessageData: PrincipalMessageData = {
  pageTitle: "דבר מנהל הקעמפ (סטטי)",
  principalName: "הרב מנחם מענדל גרינפלד (סטטי)",
  messageParagraph1: "הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות. (סטטי)",
  messageParagraph2: "הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד! (סטטי)",
  imageSrc: "https://placehold.co/400x500.png?text=Principal-Static",
  imageAlt: "מנהל הקעמפ (סטטי)",
  imageHint: "rabbi portrait",
};

export const fallbackAboutSectionContentData: AboutSectionContentData = {
  sectionTitle: "אודות הקעמפ (סטטי)",
  cardTitle: "קעמפ גן ישראל אלעד (סטטי)",
  paragraph1: "קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל. (סטטי)",
  paragraph2: "הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח. (סטטי)",
  imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: "קבוצת ילדים בפעילות קעמפ (סטטי)",
  imageHint: "camp activity",
};

export const fallbackContactInfoData: ContactInfoData = {
  pageTitle: "צור קשר (סטטי)",
  detailsTitle: "פרטי התקשרות (סטטי)",
  officeAddress: "המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (סטטי)",
  phoneNumber: "050-1234567 (סטטי)",
  email: "office@camp-elad.org.il (סטטי)",
  hoursTitle: "שעות מענה טלפוני: (סטטי)",
  hoursDetails: "ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (סטטי)",
  additionalInfo: "ניתן להשאיר הודעה ונחזור אליכם בהקדם. (סטטי)",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ? (סטטי)", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו." },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ? (סטטי)", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש." },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל? (סטטי)", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש." },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ? (סטטי)", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות." },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים? (סטטי)", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים." },
];

const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (סטטי)", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (סטטי)", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (סטטי)", author: "משפחת אברמוביץ, בני ברק" },
];

const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1 (סטטי)", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים! (סטטי)", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2 (סטטי)", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת! (סטטי)", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 3 (סטטי)", imageHint: "camp games", captionTitle: "פעילויות מגוונות ומרתקות! (סטטי)", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
];

const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: "שיר הנושא - קעמפ גן ישראל (סטטי)", category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: "המנון הקעמפ (דוגמה סטטית)", category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום קעמפ תשפ\"ג (סטטי)", category: 'summaryVideo' },
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום ראשי (סטטי)", category: 'mainSummaryVideo' },
];

const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad", yearName: `ה'תשפ"ד`, yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד-שנה", yearImageHint: "camp collage" },
];

const fallbackGalleryDays: GalleryDayData[] = Array.from({ length: 10 }, (_, i) => ({
  yearSlug: "tashpad",
  daySlug: `day${i + 1}`,
  dayName: `היום ה-${i + 1} (סטטי)`,
  thumbnail: `https://placehold.co/400x300.png?text=Static-D${i+1}-24`,
  thumbnailHint: "camp activity"
}));

const fallbackGalleryImages: GalleryImageItem[] = Array.from({ length: 10 }).flatMap((_, dayIndex) =>
  Array.from({ length: 5 }, (__, imgIndex) => ({
    yearSlug: "tashpad",
    daySlug: `day${dayIndex + 1}`,
    imageOrder: imgIndex + 1,
    src: `https://placehold.co/600x400.png?text=Static-Img${imgIndex+1}-D${dayIndex+1}-24`,
    alt: `תשפ"ד - יום ${dayIndex+1} - תמונה ${imgIndex+1} (סטטי)`,
    hint: "placeholder image"
  }))
);

const fallbackHomePageGallerySwiper: HomePageGallerySwiperItem[] = [
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczNBtFaOAbpOMFUXx9DL4emQxGdSzYm1vjivTyDnUzlHQDWgHtaEy5K3G1OZGyAbhSIkCMkReGJOOnI2OCe_ZpjXz02f3RC4_rjHO2Sslf_pvdSJC-pbboOhWYvYjeCjXtFe9G8spEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1379-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - פעילות מים (סטטי)", imageHint: "camp activity" },
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczPgSy83OmgsgZDuZoPBGqd3nFunosjH2KCqQ3OhDlKeK-MkSzR4Nn70TAtyICq2UjeiCY3ic_ln5uYf0rY5SSNqC_7IkhZ0idDT5kf3wUvkecjvivzQbrwiEizm_61rjRXLVuYgnkfWcBFd1CuS4pFc=w1379-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - מדורה (סטטי)", imageHint: "children outdoors" },
  { imageSrc: "https://picsum.photos/seed/img4/600/400", imageAlt: "תמונה אקראית 4 (סטטי)", imageHint: "placeholder" },
];

// --- Types ---
export interface SiteConfig {
  [key: string]: string | undefined;
  siteTitle?: string;
  siteDescription?: string;
  logoImageSrc?: string;
  heroVideoId?: string; // Kept for fallback if HeroConfig fails
  heroImageSrc?: string; // Kept for fallback
  heroImageAlt?: string; // Kept for fallback
  heroImageHint?: string; // Kept for fallback
  registrationFormUrl?: string;
  paymentRedirectUrl?: string;
  // contactOfficeAddress, etc. are now in ContactInfoData
  // principalName, etc. are now in PrincipalMessageData
  // aboutTitle, etc. are now in AboutSectionContentData
  galleryPageTitle?: string;
  summaryVideosPageTitle?: string;
  galleryTashpadYearImage?: string; // Specific for the static year
}

export interface HeroConfigData {
  [key: string]: string | undefined;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
  videoId?: string;
  // ctaButtonText is hardcoded in HeroSection.tsx
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
  yearSlug: string; // "tashpad"
  yearName: string;
  yearImage: string;
  yearImageHint?: string;
}

export interface GalleryDayData {
  yearSlug: string; // "tashpad"
  daySlug: string;  // e.g., "day1", "day2"
  dayName: string;
  thumbnail: string;
  thumbnailHint?: string;
}

export interface GalleryImageItem {
  yearSlug: string; // "tashpad"
  daySlug: string;
  imageOrder?: number;
  src: string;
  alt: string;
  hint?: string;
}

export interface HomePageGallerySwiperItem {
    imageSrc: string;
    imageAlt?: string;
    imageHint?: string;
}

// --- CSV URLs & GIDs ---
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
// const API_KEY = process.env.GOOGLE_SHEETS_API_KEY; // Not strictly needed for direct CSV links if sheet is public

// --- Direct CSV URLs for specific sheets (replace placeholders with actual GIDs or full URLs) ---
const SITE_CONFIG_CSV_URL = null; // SiteConfig will use fallbackSiteConfig
const HERO_CONFIG_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=567131857&single=true&output=csv`;
const SWIPER_SLIDES_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=421516172&single=true&output=csv`;
const ABOUT_SECTION_CONTENT_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1343173925&single=true&output=csv`;
const PRINCIPAL_MESSAGE_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=222684544&single=true&output=csv`;
const HOMEPAGE_GALLERY_SWIPER_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=949430402&single=true&output=csv`;
const VIDEOS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1597946854&single=true&output=csv`;
const FAQ_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=837718949&single=true&output=csv`;
const TESTIMONIALS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=2115801643&single=true&output=csv`;
const CONTACT_INFO_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1047527670&single=true&output=csv`;

// For the new gallery structure focusing only on "tashpad"
const GALLERY_IMAGES_TASHPAD_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1677460936&single=true&output=csv`; // This will be the main source for gallery images and day names/thumbnails
const GALLERY_DAYS_META_CSV_URL = GALLERY_IMAGES_TASHPAD_CSV_URL; // We'll derive day meta from the images sheet

// --- Helper: Fetch and Parse CSV Data ---
async function fetchCsvDataFromUrl(
  csvUrl: string | null,
  sheetNameForLog: string
): Promise<string[][] | null> {
  if (!csvUrl || csvUrl.includes("GID_PLACEHOLDER") || !SPREADSHEET_ID) {
    console.log(`${sheetNameForLog}: CSV URL is a placeholder, invalid, or SPREADSHEET_ID is missing. Skipping fetch for ${sheetNameForLog}.`);
    return null;
  }
  try {
    console.log(`${sheetNameForLog}: Attempting to fetch CSV from URL: ${csvUrl}`);
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } }); // Revalidate every hour

    if (!response.ok) {
      console.error(`${sheetNameForLog}: Error fetching CSV from ${csvUrl}: ${response.status} ${response.statusText}`);
      return null;
    }
    const text = await response.text();
    if (!text || text.trim() === "") {
      console.log(`${sheetNameForLog}: CSV from ${csvUrl} is empty.`);
      return null;
    }
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
        console.log(`${sheetNameForLog}: CSV is empty or contains only empty rows after basic parsing.`);
        return null;
    }

    console.log(`${sheetNameForLog}: Parsed CSV Data (first 5 rows if available):`, rows.slice(0, 5));
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
  const result = { ...fallbackData }; // Start with fallback
  if (!parsedData || parsedData.length < 2) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Not enough data or no data. Using fallback.`);
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

  let fetchedItems = 0;
  for (let i = 1; i < parsedData.length; i++) {
    const row = parsedData[i];
    if (row.length > Math.max(keyHeaderIndex, valueHeaderIndex)) {
      const key = row[keyHeaderIndex];
      const value = row[valueHeaderIndex];
      if (key && key.trim() !== "") { // Ensure key is not empty
        (result as Record<string, any>)[key] = value !== undefined ? value : '';
        fetchedItems++;
      }
    } else {
       console.warn(`${sheetNameForLog} (csvToKeyValueObject): Row ${i} does not have enough columns. Skipping.`);
    }
  }
  if (fetchedItems > 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Successfully processed ${fetchedItems} key-value pairs from CSV. Result:`, result);
  } else {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No valid key-value pairs processed from CSV. Using fallback.`);
  }
  return result;
}


function csvToObjectsArray<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T[],
  sheetNameForLog: string,
  expectedHeaders: (keyof T)[] // Expected headers as an array of keys from type T
): T[] {
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No parsed CSV data. Returning fallback.`);
    return fallbackData;
  }

  const headerRowOriginal = parsedData[0];
  const headerRowLowerCase = headerRowOriginal.map(h => h.toLowerCase().trim());
  const expectedHeadersLowerCase = expectedHeaders.map(h => String(h).toLowerCase());
  const columnMap: Record<string, number> = {};
  let isHeaderRowPresent = false;

  // Try to map expected headers to actual column indices
  expectedHeadersLowerCase.forEach(expectedHeader => {
    const index = headerRowLowerCase.indexOf(expectedHeader);
    if (index !== -1) {
      columnMap[expectedHeader] = index;
      isHeaderRowPresent = true; // If at least one expected header is found, assume it's a header row
    }
  });
  
  if (isHeaderRowPresent) {
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row detected. Column map based on expected headers:`, columnMap);
  } else {
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row does not match expected or is missing. Expected: "${expectedHeadersLowerCase.join(', ')}", Got: "${headerRowLowerCase.join(', ')}". Assuming direct column order for mapping.`);
      // Fallback to positional mapping if headers are not fully matched or absent
      expectedHeadersLowerCase.forEach((header, index) => {
          // Only map positionally if not already mapped and if CSV has enough columns
          if (!(header in columnMap) && headerRowOriginal.length > index) {
              columnMap[header] = index;
          }
      });
      console.log(`${sheetNameForLog} (csvToObjectsArray): Using assumed positional mapping:`, columnMap);
  }

  const dataStartIndex = isHeaderRowPresent ? 1 : 0;
  const objects: T[] = [];
  const dataRowsToParse = parsedData.slice(dataStartIndex);

  if (dataRowsToParse.length === 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No data rows to process. Returning fallback.`);
    return fallbackData;
  }

  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    // Skip row if all cells are empty, or if it doesn't have enough columns for essential data
    if (row.every(cell => cell === "") || row.length < Math.min(...Object.values(columnMap).filter(idx => idx !== -1))) {
      console.warn(`${sheetNameForLog} (csvToObjectsArray): Skipping empty or malformed row ${i + dataStartIndex}. Row: ${row.join(',')}`);
      continue;
    }

    const obj: Partial<T> = {};
    let hasEssentialData = false;

    for (const headerKey of expectedHeaders) {
      const headerString = String(headerKey).toLowerCase();
      let colIndex = columnMap[headerString];

      // Special handling for FAQ ID generation if 'id' column is missing in CSV
      if (sheetNameForLog === "FAQ" && headerString === 'id' && (colIndex === undefined || colIndex === -1)) {
        obj[headerKey] = `faq_csv_${i}` as any; // Auto-generate ID
        hasEssentialData = true; // Consider ID as essential
        continue;
      }
      
      if (colIndex !== undefined && colIndex !== -1 && colIndex < row.length) {
        obj[headerKey] = row[colIndex] as any;
        // Consider it has data if a non-optional, non-ID key has content
        if (row[colIndex] !== "" && row[colIndex] !== undefined && headerString !== 'id' && headerString !== 'imageorder' && headerString !== 'imagehint' && headerString !== 'thumbnailhint' && headerString !== 'daynameoverride' && headerString !== 'delay') {
          hasEssentialData = true;
        }
      } else {
        if (expectedHeadersLowerCase.includes(headerString)) { // Only warn for expected headers
          console.warn(`${sheetNameForLog} (csvToObjectsArray): Missing data for expected header '${headerString}' in row ${i + dataStartIndex}. Row content: ${row.join(',')}.`);
        }
        obj[headerKey] = undefined;
      }
    }

    if (hasEssentialData) {
        objects.push(obj as T);
    } else {
        console.log(`${sheetNameForLog} (csvToObjectsArray): Row ${i + dataStartIndex} skipped due to missing essential data. Row: ${row.join(',')}`);
    }
  }

  if (objects.length > 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): Processed ${objects.length} items. First item:`, objects[0]);
    return objects;
  } else {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No valid objects created from CSV data. Returning fallback.`);
    return fallbackData;
  }
}


// --- Data Fetching Functions ---

export async function getSiteConfig(): Promise<SiteConfig> {
  // SiteConfig is now always from fallback, as per previous request
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
  console.log(`FAQ: Attempting to fetch CSV from URL: ${FAQ_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ");

  if (parsedData && parsedData.length > 0) {
    const expectedHeaders: (keyof FaqItem)[] = ['id', 'question', 'answer'];
    const faqs = csvToObjectsArray(parsedData, [], "FAQ", expectedHeaders);
    
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
    const testimonials = csvToObjectsArray(parsedData, [], "Testimonials", ['id', 'quote', 'author']);
    if (testimonials.length > 0) {
      console.log(`Testimonials: Processed ${testimonials.length} items. First item:`, testimonials[0]);
      return testimonials;
    }
  }
  console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  console.log(`SwiperSlides: Attempting to fetch CSV from URL: ${SWIPER_SLIDES_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, "SwiperSlides");
  if (parsedData && parsedData.length > 0) {
    const slides = csvToObjectsArray(parsedData, [], "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
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
    const videos = csvToObjectsArray(parsedData, [], "Videos", ['id', 'videoId', 'title', 'category']);
     if (videos.length > 0) {
      console.log(`Videos: Processed ${videos.length} items. First item:`, videos[0]);
      return videos;
    }
  }
  console.log("getVideos: Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

export async function getHomePageGallerySwiperData(): Promise<HomePageGallerySwiperItem[]> {
    const parsedData = await fetchCsvDataFromUrl(HOMEPAGE_GALLERY_SWIPER_CSV_URL, "HomePageGallerySwiper");
    if (parsedData && parsedData.length > 0) {
        const items = csvToObjectsArray(parsedData, [], "HomePageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
        if (items.length > 0) {
            console.log(`HomePageGallerySwiper: Processed ${items.length} items. First item:`, items[0]);
            return items;
        }
    }
    console.log("getHomePageGallerySwiperData: No CSV data, returning fallbackHomePageGallerySwiper.");
    return fallbackHomePageGallerySwiper;
}


// --- Gallery Data Functions (External Gallery) ---
export async function getGalleryYears(): Promise<GalleryYearData[]> {
  // Keep this static as requested, for "ה'תשפ"ד" only
  const yearData: GalleryYearData = {
    yearSlug: "tashpad",
    yearName: `ה'תשפ"ד`, // Static name
    yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד-שנה",
    yearImageHint: "camp collage"
  };
  console.log("getGalleryYears: Returning static data for Tashpad:", yearData);
  return [yearData];
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
  console.log(`GalleryDays: Attempting to fetch from GALLERY_IMAGES_TASHPAD_CSV_URL (also used for days meta): ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedImageData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImagesTashpad_ForDaysMeta");

  const days: GalleryDayData[] = [];
  const daySlugsSeen = new Set<string>();

  if (parsedImageData) {
    const headerRow = parsedImageData[0].map(h => h.toLowerCase().trim());
    const daySlugIndex = headerRow.indexOf('dayslug');
    const dayNameOverrideIndex = headerRow.indexOf('daynameoverride');
    const srcIndex = headerRow.indexOf('src');
    const hintIndex = headerRow.indexOf('thumbnailhint'); // Use thumbnailhint for day's thumbnail hint
    const imageOrderIndex = headerRow.indexOf('imageorder');

    if (daySlugIndex !== -1 && srcIndex !== -1) {
      console.log("GalleryDays: Headers found in GalleryImagesTashpad CSV for deriving days meta.");
      // Create a map to get the first image (or imageOrder=1) as thumbnail
      const dayThumbnails = new Map<string, { src: string; hint?: string; nameOverride?: string }>();

      for (let i = 1; i < parsedImageData.length; i++) {
        const row = parsedImageData[i];
        const daySlug = row[daySlugIndex];
        const imageSrc = row[srcIndex];
        const imageOrder = imageOrderIndex !== -1 && row[imageOrderIndex] ? parseInt(row[imageOrderIndex], 10) : Infinity;
        const nameOverride = dayNameOverrideIndex !== -1 ? row[dayNameOverrideIndex] : undefined;
        const thumbHint = hintIndex !== -1 ? row[hintIndex] : 'camp activity';

        if (daySlug && imageSrc) {
          if (!dayThumbnails.has(daySlug) || imageOrder === 1) {
            dayThumbnails.set(daySlug, { src: imageSrc, hint: thumbHint, nameOverride });
          }
        }
      }
      
      // Ensure 10 days, using data from sheet if available
      for (let i = 1; i <= 10; i++) {
        const currentDaySlug = `day${i}`;
        const dayMeta = dayThumbnails.get(currentDaySlug);
        
        days.push({
          yearSlug: "tashpad",
          daySlug: currentDaySlug,
          dayName: dayMeta?.nameOverride || `היום ה-${i}`,
          thumbnail: dayMeta?.src || `https://placehold.co/400x300.png?text=יום-${i}`,
          thumbnailHint: dayMeta?.hint || "activity"
        });
        daySlugsSeen.add(currentDaySlug);
      }

      // Add any extra days found in the sheet that were not in the 1-10 range
      dayThumbnails.forEach((meta, slug) => {
        if (!daySlugsSeen.has(slug)) {
          days.push({
            yearSlug: "tashpad",
            daySlug: slug,
            dayName: meta.nameOverride || `יום ${slug.replace('day','')}`,
            thumbnail: meta.src,
            thumbnailHint: meta.hint
          });
        }
      });


    } else {
      console.warn("GalleryDays: CSV for GalleryImagesTashpad_ForDaysMeta is missing 'daySlug' or 'src' header. Using fallback days structure.");
      return fallbackGalleryDays.filter(d => d.yearSlug === "tashpad");
    }
  } else {
    console.log(`GalleryDays: No data from CSV. Returning hardcoded fallback days for Tashpad.`);
    return fallbackGalleryDays.filter(d => d.yearSlug === "tashpad");
  }

  if (days.length > 0) {
    console.log(`GalleryDays: Processed ${days.length} days for Tashpad from CSV / fallbacks.`);
    return days;
  }
  console.log("GalleryDays: No days processed, returning fallback.");
  return fallbackGalleryDays.filter(d => d.yearSlug === "tashpad");
}


export async function getGalleryImages(yearSlugParam: string, daySlugParam: string): Promise<GalleryImageItem[]> {
  if (yearSlugParam !== "tashpad") {
    console.log(`getGalleryImages: Requested year ${yearSlugParam} is not Tashpad. Returning empty array.`);
    return [];
  }
  console.log(`GalleryImages: Attempting to fetch images for ${yearSlugParam}/${daySlugParam} from ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImagesTashpad");

  if (parsedData) {
    const images = csvToObjectsArray(parsedData, [], "GalleryImagesTashpad", ['daySlug', 'imageOrder', 'src', 'alt', 'hint'])
      .filter(img => img.daySlug === daySlugParam)
      .map(img => ({ ...img, yearSlug: "tashpad" as "tashpad", imageOrder: Number(img.imageOrder) || 0 }))
      .sort((a, b) => (a.imageOrder || 0) - (b.imageOrder || 0));

    if (images.length > 0) {
      console.log(`GalleryImages: Processed ${images.length} images for ${yearSlugParam}/${daySlugParam} from CSV.`);
      return images;
    } else {
      console.log(`GalleryImages: No images found in CSV for ${yearSlugParam}/${daySlugParam}. Returning empty array.`);
      return [];
    }
  }

  console.log(`GalleryImages: No data from CSV for ${yearSlugParam}/${daySlugParam}. Returning empty array as fallback.`);
  return [];
}

    