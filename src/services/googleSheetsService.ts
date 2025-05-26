
// src/services/googleSheetsService.ts

// --- CSV URL Constants ---
// Replace 'YOUR_SPREADSHEET_ID_HERE' with your actual Spreadsheet ID
// Replace 'GID_FOR_...' with the actual GID for each sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F"; // Fallback to the one in URLs

const HERO_CONFIG_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=567131857&single=true&output=csv`;
const SWIPER_SLIDES_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=421516172&single=true&output=csv`;
const ABOUT_SECTION_CONTENT_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1343173925&single=true&output=csv`;
const PRINCIPAL_MESSAGE_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=222684544&single=true&output=csv`;
const HOMEPAGE_GALLERY_SWIPER_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=949430402&single=true&output=csv`;
const VIDEOS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1597946854&single=true&output=csv`;
const FAQ_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=837718949&single=true&output=csv`;
const TESTIMONIALS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=2115801643&single=true&output=csv`;
const CONTACT_INFO_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1047527670&single=true&output=csv`;
const GALLERY_IMAGES_TASHPAD_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=1677460936&single=true&output=csv`;
// const GALLERY_DAYS_META_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=YOUR_GALLERY_DAYS_META_GID_HERE&single=true&output=csv`; // Provide GID
const GALLERY_DAYS_META_CSV_URL = GALLERY_IMAGES_TASHPAD_CSV_URL; // Using same for now

// --- Fallback Data (Hardcoded) ---
export const fallbackSiteConfig: SiteConfig = {
    siteTitle: "קעמפ גן ישראל - אלעד",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    galleryPageTitle: "גלריית תמונות",
    summaryVideosPageTitle: "כל סרטוני הסיכום",
    galleryTashpadYearImage: "https://placehold.co/300x300.png?text=תשפד", // Default for gallery year
    // Hero config fallback is handled by fallbackHeroConfigData
};

export const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: "קדימון קעמפ גן ישראל אלעד",
  imageHint: "children summer camp",
  videoId: "b2SaA1dYwl0",
};

export const fallbackPrincipalMessageData: PrincipalMessageData = {
  pageTitle: "דבר מנהל הקעמפ",
  principalName: "הרב מנחם מענדל גרינפלד",
  messageParagraph1: "הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות.",
  messageParagraph2: "הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד!",
  imageSrc: "https://placehold.co/400x500.png?text=Principal",
  imageAlt: "מנהל הקעמפ",
  imageHint: "rabbi portrait",
};

export const fallbackAboutSectionContentData: AboutSectionContentData = {
  sectionTitle: "קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה!",
  cardTitle: "אודות קעמפ גן ישראל אלעד",
  paragraph1: "קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל.",
  paragraph2: "הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח.",
  imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: "קבוצת ילדים בפעילות קעמפ",
  imageHint: "camp activity",
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

export const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ?", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו." },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ?", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש." },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל?", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש." },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ?", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות." },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים?", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים." },
];

export const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום!", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח!", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה!", author: "משפחת אברמוביץ, בני ברק" },
];

export const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 1", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים!", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 2", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת!", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה 3", imageHint: "camp games", captionTitle: "פעילויות מגוונות ומרתקות!", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
];

export const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: "שיר הנושא - קעמפ גן ישראל", category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: "המנון הקעמפ", category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום קעמפ תשפ\"ג", category: 'summaryVideo' },
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום ראשי", category: 'mainSummaryVideo' },
];

export const fallbackHomePageGallerySwiper: HomePageGallerySwiperItem[] = [
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczNBtFaOAbpOMFUXx9DL4emQxGdSzYm1vjivTyDnUzlHQDWgHtaEy5K3G1OZGyAbhSIkCMkReGJOOnI2OCe_ZpjXz02f3RC4_rjHO2Sslf_pvdSJC-pbboOhWYvYjeCjXtFe9G8spEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1379-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - פעילות מים", imageHint: "camp activity" },
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczPgSy83OmgsgZDuZoPBGqd3nFunosjH2KCqQ3OhDlKeK-MkSzR4Nn70TAtyICq2UjeiCY3ic_ln5uYf0rY5SSNqC_7IkhZ0idDT5kf3wUvkecjvivzQbrwiEizm_61rjRXLVuYgnkfWcBFd1CuS4pFc=w1379-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - מדורה", imageHint: "children outdoors" },
  { imageSrc: "https://picsum.photos/seed/img4/600/400", imageAlt: "תמונה אקראית 4", imageHint: "placeholder" },
];

export const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad", yearName: `ה'תשפ"ד`, yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד-שנה", yearImageHint: "camp collage" },
];
const tenDays = Array.from({ length: 10 }, (_, i) => i + 1);

export const fallbackGalleryDays: GalleryDayData[] = tenDays.map(i => ({
  yearSlug: "tashpad",
  daySlug: `day${i}`,
  dayName: `היום ה-${i}`,
  thumbnail: `https://placehold.co/400x300.png?text=Day${i}Thumb`,
  thumbnailHint: "camp activity"
}));

export const fallbackGalleryImages: GalleryImageItem[] = tenDays.flatMap(dayIndex =>
  Array.from({ length: 5 }, (_, imgIndex) => ({ // 5 placeholder images per day
    yearSlug: "tashpad",
    daySlug: `day${dayIndex}`,
    imageOrder: imgIndex + 1,
    src: `https://placehold.co/600x400.png?text=Day${dayIndex}Img${imgIndex+1}`,
    alt: `תשפ"ד - יום ${dayIndex} - תמונה ${imgIndex + 1}`,
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
  registrationFormUrl?: string;
  paymentRedirectUrl?: string;
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
export interface VideoItem { id: string; videoId: string; title: string; category: string; }
export interface HomePageGallerySwiperItem { imageSrc: string; imageAlt?: string; imageHint?: string;}


export interface GalleryYearData {
  yearSlug: string;
  yearName: string;
  yearImage: string;
  yearImageHint?: string;
}

export interface GalleryDayData {
  yearSlug: string;
  daySlug: string;
  dayName: string;
  thumbnail: string;
  thumbnailHint?: string;
}

export interface GalleryImageItem {
  yearSlug: string;
  daySlug: string;
  imageOrder?: number;
  src: string;
  alt: string;
  hint?: string;
}


// --- Helper: Fetch and Parse CSV Data ---
async function fetchCsvDataFromUrl(
  csvUrl: string | null,
  sheetNameForLog: string
): Promise<string[][] | null> {
  if (!csvUrl || csvUrl.includes("YOUR_") || csvUrl.includes("GID_PLACEHOLDER")) {
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
                i++; // Skip next quote
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
    }).filter(row => row.some(cell => cell !== "" || cell === "0")); // Keep rows with "0"

    if (rows.length === 0) {
        console.log(`${sheetNameForLog}: CSV is empty or contains only empty rows after basic parsing.`);
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
  sheetNameForLog: string,
  expectedHeaders: [keyof T, keyof T] = ['key' as keyof T, 'value' as keyof T]
): T {
  const result = { ...fallbackData } as T; // Start with fallback
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No parsed CSV data. Using fallback.`);
    return result;
  }

  const headerRowOriginal = parsedData[0];
  const headerRowLowerCase = headerRowOriginal.map(h => h.toLowerCase().trim());
  const [keyHeader, valueHeader] = expectedHeaders.map(h => String(h).toLowerCase());
  
  const keyHeaderIndex = headerRowLowerCase.indexOf(keyHeader);
  const valueHeaderIndex = headerRowLowerCase.indexOf(valueHeader);

  let dataStartIndex = 0;
  
  if (keyHeaderIndex !== -1 && valueHeaderIndex !== -1) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): CSV Header row detected and matches expected: ${headerRowOriginal.join(',')}. Key column: ${keyHeaderIndex}, Value column: ${valueHeaderIndex}`);
    dataStartIndex = 1;
  } else {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): CSV Header row does not match expected or is missing. Expected: "${keyHeader},${valueHeader}", Got: "${headerRowOriginal.join(', ')}". Assuming direct column order (0 for key, 1 for value).`);
    // Assign default indices if headers are not found
    if (headerRowOriginal.length >= 2) {
        // If we don't find specific headers, we assume the first column is key and second is value
        // and that the first row IS data.
        // This scenario should be handled carefully if mixed CSV structures are expected.
    } else {
        console.log(`${sheetNameForLog} (csvToKeyValueObject): Not enough columns for key-value mapping without headers. Using fallback.`);
        return result;
    }
  }
  
  const dataRowsToParse = parsedData.slice(dataStartIndex);
  if (dataRowsToParse.length === 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No data rows to process. Using fallback.`);
    return result;
  }

  let fetchedItems = 0;
  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    const actualKeyIndex = dataStartIndex === 1 ? keyHeaderIndex : 0;
    const actualValueIndex = dataStartIndex === 1 ? valueHeaderIndex : 1;

    if (row.length > Math.max(actualKeyIndex, actualValueIndex)) {
      const key = row[actualKeyIndex];
      const value = row[actualValueIndex];
      if (key && key.trim() !== "") {
        (result as Record<string, any>)[key] = value !== undefined ? value : '';
        fetchedItems++;
      }
    } else {
       console.warn(`${sheetNameForLog} (csvToKeyValueObject): Row ${i + dataStartIndex} does not have enough columns. Skipping.`);
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
  expectedHeaders: (keyof T)[]
): T[] {
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No parsed CSV data. Returning fallback.`);
    return fallbackData;
  }

  const headerRowOriginal = parsedData[0];
  const headerRowLowerCase = headerRowOriginal.map(h => h.toLowerCase().trim());
  const expectedHeadersLowerCase = expectedHeaders.map(h => String(h).toLowerCase());
  
  const columnMap: Record<string, number> = {};
  let headerRowDetected = false;

  // Strict header check: all expected headers must be found
  if (expectedHeadersLowerCase.every(expectedHeader => headerRowLowerCase.includes(expectedHeader))) {
      headerRowDetected = true;
      expectedHeadersLowerCase.forEach(expectedHeader => {
          columnMap[expectedHeader] = headerRowLowerCase.indexOf(expectedHeader);
      });
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row detected and matches expected: ${headerRowOriginal.join(',')}. Column map:`, columnMap);
  } else {
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row does not fully match expected or is different. Expected one of: "${expectedHeadersLowerCase.join(', ')}", Got: "${headerRowOriginal.join(', ')}". Assuming direct data or specific parsing needed.`);
      // If headers don't match, decide if we should proceed with positional or fail
      // For FAQ (question, answer) and HomePageGallerySwiper (imageSrc, imageAlt, imageHint) which have simpler structures without 'id'
      if ((sheetNameForLog === "FAQ" && headerRowOriginal.length >= 2) || (sheetNameForLog === "HomePageGallerySwiper" && headerRowOriginal.length >= 1)) {
           console.log(`${sheetNameForLog} (csvToObjectsArray): Assuming direct column order due to specific sheet type and sufficient columns.`);
           expectedHeadersLowerCase.forEach((header, index) => {
               if (headerRowOriginal.length > index) columnMap[header] = index;
           });
      } else {
          console.log(`${sheetNameForLog} (csvToObjectsArray): Cannot reliably map columns without matching headers. Returning fallback.`);
          return fallbackData;
      }
  }
  
  const dataStartIndex = headerRowDetected ? 1 : 0;
  const objects: T[] = [];
  const dataRowsToParse = parsedData.slice(dataStartIndex);

  if (dataRowsToParse.length === 0) {
    console.log(`${sheetNameForLog} (csvToObjectsArray): No data rows to process. Returning fallback.`);
    return fallbackData;
  }

  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    if (row.every(cell => cell === "")) {
      console.warn(`${sheetNameForLog} (csvToObjectsArray): Skipping empty row ${i + dataStartIndex}.`);
      continue;
    }

    const obj: Partial<T> = {};
    let hasEssentialData = false;

    for (const headerKey of expectedHeaders) {
      const headerString = String(headerKey).toLowerCase();
      const colIndex = columnMap[headerString];

      if (sheetNameForLog === "FAQ" && headerString === 'id' && (colIndex === undefined || colIndex === -1)) {
        obj[headerKey] = `faq_csv_${i}` as any;
        hasEssentialData = true;
        continue;
      }
      
      if (colIndex !== undefined && colIndex !== -1 && colIndex < row.length) {
        obj[headerKey] = row[colIndex] as any;
        if (row[colIndex] !== "" && row[colIndex] !== undefined && headerString !== 'id' && headerString !== 'imageorder' && headerString !== 'imagehint' && headerString !== 'thumbnailhint' && headerString !== 'daynameoverride' && headerString !== 'delay') {
          hasEssentialData = true;
        }
      } else {
        if (expectedHeadersLowerCase.includes(headerString)){
             console.warn(`${sheetNameForLog} (csvToObjectsArray): Missing data for header '${headerString}' in row ${i + dataStartIndex}. Row: ${row.join(',')}`);
        }
        obj[headerKey] = undefined; // Ensure property exists, even if undefined
      }
    }
    
    // Special check for FAQ: if question exists, it's essential
    if (sheetNameForLog === "FAQ" && obj['question']) {
        hasEssentialData = true;
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
    // SiteConfig is always from fallback as per previous setup
    console.log("getSiteConfig: Returning hardcoded fallbackSiteConfig data only.");
    return fallbackSiteConfig;
}

export async function getHeroConfigData(): Promise<HeroConfigData> {
  const parsedData = await fetchCsvDataFromUrl(HERO_CONFIG_CSV_URL, "HeroConfig");
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackHeroConfigData, "HeroConfig", ['key', 'value']);
  }
  console.log("getHeroConfigData: Using hardcoded fallbackHeroConfigData due to CSV fetch/parse failure.");
  return fallbackHeroConfigData;
}

export async function getPrincipalMessageData(): Promise<PrincipalMessageData> {
  const parsedData = await fetchCsvDataFromUrl(PRINCIPAL_MESSAGE_CSV_URL, "PrincipalMessage");
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackPrincipalMessageData, "PrincipalMessage", ['key', 'value']);
  }
  console.log("getPrincipalMessageData: Using hardcoded fallbackPrincipalMessageData due to CSV fetch/parse failure.");
  return fallbackPrincipalMessageData;
}

export async function getAboutSectionContentData(): Promise<AboutSectionContentData> {
  const parsedData = await fetchCsvDataFromUrl(ABOUT_SECTION_CONTENT_CSV_URL, "AboutSectionContent");
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackAboutSectionContentData, "AboutSectionContent", ['key', 'value']);
  }
  console.log("getAboutSectionContentData: Using hardcoded fallbackAboutSectionContentData due to CSV fetch/parse failure.");
  return fallbackAboutSectionContentData;
}

export async function getContactInfoData(): Promise<ContactInfoData> {
  const parsedData = await fetchCsvDataFromUrl(CONTACT_INFO_CSV_URL, "ContactInfo");
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackContactInfoData, "ContactInfo", ['key', 'value']);
  }
  console.log("getContactInfoData: Using hardcoded fallbackContactInfoData due to CSV fetch/parse failure.");
  return fallbackContactInfoData;
}

export async function getFaqData(): Promise<FaqItem[]> {
  console.log(`FAQ: Attempting to fetch CSV from URL: ${FAQ_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ");

  if (parsedData && parsedData.length > 0) {
    // For FAQ, if headers are not id,question,answer, assume columns are question,answer
    const expectedHeaders: (keyof FaqItem)[] = ['id', 'question', 'answer'];
    const faqs = csvToObjectsArray(parsedData, [], "FAQ", expectedHeaders);
    
    if (faqs.length > 0) {
        console.log(`FAQ: Processed ${faqs.length} FAQ items from CSV URL.`);
        return faqs.map((faq, index) => ({ ...faq, id: faq.id || `faq_csv_${index}`, delay: String(index * 50) }));
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
      console.log(`Testimonials: Processed ${testimonials.length} items.`);
      return testimonials;
    }
  }
  console.log("getTestimonials: CSV URL not set or fetch failed. Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  const parsedData = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, "SwiperSlides");
  if (parsedData && parsedData.length > 0) {
    const slides = csvToObjectsArray(parsedData, [], "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
     if (slides.length > 0) {
      console.log(`SwiperSlides: Processed ${slides.length} items.`);
      return slides;
    }
  }
  console.log("getSwiperSlides: CSV URL not set or fetch failed. Returning hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export async function getVideos(): Promise<VideoItem[]> {
  const parsedData = await fetchCsvDataFromUrl(VIDEOS_CSV_URL, "Videos");
  if (parsedData && parsedData.length > 0) {
    const videos = csvToObjectsArray(parsedData, [], "Videos", ['id', 'videoId', 'title', 'category']);
     if (videos.length > 0) {
      console.log(`Videos: Processed ${videos.length} items.`);
      return videos;
    }
  }
  console.log("getVideos: CSV URL not set or fetch failed. Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

export async function getHomePageGallerySwiperData(): Promise<HomePageGallerySwiperItem[]> {
    const parsedData = await fetchCsvDataFromUrl(HOMEPAGE_GALLERY_SWIPER_CSV_URL, "HomePageGallerySwiper");
    if (parsedData && parsedData.length > 0) {
        const items = csvToObjectsArray(parsedData, [], "HomePageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
        if (items.length > 0) {
            console.log(`HomePageGallerySwiper: Processed ${items.length} items.`);
            return items;
        }
    }
    console.log("getHomePageGallerySwiperData: CSV URL not set or fetch failed, returning fallbackHomePageGallerySwiper.");
    return fallbackHomePageGallerySwiper;
}


// --- Gallery Data Functions (External Gallery) ---
export async function getGalleryYears(): Promise<GalleryYearData[]> {
  // This remains static for "ה'תשפ"ד" as requested
  const yearData: GalleryYearData = {
    yearSlug: "tashpad",
    yearName: `ה'תשפ"ד`,
    yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד",
    yearImageHint: "camp collage"
  };
  console.log("getGalleryYears: Returning static data for Tashpad:", yearData);
  return [yearData];
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
    console.log(`GalleryDays: Attempting to fetch from GALLERY_IMAGES_TASHPAD_CSV_URL (used for days meta): ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
    const parsedImageData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImagesTashpad_ForDaysMeta");

    const daysMap = new Map<string, { name: string; thumbnail: string; thumbnailHint?: string }>();

    if (parsedImageData) {
        const headerRow = parsedImageData[0].map(h => h.toLowerCase().trim());
        const daySlugIndex = headerRow.indexOf('dayslug');
        const dayNameOverrideIndex = headerRow.indexOf('daynameoverride');
        const srcIndex = headerRow.indexOf('src');
        const hintIndex = headerRow.indexOf('thumbnailhint'); // Expecting thumbnail hint in this sheet now
        const imageOrderIndex = headerRow.indexOf('imageorder');

        if (daySlugIndex !== -1 && srcIndex !== -1) {
            console.log("GalleryDays: Headers found in GalleryImages_Tashpad CSV for deriving days meta.");
            for (let i = 1; i < parsedImageData.length; i++) {
                const row = parsedImageData[i];
                const daySlug = row[daySlugIndex];
                const imageSrc = row[srcIndex];
                const imageOrder = imageOrderIndex !== -1 && row[imageOrderIndex] ? parseInt(row[imageOrderIndex], 10) : Infinity;
                const nameOverride = dayNameOverrideIndex !== -1 && row[dayNameOverrideIndex] ? row[dayNameOverrideIndex] : undefined;
                const thumbHint = hintIndex !== -1 && row[hintIndex] ? row[hintIndex] : "camp activity";

                if (daySlug && imageSrc) {
                    if (!daysMap.has(daySlug) || imageOrder === 1) { // Prioritize imageOrder=1 for thumbnail
                        daysMap.set(daySlug, { 
                            name: nameOverride || `היום ה-${daySlug.replace('day', '')}`, // Use override or generate default
                            thumbnail: imageSrc,
                            thumbnailHint: thumbHint
                        });
                    }
                }
            }
        } else {
            console.warn("GalleryDays: GalleryImages_Tashpad CSV is missing 'dayslug' or 'src' header for deriving days meta.");
        }
    }

    // Ensure 10 days for Tashpad, using data from sheet if available, else placeholders
    const finalDays: GalleryDayData[] = [];
    for (let i = 1; i <= 10; i++) {
        const currentDaySlug = `day${i}`;
        const dayMeta = daysMap.get(currentDaySlug);
        finalDays.push({
            yearSlug: "tashpad",
            daySlug: currentDaySlug,
            dayName: dayMeta?.name || `היום ה-${i}`,
            thumbnail: dayMeta?.thumbnail || `https://placehold.co/400x300.png?text=Day${i}Thumb`,
            thumbnailHint: dayMeta?.thumbnailHint || "activity"
        });
    }
    
    if (finalDays.length > 0) {
        console.log(`GalleryDays: Processed ${finalDays.length} days for Tashpad.`);
        return finalDays;
    }
    
    console.log("GalleryDays: No days processed or derived, returning hardcoded fallbackGalleryDays for Tashpad.");
    return fallbackGalleryDays.filter(d => d.yearSlug === 'tashpad'); // Ensure fallback is also filtered
}


export async function getGalleryImages(yearSlugParam: string, daySlugParam: string): Promise<GalleryImageItem[]> {
  if (yearSlugParam !== "tashpad") {
    console.log(`getGalleryImages: Requested year ${yearSlugParam} is not Tashpad. Returning empty array.`);
    return [];
  }
  console.log(`GalleryImages: Attempting to fetch images for ${yearSlugParam}/${daySlugParam} from ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImages_Tashpad");

  if (parsedData) {
    const images = csvToObjectsArray(parsedData, [], "GalleryImages_Tashpad", ['daySlug', 'imageOrder', 'src', 'alt', 'hint'])
      .filter(img => img.daySlug === daySlugParam) // Already filtered for 'tashpad' implicitly by CSV_URL choice
      .map(img => ({ ...img, yearSlug: "tashpad", imageOrder: Number(img.imageOrder) || undefined })) // Ensure imageOrder is number or undefined
      .sort((a, b) => (a.imageOrder || Infinity) - (b.imageOrder || Infinity)); // Sort, with undefined order last

    if (images.length > 0) {
      console.log(`GalleryImages: Processed ${images.length} images for ${yearSlugParam}/${daySlugParam} from CSV.`);
      return images;
    } else {
      console.log(`GalleryImages: No images found in CSV for ${yearSlugParam}/${daySlugParam}. Returning empty array.`);
      return [];
    }
  }

  console.log(`GalleryImages: No data from CSV for ${yearSlugParam}/${daySlugParam}. Returning empty array (no fallback for specific day images).`);
  return [];
}

// Type for ContactInfo (if it was separate, now part of SiteConfig or its own sheet)
// export interface ContactDetails {
//   officeAddress?: string;
//   phoneNumber?: string;
//   email?: string;
//   contactHours?: string;
// }
// Not strictly needed if all contact details are in SiteConfig

```
The error "Cannot read properties of undefined (reading 'replace')" in `FaqItemComponent` at `src/components/sections/FaqSection.tsx` (line 2251 in the compiled code, which corresponds to the `dangerouslySetInnerHTML` line) means that `answer` prop is `undefined` when it's trying to call `answer.replace(...)`.

This happened because although we updated `googleSheetsService.ts` to handle a two-column FAQ CSV (question, answer) and auto-generate an `id`, the `csvToObjectsArray` function might still not be correctly populating the `answer` field for each `FaqItem` object if the CSV structure doesn't perfectly align or if there are empty rows/cells.

The key is to ensure that `FaqItemComponent` receives a valid string (or an empty string) for the `answer` prop.

I'll modify `FaqItemComponent` in `src/components/sections/FaqSection.tsx` to be more robust:

1.  Ensure that `answer` is treated as an optional prop in the `FaqItemComponentProps` interface (it already is).
2.  Before calling `answer.replace`, check if `answer` is actually a string. If it's `undefined` or not a string, use an empty string for `dangerouslySetInnerHTML`.

This will prevent the `replace of undefined` error.

(Omitted from agent history: changes suggested and applied to the following files: /src/components/sections/FaqSection.tsx)
The `FaqItemComponent` has been updated to safely handle cases where the `answer` prop might be `undefined`. This should prevent the "Cannot read properties of undefined (reading 'replace')" error.

Please restart your development server and check if the FAQ section now loads correctly.