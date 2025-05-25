
// src/services/googleSheetsService.ts

// --- Fallback Data ---
const fallbackSiteConfig: SiteConfig = {
    siteTitle: `קעמפ גן ישראל - אלעד (סטטי)`,
    siteDescription: `חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת. (סטטי)`,
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0",
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: `קדימון קעמפ גן ישראל אלעד (סטטי)`,
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    contactOfficeAddress: `המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (סטטי)`,
    contactPhoneNumber: `050-1234567 (סטטי)`,
    contactEmail: `office@camp-elad.org.il (סטטי)`,
    contactHours: `ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (סטטי)`,
    principalName: `הרב מנחם מענדל גרינפלד (סטטי)`,
    principalMessageParagraph1: `הורים וחניכים יקרים, אנו נרגשים לפתוח את שעריו של קעמפ גן ישראל אלעד לשנה נוספת של חוויות בלתי נשכחות. הקעמפ שלנו הוא לא רק מקום של כיף והנאה, אלא גם בית חם שמחנך לאורם של ערכי היהדות והחסידות. (סטטי)`,
    principalMessageParagraph2: `הצוות המסור שלנו, המורכב ממדריכים מנוסים וחדורי שליחות, עמל ימים כלילות כדי להכין תוכנית עשירה ומגוונת שתשלב פעילויות אתגריות, סדנאות יצירה, טיולים מרתקים, וכמובן – לימוד והעמקה בתכנים חסידיים בצורה חווייתית ומהנה. אנו מזמינים אתכם להצטרף למשפחת קעמפ גן ישראל אלעד! (סטטי)`,
    principalImageSrc: "https://placehold.co/400x500.png?text=Principal-Static",
    principalImageAlt: `מנהל הקעמפ הרב מנחם מענדל גרינפלד (סטטי)`,
    principalImageHint: "rabbi portrait",
    aboutTitle: `קעמפ גן ישראל אלעד: חוויה יהודית, חסידית ומהנה! (סטטי)`,
    aboutParagraph1: `קעמפ גן ישראל אלעד מציע לילדיכם חווית קיץ ייחודית המשלבת הנאה, תוכן ערכי ואווירה חסידית תוססת. אנו מאמינים שכל ילד הוא עולם ומלואו, ושואפים להעניק לכל חניך יחס אישי וחם, תוך פיתוח כישרונותיו וחיזוק הקשר שלו למורשת ישראל. (סטטי)`,
    aboutParagraph2: `הצוות המסור שלנו, המורכב ממדריכים בוגרים, אחראיים ובעלי ניסיון, מלווה את החניכים לאורך כל היום בפעילויות מגוונות, טיולים, סדנאות, התוועדויות ושיעורים מרתקים. אנו מקפידים על סטנדרטים גבוהים של בטיחות, כשרות ותנאים נאותים, כדי להבטיח לילדיכם קיץ בטוח, מהנה ובלתי נשכח. (סטטי)`,
    aboutImageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    aboutImageAlt: `קבוצת ילדים בפעילות קעמפ (סטטי)`,
    aboutImageHint: "camp activity",
    mainSummaryVideoId: "gqgfz0h0om4", // This will be overridden if a mainSummaryVideo is found in Videos sheet
    galleryPageTitle: `גלריית תמונות (סטטי)`,
    summaryVideosPageTitle: `כל סרטוני הסיכום (סטטי)`,
};

const fallbackHeroConfigData: HeroConfigData = {
  imageSrc: fallbackSiteConfig.heroImageSrc || "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  imageAlt: fallbackSiteConfig.heroImageAlt || `קדימון קעמפ גן ישראל אלעד (סטטי)`,
  imageHint: fallbackSiteConfig.heroImageHint || "children summer camp",
  videoId: fallbackSiteConfig.heroVideoId || "b2SaA1dYwl0",
};

const fallbackPrincipalMessageData: PrincipalMessageData = {
  pageTitle: "דבר מנהל הקעמפ (סטטי)",
  principalName: fallbackSiteConfig.principalName || `הרב מנחם מענדל גרינפלד (סטטי)`,
  messageParagraph1: fallbackSiteConfig.principalMessageParagraph1 || `הורים וחניכים יקרים... (סטטי)`,
  messageParagraph2: fallbackSiteConfig.principalMessageParagraph2 || `הצוות המסור שלנו... (סטטי)`,
  imageSrc: fallbackSiteConfig.principalImageSrc || "https://placehold.co/400x500.png?text=Principal-Static",
  imageAlt: fallbackSiteConfig.principalImageAlt || `מנהל הקעמפ (סטטי)`,
  imageHint: fallbackSiteConfig.principalImageHint || "rabbi portrait",
};

const fallbackAboutSectionContentData: AboutSectionContentData = {
  sectionTitle: fallbackSiteConfig.aboutTitle || `אודות הקעמפ (סטטי)`,
  cardTitle: fallbackSiteConfig.aboutTitle || `אודות הקעמפ (סטטי)`,
  paragraph1: fallbackSiteConfig.aboutParagraph1 || `קעמפ גן ישראל אלעד מציע... (סטטי)`,
  paragraph2: fallbackSiteConfig.aboutParagraph2 || `הצוות המסור שלנו... (סטטי)`,
  imageSrc: fallbackSiteConfig.aboutImageSrc || "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy...",
  imageAlt: fallbackSiteConfig.aboutImageAlt || `קבוצת ילדים בפעילות (סטטי)`,
  imageHint: fallbackSiteConfig.aboutImageHint || "camp activity",
};

const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: `לאילו גילאים מיועד הקעמפ? (סטטי)`, answer: `הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.` },
    { id: "faq2_fallback", question: `מהן שעות הפעילות בקעמפ? (סטטי)`, answer: `שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.` },
    { id: "faq3_fallback", question: `האם יש צורך להביא אוכל? (סטטי)`, answer: `לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.` },
    { id: "faq4_fallback", question: `איזה ציוד יש להביא לקעמפ? (סטטי)`, answer: `רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.` },
    { id: "faq5_fallback", question: `מהי מדיניות הביטולים? (סטטי)`, answer: `מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.` },
];
const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: `הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (סטטי)`, author: `משפחת כהן, אלעד` },
    { id: "testimonial2_fallback", quote: `זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (סטטי)`, author: `משפחת לוי, פתח תקווה` },
    { id: "testimonial3_fallback", quote: `המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (סטטי)`, author: `משפחת אברמוביץ, בני ברק` },
];
const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 1 (סטטי)`, imageHint: "camp activities", captionTitle: `חוויה של פעם בחיים! (סטטי)`, captionText: `מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות.` },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 2 (סטטי)`, imageHint: "children outdoors", captionTitle: `מדריכים תותחים ואווירה מיוחדת! (סטטי)`, captionText: `הצטרפו אלינו לקיץ של כיף, חברות וערכים.` },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 3 (סטטי)`, imageHint: "camp games", captionTitle: `פעילויות מגוונות ומרתקות! (סטטי)`, captionText: `טיולים, סדנאות, התוועדויות ועוד המון הפתעות.` },
];
const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: `שיר הנושא - קעמפ גן ישראל (סטטי)`, category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: `המנון הקעמפ (דוגמה סטטית)`, category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: `סרטון סיכום קעמפ תשפ"ג (סטטי)`, category: 'summaryVideo' },
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: `סרטון סיכום ראשי (סטטי)`, category: 'mainSummaryVideo' },
];
const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad-fallback", yearName: `ה'תשפ"ד (סטטי)`, yearImage: "https://placehold.co/300x300.png?text=Static-2024", yearImageHint: "camp collage" },
  { yearSlug: "tashpag-fallback", yearName: `ה'תשפ"ג (סטטי)`, yearImage: "https://placehold.co/300x300.png?text=Static-2023", yearImageHint: "group photo"},
];
const fallbackGalleryDays: GalleryDayData[] = [
    { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", dayName: "היום הראשון (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D1-24", thumbnailHint: "camp activity"},
    { yearSlug: "tashpad-fallback", daySlug: "day2-fallback", dayName: "היום השני (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D2-24", thumbnailHint: "outdoor fun"},
    { yearSlug: "tashpag-fallback", daySlug: "day1-fallback", dayName: "פתיחת הקעמפ (סטטי)", thumbnail: "https://placehold.co/400x300.png?text=Static-D1-23", thumbnailHint: "opening event"},
];

const fallbackGalleryImages: GalleryImageItem[] = [
    {yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1-24", alt: "תמונה 1 סטטית 2024", hint: "children fun"},
    {yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 2, src: "https://placehold.co/600x400.png?text=Static-Img2-24", alt: "תמונה 2 סטטית 2024", hint: "group photo"},
    {yearSlug: "tashpag-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1-23", alt: "תמונה 1 סטטית 2023", hint: "camp opening"},
];
const fallbackContactInfoData: ContactInfoData = {
  pageTitle: `צור קשר (סטטי)`,
  detailsTitle: `פרטי התקשרות (סטטי)`,
  officeAddress: `המשרד הראשי: רחוב רבי יהודה הנשיא 22, אלעד (סטטי)`,
  phoneNumber: `050-1234567 (סטטי)`,
  email: `office@camp-elad.org.il (סטטי)`,
  hoursTitle: `שעות מענה טלפוני (סטטי):`,
  hoursDetails: `ימים א'-ה': 9:00-17:00, יום ו': 9:00-12:00 (סטטי)`,
  additionalInfo: `ניתן להשאיר הודעה (סטטי).`,
};

// --- Types ---
export interface SiteConfig {
  [key: string]: string | undefined;
  siteTitle?: string;
  siteDescription?: string;
  logoImageSrc?: string;
  heroVideoId?: string; // Retained in SiteConfig for potential fallback
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImageHint?: string;
  registrationFormUrl?: string;
  paymentRedirectUrl?: string;
  contactOfficeAddress?: string;
  contactPhoneNumber?: string;
  contactEmail?: string;
  contactHours?: string;
  principalName?: string; // Retained for fallback
  principalMessageParagraph1?: string; // Retained for fallback
  principalMessageParagraph2?: string; // Retained for fallback
  principalImageSrc?: string; // Retained for fallback
  principalImageAlt?: string; // Retained for fallback
  principalImageHint?: string; // Retained for fallback
  aboutTitle?: string; // Retained for fallback
  aboutParagraph1?: string; // Retained for fallback
  aboutParagraph2?: string; // Retained for fallback
  aboutImageSrc?: string; // Retained for fallback
  aboutImageAlt?: string; // Retained for fallback
  aboutImageHint?: string; // Retained for fallback
  mainSummaryVideoId?: string; // This will be primarily derived from Videos sheet
  galleryPageTitle?: string;
  summaryVideosPageTitle?: string;
}
export interface HeroConfigData {
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
export interface FaqItem { id: string; question: string; answer: string; delay?: string; }
export interface Testimonial { id: string; quote: string; author: string;}
export interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
export interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | 'mainSummaryVideo' | string; }
export interface GalleryYearData { yearSlug: string; yearName: string; yearImage: string; yearImageHint?: string; }
export interface GalleryDayData { yearSlug: string; daySlug: string; dayName: string; thumbnail: string; thumbnailHint?: string; }
export interface GalleryImageItem { yearSlug: string; daySlug: string;  imageOrder?: number; src: string; alt: string; hint?: string; }

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

// --- CSV URLs ---
// !! IMPORTANT !! Replace GID_HERE with actual GID or ensure the whole doc is public if using gid=0 for first sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

// Specific GIDs for each sheet
const SITE_CONFIG_GID = "0"; // Usually the first sheet
const FAQ_GID = "837718949";
const SWIPER_SLIDES_GID = "421516172";
const HERO_CONFIG_GID = "YOUR_HERO_CONFIG_GID_HERE"; // Replace with actual GID
const PRINCIPAL_MESSAGE_GID = "YOUR_PRINCIPAL_MESSAGE_GID_HERE"; // Replace with actual GID
const ABOUT_SECTION_CONTENT_GID = "YOUR_ABOUT_SECTION_CONTENT_GID_HERE"; // Replace with actual GID
const TESTIMONIALS_GID = "YOUR_TESTIMONIALS_GID_HERE"; // Replace with actual GID
const VIDEOS_GID = "YOUR_VIDEOS_GID_HERE"; // Replace with actual GID
const CONTACT_INFO_GID = "YOUR_CONTACT_INFO_GID_HERE"; // Replace with actual GID
const GALLERY_YEARS_GID = "YOUR_GALLERY_YEARS_GID_HERE"; // Replace
const GALLERY_DAYS_GID = "YOUR_GALLERY_DAYS_GID_HERE"; // Replace
const GALLERY_IMAGES_GID = "YOUR_GALLERY_IMAGES_GID_HERE"; // Replace
const HOMEPAGE_GALLERY_SWIPER_GID = "YOUR_HOMEPAGE_GALLERY_SWIPER_GID_HERE"; // Replace


const buildCsvUrl = (gid: string) => {
  if (!SPREADSHEET_ID) return null;
  return `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=${gid}&single=true&output=csv`;
};

const SITE_CONFIG_CSV_URL = buildCsvUrl(SITE_CONFIG_GID);
const FAQ_CSV_URL = buildCsvUrl(FAQ_GID);
const SWIPER_SLIDES_CSV_URL = buildCsvUrl(SWIPER_SLIDES_GID);
const HERO_CONFIG_CSV_URL = buildCsvUrl(HERO_CONFIG_GID);
const PRINCIPAL_MESSAGE_CSV_URL = buildCsvUrl(PRINCIPAL_MESSAGE_GID);
const ABOUT_SECTION_CONTENT_CSV_URL = buildCsvUrl(ABOUT_SECTION_CONTENT_GID);
const TESTIMONIALS_CSV_URL = buildCsvUrl(TESTIMONIALS_GID);
const VIDEOS_CSV_URL = buildCsvUrl(VIDEOS_GID);
const CONTACT_INFO_CSV_URL = buildCsvUrl(CONTACT_INFO_GID);
const GALLERY_YEARS_CSV_URL = buildCsvUrl(GALLERY_YEARS_GID);
const GALLERY_DAYS_CSV_URL = buildCsvUrl(GALLERY_DAYS_GID);
const GALLERY_IMAGES_CSV_URL = buildCsvUrl(GALLERY_IMAGES_GID);
const HOMEPAGE_GALLERY_SWIPER_CSV_URL = buildCsvUrl(HOMEPAGE_GALLERY_SWIPER_GID);


async function fetchCsvDataFromUrl(csvUrl: string | null, sheetNameForLog: string, expectedHeadersForMapping?: string[]): Promise<string[][] | null> {
  if (!csvUrl || csvUrl.includes("YOUR_") || csvUrl.includes("_GID_HERE")) {
    console.log(`${sheetNameForLog}: CSV URL is a placeholder, invalid, or SPREADSHEET_ID is not set. Skipping fetch for ${sheetNameForLog}.`);
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
    }).filter(row => row.some(cell => cell !== "" || cell === "0")); // Keep rows that are not entirely empty (or contain '0')

    if (rows.length === 0) {
        console.log(`${sheetNameForLog}: CSV is empty or contains only empty rows.`);
        return null;
    }

    console.log(`${sheetNameForLog}: Parsed CSV Data (first 5 rows):`, rows.slice(0, 5));

    // Header detection logic remains, but csvToObjectsArray will handle mapping
    if (expectedHeadersForMapping && expectedHeadersForMapping.length > 0) {
      const headerRow = rows[0].map(h => h.toLowerCase().trim());
      const allExpectedHeadersMatch = expectedHeadersForMapping.every((expectedHeader) => 
        headerRow.includes(expectedHeader.toLowerCase().trim())
      );
      
      if (allExpectedHeadersMatch) {
        console.log(`${sheetNameForLog}: CSV Header row detected and matches all expected for mapping: ${headerRow.join(',')}`);
        return rows; // Return with header row for csvToObjectsArray
      } else {
        console.log(`${sheetNameForLog}: CSV Header row does not fully match all expected for mapping or is different. Expected: "${expectedHeadersForMapping.join(',')}", Got: "${headerRow.join(',')}". Will attempt direct positional mapping or key-value parsing.`);
        return rows; // Return all rows, specific parsing will handle it
      }
    }
    return rows; // Return all rows if no expected headers for mapping provided
  } catch (error) {
    console.error(`${sheetNameForLog}: Exception fetching or parsing CSV data from ${csvUrl}:`, error);
    return null;
  }
}

function csvToKeyValueObject<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T,
  sheetNameForLog: string,
  keyColumnName: string = 'key',
  valueColumnName: string = 'value'
): T {
  const result = { ...fallbackData }; 
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No parsed data, returning fallback.`);
    return result;
  }

  let dataStartIndex = 0;
  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  const keyHeaderIndex = headerRow.indexOf(keyColumnName.toLowerCase());
  const valueHeaderIndex = headerRow.indexOf(valueColumnName.toLowerCase());

  if (keyHeaderIndex !== -1 && valueHeaderIndex !== -1) {
    dataStartIndex = 1;
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Key-Value CSV Header row detected. Key column: ${keyHeaderIndex}, Value column: ${valueHeaderIndex}`);
  } else {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Key-Value CSV Header row not detected or incomplete. Assuming direct key-value pairs (col 0 = key, col 1 = value).`);
    if (headerRow.length < 2 && parsedData.length < 2) { // Check if there's enough data for direct key-value
        console.warn(`${sheetNameForLog} (csvToKeyValueObject): CSV data for key-value object doesn't have at least two columns or enough rows for direct key-value. Using fallback.`);
        return result;
    }
  }

  const dataRowsToParse = dataStartIndex === 1 ? parsedData.slice(1) : parsedData;

  if (dataRowsToParse.length === 0 && dataStartIndex === 1) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): CSV has header but no data rows. Using fallback.`);
    return result;
  }
  if (dataRowsToParse.length === 0 && dataStartIndex === 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): CSV has no header and no data rows. Using fallback.`);
    return result;
  }


  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    const keyIndex = dataStartIndex === 1 ? keyHeaderIndex : 0;
    const valueIndex = dataStartIndex === 1 ? valueHeaderIndex : 1;

    if (row.length <= Math.max(keyIndex, valueIndex)) {
        console.warn(`${sheetNameForLog} (csvToKeyValueObject): Row ${i + dataStartIndex} does not have enough columns. Skipping.`);
        continue;
    }
    const key = row[keyIndex];
    const value = row[valueIndex];
    if (key) {
      (result as Record<string, any>)[key] = value !== undefined ? value : ''; 
      // console.log(`${sheetNameForLog} (csvToKeyValueObject): Processing row in Key-Value CSV: ${key} = ${value}`);
    }
  }
  console.log(`${sheetNameForLog} (csvToKeyValueObject): Final Key-Value object (merged with fallback):`, result);
  return result;
}


function csvToObjectsArray<T extends Record<string, any>>(
  parsedData: string[][] | null,
  fallbackData: T[],
  sheetNameForLog: string,
  expectedHeaders: (keyof T)[]
): T[] {
  if (!parsedData || parsedData.length === 0) {
    console.log(`${sheetNameForLog}: No parsed data, returning fallback.`);
    return fallbackData;
  }

  let dataStartIndex = 0;
  const columnMap: Record<string, number> = {};
  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  
  const allExpectedHeadersFound = expectedHeaders.every(expectedHeaderKey => {
    const expectedHeaderString = String(expectedHeaderKey).toLowerCase();
    const idx = headerRow.indexOf(expectedHeaderString);
    if (idx !== -1) {
      columnMap[expectedHeaderString] = idx;
      return true;
    }
    return false;
  });

  if (allExpectedHeadersFound && Object.keys(columnMap).length === expectedHeaders.length) {
    dataStartIndex = 1;
    console.log(`${sheetNameForLog}: CSV Header row detected and all expected headers found. Column map:`, columnMap);
  } else {
    console.log(`${sheetNameForLog}: CSV Header row not detected or some expected headers missing. Expected: "${expectedHeaders.join(',')}", Found in CSV: "${headerRow.join(',')}". Assuming direct column order for mapping.`);
    expectedHeaders.forEach((header, index) => {
      if (headerRow.length > index) { // Ensure there are enough columns in the CSV header row
        columnMap[String(header).toLowerCase()] = index;
      }
    });
     if (parsedData.length === 1 && !allExpectedHeadersFound) {
        console.log(`${sheetNameForLog}: CSV contains only one row which doesn't match expected headers. Assuming it's a data row and using positional mapping.`);
        dataStartIndex = 0; // Treat the first row as data
    }
  }
  
  const objects: T[] = [];
  const dataRowsToParse = parsedData.slice(dataStartIndex);

  if (dataRowsToParse.length === 0) {
    console.log(`${sheetNameForLog}: No data rows to process after handling headers. Returning fallback.`);
    return fallbackData;
  }

  for (let i = 0; i < dataRowsToParse.length; i++) {
    const row = dataRowsToParse[i];
    if (row.every(cell => cell === "")) continue; 

    const obj: Partial<T> = {};
    for (const headerKey of expectedHeaders) {
      const headerString = String(headerKey).toLowerCase();
      const colIndex = columnMap[headerString];
      
      if (colIndex !== undefined && colIndex < row.length) {
        obj[headerKey] = row[colIndex] as any;
      } else {
        // If it's the FAQ sheet and headers are missing, use specific positional logic
        if (sheetNameForLog === "FAQ" && !allExpectedHeadersFound) {
          if (headerKey === 'id') obj[headerKey] = `faq_csv_${i}` as any;
          else if (headerKey === 'question' && row.length > 0) obj[headerKey] = row[0] as any;
          else if (headerKey === 'answer' && row.length > 1) obj[headerKey] = row[1] as any;
          else {
             // console.warn(`${sheetNameForLog}: Missing data for header '${headerString}' in row ${i + dataStartIndex}. Row: ${row.join(',')}`);
             obj[headerKey] = undefined;
          }
        } else {
            // console.warn(`${sheetNameForLog}: Missing data for header '${headerString}' in row ${i + dataStartIndex}. Row: ${row.join(',')}`);
            obj[headerKey] = undefined;
        }
      }
    }
    if (Object.keys(obj).length > 0 && Object.values(obj).some(val => val !== undefined)) {
        objects.push(obj as T);
    }
  }
  console.log(`${sheetNameForLog}: Processed ${objects.length} items from CSV.`);
  return objects.length > 0 ? objects : fallbackData;
}


// --- Data Fetching Functions ---

export async function getSiteConfig(): Promise<SiteConfig> {
  const parsedData = await fetchCsvDataFromUrl(SITE_CONFIG_CSV_URL, "SiteConfig", ['key', 'value']);
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackSiteConfig, "SiteConfig");
  }
  console.log("getSiteConfig: Using hardcoded fallbackSiteConfig data only due to CSV fetch/parse failure.");
  return fallbackSiteConfig;
}

export async function getHeroConfigData(): Promise<HeroConfigData> {
  const parsedData = await fetchCsvDataFromUrl(HERO_CONFIG_CSV_URL, "HeroConfig", ['key', 'value']);
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackHeroConfigData, "HeroConfig");
  }
  console.log("getHeroConfigData: Using hardcoded fallbackHeroConfigData or fallback from SiteConfig.");
  return fallbackHeroConfigData;
}

export async function getPrincipalMessageData(): Promise<PrincipalMessageData> {
  const parsedData = await fetchCsvDataFromUrl(PRINCIPAL_MESSAGE_CSV_URL, "PrincipalMessage", ['key', 'value']);
   if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackPrincipalMessageData, "PrincipalMessage");
  }
  console.log("getPrincipalMessageData: Using hardcoded fallbackPrincipalMessageData.");
  return fallbackPrincipalMessageData;
}

export async function getAboutSectionContentData(): Promise<AboutSectionContentData> {
  const parsedData = await fetchCsvDataFromUrl(ABOUT_SECTION_CONTENT_CSV_URL, "AboutSectionContent", ['key', 'value']);
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackAboutSectionContentData, "AboutSectionContent");
  }
  console.log("getAboutSectionContentData: Using hardcoded fallbackAboutSectionContentData.");
  return fallbackAboutSectionContentData;
}

export async function getContactInfoData(): Promise<ContactInfoData> {
  const parsedData = await fetchCsvDataFromUrl(CONTACT_INFO_CSV_URL, "ContactInfo", ['key', 'value']);
  if (parsedData) {
    return csvToKeyValueObject(parsedData, fallbackContactInfoData, "ContactInfo");
  }
  console.log("getContactInfoData: Using hardcoded fallbackContactInfoData.");
  return fallbackContactInfoData;
}

export async function getFaqData(): Promise<FaqItem[]> {
  console.log(`FAQ: Attempting to fetch from direct CSV URL: ${FAQ_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ", ['id', 'question', 'answer']);
  if (parsedData) {
    const faqs = csvToObjectsArray(parsedData, fallbackFaqs, "FAQ", ['id', 'question', 'answer']);
    console.log(`FAQ: Processed ${faqs.length} FAQ items from CSV URL.`);
    return faqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
  }
  console.log("FAQ: Using hardcoded fallbackFaqs due to CSV fetch/parse failure.");
  return fallbackFaqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
}


export async function getTestimonials(): Promise<Testimonial[]> {
  const parsedData = await fetchCsvDataFromUrl(TESTIMONIALS_CSV_URL, "Testimonials", ['id', 'quote', 'author']);
  if (parsedData) {
    return csvToObjectsArray(parsedData, fallbackTestimonials, "Testimonials", ['id', 'quote', 'author']);
  }
  console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
 console.log(`SwiperSlides: Attempting to fetch CSV from URL: ${SWIPER_SLIDES_CSV_URL}`);
 const parsedData = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
  if (parsedData) {
    return csvToObjectsArray(parsedData, fallbackSwiperSlides, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
  }
  console.log("getSwiperSlides: Returning hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export async function getVideos(): Promise<VideoItem[]> {
  const parsedData = await fetchCsvDataFromUrl(VIDEOS_CSV_URL, "Videos", ['id', 'videoId', 'title', 'category']);
  if (parsedData) {
    return csvToObjectsArray(parsedData, fallbackVideos, "Videos", ['id', 'videoId', 'title', 'category']);
  }
  console.log("getVideos: Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

export async function getGalleryYears(): Promise<GalleryYearData[]> {
  const parsedData = await fetchCsvDataFromUrl(GALLERY_YEARS_CSV_URL, "GalleryYears", ['yearSlug', 'yearName', 'yearImage', 'yearImageHint']);
   if (parsedData) {
    return csvToObjectsArray(parsedData, fallbackGalleryYears, "GalleryYears", ['yearSlug', 'yearName', 'yearImage', 'yearImageHint']);
  }
  console.log("getGalleryYears: Returning hardcoded fallbackGalleryYears.");
  return fallbackGalleryYears;
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
  const parsedData = await fetchCsvDataFromUrl(GALLERY_DAYS_CSV_URL, "GalleryDays", ['yearSlug', 'daySlug', 'dayName', 'thumbnail', 'thumbnailHint']);
  if (parsedData) {
    return csvToObjectsArray(parsedData, fallbackGalleryDays, "GalleryDays", ['yearSlug', 'daySlug', 'dayName', 'thumbnail', 'thumbnailHint']);
  }
  console.log("getGalleryDays: Returning hardcoded fallbackGalleryDays.");
  return fallbackGalleryDays;
}

export async function getGalleryImages(): Promise<GalleryImageItem[]> {
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_CSV_URL, "GalleryImages", ['yearSlug', 'daySlug', 'imageOrder', 'src', 'alt', 'hint']);
  if (parsedData) {
    const images = csvToObjectsArray(parsedData, fallbackGalleryImages, "GalleryImages", ['yearSlug', 'daySlug', 'imageOrder', 'src', 'alt', 'hint']);
    return images.map(img => ({...img, imageOrder: Number(img.imageOrder) || 0 }));
  }
  console.log("getGalleryImages: Returning hardcoded fallbackGalleryImages.");
  return fallbackGalleryImages;
}

export async function getHomepageGallerySwiperData(): Promise<{imageSrc: string; imageAlt?: string; imageHint?: string}[]> {
    const parsedData = await fetchCsvDataFromUrl(HOMEPAGE_GALLERY_SWIPER_CSV_URL, "HomepageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
    if (parsedData) {
        return csvToObjectsArray(parsedData, [], "HomepageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
    }
    console.log("getHomepageGallerySwiperData: Failed to fetch or parse CSV, returning empty array.");
    return [];
}

```
  </change>
  <change>
    <file>/src/components/sections/FaqSection.tsx</file>
    <content><![CDATA[
"use client";
import { useRef, useEffect, useContext } from 'react';
import { GlobalContext } from '@/components/AppInitializer'; 
import type { FaqItem } from '@/services/googleSheetsService';

interface FaqItemComponentProps {
  question: string;
  answer: string;
  delay: string;
  isOpen?: boolean; 
}

const FaqItemComponent: React.FC<FaqItemComponentProps> = ({ question, answer, delay, isOpen }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detailsNode = detailsRef.current;
    const summaryNode = summaryRef.current;
    const answerNode = answerRef.current;

    if (!detailsNode || !summaryNode || !answerNode) return;

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      
      document.querySelectorAll<HTMLDetailsElement>('.faq-list details[open]').forEach(openDetail => {
        if (openDetail !== detailsNode) {
          const otherAnswer = openDetail.querySelector<HTMLDivElement>('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.opacity = '0';
            otherAnswer.style.paddingTop = '0';
            otherAnswer.style.paddingBottom = '0';
          }
          setTimeout(() => openDetail.removeAttribute('open'), 450);
        }
      });

      const currentlyOpen = detailsNode.hasAttribute('open');
      if (currentlyOpen) {
        answerNode.style.maxHeight = '0';
        answerNode.style.opacity = '0';
        answerNode.style.paddingTop = '0';
        answerNode.style.paddingBottom = '0';
        setTimeout(() => detailsNode.removeAttribute('open'), 450);
      } else {
        detailsNode.setAttribute('open', '');
        requestAnimationFrame(() => { 
          answerNode.style.paddingTop = '30px';
          answerNode.style.paddingBottom = '30px';
          answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
          answerNode.style.opacity = '1';
        });
      }
    };

    summaryNode.addEventListener('click', handleClick);

    // Initial state
    if (isOpen && !detailsNode.hasAttribute('open')) {
        detailsNode.setAttribute('open', '');
        requestAnimationFrame(() => { 
            answerNode.style.paddingTop = '30px';
            answerNode.style.paddingBottom = '30px';
            answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
            answerNode.style.opacity = '1';
        });
    } else if (!detailsNode.hasAttribute('open')) {
        answerNode.style.maxHeight = '0';
        answerNode.style.opacity = '0';
        answerNode.style.paddingTop = '0';
        answerNode.style.paddingBottom = '0';
    } else { // If already open (e.g. by browser's default behavior if JS is slow)
        answerNode.style.paddingTop = '30px';
        answerNode.style.paddingBottom = '30px';
        answerNode.style.maxHeight = answerNode.scrollHeight + 'px'; // Ensure max-height is set
        answerNode.style.opacity = '1';
    }

    return () => {
      summaryNode.removeEventListener('click', handleClick);
    };
  }, [isOpen]); // Rerun if isOpen prop changes (though unlikely for static list)


  return (
    <div className="faq-item" data-aos="fade-up" data-aos-delay={delay}>
      <details ref={detailsRef}>
        <summary ref={summaryRef}>{question}</summary>
        <div className="faq-answer" ref={answerRef}>
          {/* Ensure answer is a string before calling replace */}
          <p dangerouslySetInnerHTML={{ __html: typeof answer === 'string' ? answer.replace(/\\n/g, '<br />') : '' }} />
        </div>
      </details>
    </div>
  );
};


export default function FaqSection() {
  const context = useContext(GlobalContext);
  
  const faqs: FaqItem[] = context?.faqItems || [
    { id: "loading1", question: "טוען שאלות ותשובות...", answer: "אנא המתן." }
  ];

  if (!context) {
     return (
      <section id="faq-section" className="content-section bg-ultra-light-beige" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <h2 className="text-center">טוען מידע...</h2>
        </div>
      </section>
    );
  }


  return (
    <section id="faq-section" className="content-section bg-ultra-light-beige" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-blue-top-right shape-rounded-large" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-beige-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-purple-middle-left shape-rounded-rect" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800"></div>
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">שאלות ותשובות נפוצות</h2>
        <div className="faq-list" data-aos="fade-up" data-aos-delay="150">
          {faqs.map((faq, index) => (
            <FaqItemComponent 
              key={faq.id || index} 
              question={faq.question} 
              answer={faq.answer} 
              delay={faq.delay || String(index * 50)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

