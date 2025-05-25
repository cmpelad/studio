// src/services/googleSheetsService.ts
// Removed 'use server' directive to support static export
// import { env } from 'process'; // Removed as env is not used in current fallback implementation

// --- Fallback Data (נתוני גיבוי) ---
// These are the hardcoded values that will be used.
const fallbackSiteConfig: Record<string, string> = {
    siteTitle: `קעמפ גן ישראל - אלעד (סטטי)`,
    siteDescription: `חוויה של פעם בחיים! מחנה הקיץ הכי שווה מחכה לכם עם פעילויות מגוונות, מדריכים תותחים, ואווירה חסידית מיוחדת. (סטטי)`,
    logoImageSrc: "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0", // Stable logo
    heroVideoId: "b2SaA1dYwl0",
    heroImageSrc: "https://images.unsplash.com/photo-1560707303-11e40c4110c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMHN1bW1lciUyMGNhbXB8ZW58MHx8fHwxNzIwMDk5NzI4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    heroImageAlt: `קדימון קעמפ גן ישראל אלעד (סטטי)`,
    heroImageHint: "children summer camp",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbWwnCmWA/viewform?embedded=true", // Fixed typo in original URL
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
    mainSummaryVideoId: "gqgfz0h0om4",
    galleryPageTitle: `גלריית תמונות (סטטי)`,
    summaryVideosPageTitle: `כל סרטוני הסיכום (סטטי)`,
};

interface FaqItem { id: string; question: string; answer: string; delay?: string; }
const fallbackFaqs: FaqItem[] = [
    { id: "faq1_fallback", question: `לאילו גילאים מיועד הקעמפ? (סטטי)`, answer: `הקעמפ מיועד לבנים בגילאי ז'-ט' (בוגרי כיתות ו'-ח'). אנו שמים דגש על התאמת הפעילויות והאווירה לגילאים אלו.`, delay: "0" },
    { id: "faq2_fallback", question: `מהן שעות הפעילות בקעמפ? (סטטי)`, answer: `שעות הפעילויות הן בדרך כלל מ-09:00 בבוקר ועד 17:00 אחר הצהריים. ייתכנו ימים עם פעילויות ערב מיוחדות, עליהן תימסר הודעה מראש.`, delay: "50" },
    { id: "faq3_fallback", question: `האם יש צורך להביא אוכל? (סטטי)`, answer: `לא, הקעמפ מספק ארוחות בוקר, צהריים וערב כשרות למהדרין, וכן כיבוד קל בין הארוחות. במקרה של רגישויות מזון, יש לעדכן אותנו מראש.`, delay: "100" },
    { id: "faq4_fallback", question: `איזה ציוד יש להביא לקעמפ? (סטטי)`, answer: `רשימת ציוד מפורטת תישלח לנרשמים. באופן כללי, יש להצטייד בבגדים נוחים, כובע, בקבוק מים, קרם הגנה, ופריטים אישיים. לטיולים יש להצטייד בנעלי הליכה נוחות.`, delay: "150" },
    { id: "faq5_fallback", question: `מהי מדיניות הביטולים? (סטטי)`, answer: `מדיניות הביטולים מפורטת בתקנון ההרשמה. באופן כללי, ניתן לבטל עד תאריך מסוים ולקבל החזר חלקי או מלא, בהתאם לתנאים.`, delay: "200" },
];

interface Testimonial { id: string; quote: string; author: string;}
const fallbackTestimonials: Testimonial[] = [
    { id: "testimonial1_fallback", quote: `הבן שלי חזר מאושר מהקעמפ! הוא לא הפסיק לספר חוויות ונהנה מכל רגע. הצוות היה מדהים והפעילויות מגוונות. ממליצים בחום! (סטטי)`, author: `משפחת כהן, אלעד` },
    { id: "testimonial2_fallback", quote: `זו השנה השנייה שאנחנו שולחים את הילד לקעמפ גן ישראל אלעד, וכל פעם מחדש אנחנו מתרשמים מהמקצועיות, מהאווירה החסידית ומההשקעה בכל פרט. יישר כח! (סטטי)`, author: `משפחת לוי, פתח תקווה` },
    { id: "testimonial3_fallback", quote: `המדריכים בקעמפ פשוט אלופים! הם יצרו קשר אישי וחם עם הילדים, והיוו עבורם דוגמה אישית. הילד שלנו מחכה כבר לשנה הבאה. תודה רבה! (סטטי)`, author: `משפחת אברמוביץ, בני ברק` },
];

interface SwiperSlideItem { id: string; imageSrc: string; imageAlt: string; imageHint?: string; captionTitle: string; captionText: string;}
const fallbackSwiperSlides: SwiperSlideItem[] = [
    { id: "slide1_fallback", imageSrc: "https://images.unsplash.com/photo-1542868187-c40917f680a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwzfHxzdW1tZXIlMjBjYW1wJTIwY2hpbGRyZW58ZW58MHx8fHwxNzIwMDk5NjUxfDA&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 1 (סטטי)`, imageHint: "camp activities", captionTitle: `חוויה של פעם בחיים! (סטטי)`, captionText: `מחנה הקיץ הכי שווה מחכה לכם עם מגוון פעילויות.` },
    { id: "slide2_fallback", imageSrc: "https://images.unsplash.com/photo-1504829857107-4acf85189b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwyfHxzdW1tZXIlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 2 (סטטי)`, imageHint: "children outdoors", captionTitle: `מדריכים תותחים ואווירה מיוחדת! (סטטי)`, captionText: `הצטרפו אלינו לקיץ של כיף, חברות וערכים.` },
    { id: "slide3_fallback", imageSrc: "https://images.unsplash.com/photo-1600904332802-915c1a0600a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAzNzV8MHwxfHNlYXJjaHwxMHx8c3VmmrlMjBjYW1wJTIwZnVufGVufDB8fHx8MTcyMDA5OTgwMHww&ixlib=rb-4.0.3&q=80&w=1080", imageAlt: `תמונת אווירה 3 (סטטי)`, imageHint: "camp games", captionTitle: `פעילויות מגוונות ומרתקות! (סטטי)`, captionText: `טיולים, סדנאות, התוועדויות ועוד המון הפתעות.` },
];

interface VideoItem { id: string; videoId: string; title: string; category: 'campSong' | 'summaryVideo' | string; }
const fallbackVideos: VideoItem[] = [
    { id: 'song1_fallback', videoId: '6aRI-emxQlU', title: `שיר הנושא - קעמפ גן ישראל (סטטי)`, category: 'campSong' },
    { id: 'song2_fallback', videoId: 'jNQXAC9IVRw', title: `המנון הקעמפ (דוגמה סטטית)`, category: 'campSong' },
    { id: 'summary1_fallback', videoId: 'gqgfz0h0om4', title: `סרטון סיכום קעמפ תשפ"ג (סטטי)`, category: 'summaryVideo' }, // Using template literal
];

interface GalleryYearData { yearSlug: string; yearName: string; yearImage: string; yearImageHint?: string; }
const fallbackGalleryYears: GalleryYearData[] = [
  { yearSlug: "tashpad-fallback", yearName: `ה'תשפ"ד (סטטי)`, yearImage: "https://placehold.co/300x300.png?text=Static-2024", yearImageHint: "camp collage" }, // Using template literal
  { yearSlug: "tashpag-fallback", yearName: `ה'תשפ"ג (סטטי)`, yearImage: "https://placehold.co/300x300.png?text=Static-2023", yearImageHint: "group photo" }, // Using template literal
];
interface GalleryDayData { yearSlug: string; daySlug: string; dayName: string; thumbnail: string; thumbnailHint?: string; }
const fallbackGalleryDays: GalleryDayData[] = [
  { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", dayName: `היום הראשון (סטטי)`, thumbnail: "https://placehold.co/400x300.png?text=Static-D1-24", thumbnailHint: "camp activity" }, // Using template literal
  { yearSlug: "tashpad-fallback", daySlug: "day2-fallback", dayName: `היום השני (סטטי)`, thumbnail: "https://placehold.co/400x300.png?text=Static-D2-24", thumbnailHint: "outdoor fun" }, // Using template literal
  { yearSlug: "tashpag-fallback", daySlug: "day1-fallback", dayName: `פתיחת הקעמפ (סטטי)`, thumbnail: "https://placehold.co/400x300.png?text=Static-D1-23", thumbnailHint: "opening event" }, // Using template literal
];
interface GalleryImageItem { yearSlug: string; daySlug: string;  imageOrder?: number; src: string; alt: string; hint?: string; }
const fallbackGalleryImages: GalleryImageItem[] = [
  { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1-24", alt: `תמונה 1 סטטית 2024`, hint: "children fun" }, // Using template literal
  { yearSlug: "tashpad-fallback", daySlug: "day1-fallback", imageOrder: 2, src: "https://placehold.co/600x400.png?text=Static-Img2-24", alt: `תמונה 2 סטטית 2024`, hint: "group photo" }, // Using template literal
  { yearSlug: "tashpag-fallback", daySlug: "day1-fallback", imageOrder: 1, src: "https://placehold.co/600x400.png?text=Static-Img1-23", alt: `תמונה 1 סטטית 2023`, hint: "camp opening" }, // Using template literal
];

// --- CSV URLs (Keeping these defined but commented out or unused in functions below for now) ---
const FAQ_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=837718949&single=true&output=csv";
const SWIPER_SLIDES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdu5OVnpJHTBZyDZLNCLqZWhztXbZoJL5jdeWUKU396N9E7yQkOvOd7iorxy_8xaIAp0aBI9IEsX_F/pub?gid=421516172&single=true&output=csv";
// Add other CSV URLs if needed, e.g., for Videos, GalleryYears, GalleryDays, GalleryImages

// --- Data Fetching Functions ---

// These functions will now run on the server during build or request (for non-static pages)

export async function getSiteConfig(): Promise<Record<string, string>> {
  console.log("getSiteConfig: Returning hardcoded fallbackSiteConfig data only.");
  return fallbackSiteConfig;
}

export async function getFaqData(): Promise<FaqItem[]> {
  console.log("getFaqData: Returning hardcoded fallbackFaqs.");
  return fallbackFaqs;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  console.log("getTestimonials: Returning hardcoded fallbackTestimonials.");
  return fallbackTestimonials;
}

export async function getSwiperSlides(): Promise<SwiperSlideItem[]> {
  console.log("getSwiperSlides: Returning hardcoded fallbackSwiperSlides.");
  return fallbackSwiperSlides;
}

export async function getVideos(): Promise<VideoItem[]> {
  console.log("getVideos: Returning hardcoded fallbackVideos.");
  return fallbackVideos;
}

export async function getGalleryYears(): Promise<GalleryYearData[]> {
    console.log("getGalleryYears: Returning hardcoded fallbackGalleryYears.");
    return fallbackGalleryYears;
}
export async function getGalleryDays(): Promise<GalleryDayData[]> {
    console.log("getGalleryDays: Returning hardcoded fallbackGalleryDays.");
    return fallbackGalleryDays;
}
export async function getGalleryImages(): Promise<GalleryImageItem[]> {
    console.log("getGalleryImages: Returning hardcoded fallbackGalleryImages.");
    return fallbackGalleryImages;
}
