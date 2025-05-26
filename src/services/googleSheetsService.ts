
// src/services/googleSheetsService.ts

// --- CSV URL Constants ---
const SITE_CONFIG_CSV_URL = null; // Using fallbackSiteConfig for now
const HERO_CONFIG_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=567131857&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";
const ABOUT_SECTION_CONTENT_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1343173925&single=true&output=csv";
const PRINCIPAL_MESSAGE_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=222684544&single=true&output=csv"; // Updated
const HOMEPAGE_GALLERY_SWIPER_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=949430402&single=true&output=csv";
const VIDEOS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1597946854&single=true&output=csv";
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const TESTIMONIALS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=2115801643&single=true&output=csv";
const CONTACT_INFO_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1047527670&single=true&output=csv";
const GALLERY_DAYS_META_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1677460936&single=true&output=csv"; // Assuming this GID is for days meta
const GALLERY_IMAGES_TASHPAD_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=1677460936&single=true&output=csv"; // Using the same GID for images, adjust if different


// --- Fallback Data (Hardcoded) ---
export const fallbackSiteConfig: SiteConfig = {
    siteTitle: "קעמפ גן ישראל - אלעד",
    siteDescription: "חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת.",
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0",
    heroVideoId: "b2SaA1dYwl0",
    // heroImageSrc, heroImageAlt, heroImageHint are now in fallbackHeroConfigData
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true",
    paymentRedirectUrl: "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365",
    // contactOfficeAddress, contactPhoneNumber, contactEmail, contactHours are in fallbackContactInfoData
    // principalName, principalMessageParagraph1 etc. are in fallbackPrincipalMessageData
    // aboutTitle, aboutParagraph1 etc. are in fallbackAboutSectionContentData
    mainSummaryVideoId: "gqgfz0h0om4", // Remains here as a general fallback if not found in Videos sheet
    galleryPageTitle: "גלריית תמונות",
    summaryVideosPageTitle: "כל סרטוני הסיכום",
    galleryTashpadYearImage: "https://placehold.co/300x300.png?text=תשפד-שנה",
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
  imageSrc: "https://placehold.co/400x500.png?text=Principal-Static",
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
    { id: "faq1_fallback", question: "לאילו גילאים מיועד הקעמפ?", answer: "הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.", delay: "0" },
    { id: "faq2_fallback", question: "מהן שעות הפעילות בקעמפ?", answer: "שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.", delay: "50" },
    { id: "faq3_fallback", question: "האם יש צורך להביא אוכל?", answer: "לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.", delay: "100" },
    { id: "faq4_fallback", question: "איזה ציוד יש להביא לקעמפ?", answer: "רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.", delay: "150" },
    { id: "faq5_fallback", question: "מהי מדיניות הביטולים?", answer: "מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.", delay: "200" },
];

export const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: "הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום!", author: "משפחת כהן, אלעד" },
    { id: "testimonial2_fallback", quote: "זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח!", author: "משפחת לוי, פתח תקווה" },
    { id: "testimonial3_fallback", quote: "המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה!", author: "משפחת אברמוביץ, בני ברק" },
];

export const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "תמונת אווירה מהקעמפ", imageHint: "camp activities", captionTitle: "חוויה של פעם בחיים!", captionText: "מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות." },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "ילדים משחקים בקעמפ", imageHint: "children outdoors", captionTitle: "מדריכים תותחים ואווירה מיוחדת!", captionText: "הצטרפו אלינו לקיץ של כיף, חברות וערכים." },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VtbWVyJTIwY2FtcCUyMGZ1bnxlbnwwfHx8fDE3MjAwOTk4MDB8MA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: "פעילות יצירה בקעמפ", imageHint: "camp games", captionTitle: "פעילויות מגוונות", captionText: "טיולים, סדנאות, התוועדויות ועוד המון הפתעות." },
    { id: "slide4_fallback", imageSrc: "https://placehold.co/1770x1000.png", imageAlt: "תמונה נוספת לדוגמה", imageHint: "placeholder", captionTitle: "כותרת נוספת", captionText: "תיאור קצר נוסף לשקופית הזאת." },
];

export const fallbackHomePageGallerySwiper: HomePageGallerySwiperItem[] = [
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczNBtFaOAbpOMFUXx9DL4emQxGdSzYm1vjivTyDnUzlHQDWgHtaEy5K3G1OZGyAbhSIkCMkReGJOOnI2OCe_ZpjXz02f3RC4_rjHO2Sslf_pvdSJC-pbboOhWYvYjeCjXtFe9G8spEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1379-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - פעילות מים", imageHint: "camp activity" },
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczPgSy83OmgsgZDuZoPBGqd3nFunosjH2KCqQ3OhDlKeK-MkSzR4Nn70TAtyICq2UjeiCY3ic_ln5uYf0rY5SSNqC_7IkhZ0idDT5kf3wUvkecjvivzQbrwiEizm_61rjRXLVuYgnkfWcBFd1CuS4pFc=w1379-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - מדורה", imageHint: "children outdoors" },
  { imageSrc: "https://picsum.photos/seed/img4/600/400", imageAlt: "תמונה אקראית 4", imageHint: "placeholder" },
  { imageSrc: "https://lh3.googleusercontent.com/pw/AP1GczMsQ7kLfOlgRiMTNIGPg2y65mr-4ySFISouO0yBvZNufdxGztE9HoBwzJ2xNpwu-dNNd1eapdEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1225-h919-s-no-gm?authuser=0", imageAlt: "תמונה מהקעמפ - משחקים", imageHint: "camp games" },
  { imageSrc: "https://picsum.photos/seed/img5/600/400", imageAlt: "תמונה אקראית 5", imageHint: "placeholder" },
];


export const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: "שיר הנושא - קעמפ גן ישראל אלעד", category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: "המנון הקעמפ", category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום קעמפ תשפ\"ג", category: 'summaryVideo' },
    { id: 'main_summary_fallback', videoId: 'gqgfz0h0om4', title: "סרטון סיכום ראשי", category: 'mainSummaryVideo' },
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
  mainSummaryVideoId?: string;
  galleryPageTitle?: string;
  summaryVideosPageTitle?: string;
  galleryTashpadYearImage?: string; // For the main gallery page
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
    console.log(`${sheetNameForLog}: CSV URL is a placeholder, invalid, or not configured. Skipping fetch for ${sheetNameForLog}.`);
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
  if (!parsedData || parsedData.length < 1) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No parsed CSV data. Using fallback.`);
    return result; // Return original fallback if no data
  }

  const headerRow = parsedData[0].map(h => h.toLowerCase().trim());
  const keyHeaderIndex = headerRow.indexOf('key');
  const valueHeaderIndex = headerRow.indexOf('value');

  if (keyHeaderIndex === -1 || valueHeaderIndex === -1) {
    console.warn(`${sheetNameForLog} (csvToKeyValueObject): CSV missing 'key' or 'value' header. Using fallback. Headers: ${headerRow.join(',')}`);
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
    }
  }

  if (fetchedItems > 0) {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): Successfully processed ${fetchedItems} key-value pairs.`);
  } else {
    console.log(`${sheetNameForLog} (csvToKeyValueObject): No valid key-value pairs processed. Fallback will be used.`);
    return fallbackData; // Explicitly return fallback if no items were actually fetched/processed
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

  const allExpectedHeadersPresent = expectedHeadersLowerCase.every(expectedHeader => 
    headerRowLowerCase.includes(expectedHeader)
  );

  if (allExpectedHeadersPresent) {
      headerRowDetected = true;
      expectedHeadersLowerCase.forEach(expectedHeader => {
          columnMap[expectedHeader] = headerRowLowerCase.indexOf(expectedHeader);
      });
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row detected and matches expected: ${headerRowOriginal.join(',')}. Column map:`, columnMap);
  } else {
      console.log(`${sheetNameForLog} (csvToObjectsArray): CSV Header row does not fully match expected or is different. Expected one of: "${expectedHeadersLowerCase.join(', ')}", Got: "${headerRowOriginal.join(', ')}". Assuming direct data or specific parsing needed.`);
      if (sheetNameForLog === "FAQ") {
          if (headerRowOriginal.length >= 2 && !headerRowLowerCase.includes('id')) {
              console.log(`${sheetNameForLog} (csvToObjectsArray): FAQ specific - 'id' header missing. Assuming 'question' (col 0), 'answer' (col 1).`);
              columnMap['question'] = 0;
              columnMap['answer'] = 1;
              headerRowDetected = false; // No proper header for 'id', will be auto-generated
          } else {
              console.log(`${sheetNameForLog} (csvToObjectsArray): FAQ CSV structure not recognized for 2-column format. Returning fallback.`);
              return fallbackData;
          }
      } else if (sheetNameForLog === "HomePageGallerySwiper" && headerRowOriginal.length >= 1 && headerRowLowerCase.includes('imagesrc')) {
          console.log(`${sheetNameForLog} (csvToObjectsArray): HomePageGallerySwiper specific - 'imagesrc' header found. Mapping columns.`);
          columnMap['imagesrc'] = headerRowLowerCase.indexOf('imagesrc');
          if (headerRowLowerCase.includes('imagealt')) columnMap['imagealt'] = headerRowLowerCase.indexOf('imagealt');
          if (headerRowLowerCase.includes('imagehint')) columnMap['imagehint'] = headerRowLowerCase.indexOf('imagehint');
          headerRowDetected = true;
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

      if (sheetNameForLog === "FAQ" && headerString === 'id' && colIndex === undefined) {
        obj[headerKey] = `faq_csv_${i}` as any;
        continue;
      }
      
      if (colIndex !== undefined && colIndex !== -1 && colIndex < row.length) {
        const cellValue = row[colIndex];
        obj[headerKey] = cellValue as any;
        if (cellValue !== "" && cellValue !== undefined) {
            if (["question", "quote", "author", "imagesrc", "videoid", "title", "category", "captiontitle", "yearslug", "dayslug", "dayname", "thumbnail", "src", "alt"].includes(headerString)) {
                 hasEssentialData = true;
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
  // Per user request, SiteConfig is static for now.
  console.log("getSiteConfig: Returning hardcoded fallbackSiteConfig data only.");
  return fallbackSiteConfig;
}

export async function getHeroConfigData(): Promise<HeroConfigData> {
  console.log(`HeroConfig: Attempting to fetch from CSV URL: ${HERO_CONFIG_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(HERO_CONFIG_CSV_URL, "HeroConfig");
  if (parsedData) {
    const data = csvToKeyValueObject(parsedData, fallbackHeroConfigData, "HeroConfig");
    if (data && Object.keys(data).some(key => data[key] !== fallbackHeroConfigData[key])) {
      console.log("HeroConfig: Processed HeroConfigData from CSV URL.", data);
      return data;
    }
  }
  console.log("HeroConfig: Using fallbackHeroConfigData (CSV fetch/parse failed or data was same as fallback).");
  return fallbackHeroConfigData;
}

export async function getPrincipalMessageData(): Promise<PrincipalMessageData> {
  console.log(`PrincipalMessage: Attempting to fetch from CSV URL: ${PRINCIPAL_MESSAGE_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(PRINCIPAL_MESSAGE_CSV_URL, "PrincipalMessage");
  if (parsedData) {
    const data = csvToKeyValueObject(parsedData, fallbackPrincipalMessageData, "PrincipalMessage");
    if (data && Object.keys(data).some(key => data[key] !== fallbackPrincipalMessageData[key])) {
      console.log("PrincipalMessage: Processed PrincipalMessageData from CSV URL.", data);
      return data;
    }
  }
  console.log("PrincipalMessage: Using fallbackPrincipalMessageData (CSV fetch/parse failed or data was same as fallback).");
  return fallbackPrincipalMessageData;
}

export async function getAboutSectionContentData(): Promise<AboutSectionContentData> {
  console.log(`AboutSectionContent: Attempting to fetch from CSV URL: ${ABOUT_SECTION_CONTENT_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(ABOUT_SECTION_CONTENT_CSV_URL, "AboutSectionContent");
   if (parsedData) {
    const data = csvToKeyValueObject(parsedData, fallbackAboutSectionContentData, "AboutSectionContent");
    if (data && Object.keys(data).some(key => data[key] !== fallbackAboutSectionContentData[key])) {
      console.log("AboutSectionContent: Processed AboutSectionContentData from CSV URL.", data);
      return data;
    }
  }
  console.log("AboutSectionContent: Using fallbackAboutSectionContentData (CSV fetch/parse failed or data was same as fallback).");
  return fallbackAboutSectionContentData;
}

export async function getContactInfoData(): Promise<ContactInfoData> {
  console.log(`ContactInfo: Attempting to fetch from CSV URL: ${CONTACT_INFO_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(CONTACT_INFO_CSV_URL, "ContactInfo");
  if (parsedData) {
    const data = csvToKeyValueObject(parsedData, fallbackContactInfoData, "ContactInfo");
     if (data && Object.keys(data).some(key => data[key] !== fallbackContactInfoData[key])) {
        console.log("ContactInfo: Processed ContactInfoData from CSV URL.", data);
        return data;
     }
  }
  console.log("ContactInfo: Using fallbackContactInfoData (CSV fetch/parse failed or data was same as fallback).");
  return fallbackContactInfoData;
}


export async function getFaqData(): Promise<FaqItem[]> {
  console.log(`FAQ: Attempting to fetch from CSV URL: ${FAQ_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(FAQ_CSV_URL, "FAQ");
  if (parsedData) {
    const expectedHeaders: (keyof FaqItem)[] = ['id', 'question', 'answer'];
    const faqs = csvToObjectsArray(parsedData, fallbackFaqs, "FAQ", expectedHeaders);
    if (faqs.length > 0 && JSON.stringify(faqs) !== JSON.stringify(fallbackFaqs.map((f,i)=>({...f, id: f.id || `faq_csv_${i}`})))) { // Compare with potentially auto-IDed fallbacks
        console.log(`FAQ: Processed ${faqs.length} FAQ items from CSV URL.`);
        return faqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
    }
  }
  console.log("FAQ: Using fallbackFaqs (CSV fetch/parse failed or data was same as fallback).");
  return fallbackFaqs.map((faq, index) => ({ ...faq, delay: String(index * 50) }));
}


export async function getTestimonials(): Promise<Testimonial[]> {
  console.log(`Testimonials: Attempting to fetch from CSV URL: ${TESTIMONIALS_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(TESTIMONIALS_CSV_URL, "Testimonials");
  if (parsedData) {
    const testimonials = csvToObjectsArray(parsedData, fallbackTestimonials, "Testimonials", ['id', 'quote', 'author']);
    if (testimonials.length > 0 && JSON.stringify(testimonials) !== JSON.stringify(fallbackTestimonials)) {
      console.log(`Testimonials: Processed ${testimonials.length} items from CSV URL.`);
      return testimonials;
    }
  }
  console.log("Testimonials: Using fallbackTestimonials (CSV fetch/parse failed or data was same as fallback).");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  console.log(`SwiperSlides: Attempting to fetch from CSV URL: ${SWIPER_SLIDES_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(SWIPER_SLIDES_CSV_URL, "SwiperSlides");
  if (parsedData) {
    const slides = csvToObjectsArray(parsedData, fallbackSwiperSlides, "SwiperSlides", ['id', 'imageSrc', 'imageAlt', 'imageHint', 'captionTitle', 'captionText']);
     if (slides.length > 0 && JSON.stringify(slides) !== JSON.stringify(fallbackSwiperSlides)) {
      console.log(`SwiperSlides: Processed ${slides.length} items from CSV URL.`);
      return slides;
    }
  }
  console.log("SwiperSlides: Using fallbackSwiperSlides (CSV fetch/parse failed or data was same as fallback).");
  return fallbackSwiperSlides;
}

export async function getHomePageGallerySwiperData(): Promise<HomePageGallerySwiperItem[]> {
    console.log(`HomePageGallerySwiper: Attempting to fetch from CSV URL: ${HOMEPAGE_GALLERY_SWIPER_CSV_URL}`);
    const parsedData = await fetchCsvDataFromUrl(HOMEPAGE_GALLERY_SWIPER_CSV_URL, "HomePageGallerySwiper");
    if (parsedData) {
        const items = csvToObjectsArray(parsedData, fallbackHomePageGallerySwiper, "HomePageGallerySwiper", ['imageSrc', 'imageAlt', 'imageHint']);
        if (items.length > 0 && JSON.stringify(items) !== JSON.stringify(fallbackHomePageGallerySwiper)) {
            console.log(`HomePageGallerySwiper: Processed ${items.length} items from CSV.`);
            return items;
        }
    }
    console.log("HomePageGallerySwiper: Using fallbackHomePageGallerySwiper (CSV fetch/parse failed or data was same as fallback).");
    return fallbackHomePageGallerySwiper;
}

export async function getVideos(): Promise<VideoItem[]> {
  console.log(`Videos: Attempting to fetch from CSV URL: ${VIDEOS_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(VIDEOS_CSV_URL, "Videos");
  if (parsedData) {
    const videos = csvToObjectsArray(parsedData, fallbackVideos, "Videos", ['id', 'videoId', 'title', 'category']);
     if (videos.length > 0 && JSON.stringify(videos) !== JSON.stringify(fallbackVideos)) {
      console.log(`Videos: Processed ${videos.length} items from CSV URL.`);
      return videos;
    }
  }
  console.log("Videos: Using fallbackVideos (CSV fetch/parse failed or data was same as fallback).");
  return fallbackVideos;
}

export async function getGalleryYears(): Promise<GalleryYearData[]> {
  console.log("getGalleryYears: Returning hardcoded fallbackGalleryYears with updated image source from siteConfig.");
  return [
    { 
      yearSlug: "tashpad", 
      yearName: `ה'תשפ"ד`, 
      yearImage: fallbackSiteConfig.galleryTashpadYearImage || "https://placehold.co/300x300.png?text=תשפד-שנה",
      yearImageHint: "camp collage" 
    }
  ];
}

export async function getGalleryDays(): Promise<GalleryDayData[]> {
  console.log(`GalleryDaysMeta: Attempting to fetch from CSV URL: ${GALLERY_DAYS_META_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(GALLERY_DAYS_META_CSV_URL, "GalleryDaysMeta");
  if (parsedData) {
      const days = csvToObjectsArray(parsedData, [], "GalleryDaysMeta", ['daySlug', 'dayName', 'thumbnail', 'thumbnailHint']);
      if (days.length > 0) {
          console.log(`GalleryDaysMeta: Processed ${days.length} days from CSV.`);
          return days.map(d => ({ ...d, yearSlug: "tashpad" }));
      }
  }
  console.log("GalleryDaysMeta: Using fallbackGalleryDays for Tashpad (CSV fetch/parse failed or data was same as fallback).");
  return fallbackGalleryDays.filter(d => d.yearSlug === 'tashpad');
}

export async function getGalleryImages(daySlugParam?: string): Promise<GalleryImageItem[]> {
  console.log(`GalleryImages: Attempting to fetch for tashpad/${daySlugParam || 'all days'} from CSV URL: ${GALLERY_IMAGES_TASHPAD_CSV_URL}`);
  const parsedData = await fetchCsvDataFromUrl(GALLERY_IMAGES_TASHPAD_CSV_URL, "GalleryImagesTashpad");
  
  if (parsedData) {
    const images = csvToObjectsArray(parsedData, [], "GalleryImagesTashpad", ['daySlug', 'imageOrder', 'src', 'alt', 'hint'])
      .map(img => ({ ...img, yearSlug: "tashpad", imageOrder: Number(img.imageOrder) || undefined }))
      .sort((a, b) => (a.imageOrder || Infinity) - (b.imageOrder || Infinity));

    const filteredImages = daySlugParam ? images.filter(img => img.daySlug === daySlugParam) : images;

    if (filteredImages.length > 0) {
      console.log(`GalleryImages: Processed ${filteredImages.length} images for tashpad/${daySlugParam || 'all days'} from CSV.`);
      return filteredImages;
    } else {
      console.log(`GalleryImages: No images found in CSV for tashpad/${daySlugParam || 'all days'}. Returning fallback for this day/year.`);
      return fallbackGalleryImages.filter(img => img.yearSlug === 'tashpad' && (!daySlugParam || img.daySlug === daySlugParam));
    }
  }
  console.log(`GalleryImages: Using fallbackGalleryImages for tashpad/${daySlugParam || 'all days'} (CSV fetch/parse failed).`);
  return fallbackGalleryImages.filter(img => img.yearSlug === 'tashpad' && (!daySlugParam || img.daySlug === daySlugParam));
}

// --- End of googleSheetsService.ts ---
