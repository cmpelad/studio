
// src/services/googleSheetsService.ts

// --- CSV URL Constants ---
const HERO_CONFIG_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=567131857&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";
const ABOUT_SECTION_CONTENT_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1343173925&single=true&output=csv";
const PRINCIPAL_MESSAGE_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=222684544&single=true&output=csv";
const HOMEPAGE_GALLERY_SWIPER_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=949430402&single=true&output=csv";
const VIDEOS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1597946854&single=true&output=csv";
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const TESTIMONIALS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=2115801643&single=true&output=csv";
const CONTACT_INFO_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1047527670&single=true&output=csv";
const GALLERY_IMAGES_TASHPAD_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1677460936&single=true&output=csv"; 
// Assuming GalleryDaysMeta data is derived from GalleryImagesTashpad or another sheet.
// If GalleryDaysMeta is a separate sheet, its CSV URL needs to be defined.
// For now, getGalleryDays will use GALLERY_IMAGES_TASHPAD_CSV_URL if it needs to derive day names/thumbnails.

const SITE_CONFIG_CSV_URL = null; // SiteConfig will use fallback

// --- Fallback Data (Hardcoded) ---
export const fallbackSiteConfig: SiteConfig = {
    siteTitle: "קעמפ גן ישראל - אלעד",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0", // This is used for Header and Splash
    heroVideoId: "b2SaA1dYwl0", // Fallback if not in HeroConfig
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: "קדימון קעמפ גן ישראל אלעד",
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    galleryPageTitle: "גלריית תמונות",
    summaryVideosPageTitle: "כל סרטוני הסיכום",
    galleryTashpadYearImage: "https://placehold.co/300x300.png?text=תשפד",
};

export const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: fallbackSiteConfig.heroImageSrc,
  imageAlt: fallbackSiteConfig.heroImageAlt,
  imageHint: fallbackSiteConfig.heroImageHint,
  videoId: fallbackSiteConfig.heroVideoId,
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
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "ילדים משחקים בקעמפ", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת!", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "פעילות יצירה בקעמפ", imageHint: "camp games", captionTitle: "פעילויות מגוונות", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
    { id: "slide4_fallback", imageSrc: "https://placehold.co/1770x1000.png", imageAlt: "תמונה נוספת לדוגמה", imageHint: "placeholder", captionTitle: "כותרת נוספת", captionText: "תיאור קצר נוסף לשקופית הזאת." },
];

export const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: "שיר הנושא - קעמפ גן ישראל אלעד", category: 'campSong' },
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
  thumbnailHint: "activity"
}));

export const fallbackGalleryImages: GalleryImageItem[] = tenDays.flatMap(dayIndex =>
  Array.from({ length: 5 }, (_, imgIndex) => ({ 
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
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImageHint?: string;
  registrationFormUrl?: string;
  paymentRedirectUrl?: string;
  galleryPageTitle?: string;
  summaryVideosPageTitle?: string;
  galleryTashpadYearImage?: string; // For the main image of Tashpad year in gallery
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
export interface HomePageGallerySwiperItem { imageSrc: string; imageAlt?: string; imageHint?: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: string; }

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
  if (!csvUrl || csvUrl.includes("YOUR_") || csvUrl.includes("GID_PLACEHOLDER") || csvUrl.includes("YOUR_SPREADSHEET_ID_HERE")) {
    console.log(`${sheetNameForLog}: CSV URL is a placeholder, invalid, or not configured. Skipping fetch.`);
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
    console.log(`${sheetNameForLog}: Successfully fetched CSV data from URL. Raw CSV Text length: ${text.length}`);
    
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
  const result = { ...fallbackData } as T; 
  if (!parsedData || parsedData.length < 2) { // Expect at least a header row and one data row
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No parsed CSV data or insufficient rows. Using fallback.`);
    return result;
  }

  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  const keyHeaderIndex = headerRow.indexOf('key');
  const valueHeaderIndex = headerRow.indexOf('value');

  if (keyHeaderIndex === -1 || valueHeaderIndex === -1) {
    console.warn(`${sheetNameForLog} (csvToKeyValueObject): CSV missing 'key' or 'value' header. Using fallback. Headers found: ${headerRow.join(',')}`);
    return result;
  }
  console.log(`${sheetNameForLog} (csvToKeyValueObject): Header row detected. Key column: ${keyHeaderIndex}, Value column: ${valueHeaderIndex}`);
  
  let fetchedItems = 0;
  for (let i = 1; i < parsedData.length; i++) {
    const row = parsedData[i];
    if (row.length > Math.max(keyHeaderIndex, valueHeaderIndex)) {
      const key = row[keyHeaderIndex];
      const value = row[valueHeaderIndex];
      if (key && key.trim() !== "") {
        (result as Record<string, any>)[key] = value !== undefined ? value : '';
        fetchedItems++;
      }
    } else {
       console.warn(`${sheetNameForLog} (csvToKeyValueObject): Row ${i} does not have enough columns. Skipping.`);
    }
  }

  if (fetchedItems > 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Successfully processed ${fetchedItems} key-value pairs. Result:`, result);
  } else {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No valid key-value pairs processed. Using fallback.`);
    return fallbackData; // Return original fallback if nothing was fetched
  }
  return result;
}

function csvToObjectsArray<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T[],
  sheetNameForLog: string,
  expectedHeaders: (keyof T)[]
): T[] {
  if (!parsedData || parsedData.length < 1) { // Can be just a header row, or header + data
    console.log(`${sheetNameForLog} (csvToObjectsArray): No parsed CSV data. Returning fallback.`);
    return fallbackData;
  }

  const headerRowOriginal = parsedData[0];
  const headerRowLowerCase = headerRowOriginal.map(h => h.toLowerCase().trim());
  const expectedHeadersLowerCase = expectedHeaders.map(h => String(h).toLowerCase());
  
  const columnMap: Record<string, number> = {};
  let headerRowDetected = false;

  const allExpectedHeadersPresent = expectedHeadersLowerCase.every(expectedHeader => 
    headerRowLowerCase.includes(expectedHeader)
  );

  if (allExpectedHeadersPresent) {
      headerRowDetected = true;
      expectedHeadersLowerCase.forEach(expectedHeader => {
          columnMap[expectedHeader] = headerRowLowerCase.indexOf(expectedHeader);
      });
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row detected and fully matches expected: ${headerRowOriginal.join(',')}. Column map:`, columnMap);
  } else {
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row does not fully match expected or is different. Expected all of: "${expectedHeadersLowerCase.join(', ')}", Got: "${headerRowOriginal.join(', ')}".`);
      if (sheetNameForLog === "FAQ" && headerRowOriginal.length >= 2 && !headerRowLowerCase.includes('id')) {
          console.log(`${sheetNameForLog} (csvToObjectsArray): FAQ specific - assuming 'question', 'answer' order for the first two columns as 'id' is missing in headers.`);
          columnMap['question'] = 0;
          columnMap['answer'] = 1;
          // 'id' will be auto-generated later
      } else {
          console.log(`${sheetNameForLog} (csvToObjectsArray): Cannot reliably map columns without all expected headers. Returning fallback.`);
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
      let colIndex = columnMap[headerString];

      // Special handling for FAQ id if not in columnMap (meaning it wasn't in headers)
      if (sheetNameForLog === "FAQ" && headerString === 'id' && colIndex === undefined) {
        obj[headerKey] = `faq_csv_${i}` as any; 
        // Don't set hasEssentialData based on auto-generated ID
        continue;
      }
      
      if (colIndex !== undefined && colIndex !== -1 && colIndex < row.length) {
        obj[headerKey] = row[colIndex] as any;
        // Define what's essential. For FAQ, question is essential. For others, at least one key field.
        if (row[colIndex] !== "" && row[colIndex] !== undefined) {
            if (sheetNameForLog === "FAQ" && headerString === 'question') hasEssentialData = true;
            else if (sheetNameForLog === "SwiperSlides" && headerString === 'imageSrc') hasEssentialData = true;
            else if (sheetNameForLog === "Videos" && headerString === 'videoId') hasEssentialData = true;
            // Add more specific essential checks for other types if needed
            else if (!['id', 'imageorder', 'imagehint', 'thumbnailhint', 'daynameoverride', 'delay', 'alt'].includes(headerString) && sheetNameForLog !== "FAQ") {
                 hasEssentialData = true; // Generic essential data check
            }
        }
      } else {
        if (expectedHeadersLowerCase.includes(headerString)){
             console.warn(`${sheetNameForLog} (csvToObjectsArray): Missing data for header '${headerString}' in row ${i + dataStartIndex}. Row: ${row.join(',')}`);
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
    console.log(`${sheetNameForLog} (csvToObjectsArray): Processed ${objects.length} items. First item:`, JSON.stringify(objects[0]));
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
  console.log(`FAQ: Attempting to fetch from direct CSV URL: ${FAQ_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ");

  if (parsedData && parsedData.length > 0) {
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
  console.log("getTestimonials: Using hardcoded fallbackTestimonials due to CSV fetch/parse failure or empty CSV.");
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
  console.log("getSwiperSlides: Using hardcoded fallbackSwiperSlides due to CSV fetch/parse failure or empty CSV.");
  return fallbackSwiperSlides;
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
    console.log("getHomePageGallerySwiperData: Using hardcoded fallbackHomePageGallerySwiper due to CSV fetch/parse failure or empty CSV.");
    return fallbackHomePageGallerySwiper;
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
  console.log("getVideos: Using hardcoded fallbackVideos due to CSV fetch/parse failure or empty CSV.");
  return fallbackVideos;
}

// --- Gallery Data Functions (External Gallery) ---
export async function getGalleryYears(): Promise<GalleryYearData[]> {
  // Returns a hardcoded year as per previous request
  console.log("getGalleryYears: Returning hardcoded fallbackGalleryYears for Tashpad.");
  return fallbackGalleryYears; 
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
        // const hintIndex = headerRow.indexOf('thumbnailhint'); // Switched to use 'hint' from image for thumbnail hint
        const hintIndex = headerRow.indexOf('hint'); 
        const imageOrderIndex = headerRow.indexOf('imageorder');

        if (daySlugIndex !== -1 && srcIndex !== -1) {
            console.log("GalleryDays: Headers found in GalleryImages_Tashpad CSV for deriving days meta.");
            for (let i = 1; i < parsedImageData.length; i++) {
                const row = parsedImageData[i];
                const daySlug = row[daySlugIndex];
                const imageSrc = row[srcIndex];
                const imageOrder = imageOrderIndex !== -1 && row[imageOrderIndex] ? parseInt(row[imageOrderIndex], 10) : Infinity;
                const nameOverride = dayNameOverrideIndex !== -1 && row[dayNameOverrideIndex] ? row[dayNameOverrideIndex] : undefined;
                const thumbHint = hintIndex !== -1 && row[hintIndex] ? row[hintIndex] : "activity";

                if (daySlug && imageSrc) {
                    if (!daysMap.has(daySlug) || imageOrder === 1) { 
                        daysMap.set(daySlug, { 
                            name: nameOverride || `היום ה-${daySlug.replace('day', '')}`,
                            thumbnail: imageSrc,
                            thumbnailHint: thumbHint
                        });
                    }
                }
            }
        } else {
            console.warn("GalleryDays: GalleryImages_Tashpad CSV is missing 'dayslug' or 'src' header for deriving days meta. Using fallbacks.");
        }
    } else {
         console.log("GalleryDays: No CSV data for GalleryImages_Tashpad. Using fallbacks for days.");
    }

    const finalDays: GalleryDayData[] = [];
    const daySlugsFromData = Array.from(daysMap.keys());
    const allPossibleDaySlugs = Array.from({ length: 10 }, (_, i) => `day${i + 1}`);
    
    allPossibleDaySlugs.forEach(slug => {
        const dayMeta = daysMap.get(slug);
        finalDays.push({
            yearSlug: "tashpad",
            daySlug: slug,
            dayName: dayMeta?.name || `היום ה-${slug.replace('day', '')}`,
            thumbnail: dayMeta?.thumbnail || `https://placehold.co/400x300.png?text=${slug}Thumb`,
            thumbnailHint: dayMeta?.thumbnailHint || "activity"
        });
    });
    
    if (finalDays.length > 0) {
        console.log(`GalleryDays: Processed/generated ${finalDays.length} days for Tashpad.`);
        return finalDays;
    }
    
    console.log("GalleryDays: No days processed or derived, returning hardcoded fallbackGalleryDays for Tashpad.");
    return fallbackGalleryDays.filter(d => d.yearSlug === 'tashpad');
}

export async function getGalleryImages(yearSlugParam?: string, daySlugParam?: string): Promise<GalleryImageItem[]> {
  if (yearSlugParam !== "tashpad" && yearSlugParam !== undefined) { // Allow undefined for fetching all tashpad images if needed later
    console.log(`getGalleryImages: Requested year ${yearSlugParam} is not Tashpad or undefined. Returning empty array.`);
    return [];
  }
  
  const targetDaySlug = daySlugParam; // Use the passed daySlugParam directly for filtering

  console.log(`GalleryImages: Attempting to fetch images for tashpad/${targetDaySlug || 'all days'} from ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImages_Tashpad");

  if (parsedData) {
    const images = csvToObjectsArray(parsedData, [], "GalleryImages_Tashpad", ['daySlug', 'imageOrder', 'src', 'alt', 'hint'])
      .filter(img => !targetDaySlug || img.daySlug === targetDaySlug) 
      .map(img => ({ ...img, yearSlug: "tashpad", imageOrder: Number(img.imageOrder) || undefined })) 
      .sort((a, b) => (a.imageOrder || Infinity) - (b.imageOrder || Infinity)); 

    if (images.length > 0) {
      console.log(`GalleryImages: Processed ${images.length} images for tashpad/${targetDaySlug || 'all days'} from CSV.`);
      return images;
    } else {
      console.log(`GalleryImages: No images found in CSV for tashpad/${targetDaySlug || 'all days'}. Returning empty array.`);
      return [];
    }
  }

  console.log(`GalleryImages: No data from CSV for tashpad/${targetDaySlug || 'all days'}. Returning empty array.`);
  return [];
}
